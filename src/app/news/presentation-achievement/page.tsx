import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

const article = {
  title: '登壇実績',
  description:
    'ARCHAIVEを運営する株式会社STAR UPの最新登壇実績を紹介。各種イベントで製造業DXのノウハウを共有しました。',
  url: 'https://archaive.jp/news/presentation-achievement',
  publishDate: '2024-12-21',
  image: 'https://archaive.jp/images/KYOTO%20SMARTCITY%20EXPO.webp',
};

export const metadata: Metadata = {
  title: `${article.title}｜ARCHAIVEニュース`,
  description: article.description,
  keywords: ['登壇実績', 'セミナー', '製造業DX', 'ARCHAIVEイベント'],
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
        alt: 'ARCHAIVEが登壇したイベントの様子',
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

export default function PresentationAchievementNews() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.description,
    datePublished: `${article.publishDate}T00:00:00+09:00`,
    dateModified: `${article.publishDate}T00:00:00+09:00`,
    mainEntityOfPage: article.url,
    image: [
      'https://archaive.jp/images/KYOTO%20SMARTCITY%20EXPO.webp',
      'https://archaive.jp/images/MI-NET%20DXセミナー.webp',
      'https://archaive.jp/images/TRY%20ANGLE%20EHIME.webp',
      'https://archaive.jp/images/岐阜県DX推進コンソーシアム.webp',
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
        {/* News Header */}
        <div className="bg-[#37B7C4] text-white text-center py-12">
          <p className="m-0 text-5xl font-bold">NEWS</p>
          <p className="m-0 text-2xl">お知らせ</p>
        </div>

        {/* News Page */}
        <div className="bg-[#f4f4f4] py-20 flex justify-center min-h-screen">
          <div className="w-[70%] max-w-none mx-auto">
            <p className="text-[#888] text-sm mb-6">2024/12/21</p>
            <h1 className="text-2xl mt-6 mb-12 font-bold">登壇実績</h1>
            <div className="bg-white p-12 shadow-lg rounded-lg h-fit">
            <div className="news-article">
              <p className="text-base leading-6 mb-6">
                株式会社STAR UPのセミナー実績をご紹介いたします。
              </p>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">KYOTO SMARTCITY EXPO</h3>
                <img 
                  src="/images/KYOTO SMARTCITY EXPO.webp" 
                  alt="KYOTO SMARTCITY EXPOの登壇風景" 
                  className="w-64 h-auto mb-6"
                />
                <p className="text-base leading-6">
                  京都市の製造業に対して、DXの必要性や現在の課題点などを伝え、弊社の事例も交えながら現実的なDX手法についてお伝えしました。
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">MI-NET DXセミナー</h3>
                <img 
                  src="/images/MI-NET DXセミナー.webp" 
                  alt="MI-NET DXセミナーでの講演の様子" 
                  className="w-64 h-auto mb-6"
                />
                <p className="text-base leading-6">
                  モノづくりイノベーションネットワーク（MI-Net）様と共同で、20社を超える京都のものづくり企業様に対して、DX化の基礎についてのレクチャーを行いました。現在のAIのトレンドから、組織への導入まで「翌日から動ける」をコンセプトに開催いたしました。
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">TRY ANGLE EHIME</h3>
                <img 
                  src="/images/TRY ANGLE EHIME.webp" 
                  alt="TRY ANGLE EHIMEイベントでの講演" 
                  className="w-64 h-auto mb-6"
                />
                <p className="text-base leading-6">
                  愛媛県の製造業の方々に向けて、DXの事例や移り変わりゆくAI事情に関しての基本知識をお伝えしました。受託の会社に頼るのみでなく、現場にITのできる環境、人材をデザインすることを目標に地域活性化を目指しています。
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">岐阜県DX推進コンソーシアム</h3>
                <img 
                  src="/images/岐阜県DX推進コンソーシアム.webp" 
                  alt="岐阜県DX推進コンソーシアムでのセミナー" 
                  className="w-64 h-auto mb-6"
                />
                <p className="text-base leading-6">
                  デジタル時代を勝ち抜くためのDX。その鍵を握るのが、効果的なデータ活用です。DXを進めたいが何から取り組めばよいか悩んでいる方、さらに効率的に推進したい方に向けて、専門家の解説と事例紹介を通じてDX推進のヒントをご提供します。
                </p>
              </div>
            </div>
            </div>

            {/* 戻るリンク */}
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
