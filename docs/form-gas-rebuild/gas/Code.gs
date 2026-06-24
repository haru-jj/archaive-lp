/**
 * ARCHAIVE LP フォーム受信 GAS（資料請求 / 無料トライアル申し込み）
 *
 * このスクリプトは LP の /api/submit-form から POST を受け取り、
 *   1. スプレッドシートに1行追記
 *   2. 管理者に通知メールを送信
 *   3. （任意）申込者へ自動返信メールを送信
 * を行い、JSON を返す。
 *
 * ■ 設計の前提（= 現行 LP コードが実際に送ってくる内容）
 *   - src/app/api/submit-form/route.ts が turnstileToken を除いた JSON をそのまま転送する
 *   - 共通: formType, companyName, name, department, position, email, phone
 *   - download 固有: inquiryContent（課題・複数→', '結合）, inquiryDetails（任意）
 *   - apply   固有: employeeCount, purpose（目的・複数→', '結合）, message（任意）
 *   ※ 旧スクリプトは download で lastName/firstName を読んでいたが、
 *     現行フォームは「氏名」を name 1項目で送る。ここでは name で受ける。
 *
 * ■ LP が期待するレスポンス（route.ts より）
 *   成功: { "success": true,  "message": "..." }  （HTTP 200）
 *   失敗: { "success": false, "error":   "..." }
 *
 * ■ 設定（属人化を避けるため、メール宛先等はコード直書きせず
 *   「プロジェクトの設定 > スクリプト プロパティ」で管理する）
 *   - NOTIFICATION_EMAIL : 管理者通知の宛先。カンマ区切りで複数可。（必須）
 *   - AUTO_REPLY_ENABLED  : 'true' で申込者へ自動返信を送る（任意 / 既定 false）
 *   - DOWNLOAD_ASSET_URL  : 資料請求の自動返信に載せる資料DLリンク（任意）
 */

// ===== シート名（スプレッドシートのタブ名と一致させる）=====
const SHEET_DOWNLOAD = '資料請求';
const SHEET_APPLY = '無料トライアル';

// ===== ヘッダー定義（CSV と同じ並び）=====
const HEADERS_DOWNLOAD = [
  '送信日時', '会社名', '氏名', '部署', '役職',
  'メールアドレス', '電話番号', '現在抱えている課題', 'お問い合わせ詳細',
];
const HEADERS_APPLY = [
  '送信日時', '会社名', '氏名', '部署', '役職',
  'メールアドレス', '電話番号', '従業員数', 'ご検討の目的', 'ご質問・ご要望',
];

/**
 * LP からの POST エントリポイント
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonOutput({ success: false, error: 'リクエストボディがありません。' });
    }

    const data = JSON.parse(e.postData.contents);
    const formType = data.formType;

    if (formType !== 'download' && formType !== 'apply') {
      return jsonOutput({ success: false, error: 'formType が不正です。' });
    }

    // 最低限のサーバ側バリデーション（多重防御）
    if (!data.companyName || !data.email) {
      return jsonOutput({ success: false, error: '必須項目（会社名・メールアドレス）が入力されていません。' });
    }

    const now = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss');
    let rowData;

    if (formType === 'download') {
      const sheet = getOrCreateSheet(SHEET_DOWNLOAD, HEADERS_DOWNLOAD);
      rowData = [
        now,
        data.companyName || '',
        data.name || '',
        data.department || '',
        data.position || '',
        data.email || '',
        data.phone || '',
        data.inquiryContent || '',
        data.inquiryDetails || '',
      ];
      sheet.appendRow(rowData);
    } else {
      const sheet = getOrCreateSheet(SHEET_APPLY, HEADERS_APPLY);
      rowData = [
        now,
        data.companyName || '',
        data.name || '',
        data.department || '',
        data.position || '',
        data.email || '',
        data.phone || '',
        data.employeeCount || '',
        data.purpose || '',
        data.message || '',
      ];
      sheet.appendRow(rowData);
    }

    // 通知メール（失敗してもスプシ記録は守るため try/catch で握る）
    try {
      sendNotificationEmail(formType, rowData);
    } catch (mailErr) {
      console.error('通知メール送信失敗:', mailErr);
    }

    // 申込者への自動返信（任意）
    if (getProp('AUTO_REPLY_ENABLED') === 'true') {
      try {
        sendAutoReply(formType, data);
      } catch (replyErr) {
        console.error('自動返信メール送信失敗:', replyErr);
      }
    }

    return jsonOutput({
      success: true,
      message: formType === 'download'
        ? '資料請求を受け付けました。'
        : '無料トライアルのお申し込みを受け付けました。2-3営業日以内にご返信いたします。',
    });

  } catch (error) {
    console.error('doPost エラー:', error);
    return jsonOutput({
      success: false,
      error: 'データの保存に失敗しました。しばらく経ってから再度お試しください。',
    });
  }
}

/**
 * 動作確認用。デプロイ後にブラウザで /exec を開くと表示される。
 */
function doGet() {
  return jsonOutput({ success: true, message: 'ARCHAIVE form endpoint is alive.' });
}

// ====================== ヘルパー ======================

function getOrCreateSheet(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function jsonOutput(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getProp(key) {
  return PropertiesService.getScriptProperties().getProperty(key);
}

/**
 * 管理者向け通知メール
 */
function sendNotificationEmail(formType, rowData) {
  const recipient = getProp('NOTIFICATION_EMAIL');
  if (!recipient) {
    throw new Error('スクリプトプロパティ NOTIFICATION_EMAIL が未設定です。');
  }

  const isDownload = formType === 'download';
  const subject = `ARCHAIVE - 新しい${isDownload ? '資料請求' : '無料トライアル申し込み'}があります`;
  const headers = isDownload ? HEADERS_DOWNLOAD : HEADERS_APPLY;
  const ssUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();

  let rows = '';
  for (let i = 0; i < headers.length; i++) {
    rows +=
      '<tr>' +
      '<td style="padding:8px 12px;background:#f8f9fa;border:1px solid #dee2e6;font-weight:bold;white-space:nowrap;">' + headers[i] + '</td>' +
      '<td style="padding:8px 12px;border:1px solid #dee2e6;white-space:pre-wrap;">' + escapeHtml(rowData[i] || '') + '</td>' +
      '</tr>';
  }

  const htmlBody =
    '<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:20px;">' +
      '<h2 style="color:#333;border-bottom:2px solid #37B7C4;padding-bottom:10px;">' +
        '新しい' + (isDownload ? '資料請求' : '無料トライアル申し込み') +
      '</h2>' +
      '<table style="border-collapse:collapse;width:100%;margin:16px 0;">' + rows + '</table>' +
      '<div style="margin-top:24px;padding-top:16px;border-top:1px solid #dee2e6;color:#666;font-size:12px;">' +
        '<p>このメールは ARCHAIVE LP のフォームから自動送信されました。</p>' +
        '<p>スプレッドシート: <a href="' + ssUrl + '">フォーム管理シートを開く</a></p>' +
      '</div>' +
    '</div>';

  GmailApp.sendEmail(recipient, subject, stripHtml(htmlBody), { htmlBody: htmlBody });
}

/**
 * 申込者への自動返信（AUTO_REPLY_ENABLED='true' のときのみ）
 */
function sendAutoReply(formType, data) {
  const to = data.email;
  if (!to) return;

  const isDownload = formType === 'download';
  const name = data.name || 'ご担当者';
  const assetUrl = getProp('DOWNLOAD_ASSET_URL') || '';

  const subject = isDownload
    ? '【ARCHAIVE】資料請求ありがとうございます'
    : '【ARCHAIVE】無料トライアルのお申し込みありがとうございます';

  let body;
  if (isDownload) {
    body =
      name + ' 様\n\n' +
      'この度は ARCHAIVE の資料をご請求いただき、誠にありがとうございます。\n' +
      (assetUrl
        ? '下記より資料をダウンロードいただけます。\n' + assetUrl + '\n\n'
        : '担当者より資料をお送りいたします。今しばらくお待ちください。\n\n') +
      'ご不明な点がございましたら、本メールにご返信ください。\n\n' +
      '━━━━━━━━━━━━━━━━━━\nARCHAIVE\n━━━━━━━━━━━━━━━━━━';
  } else {
    body =
      name + ' 様\n\n' +
      'この度は ARCHAIVE の無料トライアルにお申し込みいただき、誠にありがとうございます。\n' +
      '担当者より 2-3 営業日以内にご連絡させていただきます。今しばらくお待ちください。\n\n' +
      'ご不明な点がございましたら、本メールにご返信ください。\n\n' +
      '━━━━━━━━━━━━━━━━━━\nARCHAIVE\n━━━━━━━━━━━━━━━━━━';
  }

  GmailApp.sendEmail(to, subject, body);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * 手動テスト用。エディタ上でこの関数を実行すると、
 * download / apply のダミーデータでシート追記＋通知メールを確認できる。
 */
function testInsert() {
  const downloadSample = {
    postData: { contents: JSON.stringify({
      formType: 'download',
      companyName: '株式会社テスト',
      name: '山田 太郎',
      department: '設計部',
      position: '部門長',
      email: 'test@example.com',
      phone: '03-0000-0000',
      inquiryContent: '図面検索業務の効率化, その他',
      inquiryDetails: 'テスト投入です。',
    }) },
  };
  Logger.log(doPost(downloadSample).getContent());
}
