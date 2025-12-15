import { MetadataRoute } from 'next';

const pages = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/apply', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/download', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/case', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/case/crosstech', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/case/amc', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/case/suenami', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/news', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/news/tokyo-project-adoption', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/news/archaive-2-1-release', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/news/ai-agent-release', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/news/logistics-newspaper', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/news/industrial-newspaper', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/news/presentation-achievement', changeFrequency: 'yearly', priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();
  const baseUrl = 'https://archaive.net';

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: page.priority,
  }));
}
