'use client';

import { useState, useEffect } from 'react';
import { ManufacturingDataFlow } from '@/components/animation-components';

export default function MainFeaturesSection() {
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentTooltip, setCurrentTooltip] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const keyFeatures = [
    {
      id: 0,
      number: "01",
      title: "「探す」から「話す」へ。",
      subtitle: "社内データが3秒で見つかる。",
      description: "自然な言葉でAIに質問するだけで、類似した「見積情報」「過去トラ（不良品記録）」「仕様書」etc...を要約し、瞬時に検索。\n新人もベテランも同じ情報にアクセス可能に。",
      image: "/images/チャット検索1.jpg",
      imageAlt: "AIチャット型データ検索の操作画面",
      tooltips: ['特徴1', '特徴2', '特徴3'],
      imagePosition: "right", // 画像が右
      tooltipPosition: "right" // 画像の右側にツールチップ
    },
    {
      id: 1,
      number: "02",
      title: "図面が自動で解析、登録作業０に。",
      subtitle: "更に形状が似た図面が2秒で見つかる。",
      description: "図面や書類をアップロードした際に、AIが自動でファイルを解析しデータ化。更に、独自の高精度な検索アルゴリズムにより、AIが形状や文字情報から似た図面を瞬時に検索。\n図面や書類を登録、探す時間を大幅削減。",
      image: "/images/sub_ui.png",
      imageAlt: "類似検索・自動解析機能の画面",
      tooltips: ['特徴1', '特徴2', '特徴3'],
      imagePosition: "left", // 画像が左
      tooltipPosition: "left", // 画像の左側にツールチップ
      titleStyle: "whitespace-nowrap"
    },
    {
      id: 2,
      number: "03",
      title: "専属のAIエージェントが、",
      subtitle: "2D図面を自動で見積。",
      description: "自社の工程マスタや材料マスタを参照し、AIが過去の見積情報から新しい図面の見積を提案。\nベテランや職人の暗黙知を会社の資産に。",
      image: "/images/図面ページ_見積.jpg",
      imageAlt: "AI見積エージェントの操作画面",
      tooltips: ['特徴1', '特徴2', '特徴3'],
      imagePosition: "right", // 画像が右
      tooltipPosition: "right" // 画像の右側にツールチップ
    },
    {
      id: 3,
      number: "04",
      title: "企業の競争力を向上させる、",
      subtitle: "オーダーメイドAIの開発。",
      description: "便利AIツールから、PLM／ERPの構築、コンサルティングまで幅広いサービスを提供。\n全顧客の理想である「アイデア」をカタチに。",
      image: "/images/sub_ui.png",
      imageAlt: "カスタムAIソリューションの管理画面",
      tooltips: ['特徴1', '特徴2', '特徴3'],
      imagePosition: "left", // 画像が左
      tooltipPosition: "left" // 画像の左側にツールチップ
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (hoveredCard !== null) {
      setCurrentTooltip(0);
      const feature = keyFeatures.find(f => f.id === hoveredCard);
      const tooltipCount = feature?.tooltips.length || 3;
      const id = setInterval(() => {
        setCurrentTooltip(prev => {
          const next = prev + 1;
          return next >= tooltipCount ? tooltipCount - 1 : next;
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
  }, [hoveredCard, keyFeatures]);


  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-[#37B7C4]/5 relative overflow-hidden" id="features">

      {/* 製造業データフロー背景 */}
      <ManufacturingDataFlow />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-sm text-[#37B7C4] font-semibold mb-6">Key Feature for ARCHAIVE</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4 sm:mb-6">
            図面起点で、データを資産にするための4つの力
          </h2>
        </div>

        {/* メイン機能 - 左右交互レイアウト */}
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
          {keyFeatures.map((feature) => (
            <div
              key={feature.id}
              className={`flex items-center justify-between w-full gap-2 transition-all duration-300 relative ${
                hoveredCard === feature.id ? 'z-40' : 'z-10'
              }`}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* テキストコンテンツ */}
              <div className={`w-[40%] -mt-12 ${feature.imagePosition === 'left' ? 'order-2' : 'order-1'}`}>
                <div className="mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-[#37B7C4] block mb-4">{feature.number}</span>
                  <h4 className={`text-2xl sm:text-3xl font-bold text-gray-700 leading-loose ${feature.titleStyle || ''}`}>
                    <span className="block">{feature.title}</span>
                    <span className="block">{feature.subtitle}</span>
                  </h4>
                </div>
                <div className="w-full h-px bg-gray-300 mb-4"></div>
                <div className="ml-0">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                    {feature.description.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < feature.description.split('\n').length - 1 && <><br /></>}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* 画像コンテンツ */}
              <div className={`w-[55%] relative ${feature.imagePosition === 'left' ? 'order-1' : 'order-2'}`}>
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className={`w-full h-auto rounded shadow-lg transition-all duration-300 ${
                    hoveredCard === feature.id ? '-translate-y-2 shadow-xl' : ''
                  }`}
                  loading="lazy"
                />
                {/* 吹き出し群 */}
                <div className={`absolute top-8 space-y-2 z-50 ${
                  feature.tooltipPosition === 'left' ? '-left-12' : '-right-12'
                }`}>
                  {feature.tooltips.map((tooltip, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-lg shadow-xl p-3 border-2 border-[#37B7C4] relative transition-all duration-300 ${
                        hoveredCard === feature.id && index <= currentTooltip
                          ? 'opacity-100 scale-100 translate-x-0'
                          : `opacity-0 scale-95 pointer-events-none ${
                              feature.tooltipPosition === 'left' ? '-translate-x-4' : 'translate-x-4'
                            }`
                      }`}
                    >
                      <div className="text-sm text-gray-600 text-center min-w-[180px] whitespace-nowrap">
                        {tooltip}
                      </div>
                      {/* ツールチップの矢印 */}
                      <div className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent ${
                        feature.tooltipPosition === 'left'
                          ? 'right-[-8px] border-l-8 border-l-[#37B7C4]'
                          : 'left-[-8px] border-r-8 border-r-[#37B7C4]'
                      }`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}