import { MetadataRoute } from 'next';
import { statSync } from 'fs';
import { join } from 'path';
import { getArticleSlugs } from '@/lib/guide';
import { DIAGNOSIS_CONFIGS } from '@/components/guide/diagnosisConfigs';

const pages = [
  { path: '/guide', source: 'src/app/guide/page.tsx', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/', source: 'src/app/page.tsx', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', source: 'src/app/about/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/problem', source: 'src/app/problem/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/features', source: 'src/app/features/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/process', source: 'src/app/process/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/faq', source: 'src/app/faq/page.tsx', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/security', source: 'src/app/security/page.tsx', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/apply', source: 'src/app/apply/page.tsx', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/download', source: 'src/app/download/page.tsx', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/case', source: 'src/app/case/page.tsx', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/case/crosstech', source: 'src/app/case/crosstech/page.tsx', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/case/amc', source: 'src/app/case/amc/page.tsx', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/case/suenami', source: 'src/app/case/suenami/page.tsx', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/news', source: 'src/app/news/page.tsx', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/news/tokyo-project-adoption', source: 'src/app/news/tokyo-project-adoption/page.tsx', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/news/archaive-2-1-release', source: 'src/app/news/archaive-2-1-release/page.tsx', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/news/ai-agent-release', source: 'src/app/news/ai-agent-release/page.tsx', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/news/logistics-newspaper', source: 'src/app/news/logistics-newspaper/page.tsx', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/news/industrial-newspaper', source: 'src/app/news/industrial-newspaper/page.tsx', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/news/presentation-achievement', source: 'src/app/news/presentation-achievement/page.tsx', changeFrequency: 'yearly', priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseDir = process.cwd();
  const getLastModified = (source: string) => {
    try {
      const stat = statSync(join(baseDir, source));
      return stat.mtime.toISOString();
    } catch {
      return new Date().toISOString();
    }
  };
  const baseUrl = 'https://archaive.net';

  const staticEntries = pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: getLastModified(page.source),
    changeFrequency: page.changeFrequency as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: page.priority,
  }));

  // ガイド記事は src/content/guide の .md から自動列挙（量産しても sitemap 手編集が不要）
  const guideEntries: MetadataRoute.Sitemap = getArticleSlugs().map((slug) => ({
    url: `${baseUrl}/guide/${slug}`,
    lastModified: getLastModified(`src/content/guide/${slug}.md`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 単独設置の診断ツール
  const toolEntries: MetadataRoute.Sitemap = Object.keys(DIAGNOSIS_CONFIGS).map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [...staticEntries, ...guideEntries, ...toolEntries];
}
