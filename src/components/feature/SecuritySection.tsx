'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie-player').then(mod => mod.default), {
  ssr: false,
});

export default function SecuritySection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.security-card'));
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const securityMeasures = [
    {
      title: "不正アクセス対策",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
      ),
      items: [
        "最小限のポート・IPアドレスのみ許可",
        "必要最低限のアクセス権限で侵入リスクを低減",
        "SSL/TLS暗号化で通信を保護"
      ]
    },
    {
      title: "脆弱性対策",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      items: [
        "OS・ミドルウェアへの定期的なパッチ適用",
        "脆弱性スキャンによる早期発見と対策",
        "SQLインジェクション・XSS等の攻撃をブロック"
      ]
    },
    {
      title: "データ保護",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M4 7v10c0 2.21 3.39 4 7.5 4s7.5-1.79 7.5-4V7c0 2.21-3.39 4-7.5 4S4 9.21 4 7z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M4 7c0-2.21 3.39-4 7.5-4s7.5 1.79 7.5 4"/>
        </svg>
      ),
      items: [
        "保存・通信データの暗号化",
        "定期バックアップとマルチリージョン対応",
        "厳密なアクセス権限管理と監視ログによる異常検知"
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900 relative overflow-hidden" id="security">
      {/* 背景の装飾要素 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* シンプルなグローと控えめグリッド */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(55,183,196,0.08),transparent_42%),radial-gradient(circle_at_78%_25%,rgba(55,183,196,0.06),transparent_40%),radial-gradient(circle_at_60%_72%,rgba(55,183,196,0.04),transparent_46%)]" />

        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 800 600" preserveAspectRatio="none">
          <defs>
            <pattern id="securityGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#37B7C4" strokeWidth="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#securityGrid)" />
          <g stroke="#37B7C4" strokeWidth="0.4" strokeOpacity="0.35" fill="none">
            <path d="M140 120 h20 v14" />
            <path d="M140 134 h12" />
            <path d="M500 200 h22 v12" />
            <path d="M500 212 h14" />
            <path d="M320 420 h18 v12" />
            <path d="M320 432 h10" />
            <path d="M660 340 h20 v14" />
            <path d="M660 354 h12" />
          </g>
        </svg>

        <div className="absolute top-24 right-8 w-32 h-32 bg-[#37B7C4]/6 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-24 right-16 w-28 h-28 bg-[#37B7C4]/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s', animationDuration: '3s'}} />
      </div>

      {/* 左側に大きなLottieアニメーション - absolute配置 */}
      <div className="absolute left-[24%] top-[19%] w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] transform -translate-x-1/2 -translate-y-1/2 z-5 pointer-events-none">
        <Lottie
          loop
          play
          path="/lottie/uuQjgmQJ4g.json"
          style={{ height: '100%', width: '100%' }}
          speed={0.3}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-12 sm:mb-8 ml-0 lg:ml-60">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            エンタープライズ水準のセキュリティ
          </h2>
          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            高水準のセキュリティ/コンプライアンスによって、お客様の重要な資産を守ります
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {securityMeasures.map((measure, index) => (
            <div
              key={index}
              data-index={index}
              className={`security-card bg-gradient-to-b from-gray-800/85 via-gray-800/80 to-gray-900/90 backdrop-blur-md rounded-xl p-8 sm:p-10 transform transition-all duration-700 shadow-2xl hover:shadow-[0_20px_40px_rgba(55,183,196,0.25)] border border-gray-700/50 hover:border-[#37B7C4]/30 ring-1 ring-[#37B7C4]/10 hover:ring-2 hover:ring-[#37B7C4]/25 relative overflow-hidden group
                ${visibleCards.includes(index) ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-3 translate-y-6'}
                hover:scale-[1.02]`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* カード内装飾 */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#37B7C4]/4 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#37B7C4] to-transparent opacity-70" />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-28 h-28 bg-[#37B7C4]/8 rounded-full blur-3xl -right-10 -bottom-10" />
              </div>
              <div className="flex items-center mb-6 sm:mb-8 relative z-10">
                <div className="bg-[#37B7C4]/15 p-4 rounded-full mr-4 shadow-inner shadow-[#37B7C4]/20 ring-1 ring-[#37B7C4]/30">
                  {measure.icon}
                </div>
                <h3 className="text-2xl sm:text-[26px] lg:text-[28px] font-extrabold text-white tracking-wide">
                  {measure.title}
                </h3>
              </div>
              <ul className="space-y-4 sm:space-y-5 relative z-10">
                {measure.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start opacity-0 animate-fadeInUp"
                    style={{ animationDelay: `${(index * 200) + (itemIndex * 100)}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="w-2 h-2 bg-[#37B7C4] rounded-full mt-2 mr-4 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-gray-300/90 font-semibold leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
