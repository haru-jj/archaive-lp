'use client';

export default function NewsSection() {
  const newsItems = [
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
    <section className="py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-[#37B7C4]/5 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 装飾的な要素 */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#37B7C4]/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#37B7C4]/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s', animationDuration: '3s'}} />

        {/* 情報フローライン */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="newsFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#37B7C4" stopOpacity="0"/>
              <stop offset="50%" stopColor="#37B7C4" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#37B7C4" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,300 Q200,200 400,300 Q600,400 800,300" stroke="url(#newsFlow)" strokeWidth="2" fill="none" strokeDasharray="8,4">
            <animate attributeName="stroke-dashoffset" values="0;24" dur="4s" repeatCount="indefinite"/>
          </path>
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* セクションタイトル */}
        <div className="text-center mb-8 sm:mb-10 relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4 relative">
            お知らせ
            {/* アンダーライン装飾 */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-[#37B7C4] to-transparent rounded-full"></div>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            ARCHAIVEの最新情報、メディア掲載、イベント情報をお届けします
          </p>
        </div>

        {/* ニュース一覧 */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 overflow-hidden">
            {newsItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block border-b border-gray-200/50 last:border-b-0 py-6 hover:bg-[#37B7C4]/5 transition-all duration-300 px-6 group relative overflow-hidden"
              >
                {/* ホバー時の装飾 */}
                <div className="absolute left-0 top-0 h-full w-1 bg-[#37B7C4] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

                <div className="news-item relative z-10">
                  {/* 日付、タグ、タイトルを1列に */}
                  <div className="flex items-center gap-6">
                    {/* 日付 */}
                    <div className="font-bold text-gray-800 flex-shrink-0 relative">
                      <div className="bg-[#37B7C4]/10 rounded-lg px-3 py-2 group-hover:bg-[#37B7C4]/20 transition-colors">
                        {item.date}
                      </div>
                    </div>

                    {/* タグ */}
                    <div className="flex gap-2 flex-shrink-0">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`inline-block px-4 py-2 rounded-full text-white text-xs w-32 text-center ${getTagColor(tag.type)} shadow-sm group-hover:shadow-md transition-shadow relative overflow-hidden`}
                        >
                          {/* タグ内装飾 */}
                          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <span className="relative z-10">{tag.label}</span>
                        </span>
                      ))}
                    </div>

                    {/* コンテンツ（タイトル） */}
                    <div className="text-lg font-bold text-gray-700 group-hover:text-[#37B7C4] transition-colors flex-1 relative">
                      {item.content}

                      {/* 矢印アイコン */}
                      <svg className="inline-block ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* もっと見るボタン */}
          <div className="text-center mt-12">
            <a
              href="/news"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#37B7C4] text-[#37B7C4] rounded-xl font-bold hover:bg-[#37B7C4] hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              {/* ボタン内装飾 */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#37B7C4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <span className="relative z-10">すべてのニュースを見る</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}