import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

const article = {
  title: '日本物流新聞で取り上げられました',
  subtitle: '',
  description:
    '製造業向け図面管理プロダクト「ARCHAIVE」が日本物流新聞に掲載され、京都ビジネス交流フェアでの注目企業として紹介されました。',
  url: 'https://archaive.net/news/logistics-newspaper',
  publishDate: '2025-03-05',
  image: 'https://archaive.net/images/nihon_butsuryu_shinbun_1.png',
};

export const metadata: Metadata = {
  title: `${article.title}｜ARCHAIVEニュース`,
  description: article.description,
  keywords: ['日本物流新聞', 'メディア掲載', 'ARCHAIVE', '製造業DX'],
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
        width: 1024,
        height: 576,
        alt: '日本物流新聞に掲載されたARCHAIVEの記事',
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

export default function LogisticsNewspaperNews() {
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
        name: 'お知らせ',
        item: 'https://archaive.net/news',
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
            <p className="text-[#888] text-sm mb-6">2025/3/5</p>
            <div className="mt-6 mb-12">
              <h1 className="text-2xl md:text-3xl font-bold leading-relaxed text-gray-900">{article.title}</h1>
            </div>

            <div className="bg-white p-8 sm:p-12 shadow-lg rounded-lg h-fit space-y-10">
              <div className="space-y-6 text-base leading-7 text-gray-700">
                <p>弊社の製造業向け図面管理プロダクトである「ARCHAIVE」について、日本物流新聞で取り上げられました。</p>
                <p>
                  2/25日付け 日本物流新聞<br />
                  <strong>京都ビジネス交流フェア 京大発ベンチャーなど多彩な出展者</strong>
                </p>
                <p>
                  記事は以下よりご覧いただけます：
                  <br />
                  <a
                    href="https://www.nb-shinbun.co.jp/"
                    className="text-[#37B7C4] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.nb-shinbun.co.jp/
                  </a>
                </p>
                <p>
                  ARCHAIVEについては
                  <Link href="/" className="text-[#37B7C4] hover:underline">
                    こちら
                  </Link>
                  をご覧ください。
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src="/images/nihon_butsuryu_shinbun_1.png"
                  alt="日本物流新聞に掲載されたARCHAIVEの記事紙面"
                  className="w-full max-w-xl h-auto rounded-md shadow-md"
                />
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
