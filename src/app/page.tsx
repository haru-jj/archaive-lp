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
    'ARCHAIVEは図面・帳票データを資産化し、AIチャット検索・図面自動解析・見積AIで製造業の現場から経営までDXを推進するプラットフォームです。',
  keywords: [
    'ARCHAIVE',
    '製造業DXプラットフォーム',
    'AI見積ソフト',
    '図面自動解析',
    'チャット型ナレッジ検索',
    '加工業DX',
    '図面管理SaaS',
  ],
  alternates: {
    canonical: 'https://archaive.net/',
  },
  openGraph: {
    title: 'ARCHAIVE｜製造業DXを実現するAI図面検索・見積プラットフォーム',
    description:
      '図面データを資産化し、誰でも素早く正確な見積りを。ARCHAIVEは製造業DXを加速させるAIプラットフォームです。',
    url: 'https://archaive.net/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARCHAIVE｜製造業DXを実現するAI図面検索・見積プラットフォーム',
    description:
      '図面・帳票をAIが解析し、チャットで社内ナレッジにアクセス。ARCHAIVEで見積スピードと精度を両立。',
  },
};

export default function Home() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'ARCHAIVEはどのような製造業の課題に対応しますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '図面・帳票・ナレッジが散在し検索や見積が属人化している課題に対応します。AIが過去の図面と見積根拠を横断検索し、誰でも数秒で必要情報にアクセスできるようにします。',
        },
      },
      {
        '@type': 'Question',
        name: '導入プロセスはどのように進みますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SaaS標準機能の導入から既存システム連携、カスタマイズ開発まで3ステップで伴走します。段階的に社内データを統合し、オーダーメイドAIまで拡張できます。',
        },
      },
      {
        '@type': 'Question',
        name: 'どのような機能が利用できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AIによる図面自動解析・類似検索、チャット型ナレッジ検索、AI見積エージェント、顧客/権限管理など、図面起点でデータを資産化する機能を備えています。',
        },
      },
    ],
  };

  const heroImageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: 'https://archaive.net/images/hero-dashboard.png',
    creditText: 'ARCHAIVE product UI',
    creator: {
      '@type': 'Organization',
      name: 'ARCHAIVE',
    },
    description: 'ARCHAIVEのダッシュボード画面とAI見積機能を示すキービジュアル',
  };

  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(heroImageJsonLd) }} />
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
