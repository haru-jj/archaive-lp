import type { Article, Cluster } from '@/lib/guide';

// 構造化データ(F6): Article / FAQPage / BreadcrumbList。既存ページの JSON-LD 出力パターンに準拠。
const SITE = 'https://archaive.net';

export default function GuideJsonLd({
  article,
  cluster,
}: {
  article: Article;
  cluster: Cluster | null;
}) {
  const url = `${SITE}/guide/${article.slug}`;
  const published = article.updated
    ? `${article.updated}T00:00:00+09:00`
    : undefined;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.description,
    inLanguage: 'ja-JP',
    ...(published ? { datePublished: published, dateModified: published } : {}),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: 'ARCHAIVE' },
    publisher: {
      '@type': 'Organization',
      name: 'ARCHAIVE',
      logo: { '@type': 'ImageObject', url: `${SITE}/svg/logo-text.svg` },
    },
  };

  const breadcrumbItems = [
    { name: 'ガイド', item: `${SITE}/guide` },
    ...(cluster ? [{ name: cluster.name, item: `${SITE}/guide#${cluster.id}` }] : []),
    { name: article.title, item: url },
  ];
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: b.item,
    })),
  };

  const faqJsonLd =
    article.faq && article.faq.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faq.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  );
}
