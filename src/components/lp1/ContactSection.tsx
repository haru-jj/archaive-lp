'use client';

import Button from '@/components/ui/Button';
import { useEffect, useRef } from 'react';
import '@/styles/lp1-animations.css';

export default function ContactSection() {
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

  // Generate particles with deterministic values (not random) to avoid hydration errors
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${(i * 4.76 + 10) % 100}%`,
    animationDuration: `${20 + (i * 0.83) % 20}s`,
    animationDelay: `${(i * 0.91) % 20}s`,
  }));

  return (
    <section id="contact" className="relative py-24 overflow-hidden" ref={sectionRef}>
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#37B7C4] via-blue-600 to-[#37B7C4]" />
      
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full animate-rotate">
          <div className="w-full h-full bg-gradient-radial from-white/10 to-transparent" />
        </div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full animate-rotateReverse">
          <div className="w-full h-full bg-gradient-radial from-white/10 to-transparent" />
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: particle.left,
              animation: `floatUp ${particle.animationDuration} linear infinite`,
              animationDelay: particle.animationDelay,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll scale">
          {/* Main content card */}
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent" />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight animate-on-scroll fade-up">
              競合が見積もりを作っている間に、
              <br />
              <span className="text-yellow-300">あなたの会社は次の受注を決めている。</span>
            </h2>
            
            <p className="text-xl mb-10 text-white/90 leading-relaxed animate-on-scroll fade-up" style={{ transitionDelay: '0.2s' }}>
              まずは30分のオンラインデモで、その実力と未来の働き方を体験してください。
            </p>
            
            <div className="space-y-4 animate-on-scroll fade-up" style={{ transitionDelay: '0.3s' }}>
              <div className="hover-scale">
                <Button 
                  as="a" 
                  href="/lp1/apply" 
                  size="lg" 
                  className="bg-white text-[#37B7C4] hover:bg-gray-100 font-bold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 btn-tap"
                >
                  無料でその実力をデモ体験
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>かんたん入力30秒</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>無理な勧誘は一切ありません</span>
                </div>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-10 pt-10 border-t border-white/20 animate-on-scroll fade-up" style={{ transitionDelay: '0.4s' }}>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-1">500+</div>
                  <div className="text-sm text-white/80">導入企業数</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-1">97%</div>
                  <div className="text-sm text-white/80">時間削減率</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-1">30分</div>
                  <div className="text-sm text-white/80">デモ時間</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}