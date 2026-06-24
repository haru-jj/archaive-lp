# ハンドオフ手順書 — フォーム受信 GAS の新規構築

資料請求 (`/download`) と 無料トライアル (`/apply`) のフォーム送信を復旧するための作業手順。
**管理用アカウント**（個人アカウントではなく、退職しても消えない会社共有アカウント）で作業すること。

所要時間: 約 15〜20 分。コードを書く必要はなく、貼り付け＋設定＋デプロイのみ。

---

## なぜ壊れたか（背景）

- フォーム送信は LP → `/api/submit-form` → **GAS の Web アプリ** → スプレッドシート + 通知メール、という構成。
- その GAS / スプレッドシートが **退職者の個人 Google アカウント所有** だった。
- アカウント削除に伴い Web アプリのデプロイごと消滅 → エンドポイントが **HTTP 410 Gone** を返し、全フォームが送信失敗に。
- 旧 GAS の通知先も個人 Gmail（`yamashita98syota@gmail.com`）固定で属人化していた。

→ 今回は **会社共有アカウント** + **通知先をスクリプトプロパティ管理** にして再発を防ぐ。

---

## STEP 1. スプレッドシートを作る

1. 管理用アカウントで Google スプレッドシートを新規作成（名前例: `ARCHAIVE フォーム管理`）。
2. シートのタブを2つ用意し、名前を次の通りにする（GAS のシート名と一致させる必要がある）:
   - `資料請求`
   - `無料トライアル`
   - ※ 作らなくても GAS が初回送信時に自動生成する。手で作る場合は `sheets/*.csv` のヘッダーを1行目に入れる。

## STEP 2. GAS を貼り付ける

1. そのスプレッドシートで **拡張機能 → Apps Script** を開く。
2. デフォルトの `コード.gs` の中身を全消しして、`gas/Code.gs` の内容を貼り付け、保存。
   - （任意）`appsscript.json` を表示する設定にしている場合は `gas/appsscript.json` の内容も反映可。なくても動く。

## STEP 3. スクリプトプロパティを設定する（属人化防止の肝）

Apps Script 画面左の **⚙ プロジェクトの設定 → スクリプト プロパティ → プロパティを追加**：

| プロパティ | 値 | 必須 |
|-----------|----|----|
| `NOTIFICATION_EMAIL` | 通知を受け取る宛先。カンマ区切りで複数可（例: `sales@archaive.jp,info@archaive.jp`） | ✅ 必須 |
| `AUTO_REPLY_ENABLED` | 申込者に自動返信したいなら `true`。不要なら未設定 or `false` | 任意 |
| `DOWNLOAD_ASSET_URL` | 資料請求の自動返信に載せる資料DLリンク。本サイトに同梱済み（下記）。例: `https://<本番ドメイン>/documents/archaive-service-introduction.pdf` | 任意 |

### 資料PDF（ダウンロードリンク）について

サービス紹介資料 PDF は **LP リポジトリに同梱**している（方法B）。

- 配置: `public/documents/archaive-service-introduction.pdf`
- 公開URL（本番デプロイ後に有効）: `https://<本番ドメイン>/documents/archaive-service-introduction.pdf`
- `AUTO_REPLY_ENABLED=true` で自動返信を使う場合、`DOWNLOAD_ASSET_URL` に上記の公開URLを設定する。
- **資料を差し替える時**: 同じファイル名で `public/documents/archaive-service-introduction.pdf` を上書きし、サイトを再デプロイする（URL は変わらない）。ファイル名を変えた場合は `DOWNLOAD_ASSET_URL` も更新すること。

> `NOTIFICATION_EMAIL` を会社の共有アドレス／配信リストにしておくと、担当者が代わっても設定変更不要。

## STEP 4. 権限承認（初回のみ）

1. 関数選択で `testInsert` を選び **実行**。
2. 「承認が必要です」→ 管理用アカウントで承認（スプレッドシート操作・メール送信の権限）。
3. `資料請求` シートにテスト行が増え、`NOTIFICATION_EMAIL` 宛に通知メールが届けば OK。
4. 確認後、テスト行は手で削除してよい。

## STEP 5. Web アプリとしてデプロイ

1. 右上 **デプロイ → 新しいデプロイ → 種類: ウェブアプリ**。
2. 設定:
   - **次のユーザーとして実行**: `自分`（＝管理用アカウント）
   - **アクセスできるユーザー**: **`全員`** ← ここが「自分のみ」だと LP から **403** で弾かれる（最重要）
3. デプロイ → 表示される **ウェブアプリ URL**（`https://script.google.com/macros/s/XXXX/exec`）をコピー。

> 以後コードを直したら、**「デプロイを管理」→ 既存デプロイを編集して新バージョンを反映**すること。
> 「新しいデプロイ」を作ると URL（ID）が変わり、env の再差し替えが必要になる。

## STEP 6. LP 側の環境変数を差し替える

1. `.env.local`（ローカル）の `GAS_WEB_APP_URL` を STEP 5 の URL に更新。
2. 本番（Vercel 等のホスティング）の環境変数 `GAS_WEB_APP_URL` も同じ URL に更新し、**再デプロイ**。
   - 関連 env: `TURNSTILE_SECRET_KEY` / `NEXT_PUBLIC_TURNSTILE_SITE_KEY`（bot 対策。既存設定を流用）。

## STEP 7. 疎通確認

- ローカル: `npm run dev` で `/download` と `/apply` から実際に送信し、シート追記＋通知メールを確認。
- 直接 GAS を叩く確認（ターミナル）:

```bash
curl -L -X POST -H "Content-Type: application/json" \
  -d '{"formType":"download","companyName":"接続テスト","name":"山田 太郎","email":"test@example.com","phone":"000","inquiryContent":"図面検索業務の効率化","inquiryDetails":"疎通確認"}' \
  'https://script.google.com/macros/s/XXXX/exec'
# => {"success":true,"message":"資料請求を受け付けました。"} が返れば OK
```

- 本番: 公開 URL の `/download` `/apply` から1件ずつ送って到達確認。

---

## チェックリスト

- [ ] スプレッドシートは**会社共有アカウント**所有になっている（個人アカウント不可）
- [ ] シート名が `資料請求` / `無料トライアル`
- [ ] `NOTIFICATION_EMAIL` を設定した（共有アドレス推奨）
- [ ] `testInsert` で権限承認済み・通知メール受信を確認
- [ ] デプロイの「アクセスできるユーザー = 全員」
- [ ] `.env.local` と本番の `GAS_WEB_APP_URL` を更新・再デプロイ
- [ ] `/download` `/apply` 双方で実送信テスト成功

---

## トラブルシュート

| 症状 | 原因 | 対処 |
|------|------|------|
| LP で「送信に失敗しました」 | GAS URL 誤り / 未デプロイ | `GAS_WEB_APP_URL` を確認、再デプロイ |
| GAS が **403 アクセス拒否** | デプロイのアクセス権が「全員」でない | STEP 5-2 を修正して再デプロイ |
| GAS が **410 Gone** | 旧デプロイ（消滅済み）を指している | 新デプロイ URL に差し替え |
| 通知メールが来ない | `NOTIFICATION_EMAIL` 未設定 / 迷惑メール | プロパティ確認、迷惑メールフォルダ確認 |
| シートに姓名が空 | 旧 GAS の `lastName/firstName` 参照 | 新 Code.gs は `name` 1項目で受けるので解消済み |
| 認証に失敗しました | Turnstile トークン未取得/秘密鍵不整合 | `TURNSTILE_*` env を確認 |

---

## 将来の課題（任意）

- **お問い合わせフォーム**: `useContactForm` / `/api/contact` は現状どこからも使われていない死にコード。
  復活させるなら、(a) ページに組み込む、(b) `/api/contact` を `/api/submit-form` と同様に GAS 転送へ書き換える（formType を増やしてシートを追加）、のどちらかが必要。
- GAS 依存を脱したい場合は、将来的に Resend/SendGrid 等のメール API + DB(スプシ→Sheets API or DB) へ移行する選択肢もある（別タスク）。
