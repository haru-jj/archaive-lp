import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';

const PRODUCT_LINKS = [
  { label: '図面をAIが読み解く', href: '#features' },
  { label: 'ひとつの画面で管理', href: '#features' },
  { label: '書類・案件を製品に', href: '#features' },
  { label: 'AIが動かす', href: '#features' },
  { label: 'ARCHAIVE+（カスタム開発）', href: '#contact' },
] as const;

const RESOURCE_LINKS = [
  { label: '図面・運用改善のヒント', href: '#' },
  { label: 'お知らせ', href: '#' },
  { label: 'よくある質問', href: '#faq' },
] as const;

const COMPANY_LINKS = [
  { label: '会社概要', href: '#' },
  { label: '導入事例', href: '#usecases' },
  { label: 'セキュリティ', href: '#security' },
  { label: 'お問い合わせはこちら', href: '#contact' },
  { label: 'プライバシーポリシー', href: '#' },
  { label: 'ARCHAIVE ログイン', href: '/auth/login' },
] as const;

const EXTERNAL_LINKS = [
  { label: 'note', href: '#' },
  { label: 'PR TIMES', href: '#' },
  { label: '公式X', href: '#' },
] as const;

const FOOTER_LEGAL_LINKS = [
  { label: '会社概要', href: '#' },
  { label: '導入事例', href: '#usecases' },
  { label: 'セキュリティ', href: '#security' },
  { label: 'お問い合わせはこちら', href: '#contact' },
  { label: 'プライバシーポリシー', href: '#' },
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
    'inline-flex items-center gap-1.5 text-[1rem] leading-8 font-medium text-lp-text transition-colors duration-200 hover:text-lp-primary-strong';

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

export function Footer() {
  return (
    <footer className='relative overflow-hidden bg-[linear-gradient(180deg,var(--lp-primary-surface)_0%,var(--lp-border)_100%)] px-6 py-16 sm:px-10 lg:px-16 lg:py-20'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(85,189,207,0.1),transparent_24%)]' />

      <div className='relative z-10 mx-auto max-w-[1400px]'>
        <div className='border-lp-border grid gap-14 border-b pb-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,2fr)] lg:gap-16'>
          <div className='max-w-[30rem]'>
            <Link href='/' className='inline-flex items-end gap-3'>
              <Image
                src='/svg/logo.svg'
                alt='ARCHAIVE'
                width={48}
                height={48}
                className='h-12 w-12'
              />
              <div>
                <div className='text-lp-text text-[2.1rem] leading-none font-black tracking-[-0.05em]'>
                  ARCHAIVE
                </div>
                <div className='text-lp-text mt-1 text-[0.95rem] font-medium tracking-[0.04em]'>
                  by STAR UP
                </div>
              </div>
            </Link>

            <p className='text-lp-text-muted mt-8 max-w-[28rem] text-[1.05rem] leading-9 font-medium'>
              中小製造業のための、図面管理AI／情報基盤。図面・見積・仕様・検査記録・判断の経緯まで、製品ごとに紐づけて蓄積します。
            </p>
          </div>

          <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
            <div>
              <p className='text-lp-text-subtle text-[0.94rem] font-black tracking-[0.18em] uppercase'>
                Product
              </p>
              <div className='mt-5 flex flex-col'>
                {PRODUCT_LINKS.map((link) => (
                  <FooterLink
                    key={link.label}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className='text-lp-text-subtle text-[0.94rem] font-black tracking-[0.18em] uppercase'>
                Navigation
              </p>
              <div className='mt-5 flex flex-col'>
                {RESOURCE_LINKS.map((link) => (
                  <FooterLink
                    key={link.label}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className='text-lp-text-subtle text-[0.94rem] font-black tracking-[0.18em] uppercase'>
                Company
              </p>
              <div className='mt-5 flex flex-col'>
                {COMPANY_LINKS.map((link) => (
                  <FooterLink
                    key={link.label}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className='text-lp-text-subtle text-[0.94rem] font-black tracking-[0.18em] uppercase'>
                External
              </p>
              <div className='mt-5 flex flex-col'>
                {EXTERNAL_LINKS.map((link) => (
                  <FooterLink
                    key={link.label}
                    href={link.href}
                    label={link.label}
                    external
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='relative z-10 flex flex-col gap-6 pt-8 lg:flex-row lg:items-center lg:justify-between'>
          <p className='text-lp-text text-[0.98rem] font-medium'>
            © 2026 STAR UP Inc. All rights reserved.
          </p>

          <div className='flex flex-wrap gap-x-6 gap-y-2'>
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className='text-lp-text hover:text-lp-primary-strong text-[0.94rem] font-medium transition-colors duration-200'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
