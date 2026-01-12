import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import styles from './page.module.css';

const caseData = {
  title: '株式会社クロステック様インタビュー｜ARCHAIVE導入事例',
  summary:
    '図面検索と見積業務の効率化に取り組む株式会社クロステック様に、ARCHAIVE導入の背景と効果を伺いました。',
  url: 'https://archaive.net/case/crosstech',
  image: 'https://archaive.net/images/matsuda.png',
};

const reviewData = {
  ratingValue: '5',
  author: '松田忠明',
  jobTitle: '代表取締役',
  company: '株式会社クロステック',
  reviewBody:
    '図面検索と見積業務の属人化を解消し、案件管理を一気通貫で効率化。見積・納品書・請求業務まで大幅に時間を削減し、1案件あたり40%の機会損失を防いだ事例です。',
};

const faqEntries = [
  {
    question: 'ARCHAIVE導入前の課題は何でしたか？',
    answer:
      '図面や案件の管理が属人化し、Excelを使った調査に時間がかかっていました。抱き合わせ案件で安めの見積もりを出した差額も把握できず、損失が生まれていたと語られています。',
  },
  {
    question: '導入後に得られた効果は？',
    answer:
      '図面起点の案件管理で事務・現場の連携がスムーズになり、誰でも過去案件を参照できる体制を構築。作業員も加工法や外注先をすぐ確認でき、技術伝承も容易になりました。',
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
  keywords: ['導入事例', 'クロステック', '製造業DX', 'ARCHAIVE'],
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
        alt: '株式会社クロステック様インタビューの様子',
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

export default function CrosstechCase() {
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
      url: 'https://archaive.net/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ARCHAIVE',
      url: 'https://archaive.net/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://archaive.net/images/og-image.png',
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
        item: 'https://archaive.net/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '導入事例',
        item: 'https://archaive.net/case',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '株式会社クロステック様インタビュー',
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
            <nav aria-label="breadcrumb" className="hidden sm:flex text-sm text-gray-500 mb-4">
              <ol className="flex gap-2">
                <li><Link href="/" className="hover:text-[#37B7C4]">トップ</Link></li>
                <li>/</li>
                <li><Link href="/case" className="hover:text-[#37B7C4]">導入事例</Link></li>
                <li>/</li>
                <li className="text-gray-900">{caseData.title}</li>
              </ol>
            </nav>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">株式会社クロステック/松田忠明様 ✖️ STAR UP/吉川岳宏</h1>
            <hr />
            <div className="relative w-full h-64 md:h-[420px] lg:h-[520px] mb-6 mx-auto">
              <Image
                src="/images/matsuda.png"
                alt="株式会社クロステック松田忠明様のポートレート"
                fill
                className="object-cover"
              />
            </div>
            
            <hr />
            
            <h3 className={styles['section-title']}>東大阪の町工場と京大発スタートアップが協働する理由</h3>
            <hr />
            
            <div className="relative w-full h-64 md:h-[420px] lg:h-[520px] mb-6 mx-auto">
              <Image
                src="/images/matsuda_2.jpg"
                alt="クロステックとSTAR UPが協働する様子を写した写真"
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>ー(吉川)STAR UPとの最初の話は受託開発でしたよね。</p>
              <p>(松田様、以下敬称略)そうでしたね。製造業の様々な部分でAIを活用したいのですが、どのようなことが困ってますか、という話を頂きました。そこで、多くのところで図面を探すのに困ってるから、AIで解決できたらいいな、と早速意気投合しましたよね。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(吉川)それが今のARCHAIVEにつながっているわけですね。</p>
              <p>(松田)そうそう、話が早かったですよね。まさか初対面であんなに多くのビジョンを語ってくれるとは思いませんでした。面白いものを作りたいという強い考えが両者にあったので、話がとても速く進んだことを覚えています。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(吉川)確かにたくさん話させていただきました。その時はSTAR UPにどういう印象を持たれていましたか？</p>
              <p>(松田)人を疑わない人たちだと思いました。私たちは基本自分自身の感性に従って動くんですけど、信頼できるなと感じましたね。<br />
              また、社内での上下の立場の区別が良い意味で少ないと感じました。緒方くん(STAR UP代表取締役)だけでなく、個性的な他のメンバーが面白いと思ったことをみんなで、現場でやっている。そこで多様性が生まれると思います。その多様性っていうところに、私たちの信念とのシンパシーを感じたんですよね。<br />
              というのも、クロステックのロゴのXが浮き出て見えるようになっているのですが、これはスクランブル交差点のイメージなんです。いろんな人が交わっていて、それぞれが違うからこそ、いろいろなものが生まれるし、いろいろなものを組み合わせて、いろいろなことができたらいいということです。そんな多様性を認める私たちの信念とSTAR UPのみなさんの性格が似ているなと。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(吉川)そのクロステック様の信念とSTAR UPのスタッフのみんなで現場から生み出したいという想いがすごくフィットしていたのですね。元々相性のいい組み合わせだったのかもしれません。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className={styles['section-title']}>ARCHAIVE導入前の課題と導入後の効果</h3>
            <hr />
            
            <div className="relative w-full h-64 md:h-[420px] lg:h-[520px] mb-6 mx-auto">
              <Image
                src="/images/matsuda_3.jpg"
                alt="ARCHAIVE導入前の課題について語る松田様"
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>ー(吉川)ARCHAIVEを導入する前の課題は何でしたか？</p>
              <p>(松田)製造の仕事を長く続けて、ある程度発展してくると、図面や案件の管理等が俗人化してきます。すると他の人が見積もり等を見てもどの案件のものかわからないし、加工法もわからない。初めはエクセルで管理していたんですけど、それを調べたりするだけでも時間がかかっていました。さらに、他の案件との抱き合わせなどの理由で安めに見積もりを出していたために、差額が生まれてしまっていました。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(吉川)導入後は、どのような効果を実感されましたか？</p>
              <p>(松田)見積・納品書作成・請求業務が図面起点の案件管理により大幅に削減しました。多くの情報をすぐに確認できるため、事務員でも簡単に図面を調べられます。事務員と作業員の業務を分けることができるので、業務全体の効率化にもつながりますよね。作業員も加工法や外注先などを確認して、簡単に作業をすることができます。ノウハウを記載しておけば技術の伝承もすぐにできます。<br />
              また、安めに見積もりを出していたために生まれた差額に関しても先方に的確に返答ができるようになり、1案件あたり40%の機会損失を防いだケースもありました。統合的な案件管理により、持続可能な生産体制を構築できています。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className={styles['section-title']}>製造業へのイメージ</h3>
            <hr />
            
            <div className="relative w-full h-64 md:h-[420px] lg:h-[520px] mb-6 mx-auto">
              <Image
                src="/images/matsuda_4.jpg"
                alt="製造業の未来について語る松田様のインタビューシーン"
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>ー(吉川)製造業にはどのようなイメージを抱かれていますか？</p>
              <p>(松田)中間層（40代・50代の技術者）が減少してきているので、何処に依頼すれば良いか分からない状況があったりしますね。近年では、年金をもらっている高齢者が低価格で仕事を受けていたり、スピードを売りにした海外への発注が高価格であったりと、価格の問題も起きていると感じます。<br />
              あとは、DXが進んでいるとは言っても紙媒体が多いです。特に町工場の場合お互いに共存して生きて、互いに助け合ってきているから、1社だけにDXのような変化があっても効果が薄い。みんながある程度理解して、みんなが成長していかないと全体が上がってこないという感覚があります。じわじわっと右肩下がりになってきて、だんだん問題が顕在化してきている時代なのかなっていうのはすごい思いますね。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(吉川)全体の成長が大切なのですね。現場に寄り添い、次に地域に寄り添う。それを東海北陸、関西と繰り返していくとそれが日本に寄り添っていることになる、いわばボトムアップの精神を大切にしようと思います。</p>
              <p>(松田)STAR UPさんは今はソフトウェアAIの会社ですけど、次は現場のハードウェアだったりとかに踏み出していくのか。スマートファクトリーだったりっていうのが今すごい言われてますけど、それはそれとして、京都、東大阪発でやっていける、日本のスタートアップとしてやっていって欲しいなと思います。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className={styles['section-title']}>STAR UPの現状の印象と今後への期待</h3>
            <hr />
            
            <div className="relative w-full h-64 md:h-[420px] lg:h-[520px] mb-6 mx-auto">
              <Image
                src="/images/matsuda_5.jpg"
                alt="STAR UPへの期待を語る松田様のインタビューシーン"
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>ー(吉川)現在は、STAR UPにはどのような印象を抱かれていますか？</p>
              <p>(松田)環境や周囲への決めつけが少ないことがいいなと思います。製造業そのものへの決めつけだけでなく、周囲の人間の印象や性格の決めつけも少ないと感じることが多くありますね。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(吉川)それがあるから、いわばほぼゼロだった製造業の経験を短時間でキャッチアップしていけたのかもしれませんね。それは確かに「決めつけないこと」と「現場理解」、「現場に対する思い」が大きいかもしれません。</p>
              <p>(松田)そうですね。対応の面でも、STAR UPのメンバーはこちら側の質問に対して真摯に答えてくれます。こちらの言ったことを理解して、それに対して適切な答えを解決してくれるので、とても安心して利用できています。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(吉川)ありがとうございます。最後に、今後のSTAR UPへの期待を教えてください。</p>
              <p>(松田)もっといろんなことを楽しくして欲しいなと思います。今だと、ARCHAIVEを使って時間を作るということは、工場の働いてることを楽しくすることだと思うんですよ。時間を作っていろんなことを覚えて、自分のスキルが上がっていけば、仕事してるのも楽しくなる。訳がわからないまま仕事してるよりも、理由がわかって仕事してる方が絶対楽しいし、自分たちが成長してる実感も出てくるし、そのためにやっぱり時間というのがすごく必要だと思います。</p>
            </div>

            <div className="mb-12">
              <p className={styles['interview-question']}>(吉川)なるほど、もっと色々な新しいことに踏み出していこうと思います。そこに絶対ITは存在するし、それをシステムに落とし込む人間が必要になってくるので、そんな手伝いがSTAR UPとしてできたらなと。</p>
              <p>(松田)そうですね。今やっていることだけではなくて、これからも見据えて頑張ってほしいなと思います。</p>
            </div>

            <hr />

            {/* 企業情報 */}
            <div className={styles['company-info']}>
              <h3 className="text-xl font-bold mb-6">株式会社クロステック</h3>
              <div>
                <p><strong>代表取締役：</strong>松田忠明</p>
                <p><strong>所在地：</strong>大阪府東大阪市加納4-5-52</p>
                <p className="mt-4">必要とするモノを必要としているヒトへ、ツナグ技術を対話の中から常に追い求め、モノを手にした人が物心一如になるように、自分たちの周りにあるすべてのモノ、ヒトに感謝を忘れずに造るを極める。それを、次世代にツナグ。<br />
                そんな『ヒトとモノをツナグ技術』を追求する集団として、ワイヤー放電加工やコーディネイト等を行っている。</p>
                <p className="mt-2"><strong>会社HP：</strong><a href="https://www.crosstech.osaka/" target="_blank" rel="noopener noreferrer">https://www.crosstech.osaka/</a></p>
              </div>
            </div>
        </div>
      </div>

        <section className="px-4 pb-16 bg-[#37B7C4]">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">他の導入事例もチェック</h2>
            <p className="text-gray-600 mb-6">自社に近しい課題を抱える企業の事例を参考に、導入効果を比較してください。</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedCases
                .filter((item) => item.slug !== 'crosstech')
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
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
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
