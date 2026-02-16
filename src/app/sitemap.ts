import { MetadataRoute } from 'next';
import { statSync } from 'fs';
import { join } from 'path';

const pages = [
  { path: '/', source: 'src/app/page.tsx', changeFrequency: 'weekly', priority: 1 },
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

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: getLastModified(page.source),
    changeFrequency: page.changeFrequency as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: page.priority,
  }));
}
