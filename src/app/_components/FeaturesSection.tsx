'use client';

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react';

import Image from 'next/image';

import {
  ArrowRight,
  Bot,
  Boxes,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  FileStack,
  Search,
} from 'lucide-react';

import { RippleLink } from './CtaRipple';

const industryTabs = ['製造業の方へ', '建設業の方へ'] as const;

const featureTabs = [
  { id: 'search', label: '01 図面をAIが読み解く' },
  { id: 'bom', label: '02 ひとつの画面で管理' },
  { id: 'docs', label: '03 書類・案件を製品に' },
  { id: 'agent', label: '04 AIが動かす' },
] as const;

const featureDetails = {
  search: {
    number: '01',
    icon: Search,
    heading: '図面をAIが読み解く。\n情報が自動で整う。',
    body: [
      '図面をアップロードするだけで、材質・寸法・取引先をAIが自動で読み取って入力。手書きでもPDFでも対応。',
      '過去の類似図面を形状から3秒で引き当て、2枚の図面の変更箇所も色分けで可視化します。',
    ],
    bullets: [
      '類似図面検索: 形状・寸法をAI解析して即時抽出。',
      '差分検索: 変更箇所を色分けで瞬時に可視化。',
      'AI自動入力: 材質・寸法・取引先まで自動で抽出。',
    ],
  },
  bom: {
    number: '02',
    icon: Boxes,
    heading: '製品にまつわるすべてを、\nひとつの画面で管理する。',
    body: [
      '部品の親子関係をツリーで可視化。工程・原価を部品に紐付け。設計変更の影響範囲が一目でわかります。',
      '表示項目は自由にカスタマイズでき、備考欄に書いたメモがそのまま会社のナレッジとして蓄積されます。',
    ],
    bullets: [
      '部品ツリー: 部品の親子関係をツリーで可視化。',
      '工程・原価: 工程・原価を部品単位で紐付け。',
      'カスタム項目: 自社専用のデータベースとして育てられる。',
    ],
  },
  docs: {
    number: '03',
    icon: FileStack,
    heading: '図面・書類・経緯が、\n製品ページに集まる。',
    body: [
      '見積書、仕様書、納品書、検査記録を図面と紐付けて管理。案件の進捗もステータスで追えます。',
      '担当が変わっても、過去の判断理由や取引先との経緯がすべてそこに残ります。',
    ],
    bullets: [
      '書類紐付け: 書類は図面と自動で紐付け、製品ページから即アクセス。',
      '案件ステータス: 設計・製造・調達で進捗を共有。',
      '判断の経緯: 判断の理由・取引先との経緯を備考欄で蓄積。',
    ],
  },
  agent: {
    number: '04',
    icon: Bot,
    heading: '溜まった情報を、\nAIが使い始める。',
    body: [
      '情報が蓄積されて、はじめてAIは本当の力を発揮する。チャットで聞くだけで、社内の図面・帳票・過去実績を横断して即答。',
      '図面をアップするだけで、過去の類似案件をもとに概算見積を自動生成。蓄積したデータの活用まで、責任を持って届けます。',
    ],
    bullets: [
      'AIチャット: 自然言語で社内の知識資産を横断検索。',
      'AI見積エージェント: 過去案件から概算見積を自動算出。',
      'ARCHAIVE+: 御社専用AI（外観検査・需要予測等）も構築可能。',
    ],
  },
} as const;

const featurePreviewImages = {
  search: {
    src: '/lp-v2/main_function_1.jpg',
    alt: 'AI図面検索の画面イメージ',
    label: 'AI Drawing Search',
    objectPosition: 'left center',
  },
  bom: {
    src: '/lp-v2/main_function_2.jpg',
    alt: '部品構成管理の画面イメージ',
    label: 'BOM Management',
    objectPosition: 'left center',
  },
  docs: {
    src: '/lp-v2/main_function_3.jpg',
    alt: '書類・案件管理の画面イメージ',
    label: 'Document Workflow',
    objectPosition: 'left center',
  },
  agent: {
    src: '/lp-v2/main_function_1.jpg',
    alt: 'AIエージェントの画面イメージ',
    label: 'AI Agent Workspace',
    objectPosition: 'left center',
  },
} as const;

export function FeaturesSection() {
  const [selectedIndustry, setSelectedIndustry] =
    useState<(typeof industryTabs)[number]>('製造業の方へ');
  const [selectedFeature, setSelectedFeature] =
    useState<(typeof featureTabs)[number]['id']>('search');
  const [displayedFeature, setDisplayedFeature] =
    useState<(typeof featureTabs)[number]['id']>('search');
  const [isFeaturePanelVisible, setIsFeaturePanelVisible] = useState(true);
  const featureSwitchTimeoutRef = useRef<number | null>(null);
  const industryTabsRef = useRef<HTMLDivElement | null>(null);
  const featureTabsRef = useRef<HTMLDivElement | null>(null);
  const industryButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const featureButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [industryIndicatorStyle, setIndustryIndicatorStyle] =
    useState<CSSProperties>({});
  const [featureIndicatorStyle, setFeatureIndicatorStyle] =
    useState<CSSProperties>({});
  const selectedFeatureDetail = featureDetails[displayedFeature];
  const selectedFeatureImage = featurePreviewImages[displayedFeature];
  const SelectedFeatureIcon = selectedFeatureDetail.icon;
  const selectedFeatureIndex = featureTabs.findIndex(
    (tab) => tab.id === selectedFeature,
  );
  const accentPalette = {
    primary: 'var(--lp-primary)',
    primaryStrong: 'var(--lp-primary-strong)',
    primarySoft: 'var(--lp-primary-soft)',
    primarySurface: 'var(--lp-primary-surface)',
    primaryBorder: 'var(--lp-primary-border)',
    primaryShadow: 'color-mix(in srgb, var(--lp-primary) 22%, transparent)',
    primaryShadowSoft: 'color-mix(in srgb, var(--lp-primary) 12%, transparent)',
  };

  useEffect(() => {
    if (selectedFeature === displayedFeature) return;

    if (featureSwitchTimeoutRef.current !== null) {
      window.clearTimeout(featureSwitchTimeoutRef.current);
    }

    setIsFeaturePanelVisible(false);

    featureSwitchTimeoutRef.current = window.setTimeout(() => {
      setDisplayedFeature(selectedFeature);

      window.requestAnimationFrame(() => {
        setIsFeaturePanelVisible(true);
      });
    }, 100);

    return () => {
      if (featureSwitchTimeoutRef.current !== null) {
        window.clearTimeout(featureSwitchTimeoutRef.current);
      }
    };
  }, [displayedFeature, selectedFeature]);

  useLayoutEffect(() => {
    const updateIndicators = () => {
      const selectedIndustryIndex = industryTabs.findIndex(
        (tab) => tab === selectedIndustry,
      );
      const activeFeatureIndex = featureTabs.findIndex(
        (tab) => tab.id === selectedFeature,
      );

      const industryContainer = industryTabsRef.current;
      const activeIndustryButton =
        industryButtonRefs.current[selectedIndustryIndex];

      if (industryContainer && activeIndustryButton) {
        const containerRect = industryContainer.getBoundingClientRect();
        const buttonRect = activeIndustryButton.getBoundingClientRect();

        setIndustryIndicatorStyle({
          width: `${buttonRect.width}px`,
          height: `${buttonRect.height}px`,
          transform: `translate3d(${buttonRect.left - containerRect.left}px, ${buttonRect.top - containerRect.top}px, 0)`,
          opacity: 1,
        });
      }

      const featureContainer = featureTabsRef.current;
      const activeFeatureButton = featureButtonRefs.current[activeFeatureIndex];

      if (featureContainer && activeFeatureButton) {
        const containerRect = featureContainer.getBoundingClientRect();
        const buttonRect = activeFeatureButton.getBoundingClientRect();

        setFeatureIndicatorStyle({
          width: `${buttonRect.width}px`,
          height: `${buttonRect.height}px`,
          transform: `translate3d(${buttonRect.left - containerRect.left}px, ${buttonRect.top - containerRect.top}px, 0)`,
          opacity: 1,
        });
      }
    };

    updateIndicators();
    window.addEventListener('resize', updateIndicators);

    return () => window.removeEventListener('resize', updateIndicators);
  }, [selectedFeature, selectedIndustry]);

  const moveFeatureCarousel = (direction: 1 | -1) => {
    const nextIndex =
      (selectedFeatureIndex + direction + featureTabs.length) %
      featureTabs.length;

    setSelectedFeature(featureTabs[nextIndex].id);
  };

  return (
    <section
      id='features'
      className='scroll-mt-16 bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-20'
      style={
        {
          '--feature-primary': accentPalette.primary,
          '--feature-primary-strong': accentPalette.primaryStrong,
          '--feature-primary-soft': accentPalette.primarySoft,
          '--feature-primary-surface': accentPalette.primarySurface,
          '--feature-primary-border': accentPalette.primaryBorder,
          '--feature-primary-shadow': accentPalette.primaryShadow,
          '--feature-primary-shadow-soft': accentPalette.primaryShadowSoft,
        } as CSSProperties
      }
    >
      <div className='mx-auto max-w-[1320px]'>
        <div className='mx-auto max-w-[920px] text-center'>
          <p className='text-sm font-semibold tracking-[0.18em] text-[var(--feature-primary)]'>
            Features
          </p>
          <h2 className='text-lp-text mt-5 text-center text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1.05] font-black tracking-[-0.06em]'>
            <span className='block'>蓄積、連携、共有、活用。</span>
            <span className='block'>データ基盤を構成する4つの機能</span>
          </h2>
          <div className='border-lp-text/55 mx-auto mt-6 h-px w-full max-w-[18rem] border-t-2 border-solid sm:max-w-[20rem]' />
          <p className='text-lp-text-subtle mx-auto mt-4 max-w-[44rem] text-base leading-7 font-semibold sm:text-lg'>
            ARCHAIVEは、入口の蓄積からAIによる活用までの4段階で、製造業のデータ基盤を構成します。
          </p>

          <div
            ref={industryTabsRef}
            className='relative mt-10 inline-grid w-full max-w-[24rem] grid-cols-2 rounded-2xl border border-[var(--feature-primary-border)] bg-[var(--feature-primary-surface)] p-1.5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] sm:mt-12 sm:inline-flex sm:w-auto sm:max-w-none'
          >
            <span
              aria-hidden='true'
              className='pointer-events-none absolute top-0 left-0 rounded-[1rem] bg-[var(--feature-primary-strong)] shadow-[0_10px_18px_var(--feature-primary-shadow)] transition-[transform,width,height,opacity] duration-200 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] will-change-transform'
              style={industryIndicatorStyle}
            />
            {industryTabs.map((tab) => {
              const isActive = selectedIndustry === tab;
              const index = industryTabs.findIndex(
                (currentTab) => currentTab === tab,
              );

              return (
                <button
                  key={tab}
                  ref={(node) => {
                    industryButtonRefs.current[index] = node;
                  }}
                  type='button'
                  onClick={() => setSelectedIndustry(tab)}
                  className='relative rounded-[1rem] px-4 py-3 text-sm font-bold sm:px-6'
                  aria-pressed={isActive}
                >
                  <span
                    className={`relative z-10 transition ${
                      isActive
                        ? 'text-white'
                        : 'text-lp-text-subtle hover:text-lp-text'
                    }`}
                  >
                    {tab}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className='mt-14 lg:hidden'>
          <div className='bg-lp-surface-soft relative overflow-hidden rounded-[1.4rem] p-2'>
            <div
              className='flex gap-3 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]'
              style={{
                transform: `translate3d(calc(-${selectedFeatureIndex * 100}% - ${selectedFeatureIndex * 0.75}rem), 0, 0)`,
              }}
            >
              {featureTabs.map((tab) => {
                const isActive = selectedFeature === tab.id;
                const [number, ...labelParts] = tab.label.split(' ');

                return (
                  <button
                    key={tab.id}
                    type='button'
                    onClick={() => setSelectedFeature(tab.id)}
                    className='min-w-full rounded-2xl border border-[var(--feature-primary-border)] bg-white px-5 py-4 text-left shadow-[0_10px_22px_var(--feature-primary-shadow-soft)]'
                    aria-pressed={isActive}
                  >
                    <span className='text-lp-text flex w-full items-center justify-center text-sm font-bold'>
                      <span className='text-[var(--feature-primary)]'>
                        {number}
                      </span>
                      <span className='ml-4 text-center'>
                        {labelParts.join(' ')}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className='mt-4 flex items-center justify-center gap-3'>
            <button
              type='button'
              onClick={() => moveFeatureCarousel(-1)}
              className='border-lp-border text-lp-text inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)] transition hover:border-[var(--feature-primary-border)] hover:text-[var(--feature-primary)]'
              aria-label='前の機能を見る'
            >
              <ChevronLeft className='h-4 w-4' strokeWidth={2.4} />
            </button>

            <div className='flex items-center justify-center gap-2'>
              {featureTabs.map((tab, index) => (
                <button
                  key={tab.id}
                  type='button'
                  onClick={() => setSelectedFeature(tab.id)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === selectedFeatureIndex
                      ? 'w-8 bg-[var(--feature-primary)]'
                      : 'bg-lp-border w-2.5 hover:bg-[var(--feature-primary-border)]'
                  }`}
                  aria-label={`${tab.label}を表示`}
                />
              ))}
            </div>

            <button
              type='button'
              onClick={() => moveFeatureCarousel(1)}
              className='border-lp-border text-lp-text inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)] transition hover:border-[var(--feature-primary-border)] hover:text-[var(--feature-primary)]'
              aria-label='次の機能を見る'
            >
              <ChevronRight className='h-4 w-4' strokeWidth={2.4} />
            </button>
          </div>
        </div>

        <div
          ref={featureTabsRef}
          className='bg-lp-surface-soft relative mt-14 hidden gap-3 rounded-[1.4rem] p-2 lg:grid lg:grid-cols-4'
        >
          <span
            aria-hidden='true'
            className='pointer-events-none absolute rounded-2xl border border-[var(--feature-primary-border)] bg-white shadow-[0_10px_22px_var(--feature-primary-shadow-soft)] transition-[transform,width,height,opacity] duration-200 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] will-change-transform'
            style={featureIndicatorStyle}
          />
          {featureTabs.map((tab) => {
            const isActive = selectedFeature === tab.id;
            const index = featureTabs.findIndex(
              (currentTab) => currentTab.id === tab.id,
            );

            return (
              <button
                key={tab.id}
                ref={(node) => {
                  featureButtonRefs.current[index] = node;
                }}
                type='button'
                onClick={() => setSelectedFeature(tab.id)}
                className='relative rounded-2xl border border-transparent px-5 py-4 text-left'
                aria-pressed={isActive}
              >
                <span
                  className={`relative z-10 flex w-full items-center justify-center text-sm ${
                    isActive
                      ? 'text-lp-text font-bold'
                      : 'text-lp-text-subtle font-semibold'
                  }`}
                >
                  <span
                    className={`absolute left-0 ${
                      isActive
                        ? 'text-[var(--feature-primary)]'
                        : 'text-inherit'
                    }`}
                  >
                    {tab.label.split(' ')[0]}
                  </span>
                  <span className='text-center'>
                    {tab.label.split(' ').slice(1).join(' ')}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className='border-lp-border mt-12 overflow-hidden rounded-[2rem] border bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]'>
          <div
            key={displayedFeature}
            className={`feature-panel-enter grid lg:grid-cols-[1.05fr_0.95fr] ${
              isFeaturePanelVisible ? 'feature-panel-visible' : ''
            }`}
          >
            <div className='relative px-5 py-7 sm:px-10 sm:py-9 lg:px-12 lg:py-10'>
              <div className='relative'>
                <span className='text-lp-border pointer-events-none absolute top-0 right-0 z-0 flex items-center gap-1 text-[4.5rem] leading-none font-black sm:right-2 sm:gap-2 sm:text-[7rem]'>
                  {selectedFeatureDetail.number
                    .split('')
                    .map((digit, index) => (
                      <span key={`${selectedFeatureDetail.number}-${index}`}>
                        {digit}
                      </span>
                    ))}
                </span>
                {/* <div className='relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--feature-primary-soft)] text-[var(--feature-primary)] shadow-[0_10px_24px_var(--feature-primary-shadow-soft)]'>
                  <SelectedFeatureIcon className='h-5 w-5 stroke-[2.2]' />
                </div> */}
              </div>
              <h3 className='text-lp-text relative z-10 mt-6 text-[clamp(1.65rem,3.2vw,2.65rem)] leading-[1.08] font-black tracking-[-0.05em] whitespace-pre-line'>
                {selectedFeatureDetail.heading}
              </h3>
              <div className='text-lp-text-muted relative z-10 mt-5 space-y-4 text-base leading-8 font-medium'>
                {selectedFeatureDetail.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <ul className='relative z-10 mt-7 space-y-3'>
                {selectedFeatureDetail.bullets.map((benefit) => {
                  const [label, text] = benefit.split(': ');

                  return (
                    <li
                      key={benefit}
                      className='text-lp-text flex items-start gap-3'
                    >
                      <span className='mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--feature-primary-soft)] text-[var(--feature-primary)]'>
                        <Check className='h-4 w-4 stroke-[2.5]' />
                      </span>
                      <span className='text-sm leading-7 font-medium sm:text-base'>
                        <span className='text-lp-text font-bold'>{label}</span>
                        {text ? `: ${text}` : ''}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <RippleLink
                href='#contact'
                className='relative z-10 mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--feature-primary-strong)] px-6 py-4 text-sm font-bold text-white shadow-[0_14px_28px_var(--feature-primary-shadow)] transition hover:-translate-y-0.5'
                bgClassName='bg-[color-mix(in_srgb,var(--feature-primary-strong)_82%,black_10%)]'
                contentClassName='text-white'
              >
                詳細を見る
                <ArrowRight className='h-4 w-4' />
              </RippleLink>
            </div>

            <div className='border-lp-border bg-lp-surface-soft border-t p-4 sm:p-6 lg:border-t-0 lg:border-l lg:py-7 lg:pr-0 lg:pl-7'>
              <div className='relative h-full min-h-[18rem] rounded-[1.5rem] bg-[linear-gradient(180deg,var(--lp-surface-soft)_0%,var(--lp-primary-surface)_100%)] shadow-[0_22px_40px_rgba(15,23,42,0.12)] sm:min-h-[25.5rem]'>
                <div className='relative h-full min-h-[18rem] overflow-hidden rounded-[1.5rem] sm:min-h-[25.5rem] lg:rounded-l-[1.5rem] lg:rounded-r-none'>
                  <div className='pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_22%,rgba(15,23,42,0.08)_100%)]' />
                  <div className='absolute inset-y-0 left-0 w-[195%] sm:w-[185%] lg:w-[210%]'>
                    <Image
                      src={selectedFeatureImage.src}
                      alt={selectedFeatureImage.alt}
                      fill
                      sizes='(min-width: 1024px) 42vw, 100vw'
                      className='object-cover'
                      style={{
                        objectPosition: selectedFeatureImage.objectPosition,
                      }}
                    />
                  </div>
                  <div className='pointer-events-none absolute inset-y-0 left-0 w-[18%] bg-[linear-gradient(90deg,rgba(248,251,252,0.22)_0%,rgba(248,251,252,0)_100%)]' />
                  <div className='pointer-events-none absolute inset-y-0 right-0 w-[24%] bg-[linear-gradient(90deg,rgba(248,251,252,0)_0%,rgba(248,251,252,0.56)_58%,rgba(248,251,252,0.9)_100%)]' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <RippleLink
          href='#contact'
          className='mx-auto mt-8 block max-w-[1120px] overflow-hidden bg-[linear-gradient(100deg,var(--lp-text)_0%,color-mix(in_srgb,var(--lp-primary-deep)_82%,var(--lp-primary))_54%,color-mix(in_srgb,var(--lp-primary)_78%,white)_100%)] px-5 py-5 shadow-[0_18px_42px_rgba(0,26,71,0.16)] transition-transform duration-300 hover:-translate-y-0.5 sm:px-7 lg:px-8 lg:py-6'
          bgClassName='bg-[linear-gradient(100deg,color-mix(in_srgb,var(--lp-primary-deep)_92%,black)_0%,var(--lp-primary-strong)_100%)]'
          contentClassName='block w-full'
        >
          <div className='grid items-center gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(29rem,0.95fr)]'>
            <div className='text-center lg:text-left'>
              <p className='text-[clamp(0.98rem,4.1vw,1.28rem)] leading-[1.55] font-black tracking-[0.02em] text-white sm:text-[clamp(1.2rem,2.05vw,1.78rem)] sm:tracking-[0.04em]'>
                <span className='block whitespace-nowrap'>
                  「図面管理の、その先」がわかる資料を、
                </span>
                <span className='block whitespace-nowrap'>無料で。</span>
              </p>
              <span className='bg-lp-accent text-lp-text mt-5 inline-flex min-h-10 min-w-[13rem] items-center justify-center gap-4 rounded-lg px-4.5 text-sm font-black shadow-[0_6px_0_color-mix(in_srgb,var(--lp-accent-strong)_78%,black_10%),0_10px_20px_rgba(0,26,71,0.14)] sm:min-w-[15.5rem] sm:text-[0.95rem]'>
                資料を無料ダウンロード
                <Download className='h-4 w-4' strokeWidth={2.4} />
              </span>
            </div>

            <div className='relative min-h-[9.5rem] sm:min-h-[11rem] lg:min-h-[12.6rem]'>
              <div className='absolute top-3 left-[4%] w-[58%] rotate-[-1deg] overflow-hidden rounded-xl border border-white/80 bg-white shadow-[0_14px_28px_rgba(0,26,71,0.16)] sm:left-[10%] sm:w-[48%] lg:top-2 lg:left-[5.5rem] lg:w-[17.5rem]'>
                <div className='relative aspect-[16/10]'>
                  <Image
                    src='/lp-v2/drawing-screen.png'
                    alt='ARCHAIVEの図面データ活用画面'
                    fill
                    sizes='(min-width: 1024px) 280px, 58vw'
                    className='object-cover object-left'
                  />
                </div>
              </div>
              <div className='absolute top-0 right-[3%] w-[43%] rotate-[1deg] overflow-hidden rounded-xl border border-white/80 bg-white shadow-[0_14px_28px_rgba(0,26,71,0.16)] sm:right-[9%] sm:w-[34%] lg:right-auto lg:left-[17rem] lg:w-[13rem]'>
                <div className='relative aspect-[16/10]'>
                  <Image
                    src='/lp-v2/page_1.png'
                    alt='ARCHAIVEの資料プレビュー'
                    fill
                    sizes='(min-width: 1024px) 210px, 43vw'
                    className='object-cover object-top'
                  />
                </div>
              </div>
              <div className='absolute right-4 bottom-0 flex h-17 w-17 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,color-mix(in_srgb,var(--lp-primary)_52%,white)_0%,var(--lp-primary)_64%,var(--lp-primary-strong)_100%)] text-center text-white shadow-[0_14px_28px_rgba(0,26,71,0.14)] sm:right-[14%] sm:h-20 sm:w-20 lg:right-2 lg:bottom-2 lg:h-24 lg:w-24'>
                <p className='text-[0.64rem] leading-4 font-black sm:text-[0.72rem] sm:leading-5 lg:text-[0.82rem]'>
                  3分で
                  <br />
                  機能を解説
                </p>
              </div>
            </div>
          </div>
        </RippleLink>
      </div>

      <style jsx>{`
        .feature-panel-enter {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.2s ease-out,
            transform 0.2s ease-out;
          will-change: opacity, transform;
        }

        .feature-panel-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
