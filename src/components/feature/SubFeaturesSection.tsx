'use client';

import { useState, useEffect } from 'react';

export default function SubFeaturesSection() {
  const [mounted, setMounted] = useState(false);

  const subFeatures = [
    {
      title: "顧客管理",
      subtitle: "顧客情報と案件履歴を一元管理",
      illustration: (
        <div className="flex items-center justify-center h-24 mb-4">
          <div className="relative">
            <div className="w-16 h-12 bg-[#37B7C4]/10 rounded-lg relative overflow-hidden border-2 border-[#37B7C4]/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-[#37B7C4] rounded-full text-white text-xs flex items-center justify-center">👤</div>
              </div>
              <div className="absolute top-1 right-1 bg-[#37B7C4] text-white text-xs px-1 rounded">顧客</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "図面内書き込み",
      subtitle: "図面上に直接コメントや修正指示を追加",
      illustration: (
        <div className="flex items-center justify-center h-24 mb-4">
          <div className="relative">
            <div className="w-16 h-12 bg-gray-100 rounded border-2 border-gray-200 p-2">
              <div className="space-y-1">
                <div className="w-full h-1 bg-gray-300 rounded"></div>
                <div className="w-3/4 h-1 bg-gray-300 rounded"></div>
                <div className="w-full h-1 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#37B7C4] rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✏️</span>
            </div>
            <div className="absolute bottom-0 left-0 bg-[#37B7C4] text-white text-xs px-1 rounded">書込</div>
          </div>
        </div>
      )
    },
    {
      title: "組図・部品図管理",
      subtitle: "組立図と部品図の階層構造管理",
      illustration: (
        <div className="flex items-center justify-center h-24 mb-4">
          <div className="relative">
            <div className="space-y-1">
              <div className="bg-[#37B7C4] text-white text-xs px-2 py-1 rounded flex items-center">
                <span>📋</span>
                <span className="ml-1">組図</span>
              </div>
              <div className="ml-4 space-y-1">
                <div className="bg-[#37B7C4]/70 text-white text-xs px-2 py-1 rounded">部品A</div>
                <div className="bg-[#37B7C4]/70 text-white text-xs px-2 py-1 rounded">部品B</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "権限管理",
      subtitle: "ユーザーごとのアクセス権限設定",
      illustration: (
        <div className="flex items-center justify-center h-24 mb-4">
          <div className="relative">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-[#37B7C4] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🔒</span>
                </div>
                <div className="bg-[#37B7C4] text-white text-xs px-2 py-1 rounded">管理者</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-[#37B7C4]/60 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">👁</span>
                </div>
                <div className="bg-[#37B7C4]/60 text-white text-xs px-2 py-1 rounded">閲覧者</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "帳票発行",
      subtitle: "見積書や仕様書などの帳票を自動生成",
      illustration: (
        <div className="flex items-center justify-center h-24 mb-4">
          <div className="relative">
            <div className="w-16 h-12 bg-gray-100 rounded border-2 border-gray-200 p-2">
              <div className="space-y-1">
                <div className="w-full h-1 bg-gray-300 rounded"></div>
                <div className="w-3/4 h-1 bg-gray-300 rounded"></div>
                <div className="w-full h-1 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#37B7C4] rounded-full flex items-center justify-center">
              <span className="text-white text-xs">📄</span>
            </div>
            <div className="absolute bottom-0 left-0 bg-[#37B7C4] text-white text-xs px-1 rounded">帳票</div>
          </div>
        </div>
      )
    },
    {
      title: "キーワード検索",
      subtitle: "図面や文書をキーワードで高速検索",
      illustration: (
        <div className="flex items-center justify-center h-24 mb-4">
          <div className="relative">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-6 bg-gray-100 rounded border border-gray-300 flex items-center px-2">
                  <span className="text-xs text-gray-500">検索</span>
                </div>
                <div className="w-6 h-6 bg-[#37B7C4] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🔍</span>
                </div>
              </div>
              <div className="bg-[#37B7C4] text-white text-xs px-2 py-1 rounded">3件見つかりました</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "案件管理",
      subtitle: "プロジェクトの進捗状況と納期管理",
      illustration: (
        <div className="flex items-center justify-center h-24 mb-4">
          <div className="relative">
            <div className="space-y-1">
              <div className="bg-[#37B7C4] text-white text-xs px-2 py-1 rounded flex items-center">
                <span>📋</span>
                <span className="ml-1">案件A</span>
              </div>
              <div className="bg-gray-100 rounded p-1">
                <div className="w-full h-1 bg-gray-300 rounded"></div>
                <div className="w-3/4 h-1 bg-[#37B7C4] rounded mt-1"></div>
              </div>
              <div className="text-xs text-[#37B7C4] text-center">75%完了</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "３Dプレビュー",
      subtitle: "図面データの立体的な可視化と検証",
      illustration: (
        <div className="flex items-center justify-center h-24 mb-4">
          <div className="relative">
            {/* 3Dキューブのメイン形状 */}
            <div className="relative w-16 h-16">
              {/* キューブの前面 */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#37B7C4] to-[#2A9BA8] rounded-lg border border-[#37B7C4]/30 shadow-lg">
                <div className="absolute inset-2 border border-white/20 rounded"></div>
              </div>

              {/* キューブの上面（3D効果） */}
              <div className="absolute -top-2 left-2 w-12 h-12 bg-gradient-to-br from-[#4AC7D4] to-[#37B7C4] rounded-lg border border-[#37B7C4]/40 transform -skew-y-12 origin-bottom-left shadow-md">
                <div className="absolute inset-1 border border-white/30 rounded transform skew-y-12"></div>
              </div>

              {/* キューブの右面（3D効果） */}
              <div className="absolute top-2 -right-2 w-12 h-12 bg-gradient-to-br from-[#2A9BA8] to-[#1E7A85] rounded-lg border border-[#37B7C4]/40 transform skew-x-12 origin-top-left shadow-md">
                <div className="absolute inset-1 border border-white/20 rounded transform -skew-x-12"></div>
              </div>
            </div>

            {/* 3D回転アイコン */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-[#37B7C4] flex items-center justify-center">
              <div className="w-2 h-2 border border-[#37B7C4] rounded-full animate-spin"></div>
            </div>

            {/* プレビューライン */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-[#37B7C4] rounded-full"></div>
                <div className="w-1 h-1 bg-[#37B7C4]/60 rounded-full"></div>
                <div className="w-1 h-1 bg-[#37B7C4]/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative py-24 -mx-[50vw] left-[50%] right-[50%] w-screen bg-gradient-to-br from-gray-700 via-gray-600 to-slate-700">
      {/* ARCHAIVEのその他の機能セクション - 全幅背景 */}
      {/* 装飾的なメッシュ背景 */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
          <defs>
            <pattern id="mesh" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#37B7C4" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#37B7C4" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="#37B7C4" stopOpacity="0.05"/>
              <stop offset="100%" stopColor="#37B7C4" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh)"/>
          <rect width="100%" height="100%" fill="url(#meshGradient)"/>
        </svg>
      </div>

      {/* 動的な円形要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#37B7C4]/10 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}} />
        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-bl from-[#37B7C4]/15 to-transparent rounded-full blur-lg animate-pulse" style={{animationDelay: '2s', animationDuration: '3s'}} />
        <div className="absolute bottom-16 left-1/3 w-20 h-20 bg-gradient-to-tr from-[#37B7C4]/8 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '1s', animationDuration: '5s'}} />
        <div className="absolute bottom-32 right-1/4 w-28 h-28 bg-gradient-to-tl from-[#37B7C4]/12 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s', animationDuration: '4s'}} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
            ARCHAIVEのその他の機能
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-white/90 leading-relaxed">
              図面起点の製造業DXを加速し、さまざまな業種のニーズに応える機能を実装
            </p>
            <p className="text-white/90 leading-relaxed">
              一人一人にあったカスタマイズが可能です。
            </p>
          </div>
        </div>

        {/* 機能カード - レスポンシブグリッド */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 max-w-7xl mx-auto">
          {subFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-300/50 p-3 sm:p-6 lg:p-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ minHeight: '200px' }}
            >
              {/* 段階的ボーダー展開 - 四隅から展開 */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#37B7C4] group-hover:w-full transition-all duration-300 delay-75 rounded-full"></div>
              <div className="absolute top-0 right-0 w-0.5 h-0 bg-[#37B7C4] group-hover:h-full transition-all duration-300 delay-150 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#37B7C4] group-hover:w-full transition-all duration-300 delay-225 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-[#37B7C4] group-hover:h-full transition-all duration-300 delay-300 rounded-full"></div>

              {/* Technical Hover - 角のアクセント */}
              <div className="absolute top-2 left-2 w-0 h-0 border-l-2 border-t-2 border-[#37B7C4] opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-400 delay-100"></div>
              <div className="absolute top-2 right-2 w-0 h-0 border-r-2 border-t-2 border-[#37B7C4] opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-400 delay-175"></div>
              <div className="absolute bottom-2 left-2 w-0 h-0 border-l-2 border-b-2 border-[#37B7C4] opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-400 delay-250"></div>
              <div className="absolute bottom-2 right-2 w-0 h-0 border-r-2 border-b-2 border-[#37B7C4] opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-400 delay-325"></div>

              {/* ホバー時の背景グラデーション */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#37B7C4]/5 via-transparent to-[#37B7C4]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 rounded-2xl" />

              {/* 中央のダイヤモンド装飾 */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#37B7C4]/20 rotate-45 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-600 delay-400 rounded-sm"></div>

              <div className="flex flex-col items-center justify-center h-full relative z-10">
                {/* イラストレーション - 浮遊効果 */}
                <div className="mb-4 group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-300 delay-100">
                  {feature.illustration}
                </div>

                {/* タイトル - 段階的変化 */}
                <h4 className="text-base sm:text-lg font-bold text-gray-700 mb-2 group-hover:text-[#37B7C4] group-hover:scale-105 transition-all duration-300 delay-150 text-center">
                  {feature.title}
                </h4>

                {/* サブタイトル - 遅延変化 */}
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed text-center px-1 sm:px-2 group-hover:text-gray-700 transition-all duration-300 delay-200">
                  {feature.subtitle}
                </p>
              </div>

              {/* 浮遊パーティクル効果 */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-[#37B7C4]/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 delay-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#37B7C4]/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500 delay-350"></div>
              <div className="absolute top-6 left-6 w-0.5 h-0.5 bg-[#37B7C4]/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-400 delay-375"></div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}