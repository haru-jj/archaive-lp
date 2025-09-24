'use client';

import Link from 'next/link';

export default function HeroSectionSplitBackup() {
  return (
    <div className="transition-all duration-500">
      <section className="relative bg-[#37B7C4] h-[75vh]">
        {/* 背景画像 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/images/background_geometric.png')" }}
        ></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="text-left">
              <div className="mb-6">
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                1枚の図面/帳票から<br />
                社内の全ナレッジをAI活用
              </h1>
              <div className="mb-10">
                <p className="text-xl md:text-2xl text-white mb-4 font-semibold leading-relaxed">
                  AIにより、「誰でも」「早く」「正確な」見積りを実現。
                </p>
                <p className="text-base md:text-lg text-white/90 leading-relaxed font-semibold">
                  眠るデータを"資産"へ。製造業DXの新常識、はじまる。
                </p>
              </div>
              <div className="flex flex-col gap-4 max-w-md">
                <Link href="/download" className="bg-white border-2 border-white rounded-lg text-[#37B7C4] px-12 py-4 text-lg font-bold cursor-pointer flex items-center justify-center w-full hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                    サービス紹介資料
                  </span>
                </Link>
                <Link href="/apply" className="bg-transparent border-2 border-white text-white rounded-lg px-12 py-4 text-lg font-bold cursor-pointer flex items-center justify-center w-full hover:bg-white/10 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    無料デモの申込み
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* UI画面 - 画像を使用 */}
              <div className="relative max-w-2xl mx-auto">
                <img 
                  src="/images/top_ui.png" 
                  alt="ARCHAIVE UI" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>

              {/* 装飾用の四角 */}
              <div className="absolute -top-12 left-8 hidden lg:block z-10">
                <div className="bg-white rounded-xl w-32 h-10 shadow-lg border-2 border-yellow-300">
                </div>
              </div>
              
              <div className="absolute top-20 -right-12 hidden lg:block z-10">
                <div className="bg-white rounded-xl w-32 h-10 shadow-lg border-2 border-green-300">
                </div>
              </div>
              
              <div className="absolute bottom-16 -left-16 hidden lg:block z-10">
                <div className="bg-white rounded-xl w-32 h-10 shadow-lg border-2 border-blue-300">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}