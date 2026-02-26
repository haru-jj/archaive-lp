import type { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import ProcessSection from '@/components/feature/ProcessSection';

export const metadata: Metadata = {
  title: '導入ステップ｜ARCHAIVE',
  description: '導入から全体最適までのプロセスをわかりやすくご紹介します。',
  alternates: {
    canonical: 'https://archaive.net/process',
  },
};

export default function ProcessPage() {
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
        name: '導入ステップ',
        item: 'https://archaive.net/process',
      },
    ],
  };

  return (
    <div className="font-noto-sans-jp bg-gray-50 min-h-screen">
      <Header />
      <main className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}
