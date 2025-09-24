'use client';

import Icon from '@/components/ui/Icon';
import { IconType } from '@/components/ui/Icon';
import { useState, useEffect, useRef } from 'react';
import '@/styles/lp1-animations.css';

const features = [
  {
    icon: 'search',
    title: 'AI類似図面検索',
    description: '「こんな感じ」という曖昧な指示でも、AIが過去の類似図面を瞬時に発見。',
    color: 'blue',
  },
  {
    icon: 'file',
    title: 'AI-OCRによる全文検索',
    description: '紙図面やPDF内の文字も全てテキスト化。どんな情報も見逃しません。',
    color: 'purple',
  },
  {
    icon: 'doc',
    title: '関連ドキュメントの一元管理',
    description: '図面、仕様書、過去の見積書などを自動で紐付け、一元管理。',
    color: 'green',
  },
  {
    icon: 'diff',
    title: '差分検出',
    description: '新旧2つの図面の違いをAIが一瞬で検出し、変更点の見落としを防ぎます。',
    color: 'red',
  },
];

const colorGradients = {
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  green: 'from-green-500 to-teal-500',
  red: 'from-red-500 to-orange-500',
};

export default function ProductSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
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

    // Observe progress lines separately for delayed animation
    const progressLines = sectionRef.current?.querySelectorAll('.progress-line');
    progressLines?.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="product" className="relative py-24 overflow-hidden" ref={sectionRef}>
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50" />
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-radial from-[#37B7C4]/10 to-transparent blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#37B7C4] to-blue-600 bg-clip-text text-transparent">
            革命を支える、盤石なデータ活用基盤
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            この革命的な見積もり自動化は、ARCHAIVEの強力なデータ活用基盤があるからこそ実現できます。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`relative group animate-on-scroll ${idx % 2 === 0 ? 'fade-left' : 'fade-right'}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setHoveredFeature(idx)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                {/* Dynamic gradient background on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${colorGradients[feature.color as keyof typeof colorGradients]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} 
                />
                
                <div className="relative flex items-start gap-6">
                  {/* Animated icon container */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${colorGradients[feature.color as keyof typeof colorGradients]} rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 ${
                      hoveredFeature === idx ? 'transform scale-110 rotate-[5deg]' : ''
                    }`}
                  >
                    <Icon type={feature.icon as IconType} size={32} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#37B7C4] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Animated accent line */}
                <div 
                  className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${colorGradients[feature.color as keyof typeof colorGradients]} progress-line animate-on-scroll`}
                  style={{ 
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.8s ease-out',
                    transitionDelay: `${idx * 0.1 + 0.3}s`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced UI screenshots section */}
        <div className="relative animate-on-scroll fade-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">直感的なインターフェース</h3>
            <p className="text-gray-600">シンプルで使いやすい、次世代の積算支援システム</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="relative group hover-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-[#37B7C4] to-blue-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
              <img 
                src="/images/lp1-ui-demo1.png" 
                alt="LP1 UIデモ1" 
                className="w-80 h-52 object-cover rounded-2xl shadow-xl border border-gray-200" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end">
                <p className="text-white p-4 font-medium">AI図面検索機能</p>
              </div>
            </div>
            
            <div className="relative group hover-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-[#37B7C4] to-blue-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
              <img 
                src="/images/lp1-ui-demo2.png" 
                alt="LP1 UIデモ2" 
                className="w-80 h-52 object-cover rounded-2xl shadow-xl border border-gray-200" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end">
                <p className="text-white p-4 font-medium">自動積算インターフェース</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}