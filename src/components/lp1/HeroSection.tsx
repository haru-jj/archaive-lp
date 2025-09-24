'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(55, 183, 196, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(55, 183, 196, 0.05) 0%, transparent 50%)`
        }}></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#37B7C4]/10 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#37B7C4]/10 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-[#37B7C4] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-[#37B7C4]">業界初のAI見積りシステム</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              見積もり作成
              <span className="text-[#37B7C4] block">3分へ。</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
              AIが、あなたの会社の利益を最大化する。
            </p>
            
            <p className="text-lg text-gray-500 mb-12 max-w-xl">
              業界初の「チャット式見積AIエージェント」搭載。<br />
              図面をアップするだけで、面倒な見積もり業務から解放されます。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                as="a" 
                href="/lp1/apply" 
                size="lg" 
                className="bg-[#37B7C4] hover:bg-[#2A96A5] text-white px-8 py-4 text-lg font-medium rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                無料でその実力をデモ体験
              </Button>
              <Button 
                as="a" 
                href="#features" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-[#37B7C4] text-gray-700 hover:text-[#37B7C4] px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
              >
                詳しく見る
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-[#37B7C4]">200+</div>
                <div className="text-sm text-gray-500 mt-1">導入企業</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#37B7C4]">84倍</div>
                <div className="text-sm text-gray-500 mt-1">効率化</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#37B7C4]">99.8%</div>
                <div className="text-sm text-gray-500 mt-1">精度</div>
              </div>
            </div>
          </div>

          {/* Right: Product Showcase */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#37B7C4]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#37B7C4]/5 rounded-full blur-3xl"></div>
              
              {/* Main Image */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <Image 
                  src="/images/Group 18.png" 
                  alt="ARCHAIVE UI" 
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                
                {/* Overlay Elements */}
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                  ● オンライン
                </div>
                
                {/* Chat Animation */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-xl shadow-xl p-4 max-w-xs animate-slide-up">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#37B7C4] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">AI アシスタント</p>
                      <p className="text-xs text-gray-600 mt-1">図面を解析中...</p>
                      <div className="flex gap-1 mt-2">
                        <div className="w-2 h-2 bg-[#37B7C4] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-[#37B7C4] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-[#37B7C4] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="absolute -right-4 top-1/4 bg-white rounded-lg shadow-lg p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#37B7C4]/10 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-800">高速処理</p>
                    <p className="text-xs text-gray-500">3分で完了</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 1s both;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
} 