import type { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import SecuritySection from '@/components/feature/SecuritySection';

export const metadata: Metadata = {
  title: 'セキュリティ｜ARCHAIVE',
  description: 'ARCHAIVEのセキュリティとコンプライアンスへの取り組みをご紹介します。',
  alternates: {
    canonical: 'https://archaive.net/security',
  },
};

export default function SecurityPage() {
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
        name: 'セキュリティ',
        item: 'https://archaive.net/security',
      },
    ],
  };

  return (
    <div className="font-noto-sans-jp bg-gray-50 min-h-screen">
      <Header />
      <main className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
}
