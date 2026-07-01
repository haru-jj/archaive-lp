// お知らせ（プレスリリース・メディア掲載）の一元データ。
// /news 一覧ページとトップの Press Release セクションで共用する。新しい順で並べる。

export type NewsTagType = 'press' | 'newspaper';

export interface NewsTag {
  label: string;
  type: NewsTagType;
}

export interface NewsItem {
  date: string;
  tags: NewsTag[];
  content: string;
  link: string;
  image?: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    date: '2025年10月30日',
    tags: [{ label: 'プレスリリース', type: 'press' }],
    content:
      'ARCHAIVEが東京都スタートアップ協働プロジェクトに採択 〜公共事業DXと建築土木業・製造業のデータ活用を推進〜',
    link: '/news/tokyo-project-adoption',
    image: '/news/ARCHAIVE_Tokyo.webp',
  },
  {
    date: '2025年09月08日',
    tags: [{ label: 'プレスリリース', type: 'press' }],
    content:
      '製造業のDXを加速するAIプラットフォーム「ARCHAIVE 2.1」を2025年10月1日より提供開始',
    link: '/news/archaive-2-1-release',
    image:
      'https://archaive.net/news/142139-12-db5647717e97f2603463709ff7136c46-1600x900.jpeg',
  },
  {
    date: '2025年07月28日',
    tags: [{ label: 'プレスリリース', type: 'press' }],
    content:
      '業界初、「探す」から「話す」へ。ARCHAIVE、製造業AIエージェント「チャット型データ検索機能」をリリース',
    link: '/news/ai-agent-release',
    image:
      'https://archaive.net/news/142139-11-5216d3335c660b5c6b7e0ceaae4f56d0-2068x1160.jpeg',
  },
  {
    date: '2025年03月05日',
    tags: [{ label: '新聞', type: 'newspaper' }],
    content: '日本物流新聞で取り上げられました',
    link: '/news/logistics-newspaper',
  },
  {
    date: '2025年03月01日',
    tags: [{ label: '新聞', type: 'newspaper' }],
    content: '日刊工業新聞で取り上げられました',
    link: '/news/industrial-newspaper',
  },
  {
    date: '2024年12月21日',
    tags: [{ label: 'プレスリリース', type: 'press' }],
    content: '登壇実績',
    link: '/news/presentation-achievement',
  },
];

// プレスリリースのみ（新しい順）
export const PRESS_RELEASES = NEWS_ITEMS.filter((n) =>
  n.tags.some((t) => t.type === 'press'),
);
