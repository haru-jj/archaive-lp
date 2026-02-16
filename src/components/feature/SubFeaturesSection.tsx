'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Image from 'next/image';

type SubFeature = {
  title: string;
  subtitle: ReactNode;
  imageSrc: string;
  imageAlt: string;
};

const subFeatures: SubFeature[] = [
  {
    title: '顧客管理',
    subtitle: (
      <>
        顧客情報と案件履歴を
        <br />
        一元管理
      </>
    ),
    imageSrc: '/images/subsection/sub1.webp',
    imageAlt: '顧客管理の機能イメージ',
  },
  {
    title: '図面内書き込み',
    subtitle: (
      <>
        図面上に直接コメントや
        <br />
        修正指示を追加
      </>
    ),
    imageSrc: '/images/subsection/sub2.webp',
    imageAlt: '図面内書き込みの機能イメージ',
  },
  {
    title: '組図・部品図管理',
    subtitle: (
      <>
        組立図と部品図の
        <br />
        階層構造管理
      </>
    ),
    imageSrc: '/images/subsection/sub3.webp',
    imageAlt: '組図・部品図管理の機能イメージ',
  },
  {
    title: '権限管理',
    subtitle: (
      <>
        ユーザーごとのアクセス
        <br />
        権限設定
      </>
    ),
    imageSrc: '/images/subsection/sub4.webp',
    imageAlt: '権限管理の機能イメージ',
  },
  {
    title: '帳票発行',
    subtitle: (
      <>
        見積書や仕様書などの帳票を
        <br />
        自動生成
      </>
    ),
    imageSrc: '/images/subsection/sub5.webp',
    imageAlt: '帳票発行の機能イメージ',
  },
  {
    title: 'キーワード検索',
    subtitle: '図面や文書をキーワードで高速検索',
    imageSrc: '/images/subsection/sub6.webp',
    imageAlt: 'キーワード検索の機能イメージ',
  },
  {
    title: '案件管理',
    subtitle: 'プロジェクトの進捗状況と納期管理',
    imageSrc: '/images/subsection/sub7.webp',
    imageAlt: '案件管理の機能イメージ',
  },
  {
    title: '３Dプレビュー',
    subtitle: '図面データの立体的な可視化と検証',
    imageSrc: '/images/subsection/sub8.webp',
    imageAlt: '3Dプレビューの機能イメージ',
  },
];

export default function SubFeaturesSection() {
  const [mounted, setMounted] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idAttr = entry.target.getAttribute('data-subfeature-id');
          if (!idAttr) return;
          const featureId = Number(idAttr);
          setVisibleCards((prev) => (prev[featureId] ? prev : { ...prev, [featureId]: true }));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('[data-subfeature-id]');
    cards.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative pt-24 pb-32 sm:pb-36 -mx-[50vw] left-[50%] right-[50%] w-screen bg-gradient-to-br from-gray-700 via-gray-600 to-slate-700">
      <div className="absolute inset-0 opacity-30">
        <svg className="h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="none">
          <defs>
            <pattern id="mesh" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#37B7C4" strokeWidth="0.6" opacity="0.45" />
            </pattern>
            <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#37B7C4" stopOpacity="0.14" />
              <stop offset="50%" stopColor="#37B7C4" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#37B7C4" stopOpacity="0.14" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh)" />
          <rect width="100%" height="100%" fill="url(#meshGradient)" />
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#37B7C4]/10 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-bl from-[#37B7C4]/15 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s', animationDuration: '3s' }} />
        <div className="absolute bottom-16 left-1/3 w-20 h-20 bg-gradient-to-tr from-[#37B7C4]/8 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }} />
        <div className="absolute bottom-32 right-1/4 w-28 h-28 bg-gradient-to-tl from-[#37B7C4]/12 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '4s' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-[#37B7C4] mb-3">Sub Feature for ARCHAIVE</p>
          <h2 className="mb-8 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            ARCHAIVEのその他の機能
          </h2>
          <div className="mx-auto max-w-4xl">
            <p className="text-white/90 leading-relaxed">
              図面起点の製造業DXを加速し、さまざまな業種のニーズに応える機能を実装。
              一人一人にあったカスタマイズが可能です。
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-2 justify-items-center gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8 xl:gap-10">
          {subFeatures.map((feature, index) => (
            <div
              key={feature.title}
              data-subfeature-id={index}
              className={`group relative w-full rounded-2xl border-[3px] border-gray-400 bg-[#fefefe] p-3 sm:p-6 lg:p-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } motion-reduce:opacity-100 motion-reduce:translate-y-0`}
              style={{
                transitionDelay: visibleCards[index] ? `${index * 120}ms` : '0ms',
                minHeight: '220px',
              }}
            >
              <div className="relative z-10 flex h-full flex-col items-center justify-center">
                <div className="mb-2 w-full transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    width={480}
                    height={360}
                    className="mx-auto h-32 w-auto object-contain sm:h-36 shadow-none"
                    sizes="(min-width: 1024px) 240px, 60vw"
                  />
                </div>
                <h4 className="mb-2 text-center text-base font-bold text-gray-800 sm:text-lg">
                  {feature.title}
                </h4>
                <p className="px-1 text-center text-xs text-gray-600 leading-relaxed sm:px-2 sm:text-sm">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
