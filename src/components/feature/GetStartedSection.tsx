'use client';

import Image from 'next/image';

import { ArrowRight, MessageSquareText, Play } from 'lucide-react';

import { RippleLink } from './CtaRipple';

const FEATURED_CARDS = [
  {
    key: 'download',
    href: '/download',
    badge: '詳しく知りたい!',
    eyebrow: 'DOCUMENT',
    title: '資料を無料ダウンロード',
    body: '機能・料金・導入事例まで30ページ。社内共有・稟議用にそのまま使えます。',
    buttonLabel: '資料ダウンロード',
    icon: ArrowRight,
    preview: 'document',
  },
  {
    key: 'demo',
    href: '/apply',
    badge: 'まずは試してみたい!',
    eyebrow: 'DEMO',
    title: 'デモを\n予約する',
    body: '実際の画面で、自社の課題に合わせたデモをご体験ください。',
    buttonLabel: 'デモを予約',
    icon: Play,
    preview: 'demo',
  },
] as const satisfies ReadonlyArray<{
  key: string;
  href: string;
  badge: string;
  eyebrow: string;
  title: string;
  body: string;
  buttonLabel: string;
  icon: typeof ArrowRight;
  preview: 'document' | 'demo';
}>;

function DocumentPreview() {
  return (
    <div className='border-lp-primary-border relative mx-auto w-full max-w-[16.5rem] rounded-[1.15rem] border bg-white/96 p-2.5 shadow-[0_12px_26px_rgba(15,23,42,0.08)]'>
      <div className='border-lp-border rounded-[0.95rem] border bg-[linear-gradient(180deg,var(--lp-surface)_0%,var(--lp-surface-soft)_100%)] p-2.5'>
        <div className='flex items-start justify-between gap-3'>
          <div>
            <p className='text-lp-text-subtle text-[0.48rem] font-bold uppercase'>
              Archaive by Star Up
            </p>
            <p className='text-lp-text mt-0.5 text-[0.66rem] font-bold'>
              ARCHAIVEご紹介資料
            </p>
          </div>
          <Image
            src='/svg/logo.svg'
            alt='ARCHAIVE'
            width={84}
            height={28}
            className='h-auto w-14'
          />
        </div>

        <div className='mt-2.5 grid grid-cols-[1.05fr_0.95fr] gap-2'>
          <div className='relative overflow-hidden rounded-[0.8rem] bg-[linear-gradient(180deg,var(--lp-primary)_0%,var(--lp-primary-strong)_100%)] px-2 py-2 text-white shadow-[0_8px_18px_rgba(62,169,186,0.2)]'>
            <Image
              src='/images/archaive_logo.svg'
              alt='ARCHAIVE'
              width={120}
              height={22}
              className='h-auto w-15 brightness-[2.4]'
            />
            <div className='mt-2.5 space-y-1'>
              <div className='h-1.5 rounded-full bg-white/80' />
              <div className='h-1.5 w-[82%] rounded-full bg-white/62' />
              <div className='h-1.5 w-[58%] rounded-full bg-white/42' />
            </div>
            <div className='mt-2.5 grid grid-cols-2 gap-1'>
              <div className='h-6 rounded-md bg-white/18' />
              <div className='h-6 rounded-md bg-white/14' />
              <div className='h-6 rounded-md bg-white/16' />
              <div className='h-6 rounded-md bg-white/12' />
            </div>
          </div>

          <div className='space-y-2 pt-0.5'>
            <div className='bg-lp-border h-1.5 rounded-full' />
            <div className='bg-lp-primary-surface h-1.5 w-[84%] rounded-full' />
            <div className='bg-lp-primary-surface h-1.5 w-[72%] rounded-full' />
            <div className='border-lp-border mt-2.5 rounded-[0.8rem] border bg-[var(--lp-surface-soft)] p-1.5'>
              <div className='grid grid-cols-2 gap-1'>
                <div className='bg-lp-primary-surface h-5 rounded-md' />
                <div className='bg-lp-surface-soft h-5 rounded-md' />
                <div className='bg-lp-primary-surface h-5 rounded-md' />
                <div className='bg-lp-surface-soft h-5 rounded-md' />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-2.5 flex items-end gap-1.5'>
          <div className='border-lp-border bg-lp-surface-soft h-7 w-6 rounded-t-[0.4rem] border shadow-[0_6px_14px_rgba(15,23,42,0.06)]' />
          <div className='border-lp-border h-9 w-8 rounded-t-[0.45rem] border bg-white shadow-[0_8px_16px_rgba(15,23,42,0.08)]' />
          <div className='h-5 flex-1 rounded-full bg-[linear-gradient(90deg,var(--lp-primary)_0%,var(--lp-primary-strong)_100%)] opacity-80' />
        </div>
      </div>
    </div>
  );
}

function DemoPreview() {
  return (
    <div className='relative mx-auto w-full max-w-[17rem]'>
      <div className='border-lp-text bg-lp-text relative mx-auto w-[88%] overflow-hidden rounded-t-[0.8rem] border-[3px] shadow-[0_20px_42px_rgba(15,23,42,0.22)]'>
        <div className='relative aspect-[16/10] bg-[var(--lp-surface-soft)]'>
          <Image
            src='/lp-v2/drawing-screen.png'
            alt='ARCHAIVEの画面プレビュー'
            fill
            sizes='320px'
            className='object-cover object-left'
          />
        </div>
      </div>
      <div className='mx-auto h-2.5 w-[94%] rounded-b-[1rem] bg-[linear-gradient(180deg,var(--lp-border)_0%,color-mix(in_srgb,var(--lp-border)_75%,var(--lp-text-subtle))_100%)] shadow-[0_10px_22px_rgba(15,23,42,0.12)]' />
      <div className='bg-lp-text-subtle/45 mx-auto h-1.5 w-[36%] rounded-b-full' />
    </div>
  );
}

export function GetStartedSection() {
  return (
    <section
      id='contact'
      className='relative overflow-hidden bg-[linear-gradient(90deg,color-mix(in_srgb,var(--lp-primary-deep)_88%,var(--lp-primary))_0%,color-mix(in_srgb,var(--lp-primary)_92%,white)_50%,color-mix(in_srgb,var(--lp-primary-deep)_88%,var(--lp-primary))_100%)] px-6 py-10 sm:px-10 sm:py-16 lg:px-16 lg:py-20'
    >
      <div className='relative z-10 mx-auto max-w-[1320px]'>
        <div className='text-center'>
          <p className='text-sm font-bold text-white/95 sm:text-[0.95rem]'>
            GET STARTED
          </p>
          <h2 className='mx-auto mt-5 text-[1.5rem] leading-[1.35] font-bold text-white sm:text-[clamp(1.625rem,2.6vw,2rem)]'>
            「図面管理のその先」を
            <br />
            見にきてください。
          </h2>
          <p className='mx-auto mt-5 max-w-[40rem] text-[1rem] leading-8 font-normal text-white/95 sm:text-[1.06rem]'>
            貴社の図面と書類で何が紐づくか。3分の資料か30分のデモで。
          </p>
        </div>

        <div className='mt-10 grid gap-5 xl:grid-cols-2 xl:gap-6'>
          {FEATURED_CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.key}
                className='relative rounded-[1.55rem] border border-white/76 bg-white p-2.5 shadow-[0_18px_38px_rgba(15,23,42,0.12)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(15,23,42,0.16)]'
              >
                <div className='bg-lp-text absolute top-0 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white px-4 py-1.5 text-xs font-bold whitespace-nowrap text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)]'>
                  {card.badge}
                </div>

                <div className='border-lp-border grid min-h-[20.5rem] rounded-[1.25rem] border bg-[linear-gradient(180deg,var(--lp-surface)_0%,var(--lp-surface-soft)_100%)] px-4 py-5 sm:px-5 sm:py-6 lg:grid-cols-[minmax(210px,0.86fr)_minmax(0,1fr)] lg:items-center lg:gap-5'>
                  <div className='flex items-center justify-center'>
                    {card.preview === 'document' ? (
                      <DocumentPreview />
                    ) : (
                      <DemoPreview />
                    )}
                  </div>

                  <div className='mt-5 flex flex-col justify-center lg:mt-0'>
                    <p className='text-lp-primary text-xs font-bold uppercase'>
                      {card.eyebrow}
                    </p>
                    <h3 className='text-lp-text mt-3 text-[clamp(1.25rem,2.1vw,1.75rem)] leading-[1.2] font-bold whitespace-pre-line'>
                      {card.title}
                    </h3>
                    <p className='text-lp-text-muted mt-3 text-[0.9rem] leading-7 font-normal'>
                      {card.body}
                    </p>

                    <RippleLink
                      href={card.href}
                      className='border-lp-border text-lp-text mt-5 inline-flex min-h-12 items-center justify-center self-start rounded-full border bg-white px-6 text-sm font-bold shadow-[0_12px_24px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-0.5'
                      bgClassName='bg-[linear-gradient(90deg,var(--lp-primary-strong)_0%,var(--lp-primary-deep)_100%)]'
                      contentClassName='text-inherit group-hover:text-white'
                    >
                      {card.buttonLabel}
                      {card.key === 'download' ? (
                        <Icon className='h-5 w-5 text-inherit' />
                      ) : (
                        <Icon className='ml-0.5 h-4.5 w-4.5 fill-current text-inherit' />
                      )}
                    </RippleLink>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className='mx-auto mt-7 max-w-[900px]'>
          <div className='rounded-[1.55rem] border border-white/78 bg-white p-2.5 shadow-[0_18px_38px_rgba(15,23,42,0.12)]'>
            <div className='border-lp-border flex flex-col items-center justify-between gap-4 rounded-[1.25rem] border bg-[linear-gradient(180deg,var(--lp-surface)_0%,var(--lp-surface-soft)_100%)] px-5 py-4 text-center sm:px-6 lg:flex-row lg:text-left'>
              <div className='flex items-center gap-4'>
                <span className='border-lp-border bg-lp-primary-surface text-lp-primary flex h-12 w-12 items-center justify-center rounded-[1.1rem] border'>
                  <MessageSquareText className='h-6 w-6' strokeWidth={2.1} />
                </span>
                <div>
                  <p className='text-lp-primary text-xs font-bold uppercase'>
                    CONTACT
                  </p>
                  <h3 className='text-lp-text mt-1 text-[1.12rem] leading-tight font-bold'>
                    お問い合わせはこちら
                  </h3>
                  <p className='text-lp-text-muted mt-1.5 text-[0.88rem] leading-6 font-normal'>
                    相談内容に応じて、必要なフォームをご案内します。
                  </p>
                </div>
              </div>

              <RippleLink
                href='/apply'
                className='border-lp-border text-lp-text inline-flex min-h-12 items-center justify-center rounded-full border bg-white px-6 text-sm font-bold shadow-[0_12px_24px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-0.5'
                bgClassName='bg-[linear-gradient(90deg,var(--lp-primary-strong)_0%,var(--lp-primary-deep)_100%)]'
                contentClassName='text-inherit group-hover:text-white'
              >
                お問い合わせフォームへ
                <ArrowRight className='h-5 w-5 text-inherit' />
              </RippleLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
