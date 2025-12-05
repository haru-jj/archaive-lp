import { Header, Footer } from '@/components/layout';
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
  const allNewsItems = [
    {
      date: '2025年10月30日',
      tags: [
        { label: 'プレスリリース', type: 'press' }
      ],
      content: 'ARCHAIVEが東京都スタートアップ協働プロジェクトに採択 〜公共事業DXと建築土木業・製造業のデータ活用を推進〜',
      link: '/news/tokyo-project-adoption'
    },
    {
      date: '2025年09月08日',
      tags: [
        { label: 'プレスリリース', type: 'press' }
      ],
      content: '製造業のDXを加速するAIプラットフォーム「ARCHAIVE 2.1」を2025年10月1日より提供開始',
      link: '/news/archaive-2-1-release'
    },
    {
      date: '2025年07月28日',
      tags: [
        { label: 'プレスリリース', type: 'press' }
      ],
      content: '業界初、「探す」から「話す」へ。ARCHAIVE、製造業AIエージェント「チャット型データ検索機能」をリリース',
      link: '/news/ai-agent-release'
    },
    {
      date: '2025年03月05日',
      tags: [
        { label: '新聞', type: 'newspaper' }
      ],
      content: '日本物流新聞で取り上げられました',
      link: '/news/logistics-newspaper'
    },
    {
      date: '2025年03月01日',
      tags: [
        { label: '新聞', type: 'newspaper' }
      ],
      content: '日刊工業新聞で取り上げられました',
      link: '/news/industrial-newspaper'
    },
    {
      date: '2024年12月21日',
      tags: [
        { label: 'プレスリリース', type: 'press' }
      ],
      content: '登壇実績',
      link: '/news/presentation-achievement'
    }
  ];

  const getTagColor = (type: string) => {
    return 'bg-[#37B7C4]';
  };

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
    <div className="font-noto-sans-jp">
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
                          className={`inline-block px-2 py-1 sm:px-3 sm:py-1 rounded-full text-white text-xs ${getTagColor(tag.type)} whitespace-nowrap`}
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

          {/* CTAセクション */}
          <div className="mt-12 sm:mt-16 text-center bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 rounded-lg">
            <h2 className="text-lg sm:text-xl font-bold text-[#333333] mb-4">
              ARCHAIVEについて詳しく知りたい方へ
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              製造業向けAIナレッジ検索システムの詳細や導入事例について、お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <Link 
                href="/download" 
                className="bg-transparent border-2 border-[#37B7C4] text-[#37B7C4] rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-bold hover:bg-[#37B7C4] hover:text-white transition-all duration-300"
              >
                サービス紹介資料
              </Link>
              <Link 
                href="/apply" 
                className="bg-[#37B7C4] text-white rounded-lg px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-bold hover:bg-[#37B7C4]/90 transition-all duration-300"
              >
                無料デモの申込み
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
