'use client';

import Link from 'next/link';

export default function HeroSectionSplit() {
  return (
    <div className="transition-all duration-500">
      <section className="relative h-[calc(80vh-64px)] bg-[#37B7C4]">
        {/* 背景画像 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/images/background_geometric.png')" }}
        ></div>
        {/* 白い台形エリア */}
        <div 
          className="absolute bg-white"
          style={{
            top: '0%',
            right: '0%',
            width: '100%',
            height: '100%',
            clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 80% 100%)',
            zIndex: 8
          }}
        ></div>
        {/* メインカラーの半透明オーバーレイ */}
        <div 
          className="absolute inset-0 bg-[#2A8B96]/40"
          style={{ zIndex: 6 }}
        ></div>
        <div className="container mx-auto px-4 py-16 relative z-10 h-full overflow-visible">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px] overflow-visible">
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:ml-16 lg:mr-0">
              <div className="mb-6">
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight" style={{lineHeight: '1.5'}}>
                1枚の図面/帳票から<br />
                社内の全ナレッジをAI活用
              </h1>
              <div className="mb-10">
                <p className="text-xl md:text-2xl text-white mb-4 font-semibold" style={{lineHeight: '1.5'}}>
                  AIにより、「誰でも」「早く」「正確な」見積りを実現。
                </p>
                <p className="text-base md:text-lg text-white/90 font-semibold" style={{lineHeight: '1.5'}}>
                  眠るデータを"資産"へ。製造業DXの新常識、はじまる。
                </p>
              </div>
              <div className="flex flex-col gap-4 max-w-md mx-auto lg:ml-0 lg:mr-auto">
                <Link href="/download" className="bg-white border-2 border-white rounded-lg text-[#37B7C4] px-12 py-4 text-lg font-bold cursor-pointer flex items-center justify-center w-full hover:bg-gray-50 hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:translate-x-2 animate-pulse-cta group">
                  <span className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-2">
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                    <span className="transition-all duration-300 group-hover:tracking-wide">メールで資料を受け取る</span>
                  </span>
                </Link>
                <Link href="/apply" className="bg-transparent border-2 border-white text-white rounded-lg px-12 py-4 text-lg font-bold cursor-pointer flex items-center justify-center w-full hover:bg-white/10 hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:translate-x-2 animate-bounce-slow group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="flex items-center gap-2 relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span className="transition-all duration-300 group-hover:tracking-wide">デモを無料体験！</span>
                  </span>
                </Link>
              </div>

              <style jsx>{`
                @keyframes pulse-cta {
                  0%, 100% {
                    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
                  }
                  50% {
                    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
                  }
                }

                @keyframes bounce-slow {
                  0%, 100% {
                    transform: translateY(0);
                  }
                  50% {
                    transform: translateY(-5px);
                  }
                }

                .animate-pulse-cta {
                  animation: pulse-cta 2s infinite;
                }

                .animate-bounce-slow {
                  animation: bounce-slow 3s ease-in-out infinite;
                }
              `}</style>
            </div>
            <div className="hidden lg:block relative overflow-visible flex justify-center items-center">
              {/* UI画面 - 画像を使用 */}
              <div className="relative scale-[0.9] -translate-x-28" style={{ transformOrigin: 'center', overflow: 'visible' }}>
                <img
                  src="/images/image2.png"
                  alt="ARCHAIVEのAI見積システムのダッシュボード画面。図面検索と見積作成機能を表示"
                  className="w-full h-auto rounded-xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
