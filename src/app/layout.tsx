import './globals.css';
import '@/styles/lp1-animations.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ARCHAIVE - 製造業DXを実現するAI見積・ナレッジ検索システム',
  description: '製造業の見積作成を最大90%効率化。過去の図面・見積データをAIが瞬時に検索し、正確な見積を自動生成。属人化を解消し、若手でもベテラン級の見積が可能に。',
  keywords: '製造業DX,AI見積,図面検索,ナレッジマネジメント,製造業効率化,見積自動化,図面管理システム,製造業AI,SaaS',
  authors: [{ name: 'ARCHAIVE' }],
  creator: 'ARCHAIVE',
  publisher: 'ARCHAIVE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://archaive.jp'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ARCHAIVE - 製造業向けAIナレッジ検索システム',
    description: '見積作成の属人化を解消。AIで過去の図面・見積データを瞬時に検索し、正確な見積を自動生成。',
    url: 'https://archaive.jp',
    siteName: 'ARCHAIVE',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ARCHAIVE - 製造業DXを実現するAI見積システム',
      }
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARCHAIVE - 製造業向けAIナレッジ検索',
    description: '見積作成を最大90%効率化。AIで製造業DXを実現。',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ARCHAIVE',
    applicationCategory: 'BusinessApplication',
    description: '製造業向けAI見積・ナレッジ検索システム',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'JPY',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2025-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
    },
    operatingSystem: 'Web Browser',
    softwareVersion: '2.0',
    publisher: {
      '@type': 'Organization',
      name: 'ARCHAIVE',
      url: 'https://archaive.jp',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ARCHAIVE',
    url: 'https://archaive.jp',
    logo: 'https://archaive.jp/images/ARCHAIVE_logo.png',
    description: '製造業DXを実現するAIソリューション企業',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Japanese',
    },
  };

  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}