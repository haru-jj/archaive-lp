import ReactMarkdown from 'react-markdown';

// markdown 本文(prose)の描画。構造化ブロックはフロントマター側で描くため、
// ここでは段落・強調・リスト・見出し・リンク等の素朴な本文のみを扱う。
export default function Prose({ children }: { children: string }) {
  if (!children) return null;
  return (
    <div className="guide-prose">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}
