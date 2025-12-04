'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function CTASection() {
  return (
  <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 bg-[#37B7C4] relative overflow-hidden scroll-mt-24" id="cta">
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-15">
        {/* 左上円 */}
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-2 border-white rounded-full"></div>
        {/* 右上ダイヤ */}
        <div className="absolute top-16 right-6 sm:top-28 sm:right-14 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 border-white rounded-lg rotate-45"></div>
        {/* 左下円（塗り） */}
        <div className="absolute bottom-16 left-10 sm:bottom-24 sm:left-28 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full"></div>
        {/* 右下円（線） */}
        <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-2 border-white rounded-full"></div>
        {/* 斜めライン */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <g stroke="white" strokeWidth="2" strokeOpacity="0.2">
              <path d="M-80 120 L 320 -40" />
              <path d="M1020 640 L 1380 420" />
              <path d="M-60 520 L 360 300" />
              <path d="M880 120 L 1240 -20" />
            </g>
          </svg>
        </div>
        {/* 小ドット群 */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <g fill="white" fillOpacity="0.15">
              <circle cx="180" cy="180" r="3" />
              <circle cx="220" cy="210" r="2.5" />
              <circle cx="280" cy="160" r="2" />
              <circle cx="960" cy="420" r="3" />
              <circle cx="1020" cy="380" r="2.5" />
              <circle cx="1100" cy="440" r="2" />
            </g>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] items-center gap-8 lg:gap-10">
          <div className="order-2 lg:order-1">
            <div className="relative w-full max-w-[460px] mx-auto aspect-[4/3]">
              <Image
                src="/images/Group 18.png"
                alt="ARCHAIVEの画面イメージ"
                fill
                className="object-cover drop-shadow-2xl"
                sizes="(min-width: 1024px) 540px, 100vw"
                priority
              />
            </div>
          </div>

          <div className="text-center text-white order-1 lg:order-2">
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
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center lg:items-start">
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
      </div>
    </section>
  );
}
