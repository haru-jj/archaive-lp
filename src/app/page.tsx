import type { Metadata } from 'next';

import { CaseStudySection } from './_components/CaseStudySection';
import { FeaturesSection } from './_components/FeaturesSection';
import { Footer } from './_components/Footer';
import { GetStartedSection } from './_components/GetStartedSection';
import { GettingStartedSection } from './_components/GettingStartedSection';
import { Header } from './_components/Header';
import { HeroSection } from './_components/HeroSection';
import { LogoMarquee } from './_components/LogoMarquee';
import { ProblemSolutionSection } from './_components/ProblemSolutionSection';
import { ResultSection } from './_components/ResultSection';
import { SecurityFaqSection } from './_components/SecurityFaqSection';

export const metadata: Metadata = {
  metadataBase: new URL('https://archaive.net'),
  title: 'ARCHAIVE | 中小製造業のための、図面管理AI／情報基盤',
  description:
    '図面・見積・仕様・検査記録・判断の経緯まで、製品ごとに紐づけて蓄積。50〜300名の中小製造業向けに、PLMの役割を最短1週間で。AI開発を本業とする技術チーム（STAR UP）が運営する、製造業の情報基盤。',
  keywords: [
    'ARCHAIVE',
    'アーカイブ',
    '図面管理',
    'AI図面管理',
    '図面検索',
    '製造業DX',
    'AI見積',
    '類似図面検索',
    '図面データベース',
    '製造業SaaS',
    'PLM',
    'ERP連携',
    'AIエージェント',
    'STAR UP',
  ],
  authors: [{ name: '株式会社STAR UP', url: 'https://starup01.jp/' }],
  creator: '株式会社STAR UP',
  publisher: '株式会社STAR UP',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://archaive.net',
    siteName: 'ARCHAIVE',
    title: 'ARCHAIVE｜中小製造業のための、図面管理AI／情報基盤',
    description:
      '図面・見積・仕様・検査記録・判断の経緯まで、製品ごとに紐づけて蓄積。50〜300名の中小製造業向けに、PLMの役割を最短1週間で。',
    images: [
      {
        url: '/svg/logo.svg',
        width: 1200,
        height: 630,
        alt: 'ARCHAIVE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARCHAIVE｜中小製造業のための、図面管理AI／情報基盤',
    description:
      '図面・見積・仕様・検査記録・判断の経緯まで、製品ごとに紐づけて蓄積。50〜300名の中小製造業向けに、PLMの役割を最短1週間で。',
    images: ['/svg/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://archaive.net',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon-32x32.png',
  },
  category: 'technology',
};

const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ARCHAIVE',
  alternateName: 'アーカイブ',
  description:
    '中小製造業のための、図面管理AI／情報基盤。図面・見積・仕様・検査記録・判断の経緯まで、製品ごとに紐づけて蓄積。',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://archaive.net',
  publisher: {
    '@type': 'Organization',
    name: '株式会社STAR UP',
    url: 'https://starup01.jp/',
  },
  offers: {
    '@type': 'Offer',
    description: '無料デモ体験・資料ダウンロード可能',
  },
};

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd),
        }}
      />
      <Header />
      <HeroSection />
      <LogoMarquee />
      <GetStartedSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <ResultSection />
      <CaseStudySection />
      <GettingStartedSection />
      <SecurityFaqSection />
      <Footer />
    </div>
  );
}
