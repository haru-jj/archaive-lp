'use client';
import { useState, useEffect, Fragment } from 'react';
import { ChevronRight } from 'lucide-react';

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

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'ARCHAIVE導入ステップ',
    description: 'SaaS導入からカスタマイズ開発までの3ステップ伴走支援',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: `${step.number} ${step.title}`,
      itemListElement: step.benefits.map((benefit) => ({
        '@type': 'HowToDirection',
        text: benefit,
      })),
    })),
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 bg-[#eaedf2] relative overflow-hidden" id="process">
      {/* Digital Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f1f3f7] via-[#e0e5ed] to-[#cfd8e3]" />

        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <defs>
            <pattern id="processGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2a5c7e" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#processGrid)" />
        </svg>

        <svg className="absolute inset-0 w-full h-full opacity-25 mix-blend-screen" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path
            className="blueprint-path"
            d="M80 520 C220 480 260 360 360 340 C520 300 520 440 660 380 C780 330 820 220 960 240"
            fill="none"
            stroke="rgba(61,195,216,0.45)"
            strokeWidth="1.5"
            strokeDasharray="10 12"
          />
          <path
            className="blueprint-path"
            d="M180 160 L340 240 L520 120 L680 220 L860 140 L1040 220"
            fill="none"
            stroke="rgba(61,195,216,0.35)"
            strokeWidth="1"
            strokeDasharray="6 10"
          />
        </svg>

        <div className="pulse-orb absolute -top-24 left-[12%] w-72 h-72 bg-[#37B7C4]/14 rounded-full blur-3xl" />
        <div className="pulse-orb delay absolute bottom-[-4rem] right-[14%] w-80 h-80 bg-[#1FA9C9]/12 rounded-full blur-3xl" />
        <div className="rotate-squares absolute top-1/4 right-[8%] w-48 h-48 border border-[#37B7C4]/20 rounded-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
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
              <Fragment key={step.number}>
                {/* ステップコンテンツ */}
                <div
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
                  <div className="hidden md:flex items-center justify-center mt-14">
                    <svg
                      className="w-12 h-12 text-[#37B7C4]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 4l8 8-8 8" />
                    </svg>
                  </div>
                )}
              </Fragment>
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

      <style jsx>{`
        @keyframes dashFlow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -400;
          }
        }
        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.55;
            transform: scale(1.05);
          }
        }
        @keyframes rotateSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .blueprint-path {
          animation: dashFlow 18s linear infinite;
        }
        .pulse-orb {
          animation: pulseGlow 12s ease-in-out infinite;
        }
        .pulse-orb.delay {
          animation-delay: 4s;
        }
        .rotate-squares {
          animation: rotateSlow 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
