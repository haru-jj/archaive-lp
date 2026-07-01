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
import { industryTabs, useIndustryTheme } from './IndustryTheme';

const featureTabs = [
  { id: 'search', label: '01 図面をAIが読み解く' },
  { id: 'bom', label: '02 製品情報を一画面で' },
  { id: 'docs', label: '03 書類と案件を集約' },
  { id: 'agent', label: '04 AIで業務に効かせる' },
] as const;

const featureDetails = {
  search: {
    number: '01',
    icon: Search,
    heading: '図面をアップロードするだけで\n情報が整います',
    body: [
      '図面をアップロードすると、AIが材質・寸法・取引先を自動で読み取り、\n検索可能な情報として登録します。手書きのスキャンPDFにも対応。',
      '形状から類似図面を探す機能、2枚の図面の変更箇所を色分けで表示する\n差分検索機能も標準搭載です。',
    ],
    bullets: [
      '類似図面検索: 形状からAIが類似図面を瞬時に抽出。',
      '差分検索: 2枚の図面の変更箇所を色分けで可視化。',
      'AI自動入力: 材質・寸法・取引先まで自動で読み取り。',
    ],
  },
  bom: {
    number: '02',
    icon: Boxes,
    heading: '部品の構成も、原価も、\nひとつの画面で管理',
    body: [
      '部品の親子関係をツリーで表示し、工程・原価・取引先を部品単位で紐付けます。\n設計変更が他の部品に与える影響範囲もひと目で確認できます。実績価格をもとにした原価の積算や、REACH・RoHSなどの環境物質情報の集計も、部品構造から行えます。',
      'PLMより軽く導入でき、図面管理ツールよりも製品の構造に忠実な、製造業のためのデータ基盤です。',
    ],
    bullets: [
      '部品ツリー表示: 親子関係をツリーで可視化。',
      '工程・原価の紐付け: 工程・原価・取引先を部品単位で。',
      'カスタム項目: 自社業務に合わせて表示項目を調整。',
    ],
  },
  docs: {
    number: '03',
    icon: FileStack,
    heading: '仕様書、検査記録、判断の経緯まで\n製品ページに集まる',
    body: [
      '書類を図面に紐付けて管理し、案件の進行状況もステータスで追えます。',
      '担当者が変わっても、過去の判断理由や取引先との経緯が製品ページに残り、\n引き継ぎのために資料を再整理する必要はありません。',
    ],
    bullets: [
      '書類の自動紐付け: 書類は図面と自動で紐付き、即アクセス。',
      '案件ステータス管理: 設計・製造・調達で進捗を共有。',
      '備考による経緯の蓄積: 判断の理由・取引先との経緯を残せる。',
    ],
  },
  agent: {
    number: '04',
    icon: Bot,
    heading: '蓄積された情報を\nAIが業務で使える形に',
    body: [
      'チャットで質問するだけで、社内の図面・帳票・過去実績を横断検索。\n図面をアップロードすると、過去の類似案件をもとに概算見積を自動で算出します。',
      'さらに自社専用AI（見積自動化、外観検査、需要予測など）の構築まで、\nARCHAIVE+でご対応します。',
    ],
    bullets: [
      'AIチャット: 自然言語で社内データを横断検索。',
      'AI見積エージェント: 過去案件から概算見積を自動算出。',
      'ARCHAIVE+: カスタム開発（見積自動化・外観検査・需要予測等）。',
    ],
  },
} as const;

// 建設業タブ用の文章（製造業と同じ id・構成。bullets は本文から要約）
const featureTabsConstruction = [
  { id: 'search', label: '01 図面をAIが読み解く' },
  { id: 'bom', label: '02 物件情報を一画面で' },
  { id: 'docs', label: '03 書類と工事を集約' },
  { id: 'agent', label: '04 AIで業務に効かせる' },
] as const;

const featureDetailsConstruction = {
  search: {
    number: '01',
    icon: Search,
    heading: '膨大な図面の最新版を、\nAIが見分ける',
    body: [
      '意匠図・構造図・設備図をアップロードすると、AIが図面の中身を読み取り、検索できる状態で登録します。手書きのスキャンPDFにも対応。',
      '過去の類似物件から図面を探す類似図面検索、改訂前後の変更箇所を色分けで表示する差分検索も標準で使えます。',
    ],
    bullets: [
      '類似図面検索: 過去の類似物件から図面を抽出。',
      '差分検索: 改訂前後の変更箇所を色分けで表示。',
      'AI読み取り: 図面の中身を読み取り検索可能に。',
    ],
  },
  bom: {
    number: '02',
    icon: Boxes,
    heading: '図面も書類も原価も、\n物件ごとにまとまる',
    body: [
      '物件の構成を階層で表示し、図面・書類・原価・取引先を紐付けます。仕様変更がどの図面や工区に影響するか、ひと目で確認できます。',
      '表示する項目は、自社の業務に合わせて変えられます。',
    ],
    bullets: [
      '物件ツリー表示: 物件の構成を階層で可視化。',
      '情報の紐付け: 図面・書類・原価・取引先を紐付け。',
      'カスタム項目: 自社業務に合わせて表示を調整。',
    ],
  },
  docs: {
    number: '03',
    icon: FileStack,
    heading: '施工計画書、検査記録、判断の経緯まで\n物件ページに集まる',
    body: [
      '書類を図面に紐付けて管理し、工事の進み具合もステータスで追えます。',
      '担当者が変わっても、過去の判断理由や協力会社とのやり取りが物件ページに残り、引き継ぎのために資料を集め直す必要はありません。',
    ],
    bullets: [
      '書類の紐付け: 書類を図面に紐付けて即アクセス。',
      '工事ステータス管理: 進み具合をステータスで把握。',
      '経緯の蓄積: 判断理由・協力会社との経緯を残せる。',
    ],
  },
  agent: {
    number: '04',
    icon: Bot,
    heading: '蓄積された情報を、\nAIが業務で使える形に',
    body: [
      'チャットで質問するだけで、社内の図面・書類・過去物件を横断検索。図面をアップロードすると、過去の類似工事をもとに概算見積を自動で算出します。',
      'さらに自社専用のAI構築まで、ARCHAIVE+でご対応します。',
    ],
    bullets: [
      'AIチャット: 社内の図面・書類・過去物件を横断検索。',
      'AI見積エージェント: 過去の類似工事から概算見積を自動算出。',
      'ARCHAIVE+: 自社専用AIの構築まで対応。',
    ],
  },
} as const;

export function FeaturesSection() {
  const {
    selectedIndustry,
    setSelectedIndustry,
    palette: activePalette,
  } = useIndustryTheme();
  const [selectedFeature, setSelectedFeature] =
    useState<(typeof featureTabs)[number]['id']>('search');
  const [displayedFeature, setDisplayedFeature] =
    useState<(typeof featureTabs)[number]['id']>('search');
  const [isFeaturePanelVisible, setIsFeaturePanelVisible] = useState(true);
  // 値が変わるたびに自動スライドのタイマーを張り直す（手動操作でリセットするため）
  const [autoSlideResetKey, setAutoSlideResetKey] = useState(0);
  const featureSwitchTimeoutRef = useRef<number | null>(null);
  const industryTabsRef = useRef<HTMLDivElement | null>(null);
  const featureTabsRef = useRef<HTMLDivElement | null>(null);
  const industryButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const featureButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const pinContainerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const isProgrammaticScrollRef = useRef(false);
  const stickyTopOffsetRef = useRef(96);
  const [stickyTopOffsetPx, setStickyTopOffsetPx] = useState(96);
  const [industryIndicatorStyle, setIndustryIndicatorStyle] =
    useState<CSSProperties>({});
  const [featureIndicatorStyle, setFeatureIndicatorStyle] =
    useState<CSSProperties>({});
  const isConstruction = selectedIndustry === '建設業の方へ';
  const activeTabs = isConstruction ? featureTabsConstruction : featureTabs;
  const activeDetails = isConstruction ? featureDetailsConstruction : featureDetails;
  const selectedFeatureDetail = activeDetails[displayedFeature];
  const SelectedFeatureIcon = selectedFeatureDetail.icon;
  const selectedFeatureIndex = featureTabs.findIndex(
    (tab) => tab.id === selectedFeature,
  );
  const accentPalette = {
    primary: activePalette.primary,
    primaryStrong: activePalette.primaryStrong,
    primarySoft: activePalette.primarySoft,
    primarySurface: activePalette.primarySurface,
    primaryBorder: activePalette.primaryBorder,
    primaryShadow: `color-mix(in srgb, ${activePalette.primary} 22%, transparent)`,
    primaryShadowSoft: `color-mix(in srgb, ${activePalette.primary} 12%, transparent)`,
  };

  useLayoutEffect(() => {
    const headerEl =
      typeof document !== 'undefined'
        ? document.querySelector<HTMLElement>('header')
        : null;

    const getHeaderHeight = () => {
      if (!headerEl) return 96;
      return headerEl.offsetHeight || 96;
    };

    const updateStickyTop = () => {
      const sticky = stickyRef.current;
      if (!sticky) return;
      const headerHeight = getHeaderHeight();
      if (!window.matchMedia('(min-width: 1024px)').matches) {
        stickyTopOffsetRef.current = headerHeight;
        setStickyTopOffsetPx(headerHeight);
        return;
      }
      const stickyHeight = sticky.offsetHeight;
      const viewportHeight = window.innerHeight;
      const availableHeight = Math.max(0, viewportHeight - headerHeight);
      const centered =
        headerHeight + Math.max(16, (availableHeight - stickyHeight) / 2);
      stickyTopOffsetRef.current = centered;
      setStickyTopOffsetPx(centered);
    };

    updateStickyTop();
    window.addEventListener('resize', updateStickyTop);

    let headerObserver: ResizeObserver | null = null;
    if (headerEl && typeof ResizeObserver !== 'undefined') {
      headerObserver = new ResizeObserver(() => updateStickyTop());
      headerObserver.observe(headerEl);
    }

    return () => {
      window.removeEventListener('resize', updateStickyTop);
      headerObserver?.disconnect();
    };
  }, []);

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
    setAutoSlideResetKey((key) => key + 1);
  };

  // モバイル/タブレットのカルーセルで手動選択。自動スライドのタイマーをリセットする
  const selectFeatureManually = (id: (typeof featureTabs)[number]['id']) => {
    setSelectedFeature(id);
    setAutoSlideResetKey((key) => key + 1);
  };

  const scrollToFeatureIndex = (index: number) => {
    const container = pinContainerRef.current;
    const sticky = stickyRef.current;
    if (!container || !sticky) return;

    const totalPinDistance = container.offsetHeight - sticky.offsetHeight;
    if (totalPinDistance <= 0) return;

    const stepDistance = totalPinDistance / featureTabs.length;
    const containerTopAbs =
      container.getBoundingClientRect().top + window.scrollY;
    const target =
      containerTopAbs - stickyTopOffsetRef.current + index * stepDistance + stepDistance * 0.5;

    setSelectedFeature(featureTabs[index].id);
    isProgrammaticScrollRef.current = true;
    window.scrollTo({ top: target, behavior: 'smooth' });

    const checkArrival = () => {
      if (Math.abs(window.scrollY - target) < 2) {
        isProgrammaticScrollRef.current = false;
        return;
      }
      window.requestAnimationFrame(checkArrival);
    };
    window.requestAnimationFrame(checkArrival);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;

        if (!mediaQuery.matches) return;
        if (isProgrammaticScrollRef.current) return;

        const container = pinContainerRef.current;
        const sticky = stickyRef.current;
        if (!container || !sticky) return;

        const containerRect = container.getBoundingClientRect();
        const totalPinDistance = container.offsetHeight - sticky.offsetHeight;
        if (totalPinDistance <= 0) return;

        const scrollOffset = stickyTopOffsetRef.current - containerRect.top;
        const clamped = Math.max(0, Math.min(totalPinDistance, scrollOffset));
        const stepDistance = totalPinDistance / featureTabs.length;
        const rawIndex = Math.floor(clamped / stepDistance);
        const index = Math.max(
          0,
          Math.min(featureTabs.length - 1, rawIndex),
        );
        setSelectedFeature(featureTabs[index].id);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  // モバイル/タブレットでは、移動ボタンが押されない限り10秒ごとに次の機能へ自動スライド。
  // デスクトップ(lg+)はスクロール連動のため対象外。手動操作で autoSlideRefetKey が変わり、タイマーを張り直す。
  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    let intervalId: number | null = null;

    const stop = () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    };

    const start = () => {
      stop();
      if (desktopQuery.matches) return;
      intervalId = window.setInterval(() => {
        setSelectedFeature((current) => {
          const currentIndex = featureTabs.findIndex(
            (tab) => tab.id === current,
          );
          return featureTabs[(currentIndex + 1) % featureTabs.length].id;
        });
      }, 10000);
    };

    start();
    desktopQuery.addEventListener('change', start);

    return () => {
      stop();
      desktopQuery.removeEventListener('change', start);
    };
  }, [autoSlideResetKey]);

  const featurePanel = (
    <div className='border-lp-border overflow-hidden rounded-[2rem] border bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]'>
      <div
        key={displayedFeature}
        className={`feature-panel-enter grid lg:min-h-[34rem] lg:grid-cols-[1.05fr_0.95fr] ${
          isFeaturePanelVisible ? 'feature-panel-visible' : ''
        }`}
      >
        <div className='relative px-5 py-5 sm:px-10 sm:py-9 lg:px-12 lg:py-10'>
          <div className='relative'>
            <span className='text-lp-border pointer-events-none absolute -top-3 right-0 z-0 flex items-center -space-x-0.5 text-[5rem] leading-none font-bold sm:-top-6 sm:right-2 sm:-space-x-1 sm:text-[8rem]'>
              {selectedFeatureDetail.number.split('').map((digit, index) => (
                <span key={`${selectedFeatureDetail.number}-${index}`}>
                  {digit}
                </span>
              ))}
            </span>
          </div>
          <h3 className='text-lp-text relative z-10 mt-4 text-[clamp(1.125rem,1.7vw,1.5rem)] leading-[1.35] font-bold whitespace-pre-line sm:mt-6'>
            {selectedFeatureDetail.heading}
          </h3>
          <div className='text-lp-text-muted relative z-10 mt-3 space-y-3 text-[1rem] leading-7 font-normal sm:mt-5 sm:space-y-4 sm:leading-8 sm:text-[1.0625rem]'>
            {selectedFeatureDetail.body.map((paragraph) => (
              <p key={paragraph} className='whitespace-pre-line'>
                {paragraph}
              </p>
            ))}
          </div>

          <ul className='relative z-10 mt-5 space-y-2 sm:mt-7 sm:space-y-3'>
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
                  <span className='text-[0.95rem] leading-7 font-normal sm:text-base'>
                    <span className='text-lp-text font-bold'>{label}</span>
                    {text ? `: ${text}` : ''}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className='border-lp-border bg-lp-surface-soft relative aspect-square overflow-hidden border-t lg:aspect-auto lg:min-h-[280px] lg:border-t-0 lg:border-l'>
          <video
            key={selectedFeatureDetail.number}
            src={`/Video/ARCHIAVE${selectedFeatureDetail.number}.mp4`}
            autoPlay
            muted
            loop
            playsInline
            preload='none'
            style={{ transform: 'scale(1.25)' }}
            className='absolute inset-0 h-full w-full object-cover object-center'
          />
        </div>
      </div>
    </div>
  );

  return (
    <section
      id='features'
      className='scroll-mt-24 bg-white px-6 py-10 sm:px-10 sm:py-16 lg:px-16 lg:py-20'
      style={
        {
          '--lp-primary': activePalette.primary,
          '--lp-primary-strong': activePalette.primaryStrong,
          '--lp-primary-deep': activePalette.primaryDeep,
          '--lp-primary-soft': activePalette.primarySoft,
          '--lp-primary-surface': activePalette.primarySurface,
          '--lp-primary-border': activePalette.primaryBorder,
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
          <p className='text-sm font-bold text-[var(--feature-primary)]'>
            Features
          </p>
          <h2 className='text-lp-text mt-4 text-center text-[1.5rem] leading-[1.3] font-bold sm:mt-5 sm:text-[clamp(1.625rem,2.6vw,2rem)]'>
            ARCHAIVEの4つの機能
          </h2>
          <div className='border-lp-text/55 mx-auto mt-4 h-px w-full max-w-[18rem] border-t-2 border-solid sm:mt-6 sm:max-w-[20rem]' />
          <p className='text-lp-text-subtle mx-auto mt-4 max-w-[44rem] text-base leading-7 font-normal sm:text-lg'>
            図面のアップロードから、AIによる業務活用まで。
            <br />
            {isConstruction ? '建設業' : '製造業'}のデータ基盤を構成する4つの機能をご紹介します。
          </p>

          <div
            ref={industryTabsRef}
            className='relative mt-6 inline-grid w-full max-w-[24rem] grid-cols-2 rounded-2xl border border-[var(--feature-primary-border)] bg-[var(--feature-primary-surface)] p-1.5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] sm:mt-12 sm:inline-flex sm:w-auto sm:max-w-none'
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

        <div className='lg:hidden'>
          <div className='mt-6 sm:mt-[50px]'>
            <div className='bg-lp-surface-soft relative overflow-hidden rounded-[1.4rem] p-2'>
              <div
                className='flex gap-3 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]'
                style={{
                  transform: `translate3d(calc(-${selectedFeatureIndex * 100}% - ${selectedFeatureIndex * 0.75}rem), 0, 0)`,
                }}
              >
                {activeTabs.map((tab) => {
                  const isActive = selectedFeature === tab.id;
                  const [number, ...labelParts] = tab.label.split(' ');

                  return (
                    <button
                      key={tab.id}
                      type='button'
                      onClick={() => selectFeatureManually(tab.id)}
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
                className='border-lp-border text-lp-text inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)] transition hover:border-[var(--feature-primary-border)] hover:text-[var(--feature-primary)] lg:h-9 lg:w-9'
                aria-label='前の機能を見る'
              >
                <ChevronLeft className='h-4 w-4' strokeWidth={2.4} />
              </button>

              <div className='flex items-center justify-center gap-2'>
                {activeTabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    type='button'
                    onClick={() => selectFeatureManually(tab.id)}
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
                className='border-lp-border text-lp-text inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)] transition hover:border-[var(--feature-primary-border)] hover:text-[var(--feature-primary)] lg:h-9 lg:w-9'
                aria-label='次の機能を見る'
              >
                <ChevronRight className='h-4 w-4' strokeWidth={2.4} />
              </button>
            </div>
          </div>

          <div className='mt-12'>{featurePanel}</div>
        </div>

        <div
          ref={pinContainerRef}
          className='mt-[50px] hidden lg:block lg:h-[420vh]'
        >
          <div
            ref={stickyRef}
            className='lg:sticky'
            style={{ top: `${stickyTopOffsetPx}px` }}
          >
            <div
              ref={featureTabsRef}
              className='bg-lp-surface-soft relative grid grid-cols-4 gap-3 rounded-[1.4rem] p-2'
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
                    onClick={() => scrollToFeatureIndex(index)}
                    className='relative rounded-2xl border border-transparent px-5 py-4 text-left'
                    aria-pressed={isActive}
                  >
                    <span
                      className={`relative z-10 flex w-full items-center justify-center text-sm ${
                        isActive
                          ? 'text-lp-text font-bold'
                          : 'text-lp-text-subtle font-bold'
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

            <div className='mt-6'>{featurePanel}</div>
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
              <p className='text-[clamp(0.98rem,4.1vw,1.28rem)] leading-[1.55] font-bold text-white sm:text-[clamp(1.2rem,2.05vw,1.78rem)]'>
                <span className='block whitespace-nowrap'>
                  「図面管理の、その先」がわかる資料を、
                </span>
                <span className='block whitespace-nowrap'>無料で。</span>
              </p>
              <span className='bg-lp-accent text-lp-text mt-5 inline-flex min-h-10 min-w-[13rem] items-center justify-center gap-4 rounded-lg px-4.5 text-sm font-bold shadow-[0_6px_0_color-mix(in_srgb,var(--lp-accent-strong)_78%,black_10%),0_10px_20px_rgba(0,26,71,0.14)] sm:min-w-[15.5rem] sm:text-[0.95rem]'>
                資料を無料ダウンロード
                <Download className='h-4 w-4' strokeWidth={2.4} />
              </span>
            </div>

            <div className='relative min-h-[9.5rem] sm:min-h-[11rem] lg:min-h-[12.6rem]'>
              <div className='absolute top-3 left-[4%] w-[58%] rotate-[-1deg] overflow-hidden rounded-xl border border-white/80 bg-white shadow-[0_14px_28px_rgba(0,26,71,0.16)] sm:left-[10%] sm:w-[48%] lg:top-2 lg:left-[5.5rem] lg:w-[17.5rem]'>
                <div className='relative aspect-[16/10]'>
                  <Image
                    src='/images/v.png'
                    alt='ARCHAIVEの資料プレビュー'
                    fill
                    sizes='(min-width: 1024px) 280px, 58vw'
                    className='object-cover object-left'
                  />
                </div>
              </div>
              <div className='absolute top-0 right-[3%] w-[43%] rotate-[1deg] overflow-hidden rounded-xl border border-white/80 bg-white shadow-[0_14px_28px_rgba(0,26,71,0.16)] sm:right-[9%] sm:w-[34%] lg:right-auto lg:left-[17rem] lg:w-[13rem]'>
                <div className='relative aspect-[16/10]'>
                  <Image
                    src='/images/tablet.png'
                    alt='ARCHAIVEの資料プレビュー'
                    fill
                    sizes='(min-width: 1024px) 210px, 43vw'
                    className='object-cover object-top'
                  />
                </div>
              </div>
              <div className='absolute right-4 bottom-0 flex h-17 w-17 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,color-mix(in_srgb,var(--lp-primary)_52%,white)_0%,var(--lp-primary)_64%,var(--lp-primary-strong)_100%)] text-center text-white shadow-[0_14px_28px_rgba(0,26,71,0.14)] sm:right-[14%] sm:h-20 sm:w-20 lg:right-2 lg:bottom-2 lg:h-24 lg:w-24'>
                <p className='text-[0.64rem] leading-4 font-bold sm:text-[0.72rem] sm:leading-5 lg:text-[0.82rem]'>
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
