'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import { ArrowRight } from 'lucide-react';

import { RippleLink } from './CtaRipple';

const PAGE_IMAGES = [
  {
    src: '/lp-v2/page_1.png',
    alt: 'ARCHAIVE ページイメージ 1',
    slotClassName: 'col-start-1 row-start-1',
  },
  {
    src: '/lp-v2/page_2.png',
    alt: 'ARCHAIVE ページイメージ 2',
    slotClassName: 'col-start-2 row-start-1 translate-y-14',
  },
  {
    src: '/lp-v2/page_3.png',
    alt: 'ARCHAIVE ページイメージ 3',
    slotClassName: 'col-start-1 row-start-2',
  },
  {
    src: '/lp-v2/page_4.png',
    alt: 'ARCHAIVE ページイメージ 4',
    slotClassName: 'col-start-2 row-start-2 translate-y-14',
  },
  {
    src: '/lp-v2/page_5.png',
    alt: 'ARCHAIVE ページイメージ 5',
    slotClassName: 'col-start-1 row-start-3',
  },
  {
    src: '/lp-v2/page_6.png',
    alt: 'ARCHAIVE ページイメージ 6',
    slotClassName: 'col-start-2 row-start-3 translate-y-14',
  },
] as const;

// 背景にボケて広がるゴーストカード（メイン6枚の外側にも画面が続いている印象を与える）
const GHOST_PAGE_IMAGES = [
  '/lp-v2/page_2.png',
  '/lp-v2/page_4.png',
  '/lp-v2/page_6.png',
  '/lp-v2/page_3.png',
  '/lp-v2/page_1.png',
  '/lp-v2/page_5.png',
  '/lp-v2/page_5.png',
  '/lp-v2/page_3.png',
  '/lp-v2/page_1.png',
  '/lp-v2/page_6.png',
  '/lp-v2/page_4.png',
  '/lp-v2/page_2.png',
  '/lp-v2/page_1.png',
  '/lp-v2/page_5.png',
  '/lp-v2/page_3.png',
  '/lp-v2/page_4.png',
  '/lp-v2/page_2.png',
  '/lp-v2/page_6.png',
] as const;

export function HeroSection() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <section
      data-lp-hero
      className='relative overflow-hidden bg-[linear-gradient(180deg,color-mix(in_srgb,var(--lp-primary)_50%,white)_0%,color-mix(in_srgb,var(--lp-primary)_74%,white)_52%,color-mix(in_srgb,var(--lp-primary)_80%,white)_100%)]'
    >
      <div className='pointer-events-none absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-[linear-gradient(115deg,color-mix(in_srgb,var(--lp-primary-deep)_18%,transparent)_0%,transparent_34%,rgba(255,255,255,0.22)_58%,transparent_82%)]' />
        <div className='absolute inset-x-0 top-0 h-[58%] bg-[radial-gradient(ellipse_at_28%_12%,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0.16)_32%,transparent_68%)]' />
        <div className='absolute right-[-12%] bottom-[30%] h-[22rem] w-[44rem] rotate-[-8deg] rounded-full bg-[color-mix(in_srgb,var(--lp-primary-deep)_16%,transparent)] blur-3xl' />
        <div className='absolute top-[-10rem] left-[-16rem] h-[13rem] w-[34rem] rotate-[5deg] rounded-[4.2rem] bg-white/26 blur-[0.5px] sm:top-[-11rem] sm:left-[-19rem] sm:h-[15rem] sm:w-[42rem] lg:top-[-12.5rem] lg:left-[-22rem] lg:h-[16.5rem] lg:w-[46rem] lg:rounded-[5rem]' />

        <div className='absolute inset-x-[-12%] top-[18%] h-[32rem] overflow-hidden opacity-45 [mask-image:linear-gradient(180deg,transparent_0%,black_18%,black_72%,transparent_100%)] sm:top-[14%] sm:h-[38rem] lg:hidden'>
          <div className='absolute top-[8.5rem] left-[-4%] w-[15rem] -rotate-12 overflow-hidden rounded-[1.15rem] border-[6px] border-white/75 bg-white shadow-[0_24px_54px_rgba(0,26,71,0.18)] blur-[1.5px] sm:left-[8%] sm:w-[19rem]'>
            <div className='relative aspect-[16/10]'>
              <Image
                src='/lp-v2/page_1.png'
                alt=''
                fill
                sizes='280px'
                className='object-cover object-top'
              />
            </div>
          </div>
          <div className='absolute top-24 right-[-6%] w-[16rem] rotate-10 overflow-hidden rounded-[1.15rem] border-[6px] border-white/75 bg-white shadow-[0_24px_54px_rgba(0,26,71,0.18)] blur-[1.5px] sm:right-[8%] sm:w-[20rem]'>
            <div className='relative aspect-[16/10]'>
              <Image
                src='/lp-v2/page_2.png'
                alt=''
                fill
                sizes='300px'
                className='object-cover object-top'
              />
            </div>
          </div>
          <div className='absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--lp-primary)_38%,white)_0%,color-mix(in_srgb,var(--lp-primary)_62%,white)_58%,color-mix(in_srgb,var(--lp-primary-strong)_62%,transparent)_100%)] opacity-82' />
        </div>

        <div className='absolute top-[40%] right-[60%] h-10 w-10 rounded-full border-[8px] border-white/20' />
        <div className='absolute bottom-[40%] left-[50%] h-6 w-6 rounded-full border-[5px] border-white/24' />
        <div className='absolute top-[10%] left-[48%] h-6 w-6 rounded-full border-[5px] border-white/24' />
        <div className='absolute top-[22%] right-[85%] h-6 w-6 rounded-full border-[6px] border-white/20' />
        <div className='absolute bottom-[25%] left-[10%] h-6 w-6 rounded-full border-[5px] border-white/24' />
      </div>

      <div className='bg-lp-primary-strong pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[9rem] sm:h-[11rem] lg:hidden' />
      <svg
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-[11rem] w-full lg:block'
        viewBox='0 0 1440 240'
        preserveAspectRatio='none'
      >
        <path
          d='M0 240V169H670C730 169 746 20 864 20H1440V240H0Z'
          fill='var(--lp-primary-strong)'
        />
      </svg>

      <div className='relative mx-auto flex min-h-[100svh] max-w-[1520px] flex-col px-5 pt-18 pb-31 sm:px-10 sm:pt-24 sm:pb-38 lg:h-[100svh] lg:min-h-0 lg:px-14 lg:pt-20 lg:pb-28 xl:px-18'>
        <div className='grid items-start gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-center'>
          <div className='relative z-10 pt-4 text-white lg:pt-0'>
            <p
              className={`hero-reveal hero-reveal-delay-1 text-lp-text max-w-[18rem] text-[0.78rem] leading-6 font-black tracking-[0.02em] drop-shadow-[0_1px_0_rgba(255,255,255,0.34)] sm:max-w-none sm:text-base ${
                isReady ? 'hero-reveal-visible' : ''
              }`}
            >
              ● 中小製造業のための、図面管理AI／情報基盤
            </p>
            <h1 className='mt-8'>
              <Image
                src='/svg/logo-text.svg'
                alt='ARCHAIVE'
                width={669}
                height={138}
                priority
                className='h-auto w-full max-w-[34rem] lg:w-[38rem] lg:max-w-none'
              />
            </h1>

            <h2 className='text-lp-text mt-8 text-[clamp(1.55rem,7.2vw,3.6rem)] leading-[1.1] font-black tracking-[-0.05em] drop-shadow-[0_2px_0_rgba(255,255,255,0.28)] sm:mt-9 sm:text-[clamp(2.2rem,4.2vw,3.6rem)] sm:leading-[1.06]'>
              製造業のノウハウが
              <br />
              <span className='whitespace-nowrap'>
                属人化しない会社へ。
              </span>
            </h2>

            <p className='text-lp-primary-deep mt-5 max-w-[42rem] text-[0.92rem] leading-[1.8] font-extrabold drop-shadow-[0_1px_0_rgba(255,255,255,0.22)] sm:mt-6 sm:text-[clamp(0.95rem,1.35vw,1.12rem)]'>
              図面と、図面に紐づくものづくりの情報を、
              <br />
              製品単位で蓄積する次世代のAIデータ基盤です。
            </p>

            <p className='text-lp-primary-deep/90 mt-4 max-w-[42rem] text-[0.82rem] leading-[1.85] font-medium drop-shadow-[0_1px_0_rgba(255,255,255,0.18)] sm:mt-5 sm:text-[clamp(0.85rem,1.05vw,0.95rem)]'>
              多くの製造現場では図面はファイルサーバーに、仕様書は紙の棚に、設計判断の経緯は担当者の記憶に、それぞれ別の場所に保管されています。ARCHAIVEは、これらを製品単位で蓄積し、AIで検索・参照できる状態に変えます。
            </p>
          </div>

          <div className='relative z-0 hidden min-h-[calc(100svh-4rem)] lg:block'>
            {/* 背景: ボケて広がるゴーストカード群（"他にもまだ画面がある" 印象付け） */}
            <div
              aria-hidden='true'
              className='pointer-events-none absolute top-[-32%] left-[-22%] z-0 w-[68rem] rotate-[15deg] opacity-40 blur-lg xl:left-[-24%] xl:w-[72rem]'
            >
              <div className='grid grid-cols-3 gap-x-7 gap-y-9'>
                {GHOST_PAGE_IMAGES.map((src, i) => (
                  <div
                    key={`ghost-${i}`}
                    className={i % 3 === 1 ? 'translate-y-10' : ''}
                  >
                    <div className='overflow-hidden rounded-[1.8rem] border-[8px] border-white bg-white shadow-[0_18px_36px_rgba(15,23,42,0.14)]'>
                      <div className='relative aspect-[16/10] w-full overflow-hidden rounded-[1.1rem]'>
                        <Image
                          src={src}
                          alt=''
                          fill
                          sizes='220px'
                          className='object-cover object-top'
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* メイン: 6枚のページカード */}
            <div className='absolute top-[-4%] left-[14%] z-10 w-[42rem] rotate-[15deg] xl:left-[12%] xl:w-[45rem]'>
              <div className='grid grid-cols-2 gap-x-8 gap-y-10 xl:gap-x-9 xl:gap-y-11'>
                {PAGE_IMAGES.map((page) => (
                  <div key={page.src} className={page.slotClassName}>
                    <div className='overflow-hidden rounded-[1.8rem] border-[10px] border-white bg-white shadow-[0_28px_50px_rgba(15,23,42,0.18)]'>
                      <div className='relative aspect-[16/10] w-full overflow-hidden rounded-[1.25rem]'>
                        <Image
                          src={page.src}
                          alt={page.alt}
                          fill
                          sizes='(min-width: 1280px) 320px, 280px'
                          className='object-cover object-top'
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='relative z-20 mt-32 flex justify-center sm:mt-40 lg:absolute lg:right-12 lg:bottom-8 lg:left-auto lg:mt-0 lg:block lg:w-auto'>
          <RippleLink
            href='#contact'
            className='group text-lp-text relative mx-auto inline-flex min-h-[4.4rem] w-full max-w-[22.5rem] items-center overflow-hidden rounded-[0.5rem] bg-white px-3 py-2.5 shadow-[0_16px_34px_rgba(15,23,42,0.16)] transition-transform duration-300 hover:-translate-y-0.5 sm:min-h-[5.4rem] sm:w-[72%] sm:max-w-[30rem] sm:px-5 lg:min-h-[5.6rem] lg:w-[32rem] lg:max-w-[32rem] lg:px-6 xl:min-h-[5.9rem]'
            bgClassName='bg-[linear-gradient(90deg,var(--lp-primary-strong)_0%,var(--lp-primary)_100%)]'
            contentClassName='w-full justify-between gap-2 text-inherit group-hover:text-white group-focus-visible:text-white sm:gap-6'
          >
            <span className='bg-lp-primary-soft/40 relative h-[3.3rem] w-[4.35rem] shrink-0 overflow-hidden rounded-[0.35rem] sm:h-[4.35rem] sm:w-[7.5rem] lg:h-[4.25rem] lg:w-[7rem] xl:h-[4.6rem] xl:w-[7.7rem]'>
              <Image
                src='/lp-v2/drawing-screen.png'
                alt=''
                fill
                sizes='(min-width: 1024px) 140px, 110px'
                className='object-cover object-left-top'
              />
            </span>
            <span className='min-w-0 flex-1 text-center text-[clamp(0.7rem,3.35vw,0.88rem)] leading-[1.34] font-black tracking-[0.01em] sm:text-[clamp(0.92rem,2.08vw,1.2rem)] lg:text-[clamp(0.96rem,1.25vw,1.18rem)]'>
              図面管理の、その先がわかる
              <br />
              資料を無料ダウンロード
            </span>
            <ArrowRight
              className='h-4.5 w-4.5 shrink-0 text-inherit sm:h-7 sm:w-7 lg:h-8 lg:w-8'
              strokeWidth={2.4}
            />
          </RippleLink>
        </div>

      </div>

      <style jsx>{`
        .hero-reveal {
          opacity: 0;
          transform: translateY(14px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
          will-change: opacity, transform;
        }

        .hero-reveal-delay-1 {
          transition-delay: 0.08s;
        }

        .hero-reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
