'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const CASE_STUDIES = [
  {
    company: '株式会社エイ・エム・シィ',
    person: '中西 弘高 様',
    comment:
      '新人が2日目に、10年前の図面を引き当てた。しかも過去単価まで一緒に出てきた。',
    imageSrc: '/lp-v2/people_2.png',
    imageAlt: '株式会社エイ・エム・シィ 中西 弘高 様のインタビュー写真',
    mobileObjectPosition: 'center center',
  },
  {
    company: 'スエナミ工業株式会社',
    person: '柴山 誓一 様',
    comment:
      '見積の回答が、翌日から当日に変わった。過去の類似案件がAIで出てくるから。',
    imageSrc: '/lp-v2/people_3.png',
    imageAlt: 'スエナミ工業株式会社 柴山 誓一 様のインタビュー写真',
    mobileObjectPosition: 'center center',
  },
  {
    company: '○○製作所',
    person: '設計部長 様',
    comment:
      '退職者が出ても慌てなくなった。判断の理由が全部、製品ページに残っているから。',
    imageSrc: '/lp-v2/people_1.png',
    imageAlt: '○○製作所 設計部長 様のインタビュー写真',
    mobileObjectPosition: 'center center',
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
    CASE_STUDIES[normalizeStudyIndex(activeIndex - 1)],
    activeStudy,
    CASE_STUDIES[normalizeStudyIndex(activeIndex + 1)],
  ];

  const desktopTranslate =
    slideDirection === 1
      ? 'translateX(calc(var(--case-study-step) * -1))'
      : slideDirection === -1
        ? 'translateX(var(--case-study-step))'
        : 'translateX(0px)';

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

  const handleDesktopTransitionEnd = () => {
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
    <section
      id='cases'
      className='scroll-mt-16 bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-20'
    >
      <div className='relative mx-auto w-full max-w-7xl overflow-hidden'>
        <div className='mx-auto max-w-[920px] text-center'>
          <p className='text-sm font-semibold tracking-[0.18em] text-[var(--lp-primary)]'>
            Case Study
          </p>
          <h2 className='text-lp-text mt-5 text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1.05] font-black tracking-[-0.06em]'>
            導入企業
          </h2>
          <div className='border-lp-text/55 mx-auto mt-6 h-px w-full max-w-[18rem] border-t-2 border-solid sm:max-w-[20rem]' />
          <p className='text-lp-text-subtle mx-auto mt-4 max-w-[44rem] text-base leading-7 font-semibold sm:text-lg'>
            ARCHAIVEを導入した企業の現場で発生した変化を、担当者の声とともにご紹介します。
          </p>
        </div>

        <div className='relative mt-14 block px-0 sm:mt-16 sm:hidden'>
          <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-[14%] bg-gradient-to-r from-white to-transparent' />
          <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-[14%] bg-gradient-to-l from-white to-transparent' />
          <div className='mx-auto w-[90%] overflow-hidden rounded-[1.5rem] border border-[color-mix(in_srgb,var(--lp-primary)_18%,white)] bg-white text-center shadow-[0_16px_50px_rgba(15,23,42,0.08)]'>
            <div className='relative block h-52 w-full overflow-hidden'>
              <Image
                key={activeStudy.imageSrc}
                src={activeStudy.imageSrc}
                alt={activeStudy.imageAlt}
                fill
                priority
                className='object-cover'
                style={{ objectPosition: activeStudy.mobileObjectPosition }}
              />
              <div className='absolute inset-x-0 bottom-0 flex h-16 items-end bg-gradient-to-t from-black/70 to-transparent'>
                <div className='p-3 text-left text-white'>
                  <div className='text-sm font-bold'>{activeStudy.company}</div>
                  <div className='text-xs'>{activeStudy.person}</div>
                </div>
              </div>
            </div>
            <div className='flex min-h-[6.4rem] items-center px-5 py-5'>
              <p className='line-clamp-2 text-center text-base leading-[1.7] font-bold tracking-[-0.02em] text-slate-700'>
                {activeStudy.comment}
              </p>
            </div>
          </div>
        </div>

        <div className='relative mt-10 hidden overflow-hidden sm:mt-12 sm:block'>
          <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-[10%] bg-gradient-to-r from-white via-white/85 to-transparent' />
          <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-[10%] bg-gradient-to-l from-white via-white/85 to-transparent' />
          <div
            onTransitionEnd={handleDesktopTransitionEnd}
            className={`mx-auto flex w-max gap-6 [--case-study-step:calc(22rem+1.5rem)] md:gap-8 md:[--case-study-step:532px] ${
              isTransitionEnabled
                ? 'transition-transform duration-500 ease-in-out'
                : ''
            }`}
            style={{ transform: desktopTranslate }}
          >
            {desktopStudies.map((study, itemIndex) => (
              <div
                key={`${study.company}-${itemIndex}`}
                className='w-[22rem] flex-shrink-0 text-center md:w-[500px]'
              >
                <div className='overflow-hidden rounded-[1.75rem] border border-[color-mix(in_srgb,var(--lp-primary)_18%,white)] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]'>
                  <div className='relative h-60 max-h-60 w-full overflow-hidden md:h-64 md:max-h-64'>
                    <Image
                      src={study.imageSrc}
                      alt={study.imageAlt}
                      fill
                      priority
                      className='object-cover'
                    />
                    <div className='absolute inset-x-0 bottom-0 flex h-20 items-end bg-gradient-to-t from-black/70 to-transparent'>
                      <div className='p-4 text-left text-white'>
                        <div className='text-sm font-bold'>{study.company}</div>
                        <div className='text-xs'>{study.person}</div>
                      </div>
                    </div>
                  </div>
                  <div className='flex min-h-[5.7rem] items-center px-6 py-6'>
                    <p className='line-clamp-2 text-[1.15rem] leading-[1.6] font-black tracking-[-0.02em] text-slate-800'>
                      {study.comment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-8 flex flex-col items-center gap-5'>
          <div className='flex items-center justify-center gap-4'>
            <button
              type='button'
              onClick={showPrevious}
              className='border-lp-border text-lp-text inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)] transition hover:border-[var(--lp-primary-border)] hover:text-[var(--lp-primary)]'
              aria-label='前の事例'
            >
              <ChevronLeft className='h-4 w-4' strokeWidth={2.4} />
            </button>
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
                className={`h-2.5 rounded-full transition ${
                  dotIndex === activeIndex
                    ? 'w-8 bg-[var(--lp-primary)]'
                    : 'w-2.5 bg-slate-300'
                }`}
                aria-label={`${study.company} を表示`}
              />
            ))}
            <button
              type='button'
              onClick={showNext}
              className='border-lp-border text-lp-text inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)] transition hover:border-[var(--lp-primary-border)] hover:text-[var(--lp-primary)]'
              aria-label='次の事例'
            >
              <ChevronRight className='h-4 w-4' strokeWidth={2.4} />
            </button>
          </div>

          <button
            type='button'
            className='inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-black text-slate-700 shadow-[0_8px_20px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:bg-slate-50'
          >
            導入事例を見る
            <ArrowUpRight className='h-4 w-4' />
          </button>
        </div>
      </div>
    </section>
  );
}
