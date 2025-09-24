'use client';

import { useEffect, useState, useRef } from 'react';

export default function SolutionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-white via-[#37B7C4]/5 to-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#37B7C4]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#37B7C4]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#37B7C4]/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#37B7C4] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#37B7C4]">ソリューション</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            その課題、業界初の
            <span className="text-[#37B7C4] block mt-2">「チャット式見積AI」が解決します。</span>
          </h2>
        </div>

        {/* Main Solution Card */}
        <div className={`max-w-5xl mx-auto transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Top Section */}
            <div className="bg-gradient-to-r from-[#37B7C4] to-[#2A96A5] p-12 text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-12 h-12 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">ARCHAIVE</h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                AIエージェントが、見積もり業務の属人化・非効率・ミスを根本から解決
              </p>
            </div>

            {/* Features Grid */}
            <div className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: '🚀',
                    title: '圧倒的な高速化',
                    description: '従来4時間かかっていた見積もり作成をわずか3分に短縮',
                    before: '4時間',
                    after: '3分'
                  },
                  {
                    icon: '🎯',
                    title: '精度の標準化',
                    description: '誰が作成しても同じ品質の見積もりを実現',
                    before: 'バラバラ',
                    after: '99.8%'
                  },
                  {
                    icon: '💡',
                    title: '知識の集約',
                    description: 'ベテランの知識をAIが学習し、全社で活用',
                    before: '属人的',
                    after: '共有化'
                  }
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-500">Before</div>
                        <div className="text-lg font-bold text-red-500">{feature.before}</div>
                      </div>
                      <svg className="w-8 h-8 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <div className="text-center">
                        <div className="text-sm text-gray-500">After</div>
                        <div className="text-lg font-bold text-[#37B7C4]">{feature.after}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-gray-50 p-8 text-center border-t border-gray-100">
              <p className="text-lg text-gray-700 mb-6">
                もう、見積もり業務で悩む必要はありません。
              </p>
              <a 
                href="#features" 
                className="inline-flex items-center gap-2 text-[#37B7C4] font-medium hover:gap-4 transition-all duration-300"
              >
                <span>ARCHAIVEの特徴を詳しく見る</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 