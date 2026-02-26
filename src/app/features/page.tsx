import type { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import MainFeaturesSection from '@/components/feature/MainFeaturesSection';
import SubFeaturesSection from '@/components/feature/SubFeaturesSection';

export const metadata: Metadata = {
  title: '主要機能｜ARCHAIVE',
  description: 'ARCHAIVEの主要機能と、図面起点のデータ活用を支える機能群をご紹介します。',
  alternates: {
    canonical: 'https://archaive.net/features',
  },
};

export default function FeaturesPage() {
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
        name: '主要機能',
        item: 'https://archaive.net/features',
      },
    ],
  };

  return (
    <div className="font-noto-sans-jp bg-gray-50 min-h-screen">
      <Header />
      <main className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <MainFeaturesSection />
        <SubFeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
