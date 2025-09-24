'use client';

import { useEffect, useState, useRef } from 'react';

export default function ProblemSection() {
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

  const problems = [
    {
      icon: '⚡',
      title: '担当者によるバラつき',
      description: '見積もりのスピードと精度が担当者によって大きく異なる',
      stat: '最大5倍',
      statLabel: '作成時間の差'
    },
    {
      icon: '🔍',
      title: '類似案件の検索',
      description: '過去の類似案件を探すだけで膨大な時間が奪われている',
      stat: '平均2時間',
      statLabel: '検索時間'
    },
    {
      icon: '⚠️',
      title: '計算ミスのリスク',
      description: '単純な計算ミスや確認漏れで利益を損なうリスクが常にある',
      stat: '15%',
      statLabel: 'エラー発生率'
    },
    {
      icon: '📉',
      title: 'ビジネス機会の損失',
      description: '営業が疲弊し、重要なビジネスチャンスを逃している',
      stat: '月3件',
      statLabel: '機会損失'
    }
  ];

  return (
    <section id="problem" className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-red-600">現状の課題</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            「人の経験」に頼った見積もりは、
            <span className="text-red-500 block mt-2">もう限界です。</span>
          </h2>
          
          <p className="text-xl text-gray-600">
            製造業の見積もり業務に潜む、4つの深刻な問題
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {problem.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {problem.description}
              </p>
              
              {/* Stats */}
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-red-500">{problem.stat}</span>
                  <span className="text-sm text-gray-500">{problem.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            これらの課題を解決しなければ、
            <span className="font-bold text-red-600">競合他社に大きく遅れを取ることになります。</span>
          </p>
          <div className="inline-flex items-center gap-2 text-gray-500">
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-sm">解決策を見る</span>
          </div>
        </div>
      </div>
    </section>
  );
} 