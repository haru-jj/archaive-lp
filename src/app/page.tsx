import {
  HeroSection,
  // ArchaiveIntroSection,
  ArchaiveIntroSection,
  BeforeAfterSection,
  MainFeaturesSection,
  SubFeaturesSection,
  ProcessSection,
  CaseSection,
  NewsSection,
  SecuritySection,
  CTASection,
} from '@/components/feature';

import {
  Header,
  Footer,
} from '@/components/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ARCHAIVE｜製造業DXを実現するAI図面検索・見積プラットフォーム',
  description:
    'ARCHAIVEは製造業向けに図面・帳票データを活用し、AIによる見積自動化とナレッジ検索を提供。属人化を解消し、組織全体のDXを支援します。',
  keywords: [
    'ARCHAIVE',
    '製造業DX',
    'AI見積',
    '図面検索',
    'ナレッジマネジメント',
    '製造業AI',
    '帳票管理',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ARCHAIVE｜製造業DXを実現するAI図面検索・見積プラットフォーム',
    description:
      '図面データを資産化し、誰でも素早く正確な見積りを。ARCHAIVEは製造業DXを加速させるAIプラットフォームです。',
    url: 'https://archaive.jp/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARCHAIVE｜製造業DXを実現するAI図面検索・見積プラットフォーム',
    description:
      '図面・帳票をAIが解析し、社内ナレッジ活用を支援。ARCHAIVEで製造業DXを推進。',
  },
};

export default function Home() {

  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-20">
        <HeroSection />
        {/* <ArchaiveIntroSection /> */}
        <ArchaiveIntroSection />
        <BeforeAfterSection />
        <MainFeaturesSection />
        <SubFeaturesSection />
        <CaseSection />
        <ProcessSection />
        <NewsSection />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
