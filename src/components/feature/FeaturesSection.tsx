'use client';

import { useState, useEffect } from 'react';

export default function FeaturesSection() {
  const [mounted, setMounted] = useState(false);
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
    setMounted(true);
  }, []);

  useEffect(() => {
    if (hoveredCard !== null) {
      setCurrentTooltip(0);
      const id = setInterval(() => {
        setCurrentTooltip(prev => {
          const next = prev + 1;
          return next >= 3 ? 2 : next;
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

  if (!mounted) {
    return (
      <div className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-[#37B7C4]/5 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm text-[#37B7C4] font-semibold mb-6">Key Feature for ARCHAIVE</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4 sm:mb-6">
              図面起点で、データを資産にするための３つの力
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-[#37B7C4]/5 relative overflow-hidden" id="features">

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
          <div className="absolute w-2 h-2 bg-[#37B7C4]/30 rounded-full animate-pulse" style={{ left: '10%', top: '20%', animationDelay: '0s', animationDuration: '2s' }} />
          <div className="absolute w-2 h-2 bg-[#37B7C4]/30 rounded-full animate-pulse" style={{ left: '17%', top: '38%', animationDelay: '0.3s', animationDuration: '2s' }} />
          <div className="absolute w-2 h-2 bg-[#37B7C4]/30 rounded-full animate-pulse" style={{ left: '24%', top: '18%', animationDelay: '0.6s', animationDuration: '2s' }} />
          <div className="absolute w-2 h-2 bg-[#37B7C4]/30 rounded-full animate-pulse" style={{ left: '31%', top: '5%', animationDelay: '0.9s', animationDuration: '2s' }} />
          <div className="absolute w-2 h-2 bg-[#37B7C4]/30 rounded-full animate-pulse" style={{ left: '38%', top: '1%', animationDelay: '1.2s', animationDuration: '2s' }} />
          <div className="absolute w-2 h-2 bg-[#37B7C4]/30 rounded-full animate-pulse" style={{ left: '45%', top: '14%', animationDelay: '1.5s', animationDuration: '2s' }} />
          <div className="absolute w-2 h-2 bg-[#37B7C4]/30 rounded-full animate-pulse" style={{ left: '52%', top: '32%', animationDelay: '1.8s', animationDuration: '2s' }} />
          <div className="absolute w-2 h-2 bg-[#37B7C4]/30 rounded-full animate-pulse" style={{ left: '59%', top: '39%', animationDelay: '2.1s', animationDuration: '2s' }} />
          <div className="absolute w-2 h-2 bg-[#37B7C4]/30 rounded-full animate-pulse" style={{ left: '66%', top: '27%', animationDelay: '2.4s', animationDuration: '2s' }} />
          <div className="absolute w-2 h-2 bg-[#37B7C4]/30 rounded-full animate-pulse" style={{ left: '73%', top: '9%', animationDelay: '2.7s', animationDuration: '2s' }} />
          <div className="absolute w-2 h-2 bg-[#37B7C4]/30 rounded-full animate-pulse" style={{ left: '80%', top: '2%', animationDelay: '3s', animationDuration: '2s' }} />
          <div className="absolute w-2 h-2 bg-[#37B7C4]/30 rounded-full animate-pulse" style={{ left: '87%', top: '15%', animationDelay: '3.3s', animationDuration: '2s' }} />
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
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-sm text-[#37B7C4] font-semibold mb-6">Key Feature for ARCHAIVE</p>
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
                <span className="text-2xl sm:text-3xl font-bold text-[#333333] block mb-4">01</span>
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-700 leading-loose">
                  「探す」から「話す」へ。<br />
                  社内データが3秒で見つかる。
                </h4>
              </div>
              <div className="w-full h-px bg-gray-300 mb-4"></div>
              <div className="ml-0">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                  自然な言葉でAIに質問するだけで、類似した「見積情報」「過去トラ（不良品記録）」「仕様書」etc...を要約し、瞬時に検索。<br />
                  新人もベテランも同じ情報にアクセス可能に。
                </p>
              </div>
            </div>
            <div className="w-[55%] relative">
              <img
                src="/images/チャット検索1.jpg"
                alt="AIチャット型データ検索の操作画面"
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
                alt="類似検索・自動解析機能の画面"
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
                    <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-[#37B7C4]"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[40%] -mt-12">
              <div className="mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-[#333333] block mb-4">02</span>
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-700 leading-loose whitespace-nowrap">
                  <span className="block">図面が自動で解析、登録作業０に。</span>
                  <span className="block">更に形状が似た図面が2秒で見つかる。</span>
                </h4>
              </div>
              <div className="w-full h-px bg-gray-300 mb-4"></div>
              <div className="ml-0">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                  図面や書類をアップロードした際に、AIが自動でファイルを解析しデータ化。更に、独自の高精度な検索アルゴリズムにより、AIが形状や文字情報から似た図面を瞬時に検索。<br />
                  図面や書類を登録、探す時間を大幅削減。
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
                <span className="text-2xl sm:text-3xl font-bold text-[#333333] block mb-4">03</span>
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-700 leading-loose">
                  <span className="block">専属のAIエージェントが、</span>
                  <span className="block">2D図面を自動で見積。</span>
                </h4>
              </div>
              <div className="w-full h-px bg-gray-300 mb-4"></div>
              <div className="ml-0">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                  自社の工程マスタや材料マスタを参照し、AIが過去の見積情報から新しい図面の見積を提案。<br />
                  ベテランや職人の暗黙知を会社の資産に。
                </p>
              </div>
            </div>
            <div className="w-[55%] relative">
              <img
                src="/images/図面ページ_見積.jpg"
                alt="AI見積エージェントの操作画面"
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
                alt="カスタムAIソリューションの管理画面"
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
                    <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-[#37B7C4]"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[40%] -mt-12">
              <div className="mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-[#333333] block mb-4">04</span>
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-700 leading-loose">
                  <span className="block">企業の競争力を向上させる、</span>
                  <span className="block">オーダーメイドAIの開発。</span>
                </h4>
              </div>
              <div className="w-full h-px bg-gray-300 mb-4"></div>
              <div className="ml-0">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                  便利AIツールから、PLM／ERPの構築、コンサルティングまで幅広いサービスを提供。<br />
                  全顧客の理想である「アイデア」をカタチに。
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ARCHAIVEのその他の機能セクション - 全幅背景 */}
      <div className="mt-20 relative py-24 -mx-[50vw] left-[50%] right-[50%] w-screen bg-gradient-to-br from-gray-700 via-gray-600 to-slate-700">

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
              ARCHAIVEの主な機能
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

          {/* 機能カード - 2行×4列のグリッド */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto px-4">
            {subFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-300/50 p-8 hover:border-gray-500/50 card-hover group relative overflow-hidden"
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
  );
}