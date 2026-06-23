'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  ArrowRight,
  Check,
  DatabaseZap,
  PlugZap,
  Sparkles,
} from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: '最短1週間で「使い始める」',
    body: '今ある図面をアップロードするだけ。AIが読み取って、情報を整理します。データの事前整備は不要です。',
    productName: 'ARCHAIVE-CORE',
    duration: '契約後〜1ヶ月',
    icon: DatabaseZap,
  },
  {
    number: '02',
    title: '既存のシステムと「つなぐ」',
    body: 'ERP・CAD・ファイルサーバーとAPI連携。データを引っ越すのではなく、つなげる。業務フローを変えずに導入できます。',
    productName: 'ARCHAIVE-CRM',
    duration: '連携拡張（2〜4週間）',
    icon: PlugZap,
  },
  {
    number: '03',
    title: '自社専用のAIを「育てる」',
    body: '蓄積されたデータをもとに、AI開発チームが自社専用のAIを構築します。見積自動化、外観検査、需要予測まで、業務課題に合わせて開発できます。',
    productName: 'ARCHAIVE+',
    duration: 'カスタム開発（2〜3ヶ月）',
    icon: Sparkles,
  },
] as const;

const CTA_IMAGES = [
  {
    src: '/lp-v2/page_1.png',
    alt: 'ARCHAIVE 資料プレビュー 1',
    className: 'col-start-1 row-start-1',
  },
  {
    src: '/lp-v2/page_2.png',
    alt: 'ARCHAIVE 資料プレビュー 2',
    className: 'col-start-2 row-start-1 translate-y-8',
  },
  {
    src: '/lp-v2/page_3.png',
    alt: 'ARCHAIVE 資料プレビュー 3',
    className: 'col-start-1 row-start-2',
  },
  {
    src: '/lp-v2/page_4.png',
    alt: 'ARCHAIVE 資料プレビュー 4',
    className: 'col-start-2 row-start-2 translate-y-8',
  },
  {
    src: '/lp-v2/page_5.png',
    alt: 'ARCHAIVE 資料プレビュー 5',
    className: 'col-start-1 row-start-3',
  },
  {
    src: '/lp-v2/page_6.png',
    alt: 'ARCHAIVE 資料プレビュー 6',
    className: 'col-start-2 row-start-3 translate-y-8',
  },
] as const;

export function GettingStartedSection() {
  return (
    <section
      id='steps'
      className='relative scroll-mt-24 overflow-hidden bg-[#F4FAFD] px-6 py-16 sm:px-10 lg:px-16 lg:py-20'
    >
      <div className='relative z-10 mx-auto max-w-[1320px]'>
        <div className='text-center'>
          <p className='text-lp-primary text-sm font-bold sm:text-[0.95rem]'>
            GETTING STARTED
          </p>
          <h2 className='text-lp-text mx-auto mt-5 max-w-none text-[clamp(1.625rem,2.6vw,2rem)] leading-[1.35] font-bold'>
            使い始めて自社のAIを育てるまでの3ステップ
          </h2>
          <div className='border-lp-text/52 mx-auto mt-6 h-px w-full max-w-[20rem] border-t-2 border-solid sm:max-w-[23rem]' />
          <p className='text-lp-text-subtle mx-auto mt-4 max-w-[44rem] text-base leading-7 font-normal sm:text-lg'>
            ARCHAIVEは最短1週間で使い始められます。
            <br />
            自社専用AIの開発までを、3段階で段階的に進められます。
          </p>
        </div>

        <div className='relative mt-12 hidden lg:block'>
          <div className='pointer-events-none absolute top-6 right-[16.66%] left-[16.66%] h-1 rounded-full bg-[linear-gradient(90deg,rgba(85,189,207,0.42),rgba(85,189,207,0.18))]' />
          <div className='grid gap-6 lg:grid-cols-3 xl:gap-8'>
            {STEPS.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className='relative flex flex-col rounded-[1.65rem] border border-white/80 bg-white px-6 pt-11 pb-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]'
                >
                  <div className='absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2'>
                    <div className='bg-lp-primary text-lp-text flex h-14 w-14 items-center justify-center rounded-full border-[5px] border-white shadow-[0_12px_28px_rgba(85,189,207,0.22)]'>
                      <Check className='h-7 w-7 stroke-[2.5]' />
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                    <span className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--lp-primary)_14%,white)] text-[var(--lp-primary)]'>
                      <Icon className='h-6 w-6' strokeWidth={2.2} />
                    </span>
                    <span className='text-lp-text-subtle/55 text-[2rem] leading-none font-bold'>
                      {step.number}
                    </span>
                  </div>

                  <h3 className='text-lp-text mt-5 text-[1.22rem] leading-tight font-bold'>
                    {step.title}
                  </h3>
                  <div className='mt-3 h-0.5 w-20 rounded-full bg-[var(--lp-primary)]' />

                  <p className='text-lp-text-muted mt-4 text-[0.92rem] leading-7 font-normal'>
                    {step.body}
                  </p>

                  <div className='border-lp-text/55 mt-auto border-t-2 border-solid pt-4'>
                    <p className='text-center text-[1.2rem] leading-tight font-bold'>
                      <span className='text-[var(--lp-primary)]'>{step.productName}</span>
                      <span className='text-lp-text'> / {step.duration}</span>
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className='mt-14 space-y-6 lg:hidden'>
          {STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className='relative pl-16'>
                {index !== STEPS.length - 1 ? (
                  <div className='pointer-events-none absolute top-16 left-7 h-[calc(100%+1.5rem)] w-1 rounded-full bg-[linear-gradient(180deg,rgba(85,189,207,0.42),rgba(85,189,207,0.18))]' />
                ) : null}

                <div className='bg-lp-primary text-lp-text absolute top-4 left-0 z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white shadow-[0_12px_28px_rgba(85,189,207,0.18)]'>
                  <Check className='h-7 w-7 stroke-[2.5]' />
                </div>

                <article className='rounded-[1.6rem] border border-white/80 bg-white px-6 pt-6 pb-7 shadow-[0_16px_34px_rgba(15,23,42,0.06)]'>
                  <div className='flex items-center gap-4'>
                    <span className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--lp-primary)_14%,white)] text-[var(--lp-primary)]'>
                      <Icon className='h-6 w-6' strokeWidth={2.2} />
                    </span>
                    <span className='text-lp-text-subtle/55 text-[2.2rem] leading-none font-bold'>
                      {step.number}
                    </span>
                  </div>

                  <h3 className='text-lp-text mt-5 text-[1.25rem] leading-tight font-bold'>
                    {step.title}
                  </h3>
                  <div className='mt-3 h-0.5 w-20 rounded-full bg-[var(--lp-primary)]' />

                  <p className='text-lp-text-muted mt-5 text-[0.98rem] leading-8 font-normal'>
                    {step.body}
                  </p>

                  <div className='border-lp-text/55 mt-6 border-t-2 border-solid pt-5'>
                    <p className='text-center text-[1.25rem] leading-tight font-bold'>
                      <span className='text-[var(--lp-primary)]'>{step.productName}</span>
                      <span className='text-lp-text'> / {step.duration}</span>
                    </p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        <Link
          href='#contact'
          className='group mx-auto mt-20 lg:mt-28 block max-w-[1040px] overflow-hidden border border-white/12 bg-[linear-gradient(90deg,var(--lp-text)_0%,color-mix(in_srgb,var(--lp-primary)_88%,var(--lp-primary-deep))_50%,var(--lp-text)_100%)] px-4 py-5 shadow-[0_14px_30px_rgba(0,26,71,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(0,26,71,0.22)] sm:px-6 lg:px-10 lg:py-5'
        >
          <div className='grid items-center gap-6 lg:grid-cols-[minmax(0,0.98fr)_minmax(19rem,1.02fr)] lg:gap-7'>
            <div className='relative mx-auto h-[8.5rem] w-full max-w-[22rem] overflow-hidden lg:hidden'>
              <div className='absolute inset-x-0 top-1 mx-auto flex w-[min(19rem,100%)] justify-center'>
                {CTA_IMAGES.slice(0, 3).map((image, imageIndex) => (
                  <div
                    key={image.src}
                    className={`absolute w-[min(8.6rem,44vw)] overflow-hidden border-2 border-white bg-white shadow-[0_10px_20px_rgba(0,26,71,0.16)] ${
                      imageIndex === 0
                        ? 'top-5 left-1 -rotate-6'
                        : imageIndex === 1
                          ? 'top-0 left-1/2 z-10 -translate-x-1/2'
                          : 'top-5 right-1 rotate-6'
                    }`}
                  >
                    <div className='relative aspect-[16/10]'>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes='144px'
                        className='object-cover object-top'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='text-center transition-transform duration-300 group-hover:translate-x-1 lg:translate-x-6 lg:text-left lg:group-hover:translate-x-8'>
              <p className='text-[clamp(1.1rem,1.95vw,1.75rem)] leading-[1.35] font-bold text-white'>
                導入の流れを
                <br />
                資料で確認。
              </p>
              <p className='mx-auto mt-3 max-w-[30rem] text-[0.8rem] leading-6 font-normal text-white/86 transition-colors duration-300 group-hover:text-white lg:mx-0'>
                機能・プラン・導入事例までまとめて確認できます。
              </p>
              <span className='text-lp-text mt-4 inline-flex min-h-11 w-full max-w-[17rem] items-center justify-center gap-3 bg-white px-5 text-[0.82rem] font-bold shadow-[0_10px_20px_rgba(0,26,71,0.16)] transition-all duration-300 group-hover:scale-[1.03] group-hover:bg-[var(--lp-surface-soft)] group-hover:shadow-[0_14px_28px_rgba(0,26,71,0.22)] sm:w-auto sm:min-w-[15.5rem]'>
                導入の流れを資料で確認
                <ArrowRight
                  className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1'
                  strokeWidth={2.5}
                />
              </span>
            </div>

            <div className='relative hidden min-h-[13.2rem] lg:block'>
              <div className='absolute top-[-2.6rem] left-1/2 w-[27rem] -translate-x-1/2'>
                <div className='grid grid-cols-2 gap-x-4 gap-y-4'>
                  {CTA_IMAGES.map((image) => (
                    <div key={image.src} className={image.className}>
                      <div className='overflow-hidden border-2 border-white bg-white shadow-[0_10px_20px_rgba(0,26,71,0.12)]'>
                        <div className='relative aspect-[16/10]'>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes='240px'
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
        </Link>
      </div>
    </section>
  );
}
