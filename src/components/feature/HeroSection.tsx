'use client';

import Link from 'next/link';
import { HeroQuickNav } from '@/components/layout';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="transition-all duration-500 flex flex-col sm:min-h-[calc(100vh-64px)]"
    >
      {/* Hero Main Content - Mobile */}
      <div className="relative bg-white overflow-hidden flex sm:hidden items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(55,183,196,0.12),transparent_45%),radial-gradient(circle_at_90%_85%,rgba(99,102,241,0.08),transparent_55%)]" />
        <div
          className="absolute inset-0 bg-[#37B7C4]"
          style={{ clipPath: 'polygon(70% 0%, 100% 0%, 100% 100%, 50% 100%)' }}
        />

        <div className="w-full px-4 py-12 relative z-10">
          <div className="space-y-6 text-center">
            <h1 className="font-bold text-gray-900 tracking-tight text-[26px] leading-tight">
              <div>1枚の図面/帳票から</div>
              <div>社内の全ナレッジをAI活用</div>
            </h1>
            <div className="space-y-3">
              <p className="text-gray-700 font-semibold leading-relaxed text-sm">
                AIにより、「誰でも」「早く」「正確な」見積りを実現。
              </p>
              <p className="text-gray-700 font-semibold leading-relaxed text-sm">
                眠るデータを"資産"へ。製造業DXの新常識、はじまる。
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full max-w-[320px] mx-auto">
              <Link
                href="/download"
                className="bg-[#37B7C4] border-2 border-[#37B7C4] rounded-lg text-white px-6 py-3 text-base font-bold flex items-center justify-center w-full hover:bg-[#2ea3b5] hover:border-[#2ea3b5] btn-hover group"
              >
                <span className="flex items-center gap-2 group-icon-right leading-none">
                  <svg className="w-5 h-5 group-icon-rotate" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                  <span className="group-text-wide">メールで資料を受け取る</span>
                </span>
              </Link>
              <Link
                href="/apply"
                className="bg-white border-2 border-[#37B7C4] text-[#37B7C4] rounded-lg px-6 py-3 text-base font-bold flex items-center justify-center w-full hover:bg-[#37B7C4]/10 btn-hover group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#37B7C4]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="flex items-center gap-2 group-icon-right relative z-10 leading-none">
                  <svg className="w-5 h-5 group-icon-rotate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span className="group-text-wide">デモを無料体験</span>
                </span>
              </Link>
            </div>
            <div className="flex justify-center relative">
              <img
                src="/images/hero-image2.png"
                alt="ARCHAIVEのAI見積システムのダッシュボード画面。図面検索と見積作成機能を表示"
                className="w-full max-w-[360px] rounded-xl shadow-2xl"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={2659}
                height={1940}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Main Content - Desktop */}
      <div className="hidden sm:flex sm:flex-col flex-1 sm:flex-none sm:[flex-basis:calc((100vh-64px)*0.78)] relative bg-white overflow-hidden items-center justify-center">
        {/* Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(55,183,196,0.12),transparent_46%),radial-gradient(circle_at_82%_28%,rgba(99,102,241,0.08),transparent_52%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50/60" />
          <div
            className="absolute inset-0 bg-[#37B7C4] hidden lg:block"
            style={{ clipPath: 'polygon(72% 0%, 100% 0%, 100% 100%, 55% 100%)' }}
          />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20 relative z-10 h-full">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 items-center min-h-[520px]">
            <div className="text-center lg:text-left mx-auto lg:mx-0 w-full max-w-[clamp(320px,46vw,640px)] lg:pl-6">
              <h1 className="font-bold text-gray-900 mb-6 tracking-tight text-[clamp(24px,3vw,44px)] leading-[clamp(32px,3.6vw,52px)]">
                <div>1枚の図面/帳票から</div>
                <div>社内の全ナレッジをAI活用</div>
              </h1>
              
              <div className="mb-10 space-y-4 max-w-[clamp(280px,38vw,520px)] mx-auto lg:mx-0">
                <p className="text-gray-700 font-semibold leading-[1.5] text-[13px] sm:text-[clamp(13px,1.8vw,20px)]">
                  AIにより、「誰でも」「早く」「正確な」見積りを実現。
                </p>
                <p className="text-gray-700 font-semibold leading-[1.5] text-[clamp(13px,1.6vw,18px)]">
                  眠るデータを"資産"へ。製造業DXの新常識、はじまる。
                </p>
              </div>
              
              <div className="flex flex-col gap-4 w-full max-w-[clamp(280px,32vw,420px)] mx-auto lg:mx-0">
                <Link
                  href="/download"
                  className="bg-[#37B7C4] border-2 border-[#37B7C4] rounded-lg text-white px-10 py-4 text-[clamp(15px,1.5vw,18px)] font-bold flex items-center justify-center w-full hover:bg-[#2ea3b5] hover:border-[#2ea3b5] btn-hover group"
                >
                  <span className="flex items-center gap-2 group-icon-right leading-none">
                    <svg className="w-5 h-5 group-icon-rotate" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                    <span className="group-text-wide">メールで資料を受け取る</span>
                  </span>
                </Link>
                <Link
                  href="/apply"
                  className="bg-white border-2 border-[#37B7C4] text-[#37B7C4] rounded-lg px-10 py-4 text-[clamp(15px,1.5vw,18px)] font-bold flex items-center justify-center w-full hover:bg-[#37B7C4]/10 btn-hover group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#37B7C4]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="flex items-center gap-2 group-icon-right relative z-10 leading-none">
                    <svg className="w-5 h-5 group-icon-rotate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span className="group-text-wide">デモを無料体験</span>
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="flex items-end justify-center lg:justify-end w-full">
              <img
                src="/images/hero-image2.png"
                alt="ARCHAIVEのAI見積システムのダッシュボード画面。図面検索と見積作成機能を表示"
                className="w-full max-w-[clamp(320px,40vw,520px)] rounded-xl shadow-2xl relative z-10"
                style={{ clipPath: 'inset(0% 0% 0.5% 0%)' }}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={2659}
                height={1940}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Quick Navigation */}
      <div className="hidden sm:flex sm:flex-none sm:[flex-basis:calc((100vh-64px)*0.197)]">
        <HeroQuickNav />
      </div>
      <div className="hidden sm:block sm:flex-none sm:[flex-basis:calc((100vh-64px)*0.023)] bg-white" />
    </section>
  );
}
