'use client';

import { ArrowRight } from 'lucide-react';

import { RippleLink } from './CtaRipple';
import { HeroAnim } from './HeroAnim';

export function HeroSection() {
  return (
    <section data-lp-hero className='relative bg-white'>
      {/* ファーストビュー: アニメーションを大きく */}
      <div className='relative flex min-h-[calc(100svh-6rem)] items-center justify-center overflow-hidden px-6 pt-8 pb-12 sm:px-10 lg:min-h-[calc(100svh-6rem)] lg:px-14'>
        <div
          className='mt-12 w-full sm:mt-16 lg:mt-20'
          style={{ maxWidth: 'min(68rem, calc((100svh - 14rem) * 1.08))' }}
        >
          <HeroAnim />
        </div>
      </div>

      {/* セカンドビュー(スクロール後): 左 = H2 / 右 = テキスト + CTA */}
      <div className='mx-auto max-w-[1320px] px-6 pt-12 pb-24 sm:px-10 sm:pt-16 sm:pb-28 lg:px-14 lg:pt-24 lg:pb-32'>
        <div className='grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14'>
          <div className='relative'>
            <h2 className='text-lp-text text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.2] font-bold'>
              製造業のノウハウが
              <br />
              <span className='whitespace-nowrap'>属人化しない会社へ。</span>
            </h2>
          </div>

          <div className='relative z-10'>
            <p className='text-lp-text text-[1rem] leading-[1.95] font-normal sm:text-[1.05rem]'>
              多くの製造現場では図面はファイルサーバーに、仕様書は紙の棚に、判断の経緯は担当者の記憶に、それぞれ別の場所に保管されています。
              <span style={{ color: '#37B7C4' }}>ARCHAIVE</span>
              はこれらを製品単位で集約し、AIで検索・参照できる状態に変換します。
            </p>

            <div className='mt-8'>
              <RippleLink
                href='#contact'
                className='group inline-flex min-h-14 items-center gap-3 rounded-xl bg-[linear-gradient(135deg,#1E3A6F_0%,#0A1B40_100%)] px-7 text-base font-bold text-white shadow-[0_14px_30px_rgba(10,27,64,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(10,27,64,0.36)]'
                bgClassName='bg-[linear-gradient(135deg,#274C8C_0%,#0F2453_100%)]'
                contentClassName='text-inherit'
              >
                資料を無料ダウンロード
                <ArrowRight
                  className='h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5'
                  strokeWidth={2.4}
                />
              </RippleLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
