import type { Metadata } from 'next';

import { Header, Footer } from '@/components/layout';
import { getClusters, getArticleBySlug } from '@/lib/guide';
import GuideGlossary, {
  type GlossCategory,
} from '@/components/guide/GuideGlossary';

import './guide.css';
import './glossary.css';

const SITE = 'https://archaive.net';

// カテゴリ（クラスター）ごとの英字ラベル
const EN: Record<string, string> = {
  'drawing-management': 'DRAWING',
  plm: 'PLM / BOM',
  'ai-search': 'SEARCH / AI',
  construction: 'CONSTRUCTION',
  security: 'SECURITY',
  integration: 'INTEGRATION',
};

export const metadata: Metadata = {
  title: '製造業DX用語集｜ARCHAIVE',
  description:
    '図面管理・PLM・BOM・類似検索・生成AIなど、製造業DXでよく使う用語と選び方を、辞書のように引ける用語集です。',
  alternates: { canonical: `${SITE}/guide` },
  openGraph: {
    title: '製造業DX用語集｜ARCHAIVE',
    description:
      '図面管理を起点に、製造業DXの用語と選び方を体系立てて解説。検索と生成AIの両方で参照される構造化ガイド。',
    url: `${SITE}/guide`,
    type: 'website',
  },
};

function buildCategories(): GlossCategory[] {
  const clusters = Object.values(getClusters());
  return clusters.map((c, i) => {
    const heroes = c.pillars.map((slug) => {
      const a = getArticleBySlug(slug);
      return {
        title: a?.title ?? slug,
        def: a?.description ?? '',
        slug,
        exists: Boolean(a),
      };
    });
    const groups = c.spokeGroups.map((g) => ({
      name: g.label,
      terms: g.slugs.map((slug) => {
        const a = getArticleBySlug(slug);
        return { title: a?.title ?? slug, slug, exists: Boolean(a) };
      }),
    }));
    return {
      id: c.id,
      label: c.name,
      en: EN[c.id] ?? '',
      num: String(i + 1).padStart(2, '0'),
      heroes,
      groups,
    };
  });
}

export default function GuideListPage() {
  const categories = buildCategories();
  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-16 sm:pt-24">
        <GuideGlossary categories={categories} />
      </main>
      <Footer />
    </div>
  );
}
