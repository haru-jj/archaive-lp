'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Phone } from 'lucide-react';

export function Header() {
  return (
    <header className='fixed top-0 right-0 left-0 z-50 border-b border-gray-100 bg-white/88 backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-[1520px] items-center justify-between gap-2 px-5 sm:gap-4 sm:px-10 lg:px-14 xl:px-18'>
        {/* ロゴ */}
        <Link href='/' className='flex shrink-0 items-center gap-2'>
          <Image
            src='/svg/logo.svg'
            alt='ARCHAIVE'
            width={36}
            height={36}
          />
          <span className='text-lp-text hidden text-xl font-bold tracking-wide sm:inline'>
            ARCHAIVE
          </span>
        </Link>

        {/* ナビゲーション */}
        <nav className='hidden items-center gap-8 lg:flex'>
          <a
            href='#features'
            className='text-lp-text-subtle hover:text-lp-text text-sm font-medium transition-colors'
          >
            機能
          </a>
          <a
            href='#cases'
            className='text-lp-text-subtle hover:text-lp-text text-sm font-medium transition-colors'
          >
            導入事例
          </a>
          <a
            href='#security'
            className='text-lp-text-subtle hover:text-lp-text text-sm font-medium transition-colors'
          >
            セキュリティ
          </a>
        </nav>

        {/* CTA */}
        <div className='flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-3'>
          <a
            href='tel:08047605129'
            className='text-lp-text inline-flex min-h-10 items-center gap-2 rounded-full border border-[var(--lp-border)] bg-white px-3 text-sm font-black shadow-[0_8px_20px_rgba(15,23,42,0.05)] transition-colors hover:border-[var(--lp-primary-border)] hover:bg-[var(--lp-primary-surface)]'
            aria-label='電話番号 080-4760-5129'
          >
            <Phone className='h-4 w-4 text-[var(--lp-primary-strong)]' />
            <span className='hidden sm:inline'>080-4760-5129</span>
          </a>
          <Link
            href='/auth/login'
            className='text-lp-text-subtle hover:text-lp-text text-xs font-bold whitespace-nowrap transition-colors sm:text-sm'
          >
            ログイン
          </Link>
          <a
            href='#contact'
            className='bg-lp-text hover:bg-lp-primary-deep rounded-lg px-3 py-2 text-xs font-bold whitespace-nowrap text-white transition-colors sm:px-4 sm:text-sm'
          >
            資料ダウンロード
          </a>
        </div>
      </div>
    </header>
  );
}
