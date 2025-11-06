'use client';

import Link from 'next/link';

const newsLinks = [
  {
    slug: 'tokyo-project-adoption',
    title: '東京都スタートアップ協働プロジェクトに採択',
    summary: '公共事業DXと建築・製造業のデータ活用を推進する取り組み。',
  },
  {
    slug: 'archaive-2-1-release',
    title: 'AIプラットフォーム「ARCHAIVE 2.1」提供開始',
    summary: '見積自動化と図面検索の新バージョンを2025年10月より提供。',
  },
  {
    slug: 'ai-agent-release',
    title: '製造業AIエージェントをリリース',
    summary: '会話型データ検索で図面・帳票ナレッジを即活用。',
  },
  {
    slug: 'logistics-newspaper',
    title: '日本物流新聞での掲載',
    summary: '物流業界で注目されたARCHAIVEの取り組み。',
  },
  {
    slug: 'industrial-newspaper',
    title: '日刊工業新聞での掲載',
    summary: '製造業DX事例としてメディア掲載された内容。',
  },
  {
    slug: 'presentation-achievement',
    title: '登壇実績のご報告',
    summary: 'イベント登壇や講演での最新トピックを紹介。',
  },
];

export function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const related = newsLinks.filter((item) => item.slug !== currentSlug).slice(0, 3);

  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">他のお知らせも読む</h2>
        <p className="text-gray-600 mb-6">最新リリースやメディア掲載情報をチェックして、ARCHAIVEの最新動向をキャッチアップしましょう。</p>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="block h-full rounded-xl border border-gray-200 p-4 hover:border-[#37B7C4] hover:shadow-md transition-all"
            >
              <p className="text-sm text-[#37B7C4] font-semibold mb-2">{item.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.summary}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/news"
            className="px-5 py-2 rounded-full border border-[#37B7C4] text-[#37B7C4] font-semibold hover:bg-[#37B7C4]/10"
          >
            お知らせ一覧へ戻る
          </Link>
          <Link
            href="/case"
            className="px-5 py-2 rounded-full bg-[#37B7C4] text-white font-semibold hover:bg-[#2a8b96]"
          >
            導入事例も見る
          </Link>
        </div>
      </div>
    </section>
  );
}
