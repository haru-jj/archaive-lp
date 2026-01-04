'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HeroQuickNav } from '@/components/layout';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="transition-all duration-500 flex flex-col sm:min-h-[calc(100vh-64px)]"
    >
      {/* Hero Main Content - Mobile */}
      <div className="relative bg-gradient-to-r from-[#005381] to-[#37B7C4] overflow-hidden flex sm:hidden items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" style={{ backgroundImage: "url('/images/background_geometric.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#005381]/40 via-[#2A8B96]/40 to-[#37B7C4]/40 z-[1]" />

        <div className="w-full px-4 py-12 relative z-10">
          <div className="space-y-6 text-center">
            <h1 className="font-bold text-white tracking-tight text-[30px] leading-[1.3]">
              <div>1枚の図面・帳票から</div>
              <div>社内の全ナレッジをAI活用</div>
            </h1>
            <div className="space-y-3">
              <p className="text-white font-semibold leading-relaxed text-[18px]" style={{ lineHeight: 1.82 }}>
                あらゆるデータを構造化し、会社の「資産」に。
              </p>
              <p className="text-white font-semibold leading-relaxed text-[18px]" style={{ lineHeight: 1.82 }}>
                独自のAIエージェントが設計・調達・見積業務をラクに。
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-3 w-full max-w-[440px] mx-auto">
              <Link href="/download" className="bg-white border-2 border-white rounded-full text-black px-9 py-3 text-sm font-bold flex items-center justify-center w-full sm:w-auto flex-none shrink-0 min-w-[200px] max-w-[300px] hover:bg-gray-50 btn-hover group">
                <span className="relative flex items-center justify-center w-full min-h-[48px]">
                  <span className="absolute left-[-52px] sm:left-[-60px] w-18 h-14">
                    <Image
                      src="/images/paper1215-0-2.png"
                      alt="カタログプレビュー"
                      width={3469}
                      height={2650}
                      className="w-full h-full object-cover rounded-md"
                      style={{ transform: 'translate(-12px, 4px)' }}
                      sizes="64px"
                      priority={false}
                    />
                  </span>
                  <span className="flex-1 flex flex-col items-center text-center leading-tight gap-1">
                    <span className="text-xs font-semibold text-[#f54848]">\ 詳細がすぐわかる /</span>
                    <span className="group-text-wide">メールで資料を受け取る</span>
                  </span>
                </span>
              </Link>
              <Link href="/apply" className="bg-white border-2 border-white text-black rounded-full px-7 py-3 text-sm font-bold flex items-center justify-center w-full sm:w-auto flex-none shrink-0 min-w-[190px] max-w-[280px] hover:bg-gray-50 btn-hover group relative overflow-hidden">
                <span className="flex flex-col items-center leading-tight text-center w-full gap-1">
                  <span className="text-xs font-semibold text-[#f54848]">\ 実際に使ってみる /</span>
                  <span className="group-text-wide">デモを無料体験</span>
                </span>
              </Link>
            </div>
              <div className="flex justify-center">
                <img
                  src="/images/hero_canva.png"
                  alt="ARCHAIVEのAI見積システムを工場で操作する様子。図面検索と見積作成画面を表示"
                  className="w-full max-w-[820px] rounded-xl shadow-2xl"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={4500}
                  height={2481}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Main Content - Desktop */}
      <div className="hidden sm:flex sm:flex-col flex-1 sm:flex-none sm:[flex-basis:calc((100vh-64px)*0.78)] relative bg-gradient-to-r from-[#005381] to-[#37B7C4] overflow-hidden items-center justify-center">
        {/* Background Layers */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{ backgroundImage: "url('/images/background_geometric.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005381]/40 via-[#2A8B96]/40 to-[#37B7C4]/40 z-[1]" />
          <div 
            className="absolute inset-0 bg-white z-[2] hidden lg:block"
            style={{
              clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 80% 100%)'
            }}
          />
        </div>

        <div className="container mx-auto max-w-[1400px] px-4 py-12 sm:py-16 lg:py-20 relative z-10 h-full sm:-translate-y-3 lg:-translate-y-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 items-center min-h-[520px]">
            <div className="text-center lg:text-left mx-auto lg:ml-[1.5vw] w-full max-w-[clamp(480px,70vw,1040px)]">
            <h1 className="font-bold text-white mb-6 tracking-tight text-[clamp(28px,3.8vw,52px)] leading-[clamp(44px,5.2vw,70px)]">
                <div>1枚の図面・帳票から</div>
                <div>社内の全ナレッジをAI活用</div>
              </h1>
              
              <div className="mb-8 space-y-5 max-w-[clamp(340px,45vw,660px)] mx-auto lg:mx-0">
                <p className="text-white font-semibold leading-[1.85] text-[clamp(16px,2.2vw,23px)]">
                  あらゆるデータを構造化し、会社の「資産」に。
                </p>
                <p className="text-white font-semibold leading-[1.85] text-[clamp(16px,2.2vw,23px)]">
                  独自のAIエージェントが設計・調達・見積業務をラクに。
                </p>
              </div>
              
              <div className="flex flex-row flex-wrap gap-4 w-full max-w-[clamp(440px,50vw,620px)] mx-auto lg:mx-0">
                <Link href="/download" className="bg-white border-2 border-white rounded-full text-black px-12 py-3.5 text-[clamp(15px,1.4vw,18px)] font-bold flex items-center justify-center w-full sm:w-auto flex-none shrink-0 min-w-[230px] max-w-[320px] hover:bg-gray-50 btn-hover group">
                  <span className="relative flex items-center justify-center w-full min-h-[48px]">
                    <span className="absolute left-[-56px] lg:left-[-64px] w-18 h-14">
                      <Image
                        src="/images/paper1215-0-2.png"
                        alt="カタログプレビュー"
                        width={3469}
                        height={2650}
                        className="w-full h-full object-cover rounded-md"
                        style={{ transform: 'translate(-12px, 4px)' }}
                        sizes="72px"
                        priority={false}
                      />
                    </span>
                    <span className="flex-1 flex flex-col items-center text-center leading-tight gap-1">
                    <span className="text-xs font-semibold text-[#f54848]">\ 詳細がすぐわかる /</span>
                      <span className="group-text-wide">メールで資料を受け取る</span>
                    </span>
                  </span>
                </Link>
                <Link href="/apply" className="bg-white border-2 border-white text-black rounded-full px-11 py-3.5 text-[clamp(15px,1.4vw,18px)] font-bold flex items-center justify-center w-full sm:w-auto flex-none shrink-0 min-w-[230px] max-w-[320px] hover:bg-gray-50 btn-hover group relative overflow-hidden">
                  <span className="flex flex-col items-center leading-tight text-center w-full gap-1">
                    <span className="text-xs font-semibold text-[#f54848]">\ 実際に使ってみる /</span>
                    <span className="group-text-wide">デモを無料体験</span>
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="flex items-end justify-center lg:justify-end w-full">
              <img
                src="/images/hero_canva.png"
                alt="ARCHAIVEのAI見積システムを工場で操作する様子。図面検索と見積作成画面を表示"
                className="w-full max-w-[clamp(660px,72vw,1280px)] rounded-xl shadow-2xl"
                style={{ clipPath: 'inset(0% 0% 0.5% 0%)' }}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={4500}
                height={2481}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Quick Navigation */}
      <div className="hidden sm:flex sm:flex-none sm:[flex-basis:calc((100vh-64px)*0.197)]">
        <HeroQuickNav />
      </div>
    </section>
  );
}
