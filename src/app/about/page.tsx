import type { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import ArchaiveIntroSection from '@/components/feature/ArchaiveIntroSection';

export const metadata: Metadata = {
  title: 'ARCHAIVEについて｜ARCHAIVE',
  description: '製造業AIデータハブとしてのARCHAIVEの概要とビジョンをご紹介します。',
  alternates: {
    canonical: 'https://archaive.net/about',
  },
};

export default function AboutPage() {
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
        name: 'ARCHAIVEについて',
        item: 'https://archaive.net/about',
      },
    ],
  };

  return (
    <div className="font-noto-sans-jp bg-gray-50 min-h-screen">
      <Header />
      <main className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <ArchaiveIntroSection />
      </main>
      <Footer />
    </div>
  );
}
