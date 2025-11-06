'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HeroQuickNav } from '@/components/layout';

export default function HeroSection() {
  return (
    <section id="hero" className="transition-all duration-500">
      {/* Hero Main Content */}
      <div className="relative h-[calc(100vh-64px)] sm:h-[calc(80vh-64px)] bg-[#37B7C4] overflow-hidden flex items-center justify-center">
        {/* Background Layers */}
        <div className="absolute inset-0">
          {/* 背景画像 */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{ backgroundImage: "url('/images/background_geometric.png')" }}
          />
          {/* メインカラーの半透明オーバーレイ */}
          <div className="absolute inset-0 bg-[#2A8B96]/40 z-[1]" />
          {/* 白い台形エリア - デスクトップのみ */}
          <div 
            className="absolute inset-0 bg-white z-[2] hidden lg:block"
            style={{
              clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 80% 100%)'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 py-16 relative z-10 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-end min-h-[500px]">
            {/* Left Content */}
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:ml-16 lg:mr-0">
              {/* Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                <div className="leading-relaxed">1枚の図面/帳票から</div>
                <div className="leading-relaxed">社内の全ナレッジをAI活用</div>
              </h1>
              
              {/* Subheadline */}
              <div className="mb-10 space-y-4">
                <p className="text-sm md:text-xl lg:text-2xl text-white font-semibold leading-[1.5]">
                  AIにより、「誰でも」「早く」「正確な」見積りを実現。
                </p>
                <p className="text-white/90 font-semibold leading-[1.5] text-[clamp(13px,1.6vw,18px)]">
                  眠るデータを「資産」へ。製造業DXの新常識、はじまる。
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 max-w-md mx-auto lg:ml-0 lg:mr-auto">
                <Link href="/download" className="bg-white border-2 border-white rounded-lg text-[#37B7C4] px-12 py-4 text-lg font-bold flex items-center justify-center w-full hover:bg-gray-50 btn-hover group">
                  <span className="flex items-center gap-2 group-icon-right">
                    <svg className="w-5 h-5 group-icon-rotate" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                    <span className="group-text-wide">メールで資料を受け取る</span>
                  </span>
                </Link>
                <Link href="/apply" className="bg-transparent border-2 border-white text-white rounded-lg px-12 py-4 text-lg font-bold flex items-center justify-center w-full hover:bg-white/20 hover:border-white/80 btn-hover group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="flex items-center gap-2 group-icon-right relative z-10">
                    <svg className="w-5 h-5 group-icon-rotate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span className="group-text-wide">デモを無料体験！</span>
                  </span>
                </Link>
              </div>

            </div>
            
            {/* Right Content - Product Image */}
            <div className="hidden lg:flex items-end justify-center lg:justify-end">
              <Image
                src="/images/hero-dashboard.png"
                alt="ARCHAIVEのAI見積システムのダッシュボード画面。図面検索と見積作成機能を表示"
                width={1040}
                height={720}
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
                className="w-full max-w-[clamp(320px,40vw,520px)] h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Quick Navigation */}
      <HeroQuickNav />
    </section>
  );
}
