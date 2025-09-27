'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 px-4 bg-[#37B7C4] relative overflow-hidden" id="cta">
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center text-white">
          {/* メインコピー */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              今すぐARCHAIVEを始めませんか？
            </h2>
            <p className="text-xl font-semibold text-white/90 mb-2">
              製造業の図面管理を革新するAIシステム
            </p>
            <p className="text-lg font-semibold text-white/80">
              無料トライアルで効果を実感してください
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/download" className="bg-white border-2 border-white rounded-lg text-[#37B7C4] px-8 py-4 text-lg font-bold cursor-pointer flex items-center justify-center min-w-[280px] hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                資料ダウンロード
              </span>
            </Link>
            <Link href="/apply" className="bg-transparent border-2 border-white text-white rounded-lg px-8 py-4 text-lg font-bold cursor-pointer flex items-center justify-center min-w-[280px] hover:bg-white/10 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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