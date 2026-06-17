import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Header, Footer } from '@/components/layout';
import {
  getArticleBySlug,
  getArticleSlugs,
  getClusterForArticle,
  getRelatedArticles,
  getSpokes,
} from '@/lib/guide';
import PillarArticle from '@/components/guide/PillarArticle';
import SpokeArticle from '@/components/guide/SpokeArticle';
import GuideJsonLd from '@/components/guide/GuideJsonLd';

import '../guide.css';

const SITE = 'https://archaive.net';

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'ガイド｜ARCHAIVE' };
  const url = `${SITE}/guide/${article.slug}`;
  // title は一般語ベース（記事 title をそのまま）
  return {
    title: `${article.title}｜ARCHAIVE ガイド`,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: article.title,
      description: article.description,
    },
  };
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const cluster = getClusterForArticle(article);
  const related = getRelatedArticles(article);

  return (
    <div className="font-noto-sans-jp">
      <Header />
      <GuideJsonLd article={article} cluster={cluster} />
      <main className="pt-16 sm:pt-24">
        <div className="guide-root">
          {article.type === 'pillar' ? (
            <PillarArticle
              article={article}
              cluster={cluster}
              related={related}
              spokes={cluster ? getSpokes(cluster) : []}
            />
          ) : (
            <SpokeArticle article={article} cluster={cluster} related={related} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
