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
