import Link from 'next/link';
import type {
  Article,
  CaseItem,
  CtaData,
  DefinitionData,
  FaqItem,
  JudgeTable,
} from '@/lib/guide';

// ガイド記事の構造化ブロック群。各ブロックの施策意図はコメントに残す（保守者が意図を見失わないため）。

/** パンくず（例: ガイド / 図面管理 / 図面管理とは）(F5) */
export function GuideBreadcrumb({
  clusterName,
  clusterId,
  title,
}: {
  clusterName?: string;
  clusterId?: string;
  title: string;
}) {
  return (
    <nav className="guide-crumb" aria-label="パンくず">
      <Link href="/guide">ガイド</Link>
      {clusterName && (
        <>
          {' / '}
          <Link href={`/guide#${clusterId}`}>{clusterName}</Link>
        </>
      )}
      {' / '}
      <b>{title}</b>
    </nav>
  );
}

/** ピラー冒頭の spoke リンク群。施策: ピラー→配下 spoke を冒頭で束ね、クラスター配線を可視化 */
export function ClusterLinks({ spokes }: { spokes: Article[] }) {
  if (!spokes.length) return null;
  return (
    <div className="guide-cluster">
      <div className="cl-sub">この記事に出てくる用語</div>
      <div className="spokes">
        {spokes.map((s) => (
          <Link key={s.slug} className="spoke" href={`/guide/${s.slug}`}>
            {s.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

/** 定義ブロック(6.1)。見出し直後に1文定義→補足→一次データ（数値＋出典運用）。
 *  AI/検索が抽出しやすいよう意味的にまとまった構造にする。 */
export function DefinitionBlock({ def }: { def: DefinitionData }) {
  return (
    <div className="guide-defbox">
      <div className="dlabel">ことばの意味</div>
      <div className="term">{def.term}</div>
      <p>{def.body}</p>
      {def.datapoint && (
        // 数値には必ず出典(sources)。出典のない数値は載せない運用。
        <p
          className="datapoint"
          dangerouslySetInnerHTML={{ __html: def.datapoint }}
        />
      )}
    </div>
  );
}

/** 判断表(6.2)。列・行見出しを持つ通常テーブル（装飾より構造優先＝AIが骨格に使える） */
export function JudgeTableBlock({ table }: { table: JudgeTable }) {
  const colClass = (i: number) => {
    const t = table.columnTypes?.[i];
    return t ? `c-${t}` : '';
  };
  return (
    <div className="guide-tablewrap">
      <table className="guide-judge">
        <thead>
          <tr>
            <th />
            {table.columns.map((c, i) => (
              <th key={i} className={colClass(i)}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri}>
              <th>{row.head}</th>
              {row.cells.map((cell, ci) => (
                <td key={ci} className={colClass(ci)}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** callout（補足の注意喚起） */
export function Callout({ html }: { html: string }) {
  return (
    <div className="guide-callout" dangerouslySetInnerHTML={{ __html: html }} />
  );
}

/** FAQ(F6)。構造化データ(FAQPage)はテンプレ側で別途出力する */
export function FaqBlock({ faq }: { faq: FaqItem[] }) {
  if (!faq?.length) return null;
  return (
    <div className="guide-faq">
      {faq.map((item, i) => (
        <div className="qa" key={i}>
          <div className="q">
            <span className="qm">Q.</span>
            {item.q}
          </div>
          <div className="a">{item.a}</div>
        </div>
      ))}
    </div>
  );
}

/** 実名事例リンク（E-E-A-T: 経験・信頼の裏づけ） */
export function CasesBlock({ cases }: { cases: CaseItem[] }) {
  if (!cases?.length) return null;
  return (
    <div className="guide-cases">
      {cases.map((c, i) => {
        const inner = (
          <>
            <div className="cn">{c.name}</div>
            <div className="cr">{c.result}</div>
            {c.desc && <div className="cd">{c.desc}</div>}
          </>
        );
        return c.href ? (
          <Link key={i} className="guide-case" href={c.href}>
            {inner}
          </Link>
        ) : (
          <div key={i} className="guide-case">
            {inner}
          </div>
        );
      })}
    </div>
  );
}

/** 出典ブロック。数値に応じた出典を必ず併記（AI引用の必須条件） */
export function SourcesBlock({ sources }: { sources: string[] }) {
  if (!sources?.length) return null;
  return (
    <div className="guide-sources">
      <div className="stitle">出典</div>
      <ul>
        {sources.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

/** CTA（浅いCV。定義は中立に・CVは末尾で流す） */
export function CtaBlock({ cta }: { cta: CtaData }) {
  return (
    <div className="guide-cta">
      {cta.heading && <div className="ch">{cta.heading}</div>}
      {cta.body && <p>{cta.body}</p>}
      <div className="guide-cta-row">
        {cta.primary && (
          <Link className="guide-btn fill" href={cta.primary.href}>
            {cta.primary.label}
          </Link>
        )}
        {cta.secondary && (
          <Link className="guide-btn line" href={cta.secondary.href}>
            {cta.secondary.label}
          </Link>
        )}
      </div>
    </div>
  );
}

/** 関連用語（内部リンク・クラスター配線）(F5)。アンカーは記事タイトル（一般語）をそのまま使う */
export function RelatedLinks({ related }: { related: Article[] }) {
  if (!related.length) return null;
  return (
    <div className="guide-xlink">
      <span className="lab">あわせて読みたい</span>
      {related.map((a, i) => (
        <span key={a.slug}>
          {i > 0 && ' ・ '}
          <Link href={`/guide/${a.slug}`}>{a.title}</Link>
        </span>
      ))}
    </div>
  );
}
