'use client';
import { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

export default function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSteps([0]);
    }, 300);

    const timer2 = setTimeout(() => {
      setVisibleSteps([0, 1]);
    }, 600);

    const timer3 = setTimeout(() => {
      setVisibleSteps([0, 1, 2]);
    }, 900);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "SaaS導入",
      subtitle: "標準機能で即効果",
      description: "図面管理・見積作成など、製造業に必要な機能を即座に利用開始。",
      benefits: ["導入即日から効果実感", "学習コストゼロ"],
      icon: "🚀",
      bgGradient: "from-[#37B7C4] to-[#2ea3b5]",
      borderColor: "border-[#37B7C4]"
    },
    {
      number: "02",
      title: "既存システム連携",
      subtitle: "データの分断を解消",
      description: "ERP・生産管理システムなど既存システムと連携し、情報を統合。",
      benefits: ["既存投資を活用", "移行リスクゼロ"],
      icon: "🔗",
      bgGradient: "from-[#37B7C4] to-[#1f8a9a]",
      borderColor: "border-[#37B7C4]"
    },
    {
      number: "03",
      title: "カスタマイズ開発",
      subtitle: "競争優位を創出",
      description: "貴社独自の強みを活かした専用機能を開発・実装。",
      benefits: ["完全オーダーメイド", "競合優位性確保"],
      icon: "⚡",
      bgGradient: "from-[#37B7C4] to-[#0f7488]",
      borderColor: "border-[#37B7C4]"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 bg-gray-100 relative overflow-hidden" id="process">
      {/* 控えめな背景装飾 */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-10 left-10 w-24 h-24 bg-[#37B7C4]/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#37B7C4]/8 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* セクションタイトル - 他セクションと統一 */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4 leading-tight">
            全体最適までの導入・活用までの伴走支援
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            製造業DX/AIのプロが全力でサポートします。
          </p>
        </div>

        {/* 3ステッププロセス - 横方向フェーズ移行 */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {steps.map((step, index) => (
              <>
                {/* ステップコンテンツ */}
                <div
                  key={index}
                  className={`flex flex-col items-start transform transition-all duration-700 ${
                    visibleSteps.includes(index)
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-8 opacity-0'
                  }`}
                  style={{transitionDelay: `${index * 200}ms`}}
                >
                  {/* STEP番号 - カード上の左 */}
                  <div className="mb-4 self-start">
                    <div className="text-[#37B7C4] text-xs font-semibold tracking-wider mb-1">STEP</div>
                    <div className="text-[#37B7C4] text-3xl font-bold leading-none">{step.number}</div>
                    <div className="w-8 h-0.5 bg-[#37B7C4] mt-1"></div>
                  </div>

                  {/* プロセスカード */}
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-80">
                    {/* ヘッダー */}
                    <div className={`bg-gradient-to-r ${step.bgGradient} p-4 text-white text-center`}>
                      <h3 className="text-lg font-bold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm opacity-90">
                        【{step.subtitle}】
                      </p>
                    </div>

                    {/* コンテンツ */}
                    <div className="p-5">
                      <p className="text-gray-700 text-base leading-relaxed mb-4 font-medium">
                        {step.description}
                      </p>

                      {/* ベネフィット */}
                      <div className="flex gap-1 justify-center">
                        {step.benefits.map((benefit, bIndex) => (
                          <div key={bIndex} className="bg-[#37B7C4]/10 text-[#37B7C4] text-xs font-medium px-2 py-1 rounded">
                            # {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 矢印 - ステップ間 */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center">
                    <ChevronRight className="w-8 h-8 text-[#37B7C4]" />
                  </div>
                )}
              </>
            ))}
          </div>

          {/* モバイル用の縦矢印 */}
          <div className="md:hidden space-y-4">
            {steps.slice(0, -1).map((_, index) => (
              <div key={index} className="flex justify-center">
                <ChevronDown className="w-8 h-8 text-[#37B7C4]" />
              </div>
            ))}
          </div>
        </div>

        {/* ARCHAIVEアプローチ - 他セクションと統一 */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gray-800 text-white rounded-lg p-4 sm:p-6 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-3">
              <span className="text-[#37B7C4] font-bold">ARCHAIVE</span>
              <span className="text-gray-300">の</span>
              <span className="text-white">「SaaS + 伴走型開発」</span>
              <span className="text-gray-300">アプローチ</span>
            </h3>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              標準機能による即効性と、カスタム開発による独自性を両立。<br />
              段階的導入でリスクを最小化し、成果を最大化します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}