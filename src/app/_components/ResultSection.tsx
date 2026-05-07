'use client';

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Image from 'next/image';

import { Calculator, Database, FileText, Search, Users } from 'lucide-react';

import { useRevealInView } from './useRevealInView';

type ResultSectionProps = {
  theme?: 'manufacturing' | 'construction';
};

const THEME_MAP = {
  manufacturing: {
    primary: 'var(--lp-primary)',
    primaryStrong: 'var(--lp-primary-strong)',
    primarySoft: 'var(--lp-primary-soft)',
    primarySurface: 'var(--lp-primary-surface)',
    primaryBorder: 'var(--lp-primary-border)',
    cardShadow: 'color-mix(in srgb, var(--lp-primary) 18%, transparent)',
  },
  construction: {
    primary: 'var(--lp-primary)',
    primaryStrong: 'var(--lp-primary-strong)',
    primarySoft: 'var(--lp-primary-soft)',
    primarySurface: 'var(--lp-primary-surface)',
    primaryBorder: 'var(--lp-primary-border)',
    cardShadow: 'color-mix(in srgb, var(--lp-primary) 18%, transparent)',
  },
} as const;

const RESULT_CARDS = [
  {
    value: 90,
    suffix: '%',
    label: '見積業務工数カット',
    note: '※ 提携企業調査',
    icon: FileText,
  },
  {
    value: 80,
    suffix: '%',
    label: '業務負担軽減',
    note: '※ 東京都実証実験',
    icon: Users,
  },
  {
    value: 69,
    suffix: '%',
    label: '図面検索時間削減',
    note: '※ 自社調査',
    icon: Search,
  },
] as const;

type BeforeAfterRow = {
  task: string;
  taskLabel?: readonly [string, string];
  icon: typeof Search;
  beforeMain: string;
  beforeNoWrap?: boolean;
  beforeAccent: string;
  afterMain: string;
  afterAccent: string;
};

const BEFORE_AFTER_ROWS: readonly BeforeAfterRow[] = [
  {
    task: '図面検索',
    icon: Search,
    beforeMain: 'ファイルサーバーを手動で探す',
    beforeNoWrap: true,
    beforeAccent: '30分',
    afterMain: 'AIが類似図面を自動提示',
    afterAccent: '3秒',
  },
  {
    task: '見積作成',
    icon: Calculator,
    beforeMain: '過去見積をExcelで手動確認',
    beforeNoWrap: true,
    beforeAccent: '2時間',
    afterMain: 'AIエージェントが自動生成',
    afterAccent: '20分',
  },
  {
    task: '情報引き継ぎ',
    icon: Database,
    beforeMain: 'ベテランに直接確認',
    beforeAccent: '退職で消滅',
    afterMain: 'AIが全社知識を保存・検索',
    afterAccent: '永続',
  },
] as const;

function easeOutCubic(value: number) {
  return 1 - (1 - value) ** 3;
}

function AnimatedMetric({
  value,
  suffix,
  className = '',
}: {
  value: number;
  suffix: string;
  className?: string;
}) {
  const { ref: rootRef, isVisible: isInView } = useRevealInView<HTMLDivElement>(
    {
      threshold: 0.25,
      rootMargin: '-15% 0px -15% 0px',
    },
  );
  const [displayValue, setDisplayValue] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frameId = 0;
    let startAt: number | null = null;
    const duration = 1800;

    const animate = (timestamp: number) => {
      if (startAt === null) startAt = timestamp;

      const rawProgress = Math.min((timestamp - startAt) / duration, 1);
      const easedProgress = easeOutCubic(rawProgress);

      setProgress(easedProgress);
      setDisplayValue(Math.round(value * easedProgress));

      if (rawProgress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isInView, value]);

  const counterColor = useMemo(() => {
    const hue = 8 + progress * 122;
    const saturation = 82 - progress * 18;
    const lightness = 56 - progress * 14;

    return `hsl(${hue} ${saturation}% ${lightness}%)`;
  }, [progress]);

  return (
    <div
      ref={rootRef}
      className={`flex items-end justify-center gap-1 whitespace-nowrap ${className}`}
      style={{ color: counterColor }}
    >
      <span className='text-[clamp(2.35rem,4vw,3.65rem)] leading-none font-black tracking-[-0.06em]'>
        {displayValue}
      </span>
      <span className='pb-1 text-[clamp(1.18rem,1.7vw,1.65rem)] leading-none font-black tracking-[-0.03em]'>
        {suffix}
      </span>
    </div>
  );
}

function RevealBlock({
  children,
  className = '',
  threshold = 0.2,
}: {
  children: ReactNode;
  className?: string;
  threshold?: number;
}) {
  const { ref, isVisible } = useRevealInView<HTMLDivElement>({ threshold });

  return (
    <div
      ref={ref}
      className={`reason-reveal ${isVisible ? 'reason-reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export function ResultSection({ theme = 'manufacturing' }: ResultSectionProps) {
  const palette = THEME_MAP[theme];

  return (
    <section
      className='relative overflow-hidden bg-[linear-gradient(90deg,color-mix(in_srgb,var(--lp-primary-deep)_88%,var(--lp-primary))_0%,color-mix(in_srgb,var(--lp-primary)_92%,white)_50%,color-mix(in_srgb,var(--lp-primary-deep)_88%,var(--lp-primary))_100%)] px-6 pt-16 pb-20 sm:px-10 lg:px-16 lg:pt-20 lg:pb-24'
      style={
        {
          '--reason-primary': palette.primary,
          '--reason-primary-strong': palette.primaryStrong,
          '--reason-primary-soft': palette.primarySoft,
          '--reason-primary-surface': palette.primarySurface,
          '--reason-primary-border': palette.primaryBorder,
          '--reason-card-shadow': palette.cardShadow,
        } as CSSProperties
      }
    >
      <div className='pointer-events-none absolute inset-x-0 top-0 h-14 overflow-hidden sm:h-16 lg:h-18'>
        <svg
          className='block h-full w-full'
          viewBox='0 0 1440 160'
          preserveAspectRatio='none'
          aria-hidden='true'
        >
          <path d='M0,0 H1440 V24 C1190,72 250,72 0,24 Z' fill='white' />
        </svg>
      </div>
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-20 overflow-hidden sm:h-24 lg:h-28'>
        <svg
          className='block h-full w-full'
          viewBox='0 0 1440 160'
          preserveAspectRatio='none'
          aria-hidden='true'
        >
          <path d='M0,122 C250,58 1190,58 1440,122 V160 H0 Z' fill='white' />
        </svg>
      </div>
      <div className='relative z-10 mx-auto max-w-[1480px]'>
        <div className='pt-10 text-center sm:pt-12 lg:pt-14'>
          <p className='text-sm font-black tracking-[0.24em] text-white/95 sm:text-base'>
            RESULT
          </p>
          <h2 className='mt-5 text-[clamp(2.2rem,4.6vw,4.3rem)] leading-[1.02] font-black tracking-[-0.06em] text-white'>
            導入効果
          </h2>
        </div>

        <div className='mt-14 grid gap-6 lg:grid-cols-3'>
          {RESULT_CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <RevealBlock
                key={card.label}
                threshold={0.3}
                className='rounded-[1.9rem] border border-white/90 bg-white px-6 py-7 text-center shadow-[0_16px_34px_rgba(15,23,42,0.05)] sm:px-7 sm:py-8'
              >
                <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--reason-primary-soft)] text-[var(--reason-primary-strong)]'>
                  <Icon className='h-6 w-6' strokeWidth={2.2} />
                </div>
                <AnimatedMetric
                  value={card.value}
                  suffix={card.suffix}
                  className='mt-5'
                />
                <p className='text-lp-text mt-4 text-[1.05rem] leading-tight font-black tracking-[-0.03em] sm:text-[1.15rem]'>
                  {card.label}
                </p>
                <p className='text-lp-text-subtle mt-2 text-sm font-semibold'>
                  {card.note}
                </p>
              </RevealBlock>
            );
          })}
        </div>

        <RevealBlock className='mt-18'>
          <h3 className='text-center text-[clamp(1.9rem,3.7vw,3.45rem)] font-black tracking-[-0.06em] text-white'>
            ビフォー・アフター
          </h3>
          <div className='mx-auto mt-6 h-px w-full max-w-[18rem] border-t-2 border-solid border-white/70 sm:max-w-[20rem]' />

          <div className='relative mt-8 pb-48 sm:pb-52 lg:min-h-[34rem] lg:pb-0'>
            <div className='relative z-10 rounded-[0.95rem] border border-white/70 bg-white/72 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-[16px] sm:p-5.5 lg:absolute lg:bottom-[-1.5rem] lg:left-0 lg:w-[58%] lg:p-5.5 xl:w-[56%]'>
              <div className='border-lp-border hidden border-b pb-4 md:block'>
                <div className='grid gap-4 md:grid-cols-[minmax(0,0.66fr)_minmax(0,1fr)_minmax(0,1fr)]'>
                  <div className='text-lp-text-subtle text-center text-[0.86rem] font-black sm:text-[0.95rem]'>
                    業務
                  </div>
                  <div className='text-lp-text-subtle text-center text-[0.86rem] font-black sm:text-[0.95rem]'>
                    導入前
                  </div>
                  <div className='text-lp-text-subtle text-center text-[0.86rem] font-black sm:text-[0.95rem]'>
                    ARCHAIVE導入後
                  </div>
                </div>
              </div>

              <div className='grid gap-3 md:mt-4 md:gap-4'>
                {BEFORE_AFTER_ROWS.map((row) => {
                  const Icon = row.icon;

                  return (
                    <div
                      key={row.task}
                      className='grid gap-2.5 rounded-[0.9rem] bg-white/42 p-2.5 md:grid-cols-[minmax(0,0.66fr)_minmax(0,1fr)_minmax(0,1fr)] md:items-stretch md:gap-3 md:bg-transparent md:p-0'
                    >
                      <div className='bg-lp-text-subtle flex min-w-0 items-center justify-center rounded-[0.7rem] px-3 py-3 text-center text-[0.88rem] font-black text-white sm:text-[1.02rem] md:rounded-[0.75rem] md:px-4 md:py-4.5'>
                        <div className='flex items-center gap-2'>
                          <Icon className='h-5 w-5 shrink-0 stroke-[2.2]' />
                          <span>
                            {row.taskLabel ? (
                              <>
                                {row.taskLabel[0]}
                                <br />
                                {row.taskLabel[1]}
                              </>
                            ) : (
                              row.task
                            )}
                          </span>
                        </div>
                      </div>

                      <div className='grid grid-cols-2 gap-2.5 md:contents'>
                        <div className='border-lp-border bg-lp-surface-soft min-w-0 rounded-[0.7rem] border px-3 py-3 sm:px-5 md:rounded-[0.75rem] md:px-4.5 md:py-4'>
                          <p className='text-lp-text-muted mb-1.5 text-[0.68rem] font-black tracking-[0.08em] md:hidden'>
                            導入前
                          </p>
                          <p
                            className={`text-lp-text-subtle text-[0.78rem] leading-5 font-bold sm:text-[0.94rem] md:text-[0.91rem] md:leading-6 ${
                              row.beforeNoWrap
                                ? 'tracking-[-0.02em] sm:text-[0.87rem] md:whitespace-nowrap'
                                : ''
                            }`}
                          >
                            {row.beforeMain}
                          </p>
                          <p className='text-lp-danger mt-2 text-[1.05rem] font-black tracking-[-0.04em] sm:text-[1.4rem] md:mt-2.5 md:text-[1.26rem]'>
                            {row.beforeAccent}
                          </p>
                        </div>

                        <div className='min-w-0 rounded-[0.7rem] border border-[var(--reason-primary-border)] bg-[var(--reason-primary-soft)] px-3 py-3 sm:px-5 md:rounded-[0.75rem] md:px-4.5 md:py-4'>
                          <p className='text-lp-text-muted mb-1.5 text-[0.68rem] font-black tracking-[0.08em] md:hidden'>
                            導入後
                          </p>
                          <p className='text-lp-text-subtle text-[0.78rem] leading-5 font-bold sm:text-[0.94rem] md:text-[0.91rem] md:leading-6'>
                            {row.afterMain}
                          </p>
                          <p className='mt-2 text-[1.05rem] font-black tracking-[-0.04em] text-[var(--reason-primary-strong)] sm:text-[1.4rem] md:mt-2.5 md:text-[1.26rem]'>
                            {row.afterAccent}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='border-lp-border bg-lp-primary-surface absolute bottom-[-1rem] left-1/2 z-0 aspect-video w-[128%] max-w-none -translate-x-1/2 overflow-hidden rounded-[0.95rem] border shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:bottom-[-0.75rem] sm:w-[116%] lg:top-0 lg:right-[-20%] lg:bottom-auto lg:left-auto lg:mt-0 lg:h-auto lg:max-h-none lg:w-[74%] lg:translate-x-0 xl:right-[-24%] xl:w-[80%]'>
              <Image
                src='/lp-v2/drawing-screen.png'
                alt='図面比較と検索画面'
                width={1600}
                height={900}
                className='h-full w-full object-cover object-center lg:object-left'
              />
              <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_28%),linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_100%)]' />
            </div>
          </div>
        </RevealBlock>
      </div>

      <style jsx>{`
        .reason-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.3s ease-out,
            transform 0.3s ease-out;
          will-change: opacity, transform;
        }

        .reason-reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
