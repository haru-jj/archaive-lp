'use client';

export default function SolutionSection() {
  const problems = [
    {
      title: "図面や価格・仕様書などの検索に時間がかかり、コストが増大",
      description: "過去の類似実績や仕様を再利用できず、毎回ゼロからの調査に多大な時間が費やされている。"
    },
    {
      title: "業務やデータが属人化している",
      description: "見積もり根拠やトラブル対処法などの重要な情報が、特定の担当者の経験や記憶に依存し、会社のノウハウが失われ続けている。"
    },
    {
      title: "「設計」「調達」「営業」「製造」等で繰り返される確認作業と手戻り",
      description: "部門間のやり取りや手戻りにかかる見えにくい時間が、確実に会社のコストを圧迫している。"
    }
  ];

  const solutions = [
    {
      after: "AIと対話するだけで、欲しいデータが5秒で見つかる",
      detail: "「厚さ5mmのSUS304を使ったブラケット図面は？」といった自然な対話で、AIが意図を汲み取り、最適な候補を瞬時に提示する。"
    },
    {
      after: "ベテランも新人も、すぐに同一情報に辿り着ける",
      detail: "ベテランの頭の中にあった知見を、誰もがアクセスできる「会社の資産」に変え、新任者でも的確な判断を可能にする。"
    },
    {
      after: "社内のデータが一元管理・見える化され、部門間の壁を超える",
      detail: "ARCHAIVEがハブとなり、全部門の情報がリアルタイムに連携。開発スピードを劇的に向上させる。"
    }
  ];

  return (
    <section className="-mt-6 pb-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#37B7C4]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#37B7C4]/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto max-w-[1400px] relative z-10">
        
        {/* Before/After 統合表示 */}
        <div className="bg-white p-8 rounded-xl">
          <div className="flex items-stretch justify-center gap-0">
            {/* Before - 3つの課題 */}
            <div className="w-[52%] bg-gray-200 py-8 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] text-gray-800 z-10">
              <div className="px-8 mr-16 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-8 text-center">導入前</h3>
                <div className="flex flex-col justify-between flex-1">
                  {problems.map((problem, idx) => (
                    <div key={idx} className="flex items-start gap-4 min-h-[140px] py-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-base">
                        {idx + 1}
                      </div>
                      <div className="flex-1 pr-4">
                        <h4 className="font-bold text-base mb-2 leading-relaxed">{problem.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{problem.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Center - ARCHAIVE with chevrons */}
            <div className="-mx-24 z-20 flex items-center">
              {/* Left chevron */}
              <svg className="w-16 h-16 text-gray-600 -mr-4" fill="none" stroke="currentColor" strokeWidth="5" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7" />
              </svg>
              
              <div className="bg-white rounded-full p-8">
                <div className="w-24 h-24 bg-[#37B7C4] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-4xl">A</span>
                </div>
                <p className="text-base font-bold text-[#37B7C4] text-center">
                  ARCHAIVE
                </p>
              </div>
              
              {/* Right chevron */}
              <svg className="w-16 h-16 text-[#37B7C4] -ml-4" fill="none" stroke="currentColor" strokeWidth="5" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
            {/* After - 3つの解決策 */}
            <div className="w-[52%] bg-[#37B7C4]/10 py-8 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] text-gray-800 z-10">
              <div className="px-8 ml-16 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-8 text-center text-[#37B7C4]">導入後</h3>
                <div className="flex flex-col justify-between flex-1">
                  {solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-start gap-4 min-h-[140px] py-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#37B7C4] text-white rounded-full flex items-center justify-center font-bold text-base">
                        {idx + 1}
                      </div>
                      <div className="flex-1 pr-4">
                        <h4 className="font-bold text-base mb-2 text-[#37B7C4] leading-relaxed">{solution.after}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{solution.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="bg-gray-800 text-white text-center py-4 px-8 rounded-b-lg -mx-8 -mb-8 mt-8">
            <p className="text-lg">
              <span className="text-white font-bold text-2xl">業務効率の大幅改善</span>
              <span className="text-gray-300">と</span>
              <span className="text-white font-bold text-2xl">組織知識の最大活用</span>
              <span className="text-gray-300">を実現！</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}