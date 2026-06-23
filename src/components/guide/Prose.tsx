import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// markdown 本文(prose)の描画。構造化ブロックはフロントマター側で描くため、
// ここでは段落・強調・リスト・見出し・リンク・表（GFM）等の素朴な本文のみを扱う。
// remark-gfm: 記事本文中の比較表（| 〜 |）を <table> として描画するために有効化。
export default function Prose({ children }: { children: string }) {
  if (!children) return null;
  return (
    <div className="guide-prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
