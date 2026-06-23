'use client';

import React, { useState, useEffect } from 'react';
import { DocDownloadCta } from './PortedCtaSection';

export default function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // 固定ヘッダーの高さ（画面サイズに応じて実測）。これを除いた領域の中央にコンテンツを合わせる
  const [headerOffset, setHeaderOffset] = useState(0);
  // マットな紙質感のノイズ背景（Before用）
  const paperTexture = `linear-gradient(180deg, rgba(255,255,255,0.82), rgba(247,248,250,0.9)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`;

  useEffect(() => {
    setMounted(true);
    const updateMetrics = () => {
      setIsMobile(window.innerWidth < 640);
      // 固定ヘッダーの実高さを取得（存在しなければ0）
      const header = document.querySelector('header');
      setHeaderOffset(header ? Math.round(header.getBoundingClientRect().height) : 0);
    };
    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, []);

  useEffect(() => {
    if (!mounted || isMobile) return;

    const handleScroll = () => {
      const track = document.getElementById('before-after-track');
      if (!track) return;

      const rect = track.getBoundingClientRect();
      // sticky で固定されるコンテンツの高さ（= ヘッダーを除いた表示領域）に対する進捗
      const pinnedHeight = window.innerHeight - headerOffset;
      const pinDistance = rect.height - pinnedHeight;

      let progress = 0;
      if (pinDistance > 0) {
        progress = Math.max(0, Math.min(1, -rect.top / pinDistance));
      }

      setScrollProgress(progress);

      // 進捗が中央（0.5）を超えたら導入後へ切り替え
      setActiveTab(progress > 0.5 ? 'after' : 'before');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted, isMobile, headerOffset]);

  return (
    <section id="before-after" className="pt-24 sm:pt-32 pb-32 sm:pb-40 relative sm:overflow-visible overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      {/* Mobile Layout */}
      <div className="sm:hidden container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-xs text-[#37B7C4] font-semibold mb-4">Problem</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
            図面や書類の管理において、こんな課題はありませんか？
          </h2>

          {/* Tab buttons (mobile only) */}
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => setActiveTab('before')}
              className={`flex-1 min-h-[44px] px-3 py-2 rounded-full text-sm font-bold text-center transition-all duration-300 ${
                activeTab === 'before' ? 'bg-[#f54848] text-white' : 'bg-gray-200 text-gray-500'
              }`}
            >
              導入前の課題
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`flex-1 min-h-[44px] px-3 py-2 rounded-full text-sm font-bold text-center transition-all duration-300 ${
                activeTab === 'after' ? 'bg-[#37B7C4] text-white' : 'bg-gray-200 text-gray-500'
              } ${activeTab === 'after' ? '' : 'animate-soft-pulse'}`}
            >
              ARCHAIVE導入後
            </button>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="relative">
          {/* Before content */}
          <div className={`${activeTab === 'before' ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'} transition-opacity duration-500`}>
            <div className="grid grid-cols-1 gap-6">
              {/* Problem 1 */}
              <div className="relative rounded-2xl p-5 border border-gray-300/70 flex flex-col" style={{
                backgroundImage: paperTexture,
                boxShadow: '6px 6px 0px #f54848'
              }}>
                <img
                  src="/images/illustration/undraw_file-search_cbur.svg"
                  alt="図面検索の課題イラスト"
                  className="w-full max-w-[14rem] h-36 object-contain mb-6 mx-auto mt-2"
                />
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  検索に膨大な時間がかかる
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow text-sm font-medium">
                  過去の図面や仕様を検索・再利用できず、毎回ゼロからの調査に多大な時間を浪費。
                </p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center text-[#f54848] text-sm font-semibold">
                    <svg className="w-4 h-4 mr-2 text-[#f54848]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                    年間数百時間のロス
                  </div>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="relative rounded-2xl p-5 border border-gray-300/70 flex flex-col" style={{
                backgroundImage: paperTexture,
                boxShadow: '6px 6px 0px #f54848'
              }}>
                <img
                  src="/images/illustration/undraw_data-at-work_3tbf (1).svg"
                  alt="データ活用の課題イラスト"
                  className="w-full max-w-[14rem] h-36 object-contain mb-6 mx-auto mt-2"
                />
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  業務やデータが属人化
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow text-sm font-medium">
                  重要情報が担当者の記憶に依存（属人化）し、会社のノウハウが失われ続けている。
                </p>
                <div className="mt-3 pt-3 border-t border-gray-200/80">
                  <div className="flex items-center text-[#f54848] text-sm font-semibold">
                    <svg className="w-4 h-4 mr-2 text-[#f54848]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    ノウハウ流出リスク
                  </div>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="relative bg-white rounded-2xl p-5 border border-gray-200 flex flex-col" style={{ boxShadow: '6px 6px 0px #f54848' }}>
                <img
                  src="/images/illustration/undraw_my-answer_au1h.svg"
                  alt="部門間連携の課題イラスト"
                  className="w-full max-w-[14rem] h-36 object-contain mb-6 mx-auto mt-2"
                />
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  部門間の確認作業と手戻り
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow text-sm font-medium">
                  部門間の調整や手戻りにかかる「見えない時間」が、確実にコストを圧迫。
                </p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center text-[#f54848] text-sm font-semibold">
                    <svg className="w-4 h-4 mr-2 text-[#f54848]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    隠れコストの増大
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After content */}
          <div className={`${activeTab === 'after' ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'} transition-opacity duration-500`}>
            <div className="grid grid-cols-1 gap-6">
              {/* Solution 1 */}
              <div
                className="relative rounded-2xl p-5 border border-gray-300/70 flex flex-col"
                style={{
                  backgroundImage: paperTexture,
                  boxShadow: '6px 6px 0px #37B7C4',
                }}
              >
                <img
                  src="/images/illustration/undraw_document-search_2o7x.svg"
                  alt="検索ソリューションイラスト"
                  className="w-full max-w-[14rem] h-36 object-contain mb-7 mx-auto mt-4"
                />
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                    欲しいデータが<span className="text-[#0ea5e9]">5秒</span>で見つかる
                  </h3>
                  <p className="text-gray-700 leading-relaxed flex-grow text-sm font-medium">
                    「厚さ5mmのSUS304を使ったブラケット図面は？」といった自然な対話で、AIが意図を汲み取り、最適な候補を瞬時に提示。
                  </p>
                  <div className="mt-3 pt-3 border-t border-gray-200/70">
                    <div className="flex items-center text-[#0f172a] text-sm font-semibold">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      検索時間を99%削減
                    </div>
                  </div>
              </div>

              {/* Solution 2 */}
              <div
                className="relative rounded-2xl p-5 border border-gray-300/70 flex flex-col"
                style={{
                  backgroundImage: paperTexture,
                  boxShadow: '6px 6px 0px #37B7C4',
                }}
              >
                <img
                  src="/images/illustration/undraw_website-visitors_qy9c.svg"
                  alt="情報共有のソリューションイラスト"
                  className="w-full max-w-[14rem] h-36 object-contain mb-7 mx-auto mt-4"
                />
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                    全員が同じ情報にアクセス可能
                  </h3>
                  <p className="text-gray-700 leading-relaxed flex-grow text-sm font-medium">
                    ベテランの頭の中にあった知見を、誰もがアクセスできる「会社の資産」に変え、新任者でも的確な判断を可能に。
                  </p>
                  <div className="mt-3 pt-3 border-t border-gray-200/70">
                    <div className="flex items-center text-[#0f172a] text-sm font-semibold">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      ナレッジを資産化
                    </div>
                  </div>
              </div>

              {/* Solution 3 */}
              <div
                className="relative rounded-2xl p-5 border border-gray-300/70 flex flex-col"
                style={{
                  backgroundImage: paperTexture,
                  boxShadow: '6px 6px 0px #37B7C4',
                }}
              >
                <img
                  src="/images/illustration/undraw_group-project_kow1.svg"
                  alt="部門連携のソリューションイラスト"
                  className="w-full max-w-[14rem] h-36 object-contain mb-7 mx-auto mt-4"
                />
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                    部門間の壁を超える連携
                  </h3>
                  <p className="text-gray-700 leading-relaxed flex-grow text-sm font-medium">
                    ARCHAIVEがハブとなり、全部門の情報がリアルタイムに連携。開発スピードを劇的に向上。
                  </p>
                  <div className="mt-3 pt-3 border-t border-gray-200/70">
                    <div className="flex items-center text-[#0f172a] text-sm font-semibold">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      開発速度2倍
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom message (mobile) */}
        <div className="text-center mt-6">
          {activeTab === 'after' && (
            <div className="animate-fade-in">
              <DocDownloadCta />
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block">
      {/* スクロール用の縦長トラック。この中で sticky によりコンテンツが画面中央に固定される */}
      <div id="before-after-track" className="relative" style={{ height: '360vh' }}>
      <div
        className="sticky flex items-center"
        style={{ top: headerOffset, height: `calc(100vh - ${headerOffset}px)` }}
      >
      <div className="container mx-auto px-4 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm text-[#37B7C4] font-semibold mb-8 tracking-wider">Problem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            図面や書類の管理において、こんな課題はありませんか？
          </h2>

          {/* Progress indicator */}
          <div className="inline-block mt-4">
            <div className="flex items-center gap-2">
              <div className={`min-w-[180px] px-6 py-2 rounded-full font-bold text-center transition-all duration-700 ${
                activeTab === 'before'
                  ? 'bg-[#f54848] text-white'
                  : 'bg-gray-200 text-gray-400'
              }`}>
                導入前の課題
              </div>
              <div className={`min-w-[180px] px-6 py-2 rounded-full font-bold text-center transition-all duration-700 ${
                activeTab === 'after'
                  ? 'bg-[#37B7C4] text-white'
                  : 'bg-gray-200 text-gray-400'
              }`}>
                ARCHAIVE導入後
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto">
          {/* Connection visual */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
            <div className={`w-32 h-32 rounded-full transition-colors duration-1000 ${
              activeTab === 'after' ? 'bg-[#37B7C4]/10' : 'bg-gray-400/10'
            }`}>
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                  <path
                    d={activeTab === 'after' ? "M9 12l2 2 4-4" : "M6 18L18 6M6 6l12 12"}
                    stroke={activeTab === 'after' ? "#37B7C4" : "#9CA3AF"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-1000"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Before content */}
          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ease-out ${
            activeTab === 'before'
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4 pointer-events-none absolute inset-0'
          }`}>
            {/* Problem 1 */}
              <div className="relative h-full">
                <div className="relative rounded-2xl p-6 border border-gray-300/70 h-full flex flex-col" style={{
                backgroundImage: paperTexture,
                boxShadow: '6px 6px 0px #f54848'
              }}>
                <img
                  src="/images/illustration/undraw_file-search_cbur.svg"
                  alt="図面検索の課題イラスト"
                  className="w-[12rem] h-[8rem] object-contain mb-7 mx-auto mt-4"
                />
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                  検索に膨大な時間がかかる
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow font-medium">
                  過去の図面や仕様を検索・再利用できず、毎回ゼロからの調査に多大な時間を浪費。
                </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-[#f54848]">
                      <svg className="w-5 h-5 mr-2 text-[#f54848]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                    <span className="font-semibold">年間数百時間のロス</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 2 */}
              <div className="relative h-full">
                <div className="relative rounded-2xl p-6 border border-gray-300/70 h-full flex flex-col" style={{
                backgroundImage: paperTexture,
                boxShadow: '6px 6px 0px #f54848'
              }}>
                <img
                  src="/images/illustration/undraw_data-at-work_3tbf (1).svg"
                  alt="データ活用の課題イラスト"
                  className="w-[12rem] h-[8rem] object-contain mb-7 mx-auto mt-4"
                />
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                  業務やデータが属人化
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow font-medium">
                  重要情報が担当者の記憶に依存（属人化）し、会社のノウハウが失われ続けている。
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200/80">
                  <div className="flex items-center text-[#f54848]">
                    <svg className="w-5 h-5 mr-2 text-[#f54848]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="font-semibold">ノウハウ流出リスク</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="relative h-full">
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 h-full flex flex-col" style={{
                boxShadow: '6px 6px 0px #f54848'
              }}>
                <img
                  src="/images/illustration/undraw_my-answer_au1h.svg"
                  alt="部門間連携の課題イラスト"
                  className="w-[12rem] h-[8rem] object-contain mb-7 mx-auto mt-4"
                />
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                  部門間の確認作業と手戻り
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow font-medium">
                  部門間の調整や手戻りにかかる「見えない時間」が、確実にコストを圧迫。
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#f54848]">
                    <svg className="w-5 h-5 mr-2 text-[#f54848]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">隠れコストの増大</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After content */}
          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ease-out ${
            activeTab === 'after'
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4 pointer-events-none absolute inset-0'
          }`}>
            {/* Solution 1 */}
              <div className="relative h-full">
                <div
                  className="relative rounded-2xl p-6 border border-gray-300/70 h-full flex flex-col"
                  style={{
                    backgroundImage: paperTexture,
                    boxShadow: '6px 6px 0px #37B7C4',
                  }}
                >
                    <img
                      src="/images/illustration/undraw_document-search_2o7x.svg"
                      alt="検索ソリューションイラスト"
                      className="w-56 h-36 object-contain mb-7 mx-auto mt-4"
                    />
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                      欲しいデータが<span className="text-[#0ea5e9]">5秒</span>で見つかる
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow font-medium">
                      「厚さ5mmのSUS304を使ったブラケット図面は？」といった自然な対話で、AIが意図を汲み取り、最適な候補を瞬時に提示。
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-200/70">
                      <div className="flex items-center text-[#0f172a]">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="font-semibold">検索時間を99%削減</span>
                      </div>
                    </div>
                </div>
              </div>

            {/* Solution 2 */}
            <div className="relative h-full">
                <div
                  className="relative rounded-2xl p-6 border border-gray-300/70 h-full flex flex-col"
                  style={{
                    backgroundImage: paperTexture,
                    boxShadow: '6px 6px 0px #37B7C4',
                  }}
                >
                    <img
                      src="/images/illustration/undraw_website-visitors_qy9c.svg"
                      alt="情報共有のソリューションイラスト"
                      className="w-56 h-36 object-contain mb-7 mx-auto mt-4"
                    />
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                    全員が同じ情報にアクセス可能
                  </h3>
                  <p className="text-gray-700 leading-relaxed flex-grow font-medium">
                    ベテランの頭の中にあった知見を、誰もがアクセスできる「会社の資産」に変え、新任者でも的確な判断を可能に。
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200/70">
                    <div className="flex items-center text-[#0f172a]">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold">ナレッジを資産化</span>
                    </div>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="relative h-full">
                <div
                  className="relative rounded-2xl p-6 border border-gray-300/70 h-full flex flex-col"
                  style={{
                    backgroundImage: paperTexture,
                    boxShadow: '6px 6px 0px #37B7C4',
                  }}
                >
                    <img
                      src="/images/illustration/undraw_group-project_kow1.svg"
                      alt="部門連携のソリューションイラスト"
                      className="w-56 h-36 object-contain mb-7 mx-auto mt-4"
                    />
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                    部門間の壁を超える連携
                  </h3>
                  <p className="text-gray-700 leading-relaxed flex-grow font-medium">
                    ARCHAIVEがハブとなり、全部門の情報がリアルタイムに連携。<br />
                    開発スピードを劇的に向上。
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200/70">
                    <div className="flex items-center text-[#0f172a]">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="font-semibold">開発速度2倍</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom message: スクロール誘導のみ。CTA はピン留め領域の外（下）に置く。
            before のヒント有無で中央寄せが動かないよう min-h で高さを確保。 */}
        <div className="text-center mt-8 min-h-[2.5rem]">
          {activeTab === 'before' && (
            <p className="text-2xl font-bold text-gray-700">
              <span className="inline-block animate-bounce">⬇</span> スクロールして解決策を見る
            </p>
          )}
        </div>
      </div>
      </div>
      </div>
      {/* 導入後CTA: ピン留め領域の外（下）に配置。スクロール中は見えず、通過後に現れる */}
      <div className="container mx-auto px-4 pb-8">
        <DocDownloadCta />
      </div>
      </div>
    </section>
  );
}
