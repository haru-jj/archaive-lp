import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import styles from './page.module.css';

const caseData = {
  title: 'スエナミ工業株式会社様インタビュー｜ARCHAIVE導入事例',
  summary:
    '大量の図面見積業務を効率化したスエナミ工業株式会社様に、ARCHAIVE導入の背景と期待する未来像を伺いました。',
  url: 'https://archaive.jp/case/suenami',
  image: 'https://archaive.jp/images/yokoyama_1.png',
};

export const metadata: Metadata = {
  title: caseData.title,
  description: caseData.summary,
  keywords: ['導入事例', 'スエナミ工業', 'AI見積', 'ARCHAIVE'],
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
        alt: 'スエナミ工業株式会社様インタビューの様子',
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

export default function SuenamiCase() {
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
        name: 'スエナミ工業株式会社様インタビュー',
        item: caseData.url,
      },
    ],
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
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
            <h1>スエナミ工業株式会社/営業 兼 開発 横山智一様 ✖️ STAR UP/稲元 海翔</h1>
            <hr />
            <div className="relative w-2/3 h-64 md:h-96 mb-6 mx-auto">
              <Image
                src="/images/yokoyama_1.png"
                alt="スエナミ工業株式会社 横山智一様のインタビュー写真"
                fill
                className="object-cover"
              />
            </div>
            
            <hr />
            
            <h3 className={styles['section-title']}>ARCHAIVE導入前の課題</h3>
            <hr />

            <div className="mb-12">
              <p className={styles['interview-question']}>ー(稲元)： 本日はお忙しい中、ありがとうございます。早速ですが、ArchAIveを導入される前、どのような課題をお持ちでしたか？</p>
              <p>(横山様、以下敬省略)： 一番は、見積もり業務の複雑さと属人化ですね。図面が多く、一度に100枚〜150枚もの依頼がくることも珍しくありませんでした。見積もりは私の「感覚と経験」に大きく依存しており、新入社員への教育や、私が不在時の対応が困難でした。<br />
              手作業での見積もり算出には時間がかかり、迅速な対応ができませんでした。AIによる見積もりも最終的には人のチェックが必要で、その精度と信頼性の向上を求めていました。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className={styles['section-title']}>ARCHAIVE導入の経緯と決め手</h3>
            <hr />

            <div className="mb-12">
              <p className={styles['interview-question']}>ー(稲元)： そのような課題をお持ちの中、弊社を選んでいただいた決め手は何だったのでしょうか？</p>
              <p>(横山)： 決め手はいくつかあります。他社が「できない」と回答する中で、STAR UPさんが「可能かもしれない」と向き合ってくれたことです。私たちの独自の算出方法に、AIがどこまで近づけるかという「可能性」を感じたことが大きかったです。<br />
              また、開発の柔軟性とレスポンスの速さも大きな決め手でした。顧客の声をすぐに聞き入れ、システムに反映するスピード感が評価できました。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(稲元)： 弊社のスピード感を評価いただけて嬉しいです。</p>
              <p>(横山)： はい。STAR UPさんの開発チームがユーザーからのフィードバックを元に月2回の頻繁なアップデートを実施していると伺い、その開発体制にも安心感を覚えました。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className={styles['section-title']}>ARCHAIVE導入後の効果</h3>
            <hr />

            <div className="mb-12">
              <p className={styles['interview-question']}>ー(稲元)： 実際に導入されてみて、どのような効果を実感されていますか？</p>
              <p>(横山)： まずは、複雑な見積もり業務をAIがサポートしてくれることです。特に、図面をアップロードするだけで、過去の履歴やトラブル情報と紐付けてAIが対話しながら見積もりを算出する「コパイロット」のような機能に期待しています。多数の図面を一括で処理し、概算見積もりをCSVで出力できる機能は、私たちの業務を効率化してくれています。<br />
              また、既存のExcelデータや独自の計算ロジックをAIに学習させ、材料費、加工賃、外注費などを含んだ市場価格ベースの見積もりを自動算出できる機能も期待しています。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className={styles['section-title']}>STAR UPへの今後の期待</h3>
            <hr />

            <div className="mb-12">
              <p className={styles['interview-question']}>ー(稲元)： 横山様、長期的な視点でのご期待はいかがでしょうか？私たちが目指しているのは、見積もりだけでなく、工程管理、生産管理、原価計算、販売管理、顧客管理といった業務全体をサポートするモジュール型システムです。業務を一貫してシステム上で管理することで、より深い部分での効率化を実現できると考えています。</p>
              <p>(横山)：それは素晴らしいですね。まさに私たちが求めていた未来です。STAR UPさんの迅速な対応力と開発力があれば、それが実現できると信じています。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(稲元)： ありがとうございます。私たちは一社一社のローカルなデータに深く入り込み、その会社独自の業務サポートを実現することを目指しています。今後もスエナミ工業様の課題に寄り添い、共に成長していければ幸いです。本日は貴重なお話をありがとうございました。</p>
            </div>

            <hr />

            {/* 企業情報 */}
            <div className={styles['company-info']}>
              <h3 className="text-xl font-bold mb-6">スエナミ工業株式会社</h3>
              <div>
                <p><strong>代表取締役：</strong>末次明</p>
                <p><strong>所在地：</strong>岐阜県関市側島286番地</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
