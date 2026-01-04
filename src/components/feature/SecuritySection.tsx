'use client';

import { useState, useEffect } from 'react';

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
      image: "/images/illustration/undraw_invite-only_373f.svg",
      imageAlt: "不正アクセス対策のイラスト",
      items: [
        "最小限のポート・IPアドレスのみ許可",
        "必要最低限のアクセス権限で侵入リスクを低減",
        "SSL/TLS暗号化で通信を保護"
      ]
    },
    {
      title: "脆弱性対策",
      image: "/images/illustration/undraw_maintenance_4unj.svg",
      imageAlt: "脆弱性対策のイラスト",
      items: [
        "OS・ミドルウェアへの定期的なパッチ適用",
        "脆弱性スキャンによる早期発見と対策",
        "SQLインジェクション・XSS等の攻撃をブロック"
      ]
    },
    {
      title: "データ保護",
      image: "/images/illustration/undraw_secure-server_lz9x.svg",
      imageAlt: "データ保護のイラスト",
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

      {/* モバイル専用レイアウト */}
      <div className="md:hidden relative z-10">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-[#37B7C4] mb-3 -mt-4">Security</p>
          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
            エンタープライズ水準の<br className="md:hidden" />セキュリティ
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            高水準のセキュリティ/コンプライアンスに<br className="md:hidden" />よって、お客様の重要な資産を守ります
          </p>
        </div>
        <div className="space-y-6">
          {securityMeasures.map((measure, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-800/85 via-gray-800/80 to-gray-900/90 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-gray-700/50 ring-1 ring-[#37B7C4]/10"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <img
                  src={measure.image}
                  alt={measure.imageAlt}
                  className="w-40 h-28 object-contain mb-4"
                />
                <h3 className="text-xl font-extrabold text-white tracking-wide">
                  {measure.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {measure.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-[#37B7C4] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-base text-gray-300/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* PCレイアウト */}
      <div className="hidden md:block container mx-auto max-w-6xl relative z-10 px-1 sm:px-4">
        <div className="mb-10 sm:mb-12 text-center">
          <p className="text-sm font-semibold text-[#37B7C4] mb-3 -mt-4">Security</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            エンタープライズ水準のセキュリティ
          </h2>
          <p className="text-gray-300 max-w-3xl text-base sm:text-lg leading-relaxed mx-auto">
            高水準のセキュリティ/コンプライアンスによって、お客様の重要な資産を守ります
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
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
              <div className="flex flex-col items-center text-center mb-6 sm:mb-8 relative z-10">
                <img
                  src={measure.image}
                  alt={measure.imageAlt}
                  className="w-44 h-32 object-contain mb-4"
                />
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
