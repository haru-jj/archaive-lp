import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

const article = {
  title: '日刊工業新聞で取り上げられました',
  subtitle: '',
  description:
    '製造業向け図面管理プロダクト「ARCHAIVE」が日刊工業新聞に掲載され、製造業DX支援の取り組みが紹介されました。',
  url: 'https://archaive.jp/news/industrial-newspaper',
  publishDate: '2025-03-01',
  image: 'https://archaive.jp/images/og-image.png',
};

export const metadata: Metadata = {
  title: `${article.title}｜ARCHAIVEニュース`,
  description: article.description,
  keywords: ['日刊工業新聞', 'メディア掲載', '製造業DX', 'ARCHAIVE'],
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
        width: 1200,
        height: 630,
        alt: 'ARCHAIVEのロゴとメディア掲載情報',
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

export default function IndustrialNewspaperNews() {
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
            <p className="text-[#888] text-sm mb-6">2025/3/1</p>
            <div className="mt-6 mb-12">
              <h1 className="text-2xl md:text-3xl font-bold leading-relaxed text-gray-900">{article.title}</h1>
            </div>

            <div className="bg-white p-8 sm:p-12 shadow-lg rounded-lg h-fit space-y-10">
              <div className="space-y-6 text-base leading-7 text-gray-700">
                <p>弊社の製造業向け図面管理プロダクトである「ARCHAIVE」について、日刊工業新聞で取り上げられました。</p>
                <p>
                  2/18日付け 日刊工業新聞<br />
                  <strong>関西新興、製造業のDX支援　中小の導入遅れ改善に商機</strong>
                </p>
                <p>
                  記事本文はこちら：
                  <br />
                  <a
                    href="https://www.nikkan.co.jp/articles/view/00740261"
                    className="text-[#37B7C4] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.nikkan.co.jp/articles/view/00740261
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

