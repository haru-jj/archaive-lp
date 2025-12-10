'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // マットな紙質感のノイズ背景（Before用）
  const paperTexture = `linear-gradient(180deg, rgba(255,255,255,0.82), rgba(247,248,250,0.9)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`;

  useEffect(() => {
    setMounted(true);
    const updateIsMobile = () => setIsMobile(window.innerWidth < 640);
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  useEffect(() => {
    if (!mounted || isMobile) return;

    const handleScroll = () => {
      const section = document.getElementById('before-after');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // セクションがビューポートに入り始めてから出るまでの進捗を計算
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      
      // セクションの上端がビューポートの80%の位置に来た時を開始点とする
      const triggerStart = windowHeight * 0.8;
      // セクションの下端がビューポートの20%の位置に来た時を終了点とする
      const triggerEnd = windowHeight * 0.2;
      
      let progress = 0;
      
      if (sectionTop <= triggerStart && sectionBottom >= triggerEnd) {
        // セクションがトリガー範囲内にある場合の進捗計算
        const totalScrollDistance = sectionHeight + (triggerStart - triggerEnd);
        const currentScrolled = triggerStart - sectionTop;
        progress = Math.max(0, Math.min(1, currentScrolled / totalScrollDistance));
      }

      setScrollProgress(progress);

      // タブ切り替えのロジックをシンプルに
      if (progress > 0.5) {
        setActiveTab('after');
      } else {
        setActiveTab('before');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted, isMobile]);

  return (
    <section id="before-after" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      {/* Mobile Layout */}
      <div className="sm:hidden container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs text-[#37B7C4] font-semibold mb-4">Problem</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
            図面や書類の管理において、こんな課題はありませんか？
          </h2>

          {/* Tab buttons (mobile only) */}
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={() => setActiveTab('before')}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === 'before' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-500'
              }`}
            >
              導入前の課題
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === 'after' ? 'bg-[#37B7C4] text-white' : 'bg-gray-200 text-gray-500'
              }`}
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
              <div className="relative rounded-2xl p-5 border border-gray-300/70 flex flex-col shadow-[0_10px_24px_rgba(0,0,0,0.1)]" style={{
                backgroundImage: paperTexture
              }}>
                <div className="w-12 h-12 bg-red-100/90 rounded-xl flex items-center justify-center mb-3 shadow-inner shadow-red-200/60">
                  <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  検索に時間がかかり、コストが増大
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow text-sm font-medium">
                  図面や価格・仕様書などの検索に時間がかかり、過去の類似実績や仕様を再利用できず、毎回ゼロからの調査に多大な時間が費やされている。
                </p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center text-red-600 text-sm font-semibold">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                    年間数百時間のロス
                  </div>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="relative rounded-2xl p-5 border border-gray-300/70 flex flex-col shadow-[0_10px_24px_rgba(0,0,0,0.1)]" style={{
                backgroundImage: paperTexture
              }}>
                <div className="w-12 h-12 bg-red-100/90 rounded-xl flex items-center justify-center mb-3 shadow-inner shadow-red-200/60">
                  <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  業務やデータが属人化
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow text-sm font-medium">
                  見積もり根拠やトラブル対処法などの重要な情報が、特定の担当者の経験や記憶に依存し、会社のノウハウが失われ続けている。
                </p>
                <div className="mt-3 pt-3 border-t border-gray-200/80">
                  <div className="flex items-center text-red-600 text-sm font-semibold">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    ノウハウ流出リスク
                  </div>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="relative bg-white rounded-2xl p-5 border border-gray-200 flex flex-col" style={{ boxShadow: '4px 4px 0px #EF4444' }}>
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  部門間の確認作業と手戻り
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow text-sm">
                  「設計」「調達」「営業」「製造」等で繰り返される部門間のやり取りや手戻りにかかる見えにくい時間が、確実にコストを圧迫。
                </p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center text-red-600 text-sm font-semibold">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="relative rounded-2xl p-5 flex flex-col bg-white/90 backdrop-blur-xl border border-[#37B7C4]/25 shadow-[0_18px_36px_rgba(55,183,196,0.2)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-[#E7F9FF] opacity-95" />
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#37B7C4]/12 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#37B7C4]/10 border border-[#37B7C4]/30 backdrop-blur-md rounded-xl flex items-center justify-center mb-3 shadow-inner shadow-[#37B7C4]/20">
                    <svg className="w-8 h-8 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
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
              </div>

              {/* Solution 2 */}
              <div className="relative rounded-2xl p-5 flex flex-col bg-white/92 backdrop-blur-xl border border-[#37B7C4]/20 shadow-[0_16px_32px_rgba(55,183,196,0.18)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-[#E7F9FF]/80 opacity-95" />
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#37B7C4]/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#37B7C4]/12 border border-[#37B7C4]/25 backdrop-blur-md rounded-xl flex items-center justify-center mb-3 shadow-inner shadow-[#37B7C4]/20">
                    <svg className="w-8 h-8 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
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
              </div>

              {/* Solution 3 */}
              <div className="relative rounded-2xl p-5 flex flex-col bg-white/92 backdrop-blur-xl border border-[#37B7C4]/20 shadow-[0_16px_32px_rgba(55,183,196,0.18)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-[#E7F9FF]/80 opacity-95" />
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#37B7C4]/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#37B7C4]/12 border border-[#37B7C4]/25 backdrop-blur-md rounded-xl flex items-center justify-center mb-3 shadow-inner shadow-[#37B7C4]/20">
                    <svg className="w-8 h-8 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
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
        </div>

        {/* Bottom message (mobile) */}
        <div className="text-center mt-6">
          {activeTab === 'after' && (
            <div className="animate-fade-in">
              <div className="flex justify-center">
                <Link
                  href="/download"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#37B7C4] to-[#2A8B96] text-white px-7 py-3 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    資料を受け取る（無料）
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-[#37B7C4] font-semibold mb-6">Problem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            図面や書類の管理において、こんな課題はありませんか？
          </h2>

          {/* Progress indicator */}
          <div className="inline-block mt-8">
            <div className="flex items-center gap-4">
              <div className={`px-6 py-2 rounded-full font-bold transition-all duration-700 ${
                activeTab === 'before'
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-200 text-gray-400'
              }`}>
                導入前の課題
              </div>
              <div className="relative w-20 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-gray-600 to-[#37B7C4] transition-all duration-1000 ease-out"
                  style={{ width: mounted ? `${scrollProgress * 100}%` : '0%' }}
                ></div>
              </div>
              <div className={`px-6 py-2 rounded-full font-bold transition-all duration-700 ${
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
          <div className={`grid md:grid-cols-3 gap-8 transition-opacity duration-1000 ${
            activeTab === 'before' ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'
          }`}>
            {/* Problem 1 */}
            <div className="relative h-full">
              <div className="relative rounded-2xl p-6 border border-gray-300/70 h-full flex flex-col shadow-[0_12px_30px_rgba(0,0,0,0.12)]" style={{
                backgroundImage: paperTexture
              }}>
                <div className="w-14 h-14 bg-red-100/90 rounded-xl flex items-center justify-center mb-4 shadow-inner shadow-red-200/60">
                  <svg className="w-9 h-9 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                  検索に時間がかかり、コストが増大
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow font-medium">
                  図面や価格・仕様書などの検索に時間がかかり、過去の類似実績や仕様を再利用できず、毎回ゼロからの調査に多大な時間が費やされている。
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-red-600">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                    <span className="font-semibold">年間数百時間のロス</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="relative h-full">
              <div className="relative rounded-2xl p-6 border border-gray-300/70 h-full flex flex-col shadow-[0_12px_30px_rgba(0,0,0,0.12)]" style={{
                backgroundImage: paperTexture
              }}>
                <div className="w-14 h-14 bg-red-100/90 rounded-xl flex items-center justify-center mb-4 shadow-inner shadow-red-200/60">
                  <svg className="w-9 h-9 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                  業務やデータが属人化
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow font-medium">
                  見積もり根拠やトラブル対処法などの重要な情報が、特定の担当者の経験や記憶に依存し、会社のノウハウが失われ続けている。
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200/80">
                  <div className="flex items-center text-red-600">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                boxShadow: '4px 4px 0px #EF4444'
              }}>
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  部門間の確認作業と手戻り
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  「設計」「調達」「営業」「製造」等で繰り返される部門間のやり取りや手戻りにかかる見えにくい時間が、確実にコストを圧迫。
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-red-600">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">隠れコストの増大</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After content */}
          <div className={`grid md:grid-cols-3 gap-8 transition-opacity duration-1000 ${
            activeTab === 'after' ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'
          }`}>
            {/* Solution 1 */}
            <div className="relative h-full">
              <div className="relative rounded-2xl p-6 h-full flex flex-col bg-white/90 backdrop-blur-xl border border-[#37B7C4]/25 shadow-[0_25px_50px_rgba(55,183,196,0.25)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-[#E7F9FF] opacity-95" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#37B7C4]/12 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#37B7C4]/10 border border-[#37B7C4]/30 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 shadow-inner shadow-[#37B7C4]/20">
                    <svg className="w-9 h-9 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
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
            </div>

            {/* Solution 2 */}
            <div className="relative h-full">
              <div className="relative rounded-2xl p-6 h-full flex flex-col bg-white/92 backdrop-blur-xl border border-[#37B7C4]/20 shadow-[0_18px_36px_rgba(55,183,196,0.18)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-[#E7F9FF]/80 opacity-95" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#37B7C4]/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#37B7C4]/12 border border-[#37B7C4]/25 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 shadow-inner shadow-[#37B7C4]/20">
                    <svg className="w-9 h-9 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
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
            </div>

            {/* Solution 3 */}
            <div className="relative h-full">
              <div className="relative rounded-2xl p-6 h-full flex flex-col bg-white/92 backdrop-blur-xl border border-[#37B7C4]/20 shadow-[0_18px_36px_rgba(55,183,196,0.18)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-[#E7F9FF]/80 opacity-95" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#37B7C4]/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#37B7C4]/12 border border-[#37B7C4]/25 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 shadow-inner shadow-[#37B7C4]/20">
                    <svg className="w-9 h-9 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                    部門間の壁を超える連携
                  </h3>
                  <p className="text-gray-700 leading-relaxed flex-grow font-medium">
                    ARCHAIVEがハブとなり、全部門の情報がリアルタイムに連携。開発スピードを劇的に向上。
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
        </div>

        {/* Bottom message */}
        <div className="text-center mt-8">
          <div className="inline-block">
            <p className={`text-2xl font-bold mb-4 transition-all duration-700 ${
              activeTab === 'before' ? 'text-gray-700' : 'text-[#37B7C4]'
            }`}>
              {activeTab === 'before'
                ? '⬇ スクロールして解決策を見る'
                : 'ARCHAIVEが全てを解決'
              }
            </p>
              {activeTab === 'after' && (
              <div className="animate-fade-in">
                <div className="flex justify-center">
                  <Link
                    href="/download"
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#37B7C4] to-[#2A8B96] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>3分でわかるARCHAIVE資料ダウンロード</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
