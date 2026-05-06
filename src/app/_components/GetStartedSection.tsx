'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { ArrowRight, Mail, MessageSquareText, Play, X } from 'lucide-react';

import { RippleButton } from './CtaRipple';

type ContactMode = 'download' | 'contact' | 'demo';

const FEATURED_CARDS = [
  {
    key: 'download',
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
    badge: 'まずは試してみたい!',
    eyebrow: 'DEMO',
    title: 'デモを\n予約する',
    body: '実際の画面で、自社の課題に合わせたデモをご体験ください。',
    buttonLabel: 'デモを予約',
    icon: Play,
    preview: 'demo',
  },
] as const satisfies ReadonlyArray<{
  key: Exclude<ContactMode, 'contact'>;
  badge: string;
  eyebrow: string;
  title: string;
  body: string;
  buttonLabel: string;
  icon: typeof ArrowRight;
  preview: 'document' | 'demo';
}>;

const FORM_COPY: Record<
  ContactMode,
  {
    eyebrow: string;
    title: string;
    body: string;
    submit: string;
    consultationPlaceholder: string;
    consultationOptional?: boolean;
    scheduleLabel?: string;
  }
> = {
  download: {
    eyebrow: 'DOCUMENT',
    title: '資料ダウンロード',
    body: '入力いただいたメールアドレス宛に資料をご案内します。',
    submit: '資料を受け取る',
    consultationPlaceholder: '知りたい機能や導入背景があればご記入ください。',
    consultationOptional: true,
  },
  contact: {
    eyebrow: 'CONTACT',
    title: 'お問い合わせ',
    body: 'ご相談内容を確認のうえ、担当よりご連絡します。',
    submit: '問い合わせる',
    consultationPlaceholder:
      '課題に感じていることや、確認したい内容をご記入ください。',
  },
  demo: {
    eyebrow: 'DEMO',
    title: 'デモ予約',
    body: 'ご希望内容をもとに、日程調整のご連絡を差し上げます。',
    submit: 'デモを予約する',
    consultationPlaceholder:
      '見たい機能や、解決したい業務課題をご記入ください。',
    scheduleLabel: 'ご希望の日程',
  },
};

function DocumentPreview() {
  return (
    <div className='border-lp-primary-border relative mx-auto w-full max-w-[16.5rem] rounded-[1.15rem] border bg-white/96 p-2.5 shadow-[0_12px_26px_rgba(15,23,42,0.08)]'>
      <div className='border-lp-border rounded-[0.95rem] border bg-[linear-gradient(180deg,var(--lp-surface)_0%,var(--lp-surface-soft)_100%)] p-2.5'>
        <div className='flex items-start justify-between gap-3'>
          <div>
            <p className='text-lp-text-subtle text-[0.48rem] font-bold tracking-[0.14em] uppercase'>
              Archaive by Star Up
            </p>
            <p className='text-lp-text mt-0.5 text-[0.66rem] font-black tracking-[-0.03em]'>
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

function getNextMode(currentMode: ContactMode | null, targetMode: ContactMode) {
  if (targetMode === 'contact' && currentMode === 'contact') {
    return null;
  }

  return targetMode;
}

export function GetStartedSection() {
  const [activeMode, setActiveMode] = useState<ContactMode | null>(null);
  const [displayedMode, setDisplayedMode] = useState<ContactMode | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const transitionTimeoutRef = useRef<number | null>(null);

  const activeContent = displayedMode ? FORM_COPY[displayedMode] : null;

  useEffect(() => {
    if (transitionTimeoutRef.current !== null) {
      window.clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }

    if (activeMode === null) {
      setIsFormVisible(false);

      transitionTimeoutRef.current = window.setTimeout(() => {
        setDisplayedMode(null);
      }, 240);

      return () => {
        if (transitionTimeoutRef.current !== null) {
          window.clearTimeout(transitionTimeoutRef.current);
        }
      };
    }

    if (displayedMode === null) {
      setDisplayedMode(activeMode);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsFormVisible(true);
        });
      });

      return;
    }

    if (activeMode !== displayedMode) {
      setIsFormVisible(false);

      transitionTimeoutRef.current = window.setTimeout(() => {
        setDisplayedMode(activeMode);

        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            setIsFormVisible(true);
          });
        });
      }, 220);
    } else {
      setIsFormVisible(true);
    }

    return () => {
      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [activeMode, displayedMode]);

  useEffect(() => {
    if (!activeMode || !displayedMode || !isFormVisible) return;

    const scrollTimeout = window.setTimeout(() => {
      document
        .getElementById('contact-start-form-panel')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);

    return () => window.clearTimeout(scrollTimeout);
  }, [activeMode, displayedMode, isFormVisible]);

  return (
    <section
      id='contact'
      className='relative overflow-hidden bg-[linear-gradient(90deg,color-mix(in_srgb,var(--lp-primary-deep)_88%,var(--lp-primary))_0%,color-mix(in_srgb,var(--lp-primary)_92%,white)_50%,color-mix(in_srgb,var(--lp-primary-deep)_88%,var(--lp-primary))_100%)] px-6 py-16 sm:px-10 lg:px-16 lg:py-20'
    >
      <div className='relative z-10 mx-auto max-w-[1320px]'>
        <div className='text-center'>
          <p className='text-sm font-black tracking-[0.24em] text-white/95 sm:text-base'>
            GET STARTED
          </p>
          <h2 className='mx-auto mt-5 text-[clamp(2.15rem,4vw,3.45rem)] leading-[1.1] font-black tracking-[-0.05em] text-white'>
            「図面管理の、その先」を、
            <br />
            見にきてください。
          </h2>
          <p className='mx-auto mt-5 max-w-[40rem] text-[1rem] leading-8 font-semibold text-white/95 sm:text-[1.06rem]'>
            貴社の図面と書類で、何が紐づくか。3分の資料か、30分のデモで。
          </p>
        </div>

        <div className='mt-10 grid gap-5 xl:grid-cols-2 xl:gap-6'>
          {FEATURED_CARDS.map((card) => {
            const isActive = activeMode === card.key;
            const Icon = card.icon;

            return (
              <article
                key={card.key}
                className={`relative rounded-[1.55rem] border bg-white p-2.5 shadow-[0_18px_38px_rgba(15,23,42,0.12)] transition-transform duration-300 ${
                  isActive
                    ? 'border-white shadow-[0_22px_44px_rgba(15,23,42,0.16)]'
                    : 'border-white/76'
                }`}
              >
                <div className='bg-lp-text absolute top-0 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white px-4 py-1.5 text-xs font-black tracking-[0.03em] whitespace-nowrap text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)]'>
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
                    <p className='text-lp-primary text-xs font-black tracking-[0.22em] uppercase'>
                      {card.eyebrow}
                    </p>
                    <h3 className='text-lp-text mt-3 text-[clamp(1.35rem,2.3vw,1.95rem)] leading-[1.12] font-black tracking-[-0.04em] whitespace-pre-line'>
                      {card.title}
                    </h3>
                    <p className='text-lp-text-muted mt-3 text-[0.9rem] leading-7 font-medium'>
                      {card.body}
                    </p>

                    <RippleButton
                      type='button'
                      onClick={() => setActiveMode(card.key)}
                      className={`mt-5 inline-flex min-h-12 items-center justify-center self-start rounded-full border px-6 text-sm font-black shadow-[0_12px_24px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-0.5 ${
                        isActive
                          ? 'border-lp-primary-deep bg-[linear-gradient(90deg,var(--lp-primary-strong)_0%,var(--lp-primary-deep)_100%)] text-white'
                          : 'border-lp-border text-lp-text bg-white'
                      }`}
                      bgClassName='bg-[linear-gradient(90deg,var(--lp-primary-strong)_0%,var(--lp-primary-deep)_100%)]'
                      contentClassName={
                        isActive
                          ? 'text-white'
                          : 'text-inherit group-hover:text-white'
                      }
                    >
                      {card.buttonLabel}
                      {card.key === 'download' ? (
                        <Icon className='h-5 w-5 text-inherit' />
                      ) : (
                        <Icon className='ml-0.5 h-4.5 w-4.5 fill-current text-inherit' />
                      )}
                    </RippleButton>
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
                  <p className='text-lp-primary text-xs font-black tracking-[0.22em] uppercase'>
                    CONTACT
                  </p>
                  <h3 className='text-lp-text mt-1 text-[1.12rem] leading-tight font-black tracking-[-0.04em]'>
                    お問い合わせはこちら
                  </h3>
                  <p className='text-lp-text-muted mt-1.5 text-[0.88rem] leading-6 font-medium'>
                    相談内容に応じて、必要なフォームをご案内します。
                  </p>
                </div>
              </div>

              <RippleButton
                type='button'
                aria-pressed={activeMode === 'contact'}
                onClick={() =>
                  setActiveMode(getNextMode(activeMode, 'contact'))
                }
                className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-black shadow-[0_12px_24px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-0.5 ${
                  activeMode === 'contact'
                    ? 'border-lp-primary-deep bg-[linear-gradient(90deg,var(--lp-primary-strong)_0%,var(--lp-primary-deep)_100%)] text-white'
                    : 'border-lp-border text-lp-text bg-white'
                }`}
                bgClassName='bg-[linear-gradient(90deg,var(--lp-primary-strong)_0%,var(--lp-primary-deep)_100%)]'
                contentClassName={
                  activeMode === 'contact'
                    ? 'text-white'
                    : 'text-inherit group-hover:text-white'
                }
              >
                フォームを開く
                <ArrowRight className='h-5 w-5 text-inherit' />
              </RippleButton>
            </div>
          </div>
        </div>

        <div className='mx-auto mt-12 max-w-[960px]'>
          <div
            id='contact-start-form-panel'
            className={`grid scroll-mt-24 transition-[grid-template-rows,opacity] duration-500 ease-out ${
              displayedMode
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className='overflow-hidden'>
              {activeContent ? (
                <div
                  id={`contact-start-panel-${displayedMode}`}
                  className={`relative rounded-[2rem] border border-white/80 bg-white/96 p-6 shadow-[0_26px_60px_rgba(15,23,42,0.14)] backdrop-blur-sm transition-all duration-300 ease-out sm:p-8 lg:p-10 ${
                    isFormVisible
                      ? 'translate-y-0 scale-100 opacity-100'
                      : 'translate-y-3 scale-[0.985] opacity-0'
                  }`}
                >
                  <button
                    type='button'
                    onClick={() => setActiveMode(null)}
                    className='border-lp-border text-lp-text-subtle hover:border-lp-primary-border hover:text-lp-text absolute top-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full border bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition'
                    aria-label='フォームを閉じる'
                  >
                    <X className='h-5 w-5' strokeWidth={2.4} />
                  </button>

                  <div className='text-center'>
                    <p className='text-lp-primary text-sm font-black tracking-[0.24em]'>
                      {activeContent.eyebrow}
                    </p>
                    <h3 className='text-lp-text mt-4 text-[clamp(1.65rem,3vw,2.4rem)] leading-[1.1] font-black tracking-[-0.05em]'>
                      {activeContent.title}
                    </h3>
                    <p className='text-lp-text-muted mx-auto mt-4 max-w-[38rem] text-[1rem] leading-8 font-medium'>
                      {activeContent.body}
                    </p>
                  </div>

                  <form className='mt-10 space-y-6'>
                    <div className='grid gap-5 md:grid-cols-2'>
                      <div className='space-y-2'>
                        <label
                          htmlFor={`contact-name-${displayedMode}`}
                          className='text-lp-text text-sm font-bold'
                        >
                          お名前
                        </label>
                        <input
                          id={`contact-name-${displayedMode}`}
                          name='name'
                          type='text'
                          placeholder='山田 太郎'
                          className='border-lp-border text-lp-text h-14 w-full rounded-2xl border bg-[var(--lp-surface-soft)] px-4 text-base transition outline-none focus:border-[var(--lp-primary-border)] focus:bg-white focus:ring-4 focus:ring-[var(--lp-primary-soft)]'
                        />
                      </div>
                      <div className='space-y-2'>
                        <label
                          htmlFor={`contact-company-${displayedMode}`}
                          className='text-lp-text text-sm font-bold'
                        >
                          会社名
                        </label>
                        <input
                          id={`contact-company-${displayedMode}`}
                          name='company'
                          type='text'
                          placeholder='株式会社サンプル'
                          className='border-lp-border text-lp-text h-14 w-full rounded-2xl border bg-[var(--lp-surface-soft)] px-4 text-base transition outline-none focus:border-[var(--lp-primary-border)] focus:bg-white focus:ring-4 focus:ring-[var(--lp-primary-soft)]'
                        />
                      </div>
                    </div>

                    <div className='grid gap-5 md:grid-cols-2'>
                      <div className='space-y-2'>
                        <label
                          htmlFor={`contact-email-${displayedMode}`}
                          className='text-lp-text text-sm font-bold'
                        >
                          メールアドレス
                        </label>
                        <div className='relative'>
                          <Mail className='text-lp-text-subtle pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2' />
                          <input
                            id={`contact-email-${displayedMode}`}
                            name='email'
                            type='email'
                            placeholder='example@company.co.jp'
                            className='border-lp-border text-lp-text h-14 w-full rounded-2xl border bg-[var(--lp-surface-soft)] pr-4 pl-12 text-base transition outline-none focus:border-[var(--lp-primary-border)] focus:bg-white focus:ring-4 focus:ring-[var(--lp-primary-soft)]'
                          />
                        </div>
                      </div>
                      <div className='space-y-2'>
                        <label
                          htmlFor={`contact-phone-${displayedMode}`}
                          className='text-lp-text text-sm font-bold'
                        >
                          電話番号
                        </label>
                        <input
                          id={`contact-phone-${displayedMode}`}
                          name='phone'
                          type='tel'
                          placeholder='03-1234-5678'
                          className='border-lp-border text-lp-text h-14 w-full rounded-2xl border bg-[var(--lp-surface-soft)] px-4 text-base transition outline-none focus:border-[var(--lp-primary-border)] focus:bg-white focus:ring-4 focus:ring-[var(--lp-primary-soft)]'
                        />
                      </div>
                    </div>

                    <div className='grid gap-5 md:grid-cols-2'>
                      <div className='space-y-2'>
                        <label
                          htmlFor={`contact-type-${displayedMode}`}
                          className='text-lp-text text-sm font-bold'
                        >
                          問い合わせ種別
                        </label>
                        <select
                          id={`contact-type-${displayedMode}`}
                          name='inquiryType'
                          value={displayedMode ?? ''}
                          onChange={(event) =>
                            setActiveMode(event.target.value as ContactMode)
                          }
                          className='border-lp-border text-lp-text h-14 w-full rounded-2xl border bg-[var(--lp-surface-soft)] px-4 text-base transition outline-none focus:border-[var(--lp-primary-border)] focus:bg-white focus:ring-4 focus:ring-[var(--lp-primary-soft)]'
                        >
                          <option value='download'>資料ダウンロード</option>
                          <option value='contact'>お問い合わせ</option>
                          <option value='demo'>デモ予約</option>
                        </select>
                      </div>
                      {displayedMode === 'demo' ? (
                        <div className='space-y-2'>
                          <label
                            htmlFor='contact-schedule-demo'
                            className='text-lp-text text-sm font-bold'
                          >
                            {activeContent.scheduleLabel}
                          </label>
                          <select
                            id='contact-schedule-demo'
                            name='preferredSchedule'
                            defaultValue=''
                            className='border-lp-border text-lp-text h-14 w-full rounded-2xl border bg-[var(--lp-surface-soft)] px-4 text-base transition outline-none focus:border-[var(--lp-primary-border)] focus:bg-white focus:ring-4 focus:ring-[var(--lp-primary-soft)]'
                          >
                            <option value='' disabled>
                              ご希望の時間帯を選択
                            </option>
                            <option value='weekday-am'>平日 午前</option>
                            <option value='weekday-pm'>平日 午後</option>
                            <option value='late-afternoon'>平日 夕方</option>
                            <option value='flexible'>柔軟に調整可能</option>
                          </select>
                        </div>
                      ) : (
                        <div className='border-lp-border rounded-[1.5rem] border border-dashed bg-[linear-gradient(180deg,var(--lp-surface-soft)_0%,var(--lp-primary-surface)_100%)] px-5 py-4'>
                          <p className='text-lp-primary text-sm font-black tracking-[0.14em]'>
                            SUPPORT
                          </p>
                          <p className='text-lp-text-muted mt-2 text-sm leading-7 font-medium'>
                            いただいた内容に応じて、担当から最適なご案内を差し上げます。
                          </p>
                        </div>
                      )}
                    </div>

                    <div className='space-y-2'>
                      <label
                        htmlFor={`contact-message-${displayedMode}`}
                        className='text-lp-text text-sm font-bold'
                      >
                        ご相談内容
                        {activeContent.consultationOptional ? (
                          <span className='text-lp-text-subtle ml-2 text-xs font-medium'>
                            任意
                          </span>
                        ) : null}
                      </label>
                      <textarea
                        id={`contact-message-${displayedMode}`}
                        name='message'
                        rows={6}
                        placeholder={activeContent.consultationPlaceholder}
                        className='border-lp-border text-lp-text w-full rounded-[1.6rem] border bg-[var(--lp-surface-soft)] px-4 py-4 text-base leading-8 transition outline-none focus:border-[var(--lp-primary-border)] focus:bg-white focus:ring-4 focus:ring-[var(--lp-primary-soft)]'
                      />
                    </div>

                    <div className='flex flex-col items-center gap-4 pt-2'>
                      <RippleButton
                        type='submit'
                        className='inline-flex min-h-14 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,var(--lp-primary)_0%,var(--lp-primary-strong)_100%)] px-10 text-base font-black text-white shadow-[0_18px_38px_rgba(85,189,207,0.28)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_42px_rgba(85,189,207,0.32)]'
                        bgClassName='bg-[linear-gradient(180deg,var(--lp-primary-strong)_0%,var(--lp-primary-deep)_100%)]'
                        contentClassName='text-white'
                      >
                        {activeContent.submit}
                      </RippleButton>
                      <p className='text-sm leading-7 font-semibold text-white/95'>
                        送信後、担当より順次ご連絡いたします。
                      </p>
                    </div>
                  </form>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
