'use client';

import { useState, useEffect, useRef } from 'react';
import '@/styles/lp1-animations.css';

const faqs = [
  {
    question: 'PC操作が苦手でも使えますか？',
    answer: 'はい。チャット形式の直感的なUIなので、どなたでも簡単にご利用いただけます。導入時には操作研修も実施し、現場の皆様がスムーズに使い始められるようサポートいたします。',
    category: '操作性',
  },
  {
    question: '料金体系はどうなっていますか？',
    answer: 'ご利用規模や機能に応じたプランをご用意しています。基本プランは月額制で、追加オプションも柔軟に選択可能です。詳細はお問い合わせください。',
    category: '料金',
  },
  {
    question: 'データ移行や初期設定はサポートしてもらえますか？',
    answer: '専任スタッフがデータ移行から初期設定まで丁寧にサポートします。既存システムからのデータ移行も、お客様の負担を最小限に抑えて実施いたします。',
    category: '導入支援',
  },
  {
    question: 'セキュリティ対策は万全ですか？',
    answer: '最新のセキュリティ技術を導入し、厳重な管理体制を敷いています。データは暗号化され、アクセス権限も細かく設定可能です。ISO27001認証も取得しています。',
    category: 'セキュリティ',
  },
  {
    question: '既存システムとの連携は可能ですか？',
    answer: 'はい、各種APIを提供しており、既存の基幹システムやCADソフトとの連携が可能です。お客様の環境に合わせたカスタマイズもご相談ください。',
    category: 'システム連携',
  },
  {
    question: 'サポート体制はどうなっていますか？',
    answer: '平日9:00-18:00の電話・メールサポートに加え、チャットサポートも提供しています。定期的なフォローアップで、継続的な活用をサポートします。',
    category: 'サポート',
  },
];

const categories = ['すべて', '操作性', '料金', '導入支援', 'セキュリティ', 'システム連携', 'サポート'];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('すべて');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredFaqs = activeCategory === 'すべて' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

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
  }, [filteredFaqs]);

  return (
    <section id="faq" className="relative py-24 overflow-hidden" ref={sectionRef}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50" />
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2337B7C4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-on-scroll fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#37B7C4] to-blue-600 bg-clip-text text-transparent">
            よくあるご質問
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            お客様からよくいただくご質問にお答えします
          </p>
        </div>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll fade-up" style={{ transitionDelay: '0.1s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover-scale btn-tap ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#37B7C4] to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-[#37B7C4] shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <div
              key={idx}
              className={`group animate-on-scroll ${idx % 2 === 0 ? 'fade-left' : 'fade-right'}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover-scale">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex items-start justify-between gap-4 transition-colors duration-300 hover:bg-gray-50"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#37B7C4] to-blue-600 text-white font-bold rounded-full text-sm">
                        Q
                      </span>
                      <span className="text-xs font-medium text-[#37B7C4] bg-[#37B7C4]/10 px-3 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#37B7C4] transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#37B7C4]/10 to-blue-600/10 rounded-full flex items-center justify-center rotate-icon ${expandedIndex === idx ? 'rotated' : ''}`}>
                    <svg className="w-5 h-5 text-[#37B7C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`expand-collapse ${expandedIndex === idx ? 'expanded' : 'collapsed'}`}
                  style={{
                    height: expandedIndex === idx ? 'auto' : '0',
                    opacity: expandedIndex === idx ? '1' : '0',
                  }}
                >
                  <div className="px-8 pb-6 pt-2">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 text-white font-bold rounded-full text-sm flex-shrink-0">
                        A
                      </span>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional help CTA */}
        <div className="text-center mt-12 animate-on-scroll fade-up">
          <p className="text-gray-600 mb-4">
            お探しの回答が見つからない場合は、お気軽にお問い合わせください
          </p>
          <button className="px-6 py-3 bg-white text-[#37B7C4] font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-[#37B7C4]/20 hover-scale btn-tap">
            お問い合わせはこちら
          </button>
        </div>
      </div>
    </section>
  );
}