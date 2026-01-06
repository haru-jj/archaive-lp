import type { Metadata } from 'next';
import DownloadPageClient from './DownloadPageClient';

export const metadata: Metadata = {
  title: '資料ダウンロード｜ARCHAIVE製品資料請求',
  description:
    'ARCHAIVEの機能概要や活用事例をまとめた資料を無料でダウンロードできます。図面検索・見積自動化など製造業DXのヒントを掲載。',
  keywords: ['ARCHAIVE資料', '製造業DX資料', '図面管理資料', 'AI見積資料', '製造業SaaS'],
  alternates: {
    canonical: 'https://archaive.net/download',
  },
  openGraph: {
    title: '資料ダウンロード｜ARCHAIVE製品資料請求',
    description:
      'ARCHAIVEのサービス概要や活用方法をまとめた資料を無料配布。製造業の図面管理とAI活用をご検討の方におすすめです。',
    url: 'https://archaive.net/download',
    images: [
      {
        url: 'https://archaive.net/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ARCHAIVE 資料ダウンロード',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: '資料ダウンロード｜ARCHAIVE製品資料請求',
    description:
      '製造業DXを推進するARCHAIVEのサービス資料を無料でダウンロード。図面検索やAI見積の最新情報を掲載。',
    images: ['https://archaive.net/images/og-image.png'],
  },
};

export default function DownloadPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://archaive.net/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '資料ダウンロード',
        item: 'https://archaive.net/download',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <DownloadPageClient />
    </>
  );
}
