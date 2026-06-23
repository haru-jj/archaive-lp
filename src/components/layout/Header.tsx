'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Download, LogIn, Menu, Phone, Rocket, X } from 'lucide-react';

const LOGIN_URL = 'https://archaive.jp/auth/login';

// アンカーは "/#..." 形式。ガイド等のサブページからでもホームの該当セクションへ戻ってジャンプする。
const NAV_LINKS = [
  { href: '/#features', label: '機能' },
  { href: '/#process', label: '導入の流れ' },
  { href: '/#case', label: '導入事例' },
  { href: '/#faq', label: 'よくある質問' },
];

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // ドロワー表示中は背面スクロールを止める。640px 以上になったら自動で閉じる
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

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
    <header className='fixed top-0 right-0 left-0 z-50 border-b border-gray-100 bg-white'>
      <div className='mx-auto flex h-16 max-w-[1520px] items-center gap-1.5 px-3 sm:h-24 sm:gap-4 sm:px-10 lg:px-14 xl:px-18'>
        {/* ロゴ */}
        <Link
          href='/'
          className='flex shrink-0 flex-row items-center gap-1.5 leading-none sm:translate-y-1.5 sm:flex-col sm:gap-2'
        >
          <span className='text-lp-text hidden text-[0.72rem] font-bold tracking-[-0.04em] whitespace-nowrap sm:block sm:-translate-y-1.5 sm:text-[0.85rem]'>
            製造業向けAIデータハブ
          </span>
          <div className='flex items-center gap-1.5 sm:gap-2'>
            <Image
              src='/svg/logo.svg'
              alt='ARCHAIVE'
              width={32}
              height={32}
              className='h-7 w-7 sm:h-8 sm:w-8'
            />
            <span
              className='text-[1.25rem] leading-none font-bold sm:text-[1.6rem]'
              style={{ color: '#37B7C4' }}
            >
              ARCH
              <span style={{ color: '#F64848' }}>AI</span>
              VE
            </span>
          </div>
        </Link>

        {/* ナビゲーション（NAV_LINKS で一元管理。ドロワーと同じ定義を共有） */}
        <nav className='hidden flex-1 items-center justify-center gap-8 pl-16 lg:flex lg:translate-y-[16px] xl:pl-24'>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-lp-text hover:text-lp-primary-deep inline-flex h-[1.6rem] items-center text-[1.05rem] leading-none font-normal transition-colors'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ハンバーガー（モバイルのみ） */}
        <button
          type='button'
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={menuOpen}
          className='text-lp-text ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-300 transition-colors hover:bg-[var(--lp-primary-surface)] sm:hidden'
        >
          {menuOpen ? <X className='h-6 w-6' strokeWidth={2.2} /> : <Menu className='h-6 w-6' strokeWidth={2.2} />}
        </button>

        {/* 右側 CTA（2段・デスクトップのみ） */}
        <div className='ml-auto hidden shrink-0 flex-col items-end gap-2 sm:flex lg:ml-0'>
          {/* 上段: ログイン + 縦線 + 電話番号 + 受付時間 */}
          <div className='flex items-center gap-3 sm:gap-4'>
            <a
              href={LOGIN_URL}
              className='text-lp-text-subtle hover:text-lp-text inline-flex items-center gap-1.5 text-xs font-bold whitespace-nowrap transition-colors sm:text-[0.85rem]'
            >
              <LogIn className='h-3.5 w-3.5' strokeWidth={2.2} />
              ログイン
            </a>
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
          <div className='flex items-center gap-1.5 sm:gap-2.5'>
            <Link
              href='/download'
              className='text-lp-text inline-flex h-11 items-center gap-1 rounded-lg border border-slate-400 bg-white px-2 text-[0.7rem] font-bold whitespace-nowrap transition-colors hover:border-[var(--lp-primary-strong)] hover:bg-[var(--lp-primary-surface)] sm:h-auto sm:gap-2 sm:px-6 sm:py-3 sm:text-base'
            >
              <Download className='h-4 w-4 sm:h-[1.3rem] sm:w-[1.3rem]' strokeWidth={2.4} />
              資料ダウンロード
            </Link>
            <Link
              href='/apply'
              className='inline-flex h-11 items-center gap-1 rounded-lg bg-[linear-gradient(135deg,#1E3A6F_0%,#0A1B40_100%)] px-2 text-[0.7rem] font-bold whitespace-nowrap text-white shadow-[0_8px_18px_rgba(10,27,64,0.28)] transition-all duration-300 hover:bg-[linear-gradient(135deg,#274C8C_0%,#0F2453_100%)] hover:shadow-[0_12px_24px_rgba(10,27,64,0.36)] sm:h-auto sm:gap-2 sm:px-6 sm:py-3 sm:text-base'
            >
              <Rocket className='h-4 w-4 -rotate-45 sm:h-[1.3rem] sm:w-[1.3rem]' strokeWidth={2.4} />
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
      {/* モバイルドロワー */}
      {menuOpen && (
        <div className='sm:hidden'>
          {/* 背景オーバーレイ */}
          <div
            className='fixed inset-0 top-16 z-40 bg-black/40'
            onClick={() => setMenuOpen(false)}
            aria-hidden='true'
          />
          {/* パネル */}
          <div className='absolute top-16 right-0 left-0 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-gray-100 bg-white shadow-xl'>
            <nav className='flex flex-col px-5 pt-2'>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className='text-lp-text hover:text-lp-primary-deep flex items-center justify-between border-b border-gray-100 py-3.5 text-base font-bold transition-colors'
                >
                  {link.label}
                  <span aria-hidden='true' className='text-slate-300'>
                    ›
                  </span>
                </Link>
              ))}
            </nav>

            <div className='flex flex-col gap-3 px-5 py-4'>
              <Link
                href='/apply'
                onClick={() => setMenuOpen(false)}
                className='inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,#1E3A6F_0%,#0A1B40_100%)] text-base font-bold whitespace-nowrap text-white shadow-[0_8px_18px_rgba(10,27,64,0.28)]'
              >
                <Rocket className='h-5 w-5 -rotate-45' strokeWidth={2.4} />
                お問い合わせ
              </Link>
              <Link
                href='/download'
                onClick={() => setMenuOpen(false)}
                className='text-lp-text inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-400 bg-white text-base font-bold whitespace-nowrap'
              >
                <Download className='h-5 w-5' strokeWidth={2.4} />
                資料ダウンロード
              </Link>

              <div className='mt-1 flex items-center justify-between border-t border-gray-100 pt-4'>
                <a
                  href={LOGIN_URL}
                  onClick={() => setMenuOpen(false)}
                  className='text-lp-text-subtle hover:text-lp-text inline-flex items-center gap-1.5 text-sm font-bold transition-colors'
                >
                  <LogIn className='h-4 w-4' strokeWidth={2.2} />
                  ログイン
                </a>
                <a
                  href='tel:05057837954'
                  className='text-lp-text inline-flex items-center gap-1.5 text-base font-bold'
                  aria-label='電話番号 050-5783-7954'
                >
                  <Phone className='h-4 w-4 text-[var(--lp-primary-strong)]' strokeWidth={2.4} />
                  050-5783-7954
                </a>
              </div>
              <span className='text-right text-[0.75rem] font-normal text-slate-400'>
                受付:平日9時-18時
              </span>
            </div>
          </div>
        </div>
      )}

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
