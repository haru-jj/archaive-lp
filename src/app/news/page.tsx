'use client';

import Header from '@/components/lp_new/Header';
import Footer from '@/components/lp_new/Footer';
import Link from 'next/link';

export default function NewsListPage() {
  const allNewsItems = [
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

  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto max-w-6xl px-4 py-16">
          {/* パンくずナビ */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#37B7C4]">トップ</Link>
              <span>/</span>
              <span className="text-gray-900">お知らせ</span>
            </div>
          </nav>

          {/* ページタイトル */}
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              お知らせ
            </h1>
            <p className="text-lg text-gray-600">
              ARCHAIVEに関する最新情報をお届けします
            </p>
          </div>

          {/* ニュース一覧 */}
          <div className="max-w-4xl mx-auto">
            {allNewsItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="block border-b border-gray-300 py-6 hover:bg-gray-50 transition-colors duration-200 px-4"
              >
                <div className="news-item">
                  {/* 日付とタグ */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="font-bold text-gray-800">
                      {item.date}
                    </div>
                    {/* タグ */}
                    <div className="flex gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`inline-block px-3 py-1 rounded-full text-white text-xs ${getTagColor(tag.type)}`}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* コンテンツ */}
                  <div className="text-lg font-bold text-gray-700 hover:text-[#37B7C4] transition-colors">
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
          <div className="mt-16 text-center bg-gray-50 py-12 px-6 rounded-lg">
            <h2 className="text-xl font-bold text-[#333333] mb-4">
              ARCHAIVEについて詳しく知りたい方へ
            </h2>
            <p className="text-gray-600 mb-6">
              製造業向けAIナレッジ検索システムの詳細や導入事例について、お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link 
                href="/download" 
                className="bg-transparent border-2 border-[#37B7C4] text-[#37B7C4] rounded-lg px-6 py-3 text-base font-bold hover:bg-[#37B7C4] hover:text-white transition-all duration-300"
              >
                サービス紹介資料
              </Link>
              <Link 
                href="/apply" 
                className="bg-[#37B7C4] text-white rounded-lg px-6 py-3 text-base font-bold hover:bg-[#37B7C4]/90 transition-all duration-300"
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