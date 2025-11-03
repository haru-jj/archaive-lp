import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: 'https://archaive.jp',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://archaive.jp/apply',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://archaive.jp/download',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://archaive.jp/news',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://archaive.jp/news/ai-agent-release',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://archaive.jp/news/archaive-2-1-release',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://archaive.jp/news/logistics-newspaper',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://archaive.jp/news/industrial-newspaper',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://archaive.jp/news/presentation-achievement',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://archaive.jp/case',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://archaive.jp/case/crosstech',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://archaive.jp/case/amc',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://archaive.jp/case/suenami',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
