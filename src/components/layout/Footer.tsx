import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';

// frustration ブランチ(_components/Footer)のデザインを移植し、リンクを本サイトの実ルートに接続。
// ヘッダーと同じ要領で別ブランチから取り込み、ガイド(/guide)を追加。

const LOGIN_URL = 'https://archaive.jp/auth/login';

const PRODUCT_LINKS = [
  { label: '主要機能', href: '/features' },
  { label: '課題と解決', href: '/problem' },
  { label: '導入の流れ', href: '/process' },
  { label: '導入事例', href: '/case' },
] as const;

const NAVIGATION_LINKS = [
  { label: 'ガイド', href: '/guide' },
  { label: 'お知らせ', href: '/news' },
  { label: 'よくある質問', href: '/faq' },
] as const;

const COMPANY_LINKS = [
  { label: 'ARCHAIVEとは', href: '/about', external: false },
  { label: 'セキュリティ', href: '/security', external: false },
  { label: '会社概要', href: 'https://starup01.jp/', external: true },
  { label: 'ARCHAIVE ログイン', href: LOGIN_URL, external: true },
] as const;

const CONTACT_LINKS = [
  { label: '資料ダウンロード', href: '/download' },
  { label: '無料デモ体験', href: '/apply' },
  { label: 'お問い合わせ', href: '/apply' },
] as const;

function FooterLink({
  href,
  label,
  external = false,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const baseClassName =
    'inline-flex items-center gap-1.5 whitespace-nowrap text-[0.9rem] leading-7 font-normal text-lp-text transition-colors duration-200 hover:text-lp-primary-strong';

  if (external) {
    return (
      <a href={href} target='_blank' rel='noreferrer' className={baseClassName}>
        <span>{label}</span>
        <ArrowUpRight className='h-4 w-4 shrink-0' strokeWidth={2.2} />
      </a>
    );
  }

  return (
    <Link href={href} className={baseClassName}>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className='relative overflow-hidden bg-[linear-gradient(180deg,var(--lp-primary-surface)_0%,var(--lp-border)_100%)] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(85,189,207,0.1),transparent_24%)]' />

      <div className='relative z-10 mx-auto max-w-[1400px]'>
        <div className='border-lp-border grid gap-12 border-b pb-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,2fr)] lg:gap-16 lg:pb-14'>
          <div className='max-w-[30rem]'>
            <Link href='/' className='inline-flex flex-col gap-2'>
              {/* アイコン＋ARCHAIVEワードマークを同じ行で中心を揃える */}
              <div className='flex items-center gap-2.5 sm:gap-3'>
                <Image
                  src='/svg/logo.svg'
                  alt='ARCHAIVE'
                  width={48}
                  height={48}
                  className='h-10 w-10 sm:h-12 sm:w-12'
                />
                <Image
                  src='/svg/logo-text.svg'
                  alt='ARCHAIVE'
                  width={557}
                  height={101}
                  className='h-8 w-auto sm:h-10'
                />
              </div>
              <span className='text-lp-text inline-flex items-center gap-1.5 text-[0.9rem] font-normal sm:text-[0.95rem]'>
                by
                <Image
                  src='/images/group-30.svg'
                  alt='STAR UP'
                  width={599}
                  height={78}
                  className='h-[0.9rem] w-auto sm:h-[0.95rem]'
                />
              </span>
            </Link>

            <p className='text-lp-text-muted mt-7 max-w-[28rem] text-[1rem] leading-8 font-normal sm:text-[1.05rem] sm:leading-9'>
              製造業のための、図面管理AI／情報基盤。
              <br />
              図面・見積・仕様・検査記録・判断の経緯まで、製品ごとに紐づけて蓄積します。
            </p>
          </div>

          <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
            <div>
              <p className='text-lp-text-subtle text-[0.94rem] font-bold uppercase'>
                Product
              </p>
              <div className='mt-5 flex flex-col'>
                {PRODUCT_LINKS.map((link) => (
                  <FooterLink key={link.label} href={link.href} label={link.label} />
                ))}
              </div>
            </div>

            <div>
              <p className='text-lp-text-subtle text-[0.94rem] font-bold uppercase'>
                Navigation
              </p>
              <div className='mt-5 flex flex-col'>
                {NAVIGATION_LINKS.map((link) => (
                  <FooterLink key={link.label} href={link.href} label={link.label} />
                ))}
              </div>
            </div>

            <div>
              <p className='text-lp-text-subtle text-[0.94rem] font-bold uppercase'>
                Company
              </p>
              <div className='mt-5 flex flex-col'>
                {COMPANY_LINKS.map((link) => (
                  <FooterLink
                    key={link.label}
                    href={link.href}
                    label={link.label}
                    external={link.external}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className='text-lp-text-subtle text-[0.94rem] font-bold uppercase'>
                Contact
              </p>
              <div className='mt-5 flex flex-col'>
                {CONTACT_LINKS.map((link) => (
                  <FooterLink key={link.label} href={link.href} label={link.label} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='relative z-10 flex flex-col gap-4 pt-8 lg:flex-row lg:items-center lg:justify-between'>
          <nav className='flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.9rem]'>
            <Link
              href='/privacy-policy'
              className='text-lp-text-muted hover:text-lp-primary-strong transition-colors duration-200'
            >
              プライバシーポリシー
            </Link>
          </nav>
          <p className='text-lp-text text-[0.94rem] font-normal sm:text-[0.98rem]'>
            © 2026 STAR UP Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
