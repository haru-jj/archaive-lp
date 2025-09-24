'use client';

import Icon from '@/components/ui/Icon';
import { IconType } from '@/components/ui/Icon';
import { useEffect, useRef } from 'react';
import '@/styles/lp1-animations.css';

const steps = [
  {
    icon: 'form',
    title: 'お問い合わせ・デモ予約',
    description: 'フォームから30秒で簡単予約。',
    detail: '営業担当がすぐにご連絡',
    number: '01',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'monitor',
    title: 'オンラインデモ・ヒアリング',
    description: '貴社の課題を伺いながら、実際の画面で機能や効果をご説明します（30分）。',
    detail: '導入効果を具体的にご提示',
    number: '02',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: 'check',
    title: 'ご契約・導入サポート',
    description: '専任スタッフがデータ移行から初期設定まで丁寧にサポートします。',
    detail: '最短2週間でご利用開始',
    number: '03',
    gradient: 'from-green-500 to-teal-500',
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="relative py-24 overflow-hidden" ref={sectionRef}>
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-floatReverse" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#37B7C4] to-blue-600 bg-clip-text text-transparent">
            ご利用開始までのかんたん3ステップ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            最短2週間で導入完了。専任チームが貴社の成功まで伴走します
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#37B7C4]/20 via-[#37B7C4]/40 to-[#37B7C4]/20 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative group animate-on-scroll fade-up`}
                style={{ transitionDelay: `${idx * 0.2}s` }}
              >
                <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover-lift">
                  {/* Step number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-[#37B7C4]/20 transition-colors duration-300">
                    {step.number}
                  </div>
                  
                  {/* Icon with gradient background */}
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg hover-scale-rotate`}>
                    <Icon type={step.icon as IconType} size={40} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 relative z-10 group-hover:text-[#37B7C4] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed relative z-10">
                    {step.description}
                  </p>
                  
                  {/* Detail badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#37B7C4]/10 to-blue-600/10 rounded-full">
                    <div className="w-2 h-2 bg-[#37B7C4] rounded-full" />
                    <span className="text-sm font-medium text-[#37B7C4]">{step.detail}</span>
                  </div>
                  
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Connection dots for mobile */}
                  {idx < steps.length - 1 && (
                    <div className="md:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#37B7C4]/40 to-transparent" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA at the bottom */}
        <div className="text-center mt-16 animate-on-scroll fade-up">
          <p className="text-gray-600 mb-6">
            まずは30分のオンラインデモで、ARCHAIVEの実力をご体感ください
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#37B7C4] to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-scale btn-tap">
            無料デモを予約する
          </button>
        </div>
      </div>
    </section>
  );
}