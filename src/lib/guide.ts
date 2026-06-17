// ガイド記事（図面管理クラスター）のコンテンツ読み込み層。
// 施策意図: 記事は Markdown（フロントマター付き）で管理し、構造化ブロックは
// フロントマターのフィールドとして持つ。本文(prose)のみ markdown 本体で書く。
// これにより SEO/AEO で機械抽出しやすい構造を保ちつつ、量産は .md 追加だけで済む。
//
// サーバー専用（fs を使う）。クライアントコンポーネントから import しないこと。
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

export type ArticleType = 'pillar' | 'spoke';

export interface FaqItem {
  q: string;
  a: string;
}

/** 定義ブロック: 見出し直後の1文定義＋補足、最後に一次データ（数値＋出典運用） */
export interface DefinitionData {
  term: string;
  body: string;
  /** 一次データ（数値）。数値を載せる場合は frontmatter.sources に出典が必須 */
  datapoint?: string;
}

/** 判断表: 列見出し・行見出しを持つ通常テーブル（AIが骨格に使える構造優先） */
export interface JudgeTable {
  columns: string[];
  /** 各列の意味色（ok=肯定 / mid=中庸 / warn=注意）。省略時は無装飾 */
  columnTypes?: Array<'ok' | 'mid' | 'warn'>;
  rows: Array<{ head: string; cells: string[] }>;
}

export interface CaseItem {
  name: string;
  result: string;
  desc?: string;
  href?: string;
}

export interface CtaData {
  heading?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

/** フロントマター定義（4.1） */
export interface Frontmatter {
  slug: string;
  title: string;
  description: string;
  type: ArticleType;
  cluster: string;
  order?: number;
  related?: string[];
  faq?: FaqItem[];
  sources?: string[];
  updated?: string;
  /** true で診断ツール埋め込み。文字列なら診断コンフィグID（既定 'plm-alternative'） */
  diagnosis?: boolean | string;

  // --- ピラー用の構造化ブロック（任意） ---
  eyebrow?: string;
  lead?: string;
  definition?: DefinitionData;
  judgeTable?: JudgeTable;
  callout?: string;
  cases?: CaseItem[];
  cta?: CtaData;
}

export interface Article extends Frontmatter {
  /** markdown 本文（prose のみ） */
  body: string;
}

export interface SpokeGroup {
  label: string;
  slugs: string[];
}

export interface Cluster {
  id: string;
  name: string;
  pillars: string[];
  /** spokeGroups から自動で平坦化された全 spoke slug */
  spokes: string[];
  /** 一覧ページ表示用のグループ（基礎/コア機能/現場概念/課題文脈）(F1) */
  spokeGroups: SpokeGroup[];
  startOrder?: string[];
  /** 6.4 重複注意: 他クラスターと定義が重なる spoke。定義文を複製しない運用 */
  duplicates?: string[];
}

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');
const GUIDE_DIR = path.join(CONTENT_DIR, 'guide');
const CLUSTERS_FILE = path.join(CONTENT_DIR, 'clusters.yml');

function readArticleFile(filePath: string): Article {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const fm = data as Frontmatter;
  // slug はファイル名を正とし、frontmatter 未指定でも解決できるようにする
  const fileSlug = path.basename(filePath, path.extname(filePath));
  return {
    ...fm,
    slug: fm.slug || fileSlug,
    type: fm.type || 'spoke',
    body: content.trim(),
  };
}

/** 全ガイド記事を取得（order 昇順 → title） */
export function getAllArticles(): Article[] {
  if (!fs.existsSync(GUIDE_DIR)) return [];
  return fs
    .readdirSync(GUIDE_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => readArticleFile(path.join(GUIDE_DIR, f)))
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.title.localeCompare(b.title, 'ja'));
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(GUIDE_DIR)) return [];
  return fs
    .readdirSync(GUIDE_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => path.basename(f, '.md'));
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(GUIDE_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return readArticleFile(filePath);
}

let clustersCache: Record<string, Cluster> | null = null;

/** クラスター定義（clusters.yml）を取得。一覧・内部リンク・パンくずの生成元 */
export function getClusters(): Record<string, Cluster> {
  if (clustersCache) return clustersCache;
  if (!fs.existsSync(CLUSTERS_FILE)) {
    clustersCache = {};
    return clustersCache;
  }
  const raw = fs.readFileSync(CLUSTERS_FILE, 'utf8');
  const parsed = (yaml.load(raw) || {}) as {
    clusters?: Record<
      string,
      Omit<Cluster, 'id' | 'spokes'> & { spokes?: string[] }
    >;
  };
  const out: Record<string, Cluster> = {};
  for (const [id, c] of Object.entries(parsed.clusters || {})) {
    const spokeGroups = c.spokeGroups || [];
    // spokes は spokeGroups から平坦化（明示の spokes があればそれを優先）
    const spokes = c.spokes || spokeGroups.flatMap((g) => g.slugs);
    out[id] = { id, ...c, spokeGroups, spokes };
  }
  clustersCache = out;
  return out;
}

export function getCluster(id: string): Cluster | null {
  return getClusters()[id] ?? null;
}

/** 記事が属するクラスター */
export function getClusterForArticle(article: Frontmatter): Cluster | null {
  return getCluster(article.cluster);
}

/** related フロントマター＋ピラー⇔spoke の相互リンクを解決して記事配列を返す */
export function getRelatedArticles(article: Article): Article[] {
  const all = getAllArticles();
  const bySlug = new Map(all.map((a) => [a.slug, a]));
  const slugs = new Set<string>();

  (article.related || []).forEach((s) => slugs.add(s));

  const cluster = getClusterForArticle(article);
  if (cluster) {
    if (article.type === 'spoke') {
      // spoke → 所属クラスターのピラーへ
      cluster.pillars.forEach((s) => slugs.add(s));
    } else {
      // pillar → 配下 spoke へ
      cluster.spokes.forEach((s) => slugs.add(s));
    }
  }

  slugs.delete(article.slug);
  return Array.from(slugs)
    .map((s) => bySlug.get(s))
    .filter((a): a is Article => Boolean(a));
}

/** クラスター内のピラー記事（存在するものだけ） */
export function getPillars(cluster: Cluster): Article[] {
  return cluster.pillars
    .map((s) => getArticleBySlug(s))
    .filter((a): a is Article => Boolean(a));
}

/** クラスター内の spoke 記事（存在するものだけ） */
export function getSpokes(cluster: Cluster): Article[] {
  return cluster.spokes
    .map((s) => getArticleBySlug(s))
    .filter((a): a is Article => Boolean(a));
}
