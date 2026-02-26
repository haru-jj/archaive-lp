import type { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import BeforeAfterSection from '@/components/feature/BeforeAfterSection';

export const metadata: Metadata = {
  title: '課題と解決｜ARCHAIVE',
  description: '図面や書類の管理における課題と、ARCHAIVEによる解決策をご紹介します。',
  alternates: {
    canonical: 'https://archaive.net/problem',
  },
};

export default function ProblemPage() {
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
        name: '課題と解決',
        item: 'https://archaive.net/problem',
      },
    ],
  };

  return (
    <div className="font-noto-sans-jp bg-gray-50 min-h-screen">
      <Header />
      <main className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <BeforeAfterSection />
      </main>
      <Footer />
    </div>
  );
}
