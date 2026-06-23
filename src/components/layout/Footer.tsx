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

const FOOTER_LEGAL_LINKS = [
  { label: '会社概要', href: 'https://starup01.jp/', external: true },
  { label: '導入事例', href: '/case', external: false },
  { label: 'セキュリティ', href: '/security', external: false },
  { label: 'お問い合わせ', href: '/apply', external: false },
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
    'inline-flex items-center gap-1.5 text-[1rem] leading-8 font-normal text-lp-text transition-colors duration-200 hover:text-lp-primary-strong';

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
            <Link href='/' className='inline-flex items-center gap-2.5 sm:gap-3'>
              <Image
                src='/svg/logo.svg'
                alt='ARCHAIVE'
                width={48}
                height={48}
                className='h-10 w-10 sm:h-12 sm:w-12'
              />
              {/* ヘッダーと同じ ARCHAIVE ロゴ（ARCH + 赤AI + VE）をアイコンの横に配置 */}
              <div>
                <span
                  className='block text-[1.7rem] leading-none font-bold sm:text-[2.1rem]'
                  style={{ color: '#37B7C4' }}
                >
                  ARCH
                  <span style={{ color: '#F64848' }}>AI</span>
                  VE
                </span>
                <span className='text-lp-text mt-1 block text-[0.9rem] font-normal sm:text-[0.95rem]'>
                  by STAR UP
                </span>
              </div>
            </Link>

            <p className='text-lp-text-muted mt-7 max-w-[28rem] text-[1rem] leading-8 font-normal sm:text-[1.05rem] sm:leading-9'>
              製造業のための、図面管理AI／情報基盤。図面・見積・仕様・検査記録・判断の経緯まで、製品ごとに紐づけて蓄積します。
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

        <div className='relative z-10 flex flex-col gap-6 pt-8 lg:flex-row lg:items-center lg:justify-between'>
          <p className='text-lp-text text-[0.94rem] font-normal sm:text-[0.98rem]'>
            © 2026 STAR UP Inc. All rights reserved.
          </p>

          <div className='flex flex-wrap gap-x-6 gap-y-2'>
            {FOOTER_LEGAL_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  className='text-lp-text hover:text-lp-primary-strong text-[0.94rem] font-normal transition-colors duration-200'
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className='text-lp-text hover:text-lp-primary-strong text-[0.94rem] font-normal transition-colors duration-200'
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
