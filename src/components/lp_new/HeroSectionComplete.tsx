'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroQuickNav from './HeroQuickNav';

export default function HeroSectionComplete() {
  const [currentDesign, setCurrentDesign] = useState(0);

  const designs = [
    { id: 0, name: '分割型' },
    { id: 1, name: 'ティール' },
    { id: 2, name: 'センター' },
    { id: 3, name: 'ビデオ' },
    { id: 4, name: 'ウェーブ' }
  ];

  const renderDesign = () => {
    switch(currentDesign) {
      case 0:
        // デザイン1: 左右分割型（オリジナル）
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
                    <Link href="/apply" className="inline-block bg-[#37B7C4] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2a9aa5] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      無料デモを申し込む
                    </Link>
                    <Link href="#features" className="inline-block bg-white text-[#37B7C4] border-2 border-[#37B7C4] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#37B7C4]/10 transition-colors duration-200">
                      詳細資料をダウンロード
                    </Link>
                  </div>
                </div>

                {/* 右側：ビジュアルエリア */}
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="bg-gray-100 h-10 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                      <div className="bg-[#37B7C4]/10 rounded-lg p-4 mb-4 border-2 border-[#37B7C4]/20">
                        <div className="h-3 bg-[#37B7C4]/30 rounded w-3/4 animate-pulse"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                          <div className="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                          <div className="h-2 bg-gray-100 rounded w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case 1:
        // デザイン2: 背景#37B7C4のフルカラーデザイン
        return (
          <section className="relative min-h-screen bg-[#37B7C4] overflow-hidden">
            {/* 装飾的な円 */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 py-20 relative z-10">
              <div className="text-center max-w-5xl mx-auto">
                <div className="mb-8">
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  データの海から<br />
                  <span className="text-yellow-300">価値を瞬時に発見</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                  AIが貴社の技術情報を理解し、必要な答えを数秒でお届け。
                  もう探す時間は必要ありません。
                </p>
                
                {/* CTAボタン */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                  <Link href="/apply" className="inline-block bg-white text-[#37B7C4] px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-[#333] transition-all duration-300 shadow-2xl transform hover:scale-105">
                    今すぐ無料デモを体験
                  </Link>
                  <Link href="#features" className="inline-block bg-transparent text-white border-2 border-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#37B7C4] transition-all duration-300">
                    詳しい機能を見る
                  </Link>
                </div>

                {/* 実績 */}
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-300 mb-2">100+</div>
                    <div className="text-white/80">導入企業</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-300 mb-2">10x</div>
                    <div className="text-white/80">効率向上</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-300 mb-2">24/7</div>
                    <div className="text-white/80">稼働保証</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case 2:
        // デザイン3: センタードレイアウト
        return (
          <section className="relative min-h-screen bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 py-20">
              <div className="text-center max-w-4xl mx-auto">
                {/* バッジ */}
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#37B7C4] to-purple-600 text-white rounded-full text-sm font-semibold">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    AI-Powered Document Search
                  </div>
                </div>

                {/* メインタイトル */}
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-[#37B7C4] to-purple-600 bg-clip-text text-transparent">
                    製造業の未来は
                  </span>
                  <br />
                  <span className="text-[#333333]">データ活用から始まる</span>
                </h1>

                {/* サブテキスト */}
                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                  散在する技術情報を統合し、AIが最適な答えを導き出す。<br />
                  ARCHAIVEが、貴社のデータを競争力に変えます。
                </p>

                {/* インタラクティブデモプレビュー */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
                  <div className="bg-gradient-to-r from-[#37B7C4]/10 to-purple-600/10 rounded-2xl p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#37B7C4] to-purple-600 rounded-full flex items-center justify-center text-white">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">「SUS304 ブラケット 5mm」と入力してみてください</p>
                    <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                      <div className="h-3 bg-gradient-to-r from-[#37B7C4]/30 to-purple-600/30 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/apply" className="inline-block bg-gradient-to-r from-[#37B7C4] to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    無料デモを申し込む
                  </Link>
                  <Link href="#features" className="inline-block bg-white text-[#333] border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg hover:border-[#37B7C4] hover:text-[#37B7C4] transition-colors duration-200">
                    詳細資料をダウンロード
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );

      case 3:
        // デザイン4: ビデオ背景風
        return (
          <section className="relative min-h-screen bg-gray-900 overflow-hidden">
            {/* ビデオ背景エフェクト */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#37B7C4]/20 to-purple-600/20"></div>
              {/* アニメーションドット */}
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle, #37B7C4 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
                animation: 'slide 20s linear infinite'
              }}></div>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                {/* 左側：テキスト */}
                <div>
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-[#37B7C4]/20 backdrop-blur text-[#37B7C4] rounded-full text-sm font-semibold border border-[#37B7C4]/30">
                      NEXT GENERATION DX
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    データの力で<br />
                    <span className="text-[#37B7C4]">製造業を革新</span>
                  </h1>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    AIと人が協働する新しい製造現場。<br />
                    ARCHAIVEが、その架け橋となります。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/apply" className="inline-block bg-[#37B7C4] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2a9aa5] transition-all duration-200 shadow-lg hover:shadow-xl">
                      無料デモを申し込む
                    </Link>
                    <Link href="#features" className="inline-block bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 backdrop-blur transition-all duration-200">
                      詳細を見る
                    </Link>
                  </div>
                </div>

                {/* 右側：ホログラフィックカード */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#37B7C4]/10 to-purple-600/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                        <div className="text-2xl font-bold text-[#37B7C4] mb-1">0.3秒</div>
                        <div className="text-xs text-gray-400">検索速度</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                        <div className="text-2xl font-bold text-purple-400 mb-1">99.9%</div>
                        <div className="text-xs text-gray-400">精度</div>
                      </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm text-gray-300">AI処理中...</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gradient-to-r from-[#37B7C4]/50 to-purple-600/50 rounded animate-pulse"></div>
                        <div className="h-2 bg-gradient-to-r from-purple-600/50 to-[#37B7C4]/50 rounded animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="h-2 bg-gradient-to-r from-[#37B7C4]/50 to-purple-600/50 rounded animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes slide {
                0% { transform: translateX(0) translateY(0); }
                100% { transform: translateX(50px) translateY(50px); }
              }
            `}</style>
          </section>
        );

      case 4:
        // デザイン5: ウェーブデザイン
        return (
          <section className="relative min-h-screen bg-white overflow-hidden">
            {/* ウェーブ背景 */}
            <div className="absolute inset-0">
              <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" fill="none">
                <path fill="#37B7C4" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
              <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" fill="none">
                <path fill="#37B7C4" fillOpacity="0.05" d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,213.3C672,224,768,192,864,176C960,160,1056,160,1152,181.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
              <div className="max-w-6xl mx-auto">
                {/* トップメッセージ */}
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#37B7C4]/10 rounded-full mb-6">
                    <svg className="w-10 h-10 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-6 leading-tight">
                    データを、
                    <span className="relative">
                      <span className="text-[#37B7C4]">知恵</span>
                      <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 20" fill="none">
                        <path d="M0 10 Q 25 0, 50 10 T 100 10" stroke="#37B7C4" strokeWidth="2" fill="none" opacity="0.3"/>
                      </svg>
                    </span>
                    に変える
                  </h1>
                  <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                    20年分の技術データも、ARCHAIVEなら一瞬で。<br />
                    貴社の"経験"を"競争力"に変換します。
                  </p>
                </div>

                {/* 3つの価値提案 */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="text-center group">
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="w-16 h-16 bg-[#37B7C4]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#37B7C4]/20 transition-colors">
                        <svg className="w-8 h-8 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-[#333333] mb-2">即座に発見</h3>
                      <p className="text-sm text-gray-600">数時間の検索が数秒に</p>
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="w-16 h-16 bg-[#37B7C4]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#37B7C4]/20 transition-colors">
                        <svg className="w-8 h-8 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-[#333333] mb-2">知識を共有</h3>
                      <p className="text-sm text-gray-600">属人化から組織知へ</p>
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="w-16 h-16 bg-[#37B7C4]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#37B7C4]/20 transition-colors">
                        <svg className="w-8 h-8 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-[#333333] mb-2">成長し続ける</h3>
                      <p className="text-sm text-gray-600">使うほど賢くなるAI</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/apply" className="inline-block bg-[#37B7C4] text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#2a9aa5] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      無料デモを申し込む
                    </Link>
                    <Link href="#features" className="inline-block bg-white text-[#37B7C4] border-2 border-[#37B7C4] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#37B7C4]/10 transition-colors duration-200">
                      詳細資料をダウンロード
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {/* デザイン切り替えボタン */}
      <div className="fixed top-24 right-4 z-50 bg-white rounded-lg shadow-lg p-1 flex flex-col space-y-1">
        {designs.map((design) => (
          <button
            key={design.id}
            onClick={() => setCurrentDesign(design.id)}
            className={`px-4 py-2 rounded text-sm font-medium transition-all whitespace-nowrap ${
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
        <HeroQuickNav />
      </div>
    </div>
  );
}