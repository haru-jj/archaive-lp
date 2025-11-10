'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import SubFeatureCardFrame from './SubFeatureCardFrame';

const writingStyle = (
  config: {
    delay?: string;
    duration?: string;
    track?: string;
    fill?: string;
    cursor?: string;
  } = {},
): CSSProperties =>
  ({
    '--writing-delay': config.delay ?? '0s',
    '--writing-duration': config.duration ?? '3s',
    '--writing-track-color': config.track ?? 'rgba(75, 85, 99, 0.15)',
    '--writing-fill-color': config.fill ?? 'rgba(75, 85, 99, 0.55)',
    '--writing-cursor-color': config.cursor ?? 'rgba(75, 85, 99, 0.85)',
  } as CSSProperties);

const WritingLine = ({
  className = '',
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) => (
  <div className={`writing-track ${className}`} style={style}>
    <div className="writing-progress" />
  </div>
);

type SubFeature = {
  title: string;
  subtitle: string;
  illustration: JSX.Element;
};

const subFeatures: SubFeature[] = [
  {
    title: '顧客管理',
    subtitle: '顧客情報と案件履歴を一元管理',
    illustration: (
      <SubFeatureCardFrame>
        <div className="flex h-full flex-col justify-between" aria-hidden="true">
          <div className="flex flex-col" style={{ gap: 16 }}>
            {[0, 1].map((index) => (
              <div
                key={`customer-card-${index}`}
                className="flex items-center rounded-none border border-[#4B5563]/25 bg-white/90 shadow-sm"
                style={{ padding: '12px 14px', gap: 14 }}
              >
                <div
                  className="flex items-center justify-center rounded-full border border-[#4B5563]/30 bg-[#4B5563]/18"
                  style={{ width: 36, height: 36 }}
                >
                  <svg viewBox="0 0 24 24" className="text-[#1F2937]" style={{ width: 20, height: 20 }}>
                    <circle cx="12" cy="9" r="4" fill="currentColor" />
                    <path
                      d="M5.5 19.5c0-3.31 2.99-6 6.5-6s6.5 2.69 6.5 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="flex flex-col" style={{ gap: 6, width: 86 }}>
                  <span
                    className="rounded-full bg-[#4B5563]/30"
                    style={{ display: 'block', height: 6, width: 70 }}
                  />
                  <span
                    className="rounded-full bg-[#4B5563]/15"
                    style={{ display: 'block', height: 6, width: 58 }}
                  />
                </div>
                <div className="flex flex-col items-end" style={{ gap: 6 }}>
                  <span
                    className="rounded-full bg-[#4B5563]/20"
                    style={{ display: 'block', height: 6, width: 30 }}
                  />
                  <span
                    className={`rounded-full ${index === 0 ? 'bg-emerald-400 animate-ping' : 'bg-[#4B5563]/25'}`}
                    style={{ display: 'block', height: 6, width: 18 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </SubFeatureCardFrame>
    ),
  },
  {
    title: '図面内書き込み',
    subtitle: '図面上に直接コメントや修正指示を追加',
    illustration: (
      <SubFeatureCardFrame>
        <div className="flex h-full flex-col justify-between gap-3 pt-2" aria-hidden="true">
          <div
            className="relative mx-auto flex items-center justify-center overflow-visible rounded-none border border-[#4B5563]/30 bg-white shadow-sm"
            style={{ width: 132, height: 96, padding: '12px 14px' }}
          >
            <svg viewBox="0 0 92 64" className="h-full w-full text-[#4B5563]" role="img" aria-hidden="true">
              <rect x="6" y="6" width="80" height="52" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <line x1="6" y1="32" x2="86" y2="32" stroke="currentColor" strokeWidth="1.2" />
              <line x1="46" y1="6" x2="46" y2="58" stroke="currentColor" strokeWidth="1.2" />
              <line x1="24" y1="16" x2="46" y2="32" stroke="currentColor" strokeWidth="1.2" />
              <line x1="46" y1="32" x2="70" y2="46" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="32" cy="22" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="64" cy="40" r="12" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="64" cy="40" r="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <line x1="22" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="22" cy="50" r="2.4" fill="currentColor" />
              <circle cx="70" cy="50" r="2.4" fill="currentColor" />
            </svg>
            <svg
              viewBox="0 0 48 48"
              className="absolute rotate-6 text-[#4B5563] animate-pen-sway"
              style={{ width: 48, height: 48, right: -10, bottom: -2, zIndex: 10 }}
            >
              <path
                d="M33 6a3 3 0 0 1 4.24 0l4.76 4.76a3 3 0 0 1 0 4.24L20 37l-8 2 2-8L33 6Z"
                fill="currentColor"
                opacity="0.9"
              />
            </svg>
          </div>
          <div
            className="mx-auto flex items-center justify-between rounded-full border border-[#4B5563]/35 bg-white/85"
            style={{ width: 130, padding: '6px 12px' }}
          >
            <span
              className="rounded-full bg-[#4B5563]/30"
              style={{ display: 'block', height: 6, width: 60 }}
            />
            <span
              className="rounded-full bg-[#4B5563]/20"
              style={{ display: 'block', height: 6, width: 48 }}
            />
          </div>
        </div>
      </SubFeatureCardFrame>
    ),
  },
  {
    title: '組図・部品図管理',
    subtitle: '組立図と部品図の階層構造管理',
    illustration: (
      <SubFeatureCardFrame>
        <div className="flex h-full items-center justify-center gap-3" aria-hidden="true">
          <div className="flex w-[90px] flex-col gap-1 rounded-none border border-[#E5E7EB] bg-white/95 p-2">
            <svg viewBox="0 0 60 80" className="w-full text-[#4B5563]">
              <line x1="20" y1="10" x2="20" y2="70" stroke="#D1D5DB" strokeWidth="1.5" />
              {[0, 1, 2].map((index) => (
                <g key={`branch-${index}`}>
                  <line x1="20" y1={20 + index * 20} x2="40" y2={20 + index * 10} stroke="#9CA3AF" strokeWidth="1.5" />
                  <circle cx="20" cy={20 + index * 20} r="2.8" fill="#9CA3AF" />
                  <rect x="40" y={15 + index * 10} width="12" height="8" fill="#F3F4F6" stroke="#D1D5DB" />
                  <line x1="40" y1={19 + index * 10} x2="52" y2={19 + index * 10} stroke="#E5E7EB" strokeWidth="1" />
                </g>
              ))}
            </svg>
          </div>
          <div className="flex w-[110px] flex-col gap-2 rounded-none border border-[#E5E7EB] bg-white/90 p-3">
            <div className="rounded-none border border-[#E5E7EB] bg-white p-2">
              <svg viewBox="0 0 90 50" className="w-full text-[#4B5563]">
                <rect x="6" y="4" width="78" height="42" fill="#F9FAFB" stroke="#D1D5DB" />
                <rect x="12" y="10" width="66" height="8" fill="#E5E7EB" />
                <polyline points="12,28 38,22 56,30 72,22" fill="none" stroke="#D1D5DB" strokeWidth="1.2" />
                <circle cx="12" cy="28" r="2" fill="#9CA3AF" />
                <circle cx="38" cy="22" r="2" fill="#9CA3AF" />
                <circle cx="56" cy="30" r="2" fill="#9CA3AF" />
                <circle cx="72" cy="22" r="2" fill="#9CA3AF" />
              </svg>
            </div>
            <div className="flex flex-col gap-1 rounded-none border border-[#E5E7EB] bg-[#F9FAFB] p-2">
              <div className="h-2 rounded-none bg-[#E5E7EB]" />
              <div className="h-2 rounded-none bg-[#E5E7EB]/70" />
              <div className="flex gap-1">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={`detail-${index}`} className="h-2 flex-1 rounded-none bg-[#D1D5DB]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </SubFeatureCardFrame>
    ),
  },
  {
    title: '権限管理',
    subtitle: 'ユーザーごとのアクセス権限設定',
    illustration: (
      <SubFeatureCardFrame>
        <div className="flex h-full flex-col justify-between" aria-hidden="true">
          <div className="flex flex-col" style={{ gap: 14 }}>
            {[0, 1].map((index) => (
              <div
                key={`permission-card-${index}`}
                className="flex items-center rounded-none border border-[#4B5563]/25 bg-white/90 px-4 py-3"
                style={{ gap: 14 }}
              >
                <div
                  className="flex items-center justify-center rounded-full border border-[#4B5563]/35 bg-[#F5F5F5]"
                  style={{ width: 36, height: 36 }}
                >
                  <svg viewBox="0 0 24 24" className="text-[#1F2937]" style={{ width: 20, height: 20 }}>
                    <circle cx="12" cy="9" r="4" fill="currentColor" />
                    <path
                      d="M5.5 19.5c0-3.31 2.99-6 6.5-6s6.5 2.69 6.5 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="flex flex-col" style={{ gap: 6, width: 86 }}>
                  <span
                    className="rounded-full bg-[#4B5563]/30"
                    style={{ display: 'block', height: 6, width: 70 }}
                  />
                  <span
                    className="rounded-full bg-[#4B5563]/15"
                    style={{ display: 'block', height: 6, width: 58 }}
                  />
                </div>
                <div
                  className="flex items-center justify-center rounded-none border border-[#4B5563]/35 bg-white"
                  style={{ width: 32, height: 32 }}
                >
                  {index === 0 ? (
                    <svg viewBox="0 0 24 24" className="text-[#4B5563]" style={{ width: 18, height: 18 }}>
                      <path
                        d="M6 12l4 4 8-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="text-[#EA6363]" style={{ width: 18, height: 18 }}>
                      <path
                        d="M7 7l10 10M17 7l-10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SubFeatureCardFrame>
    ),
  },
  {
    title: '帳票発行',
    subtitle: '見積書や仕様書などの帳票を自動生成',
    illustration: (
      <SubFeatureCardFrame>
        <div className="flex h-full flex-col justify-center" aria-hidden="true">
          <div className="relative mx-auto" style={{ width: 132, height: 102 }}>
            <div
              className="absolute inset-0 rounded-none border border-[#4B5563]/25 bg-[#F5F5F5]/85 shadow-sm"
              style={{ boxShadow: '0 8px 18px rgba(21, 85, 106, 0.12)' }}
            >
              <div
                className="absolute inset-[12px] rounded-none border border-[#4B5563]/25 bg-white/90 overflow-hidden"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(55,183,196,0.1)' }}
              >
                <div
                  className="flex flex-col animate-page-scroll"
                  style={{
                    gap: 7,
                    padding: '14px 18px',
                    '--page-scroll-duration': '3.6s',
                  } as CSSProperties}
                >
                  {[96, 90, 94, 88, 92, 86, 90, 84].map((width, lineIdx) => (
                    <WritingLine
                      key={`page-line-${lineIdx}`}
                      style={{
                        ...writingStyle({
                          duration: `${2.3 + lineIdx * 0.18}s`,
                          delay: `${0.25 + lineIdx * 0.18}s`,
                          track: lineIdx % 2 === 1 ? 'rgba(75, 85, 99, 0.12)' : undefined,
                          fill: lineIdx % 2 === 1 ? 'rgba(75, 85, 99, 0.48)' : undefined,
                        }),
                        height: lineIdx % 3 === 0 ? 6 : 4,
                        width,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <svg
              viewBox="0 0 24 24"
              className="absolute text-[#4B5563]"
              style={{ width: 38, height: 38, top: -18, left: -18 }}
            >
              <path
                d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                fill="currentColor"
                opacity="0.85"
              />
              <path
                d="M14 3v4a1 1 0 0 0 1 1h4"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </SubFeatureCardFrame>
    ),
  },
  {
    title: 'キーワード検索',
    subtitle: '図面や文書をキーワードで高速検索',
    illustration: (
      <SubFeatureCardFrame>
        <div className="flex h-full flex-col items-center justify-center" style={{ gap: 13 }} aria-hidden="true">
          <div
            className="relative rounded-full border border-[#4B5563]/40 bg-white"
            style={{ width: 124, padding: '8px 16px', height: 36 }}
          >
            <div
              className="rounded-full bg-[#4B5563]/30 animate-pulse"
              style={{ height: 6, width: 98 }}
            />
            <div
              className="pointer-events-none absolute overflow-hidden rounded-full"
              style={{ top: 6, bottom: 6, left: 8, right: 8 }}
            >
              <div className="h-full w-full bg-gradient-to-r from-transparent via-[#4B5563]/15 to-transparent animate-search-sweep" />
            </div>
            <div
              className="absolute flex items-center justify-center rounded-full border border-[#4B5563] bg-[#4B5563]/10 animate-search-button origin-center"
              style={{ width: 28, height: 28, right: -14, top: 4, willChange: 'transform' }}
            >
              <svg viewBox="0 0 24 24" className="text-[#4B5563]" style={{ width: 18, height: 18 }}>
                <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                <line
                  x1="16"
                  y1="16"
                  x2="21"
                  y2="21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div
            className="rounded-none border border-[#4B5563]/25 bg-[#EFEFEF]/70"
            style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: 10, width: 132 }}
          >
            {[0, 1, 2].map((row) => (
              <div key={`search-row-${row}`} className="flex items-center" style={{ gap: 10 }}>
                <span
                  className="rounded-full bg-[#4B5563]/40 animate-pulse-dot"
                  style={{ width: 8, height: 8 }}
                />
                <span
                  className="rounded-full bg-[#4B5563]/20"
                  style={{ height: 6, width: 84 }}
                />
              </div>
            ))}
          </div>
        </div>
      </SubFeatureCardFrame>
    ),
  },
  {
    title: '案件管理',
    subtitle: 'プロジェクトの進捗状況と納期管理',
    illustration: (
      <SubFeatureCardFrame>
        <div className="flex h-full flex-col justify-between" aria-hidden="true">
          <div className="flex flex-col" style={{ gap: 16 }}>
            {[0, 1].map((index) => (
              <div
                key={`project-card-${index}`}
                className="flex items-center rounded-none border border-[#4B5563]/25 bg-white/90 shadow-sm"
                style={{ padding: '12px 14px', gap: 14 }}
              >
                <div
                  className="flex items-center justify-center rounded-full border border-[#4B5563]/30 bg-[#4B5563]/18"
                  style={{ width: 36, height: 36 }}
                >
                  <svg viewBox="0 0 24 24" className="text-[#1F2937]" style={{ width: 20, height: 20 }}>
                    <path d="M5 4h9v16H5z" fill="currentColor" opacity="0.9" />
                    <path
                      d="M14 9h5v11h-5z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 7h2M7.5 11h2M7.5 15h2M16.5 12h1.5M16.5 15h1.5"
                      stroke="#fff"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 20v-3h4v3"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col" style={{ gap: 6, width: 86 }}>
                  <span
                    className="rounded-full bg-[#4B5563]/30"
                    style={{ display: 'block', height: 6, width: 70 }}
                  />
                  <span
                    className="rounded-full bg-[#4B5563]/15"
                    style={{ display: 'block', height: 6, width: 58 }}
                  />
                </div>
                <div className="flex flex-col items-end" style={{ gap: 6 }}>
                  <span
                    className="rounded-full bg-[#4B5563]/20"
                    style={{ display: 'block', height: 6, width: 30 }}
                  />
                  <span
                    className={`rounded-full ${index === 0 ? 'bg-emerald-400 animate-ping' : 'bg-[#4B5563]/25'}`}
                    style={{ display: 'block', height: 6, width: 18 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </SubFeatureCardFrame>
    ),
  },
  {
    title: '３Dプレビュー',
    subtitle: '図面データの立体的な可視化と検証',
    illustration: (
      <SubFeatureCardFrame>
        <div className="relative flex h-full items-center justify-center" aria-hidden="true">
          <div className="relative" style={{ width: 96, height: 64 }}>
            <div className="absolute inset-0 rounded-none border border-[#4B5563]/25 bg-gradient-to-br from-[#4B5563] to-[#4B5563]" />
            <div className="absolute rounded-none border border-white/30" style={{ inset: 8 }} />
            <div
              className="absolute rounded-none border border-[#4B5563]/35 bg-gradient-to-br from-[#4B5563] to-[#4B5563] animate-bounce"
              style={{ width: 56, height: 36, top: -8, left: 12 }}
            />
            <div
              className="absolute rounded-none border border-[#4B5563]/35 bg-gradient-to-br from-[#4B5563] to-[#4B5563] animate-pulse"
              style={{ width: 56, height: 36, top: 8, right: -12 }}
            />
            <div
              className="absolute flex items-center justify-center rounded-full border-2 border-white"
              style={{ width: 20, height: 20, top: -4, right: -4 }}
            >
              <div
                className="rounded-full border border-white animate-spin"
                style={{ width: 12, height: 12 }}
              />
            </div>
            <div
              className="absolute flex -translate-x-1/2"
              style={{ bottom: -12, left: '50%', gap: 4 }}
            >
              {[0, 1, 2].map((index) => (
                <span
                  key={`orb-${index}`}
                  className={`rounded-full bg-[#4B5563]/60 ${index === 0 ? 'animate-ping' : ''}`}
                  style={{ width: 6, height: 6 }}
                />
              ))}
            </div>
          </div>
        </div>
      </SubFeatureCardFrame>
    ),
  },
];

export default function SubFeaturesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative py-24 -mx-[50vw] left-[50%] right-[50%] w-screen bg-[#0F172A]">
      <div className="absolute inset-0 opacity-30">
        <svg className="h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="none">
          <defs>
            <pattern id="mesh" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4B5563" strokeWidth="0.5" opacity="0.3" />
            </pattern>
            <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4B5563" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#4B5563" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#4B5563" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh)" />
          <rect width="100%" height="100%" fill="url(#meshGradient)" />
        </svg>
      </div>
      <div className="absolute inset-0">
        <svg className="h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="none">
          <defs>
            <pattern id="mesh" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59,130,246,0.22)" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh)" />
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#4B5563]/10 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-bl from-[#4B5563]/15 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s', animationDuration: '3s' }} />
        <div className="absolute bottom-16 left-1/3 w-20 h-20 bg-gradient-to-tr from-[#4B5563]/8 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }} />
        <div className="absolute bottom-32 right-1/4 w-28 h-28 bg-gradient-to-tl from-[#4B5563]/12 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '4s' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-8 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            ARCHAIVEのその他の機能
          </h2>
          <div className="mx-auto max-w-4xl space-y-4">
            <p className="text-white/90 leading-relaxed">
              図面起点の製造業DXを加速し、さまざまな業種のニーズに応える機能を実装
            </p>
            <p className="text-white/90 leading-relaxed">
              一人一人にあったカスタマイズが可能です。
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8 xl:gap-10">
          {subFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group relative w-full rounded-none border border-gray-300/50 bg-gradient-to-br from-gray-50 to-white p-3 sm:p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ minHeight: '220px' }}
              >
              <div className="absolute top-0 left-0 h-0.5 w-0 rounded-full bg-[#4B5563] transition-all duration-300 group-hover:w-full" />
              <div className="absolute top-0 right-0 h-0 w-0.5 rounded-full bg-[#4B5563] transition-all duration-300 delay-100 group-hover:h-full" />
              <div className="absolute bottom-0 right-0 h-0.5 w-0 rounded-full bg-[#4B5563] transition-all duration-300 delay-200 group-hover:w-full" />
              <div className="absolute bottom-0 left-0 h-0 w-0.5 rounded-full bg-[#4B5563] transition-all duration-300 delay-300 group-hover:h-full" />
              <div className="absolute inset-0 rounded-none bg-gradient-to-br from-[#4B5563]/5 via-transparent to-[#4B5563]/3 opacity-0 transition-opacity duration-500 delay-200 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col items-center justify-center">
                <div className="mb-4 w-full transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                  {feature.illustration}
                </div>
                <h4 className="mb-2 text-center text-base font-bold text-gray-700 sm:text-lg">
                  {feature.title}
                </h4>
                <p className="px-1 text-center text-xs text-gray-500 leading-relaxed sm:px-2 sm:text-sm">
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
