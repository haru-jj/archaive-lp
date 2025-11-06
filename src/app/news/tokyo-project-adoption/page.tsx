import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { RelatedArticles } from '@/components/news/RelatedArticles';

const article = {
  title: '株式会社STARUPが提供する図面帳票活用AIデータハブ「ARCHAIVE」が東京都スタートアップ協働プロジェクトに採択',
  subtitle: '〜公共事業DXと建築土木業・製造業のデータ活用を推進〜',
  description:
    'ARCHAIVEが東京都の現場対話型スタートアップ協働プロジェクト（令和7年度第2期）に採択。公共事業DXを推進し、建築土木業・製造業のデータ活用基盤を構築します。',
  url: 'https://archaive.jp/news/tokyo-project-adoption',
  publishDate: '2025-10-30',
  image: 'https://archaive.jp/news/ARCHAIVE_Tokyo.webp',
};

export const metadata: Metadata = {
  title: `${article.title}｜ARCHAIVEニュース`,
  description: `${article.description} ${article.subtitle}`,
  keywords: ['東京都', 'スタートアップ協働プロジェクト', 'ARCHAIVE', '公共事業DX', '製造業DX'],
  alternates: {
    canonical: article.url,
  },
  openGraph: {
    title: `${article.title} ${article.subtitle}`,
    description: article.description,
    url: article.url,
    type: 'article',
    publishedTime: `${article.publishDate}T00:00:00+09:00`,
    images: [
      {
        url: article.image,
        width: 1920,
        height: 1080,
        alt: 'ARCHAIVEと東京都の協働プロジェクト発表イメージ',
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

export default function TokyoProjectAdoptionNews() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    alternativeHeadline: article.subtitle,
    description: article.description,
    datePublished: `${article.publishDate}T00:00:00+09:00`,
    dateModified: `${article.publishDate}T00:00:00+09:00`,
    mainEntityOfPage: article.url,
    image: [
      {
        '@type': 'ImageObject',
        url: article.image,
        caption: '東京都スタートアップ協働プロジェクト採択のビジュアル',
        creditText: 'ARCHAIVE',
      },
    ],
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
        name: `${article.title} ${article.subtitle}`,
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
            <p className="text-[#888] text-sm mb-6">2025/10/30</p>
            <nav aria-label="breadcrumb" className="mb-4 text-sm text-gray-600">
              <ol className="flex gap-2">
                <li><Link href="/" className="hover:text-[#37B7C4]">トップ</Link></li>
                <li>/</li>
                <li><Link href="/news" className="hover:text-[#37B7C4]">お知らせ</Link></li>
                <li>/</li>
                <li className="text-gray-900">{article.title}</li>
              </ol>
            </nav>
            <div className="mt-6 mb-12">
              <h1 className="text-2xl md:text-3xl font-bold leading-relaxed">{article.title}</h1>
              <p className="mt-3 text-base md:text-lg text-[#37B7C4] font-semibold">{article.subtitle}</p>
            </div>
            <div className="bg-white p-8 sm:p-12 shadow-lg rounded-lg h-fit space-y-10">
              <div className="flex justify-center">
                <img
                  src="/news/ARCHAIVE_Tokyo.webp"
                  alt="ARCHAIVEと東京都の協働イメージ"
                  className="w-full max-w-3xl h-auto rounded-md shadow-md"
                />
              </div>

              <div className="space-y-8 text-base leading-7 text-gray-700">
                <section>
                  <p>
                    「テクノロジーで文化を創り、時代を超えて価値を残す。」をビジョンに掲げる株式会社STAR UP（本社：京都府京都市、代表取締役：緒方勇斗、以下：当社）は、このたび東京都が推進する「現場対話型スタートアップ協働プロジェクト」の令和7年度第2期に、当社のAI図面データ管理ハブ「ARCHAIVE」が採択されましたことをお知らせいたします。
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#37B7C4] pl-3 mb-3">採択の背景</h2>
                  <p>
                    東京都中央卸売市場においては、複数ある市場施設の膨大な電子化された図面をクラウドで一元管理し、業務の負荷を軽減することが大きな課題となっています。
                  </p>
                  <p>
                    電子化は一部進んでいるものの、工事の施工順に並んでいないなど、電子図面が一括管理がされていないため、電子化によるメリットを享受できていません。AI技術を用いて一括管理し、共有化を図り、敷地内の施設配置、竣工時期などを一つデータ構造として管理する管理体制の構築が求められています。
                  </p>
                  <p>
                    当社の ARCHAIVE は、これらの課題を解決するために、図面と関連データを一元的に管理し、業務効率化と正確なデータ活用を可能にする仕組みを提供します。その有用性が評価され、今回の採択に至りました。
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#37B7C4] pl-3 mb-3">プロジェクト概要</h2>
                  <p>
                    本プロジェクトでは、東京都中央卸売市場における課題の解決を目指します。施設図面を効率的に管理するため、電子データ・紙で保存されている改修履歴・設備配置・竣工時期などをデジタルで一元管理するシステムを開発・導入いたします。
                  </p>
                  <p>
                    これにより、従来紙で蓄積・管理されていた情報を体系化し、効率的かつ透明性の高い施設管理を実現します。さらに、本システムを公共事業としてのDX促進の事例とし、AI時代における建築土木業・製造業のデータ活用の基盤となるプラットフォームとしてサービス展開を進めてまいります。
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#37B7C4] pl-3 mb-3">当社について</h2>
                  <p>
                    株式会社STAR UPは、様々な業界に対してAIのソリューションを提供しています。また、製造業・建築土木業向けAI図面データ管理ハブARCHAIVEや需要予測サービスSENDAIをはじめ、企業に分散するデータを統合するデータ管理プラットフォームを提供しています。
                  </p>
                  <p>
                    主力プロダクトであるARCHAIVEは、図面や帳票を中心に企業内のデータ資産を統合し、効率的な検索・管理・分析を可能にするAIデータハブです。
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#37B7C4] pl-3 mb-3">今後の展望</h2>
                  <p>
                    今回の採択を通して、公共事業のDXを促進するサービスとして活用いただくとともに、AI時代における建築土木業・製造業のデータ活用のプラットフォームとしてのサービス展開を進めていきます。
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#37B7C4] pl-3 mb-3">会社概要</h2>
                  <ul className="space-y-2">
                    <li>会社名： 株式会社STAR UP</li>
                    <li>所在地： 〒602-8061 京都府京都市上京区甲斐守町97 西陣産業創造會館109</li>
                    <li>代表者： 代表取締役 緒方勇斗</li>
                    <li>設立： 2023年11月30日</li>
                    <li>事業内容： AIを活用した共同開発・新規事業開発、AIプロダクトの開発、製造業・建築土木業向けAI SaaS事業</li>
                    <li>
                      URL：{' '}
                      <a href="https://starup01.jp/" target="_blank" rel="noopener noreferrer" className="text-[#37B7C4] hover:underline">
                        https://starup01.jp/
                      </a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#37B7C4] pl-3 mb-3">本件に関するお問い合わせ</h2>
                  <p>株式会社STAR UP 広報担当：藤井 大悟</p>
                  <p>
                    お問い合わせ：{' '}
                    <a href="mailto:daigo.fujii@starup01.jp" className="text-[#37B7C4] hover:underline">
                      daigo.fujii@starup01.jp
                    </a>
                  </p>
                  <p>
                    詳細：{' '}
                    <a
                      href="https://prtimes.jp/main/html/rd/p/000000014.000142139.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#37B7C4] hover:underline"
                    >
                      https://prtimes.jp/main/html/rd/p/000000014.000142139.html
                    </a>
                  </p>
                </section>
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
      <RelatedArticles currentSlug="tokyo-project-adoption" />
      <Footer />
    </div>
  );
}
