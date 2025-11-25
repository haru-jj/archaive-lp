'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
  <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-[#37B7C4] relative overflow-hidden scroll-mt-24" id="cta">
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-20 right-10 sm:top-32 sm:right-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-2 border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-12 left-16 sm:bottom-20 sm:left-32 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-2 border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center text-white">
          {/* メインコピー */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              今すぐARCHAIVEを<br className="sm:hidden"/>始めませんか？
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-white/90 mb-2">
              製造業の図面管理を革新するAIシステム
            </p>
            <p className="text-base sm:text-lg font-semibold text-white/80">
              無料トライアルで効果を実感してください
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link href="/download" className="bg-white border-2 border-white rounded-lg text-[#37B7C4] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold cursor-pointer flex items-center justify-center w-full sm:w-auto sm:min-w-[280px] hover:bg-gray-50 btn-hover">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                資料ダウンロード
              </span>
            </Link>
            <Link href="/apply" className="bg-transparent border-2 border-white text-white rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold cursor-pointer flex items-center justify-center w-full sm:w-auto sm:min-w-[280px] hover:bg-white/10 btn-hover">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                無料トライアル申し込み
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
