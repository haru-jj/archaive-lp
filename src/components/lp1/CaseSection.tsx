'use client';

import { useEffect, useState, useRef } from 'react';
import Icon from '@/components/ui/Icon';

const cases = [
  {
    company: '山田製作所',
    person: '山田 太郎',
    position: '営業部長',
    logoUrl: '/images/lp1-company1.png',
    photoUrl: '/images/lp1-person1.png',
    before: '見積もり作成に毎回2時間以上かかっていた。',
    after: 'AI導入で3分に短縮、営業効率が大幅アップ。',
    comment: '現場の誰でも使える直感的なUIで、属人化も解消できました。',
    stats: { time: '97%削減', accuracy: '99.5%' },
  },
  {
    company: 'ABCパーツ',
    person: '佐藤 花子',
    position: 'DX推進担当',
    logoUrl: '/images/lp1-company2.png',
    photoUrl: '/images/lp1-person2.png',
    before: '過去案件の検索や見積もり精度に課題。',
    after: 'AIが類似案件を瞬時に提案、利益率も向上。',
    comment: '導入サポートも手厚く、安心して現場展開できました。',
    stats: { profit: '15%向上', efficiency: '10倍' },
  },
];

export default function CaseSection() {
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
    <section id="cases" className="relative py-24 overflow-hidden" ref={sectionRef}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-[#37B7C4]/10 to-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#37B7C4] to-blue-600 bg-clip-text text-transparent">
            すでに、競争力を手に入れた企業様の声
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ARCHAIVEを導入した企業様から、驚きの成果報告が続々と届いています
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className={`relative group transform transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#37B7C4] to-blue-600" />
                
                {/* Company header */}
                <div className="flex items-center justify-between mb-6">
                  <img src={caseItem.logoUrl} alt={caseItem.company + 'ロゴ'} className="h-12 object-contain" />
                  <div className="flex gap-4">
                    {Object.entries(caseItem.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-[#37B7C4]">{value}</div>
                        <div className="text-xs text-gray-500">{key === 'time' ? '時間' : key === 'accuracy' ? '精度' : key === 'profit' ? '利益' : '効率'}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Person info */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={caseItem.photoUrl}
                    alt={caseItem.person + '写真'}
                    className="w-20 h-20 rounded-full border-4 border-[#37B7C4]/20 object-cover shadow-lg transform transition-transform duration-300 hover:scale-110"
                  />
                  <div>
                    <div className="font-bold text-lg text-gray-800">{caseItem.person}</div>
                    <div className="text-sm text-gray-600">{caseItem.position}</div>
                  </div>
                </div>
                
                {/* Before/After comparison */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">前</span>
                    </div>
                    <p className="text-sm text-gray-600">{caseItem.before}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#37B7C4] to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">後</span>
                    </div>
                    <p className="text-sm font-medium text-[#37B7C4]">{caseItem.after}</p>
                  </div>
                </div>
                
                {/* Comment */}
                <div className="relative">
                  <div className="absolute -top-2 left-4 text-4xl text-[#37B7C4]/20">&ldquo;</div>
                  <p className="italic text-gray-700 text-center px-8 leading-relaxed">
                    {caseItem.comment}
                  </p>
                  <div className="absolute -bottom-2 right-4 text-4xl text-[#37B7C4]/20 rotate-180">&rdquo;</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Company logos showcase */}
        <div className={`text-center transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-sm text-gray-500 mb-4">導入企業様（一部）</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img
              src="/images/company-yamada.png"
              alt="山田製作所ロゴ"
              className="h-10 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
            />
            <img
              src="/images/company-abc.png"
              alt="ABCパーツロゴ"
              className="h-10 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
            />
            <div className="transform transition-transform duration-300 hover:scale-110">
              <Icon type="company" size={40} className="text-gray-400 hover:text-[#37B7C4] transition-colors duration-300" />
            </div>
            <div className="transform transition-transform duration-300 hover:scale-110">
              <Icon type="company" size={40} className="text-gray-400 hover:text-[#37B7C4] transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 