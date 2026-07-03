'use client';

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ChevronLeft, ChevronRight } from 'lucide-react';

// href があれば Link、なければ通常の div として描画するカードのラッパー
function CardLink({
  href,
  className,
  children,
}: {
  href: string | null;
  className: string;
  children: ReactNode;
}) {
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return <div className={className}>{children}</div>;
}

const CASE_STUDIES = [
  {
    company: '株式会社エイ・エム・シィ',
    comment:
      '紙図面の管理負荷を削減し、クリック主体の検索で誰でも使える図面管理環境を構築',
    industry: '業種：製造業・自動車部品加工',
    companySize: '従業員数：1〜100名',
    imageSrc: '/lp-v2/people_2.png',
    imageAlt: '株式会社エイ・エム・シィの事例写真',
    mobileObjectPosition: 'center center',
    href: '/case/amc',
  },
  {
    company: '株式会社クロステック',
    comment:
      '図面起点の案件管理で見積・納品・請求業務を大幅削減。1案件あたり40%の機会損失防止を実現',
    industry: '業種：製造業・ワイヤー放電加工',
    companySize: '従業員数：1〜100名',
    imageSrc: '/lp-v2/people_1.png',
    imageAlt: '株式会社クロステックの事例写真',
    mobileObjectPosition: 'center center',
    href: '/case/crosstech',
  },
  {
    company: 'スエナミ工業株式会社',
    comment:
      '大量図面のAI見積とAIエージェントで属人化を解消し、見積業務を高速化',
    industry: '業種：製造業・精密板金加工',
    companySize: '従業員数：1〜100名',
    imageSrc: '/lp-v2/people_3.png',
    imageAlt: 'スエナミ工業株式会社の事例写真',
    mobileObjectPosition: 'center center',
    href: '/case/suenami',
  },
] as const;

function normalizeStudyIndex(index: number) {
  return (
    ((index % CASE_STUDIES.length) + CASE_STUDIES.length) % CASE_STUDIES.length
  );
}

export function CaseStudySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<-1 | 0 | 1>(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  const activeStudy = CASE_STUDIES[activeIndex] ?? CASE_STUDIES[0];
  const desktopStudies = [
    CASE_STUDIES[normalizeStudyIndex(activeIndex - 2)],
    CASE_STUDIES[normalizeStudyIndex(activeIndex - 1)],
    activeStudy,
    CASE_STUDIES[normalizeStudyIndex(activeIndex + 1)],
    CASE_STUDIES[normalizeStudyIndex(activeIndex + 2)],
  ];

  const desktopTranslate =
    slideDirection === 1
      ? 'translateX(calc(var(--case-study-step) * -2))'
      : slideDirection === -1
        ? 'translateX(0px)'
        : 'translateX(calc(var(--case-study-step) * -1))';

  const displayActiveIndex =
    slideDirection !== 0
      ? normalizeStudyIndex(activeIndex + slideDirection)
      : activeIndex;

  const moveSlide = (direction: -1 | 1) => {
    if (slideDirection !== 0) return;

    if (!window.matchMedia('(min-width: 640px)').matches) {
      setActiveIndex((prev) => normalizeStudyIndex(prev + direction));
      return;
    }

    setIsTransitionEnabled(true);
    setSlideDirection(direction);
  };

  useEffect(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      if (!window.matchMedia('(min-width: 640px)').matches) {
        setActiveIndex((prev) => normalizeStudyIndex(prev + 1));
        return;
      }

      if (slideDirection === 0) {
        setIsTransitionEnabled(true);
        setSlideDirection(1);
      }
    }, 5000);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex, slideDirection]);

  const showPrevious = () => {
    moveSlide(-1);
  };

  const showNext = () => {
    moveSlide(1);
  };

  const handleDesktopTransitionEnd = (event: React.TransitionEvent) => {
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== 'transform') return;
    if (slideDirection === 0) return;

    setActiveIndex((prev) => normalizeStudyIndex(prev + slideDirection));
    setIsTransitionEnabled(false);
    setSlideDirection(0);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
    });
  };

  return (
    <>
      <svg
        aria-hidden='true'
        className='pointer-events-none absolute h-0 w-0'
      >
        <defs>
          <filter id='case-study-goo'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='3.5' />
            <feColorMatrix
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10'
            />
          </filter>
        </defs>
      </svg>
    <section
      id='cases'
      className='scroll-mt-24 overflow-hidden bg-white px-6 py-12 sm:px-10 sm:py-32 lg:px-16 lg:py-40'
    >
      <div className='relative mx-auto w-full max-w-[1800px] overflow-x-hidden overflow-y-visible'>
        <div className='mx-auto max-w-[920px] text-center'>
          <p className='text-sm font-bold text-[var(--lp-primary)]'>
            CASE STUDY
          </p>
          <h2 className='text-lp-text mt-5 text-[1.5rem] leading-[1.35] font-bold sm:text-[clamp(1.625rem,2.6vw,2rem)]'>
            導入企業の声
          </h2>
          <div className='border-lp-text/55 mx-auto mt-6 h-px w-full max-w-[18rem] border-t-2 border-solid sm:max-w-[20rem]' />
          <p className='text-lp-text-subtle mx-auto mt-4 max-w-[44rem] text-base leading-7 font-normal sm:text-lg'>
            ARCHAIVEを導入した企業の現場で発生した変化を
            <br className='hidden sm:inline' />
            担当者の声とともにご紹介します。
          </p>
        </div>

        <div className='relative mt-14 block px-0 sm:mt-16 sm:hidden'>
          <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-[14%] bg-gradient-to-r from-white to-transparent' />
          <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-[14%] bg-gradient-to-l from-white to-transparent' />
          <CardLink
            href={activeStudy.href}
            className='mx-auto block w-[90%] overflow-hidden rounded-[1.5rem] border border-[color-mix(in_srgb,var(--lp-primary)_18%,white)] bg-white text-center shadow-[0_16px_50px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_20px_56px_rgba(15,23,42,0.14)]'
          >
            <div className='relative block h-52 w-full overflow-hidden'>
              {activeStudy.imageSrc ? (
                <Image
                  key={activeStudy.imageSrc}
                  src={activeStudy.imageSrc}
                  alt={activeStudy.imageAlt}
                  fill
                  priority
                  className='object-cover'
                  style={{ objectPosition: activeStudy.mobileObjectPosition }}
                />
              ) : (
                <div className='flex h-full w-full items-center justify-center bg-slate-100 text-base font-bold text-slate-500'>
                  No Image
                </div>
              )}
              <div className='absolute inset-x-0 bottom-0 flex h-16 items-end bg-gradient-to-t from-black/70 to-transparent'>
                <div className='p-3 text-left text-white'>
                  <div className='text-sm font-bold'>{activeStudy.company}</div>
                </div>
              </div>
            </div>
            <div className='min-h-[11.5rem] px-5 py-5 text-left'>
              <p className='text-sm leading-[1.8] font-bold text-slate-700'>
                {activeStudy.comment}
              </p>
              <p className='mt-2 text-xs leading-6 font-normal text-slate-600'>
                {activeStudy.industry}
              </p>
              <p className='text-xs leading-6 font-normal text-slate-600'>
                {activeStudy.companySize}
              </p>
            </div>
          </CardLink>
        </div>

        <div className='relative mt-10 hidden py-10 sm:mt-12 sm:block'>
          <div
            className='relative mx-auto overflow-x-hidden overflow-y-visible [--case-study-card-width:20rem] [--case-study-gap:1rem] [--case-study-step:calc(var(--case-study-card-width)+var(--case-study-gap))] md:[--case-study-card-width:24rem] md:[--case-study-gap:1.25rem] lg:[--case-study-card-width:26rem] lg:[--case-study-gap:1.5rem] xl:[--case-study-card-width:28rem]'
            style={{
              width:
                'calc((var(--case-study-card-width) * 3) + (var(--case-study-gap) * 2))',
            }}
          >
            <div
              onTransitionEnd={handleDesktopTransitionEnd}
              className={`flex w-max gap-[var(--case-study-gap)] will-change-transform ${
                isTransitionEnabled
                  ? 'transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]'
                  : ''
              }`}
              style={{ transform: desktopTranslate }}
            >
              {desktopStudies.map((study, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className='w-[var(--case-study-card-width)] flex-shrink-0 text-center'
                  >
                    <CardLink
                      href={study.href}
                      className='block overflow-hidden rounded-[1.75rem] border border-[color-mix(in_srgb,var(--lp-primary)_18%,white)] bg-white shadow-[0_14px_44px_rgba(15,23,42,0.08)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(15,23,42,0.14)]'
                    >
                      <div className='relative h-56 max-h-56 w-full overflow-hidden md:h-60 md:max-h-60 lg:h-64 lg:max-h-64'>
                        {study.imageSrc ? (
                          <Image
                            src={study.imageSrc}
                            alt={study.imageAlt}
                            fill
                            priority
                            className='object-cover'
                          />
                        ) : (
                          <div className='flex h-full w-full items-center justify-center bg-slate-100 text-xl font-bold text-slate-500'>
                            No Image
                          </div>
                        )}
                        <div className='absolute inset-x-0 bottom-0 flex h-20 items-end bg-gradient-to-t from-black/70 to-transparent'>
                          <div className='p-4 text-left text-white'>
                            <div className='text-sm font-bold'>
                              {study.company}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='min-h-[13.5rem] px-6 py-6 text-left'>
                        <p className='text-[1rem] leading-[1.7] font-bold text-slate-800'>
                          {study.comment}
                        </p>
                        <p className='mt-2 text-sm leading-7 font-normal text-slate-600'>
                          {study.industry}
                        </p>
                        <p className='text-sm leading-7 font-normal text-slate-600'>
                          {study.companySize}
                        </p>
                      </div>
                    </CardLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className='mt-2 flex flex-col items-center gap-6'>
          <div className='flex items-center justify-center gap-5'>
            <button
              type='button'
              onClick={showPrevious}
              className='border-lp-border text-lp-text group inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)] transition-[transform,border-color,color,box-shadow] duration-500 [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] hover:-translate-x-0.5 hover:border-[var(--lp-primary-border)] hover:text-[var(--lp-primary)] hover:shadow-[0_14px_30px_rgba(85,189,207,0.18)]'
              aria-label='前の事例'
            >
              <ChevronLeft
                className='h-5 w-5 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-x-0.5'
                strokeWidth={2.4}
              />
            </button>
            <div
              className='relative flex h-3 items-center gap-3'
              style={
                {
                  '--case-dot-size': '0.75rem',
                  '--case-dot-gap': '0.75rem',
                  '--case-dot-step':
                    'calc(var(--case-dot-size) + var(--case-dot-gap))',
                  filter: 'url(#case-study-goo)',
                } as CSSProperties
              }
            >
              <span
                aria-hidden='true'
                className='pointer-events-none absolute top-1/2 left-0 z-20 h-3 w-10 -translate-y-1/2 rounded-full bg-[var(--lp-primary)] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.45,1.4,0.55,1)] will-change-transform'
                style={{
                  transform: `translate3d(calc(var(--case-dot-step) * ${displayActiveIndex} - (2.5rem - var(--case-dot-size)) / 2), -50%, 0)`,
                }}
              />
              {CASE_STUDIES.map((study, dotIndex) => (
                <button
                  key={study.company}
                  type='button'
                  onClick={() => {
                    if (dotIndex === activeIndex) return;

                    if (dotIndex === normalizeStudyIndex(activeIndex + 1)) {
                      moveSlide(1);
                    } else {
                      moveSlide(-1);
                    }
                  }}
                  className="relative z-10 h-3 w-3 rounded-full bg-slate-300 transition-colors duration-500 before:absolute before:top-1/2 before:left-1/2 before:h-11 before:w-6 before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
                  aria-label={`${study.company} を表示`}
                />
              ))}
            </div>
            <button
              type='button'
              onClick={showNext}
              className='border-lp-border text-lp-text group inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)] transition-[transform,border-color,color,box-shadow] duration-500 [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] hover:translate-x-0.5 hover:border-[var(--lp-primary-border)] hover:text-[var(--lp-primary)] hover:shadow-[0_14px_30px_rgba(85,189,207,0.18)]'
              aria-label='次の事例'
            >
              <ChevronRight
                className='h-5 w-5 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-0.5'
                strokeWidth={2.4}
              />
            </button>
          </div>

          {/* 「すべての導入事例を見る」ボタンは現行のものを温存（変更しない） */}
          <Link
            href="/case"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3.5 sm:py-3 border-2 border-[#37B7C4] text-[#37B7C4] rounded-full font-bold hover:bg-[#37B7C4] hover:text-white transition-all duration-300"
          >
            すべての導入事例を見る
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
