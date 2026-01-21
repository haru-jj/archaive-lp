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
  FAQSection,
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
    'ARCHAIVEは図面・帳票をAIが解析し、検索・見積・ナレッジ共有を一気通貫で自動化する製造業向けDXプラットフォームです。',
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
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '無料デモやトライアルで、実際の使い勝手を確認できますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、可能です。弊社が用意しておりますデータによる無料デモに加え、貴社の実際の図面データを用いたトライアル利用（有償PoC）も実施しております。「自社の図面がどう整理されるか」をお試しいただけます。',
        },
      },
      {
        '@type': 'Question',
        name: '過去データの移行サポート（導入時や導入後のサポート）はありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '専任スタッフによるデータ移行サポートが可能です。既存のファイルサーバーからのデータ移行支援を行っておりますので、大量の図面がある場合でも最適な移行プランをご提案します。',
        },
      },
      {
        '@type': 'Question',
        name: '図面は機密情報ですが、セキュリティ対策は万全ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '世界最高水準のセキュリティ基準を持つAWSを採用し、通信の暗号化や詳細なアクセス権限設定機能も備えています。官公庁や大手企業でも採用される管理体制で技術情報を安全に保護します。',
        },
      },
      {
        '@type': 'Question',
        name: '専用ソフトのインストールは必要ですか？スマホやタブレットでも見られますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'インストール不要で、ブラウザさえあればどこでも利用可能です。パソコンはもちろん、タブレットやスマートフォンからも図面の閲覧・検索ができ、場所を選ばず最新の図面情報にアクセスできます。',
        },
      },
      {
        '@type': 'Question',
        name: 'ファイル名が整理されていなくても、AIで図面を探せますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、ファイル名に依存せず「中身」で検索可能です。AI-OCRが図面内の「図番」「品名」「材質」「顧客名」などを自動で読み取りテキスト化するため、記載情報さえ分かれば瞬時に検索・発見できます。',
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
        name: '製造業DXプラットフォーム',
        item: 'https://archaive.net/#features',
      },
    ],
  };

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'ARCHAIVE',
    image: 'https://archaive.net/images/hero-dashboard.png',
    description: 'ARCHAIVEは図面・帳票をAIが解析し、検索・見積・ナレッジ共有を一気通貫で自動化する製造業向けDXプラットフォームです。',
    brand: {
      '@type': 'Brand',
      name: 'ARCHAIVE',
    },
    url: 'https://archaive.net/',
    category: '製造業DXプラットフォーム',
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '株式会社ARCHAIVE',
    url: 'https://archaive.net/',
    logo: 'https://archaive.net/svg/logo-text.svg',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'info@archaive.co.jp',
        availableLanguage: ['Japanese'],
      },
    ],
  };

  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(heroImageJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
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
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
