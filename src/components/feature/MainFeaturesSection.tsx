'use client';

import { useState, useEffect } from 'react';
import { ManufacturingDataFlow } from '@/components/animation-components';
import {
  Search,
  User,
  FileText,
  Cpu,
  Layers,
  Scan,
  Sparkles,
  Share2,
  ClipboardCheck,
  Briefcase,
  PenTool,
  Settings,
} from 'lucide-react';

export default function MainFeaturesSection() {
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const keyFeatures = [
    {
      id: 0,
      number: "01",
      title: "「探す」から「話す」へ。",
      subtitle: "社内データが3秒で見つかる。",
      description: "自然な言葉でAIに質問するだけで、類似した「見積情報」「過去トラ（不良品記録）」「仕様書」etc...を要約し、瞬時に検索。\n新人もベテランも同じ情報にアクセス可能に。",
      image: "/lp/main_function_1.jpg",
      imageAlt: "AIチャット型データ検索の操作画面",
      tooltips: ['過去トラ検索', '上司AI', 'ドキュメント\n要約'],
      imagePosition: "right", // 画像が右
      tooltipPosition: "right" // 画像の右側にツールチップ
    },
    {
      id: 1,
      number: "02",
      title: "図面が自動で解析、登録作業０に。",
      subtitle: "更に形状が似た図面が2秒で見つかる。",
      description: "図面や書類をアップロードした際に、AIが自動でファイルを解析しデータ化。更に、独自の高精度な検索アルゴリズムにより、AIが形状や文字情報から似た図面を瞬時に検索。\n図面や書類を登録、探す時間を大幅削減。",
      image: "/lp/main_function_2.jpg",
      imageAlt: "類似検索・自動解析機能の画面",
      tooltips: ['図面自動解析', '類似図面検索', '部分図面検索'],
      imagePosition: "left", // 画像が左
      tooltipPosition: "right", // 画像の左側にツールチップ
      titleStyle: "whitespace-nowrap"
    },
    {
      id: 2,
      number: "03",
      title: "専属のAIエージェントが、",
      subtitle: "2D図面を自動で見積。",
      description: "自社の工程マスタや材料マスタを参照し、AIが過去の見積情報から新しい図面の見積を提案。\nベテランや職人の暗黙知を会社の資産に。",
      image: "/lp/main_function_3.jpg",
      imageAlt: "AI見積エージェントの操作画面",
      tooltips: ['見積AI', '材料・工程\nマスタ', '利率カスタム'],
      imagePosition: "right", // 画像が右
      tooltipPosition: "right" // 画像の右側にツールチップ
    },
    {
      id: 3,
      number: "04",
      title: "企業の競争力を向上させる、",
      subtitle: "オーダーメイドAIの開発。",
      description: "便利AIツールから、PLM／ERPの構築、コンサルティングまで幅広いサービスを提供。\n全顧客の理想である「アイデア」をカタチに。",
      image: "/lp/main_function_4.jpg",
      imageAlt: "カスタムAIソリューションの管理画面",
      tooltips: ['シンボル抽出\nAI', '検図AI', 'BOM管理'],
      imagePosition: "left", // 画像が左
      tooltipPosition: "right" // 吹き出しを右下に固定
    }
  ];

  const tooltipIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    '過去トラ検索': Search,
    '上司AI': User,
    'ドキュメント\n要約': FileText,
    '図面自動解析': Cpu,
    '類似図面検索': Layers,
    '部分図面検索': Scan,
    '見積AI': ClipboardCheck,
    '材料・工程\nマスタ': Settings,
    '利率カスタム': Share2,
    'シンボル抽出\nAI': PenTool,
    '検図AI': Search,
    'BOM管理': Briefcase,
  };

  useEffect(() => {
    setMounted(true);
  }, []);



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
              className={`flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-6 lg:gap-2 transition-all duration-300 relative ${
                hoveredCard === feature.id ? 'z-40' : 'z-10'
              }`}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* テキストコンテンツ */}
              <div className={`w-full lg:w-[40%] lg:-mt-12 ${feature.imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#37B7C4] block mb-4">{feature.number}</span>
                  <h4 className={`text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 leading-relaxed lg:leading-loose ${feature.titleStyle || ''}`}>
                    <span className="block">{feature.title}</span>
                    <span className="block">{feature.subtitle}</span>
                  </h4>
                </div>
                <div className="w-full h-px bg-gray-300 mb-4"></div>
                <div className="ml-0">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-normal">
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
              <div className={`w-full lg:w-[55%] relative ${feature.imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'}`}>
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className={`w-full h-auto rounded shadow-lg transition-all duration-300 ${
                    hoveredCard === feature.id ? '-translate-y-2 shadow-xl' : ''
                  }`}
                  loading="lazy"
                />
                {/* 吹き出し群 - デスクトップのみ */}
                <div className={`absolute z-50 hidden lg:flex gap-4 items-end ${
                  feature.tooltipPosition === 'left'
                    ? 'bottom-[-3.5rem] left-[-3.5rem] flex-row-reverse'
                    : 'bottom-[-3.5rem] right-[-3.5rem]'
                }`}>
                  {feature.tooltips.map((tooltip, index) => (
                    <div
                      key={index}
                      className={`group/tooltip relative transition-all duration-300 ${
                        hoveredCard === feature.id
                          ? 'opacity-100 scale-100 translate-x-0 hover:scale-105'
                          : `opacity-0 scale-95 pointer-events-none ${
                              feature.tooltipPosition === 'left' ? '-translate-x-4' : 'translate-x-4'
                            }`
                      }`}
                      style={{
                        transitionDelay: hoveredCard === feature.id ? `${index * 100}ms` : '0ms'
                      }}
                    >
                      <div className="relative z-10 w-28 h-28 rounded-full border-2 border-[#37B7C4] bg-white shadow-xl flex flex-col items-center justify-center gap-2 overflow-hidden">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#37B7C4]/10 text-[#37B7C4] group-hover/tooltip:bg-[#37B7C4]/20 transition-colors duration-200">
                          {(() => {
                            const Icon = tooltipIconMap[tooltip] || Sparkles;
                            return <Icon className="w-6 h-6" />;
                          })()}
                        </div>
                        <div className="px-3 text-center">
                          <div className="text-xs font-semibold text-gray-700 group-hover/tooltip:text-[#37B7C4] transition-colors duration-200 leading-tight">
                            {tooltip.split('\n').map((line, lineIndex) => (
                              <span key={lineIndex} className="block">
                                {line}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#37B7C4]/5 via-transparent to-[#4AC7D4]/5 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300"></div>
                      </div>
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
