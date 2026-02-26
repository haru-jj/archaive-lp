import type { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import FAQSection from '@/components/feature/FAQSection';

export const metadata: Metadata = {
  title: 'よくある質問｜ARCHAIVE',
  description: 'ARCHAIVEに関するよくある質問と回答をまとめています。',
  alternates: {
    canonical: 'https://archaive.net/faq',
  },
};

export default function FAQPage() {
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
        name: 'よくある質問',
        item: 'https://archaive.net/faq',
      },
    ],
  };

  return (
    <div className="font-noto-sans-jp bg-gray-50 min-h-screen">
      <Header />
      <main className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
