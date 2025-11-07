import { MetadataRoute } from 'next';

const staticPages = [
  {
    url: 'https://archaive.net',
    lastModified: new Date('2025-10-01'),
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    url: 'https://archaive.net/apply',
    lastModified: new Date('2025-10-01'),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: 'https://archaive.net/download',
    lastModified: new Date('2025-10-01'),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: 'https://archaive.net/case',
    lastModified: new Date('2025-10-15'),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: 'https://archaive.net/case/crosstech',
    lastModified: new Date('2025-10-15'),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: 'https://archaive.net/case/amc',
    lastModified: new Date('2025-10-15'),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: 'https://archaive.net/case/suenami',
    lastModified: new Date('2025-10-15'),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
];

const newsPages = [
  {
    url: 'https://archaive.net/news',
    lastModified: new Date('2025-10-30'),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: 'https://archaive.net/news/tokyo-project-adoption',
    lastModified: new Date('2025-10-30'),
    changeFrequency: 'monthly',
    priority: 0.75,
  },
  {
    url: 'https://archaive.net/news/archaive-2-1-release',
    lastModified: new Date('2025-09-08'),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: 'https://archaive.net/news/ai-agent-release',
    lastModified: new Date('2025-07-28'),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: 'https://archaive.net/news/logistics-newspaper',
    lastModified: new Date('2025-03-05'),
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  {
    url: 'https://archaive.net/news/industrial-newspaper',
    lastModified: new Date('2025-03-01'),
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  {
    url: 'https://archaive.net/news/presentation-achievement',
    lastModified: new Date('2024-12-21'),
    changeFrequency: 'yearly',
    priority: 0.6,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticPages, ...newsPages];
}
