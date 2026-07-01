// LP本文で選択された語 → 対応するガイド記事への誘導用の辞書とマッチャ。
// クライアント安全（fs 不使用）。GuideTermHinter から利用する。
// 誤誘導を避けるため、語は手動キュレート。数値の placeholder 記事 (plm-alternative-sme) には送らない。

export interface GuideTerm {
  slug: string;
  /** チップに表示する代表ラベル */
  label: string;
  /** 選択ゆれを吸収するエイリアス（正規化前の表記でOK） */
  aliases: string[];
}

export const GUIDE_TERMS: GuideTerm[] = [
  { slug: 'drawing-management', label: '図面管理', aliases: ['図面管理', '図面管理とは'] },
  { slug: 'drawing-management-system', label: '図面管理システム', aliases: ['図面管理システム', '図面管理ソフト'] },
  { slug: 'ai-drawing-management', label: 'AI図面管理', aliases: ['AI図面管理', 'AIによる図面管理'] },
  { slug: 'drawing-search', label: '図面検索', aliases: ['図面検索', '図面の検索'] },
  { slug: 'cloud-drawing-management', label: 'クラウド図面管理', aliases: ['クラウド図面管理', 'クラウドでの図面管理'] },
  { slug: 'drawing-management-howto', label: '図面管理システムの選び方', aliases: ['図面管理システムの選び方', '図面管理の選び方'] },
  { slug: 'similar-search', label: '類似図面検索', aliases: ['類似図面検索', '類似検索', '類似形状検索'] },
  { slug: 'ai-ocr', label: 'AI-OCR', aliases: ['AI-OCR', 'AIOCR', 'OCR'] },
  { slug: 'diff-detection', label: '差分検出・図面比較', aliases: ['差分検出', '図面比較', '差分', '改訂比較'] },
  { slug: 'voucher-generation', label: '帳票生成', aliases: ['帳票生成', '帳票', '帳票作成'] },
  { slug: 'project-management', label: '案件管理', aliases: ['案件管理'] },
  { slug: 'drawing-number', label: '図番', aliases: ['図番', '図面番号'] },
  { slug: 'block-count', label: '員数', aliases: ['員数', '員数管理'] },
  { slug: 'bom', label: '部品表（BOM）', aliases: ['BOM', '部品表'] },
  { slug: 'revision-management', label: '版管理（リビジョン管理）', aliases: ['版管理', 'リビジョン管理', 'リビジョン', '改訂管理'] },
  { slug: 'cad-data-management', label: 'CADデータ管理', aliases: ['CADデータ管理', 'CADデータ', 'CAD管理'] },
  { slug: 'drawing-numbering-rule', label: '図番採番ルール', aliases: ['図番採番ルール', '採番ルール', '採番'] },
  { slug: 'drawing-attribution', label: '図面の属人化', aliases: ['属人化', '図面の属人化'] },
  { slug: 'file-server-limit', label: 'ファイルサーバー管理の限界', aliases: ['ファイルサーバー', 'ファイルサーバ', '共有フォルダ'] },
  { slug: 'excel-drawing-limit', label: 'Excel図面管理の限界', aliases: ['Excel図面管理', 'エクセル図面管理', 'エクセル'] },
  { slug: 'paper-drawing-digitization', label: '紙図面の電子化', aliases: ['紙図面の電子化', '紙図面', '紙の図面', '電子化'] },
  { slug: 'design-reuse', label: '設計流用', aliases: ['設計流用', '流用', '図面流用'] },
  { slug: 'tech-succession-2025', label: '技術伝承・2025年問題', aliases: ['技術伝承', '技能伝承', '2025年問題'] },
  { slug: 'plm-pdm-difference', label: 'PLM・PDMと図面管理の違い', aliases: ['PLM・PDM'] },

  // クラスター② PLM・BOM
  { slug: 'plm-alternative-sme', label: '中小製造業のPLM代替', aliases: ['PLM代替', '中小製造業のPLM代替'] },
  { slug: 'plm', label: 'PLM', aliases: ['PLM'] },
  { slug: 'pdm', label: 'PDM', aliases: ['PDM'] },
  { slug: 'erp', label: 'ERP', aliases: ['ERP'] },
  { slug: 'production-management-system', label: '生産管理システム', aliases: ['生産管理システム', '生産管理', 'MES', 'MRP'] },
  { slug: 'product-lifecycle-management', label: '製品ライフサイクル管理', aliases: ['製品ライフサイクル管理'] },
  { slug: 'ebom-mbom', label: '設計BOMと製造BOMの違い', aliases: ['設計BOM', '製造BOM', 'E-BOM', 'M-BOM'] },
  { slug: 'design-change-management', label: '設計変更管理', aliases: ['設計変更管理', '設計変更', 'ECR', 'ECO'] },
  { slug: 'configuration-management', label: '構成管理', aliases: ['構成管理'] },
  { slug: 'traceability', label: 'トレーサビリティ', aliases: ['トレーサビリティ'] },

  // クラスター③ 類似検索・AI
  { slug: 'tacit-knowledge-ai', label: '暗黙知を形式知化するAI', aliases: ['暗黙知', '形式知', '暗黙知の形式知化'] },
  { slug: 'shape-search', label: '形状検索・3D類似検索', aliases: ['形状検索', '3D類似検索'] },
  { slug: 'vector-search', label: '特徴量・ベクトル検索', aliases: ['ベクトル検索', '特徴量'] },
  { slug: 'semantic-search', label: 'セマンティック検索', aliases: ['セマンティック検索'] },
  { slug: 'nl-search', label: '自然言語検索・チャット型検索', aliases: ['自然言語検索', 'チャット型検索'] },
  { slug: 'rag', label: 'RAG（検索拡張生成）', aliases: ['RAG', '検索拡張生成'] },
  { slug: 'generative-ai-manufacturing', label: '生成AIと製造業', aliases: ['生成AI'] },
  { slug: 'ai-agent', label: 'AIエージェント', aliases: ['AIエージェント'] },
  { slug: 'ai-estimation', label: 'AI見積・自動見積', aliases: ['AI見積', '自動見積'] },
  { slug: 'knowledge-management', label: 'ナレッジマネジメント', aliases: ['ナレッジマネジメント'] },

  // クラスター⑥ 建設業
  { slug: 'construction-drawing-management', label: '建設業の図面管理', aliases: ['建設業の図面管理', '建設の図面管理'] },
  { slug: 'architectural-structural-mep-drawings', label: '意匠図・構造図・設備図', aliases: ['意匠図', '構造図', '設備図', '意匠図・構造図・設備図'] },
  { slug: 'property-management', label: '物件管理・物件ツリー', aliases: ['物件管理', '物件ツリー'] },
  { slug: 'construction-zone', label: '工区', aliases: ['工区'] },
  { slug: 'construction-plan', label: '施工計画書', aliases: ['施工計画書', '施工計画'] },
  { slug: 'subcontractor-management', label: '協力会社管理', aliases: ['協力会社管理', '協力会社'] },
  { slug: 'similar-construction-search', label: '類似物件・類似工事検索', aliases: ['類似物件検索', '類似工事検索', '類似物件', '類似工事'] },
  { slug: 'drawing-revision-management', label: '図面改訂管理', aliases: ['図面改訂管理', '図面改訂'] },

  // クラスター⑦ セキュリティ規格
  { slug: 'information-leak-prevention', label: '情報漏洩対策', aliases: ['情報漏洩対策', '情報漏洩', '漏洩対策'] },
  { slug: 'iso27001-isms', label: 'ISO 27001・ISMS', aliases: ['ISO 27001', 'ISO27001', 'ISMS'] },
  { slug: 'aes-256', label: 'AES-256暗号化', aliases: ['AES-256', 'AES256', 'AES-256暗号化'] },
  { slug: 'tls-13', label: 'TLS 1.3', aliases: ['TLS 1.3', 'TLS1.3', 'TLS'] },
  { slug: 'rbac', label: 'RBAC（ロールベースアクセス制御）', aliases: ['RBAC', 'ロールベースアクセス制御', 'アクセス制御'] },
  { slug: 'redundancy-high-availability', label: '冗長化・高可用性', aliases: ['冗長化', '高可用性'] },
  { slug: 'backup-data-protection', label: '自動バックアップ・データ保護', aliases: ['自動バックアップ', 'バックアップ', 'データ保護'] },
  { slug: 'secure-cloud-aws', label: 'セキュアクラウド・AWS', aliases: ['セキュアクラウド', 'AWS'] },

  // クラスター⑧ 連携・データ基盤
  { slug: 'api-integration', label: 'API連携', aliases: ['API連携', 'API'] },
  { slug: 'cad-integration', label: 'CAD連携', aliases: ['CAD連携'] },
  { slug: 'erp-integration', label: 'ERP連携', aliases: ['ERP連携', 'ERP'] },
  { slug: 'data-migration', label: 'データ移行', aliases: ['データ移行'] },
  { slug: 'ai-ocr-datafication', label: 'AI-OCRによるデータ化', aliases: ['AI-OCRによるデータ化', 'データ化'] },
  { slug: 'supported-file-formats', label: '対応ファイル形式', aliases: ['対応ファイル形式', 'ファイル形式', 'DXF', 'STEP'] },

  // クラスター⑨ ARCHAIVE機能
  { slug: 'spec-management', label: '仕様書管理', aliases: ['仕様書管理', '仕様書'] },
  { slug: 'parts-information-management', label: '部品情報管理', aliases: ['部品情報管理', '部品情報'] },
  { slug: 'enterprise-search', label: '社内ドキュメント検索', aliases: ['エンタープライズサーチ', '社内ドキュメント検索', '社内検索'] },
  { slug: 'manufacturing-project-management', label: '製造業の案件管理', aliases: ['製造業の案件管理'] },
  { slug: '3d-cad', label: '3D CAD', aliases: ['3D CAD', '3DCAD'] },
  { slug: 'document-generation-ai', label: 'ドキュメント生成AI', aliases: ['ドキュメント生成AI', '文書生成AI'] },
  { slug: 'sales-management-system', label: '販売管理システム', aliases: ['販売管理システム', '販売管理'] },
  { slug: 'crm', label: 'CRM（顧客関係管理）', aliases: ['CRM', '顧客関係管理'] },
  { slug: 'rpa', label: 'RPA', aliases: ['RPA'] },
  { slug: 'etl', label: 'ETL', aliases: ['ETL', 'データ連携・変換'] },
  { slug: 'production-scheduler', label: '生産スケジューラ', aliases: ['生産スケジューラ'] },
  { slug: 'modular-system', label: 'モジュール型システム', aliases: ['モジュール型システム', 'コンポーザブル'] },
  { slug: 'custom-app-development', label: '業務アプリ開発（内製化）', aliases: ['業務アプリ開発', '内製化'] },

  // A. DX・経営の上位概念
  { slug: 'dx', label: 'DX', aliases: ['DX', 'デジタルトランスフォーメーション'] },
  { slug: 'manufacturing-dx', label: '製造業DX', aliases: ['製造業DX'] },
  { slug: 'smart-factory', label: 'スマートファクトリー', aliases: ['スマートファクトリー'] },
  { slug: 'industry-4-0', label: 'インダストリー4.0', aliases: ['インダストリー4.0', '第4次産業革命'] },
  { slug: 'paperless', label: 'ペーパーレス', aliases: ['ペーパーレス'] },

  // B. AIの土台語
  { slug: 'machine-learning', label: '機械学習', aliases: ['機械学習', 'マシンラーニング'] },
  { slug: 'deep-learning', label: 'ディープラーニング', aliases: ['ディープラーニング', '深層学習'] },
  { slug: 'llm', label: 'LLM（大規模言語モデル）', aliases: ['LLM', '大規模言語モデル'] },
  { slug: 'hallucination', label: 'ハルシネーション', aliases: ['ハルシネーション'] },
  { slug: 'computer-vision', label: 'コンピュータビジョン', aliases: ['コンピュータビジョン', '画像認識'] },
  { slug: 'multimodal-ai', label: 'マルチモーダルAI', aliases: ['マルチモーダルAI'] },

  // C. データ・情報基盤
  { slug: 'unstructured-data', label: '非構造化データ', aliases: ['非構造化データ'] },
  { slug: 'data-silo', label: 'データサイロ', aliases: ['データサイロ'] },
  { slug: 'metadata', label: 'メタデータ', aliases: ['メタデータ'] },
  { slug: 'mdm', label: 'マスタデータ管理（MDM）', aliases: ['マスタデータ管理', 'MDM'] },
  { slug: 'saas', label: 'SaaS', aliases: ['SaaS', 'サース'] },

  // D. 製造・生産システム
  { slug: 'scm', label: 'SCM（サプライチェーンマネジメント）', aliases: ['SCM', 'サプライチェーンマネジメント'] },
  { slug: 'workflow', label: 'ワークフロー（電子承認）', aliases: ['ワークフロー', '電子承認'] },
  { slug: 'cae', label: 'CAE（解析）', aliases: ['CAE'] },
  { slug: 'cam', label: 'CAM（製造）', aliases: ['CAM'] },

  // E. 製造・設計の現場概念
  { slug: 'iot', label: 'IoT', aliases: ['IoT', 'モノのインターネット'] },
  { slug: 'digital-twin', label: 'デジタルツイン', aliases: ['デジタルツイン'] },
  { slug: 'predictive-maintenance', label: '予知保全', aliases: ['予知保全', '予兆保全'] },
  { slug: 'quality-control', label: '品質管理（QC）', aliases: ['品質管理', 'QC'] },
  { slug: 'front-loading', label: 'フロントローディング', aliases: ['フロントローディング'] },

  // F. 建設DX
  { slug: 'bim', label: 'BIM', aliases: ['BIM'] },
  { slug: 'cim', label: 'CIM', aliases: ['CIM'] },
  { slug: 'i-construction', label: 'i-Construction', aliases: ['i-Construction', 'アイコンストラクション'] },
  { slug: 'construction-management', label: '施工管理', aliases: ['施工管理'] },
  { slug: 'estimation', label: '積算', aliases: ['積算'] },
];

// 末尾に付きやすい助詞（選択ゆれ吸収）
const TRAILING_PARTICLES = ['を', 'は', 'が', 'の', 'に', 'へ', 'で', 'と', 'も', 'や', 'ね', 'よ', 'か', 'な', 'さ'];

function normalize(s: string): string {
  return s
    .trim()
    .replace(/[\s　]/g, '') // 空白除去
    .replace(/^[「『（(【[]+/, '') // 先頭の括弧
    .replace(/[」』）)】\]。、，．,.!?！？]+$/g, '') // 末尾の括弧・句読点
    .toLowerCase();
}

// 正規化済みエイリアス → term（キー長の降順 = 最長一致を優先）
const ALIAS_INDEX: { key: string; term: GuideTerm }[] = GUIDE_TERMS.flatMap((term) =>
  term.aliases.map((a) => ({ key: normalize(a), term })),
).sort((a, b) => b.key.length - a.key.length);

/** 選択文字列が既知のガイド用語に一致すれば {slug,label} を返す。なければ null。 */
export function matchGuideTerm(raw: string): { slug: string; label: string } | null {
  if (!raw) return null;
  let s = normalize(raw);

  // 末尾の助詞を剥がす（残りが2文字以上のときだけ）
  let changed = true;
  while (changed && s.length > 2) {
    changed = false;
    for (const p of TRAILING_PARTICLES) {
      if (s.endsWith(p)) {
        s = s.slice(0, -p.length);
        changed = true;
        break;
      }
    }
  }

  if (s.length < 2 || s.length > 24) return null;

  // 完全一致
  for (const a of ALIAS_INDEX) {
    if (a.key === s) return { slug: a.term.slug, label: a.term.label };
  }
  // 選択語の先頭が用語に一致（最長優先・用語が選択の50%以上を占める場合のみ）
  for (const a of ALIAS_INDEX) {
    if (s.startsWith(a.key) && a.key.length / s.length >= 0.5) {
      return { slug: a.term.slug, label: a.term.label };
    }
  }
  return null;
}
