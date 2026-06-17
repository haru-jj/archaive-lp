import type { Article, Cluster } from '@/lib/guide';
import Prose from './Prose';
import DiagnosisTool from './DiagnosisTool';
import {
  Callout,
  CasesBlock,
  ClusterLinks,
  CtaBlock,
  DefinitionBlock,
  FaqBlock,
  GuideBreadcrumb,
  JudgeTableBlock,
  RelatedLinks,
  SourcesBlock,
} from './blocks';

// ピラーテンプレート(F2/6章)。plm_guide_mock_v2.html の9ブロック構成を実装。
// 各ブロックの狙い（AEO/SEO/CV）はコメントに残す。
export default function PillarArticle({
  article,
  cluster,
  related,
  spokes,
}: {
  article: Article;
  cluster: Cluster | null;
  related: Article[];
  spokes: Article[];
}) {
  const diagnosisId =
    typeof article.diagnosis === 'string' ? article.diagnosis : undefined;

  return (
    <article className="guide-wrap">
      {/* パンくず */}
      <GuideBreadcrumb
        clusterName={cluster?.name}
        clusterId={cluster?.id}
        title={article.title}
      />

      {/* 1. タイトル＋リード */}
      {article.eyebrow && <div className="guide-eyebrow">{article.eyebrow}</div>}
      <h1 className="guide-title">{article.title}</h1>
      {article.lead && <p className="guide-lead">{article.lead}</p>}
      <div className="guide-meta">
        {article.updated && <span>更新 {article.updated}</span>}
        <span className="dot" />
        <span>ARCHAIVE 編集部</span>
      </div>
      <div className="guide-ruler" />

      {/* 2. クラスター内の関連 spoke リンク群（冒頭） */}
      <div className="guide-block">
        <ClusterLinks spokes={spokes} />
      </div>

      {/* 本文導入（任意・markdown） */}
      {article.body && (
        <div className="guide-block">
          <Prose>{article.body}</Prose>
        </div>
      )}

      {/* 3. 定義ブロック＋一次データ（数値＋出典） */}
      {article.definition && (
        <div className="guide-block">
          <DefinitionBlock def={article.definition} />
        </div>
      )}

      {/* 4. 判断表（比較・選び方）→ AIが比較クエリの骨格に使う */}
      {article.judgeTable && (
        <div className="guide-block">
          <JudgeTableBlock table={article.judgeTable} />
        </div>
      )}

      {/* 5. callout（補足の注意喚起） */}
      {article.callout && (
        <div className="guide-block">
          <Callout html={article.callout} />
        </div>
      )}

      {/* 6. 診断ツール（diagnosis 指定時のみ埋め込み）→ 検討前のリードを掴む */}
      {article.diagnosis && (
        <div className="guide-block">
          <DiagnosisTool configId={diagnosisId} />
        </div>
      )}

      {/* 7. FAQ（FAQPage は JSON-LD で別途出力） */}
      {article.faq?.length ? (
        <div className="guide-block">
          <h2 className="guide-h2">よくある質問</h2>
          <FaqBlock faq={article.faq} />
        </div>
      ) : null}

      {/* 8. 実名事例リンク（E-E-A-T） */}
      {article.cases?.length ? (
        <div className="guide-block">
          <h2 className="guide-h2">導入企業の実例</h2>
          <CasesBlock cases={article.cases} />
        </div>
      ) : null}

      {/* 9. 出典ブロック */}
      {article.sources?.length ? (
        <div className="guide-block">
          <SourcesBlock sources={article.sources} />
        </div>
      ) : null}

      {/* 10. CTA（浅いCV） */}
      {article.cta && <CtaBlock cta={article.cta} />}

      {/* 11. 関連用語（内部リンク・クラスター配線） */}
      <RelatedLinks related={related} />
    </article>
  );
}
