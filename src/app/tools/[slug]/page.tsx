import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Header, Footer } from '@/components/layout';
import DiagnosisTool from '@/components/guide/DiagnosisTool';
import { DIAGNOSIS_CONFIGS } from '@/components/guide/diagnosisConfigs';

import '../../guide/guide.css';

const SITE = 'https://archaive.net';

export function generateStaticParams() {
  return Object.keys(DIAGNOSIS_CONFIGS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = DIAGNOSIS_CONFIGS[slug];
  if (!config) return { title: '診断ツール｜ARCHAIVE' };
  return {
    title: `${config.heading}｜ARCHAIVE`,
    description: config.sub,
    alternates: { canonical: `${SITE}/tools/${slug}` },
    openGraph: {
      title: config.heading,
      description: config.sub,
      url: `${SITE}/tools/${slug}`,
      type: 'website',
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = DIAGNOSIS_CONFIGS[slug];
  if (!config) notFound();

  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-16 sm:pt-24">
        <div className="guide-root">
          <div className="guide-wrap">
            <div className="guide-crumb">
              <Link href="/guide">ガイド</Link> / <b>診断ツール</b>
            </div>
            <h1 className="guide-title">{config.heading}</h1>
            <p className="guide-lead">{config.sub}</p>
            <div className="guide-block" style={{ marginTop: 24 }}>
              <DiagnosisTool configId={slug} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
