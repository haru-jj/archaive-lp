'use client';

import { useState, useEffect } from 'react';

export default function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentTooltip, setCurrentTooltip] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const tooltipData = {
    0: ['特徴1', '特徴2', '特徴3'],
    1: ['特徴1', '特徴2', '特徴3'],
    2: ['特徴1', '特徴2', '特徴3'],
    3: ['特徴1', '特徴2', '特徴3']
  };

  useEffect(() => {
    if (hoveredCard !== null) {
      setCurrentTooltip(0);
      const id = setInterval(() => {
        setCurrentTooltip(prev => {
          const next = prev + 1;
          return next >= 3 ? 2 : next; // Stop at 2 (all 3 visible)
        });
      }, 300);
      setIntervalId(id);
      return () => clearInterval(id);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }
  }, [hoveredCard]);
  const mainFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      ),
      title: "AIチャット型データ検索",
      description: "自然な言葉でAIに質問するだけで、あらゆるドキュメントを瞬時に検索。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      ),
      title: "類似検索・自動解析",
      description: "アップロードした図面と似ている過去の図面をAIが検索し、自動解析でデータ化。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      title: "AI見積エージェント",
      description: "見積りの管理と帳票の発行、チャットでAIが見積り生成する。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: "カスタムAIソリューションサービス",
      description: "貴社独自の業務プロセスに合わせたカスタマイズ機能を開発。"
    }
  ];

  const subFeatures = [
    {
      title: "データ統合",
      subtitle: "分散したデータを一元管理する",
      illustration: (
        <div className="flex items-center justify-center h-24 mb-4">
          <div className="relative">
            <div className="w-16 h-12 bg-[#37B7C4]/10 rounded-lg relative overflow-hidden border-2 border-[#37B7C4]/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-[#37B7C4] rounded text-white text-xs flex items-center justify-center">📊</div>
              </div>
              <div className="absolute top-1 right-1 bg-[#37B7C4] text-white text-xs px-1 rounded">統合</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "AIチャット検索",
      subtitle: "自然言語でドキュメントを瞬時に検索",
      illustration: (
        <div className="flex items-center justify-center h-24 mb-4">
          <div className="relative">
            <div className="flex space-x-2 items-center">
              <div className="w-2 h-2 bg-[#37B7C4] rounded-full"></div>
              <div className="w-3 h-3 bg-[#37B7C4] rounded-full"></div>
              <div className="w-2 h-2 bg-[#37B7C4]/60 rounded-full"></div>
              <div className="text-[#37B7C4] text-xs">💬</div>
            </div>
            <div className="mt-2 flex space-x-2 items-center">
              <div className="w-2 h-2 bg-[#37B7C4]/40 rounded-full"></div>
              <div className="w-1 h-1 bg-[#37B7C4] rounded-full"></div>
              <div className="w-2 h-2 bg-[#37B7C4] rounded-full"></div>
              <div className="text-[#37B7C4] text-xs">🔍</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "図面・部品データ",
      subtitle: "CADファイルと部品情報の一元管理",
      illustration: (
        <div className="flex items-center justify-center h-24 mb-4">
          <div className="space-y-1">
            <div className="bg-[#37B7C4] text-white text-xs px-2 py-1 rounded">図面</div>
            <div className="flex space-x-1">
              <div className="w-2 h-1 bg-gray-300 rounded"></div>
              <div className="w-3 h-1 bg-gray-300 rounded"></div>
              <div className="w-2 h-1 bg-gray-300 rounded"></div>
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-1 bg-gray-300 rounded"></div>
              <div className="w-3 h-1 bg-gray-300 rounded"></div>
              <div className="w-2 h-1 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "作業者データ",
      subtitle: "技術者の知識と経験を体系化",
      illustration: (
        <div className="flex items-center justify-center h-24 mb-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-4 bg-[#37B7C4]/20 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-[#37B7C4] rounded-full"></div>
              </div>
              <div className="bg-[#37B7C4] text-white text-xs px-1 rounded">技術</div>
              <div className="w-3 h-2 bg-[#37B7C4]/60 rounded"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-4 bg-[#37B7C4]/20 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-[#37B7C4] rounded-full"></div>
              </div>
              <div className="bg-[#37B7C4] text-white text-xs px-1 rounded">経験</div>
              <div className="w-3 h-2 bg-[#37B7C4]/60 rounded"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "見積書自動生成",
      subtitle: "過去データをベースに最適な見積を作成",
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
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#37B7C4] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">AI</span>
            </div>
            <div className="absolute bottom-0 left-0 bg-[#37B7C4] text-white text-xs px-1 rounded">見積</div>
          </div>
        </div>
      )
    },
    {
      title: "品質管理",
      subtitle: "検査データと品質基準の統合管理",
      illustration: (
        <div className="flex items-center justify-center h-24 mb-4">
          <div className="space-y-2">
            <div className="text-xs text-gray-600">品質チェック</div>
            <div className="bg-[#37B7C4] text-white text-xs px-3 py-1 rounded-full">✓ 検査OK</div>
          </div>
        </div>
      )
    },
    {
      title: "工程管理",
      subtitle: "製造プロセス全体の進捗と効率を最適化",
      illustration: (
        <div className="flex items-center justify-center h-24 mb-4">
          <div className="relative">
            <div className="w-16 h-12 bg-gray-100 rounded border-2 border-gray-200 p-2">
              <div className="space-y-1">
                <div className="w-full h-1 bg-gray-300 rounded"></div>
                <div className="w-3/4 h-1 bg-[#37B7C4] rounded"></div>
                <div className="w-1/2 h-1 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="absolute -top-1 -right-1 bg-[#37B7C4] text-white text-xs px-1 rounded">進行中</div>
            <div className="absolute -bottom-1 right-1 text-[#37B7C4]">📈</div>
          </div>
        </div>
      )
    },
    {
      title: "技術文書管理",
      subtitle: "マニュアルと技術資料の共有・検索",
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
            <div className="absolute -top-1 right-0 text-[#37B7C4] text-lg">📎</div>
            <div className="absolute -bottom-1 right-2 text-[#37B7C4] transform rotate-12">📄</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-[#37B7C4]/5 relative overflow-hidden">
      {/* 製造業データフロー背景 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* データベースハブのイメージ */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-gradient-to-br from-[#37B7C4]/10 to-[#37B7C4]/5 rounded-full blur-xl opacity-60" />
          <div className="absolute inset-0 w-20 h-20 m-auto bg-[#37B7C4]/10 rounded-full animate-pulse" style={{animationDuration: '3s'}} />
        </div>

        {/* データ連携線 - 製造業システム間の接続を表現 */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="dataFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#37B7C4" stopOpacity="0"/>
              <stop offset="50%" stopColor="#37B7C4" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#37B7C4" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="dataFlow2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#37B7C4" stopOpacity="0"/>
              <stop offset="50%" stopColor="#37B7C4" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#37B7C4" stopOpacity="0"/>
            </linearGradient>
          </defs>

          {/* ERP、PLM、ファイルサーバー等の接続線 */}
          <path d="M100,200 Q300,100 600,200 Q900,300 1100,200" stroke="url(#dataFlow1)" strokeWidth="2" fill="none" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" values="0;20" dur="4s" repeatCount="indefinite"/>
          </path>

          <path d="M200,600 Q400,400 600,500 Q800,600 1000,400" stroke="url(#dataFlow1)" strokeWidth="2" fill="none" strokeDasharray="3,7">
            <animate attributeName="stroke-dashoffset" values="20;0" dur="3s" repeatCount="indefinite"/>
          </path>

          <path d="M200,100 L600,200 L200,300 L600,400 L200,500" stroke="url(#dataFlow2)" strokeWidth="1.5" fill="none" strokeDasharray="8,4">
            <animate attributeName="stroke-dashoffset" values="0;12" dur="5s" repeatCount="indefinite"/>
          </path>

          <path d="M1000,100 L600,200 L1000,300 L600,400 L1000,500" stroke="url(#dataFlow2)" strokeWidth="1.5" fill="none" strokeDasharray="6,6">
            <animate attributeName="stroke-dashoffset" values="12;0" dur="4s" repeatCount="indefinite"/>
          </path>
        </svg>

        {/* データノード（PLM、ERP等のシステムを表現） */}
        <div className="absolute top-16 left-16">
          <div className="w-16 h-16 bg-gradient-to-br from-[#37B7C4]/20 to-transparent rounded-lg transform rotate-12 animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}} />
          <div className="absolute inset-2 bg-[#37B7C4]/10 rounded-md" />
        </div>

        <div className="absolute top-20 right-20">
          <div className="w-12 h-12 bg-gradient-to-bl from-[#37B7C4]/15 to-transparent rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '3s'}} />
        </div>

        <div className="absolute bottom-32 left-1/4">
          <div className="w-14 h-14 bg-gradient-to-tr from-[#37B7C4]/12 to-transparent transform rotate-45 animate-pulse" style={{animationDelay: '0.5s', animationDuration: '5s'}} />
        </div>

        <div className="absolute bottom-24 right-1/3">
          <div className="w-18 h-18 bg-gradient-to-tl from-[#37B7C4]/18 to-transparent rounded-lg transform -rotate-12 animate-pulse" style={{animationDelay: '3s', animationDuration: '3.5s'}} />
        </div>

        {/* 製造データの流れを表現する粒子エフェクト */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#37B7C4]/30 rounded-full animate-pulse"
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${20 + Math.sin(i) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>

        {/* グリッドパターン - デジタル製造環境を表現 */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="manufacturingGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#37B7C4" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#manufacturingGrid)"/>
          </svg>
        </div>

        {/* 深度感のある背景レイヤー */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#37B7C4]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#37B7C4]/5 to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* セクションタイトル */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-sm text-[#37B7C4] font-semibold mb-2">Key Feature for ARCHAIVE</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4 sm:mb-6">
            図面起点で、データを資産にするための３つの力
          </h2>
        </div>

        {/* メイン機能 - 左右交互レイアウト */}
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
            
            {/* AIチャット型データ検索 */}
            <div 
              className={`flex items-center justify-between w-full gap-2 transition-all duration-300 relative ${
                hoveredCard === 0 ? 'z-40' : 'z-10'
              }`}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-[40%] -mt-12">
                <div className="mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-[#333333] block mb-2 underline">01</span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#37B7C4]">
                    AIチャット型データ検索
                  </h4>
                </div>
                <div className="ml-0">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-semibold">
                    自然な言葉でAIに質問するだけで、あらゆるドキュメントを瞬時に検索。
                  </p>
                </div>
              </div>
              <div className="w-[55%] relative">
                <img 
                  src="/images/チャット検索1.jpg" 
                  alt="AIチャット型データ検索の操作画面。自然言語での質問入力と検索結果の表示" 
                  className={`w-full h-auto rounded shadow-lg transition-all duration-300 ${
                    hoveredCard === 0 ? '-translate-y-2 shadow-xl' : ''
                  }`}
                  loading="lazy"
                />
                {/* 吹き出し群 */}
                <div className="absolute -right-12 top-8 space-y-2 z-50">
                  {tooltipData[0].map((tooltip, index) => (
                    <div 
                      key={index}
                      className={`bg-white rounded-lg shadow-xl p-3 border-2 border-[#37B7C4] relative transition-all duration-300 ${
                        hoveredCard === 0 && index <= currentTooltip 
                          ? 'opacity-100 scale-100 translate-x-0' 
                          : 'opacity-0 scale-95 translate-x-4 pointer-events-none'
                      }`}
                    >
                      <div className="text-sm text-gray-600 text-center min-w-[180px] whitespace-nowrap">
                        {tooltip}
                      </div>
                      {/* 左向き矢印 */}
                      <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-[#37B7C4]"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 類似図面検索 - 逆配置 */}
            <div 
              className={`flex items-center justify-between w-full gap-2 transition-all duration-300 relative ${
                hoveredCard === 1 ? 'z-40' : 'z-10'
              }`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-[55%] relative">
                <img 
                  src="/images/sub_ui.png" 
                  alt="類似検索・自動解析機能の画面。アップロードした図面と類似図面の比較表示" 
                  className={`w-full h-auto rounded shadow-lg transition-all duration-300 ${
                    hoveredCard === 1 ? '-translate-y-2 shadow-xl' : ''
                  }`}
                  loading="lazy"
                />
                {/* 吹き出し群 */}
                <div className="absolute -left-12 top-8 space-y-2 z-50">
                  {tooltipData[1].map((tooltip, index) => (
                    <div 
                      key={index}
                      className={`bg-white rounded-lg shadow-xl p-3 border-2 border-[#37B7C4] relative transition-all duration-300 ${
                        hoveredCard === 1 && index <= currentTooltip 
                          ? 'opacity-100 scale-100 translate-x-0' 
                          : 'opacity-0 scale-95 -translate-x-4 pointer-events-none'
                      }`}
                    >
                      <div className="text-sm text-gray-600 text-center min-w-[180px] whitespace-nowrap">
                        {tooltip}
                      </div>
                      {/* 右向き矢印 */}
                      <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-[#37B7C4]"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[40%] -mt-12">
                <div className="mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-[#333333] block mb-2 underline">02</span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#37B7C4]">
                    類似検索・自動解析
                  </h4>
                </div>
                <div className="ml-0">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-semibold">
                    アップロードした図面と似ている過去の図面をAIが検索し、自動解析でデータ化。
                  </p>
                </div>
              </div>
            </div>

            {/* AI見積エージェント */}
            <div 
              className={`flex items-center justify-between w-full gap-2 transition-all duration-300 relative ${
                hoveredCard === 2 ? 'z-40' : 'z-10'
              }`}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-[40%] -mt-12">
                <div className="mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-[#333333] block mb-2 underline">03</span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#37B7C4]">
                    AI見積エージェント
                  </h4>
                </div>
                <div className="ml-0">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-semibold">
                    見積りの管理と帳票の発行、チャットでAIが見積り生成する。
                  </p>
                </div>
              </div>
              <div className="w-[55%] relative">
                <img 
                  src="/images/図面ページ_見積.jpg" 
                  alt="AI見積エージェントの操作画面。チャット形式での見積作成と管理機能" 
                  className={`w-full h-auto rounded shadow-lg transition-all duration-300 ${
                    hoveredCard === 2 ? '-translate-y-2 shadow-xl' : ''
                  }`}
                  loading="lazy"
                />
                {/* 吹き出し群 */}
                <div className="absolute -right-12 top-8 space-y-2 z-50">
                  {tooltipData[2].map((tooltip, index) => (
                    <div 
                      key={index}
                      className={`bg-white rounded-lg shadow-xl p-3 border-2 border-[#37B7C4] relative transition-all duration-300 ${
                        hoveredCard === 2 && index <= currentTooltip 
                          ? 'opacity-100 scale-100 translate-x-0' 
                          : 'opacity-0 scale-95 translate-x-4 pointer-events-none'
                      }`}
                    >
                      <div className="text-sm text-gray-600 text-center min-w-[180px] whitespace-nowrap">
                        {tooltip}
                      </div>
                      {/* 左向き矢印 */}
                      <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-[#37B7C4]"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* カスタムAIソリューションサービス - 逆配置 */}
            <div 
              className={`flex items-center justify-between w-full gap-2 transition-all duration-300 relative ${
                hoveredCard === 3 ? 'z-40' : 'z-10'
              }`}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-[55%] relative">
                <img 
                  src="/images/sub_ui.png" 
                  alt="カスタムAIソリューションの管理画面。カスタマイズ機能の設定と運用状況" 
                  className={`w-full h-auto rounded shadow-lg transition-all duration-300 ${
                    hoveredCard === 3 ? '-translate-y-2 shadow-xl' : ''
                  }`}
                  loading="lazy"
                />
                {/* 吹き出し群 */}
                <div className="absolute -left-12 top-8 space-y-2 z-50">
                  {tooltipData[3].map((tooltip, index) => (
                    <div 
                      key={index}
                      className={`bg-white rounded-lg shadow-xl p-3 border-2 border-[#37B7C4] relative transition-all duration-300 ${
                        hoveredCard === 3 && index <= currentTooltip 
                          ? 'opacity-100 scale-100 translate-x-0' 
                          : 'opacity-0 scale-95 -translate-x-4 pointer-events-none'
                      }`}
                    >
                      <div className="text-sm text-gray-600 text-center min-w-[180px] whitespace-nowrap">
                        {tooltip}
                      </div>
                      {/* 右向き矢印 */}
                      <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-[#37B7C4]"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[40%] -mt-12">
                <div className="mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-[#333333] block mb-2 underline">04</span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#37B7C4]">
                    カスタムAIソリューション<br />サービス
                  </h4>
                </div>
                <div className="ml-0">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-semibold">
                    貴社独自の業務プロセスに合わせたカスタマイズ機能を開発。
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* ARCHAIVEのその他の機能セクション - 全幅背景 */}
        <div className="mt-20 relative py-24 -mx-[50vw] left-[50%] right-[50%] w-screen bg-gradient-to-br from-gray-700 via-gray-600 to-slate-700">
          {/* 全体背景は既にsectionタグで設定済み */}

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

          {/* データフロー線の強化 */}
          <div className="absolute inset-0 overflow-hidden opacity-40">
            {/* 斜めのフロー線 */}
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#37B7C4" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#37B7C4" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#37B7C4" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="flowGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#37B7C4" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#37B7C4" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#37B7C4" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M 0 200 Q 200 100 400 200 T 800 200" stroke="url(#flowGradient1)" strokeWidth="2" fill="none"/>
                <path d="M 800 100 Q 600 200 400 100 T 0 100" stroke="url(#flowGradient2)" strokeWidth="1.5" fill="none"/>
                <path d="M 0 400 Q 200 300 400 400 T 800 400" stroke="url(#flowGradient1)" strokeWidth="1" fill="none"/>
              </svg>
            </div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10 px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                ARCHAIVEの主な機能
              </h2>
              <div className="max-w-4xl mx-auto space-y-2">
                <p className="text-white/90">
                  業務にシステムを合わせるのであって、
                </p>
                <p className="text-white/90">
                  システムに業務を合わせるのではない。
                </p>
              </div>
            </div>

            {/* 機能カード - 2行×4列のグリッド */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto px-4">
              {subFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-300/50 p-8 hover:shadow-2xl hover:border-gray-500/50 transition-all duration-300 group relative overflow-hidden"
                  style={{ minHeight: '300px' }}
                >
                  {/* ホバー時の装飾 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="flex flex-col items-center justify-center h-full relative z-10">
                    {/* イラストレーション */}
                    <div className="mb-4">
                      {feature.illustration}
                    </div>

                    {/* タイトル */}
                    <h4 className="text-lg font-bold text-gray-700 mb-2 group-hover:text-gray-900 transition-colors text-center">
                      {feature.title}
                    </h4>

                    {/* サブタイトル */}
                    <p className="text-sm text-gray-500 leading-relaxed text-center px-2">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}