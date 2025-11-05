import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

const article = {
  title:
    '業界初、「探す」から「話す」へ。ARCHAIVE、製造業AIエージェント「チャット型データ検索機能」をリリース',
  subtitle: '',
  description:
    'ARCHAIVEが社内データを会話形式で活用できる製造業向けAIエージェントをリリース。図面検索や見積作成を対話で実現し、属人化を解消します。',
  url: 'https://archaive.jp/news/ai-agent-release',
  publishDate: '2025-07-28',
  image: 'https://archaive.jp/news/142139-11-5216d3335c660b5c6b7e0ceaae4f56d0-2068x1160.jpeg',
};

export const metadata: Metadata = {
  title: `${article.title}｜ARCHAIVEニュース`,
  description: article.description,
  keywords: ['AIエージェント', 'チャット型検索', '製造業DX', 'ARCHAIVEニュース'],
  alternates: {
    canonical: article.url,
  },
  openGraph: {
    title: article.title,
    description: article.description,
    url: article.url,
    type: 'article',
    publishedTime: `${article.publishDate}T00:00:00+09:00`,
    images: [
      {
        url: article.image,
        width: 2068,
        height: 1160,
        alt: 'AIエージェント機能のリリース告知',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: article.title,
    description: article.description,
    images: [article.image],
  },
};

export default function AiAgentReleaseNews() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.description,
    datePublished: `${article.publishDate}T00:00:00+09:00`,
    dateModified: `${article.publishDate}T00:00:00+09:00`,
    mainEntityOfPage: article.url,
    image: [article.image],
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
        name: 'お知らせ',
        item: 'https://archaive.jp/news',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: article.url,
      },
    ],
  };

  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

        <div className="bg-[#37B7C4] text-white text-center py-12">
          <p className="m-0 text-5xl font-bold">NEWS</p>
          <p className="m-0 text-2xl">お知らせ</p>
        </div>

        <div className="bg-[#f4f4f4] py-20 flex justify-center min-h-screen">
          <div className="w-[70%] max-w-none mx-auto">
            <p className="text-[#888] text-sm mb-6">2025/7/28</p>
            <div className="mt-6 mb-12">
              <h1 className="text-2xl md:text-3xl font-bold leading-relaxed text-gray-900">{article.title}</h1>
            </div>

            <div className="bg-white p-8 sm:p-12 shadow-lg rounded-lg h-fit space-y-10">
              <div className="flex justify-center">
                <img
                  src="/news/142139-11-5216d3335c660b5c6b7e0ceaae4f56d0-2068x1160.jpeg"
                  alt="ARCHAIVEのAIエージェント機能のリリースイメージ"
                  className="w-full max-w-3xl h-auto rounded-md shadow-md"
                />
              </div>

              <div className="space-y-6 text-base leading-7 text-gray-700">
                <p>
                  業界初、「探す」から「話す」へ。ARCHAIVE、製造業AIエージェント「チャット型データ検索機能」をリリース。AIが膨大な社内データから必要な情報を瞬時にピックアップ。*1
                </p>
                <p>
                  〜2D図面自動見積もり、図面検索、過去のトラブル事例も、話しかけるだけで。業務の属人化を解消し、組織全体の生産性を飛躍的に向上〜
                </p>
                <p className="text-sm text-gray-500">
                  *1 STARUP社調べ　2025年7月　図面管理・検索関連サービス約30社
                </p>
                <p>
                  株式会社STAR UPは、図面データ活用クラウド「ARCHAIVE（アーカイブ）」において、社内に蓄積された膨大な情報の中から、必要な答えを会話形式で瞬時に引き出すことができる「AIエージェント」を、2025年7月28日より提供開始することをお知らせします。今回のリリースでは、見積もり支援機能がメインとなっており、近日全ての機能を提供予定です。
                </p>
                <p>
                  「あの見積もり、どこだっけ？」「このトラブル、前にもあったはず…」といった日常的な情報検索の非効率や、ベテラン社員の頭の中にしかないノウハウの属人化は、多くの企業の成長を妨げる大きな課題でした。
                </p>
                <p>
                  リリースする「AIエージェント」は、画面右下のボタンからいつでも起動でき、まるで社内のことを知り尽くした専門家に質問するように、自然な言葉で対話するだけで、2D図面からの自動見積もり、図面の検索、過去のトラブルシューティングなど、あらゆる社内情報を活用した業務を可能にする高精度なアシスタント機能です。今回のリリースでは自動見積もり機能を搭載いたします。順次、検索機能、資料要約機能、トラブルシューティング機能などを実装してまいります。
                </p>

                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#37B7C4] pl-3">開発の背景</h2>
                  <p>
                    労働人口の減少と働き方改革の推進により、企業にとって「生産性の向上」は喫緊の経営課題となっています。しかし、多くの現場では、ファイルサーバーやチャットツール、過去のメールなどに情報が散在し、従業員は本来注力すべき業務時間の多くを「情報を探す」という作業に費やしているのが実情です。
                  </p>
                  <p>
                    また、特定の従業員しか知らない業務知識や過去の経緯といった「暗黙知」が継承されない「業務の属人化」は、業務品質の低下や、新人・若手社員の育成コスト増大の要因となっています。
                  </p>
                  <p>
                    当社は、これらの課題をテクノロジーの力で解決すべく、社内データに特化して学習し、対話を通じて誰もが会社の「知」にアクセスできるAIエージェントを開発いたしました。社内全体のナレッジを統合し、必要なときに必要な情報を瞬時に提供することで、人とAIが補完し合う新しい仕事のあり方を提案します。
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#37B7C4] pl-3">
                    新機能「AIチャット型データ検索」の概要
                  </h2>
                  <p>
                    「AIチャット型データ検索」機能は、いつでも画面の右下から呼び出せる、貴社専属のAIエージェントです。自然言語での対話を通じて、以下の業務をはじめとする様々なタスクを支援します。
                  </p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-800">高精度な社内情報検索</h3>
                      <p>
                        「〇〇社向けの△△に関する図面を探して」「去年5月に発生した不良品のトラブル事例における原因と対策を教えて」と話しかけるだけで、AIが社内のあらゆるデータを横断的に検索し、最適な答えを提示します。
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-800">ドキュメント作成支援</h3>
                      <p>
                        「過去のA社向けの見積もりを参考に、B社向けの新しい見積もり案を作って」といった指示で、精度の高い見積書や報告書のドラフトを瞬時に作成。ドキュメント作成業務を劇的に効率化します。
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-800">2D図面自動見積もり支援</h3>
                      <p>
                        「この図面の部品を拾い出して、材質と加工費を含めた概算見積もりを作って」といった指示で、AIが図面を瞬時に解析し過去データに基づいた見積もり案を自動作成。数時間かかっていた作業を数分に短縮し、迅速な顧客対応を実現します。
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#37B7C4] pl-3">具体的な利用シーン</h2>
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-800">営業担当者</h3>
                    <p>
                      商談の準備中に、その場で図面をアップロードし、「この図面の見積もりを行って」「過去の見積もり記録を探してきて」と指示。AIが即座に要点をまとめ、提案の質とスピードを高めます。
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-800">設計担当者</h3>
                    <p>
                      新しい製品の設計時に、「この部品を使った過去の図面と、その際の注意点を教えて」と質問。AIが関連図面と過去の仕様書を提示し、手戻りのない効率的な設計をサポートします。
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-800">製造担当者</h3>
                    <p>
                      新規製品を加工する際に、「この製品を作成する際の注意点を、過去のトラブルを参考に類推して」とAIに質問。AIが過去の対応履歴から最も有効な解決策を提示し、迅速で的確な加工の支援を実現します。
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#37B7C4] pl-3">今後の展望</h2>
                  <p>
                    社内に蓄積された情報は、単なるデータの集合体ではなく、企業の歩みそのものです。今回の機能は、その「知」の集積に歩み寄る、最初のステップに過ぎません。
                  </p>
                  <p>
                    私たちは、PLMやERPといったシステムの構築を通じ、製造業における情報の連なり、その複雑さを深く理解してきました。だからこそ、データ活用のための基盤構築や一社一社様の現場に深く入り込み、より本質的な価値創造を見据えています。
                  </p>
                  <p>
                    引き続き、製造業の核心に寄り添いながら、テクノロジーを用いて「知」の可能性を最大限に引き出し、業界の新たな未来を共に創造してまいります。
                  </p>
                </section>

                <p>
                  ARCHAIVEについては
                  <Link href="/" className="text-[#37B7C4] hover:underline">
                    こちら
                  </Link>
                  をご覧ください。
                </p>
              </div>
            </div>

            <div className="mt-20 text-center">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#37B7C4] text-[#37B7C4] rounded-lg font-bold hover:bg-[#37B7C4] hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                お知らせ一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
