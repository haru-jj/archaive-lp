'use client';

import Link from 'next/link';
import InteractiveDemo from './InteractiveDemo';
import HeroQuickNav from './HeroQuickNav';

export default function HeroSection() {
  return (
    <>
      {/* 分割レイアウト型ヒーローセクション */}
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

            {/* 右側：ビジュアルエリア（ダッシュボードモックアップ） */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* ブラウザヘッダー */}
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
                
                {/* ダッシュボードコンテンツ */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  {/* 検索バー */}
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
                  
                  {/* 検索結果 */}
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
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gray-200 rounded mr-3"></div>
                        <div className="flex-1">
                          <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                          <div className="h-2 bg-gray-100 rounded w-full mb-1"></div>
                          <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI応答 */}
                  <div className="mt-4 bg-[#37B7C4]/5 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#37B7C4] rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                        AI
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-600">
                          <div className="h-2 bg-[#37B7C4]/20 rounded w-full mb-1"></div>
                          <div className="h-2 bg-[#37B7C4]/20 rounded w-5/6 mb-1"></div>
                          <div className="h-2 bg-[#37B7C4]/20 rounded w-4/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* フローティング要素 */}
              <div className="absolute -top-4 -right-4 bg-[#37B7C4] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                リアルタイム検索
              </div>
            </div>
          </div>
        </div>
      </section>

      <HeroQuickNav />

      {/* インタラクティブデモセクション */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              実際の操作画面で体験してみましょう
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              本番環境と同じインターフェースで、ARCHAIVEの検索力を体感できます
            </p>
            <p className="text-sm text-[#37B7C4] font-medium">
              ※ デモ環境のため、実際のデータは表示されません
            </p>
          </div>

          {/* インタラクティブデモコンポーネント */}
          <div className="max-w-6xl mx-auto">
            <InteractiveDemo />

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#37B7C4]/5 to-[#37B7C4]/10 rounded-2xl p-4 sm:p-6 md:p-8 mt-8 sm:mt-12 border border-[#37B7C4]/20">
              <div className="text-center">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#333333] mb-2 sm:mb-3">
                    次のステップ：カスタマイズデモ
                  </h3>
                  <p className="text-sm text-gray-600">
                    貴社の図面や仕様書を使った、実践的なデモンストレーション
                  </p>
                </div>
                
                <div className="flex flex-col gap-4 justify-center items-center">
                  <Link
                    href="/apply"
                    className="bg-transparent border-2 border-[#37B7C4] text-[#37B7C4] rounded px-5 py-2.5 text-sm cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity font-semibold"
                  >
                    <span className="flex items-center gap-1.5">✉ 無料トライアル</span>
                  </Link>
                  
                  <div className="text-center mt-2 sm:mt-0">
                    <p className="text-xs sm:text-sm text-gray-600">
                      <span className="block sm:inline">✓ 約30分のオンライン説明</span>
                      <span className="block sm:inline sm:ml-2">✓ 貴社データでの実演</span>
                      <span className="block sm:inline sm:ml-2">✓ 費用お見積もり</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </>
  );
}