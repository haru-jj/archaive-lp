'use client';

import Link from 'next/link';
import { HeroQuickNav } from '@/components/layout';

export default function HeroSection() {
  return (
    <section id="hero" className="transition-all duration-500">
      {/* Hero Main Content */}
      <div className="relative h-[calc(80vh-64px)] bg-[#37B7C4] overflow-hidden flex items-center justify-center">
        {/* Background Layers */}
        <div className="absolute inset-0">
          {/* 背景画像 */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{ backgroundImage: "url('/images/background_geometric.png')" }}
          />
          {/* メインカラーの半透明オーバーレイ */}
          <div className="absolute inset-0 bg-[#2A8B96]/40 z-[1]" />
          {/* 白い台形エリア */}
          <div 
            className="absolute inset-0 bg-white z-[2]"
            style={{
              clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 80% 100%)'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 py-16 relative z-10 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            {/* Left Content */}
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:ml-16 lg:mr-0">
              {/* Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.5]">
                1枚の図面/帳票から<br />
                社内の全ナレッジをAI活用
              </h1>
              
              {/* Subheadline */}
              <div className="mb-10 space-y-4">
                <p className="text-xl md:text-2xl text-white font-semibold leading-[1.5]">
                  AIにより、「誰でも」「早く」「正確な」見積りを実現。
                </p>
                <p className="text-base md:text-lg text-white/90 font-semibold leading-[1.5]">
                  眠るデータを"資産"へ。製造業DXの新常識、はじまる。
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 max-w-md mx-auto lg:ml-0 lg:mr-auto">
                <Link href="/download" className="bg-white border-2 border-white rounded-lg text-[#37B7C4] px-12 py-4 text-lg font-bold flex items-center justify-center w-full hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
                  <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                    <svg className="w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                    <span className="group-hover:tracking-wide transition-all duration-300">メールで資料を受け取る</span>
                  </span>
                </Link>
                <Link href="/apply" className="bg-transparent border-2 border-white text-white rounded-lg px-12 py-4 text-lg font-bold flex items-center justify-center w-full hover:bg-white/20 hover:border-white/80 hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10">
                    <svg className="w-5 h-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span className="group-hover:tracking-wide transition-all duration-300">デモを無料体験！</span>
                  </span>
                </Link>
              </div>

            </div>
            
            {/* Right Content - Product Image */}
            <div className="hidden lg:flex relative justify-center items-center overflow-visible">
              <div className="relative scale-[0.9] -translate-x-28" style={{ transformOrigin: 'center' }}>
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
      </div>
      
      {/* Hero Quick Navigation */}
      <HeroQuickNav />
    </section>
  );
}
