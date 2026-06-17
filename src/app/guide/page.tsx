import type { Metadata } from 'next';
import Link from 'next/link';

import { Header, Footer } from '@/components/layout';
import { getClusters, getArticleBySlug } from '@/lib/guide';

import './guide.css';

const SITE = 'https://archaive.net';

export const metadata: Metadata = {
  title: '製造業DXガイド｜ARCHAIVE',
  description:
    '図面管理・PLM・AI-OCRなど、製造業DXの実務に効く用語と判断基準を体系的に解説するガイドです。',
  alternates: { canonical: `${SITE}/guide` },
  openGraph: {
    title: '製造業DXガイド｜ARCHAIVE',
    description:
      '図面管理を中心に、製造業DXの用語と選び方を体系立てて解説。検索と生成AIの両方で参照される構造化ガイド。',
    url: `${SITE}/guide`,
    type: 'website',
  },
};

export default function GuideListPage() {
  const clusters = Object.values(getClusters());

  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-16 sm:pt-24">
        <div className="guide-root">
          <div className="guide-wrap">
            <div className="guide-crumb">
              <Link href="/">ホーム</Link> / <b>ガイド</b>
            </div>
            <div className="guide-list-hero">
              <div className="guide-eyebrow">GUIDE</div>
              <h1 className="guide-title">製造業DXガイド</h1>
              <p className="guide-lead">
                図面管理を起点に、製造業DXの用語と判断基準を体系立てて解説します。
                中心となる解説（ピラー）に、用語ページ（spoke）を内部リンクで束ねています。
              </p>
            </div>

            {clusters.map((cluster) => (
              <section
                key={cluster.id}
                id={cluster.id}
                className="guide-cluster-card"
              >
                <h2 className="cc-name">{cluster.name}</h2>

                {/* ピラーを上部に強調表示 */}
                {cluster.pillars.map((slug) => {
                  const a = getArticleBySlug(slug);
                  if (!a) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/guide/${slug}`}
                      className="guide-pillar-link"
                    >
                      <span className="pl-tag">PILLAR ・ 中核ガイド</span>
                      <span className="pl-title">{a.title}</span>
                      {a.description && (
                        <span className="pl-desc">{a.description}</span>
                      )}
                    </Link>
                  );
                })}

                {/* spoke をグループ（基礎/コア機能/現場概念/課題文脈）で並べる */}
                {cluster.spokeGroups.map((group) => (
                  <div key={group.label} className="guide-spoke-group">
                    <div className="sg-label">{group.label}</div>
                    <div className="guide-spoke-chips">
                      {group.slugs.map((slug) => {
                        const a = getArticleBySlug(slug);
                        // 未投入の用語は「準備中」表示（一覧は壊さない）
                        return a ? (
                          <Link key={slug} href={`/guide/${slug}`}>
                            {a.title}
                          </Link>
                        ) : (
                          <span key={slug} className="coming">
                            {slugToLabel(slug)}（準備中）
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// 未投入 spoke の暫定ラベル（slug をそのまま見せない）
function slugToLabel(slug: string): string {
  const map: Record<string, string> = {
    'ai-drawing-management': 'AI図面管理とは',
    'drawing-search': '図面検索とは',
    'cloud-drawing-management': 'クラウド図面管理とは',
    'diff-detection': '差分検出・図面比較とは',
    'voucher-generation': '帳票生成とは',
    'revision-management': '改訂管理とは',
    'drawing-number': '図番とは',
    'block-count': '員数とは',
    bom: '部品表（BOM）とは',
    'inventory-management': '在庫管理（リビジョン）とは',
    'cad-data-management': 'CADデータ管理とは',
    'drawing-numbering-rule': '図番採番ルールとは',
    'drawing-attribution': '図面の属人化とは',
    'file-server-limit': 'ファイルサーバー管理の限界',
    'excel-drawing-limit': 'Excel図面管理の限界',
    'paper-drawing-digitization': '紙図面の電子化とは',
    'design-reuse': '設計流用とは',
    'tech-succession-2025': '技術伝承・2025年問題とは',
    'plm-pdm-difference': 'PLM・PDMとの違い',
  };
  return map[slug] || slug;
}
