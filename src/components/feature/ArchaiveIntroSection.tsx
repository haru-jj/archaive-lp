'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CircleDiagram, BubbleAnimation } from '@/components/animation-components';

export default function ArchaiveIntroSection() {
  return (
    <div className="bg-[#37B7C4] px-4 relative overflow-hidden" id="demo" style={{paddingTop: '38.4px', paddingBottom: '38.4px', minHeight: '80vh'}}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Logo */}
        <div className="text-center animate-fade-in-down">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-8 sm:px-6 py-3 mb-6 w-full max-w-[360px] sm:w-auto sm:max-w-none justify-center">
            <span className="text-white text-lg font-semibold" style={{lineHeight: '1.5'}}>製造業AIデータハブ</span>
            <img
              src="/images/archaive_logo_white.svg"
              alt="ARCHAIVE"
              className="h-10"
            />
          </div>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold" style={{lineHeight: '1.6'}}>
            点在したデータや暗黙知を<br className="sm:hidden" />
            繋ぎ合わせ、<br/>
            ひとつなぎの「ものづくり」を創造する。
          </h2>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Desktop Layout (lg and above) */}
          <div className="hidden lg:block">
            <div className="relative min-h-[700px] flex items-center justify-center">
              {/* Central Circle Diagram */}
              <CircleDiagram />

              {/* Left Side - Custom AI Solutions */}
              <div className="absolute left-8 lg:left-20 top-20 space-y-8">
                <div className="opacity-0 animate-fade-in-left" style={{animationDelay: '1s'}}>
                  <div className="text-sm tracking-widest uppercase text-white/60 mb-3">Custom AI Solutions</div>
                  <div className="text-2xl font-bold text-white mb-3">カスタムAIソリューション</div>
                  <div className="text-base text-white/80 mb-6 leading-relaxed">
                    「現場」に最適なソリューションを提供<br/>
                    オーダーメイドAIにより、データを活用
                  </div>
                  <div className="space-y-4 text-base font-bold text-white/85">
                    <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>社内ナレッジ検索AI</span>
                    </div>
                    <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>図面シンボル抽出・積算AI</span>
                    </div>
                    <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>データクレンジング</span>
                    </div>
                    <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>ERP構築・統合システム</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - AI Products */}
              <div className="absolute right-8 lg:right-20 bottom-24 space-y-8">
                <div className="opacity-0 animate-fade-in-right" style={{animationDelay: '2s'}}>
                  <div className="text-sm tracking-widest uppercase text-white/60 mb-3">AI Products</div>
                  <div className="text-2xl font-bold text-white mb-3">AIプロダクト</div>
                  <div className="text-base text-white/80 mb-6 leading-relaxed">
                    ベストプラクティスを標準化し、<br/>
                    社内に散在するデータを構造化する。
                  </div>
                  <div className="space-y-4 text-base font-bold text-white/85">
                    <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>ARCHAIVE 図面管理</span>
                    </div>
                    <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>ARCHAIVE 顧客管理</span>
                    </div>
                    <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>ARCHAIVE 帳票管理</span>
                    </div>
                    <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>ARCHAIVE AIエージェント</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Benefit Keywords - Desktop Only */}
              <div className="absolute top-0 right-30 opacity-0 animate-fade-in-up" style={{animationDelay: '3s'}}>
                <div className="relative">
                  <div className="w-56 h-48 bg-white/10 rounded-3xl animate-morph"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="text-lg font-light text-white">生産性向上</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 left-10 opacity-0 animate-fade-in-up" style={{animationDelay: '4s'}}>
                <div className="relative">
                  <div className="w-48 h-48 bg-white/10 rounded-3xl animate-morph-reverse"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="text-lg font-light text-white">属人化解消</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-20 right-20 transform -translate-x-1/2 -translate-y-40 opacity-0 animate-fade-in-up" style={{animationDelay: '5s'}}>
                <div className="relative">
                  <div className="w-64 h-48 bg-white/10 rounded-3xl animate-morph" style={{animationDelay: '2s'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="text-lg font-light text-white">システム全体最適</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2 -translate-y-40 opacity-0 animate-fade-in-up" style={{animationDelay: '5s'}}>
                <div className="relative">
                  <div className="w-64 h-48 bg-white/10 rounded-3xl animate-morph" style={{animationDelay: '2s'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="text-lg font-light text-white">技術伝承</span>
                  </div>
                </div>
              </div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 1200 600">
                <line x1="300" y1="300" x2="600" y2="300" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="4,12" className="animate-pulse-line" style={{animationDelay: '3s'}} />
                <line x1="600" y1="300" x2="900" y2="300" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="4,12" className="animate-pulse-line" style={{animationDelay: '4s'}} />
              </svg>
            </div>
          </div>

          {/* Mobile/Tablet Layout (below lg) */}
          <div className="lg:hidden">
            {/* Central Circle Diagram */}
            <div className="flex justify-center mb-8">
              <CircleDiagram />
            </div>

            {/* Solutions Grid for Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
              {/* Custom AI Solutions */}
              <div className="space-y-6">
                <div className="opacity-0 animate-fade-in-left" style={{animationDelay: '1s'}}>
                  <div className="text-xs sm:text-sm tracking-widest uppercase text-white/60 mb-2">Custom AI Solutions</div>
                  <div className="text-lg sm:text-xl font-bold text-white mb-3">カスタムAIソリューション</div>
                  <div className="text-sm sm:text-base text-white/80 mb-4 leading-relaxed">
                    「現場」に最適なソリューションを提供<br className="hidden sm:block"/>
                    オーダーメイドAIにより、データを活用
                  </div>
                  <div className="space-y-3 text-sm sm:text-base font-bold text-white/85">
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>社内ナレッジ検索AI</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>図面シンボル抽出・積算AI</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>データクレンジング</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>ERP構築・統合システム</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Products */}
              <div className="space-y-6">
                <div className="opacity-0 animate-fade-in-right" style={{animationDelay: '2s'}}>
                  <div className="text-xs sm:text-sm tracking-widest uppercase text-white/60 mb-2">AI Products</div>
                  <div className="text-lg sm:text-xl font-bold text-white mb-3">AIプロダクト</div>
                  <div className="text-sm sm:text-base text-white/80 mb-4 leading-relaxed">
                    ベストプラクティスを標準化し、<br className="hidden sm:block"/>
                    社内に散在するデータを構造化する。
                  </div>
                  <div className="space-y-3 text-sm sm:text-base font-bold text-white/85">
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>ARCHAIVE 図面管理</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>ARCHAIVE 顧客管理</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>ARCHAIVE 帳票管理</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 group-hover:text-white transition-colors" />
                      <span>ARCHAIVE AIエージェント</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements Animation */}
      {/* <FloatingElements /> */}

      {/* Floating Bubble Animation */}
      <BubbleAnimation />

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out forwards;
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-left {
          animation: fade-in-left 1.5s ease-out forwards;
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-right {
          animation: fade-in-right 1.5s ease-out forwards;
        }
        
        @keyframes pulse-line {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animate-pulse-line {
          animation: pulse-line 3s ease-in-out infinite;
        }
        
        @keyframes morph {
          0%, 100% {
            border-radius: 70% 30% 40% 60% / 60% 40% 30% 70%;
            transform: scale(1);
          }
          25% {
            border-radius: 30% 70% 60% 40% / 40% 60% 50% 30%;
            transform: scale(1.03);
          }
          50% {
            border-radius: 60% 40% 70% 30% / 50% 30% 70% 40%;
            transform: scale(0.97);
          }
          75% {
            border-radius: 40% 60% 30% 70% / 70% 40% 30% 60%;
            transform: scale(1.05);
          }
        }

        @keyframes morph-reverse {
          0%, 100% {
            border-radius: 20% 80% 70% 30% / 30% 70% 60% 20%;
            transform: scale(1);
          }
          25% {
            border-radius: 80% 20% 30% 70% / 70% 30% 20% 80%;
            transform: scale(0.9);
          }
          50% {
            border-radius: 30% 70% 20% 80% / 80% 20% 30% 70%;
            transform: scale(1.1);
          }
          75% {
            border-radius: 70% 30% 80% 20% / 40% 60% 80% 30%;
            transform: scale(0.95);
          }
        }

        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }

        .animate-morph-reverse {
          animation: morph-reverse 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
