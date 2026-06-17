import type { Article, Cluster } from '@/lib/guide';
import Prose from './Prose';
import {
  DefinitionBlock,
  FaqBlock,
  GuideBreadcrumb,
  RelatedLinks,
  SourcesBlock,
} from './blocks';

// spoke テンプレート(F3)。軽量4要素: 定義 / 本文 / ミニFAQ / 関連用語＋ピラー内部リンク。
// 施策: 用語ページは中立な定義に徹し、被リンクを集める器にする（重い要素は積まない）。
export default function SpokeArticle({
  article,
  cluster,
  related,
}: {
  article: Article;
  cluster: Cluster | null;
  related: Article[];
}) {
  return (
    <article className="guide-wrap">
      <GuideBreadcrumb
        clusterName={cluster?.name}
        clusterId={cluster?.id}
        title={article.title}
      />
      <h1 className="guide-title">{article.title}</h1>

      {/* 1. 定義ブロック（冒頭1文の定義＋囲み） */}
      {article.definition && (
        <div className="guide-block">
          <DefinitionBlock def={article.definition} />
        </div>
      )}

      {/* 2. 本文（2〜3段落・markdown） */}
      <div className="guide-block">
        <Prose>{article.body}</Prose>
      </div>

      {/* 出典（数値を載せた場合のみ） */}
      {article.sources?.length ? (
        <div className="guide-block">
          <SourcesBlock sources={article.sources} />
        </div>
      ) : null}

      {/* 3. ミニFAQ（2〜3問・FAQPage 出力はテンプレ外の JSON-LD で） */}
      {article.faq?.length ? (
        <div className="guide-block">
          <h2 className="guide-h2">よくある質問</h2>
          <FaqBlock faq={article.faq} />
        </div>
      ) : null}

      {/* 4. 関連用語＋ピラーへの内部リンク */}
      <RelatedLinks related={related} />
    </article>
  );
}
