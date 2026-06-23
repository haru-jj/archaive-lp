'use client';

// ガイド一覧（用語集）。ARCHAIVE-用語集-案B.html のデザインを移植。
// データ（categories）はサーバー側で clusters + articles から組み立てて渡す。
// インタラクション: フィルタタブ（カテゴリ絞り込み）／総合ガイドの定義トグル。

import { useState } from 'react';
import Link from 'next/link';

export interface GlossTerm {
  title: string;
  slug: string;
  exists: boolean;
}
export interface GlossGroup {
  name: string;
  terms: GlossTerm[];
}
export interface GlossHero {
  title: string;
  def: string;
  slug: string;
  exists: boolean;
}
export interface GlossCategory {
  id: string;
  label: string;
  en: string;
  num: string;
  heroes: GlossHero[];
  groups: GlossGroup[];
}

function Node({ className = 'gloss-node' }: { className?: string }) {
  return (
    <svg className={className} width="160" height="120" viewBox="0 0 160 120" aria-hidden="true">
      <line x1="30" y1="40" x2="90" y2="24" stroke="#bfe2ee" strokeWidth="1.3" />
      <line x1="90" y1="24" x2="130" y2="70" stroke="#bfe2ee" strokeWidth="1.3" />
      <line x1="30" y1="40" x2="70" y2="92" stroke="#cfe7f1" strokeWidth="1.3" />
      <circle cx="30" cy="40" r="5" fill="#9fd4e6" />
      <circle cx="90" cy="24" r="4" fill="#13a7c8" />
      <circle cx="130" cy="70" r="5.5" fill="#7fc8de" />
      <circle cx="70" cy="92" r="3.5" fill="#bfe2ee" />
    </svg>
  );
}

export default function GuideGlossary({ categories }: { categories: GlossCategory[] }) {
  const [active, setActive] = useState('all');
  // collapsed な hero のキー集合（既定は展開＝定義表示）
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const totalTerms = categories.reduce(
    (n, c) => n + c.groups.reduce((m, g) => m + g.terms.length, 0),
    0,
  );
  const totalGuides = categories.reduce((n, c) => n + c.heroes.length, 0);

  const tabs = [{ id: 'all', label: 'すべて' }, ...categories.map((c) => ({ id: c.id, label: c.label }))];

  return (
    <div className="gloss">
      {/* hero band */}
      <section className="gloss-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Group%20(3).svg" alt="" aria-hidden="true" className="gloss-hero-logo" />
        <div className="gloss-wrap gloss-hero-inner">
          <div className="gloss-crumb">
            <Link href="/">ホーム</Link>
            &nbsp;&nbsp;/&nbsp;&nbsp;<b>ガイド</b>
          </div>
          <h1 className="gloss-h1">製造業DX用語集</h1>
          <p className="gloss-lead">
            図面管理を起点に、製造業DXでよく使う用語と「選び方」を、わかりやすく整理しました。気になる領域から、辞書のように引けます。
          </p>
          <div className="gloss-meta">
            <span>
              用語&nbsp;<b>{totalTerms}</b>
            </span>
            <span className="sep">|</span>
            <span>
              総合ガイド&nbsp;<b>{totalGuides}</b>
            </span>
            <span className="sep">|</span>
            <span>最終更新&nbsp;2026.06</span>
          </div>
        </div>
      </section>

      {/* sticky filter tabs */}
      <div className="gloss-tabbar">
        <div className="gloss-wrap gloss-tabbar-inner">
          <span className="label">FILTER</span>
          <div className="gloss-tabs">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`gloss-tab${active === t.id ? ' active' : ''}`}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* category sections */}
      <main className="gloss-wrap gloss-body">
        {categories.map((c) => {
          const termCount = c.groups.reduce((m, g) => m + g.terms.length, 0);
          const hidden = active !== 'all' && active !== c.id;
          return (
            <section
              key={c.id}
              className="gloss-cat"
              id={c.id}
              style={hidden ? { display: 'none' } : undefined}
            >
              <div className="gloss-cat-head">
                <span className="gloss-cat-num" aria-hidden="true">{c.num}</span>
                <div className="gloss-cat-title">
                  {c.en && <span className="gloss-cat-en">{c.en}</span>}
                  <h2>{c.label}</h2>
                </div>
                <span className="gloss-cat-count">{termCount} 用語</span>
              </div>

              {c.heroes.map((h) => {
                const key = `${c.id}:${h.slug}`;
                const isCollapsed = !!collapsed[key];
                return (
                  <div key={h.slug} className={`gloss-guide${isCollapsed ? ' collapsed' : ''}`}>
                    <Node />
                    <div className="gloss-guide-inner">
                      <div className="gloss-ey">
                        <span className="gloss-badge">総合ガイド</span>
                        <span className="gloss-first">まずはこちら</span>
                      </div>
                      <h3>{h.title}</h3>
                      <p className="gloss-def">{h.def}</p>
                      <div className="gloss-cta">
                        {h.exists ? (
                          <Link className="gloss-read" href={`/guide/${h.slug}`}>
                            この用語を読む<span>→</span>
                          </Link>
                        ) : (
                          <span className="gloss-read" style={{ opacity: 0.6 }}>
                            準備中
                          </span>
                        )}
                        <button
                          type="button"
                          className="gloss-toggle"
                          onClick={() => setCollapsed((s) => ({ ...s, [key]: !s[key] }))}
                        >
                          {isCollapsed ? '定義を見る' : '閉じる'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {c.groups.map((g) => (
                <div key={g.name} className="gloss-group">
                  <div className="gloss-group-head">
                    <span className="bar" />
                    <span className="gloss-gn">{g.name}</span>
                  </div>
                  <div className="gloss-grid">
                    {g.terms.map((t) =>
                      t.exists ? (
                        <Link key={t.slug} className="gloss-term" href={`/guide/${t.slug}`}>
                          <span className="gloss-tn">{t.title}</span>
                          <span className="gloss-arrow">→</span>
                        </Link>
                      ) : (
                        <span key={t.slug} className="gloss-term coming">
                          <span className="gloss-tn">{t.title}（準備中）</span>
                          <span className="gloss-arrow">·</span>
                        </span>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </section>
          );
        })}
      </main>
    </div>
  );
}
