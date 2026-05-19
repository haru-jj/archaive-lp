'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Download, LogIn, Phone, Rocket } from 'lucide-react';

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    const updateProgress = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header className='fixed top-0 right-0 left-0 z-50 border-b border-gray-100 bg-white/88 backdrop-blur-md'>
      <div className='mx-auto flex h-24 max-w-[1520px] items-center gap-2 px-5 sm:gap-4 sm:px-10 lg:px-14 xl:px-18'>
        {/* ロゴ */}
        <Link
          href='/'
          className='flex shrink-0 translate-y-1.5 flex-col items-center gap-2 leading-none'
        >
          <span className='text-lp-text -translate-y-1.5 text-[0.72rem] font-bold tracking-[-0.04em] whitespace-nowrap sm:text-[0.85rem]'>
            製造業向けAIデータハブ
          </span>
          <div className='flex items-center gap-2'>
            <Image
              src='/svg/logo.svg'
              alt='ARCHAIVE'
              width={32}
              height={32}
            />
            <span
              className='hidden text-[1.6rem] leading-none font-bold sm:inline'
              style={{ color: '#37B7C4' }}
            >
              ARCH
              <span style={{ color: '#F64848' }}>AI</span>
              VE
            </span>
          </div>
        </Link>

        {/* ナビゲーション */}
        <nav className='hidden flex-1 items-center justify-center gap-8 pl-16 lg:flex lg:translate-y-[16px] xl:pl-24'>
          <a
            href='#features'
            className='text-lp-text hover:text-lp-primary-deep inline-flex h-[1.6rem] items-center text-[1.05rem] leading-none font-normal transition-colors'
          >
            機能
          </a>
          <a
            href='#steps'
            className='text-lp-text hover:text-lp-primary-deep inline-flex h-[1.6rem] items-center text-[1.05rem] leading-none font-normal transition-colors'
          >
            導入の流れ
          </a>
          <a
            href='#cases'
            className='text-lp-text hover:text-lp-primary-deep inline-flex h-[1.6rem] items-center text-[1.05rem] leading-none font-normal transition-colors'
          >
            導入事例
          </a>
          <a
            href='#faq'
            className='text-lp-text hover:text-lp-primary-deep inline-flex h-[1.6rem] items-center text-[1.05rem] leading-none font-normal transition-colors'
          >
            よくある質問
          </a>
        </nav>

        {/* 右側 CTA（2段） */}
        <div className='ml-auto flex shrink-0 flex-col items-end gap-2 lg:ml-0'>
          {/* 上段: ログイン + 縦線 + 電話番号 + 受付時間 */}
          <div className='flex items-center gap-3 sm:gap-4'>
            <Link
              href='/auth/login'
              className='text-lp-text-subtle hover:text-lp-text inline-flex items-center gap-1.5 text-xs font-bold whitespace-nowrap transition-colors sm:text-[0.85rem]'
            >
              <LogIn className='h-3.5 w-3.5' strokeWidth={2.2} />
              ログイン
            </Link>
            <span
              aria-hidden='true'
              className='hidden h-4 w-px bg-slate-300 sm:block'
            />
            <a
              href='tel:05057837954'
              className='text-lp-text inline-flex items-center gap-1.5 text-sm font-bold whitespace-nowrap sm:text-[1rem]'
              aria-label='電話番号 050-5783-7954'
            >
              <Phone
                className='h-4 w-4 text-[var(--lp-primary-strong)]'
                strokeWidth={2.4}
              />
              <span className='hidden sm:inline'>050-5783-7954</span>
            </a>
            <span className='hidden text-[0.7rem] font-normal whitespace-nowrap text-slate-400 sm:inline sm:text-[0.75rem]'>
              受付:平日9時-18時
            </span>
          </div>

          {/* 下段: ボタン 2 つ */}
          <div className='flex items-center gap-2 sm:gap-2.5'>
            <a
              href='#contact'
              className='text-lp-text inline-flex items-center gap-1.5 rounded-lg border border-slate-400 bg-white px-4 py-2.5 text-sm font-bold whitespace-nowrap transition-colors hover:border-[var(--lp-primary-strong)] hover:bg-[var(--lp-primary-surface)] sm:gap-2 sm:px-6 sm:py-3 sm:text-base'
            >
              <Download className='h-[1.1rem] w-[1.1rem] sm:h-[1.3rem] sm:w-[1.3rem]' strokeWidth={2.4} />
              資料ダウンロード
            </a>
            <a
              href='#contact'
              className='inline-flex items-center gap-1.5 rounded-lg bg-[linear-gradient(135deg,#1E3A6F_0%,#0A1B40_100%)] px-4 py-2.5 text-sm font-bold whitespace-nowrap text-white shadow-[0_8px_18px_rgba(10,27,64,0.28)] transition-all duration-300 hover:bg-[linear-gradient(135deg,#274C8C_0%,#0F2453_100%)] hover:shadow-[0_12px_24px_rgba(10,27,64,0.36)] sm:gap-2 sm:px-6 sm:py-3 sm:text-base'
            >
              <Rocket className='h-[1.1rem] w-[1.1rem] -rotate-45 sm:h-[1.3rem] sm:w-[1.3rem]' strokeWidth={2.4} />
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute right-0 bottom-0 left-0 h-[3px] overflow-hidden bg-transparent'
      >
        <div
          className='h-full origin-left bg-[linear-gradient(90deg,var(--lp-primary)_0%,var(--lp-primary-strong)_60%,var(--lp-primary-deep)_100%)] shadow-[0_0_12px_rgba(85,189,207,0.45)] transition-transform duration-150 ease-out will-change-transform'
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>
    </header>
  );
}
