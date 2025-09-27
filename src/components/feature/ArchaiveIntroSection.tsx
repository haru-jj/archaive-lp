'use client';

import React from 'react';

export default function ArchaiveIntroSection() {
  return (
    <div className="bg-[#37B7C4] px-4 relative overflow-hidden" id="demo" style={{paddingTop: '38.4px', paddingBottom: '38.4px', minHeight: '80vh'}}>
      {/* Background Pattern - Based on SVG structure */}
      <div className="absolute inset-0">
        {/* Grid of rounded rectangles like in the SVG */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 gap-8 p-12">
            {Array.from({length: 24}, (_, i) => {
              const delays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s', '0.6s', '0.7s', '0.8s', '0.9s', '1.0s', '1.1s', '1.2s', '1.3s', '1.4s', '1.5s', '1.6s', '1.7s', '1.8s', '1.9s', '2.0s', '2.1s', '2.2s', '2.3s'];
              return (
                <div key={i} className="relative">
                  <div
                    className="w-full h-24 bg-white/20 rounded-2xl animate-pulse-slow"
                    style={{animationDelay: delays[i]}}
                  />
                  <div className="absolute inset-2 bg-white/10 rounded-xl"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Animated gradient mesh */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#37B7C4] via-[#37B7C4]/80 to-[#37B7C4]/90 animate-gradient-shift"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-transparent animate-gradient-shift-reverse"></div>
        </div>

        {/* Floating elements animation */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-3xl animate-morph"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-[#37B7C4]/10 rounded-3xl animate-morph-reverse"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-white/10 rounded-3xl animate-morph" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-[#37B7C4]/10 rounded-3xl animate-morph-reverse" style={{animationDelay: '3s'}}></div>
        </div>

        {/* Particle system - Circles */}
        <div className="absolute inset-0">
          {(() => {
            const leftPositions = [15, 25, 35, 45, 55, 65, 75, 85, 5, 95, 12, 28, 42, 58, 72, 88, 8, 38, 68, 82];
            const topPositions = [10, 30, 50, 70, 90, 20, 40, 60, 80, 15, 35, 55, 75, 85, 25, 45, 65, 95, 5, 52];
            const delays = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5];
            const durations = [12, 14, 16, 18, 20, 13, 15, 17, 19, 11, 12.5, 14.5, 16.5, 18.5, 20.5, 13.5, 15.5, 17.5, 19.5, 11.5];

            return Array.from({length: 20}, (_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-br from-white/60 to-[#37B7C4]/40 rounded-full animate-float-particle"
                style={{
                  left: `${leftPositions[i]}%`,
                  top: `${topPositions[i]}%`,
                  animationDelay: `${delays[i]}s`,
                  animationDuration: `${durations[i]}s`,
                  boxShadow: '0 0 4px rgba(55, 183, 196, 0.3)'
                }}
              />
            ));
          })()}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Logo */}
        <div className="text-center mb-12 animate-fade-in-down">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-6">
            <span className="text-white text-lg font-semibold" style={{lineHeight: '1.5'}}>製造業AIデータハブ</span>
            <img
              src="/images/archaive_logo_white.svg"
              alt="ARCHAIVE"
              className="h-10"
            />
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-bold" style={{lineHeight: '1.6'}}>
            点在したデータや暗黙知を繋ぎ合わせ、<br/>
            ひとつなぎの「ものづくり」を創造する。
          </h1>
        </div>

        {/* Main Content Section with 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 mb-12 relative items-center">

          {/* Left - Custom AI Solution */}
          <div className="space-y-4 lg:self-center lg:col-span-2">
            <div className="relative group">
              {/* Outer ring mimicking center circle */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#37B7C4]/10 via-white/20 to-[#37B7C4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md animate-spin-slow" style={{animationDuration: '8s'}}></div>

              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#37B7C4]/30 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border-2 border-[#37B7C4]/30 overflow-hidden">
                {/* Circular decorative pattern matching center */}
                <div className="absolute -top-10 -right-10 w-40 h-40">
                  <div className="w-full h-full rounded-full" style={{
                    background: 'conic-gradient(from 0deg, rgba(55, 183, 196, 0.05), rgba(255, 255, 255, 0.1), rgba(55, 183, 196, 0.08), rgba(255, 255, 255, 0.05))',
                    animation: 'spin 16s linear infinite'
                  }}></div>
                </div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32">
                  <div className="w-full h-full rounded-full border border-[#37B7C4]/10 animate-pulse-slow"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#37B7C4] to-[#2A8B96] whitespace-nowrap">カスタムAIソリューション</h2>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/80 to-[#37B7C4]/20 flex items-center justify-center shadow-inner">
                      <div className="w-8 h-8 rounded-full border border-[#37B7C4]/30 flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#37B7C4] rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    「現場」に最適なソリューションを提供<br/>
                    オーダーメイドAIにより、データを活用
                  </p>

                  <div className="space-y-2">
                    <div className="relative overflow-hidden bg-gradient-to-r from-[#37B7C4]/5 to-transparent rounded-2xl p-3 border-l-3 border-[#37B7C4] transform hover:translate-x-1 transition-all group/item">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#37B7C4]/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-center justify-between">
                        <span className="font-semibold text-gray-700 text-sm">社内ナレッジ検索AI</span>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white to-[#37B7C4]/20 flex items-center justify-center shadow-sm">
                          <div className="w-2 h-2 bg-[#37B7C4] rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="relative overflow-hidden bg-gradient-to-r from-[#37B7C4]/5 to-transparent rounded-2xl p-3 border-l-3 border-[#37B7C4] transform hover:translate-x-1 transition-all group/item">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#37B7C4]/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-center justify-between">
                        <span className="font-semibold text-gray-700 text-sm">図面シンボル抽出・積算AI</span>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white to-[#37B7C4]/20 flex items-center justify-center shadow-sm">
                          <div className="w-2 h-2 bg-[#37B7C4] rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="relative overflow-hidden bg-gradient-to-r from-[#37B7C4]/5 to-transparent rounded-2xl p-3 border-l-3 border-[#37B7C4] transform hover:translate-x-1 transition-all group/item">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#37B7C4]/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-center justify-between">
                        <span className="font-semibold text-gray-700 text-sm">データクレンジング</span>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white to-[#37B7C4]/20 flex items-center justify-center shadow-sm">
                          <div className="w-2 h-2 bg-[#37B7C4] rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="relative overflow-hidden bg-gradient-to-r from-[#37B7C4]/5 to-transparent rounded-2xl p-3 border-l-3 border-[#37B7C4] transform hover:translate-x-1 transition-all group/item">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#37B7C4]/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-center justify-between">
                        <span className="font-semibold text-gray-700 text-sm">ERP構築・統合システム</span>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white to-[#37B7C4]/20 flex items-center justify-center shadow-sm">
                          <div className="w-2 h-2 bg-[#37B7C4] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center - UI Display (2x size) */}
          <div className="flex items-center justify-center lg:self-center lg:col-span-3 min-h-[400px] lg:min-h-[500px]">
            <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]">
              {/* Rotating circle behind Group.svg */}
              <div className="absolute w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full animate-spin-slow" style={{
                background: 'conic-gradient(from 0deg, rgba(55, 183, 196, 0.2), rgba(255, 255, 255, 0.8), rgba(55, 183, 196, 0.9), rgba(255, 255, 255, 0.6), rgba(55, 183, 196, 0.7), rgba(255, 255, 255, 0.9), rgba(55, 183, 196, 0.4), rgba(255, 255, 255, 0.5))',
                borderRadius: '50%',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: -2
              }}>
                <div className="absolute inset-3 bg-[#37B7C4] rounded-full"></div>
              </div>

              {/* Connection lines from hub to data sources */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" style={{zIndex: 3}}>
                {/* Lines connecting center to each perfect pentagon point */}
                <line x1="200" y1="200" x2="200" y2="120" stroke="rgba(55, 183, 196, 0.6)" strokeWidth="4" strokeDasharray="6,6" className="animate-pulse-line" />
                <line x1="200" y1="200" x2="260" y2="140" stroke="rgba(55, 183, 196, 0.6)" strokeWidth="4" strokeDasharray="6,6" className="animate-pulse-line" style={{animationDelay: '0.4s'}} />
                <line x1="200" y1="200" x2="260" y2="260" stroke="rgba(55, 183, 196, 0.6)" strokeWidth="4" strokeDasharray="6,6" className="animate-pulse-line" style={{animationDelay: '0.8s'}} />
                <line x1="200" y1="200" x2="140" y2="260" stroke="rgba(55, 183, 196, 0.6)" strokeWidth="4" strokeDasharray="6,6" className="animate-pulse-line" style={{animationDelay: '1.2s'}} />
                <line x1="200" y1="200" x2="140" y2="140" stroke="rgba(55, 183, 196, 0.6)" strokeWidth="4" strokeDasharray="6,6" className="animate-pulse-line" style={{animationDelay: '1.6s'}} />
              </svg>

              {/* Central Hub Logo */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <img
                  src="/images/Group.svg"
                  alt="ARCHAIVE Hub"
                  className="w-28 h-20 md:w-32 md:h-24 lg:w-36 lg:h-28 xl:w-44 xl:h-32 object-contain transform hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Orbiting container for data source nodes */}
              <div className="absolute animate-orbit" style={{
                animationDuration: '20s',
                width: '22rem',
                height: '22rem',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 5
              }}>
                {/* Data Source Nodes - Orbiting on the circle edge */}
                {/* PLM - Top position */}
                <div className="absolute" style={{
                  top: '0',
                  left: '50%',
                  transform: 'translateX(-50%) translateY(-50%)',
                }}>
                  <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 animate-counter-rotate" style={{animationDuration: '20s'}}>
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin-reverse"
                         style={{animationDuration: '8s'}}></div>
                    {/* Inner circle */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/90 to-white/70 shadow-lg"></div>
                    <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-[#37B7C4]/80 via-[#37B7C4]/60 to-transparent"></div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <span className="text-white text-[11px] md:text-[13px] font-bold drop-shadow-lg">PLM</span>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-[#37B7C4]/20 blur-xl animate-pulse-slow"></div>
                  </div>
                </div>

                {/* ERP - 72 degrees */}
                <div className="absolute" style={{
                  top: '18%',
                  right: '8%',
                  transform: 'translate(50%, -50%)',
                }}>
                  <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 animate-counter-rotate" style={{animationDuration: '20s'}}>
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin-reverse"
                         style={{animationDuration: '8s', animationDelay: '1.6s'}}></div>
                    {/* Inner circle */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/90 to-white/70 shadow-lg"></div>
                    <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-[#37B7C4]/80 via-[#37B7C4]/60 to-transparent"></div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <span className="text-white text-[11px] md:text-[13px] font-bold drop-shadow-lg">ERP</span>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-[#37B7C4]/20 blur-xl animate-pulse-slow"></div>
                  </div>
                </div>

                {/* 紙書類 - 144 degrees */}
                <div className="absolute" style={{
                  bottom: '9.55%',
                  right: '20.61%',
                  transform: 'translate(50%, 50%)',
                }}>
                  <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 animate-counter-rotate" style={{animationDuration: '20s'}}>
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin-reverse"
                         style={{animationDuration: '8s', animationDelay: '3.2s'}}></div>
                    {/* Inner circle */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/90 to-white/70 shadow-lg"></div>
                    <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-[#37B7C4]/80 via-[#37B7C4]/60 to-transparent"></div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <span className="text-white text-[11px] md:text-[13px] font-bold drop-shadow-lg leading-3">紙書類</span>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-[#37B7C4]/20 blur-xl animate-pulse-slow"></div>
                  </div>
                </div>

                {/* ファイルサーバー - 216 degrees */}
                <div className="absolute" style={{
                  bottom: '9.55%',
                  left: '20.61%',
                  transform: 'translate(-50%, 50%)',
                }}>
                  <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 animate-counter-rotate" style={{animationDuration: '20s'}}>
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin-reverse"
                         style={{animationDuration: '8s', animationDelay: '4.8s'}}></div>
                    {/* Inner circle */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/90 to-white/70 shadow-lg"></div>
                    <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-[#37B7C4]/80 via-[#37B7C4]/60 to-transparent"></div>
                    <div className="relative z-10 h-full flex items-center justify-center text-center">
                      <span className="text-white text-[10px] md:text-[12px] font-bold drop-shadow-lg leading-3">ファイル<br/>サーバー</span>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-[#37B7C4]/20 blur-xl animate-pulse-slow"></div>
                  </div>
                </div>

                {/* 暗黙知 - 288 degrees */}
                <div className="absolute" style={{
                  top: '18%',
                  left: '8%',
                  transform: 'translate(-50%, -50%)',
                }}>
                  <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 animate-counter-rotate" style={{animationDuration: '20s'}}>
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin-reverse"
                         style={{animationDuration: '8s', animationDelay: '6.4s'}}></div>
                    {/* Inner circle */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/90 to-white/70 shadow-lg"></div>
                    <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-[#37B7C4]/80 via-[#37B7C4]/60 to-transparent"></div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <span className="text-white text-[11px] md:text-[13px] font-bold drop-shadow-lg">暗黙知</span>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-[#37B7C4]/20 blur-xl animate-pulse-slow"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right - AI Product */}
          <div className="space-y-4 lg:self-center lg:col-span-2">
            <div className="relative group">
              {/* Outer ring mimicking center circle */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-l from-[#37B7C4]/10 via-white/20 to-[#37B7C4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md animate-spin-slow" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>

              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-l from-[#37B7C4]/30 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border-2 border-[#37B7C4]/30 overflow-hidden">
                {/* Circular decorative pattern matching center */}
                <div className="absolute -top-10 -left-10 w-40 h-40">
                  <div className="w-full h-full rounded-full" style={{
                    background: 'conic-gradient(from 180deg, rgba(55, 183, 196, 0.05), rgba(255, 255, 255, 0.1), rgba(55, 183, 196, 0.08), rgba(255, 255, 255, 0.05))',
                    animation: 'spin 18s linear infinite reverse'
                  }}></div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32">
                  <div className="w-full h-full rounded-full border border-[#37B7C4]/10 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#37B7C4] to-[#2A8B96]">AIプロダクト</h2>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-bl from-white/80 to-[#37B7C4]/20 flex items-center justify-center shadow-inner">
                      <div className="w-8 h-8 rounded-full border border-[#37B7C4]/30 flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#37B7C4] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    ベストプラクティスを標準化し、<br/>
                    社内に散在するデータを構造化する。
                  </p>

                  <div className="space-y-2">
                    <div className="relative overflow-hidden bg-gradient-to-l from-[#37B7C4]/5 to-transparent rounded-2xl p-3 border-r-3 border-[#37B7C4] transform hover:-translate-x-1 transition-all group/item">
                      <div className="absolute inset-0 bg-gradient-to-l from-[#37B7C4]/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-center justify-between">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white to-[#37B7C4]/20 flex items-center justify-center shadow-sm">
                          <div className="w-2 h-2 bg-[#37B7C4] rounded-full"></div>
                        </div>
                        <span className="font-semibold text-gray-700 text-sm">ARCHAIVE 図面管理</span>
                      </div>
                    </div>

                    <div className="relative overflow-hidden bg-gradient-to-l from-[#37B7C4]/5 to-transparent rounded-xl p-3 border-r-4 border-[#37B7C4] transform hover:-translate-x-1 transition-all">
                      <div className="flex items-center justify-between">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white to-[#37B7C4]/20 flex items-center justify-center shadow-sm">
                          <div className="w-2 h-2 bg-[#37B7C4] rounded-full"></div>
                        </div>
                        <span className="font-semibold text-gray-700 text-sm">ARCHAIVE 顧客管理</span>
                      </div>
                    </div>

                    <div className="relative overflow-hidden bg-gradient-to-l from-[#37B7C4]/5 to-transparent rounded-xl p-3 border-r-4 border-[#37B7C4] transform hover:-translate-x-1 transition-all">
                      <div className="flex items-center justify-between">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white to-[#37B7C4]/20 flex items-center justify-center shadow-sm">
                          <div className="w-2 h-2 bg-[#37B7C4] rounded-full"></div>
                        </div>
                        <span className="font-semibold text-gray-700 text-sm">ARCHAIVE 帳票管理</span>
                      </div>
                    </div>

                    <div className="relative overflow-hidden bg-gradient-to-l from-[#37B7C4]/5 to-transparent rounded-xl p-3 border-r-4 border-[#37B7C4] transform hover:-translate-x-1 transition-all">
                      <div className="flex items-center justify-between">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white to-[#37B7C4]/20 flex items-center justify-center shadow-sm">
                          <div className="w-2 h-2 bg-[#37B7C4] rounded-full"></div>
                        </div>
                        <span className="font-semibold text-gray-700 text-sm">ARCHAIVE AIエージェント</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section - 3 cards */}
        <div className="mt-16 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* 生産性向上 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#37B7C4] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300 border-2 border-[#37B7C4]/30">
                <div className="mb-4 flex justify-center">
                  <div className="relative w-16 h-16">
                    {/* Outer rotating ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#37B7C4]/20 animate-spin-slow" style={{animationDuration: '12s'}}></div>
                    {/* Middle ring */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#37B7C4]/10 to-white/50"></div>
                    {/* Inner circle with icon */}
                    <div className="absolute inset-3 rounded-full bg-white shadow-inner flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                      </svg>
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-full bg-[#37B7C4]/10 animate-pulse"></div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#37B7C4] text-center">
                  生産性向上
                </h3>
              </div>
            </div>

            {/* 属人化解消 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#37B7C4] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300 border-2 border-[#37B7C4]/30">
                <div className="mb-4 flex justify-center">
                  <div className="relative w-16 h-16">
                    {/* Outer rotating ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#37B7C4]/20 animate-spin-slow" style={{animationDuration: '14s', animationDirection: 'reverse'}}></div>
                    {/* Middle ring */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-bl from-[#37B7C4]/10 to-white/50"></div>
                    {/* Inner circle with icon */}
                    <div className="absolute inset-3 rounded-full bg-white shadow-inner flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                      </svg>
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-full bg-[#37B7C4]/10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#37B7C4] text-center">
                  属人化解消
                </h3>
              </div>
            </div>

            {/* システム全体最適 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#37B7C4] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300 border-2 border-[#37B7C4]/30">
                <div className="mb-4 flex justify-center">
                  <div className="relative w-16 h-16">
                    {/* Outer rotating ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#37B7C4]/20 animate-spin-slow" style={{animationDuration: '16s'}}></div>
                    {/* Middle ring */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#37B7C4]/10 to-white/50"></div>
                    {/* Inner circle with icon */}
                    <div className="absolute inset-3 rounded-full bg-white shadow-inner flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-full bg-[#37B7C4]/10 animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#37B7C4] text-center">
                  システム全体最適
                </h3>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -50px) scale(1.1); }
          50% { transform: translate(-50px, 50px) scale(0.9); }
          75% { transform: translate(-50px, -50px) scale(1.05); }
        }

        @keyframes gradient-shift-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-50px, 50px) scale(1.05); }
          50% { transform: translate(50px, -50px) scale(1.1); }
          75% { transform: translate(50px, 50px) scale(0.95); }
        }

        @keyframes morph {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: rotate(0deg) scale(1);
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: rotate(180deg) scale(1.1);
          }
        }

        @keyframes morph-reverse {
          0%, 100% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: rotate(0deg) scale(1);
          }
          50% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: rotate(-180deg) scale(1.1);
          }
        }

        @keyframes float-particle {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-gradient-shift {
          animation: gradient-shift 20s ease infinite;
        }

        .animate-gradient-shift-reverse {
          animation: gradient-shift-reverse 20s ease infinite;
        }

        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }

        .animate-morph-reverse {
          animation: morph-reverse 8s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 20s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }

        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .animate-spin-reverse {
          animation: spin-reverse 8s linear infinite;
        }

        @keyframes orbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .animate-orbit {
          animation: orbit 20s linear infinite;
          transform-origin: center;
        }

        @keyframes counter-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .animate-counter-rotate {
          animation: counter-rotate 20s linear infinite;
        }

        @keyframes fade-in-badge {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in-badge {
          animation: fade-in-badge 0.6s ease-out forwards;
          opacity: 1 !important;
        }

        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        @keyframes pulse-line {
          0%, 100% {
            opacity: 0.3;
            stroke-width: 2;
          }
          50% {
            opacity: 0.8;
            stroke-width: 3;
          }
        }

        .animate-pulse-line {
          animation: pulse-line 2s ease-in-out infinite;
        }

      `}</style>
    </div>
  );
}