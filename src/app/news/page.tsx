import { Header, Footer } from '@/components/layout';
import { CTASection } from '@/components/feature';
import { NEWS_ITEMS } from '@/lib/news';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お知らせ一覧｜ARCHAIVE最新情報',
  description:
    'ARCHAIVEのプレスリリースやメディア掲載、イベント情報をまとめた最新ニュース一覧ページです。',
  keywords: ['ARCHAIVEニュース', 'プレスリリース', '製造業DXニュース', 'AI見積最新情報'],
  alternates: {
    canonical: 'https://archaive.net/news',
  },
  openGraph: {
    title: 'お知らせ一覧｜ARCHAIVE最新情報',
    description:
      '製造業DXを支援するARCHAIVEの最新情報を掲載。新機能リリースやメディア掲載をいち早くご確認ください。',
    url: 'https://archaive.net/news',
  },
  twitter: {
    card: 'summary',
    title: 'お知らせ一覧｜ARCHAIVE最新情報',
    description: 'ARCHAIVEのプレスリリース・イベント・メディア掲載情報を一覧で紹介しています。',
  },
};

export default function NewsListPage() {
  const allNewsItems = NEWS_ITEMS;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'トップ',
        item: 'https://archaive.net/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'お知らせ',
        item: 'https://archaive.net/news',
      },
    ],
  };

  return (
    <div className="font-noto-sans-jp bg-white min-h-screen">
      <Header />
      <main className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <div className="container mx-auto max-w-6xl px-4 py-8 sm:py-16">
          {/* パンくずナビ */}
          <nav className="mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#37B7C4]">トップ</Link>
              <span>/</span>
              <span className="text-gray-900">お知らせ</span>
            </div>
          </nav>

          {/* ページタイトル */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              お知らせ
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              ARCHAIVEに関する最新情報をお届けします
            </p>
          </div>

          {/* ニュース一覧 */}
          <div className="max-w-4xl mx-auto">
            {allNewsItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="block border-b border-gray-300 py-4 sm:py-6 hover:bg-gray-50 transition-colors duration-200 px-2 sm:px-4"
              >
                <div className="news-item">
                  {/* 日付とタグ - レスポンシブ */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <div className="font-bold text-gray-800 text-sm sm:text-base">
                      {item.date}
                    </div>
                    {/* タグ */}
                    <div className="flex gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block px-2 py-1 sm:px-3 sm:py-1 rounded-full text-white text-xs bg-[#37B7C4] whitespace-nowrap"
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* コンテンツ */}
                  <div className="text-base sm:text-lg font-bold text-gray-700 hover:text-[#37B7C4] transition-colors leading-relaxed">
                    {item.content}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ページネーション（将来的に実装） */}
          <div className="mt-12 text-center">
            <p className="text-gray-500">
              {/* ページネーションは必要に応じて実装 */}
            </p>
          </div>

        </div>
      </main>
      <CTASection />
      <Footer />
    </div>
  );
}
