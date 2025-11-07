import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import styles from './page.module.css';

const caseData = {
  title: '株式会社エイ・エム・シィ様インタビュー｜ARCHAIVE導入事例',
  summary:
    '図面管理の属人化を解消した株式会社エイ・エム・シィ様に、ARCHAIVE導入の決め手と効果を伺いました。',
  url: 'https://archaive.jp/case/amc',
  image: 'https://archaive.jp/images/nakanishi.jpg',
};

const reviewData = {
  ratingValue: '5',
  author: '中西弘栄',
  jobTitle: '副工場長',
  company: '株式会社エイ・エム・シィ',
  reviewBody:
    '紙図面の属人管理を解消し、文字入力なしでクリック検索できる操作性を評価。現場と事務で業務分担が進み、図面探索に費やしていた時間を大幅に削減できたと語られています。',
};

const faqEntries = [
  {
    question: 'ARCHAIVE導入前に抱えていた課題は？',
    answer:
      '紙の図面を五十音順で管理していたため、戻し忘れや誤った場所への保管が頻発。ローマ字入力にも不慣れな従業員が多く、システム導入に不安を感じていたと紹介しています。',
  },
  {
    question: '導入の決め手と得られた成果は？',
    answer:
      '初期費用の手頃さと柔軟なカスタマイズ性、迅速な改善対応が導入の決め手。クリック主体の検索で誰でも使え、図面の所在不明問題も改善され、生産性向上に繋がっています。',
  },
];

const relatedCases = [
  {
    slug: 'crosstech',
    name: '株式会社クロステック',
    summary: '図面検索と見積業務の属人化を解消し、案件管理を効率化した事例。',
  },
  {
    slug: 'amc',
    name: '株式会社エイ・エム・シィ',
    summary: '紙図面の管理負荷を削減し、クリック主体の検索で誰でも使える環境を構築。',
  },
  {
    slug: 'suenami',
    name: 'スエナミ工業株式会社',
    summary: '大量図面のAI見積とコパイロット機能で業務を高速化した事例。',
  },
];

export const metadata: Metadata = {
  title: caseData.title,
  description: caseData.summary,
  keywords: ['導入事例', 'エイ・エム・シィ', '図面管理', 'ARCHAIVE'],
  alternates: {
    canonical: caseData.url,
  },
  openGraph: {
    title: caseData.title,
    description: caseData.summary,
    url: caseData.url,
    type: 'article',
    images: [
      {
        url: caseData.image,
        width: 1200,
        height: 630,
        alt: '株式会社エイ・エム・シィ様インタビューの様子',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: caseData.title,
    description: caseData.summary,
    images: [caseData.image],
  },
};

export default function AmcCase() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseData.title,
    description: caseData.summary,
    mainEntityOfPage: caseData.url,
    image: [caseData.image],
    author: {
      '@type': 'Organization',
      name: 'ARCHAIVE',
      url: 'https://archaive.jp/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ARCHAIVE',
      url: 'https://archaive.jp/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://archaive.jp/images/og-image.png',
      },
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'トップ',
        item: 'https://archaive.jp/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '導入事例',
        item: 'https://archaive.jp/case',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '株式会社エイ・エム・シィ様インタビュー',
        item: caseData.url,
      },
    ],
  };

  const productReviewJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'ARCHAIVE',
    brand: {
      '@type': 'Organization',
      name: 'ARCHAIVE',
    },
    description: '製造業向けAI図面検索・見積プラットフォーム',
    url: caseData.url,
    image: caseData.image,
    review: {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: `${reviewData.author}（${reviewData.jobTitle}）`,
        worksFor: {
          '@type': 'Organization',
          name: reviewData.company,
        },
      },
      reviewBody: reviewData.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: reviewData.ratingValue,
        bestRating: '5',
        worstRating: '1',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviewData.ratingValue,
      reviewCount: '1',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.answer,
      },
    })),
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productReviewJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        {/* インタビューセクション */}
        <div className={styles['interview-section']}>
          <div className="interview-header">
            <p className={styles['interview-label-en']}>Interview</p>
            <p className={styles['interview-label-ja']}>インタビュー</p>
          </div>
        </div>

        {/* インタビューコンテンツ */}
        <div className={styles['interview-content-wrapper']}>
          <div className={styles['interview-content']}>
            <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4">
              <ol className="flex gap-2">
                <li><Link href="/" className="hover:text-[#37B7C4]">トップ</Link></li>
                <li>/</li>
                <li><Link href="/case" className="hover:text-[#37B7C4]">導入事例</Link></li>
                <li>/</li>
                <li className="text-gray-900">{caseData.title}</li>
              </ol>
            </nav>
            <h1>株式会社エイ・エム・シィ/副工場長 中西弘栄様 ✖️ STAR UP/辻 拓真</h1>
            <hr />
            <div className="relative w-2/3 h-64 md:h-96 mb-6 mx-auto">
              <Image
                src="/images/nakanishi.jpg"
                alt="株式会社エイ・エム・シィ副工場長 中西弘栄様のポートレート"
                fill
                className="object-cover"
              />
            </div>
            
            <hr />
            
            <h3 className={styles['section-title']}>ARCHAIVE導入前の課題</h3>
            <hr />

            <div className="mb-12">
              <p className={styles['interview-question']}>ー(辻)： 本日はお忙しい中、ありがとうございます。早速ですが、貴社ではAI図面化プラットフォームを導入される前、どのような課題をお持ちでしたか？</p>
              <p>(中西様、以下敬省略)： そうですね、一番の課題は図面管理の属人化でした。これまでは紙の図面を会社名別に五十音順で整理していましたが、使った後に元の場所に戻されなかったり、間違った場所に入れられたりすることが頻繁にありました。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(辻)： それは大変でしたね。探すだけでも時間がかかってしまいそうです。</p>
              <p>(中西)： まさにその通りです。また、ローマ字入力に不慣れな従業員もいるので、いざシステムを導入するとなっても、入力のハードルが高いのではないかという懸念もありました。例えば、「ふ」って何行だっけ？とか、「フォー」ってどう書くんだ？みたいな状況が日常的に発生していましたね。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className={styles['section-title']}>ARCHAIVE導入の経緯と決め手</h3>
            <hr />
            
            <div className="relative w-2/3 h-64 md:h-96 mb-6 mx-auto">
              <Image
                src="/images/nakanishi_2.jpg"
                alt="ARCHAIVE導入を振り返る中西様のインタビューシーン"
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>ー(辻)： そのような課題をお持ちの中、AI図面化プラットフォームの導入を検討されたきっかけは何だったのでしょうか？</p>
              <p>(中西)： 実は、松田さん（株式会社クロステック様）のご紹介が大きかったです。以前から石川県の方で交流があったのですが、弊社の図面管理の課題について相談したところ、STAR UPさんを紹介していただきました。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(辻)： 松田さんからのお声がけだったのですね。弊社を選んでいただいた決め手は何だったのでしょうか？</p>
              <p>(中西)： いくつか理由があります。まず、初期費用が手頃だったこと。他社のシステムと比較しても導入しやすい価格設定で、中小企業にとって非常に魅力的でした。また、柔軟なカスタマイズ性も大きな決め手でしたね。既存の業務フローに合わせてシステムを構築・改善してくれるので、本当に助かっています。現場の要望を伝えると、迅速にシステムに反映してくれる対応力には驚きました。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(辻)： 弊社のスピード感を評価いただけて嬉しいです。</p>
              <p>(中西)： はい、それにトータルソリューションを目指している点も魅力的でした。図面管理だけでなく、今後開発予定の生産管理や顧客管理といった前後工程も一貫してシステム化することで、業務全体の効率化が期待できると感じました。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className={styles['section-title']}>ARCHAIVE導入後の効果</h3>
            <hr />

            <div className="mb-12">
              <p className={styles['interview-question']}>ー(辻)： 実際に導入されてみて、どのような効果を実感されていますか？</p>
              <p>(中西)： 一番大きいのは、図面を探す手間が劇的に減ったことです。文字入力なしでクリック操作だけで図面を探せるので、パソコン操作に不慣れな従業員でもすぐに使えるようになりました。事務員と作業員の業務を分担できるようになったため、業務全体の効率化が進んでいます。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(辻)： それは素晴らしいですね。その他に何か変化はありましたか？</p>
              <p>(中西)： はい。現場で発生していた図面の所在不明問題が改善され、探す時間や場所を尋ねる手間が大幅に削減されました。また、類似案件の検索が容易になったことも大きな変化です。これまでは見積もり時の入力や登録、加工後の本図面や加工実績の入力と紐付けに時間がかかっていましたが、ARCHAIVE（アーカイブ）では簡単に検索できるので、これらの手間削減にも期待しています。これにより、より本来の業務に集中できるようになり、生産性の向上に繋がっていると感じています。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className={styles['section-title']}>STAR UPへの今後の期待</h3>
            <hr />
            
            <div className="relative w-2/3 h-64 md:h-96 mb-6 mx-auto">
              <Image
                src="/images/nakanishi_3.jpg"
                alt="STAR UPへの期待について語る中西様"
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>ー(辻)： 今後のSTAR UPに期待することはありますか？</p>
              <p>(中西)： そうですね、これまで培ってきた技術やノウハウを、新しい世代に継承していくためにも、システムをさらに活用していきたいです。現場の「基礎」となる部分をどれだけ大事にできるかが重要だと考えています。また、私たちは自動車部品をメインにしているので、電気自動車化など、自動車業界の今後のトレンドに合わせた部品製造に対応していくためにも、引き続きシステムによる支援を期待しています。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(辻)： ありがとうございます。弊社のメンバーは平均年齢が20代と若いですが、高い開発力を持つ優秀な人材が揃っています。カナダのトロント大学との連携もあり、時差を活用することで24時間体制での開発も可能にしています。これにより、お客様の課題解決に素早くコミットし、使い勝手の良さとデータの連携を強みとしたサービスを提供できると自負しております。</p>
              <p>(中西)： ええ、貴社の開発チームの皆さんの熱意と技術力はいつも感じています。これからもお客様のニーズに応えられるよう、さらなる進化を期待しています。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(辻)： ありがとうございます。本日は貴重なお話をありがとうございました。</p>
            </div>

            <hr />

            {/* 企業情報 */}
            <div className={styles['company-info']}>
              <h3>株式会社エイ・エム・シィ</h3>
              <p><strong>代表取締役：</strong>佐々木徹</p>
              <p><strong>所在地：</strong>石川県かほく市内日角中49番地</p>
            </div>
        </div>
      </div>

        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">他の導入事例もチェック</h2>
            <p className="text-gray-600 mb-6">類似企業の導入背景や効果を読み比べて、自社への適合をイメージしてください。</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedCases
                .filter((item) => item.slug !== 'amc')
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/case/${item.slug}`}
                    className="block rounded-xl border border-gray-200 p-4 hover:border-[#37B7C4] hover:shadow-md transition-all"
                  >
                    <p className="text-sm text-[#37B7C4] font-semibold mb-1">{item.name}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.summary}</p>
                  </Link>
                ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/case"
                className="px-5 py-2 rounded-full border border-[#37B7C4] text-[#37B7C4] font-semibold hover:bg-[#37B7C4]/10"
              >
                導入事例一覧を見る
              </Link>
              <Link
                href="/apply"
                className="px-5 py-2 rounded-full bg-[#37B7C4] text-white font-semibold hover:bg-[#2a8b96]"
              >
                無料デモを申し込む
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
