'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroQuickNav from './HeroQuickNav';

export default function HeroSectionVariations() {
  const [currentDesign, setCurrentDesign] = useState(0);

  const designs = [
    { id: 0, name: 'ダッシュボード' },
    { id: 1, name: 'データ分析' },
    { id: 2, name: '3D図面' },
    { id: 3, name: 'AIフロー' },
    { id: 4, name: '実績' }
  ];

  const renderDesign = () => {
    switch(currentDesign) {
      case 0:
        // ダッシュボードビュー（現在のデザイン）
        return (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gray-100 h-10 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 text-center text-xs text-gray-500">
                archaive.ai/dashboard
              </div>
            </div>
            <div className="p-6 bg-gradient-to-b from-white to-gray-50">
              <div className="bg-[#37B7C4]/10 rounded-lg p-4 mb-4 border-2 border-[#37B7C4]/20">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#37B7C4] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <div className="flex-1">
                    <div className="h-3 bg-[#37B7C4]/30 rounded w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gray-200 rounded mr-3"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded w-full mb-1"></div>
                      <div className="h-2 bg-gray-100 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-[#37B7C4]/5 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#37B7C4] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                    AI
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-[#37B7C4]/20 rounded w-full mb-1"></div>
                    <div className="h-2 bg-[#37B7C4]/20 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 1:
        // データ分析ビュー
        return (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#37B7C4] to-[#2a9aa5] text-white p-4">
              <h3 className="text-lg font-bold">リアルタイム分析ダッシュボード</h3>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-500 mb-2">検索効率化</div>
                  <div className="text-2xl font-bold text-[#37B7C4]">85%↑</div>
                  <div className="mt-2 h-16 bg-gradient-to-t from-[#37B7C4]/20 to-transparent rounded"></div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-500 mb-2">処理時間削減</div>
                  <div className="text-2xl font-bold text-green-500">-72%</div>
                  <div className="mt-2 h-16 bg-gradient-to-t from-green-500/20 to-transparent rounded"></div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">月次トレンド</span>
                  <span className="text-xs text-gray-500">2024年</span>
                </div>
                <div className="space-y-2">
                  {[65, 78, 82, 91, 95].map((value, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-xs text-gray-500 w-8">{index + 1}月</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 ml-2">
                        <div 
                          className="bg-[#37B7C4] h-2 rounded-full transition-all duration-500"
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600 ml-2">{value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        // 3D図面プレビュー
        return (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gray-900 text-white p-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
                <span className="text-sm font-medium">3D CAD Viewer</span>
              </div>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-gray-700 rounded">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-700 rounded">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* 3D風の立方体 */}
                  <div className="w-32 h-32 relative transform rotate-12">
                    <div className="absolute inset-0 bg-[#37B7C4]/20 border-2 border-[#37B7C4] transform skew-y-12"></div>
                    <div className="absolute inset-0 bg-[#37B7C4]/30 border-2 border-[#37B7C4] transform -skew-x-12 translate-x-4 -translate-y-4"></div>
                    <div className="absolute inset-0 bg-[#37B7C4]/40 border-2 border-[#37B7C4]"></div>
                  </div>
                  <div className="absolute -bottom-6 left-0 right-0 text-center">
                    <span className="text-xs text-white/70">SUS304_bracket.step</span>
                  </div>
                </div>
              </div>
              {/* グリッド背景 */}
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full" style={{
                  backgroundImage: `linear-gradient(#37B7C4 1px, transparent 1px), linear-gradient(90deg, #37B7C4 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
            </div>
            <div className="bg-gray-800 p-3 flex justify-around text-white/70 text-xs">
              <div>X: 150.00mm</div>
              <div>Y: 75.00mm</div>
              <div>Z: 5.00mm</div>
              <div>材質: SUS304</div>
            </div>
          </div>
        );

      case 3:
        // AIワークフロー図
        return (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-[#37B7C4] text-white p-4">
              <h3 className="text-lg font-bold flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                AI処理フロー
              </h3>
            </div>
            <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
              {/* フローチャート */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-3"></div>
                  <div className="text-sm font-medium">入力データ</div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-purple-500 to-[#37B7C4] mx-3"></div>
                  <div className="text-sm font-medium">AI解析</div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#37B7C4] rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-[#37B7C4] to-green-500 mx-3"></div>
                  <div className="text-sm font-medium">最適化</div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                    </svg>
                  </div>
                  <div className="flex-1 h-1 bg-green-500 mx-3 opacity-30"></div>
                  <div className="text-sm font-medium">結果出力</div>
                </div>
              </div>

              {/* リアルタイムメトリクス */}
              <div className="mt-6 bg-gradient-to-r from-[#37B7C4]/10 to-purple-500/10 rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#37B7C4]">0.3s</div>
                    <div className="text-xs text-gray-600">処理速度</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">98%</div>
                    <div className="text-xs text-gray-600">精度</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">24/7</div>
                    <div className="text-xs text-gray-600">稼働率</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        // 実績メトリクス
        return (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-[#37B7C4] text-white p-4">
              <h3 className="text-lg font-bold">導入効果実績</h3>
              <p className="text-xs opacity-80">100社以上の導入実績から</p>
            </div>
            <div className="p-6 bg-gray-50">
              {/* 大きな成果指標 */}
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-[#37B7C4] mb-2">10x</div>
                <div className="text-sm text-gray-600">業務効率向上</div>
              </div>

              {/* 詳細メトリクス */}
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">検索時間削減</span>
                    <span className="text-sm font-bold text-[#37B7C4]">時間→秒</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#37B7C4] to-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">データ活用率</span>
                    <span className="text-sm font-bold text-purple-600">全社展開</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-[#37B7C4] h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">ROI達成期間</span>
                    <span className="text-sm font-bold text-green-600">3ヶ月</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-600 to-[#37B7C4] h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              {/* お客様の声 */}
              <div className="mt-4 bg-[#37B7C4]/5 rounded-lg p-3">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#37B7C4] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                  <p className="text-xs text-gray-600 italic">
                    導入初日から効果を実感。今では無くてはならないツールです。
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#37B7C4]/5 via-white to-[#37B7C4]/10">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* 左側：テキストエリア */}
          <div className="text-left">
            <div className="mb-6">
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-6 leading-tight">
              技術情報を<br />
              <span className="text-[#37B7C4]">AIが瞬時に検索</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              図面・見積書・仕様書など、散在する技術データを一元管理。
              自然な言葉で質問するだけで、必要な情報が数秒で見つかります。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/apply"
                className="inline-block bg-[#37B7C4] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2a9aa5] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                無料デモを申し込む
              </Link>
              <Link
                href="#features"
                className="inline-block bg-white text-[#37B7C4] border-2 border-[#37B7C4] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#37B7C4]/10 transition-colors duration-200"
              >
                詳細資料をダウンロード
              </Link>
            </div>
          </div>

          {/* 右側：ビジュアルエリア */}
          <div className="relative">
            {/* デザイン切り替えボタン */}
            <div className="absolute -top-12 right-0 z-20 bg-white rounded-lg shadow-lg p-1 flex space-x-1">
              {designs.map((design) => (
                <button
                  key={design.id}
                  onClick={() => setCurrentDesign(design.id)}
                  className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                    currentDesign === design.id 
                      ? 'bg-[#37B7C4] text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  title={design.name}
                >
                  {design.name}
                </button>
              ))}
            </div>

            {/* デザインコンテンツ */}
            <div className="transition-all duration-500">
              {renderDesign()}
            </div>

            {/* フローティング要素 */}
            <div className="absolute -top-4 -right-4 bg-[#37B7C4] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              リアルタイム表示
            </div>
          </div>
        </div>
      </div>
      <HeroQuickNav />
    </section>
  );
}