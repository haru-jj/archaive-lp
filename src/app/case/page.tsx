import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

const cases = [
  {
    slug: 'crosstech',
    company: '株式会社クロステック',
    role: '代表取締役 松田忠明 様',
    summary:
      '図面検索と見積業務の属人化を解消し、案件管理を一気通貫で効率化。導入後は事務・現場の連携がスムーズになり、案件ごとの損失も抑制。',
    image: '/images/matsuda.png',
  },
  {
    slug: 'amc',
    company: '株式会社エイ・エム・シィ',
    role: '副工場長 中西弘栄 様',
    summary:
      '紙図面の検索やExcel管理にかかっていた時間を削減。クリック主体の検索で非IT人材でも使いこなせる管理体制を構築。',
    image: '/images/nakanishi.jpg',
  },
  {
    slug: 'suenami',
    company: 'スエナミ工業株式会社',
    role: '営業 兼 開発 横山智一 様',
    summary:
      '大量の図面見積をAIが支援。コパイロット機能で過去の実績と照合しながら、見積りをスピードアップ。',
    image: '/images/yokoyama_1.png',
  },
];

export const metadata: Metadata = {
  title: '導入事例一覧｜ARCHAIVEお客様インタビュー',
  description:
    'ARCHAIVEを活用する製造業各社の導入背景や効果をまとめた事例集。図面検索やAI見積の定着方法をご紹介します。',
  keywords: ['製造業導入事例', 'AI見積事例', '図面管理成功事例', '製造業DXインタビュー'],
  alternates: {
    canonical: 'https://archaive.net/case',
  },
  openGraph: {
    title: '導入事例一覧｜ARCHAIVEお客様インタビュー',
    description:
      '製造業のお客様がARCHAIVEで図面管理・見積業務をどう変革したのか、導入事例をまとめました。',
    url: 'https://archaive.net/case',
    images: [
      {
        url: 'https://archaive.net/images/ui_display.jpg',
        width: 1200,
        height: 630,
        alt: 'ARCHAIVE導入事例一覧のOGイメージ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '導入事例一覧｜ARCHAIVEお客様インタビュー',
    description: 'ARCHAIVE導入企業の声をまとめた事例集です。',
    images: ['https://archaive.net/images/ui_display.jpg'],
  },
};

export default function CaseIndexPage() {
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
    ],
  };

  const listJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: cases.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${item.company} ${item.role}`,
      url: `https://archaive.net/case/${item.slug}`,
    })),
  };

  return (
    <div className="font-noto-sans-jp bg-gray-50 min-h-screen">
      <Header />
      <main className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }} />

        <section className="bg-[#37B7C4] text-white py-10 sm:py-14">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">導入事例一覧</h1>
            <p className="text-base sm:text-lg text-white/90">
              製造業各社がARCHAIVEを活用して図面検索・見積業務をどのように変革したのかをご紹介します。
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 max-w-5xl py-10 sm:py-16">
          <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-6">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-[#37B7C4]">トップ</Link></li>
              <li>/</li>
              <li className="text-gray-900">導入事例</li>
            </ol>
          </nav>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {cases.map((item) => (
              <article
                key={item.slug}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col"
              >
                <div className="relative h-56">
                  <Image
                    src={item.image}
                    alt={`${item.company} ${item.role}のインタビュー写真`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-gray-800 mb-1">{item.company}</h2>
                  <p className="text-sm text-gray-500 mb-4">{item.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.summary}</p>
                  <div className="mt-6">
                    <Link
                      href={`/case/${item.slug}`}
                      className="inline-flex items-center gap-2 text-[#37B7C4] font-bold hover:underline"
                    >
                      事例を詳しく見る
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
