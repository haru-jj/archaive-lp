'use client';

import Icon from '@/components/ui/Icon';
import { IconType } from '@/components/ui/Icon';
import { useEffect, useRef } from 'react';
import '@/styles/lp1-animations.css';

const features = [
  {
    icon: 'ai',
    title: '超高精度な図面読解力',
    description: 'AIが人間を超える精度で図面情報を読み取り、解釈します。',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'speed',
    title: '圧倒的な処理スピード',
    description: '人間が数時間かける作業を、AIがわずか数分で完了させます。',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: 'chat',
    title: '誰でも使える対話UI',
    description: '専門知識は不要。チャットで対話するだけの直感的な操作性。',
    gradient: 'from-green-500 to-teal-500',
  },
];

export default function FeaturesSection() {
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
    <section id="features" className="relative py-24 overflow-hidden" ref={sectionRef}>
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#37B7C4] to-blue-600 bg-clip-text text-transparent">
            なぜARCHAIVEなら、&quot;見積もり3分&quot;が可能なのか？
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            最先端のAI技術と直感的なインターフェースで、建設業界の積算業務を革新します
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative group animate-on-scroll fade-up hover-lift"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="relative bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon container with gradient background */}
                <div className={`relative w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 group-hover:scale-110`}>
                  <Icon type={feature.icon as IconType} size={40} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-[#37B7C4] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-bl-full transform translate-x-12 -translate-y-12`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}