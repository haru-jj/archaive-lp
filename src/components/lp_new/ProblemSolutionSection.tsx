'use client';
import Image from 'next/image';

export default function ProblemSolutionSection() {
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
    <section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#37B7C4]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#37B7C4]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-[1400px] relative z-10">
        {/* セクションタイトル */}
        <div className="text-center mb-2 relative z-30">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">
            こんなDX推進・AI活用の課題はありませんか？
          </h2>
        </div>
        
        {/* Before/After 統合表示 */}
        <div className="p-8 rounded-xl">
          <div className="relative flex items-stretch justify-center gap-8">
            {/* Before - 3つの課題 */}
            <div className="w-[46%] bg-gray-200 py-8 rounded-xl text-gray-800 z-10 shadow-[-16px_8px_16px_rgba(0,0,0,0.15)]">
              <div className="px-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-8 text-center">導入前</h3>
                <div className="flex flex-col justify-between flex-1">
                  {problems.map((problem, idx) => (
                    <div key={idx} className="flex items-start gap-4 min-h-[140px] py-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                        </svg>
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
            
            {/* Center - ARCHAIVE */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-gray-50 rounded-b-full p-10 pb-5">
                <div className="w-32 h-16 bg-gray-50 flex items-center justify-center mx-auto">
                  <Image
                    src="/images/Group.png"
                    alt="ARCHAIVE"
                    width={140}
                    height={46}
                  />
                </div>
              </div>
            </div>
            
            {/* Single middle arrow */}
            <div className="absolute inset-0 pointer-events-none z-30">
              {/* Middle Arrow Only */}
              <div 
                className="absolute top-[50%] left-[46%] w-[8%] -translate-y-1/2 opacity-0 animate-fade-in"
                style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
              >
                <div className="flex items-center justify-center">
                  <svg className="w-16 h-12 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <style jsx>{`
              @keyframes fade-in {
                from {
                  opacity: 0;
                  transform: translateX(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
              
              .animate-fade-in {
                animation: fade-in 0.8s ease-out;
              }
            `}</style>
            
            {/* After - 3つの解決策 */}
            <div className="w-[46%] bg-[#37B7C4]/10 py-8 rounded-xl text-gray-800 z-10 shadow-[16px_8px_16px_rgba(0,0,0,0.15)]">
              <div className="px-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-8 text-center text-[#37B7C4]">導入後</h3>
                <div className="flex flex-col justify-between flex-1">
                  {solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-start gap-4 min-h-[140px] py-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#37B7C4] text-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                        </svg>
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