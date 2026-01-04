'use client';

export default function NewsSection() {
  const newsItems = [
    {
      date: '2025年10月30日',
      tags: [
        { label: 'プレスリリース', type: 'press' }
      ],
      content: 'ARCHAIVEが東京都スタートアップ協働プロジェクトに採択 〜公共事業DXと建築土木業・製造業のデータ活用を推進〜',
      link: '/news/tokyo-project-adoption',
      image: '/news/ARCHAIVE_Tokyo.webp',
    },
    {
      date: '2025年09月08日',
      tags: [
        { label: 'プレスリリース', type: 'press' }
      ],
      content: '製造業のDXを加速するAIプラットフォーム「ARCHAIVE 2.1」を2025年10月1日より提供開始',
      link: '/news/archaive-2-1-release',
      image: 'https://archaive.net/news/142139-12-db5647717e97f2603463709ff7136c46-1600x900.jpeg',
    },
    {
      date: '2025年07月28日',
      tags: [
        { label: 'プレスリリース', type: 'press' }
      ],
      content: '業界初、「探す」から「話す」へ。ARCHAIVE、製造業AIエージェント「チャット型データ検索機能」をリリース',
      link: '/news/ai-agent-release',
      image: 'https://archaive.net/news/142139-11-5216d3335c660b5c6b7e0ceaae4f56d0-2068x1160.jpeg',
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

  const getTagColor = (_type: string) => {
    return 'bg-[#37B7C4]';
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-[#37B7C4]/5 relative overflow-hidden" id="news">
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

      <div className="mx-auto w-full relative z-10 px-4 sm:px-6 lg:px-10 max-w-none">
        {/* セクションタイトル */}
        <div className="text-center mb-8 sm:mb-10 relative">
          <p className="text-sm font-semibold text-[#37B7C4] mb-3">News</p>
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
        <div className="w-full">
          <div className="grid gap-6 lg:gap-8 md:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,26vw))] justify-center w-full mx-auto">
            {newsItems.slice(0, 3).map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/70 overflow-hidden transition-transform duration-300 hover:-translate-y-1 w-full"
              >
                <div className="relative w-full bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.content}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 sm:p-6 flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="bg-[#37B7C4]/10 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      {item.date}
                    </div>
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-white text-xs font-semibold shadow ${getTagColor(tag.type)}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <p className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-[#37B7C4] transition-colors leading-relaxed">
                    {item.content}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#37B7C4]">
                    詳細を見る
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* もっと見るボタン */}
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white border-2 border-[#37B7C4] text-[#37B7C4] rounded-full font-bold hover:bg-[#37B7C4] hover:text-white btn-hover group relative overflow-hidden text-sm sm:text-base"
            >
              {/* ボタン内装飾 */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#37B7C4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <span className="relative z-10">すべてのニュースを見る</span>
              <svg
                className="w-5 h-5 group-icon-right relative z-10"
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
