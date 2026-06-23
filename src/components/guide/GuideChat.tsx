'use client';

// 左下のAIチャット風・用語アシスタント。用語を入力すると「AIが返答中」アニメののち、
// 定義（記事 description）とガイドへのリンクを返す。マッチは guideTerms の辞書を使用。
// terms（slug→title/description）はサーバー側 layout から渡す。

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageSquare, X, Send, BookOpen, Maximize2, Minimize2 } from 'lucide-react';

import { GUIDE_TERMS, matchGuideTerm } from '@/lib/guideTerms';

export interface ChatTerm {
  slug: string;
  title: string;
  description: string;
}

interface Msg {
  id: number;
  role: 'ai' | 'user';
  text?: string;
  term?: { title: string; slug: string; desc: string };
  suggestions?: { title: string; slug: string }[];
}

export default function GuideChat({ terms }: { terms: ChatTerm[] }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState('');
  const close = () => {
    setOpen(false);
    setExpanded(false);
  };
  const [typing, setTyping] = useState(false);
  const pathname = usePathname();
  // 挨拶文はページ別: /guide はそのまま、メインページ等は「わからない単語があれば」系。
  const greeting =
    pathname && pathname.startsWith('/guide')
      ? '製造業DX用語のアシスタントです。「BOM」「類似図面検索」「PLM代替」など、気になる用語を入力してください。'
      : 'わからない単語があれば、ここで聞いてください。「BOM」「属人化」「PLM代替」など、製造業DXの用語をすぐに解説します。';
  const [msgs, setMsgs] = useState<Msg[]>([{ id: 0, role: 'ai', text: greeting }]);
  const idRef = useRef(1);
  const bodyRef = useRef<HTMLDivElement>(null);
  const bySlug = useRef(new Map(terms.map((t) => [t.slug, t])));

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, typing, open]);

  // ページ遷移時、会話が未開始（挨拶のみ）なら現在ページ用の挨拶に差し替える。
  useEffect(() => {
    setMsgs((m) =>
      m.length === 1 && m[0].id === 0 ? [{ id: 0, role: 'ai', text: greeting }] : m,
    );
  }, [greeting]);

  const nextId = () => idRef.current++;

  function searchSuggestions(q: string): { title: string; slug: string }[] {
    const ql = q.trim().toLowerCase();
    if (!ql) return [];
    const seen = new Set<string>();
    const out: { title: string; slug: string }[] = [];
    for (const t of GUIDE_TERMS) {
      const hit =
        t.label.toLowerCase().includes(ql) ||
        t.aliases.some((a) => a.toLowerCase().includes(ql));
      if (hit && !seen.has(t.slug)) {
        seen.add(t.slug);
        out.push({ title: bySlug.current.get(t.slug)?.title ?? t.label, slug: t.slug });
      }
      if (out.length >= 4) break;
    }
    return out;
  }

  function answer(query: string) {
    const q = query.trim();
    if (!q) return;
    setMsgs((m) => [...m, { id: nextId(), role: 'user', text: q }]);
    setInput('');
    setTyping(true);

    window.setTimeout(() => {
      const match = matchGuideTerm(q);
      let reply: Msg;
      if (match) {
        const art = bySlug.current.get(match.slug);
        reply = {
          id: nextId(),
          role: 'ai',
          term: {
            title: art?.title ?? match.label,
            slug: match.slug,
            desc: art?.description ?? '',
          },
        };
      } else {
        const sugg = searchSuggestions(q);
        reply = {
          id: nextId(),
          role: 'ai',
          text: sugg.length
            ? `「${q}」にぴったりの用語は見つかりませんでした。もしかして、こちらですか？`
            : `「${q}」に一致する用語が見つかりませんでした。別の言い方（例：BOM、属人化、RAG）でお試しください。`,
          suggestions: sugg,
        };
      }
      setTyping(false);
      setMsgs((m) => [...m, reply]);
    }, 850);
  }

  return (
    <>
      {!(open && expanded) && (
        <button
          type="button"
          className="gchat-fab"
          aria-label={open ? '用語アシスタントを閉じる' : '用語アシスタントを開く'}
          onClick={() => (open ? close() : setOpen(true))}
        >
          {open ? <X size={22} strokeWidth={2.2} /> : <MessageSquare size={22} strokeWidth={2.2} />}
        </button>
      )}

      {open && (
        <div className={`gchat-panel${expanded ? ' expanded' : ''}`} role="dialog" aria-label="製造業DX用語アシスタント">
          <div className="gchat-head">
            <span className="gchat-avatar">
              <BookOpen size={15} strokeWidth={2.4} />
            </span>
            <div className="gchat-head-t">
              <strong>用語アシスタント</strong>
              <em>製造業DX用語をすぐに参照</em>
            </div>
            <div className="gchat-actions">
              <button
                type="button"
                aria-label={expanded ? '通常表示に戻す' : '全画面表示'}
                onClick={() => setExpanded((v) => !v)}
                className="gchat-x"
              >
                {expanded ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
              </button>
              <button type="button" aria-label="閉じる" onClick={close} className="gchat-x">
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="gchat-body" ref={bodyRef}>
            {msgs.map((m) => (
              <div key={m.id} className={`gchat-row ${m.role}`}>
                <div className="gchat-bubble">
                  {m.text && <p>{m.text}</p>}
                  {m.term && (
                    <>
                      <p>
                        <b>「{m.term.title}」</b>ですね。
                      </p>
                      {m.term.desc && <p className="gchat-def">{m.term.desc}</p>}
                      <Link className="gchat-link" href={`/guide/${m.term.slug}`} onClick={close}>
                        ガイドで詳しく読む →
                      </Link>
                    </>
                  )}
                  {m.suggestions && m.suggestions.length > 0 && (
                    <div className="gchat-suggs">
                      {m.suggestions.map((s) => (
                        <button key={s.slug} type="button" className="gchat-sugg" onClick={() => answer(s.title)}>
                          {s.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="gchat-row ai">
                <div className="gchat-bubble gchat-typing" aria-label="AIが返答中">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          </div>

          <form
            className="gchat-input"
            onSubmit={(e) => {
              e.preventDefault();
              answer(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="用語を入力（例：BOM）"
              aria-label="用語を入力"
            />
            <button type="submit" aria-label="送信" disabled={!input.trim()}>
              <Send size={16} strokeWidth={2.3} />
            </button>
          </form>
        </div>
      )}

      <style jsx>{`
        .gchat-fab {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 70;
          width: 56px;
          height: 56px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          color: #fff;
          background: linear-gradient(135deg, #1b3f63 0%, #13a7c8 100%);
          box-shadow: 0 10px 26px rgba(19, 167, 200, 0.42);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .gchat-fab:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 14px 32px rgba(19, 167, 200, 0.5);
        }
        .gchat-panel {
          position: fixed;
          right: 20px;
          bottom: 88px;
          z-index: 70;
          width: min(420px, calc(100vw - 40px));
          height: min(600px, calc(100vh - 120px));
          background: #fff;
          border: 1px solid #e3ebf1;
          border-radius: 18px;
          transition: width 0.25s ease, height 0.25s ease, right 0.25s ease,
            bottom 0.25s ease, border-radius 0.25s ease;
          box-shadow: 0 24px 60px rgba(15, 50, 79, 0.26);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: gchat-in 0.22s ease both;
        }
        @keyframes gchat-in {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }
        }
        /* 全画面（画面の約1/3幅・全高ドロワー）＋フォント拡大 */
        .gchat-panel.expanded {
          right: 0;
          top: 0;
          bottom: 0;
          width: 34vw;
          min-width: 400px;
          max-width: 640px;
          height: 100vh;
          border-radius: 16px 0 0 16px;
        }
        .gchat-panel.expanded .gchat-head {
          padding: 16px 18px;
        }
        .gchat-panel.expanded .gchat-head-t strong {
          font-size: 16px;
        }
        .gchat-panel.expanded .gchat-head-t em {
          font-size: 12.5px;
        }
        .gchat-panel.expanded .gchat-body {
          padding: 22px 20px;
          gap: 14px;
        }
        .gchat-panel.expanded .gchat-bubble {
          max-width: 88%;
          font-size: 15px;
          line-height: 1.85;
          padding: 13px 16px;
        }
        .gchat-panel.expanded .gchat-sugg {
          font-size: 13px;
          padding: 6px 13px;
        }
        .gchat-panel.expanded .gchat-input {
          padding: 14px;
        }
        .gchat-panel.expanded .gchat-input input {
          font-size: 15px;
          padding: 12px 16px;
        }
        .gchat-panel.expanded .gchat-input button {
          width: 42px;
          height: 42px;
        }
        @media (max-width: 860px) {
          .gchat-panel.expanded {
            width: 100vw;
            min-width: 0;
            max-width: none;
            border-radius: 0;
          }
        }
        .gchat-head {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 14px;
          color: #fff;
          background: linear-gradient(135deg, #1b3f63 0%, #13a7c8 100%);
        }
        .gchat-avatar {
          width: 30px;
          height: 30px;
          flex: none;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gchat-head-t {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }
        .gchat-head-t strong {
          font-size: 14px;
          font-weight: 800;
        }
        .gchat-head-t em {
          font-style: normal;
          font-size: 11px;
          opacity: 0.85;
        }
        .gchat-actions {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .gchat-x {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          opacity: 0.85;
          display: flex;
          padding: 4px;
        }
        .gchat-x:hover {
          opacity: 1;
        }
        .gchat-body {
          flex: 1;
          overflow-y: auto;
          padding: 16px 14px;
          background: #f6fafc;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .gchat-row {
          display: flex;
        }
        .gchat-row.user {
          justify-content: flex-end;
        }
        .gchat-bubble {
          max-width: 84%;
          padding: 10px 13px;
          border-radius: 14px;
          font-size: 13px;
          line-height: 1.7;
          background: #fff;
          color: #2c4763;
          border: 1px solid #e3ebf1;
          border-bottom-left-radius: 4px;
        }
        .gchat-row.user .gchat-bubble {
          background: #1f4f86;
          color: #fff;
          border-color: #1f4f86;
          border-bottom-left-radius: 14px;
          border-bottom-right-radius: 4px;
        }
        .gchat-bubble p {
          margin: 0 0 4px;
        }
        .gchat-bubble p:last-child {
          margin-bottom: 0;
        }
        .gchat-def {
          color: #52677c;
        }
        .gchat-link {
          display: inline-block;
          margin-top: 6px;
          font-weight: 700;
          color: #13a7c8;
        }
        .gchat-suggs {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 8px;
        }
        .gchat-sugg {
          font-size: 12px;
          font-weight: 700;
          color: #1f6f8c;
          background: #eef6fa;
          border: 1px solid #d7e7f0;
          border-radius: 999px;
          padding: 5px 11px;
          cursor: pointer;
        }
        .gchat-sugg:hover {
          background: #13a7c8;
          color: #fff;
          border-color: #13a7c8;
        }
        .gchat-typing {
          display: inline-flex;
          gap: 4px;
          align-items: center;
        }
        .gchat-typing span {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #9fb6c6;
          animation: gchat-bounce 1s infinite ease-in-out;
        }
        .gchat-typing span:nth-child(2) {
          animation-delay: 0.15s;
        }
        .gchat-typing span:nth-child(3) {
          animation-delay: 0.3s;
        }
        @keyframes gchat-bounce {
          0%,
          60%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          30% {
            transform: translateY(-5px);
            opacity: 1;
          }
        }
        .gchat-input {
          display: flex;
          gap: 8px;
          padding: 10px;
          border-top: 1px solid #e3ebf1;
          background: #fff;
        }
        .gchat-input input {
          flex: 1;
          border: 1px solid #d7e1ea;
          border-radius: 999px;
          padding: 9px 14px;
          font-size: 13px;
          outline: none;
          color: #2c4763;
        }
        .gchat-input input:focus {
          border-color: #13a7c8;
        }
        .gchat-input button {
          flex: none;
          width: 38px;
          height: 38px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          color: #fff;
          background: #1f4f86;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gchat-input button:disabled {
          opacity: 0.4;
          cursor: default;
        }
      `}</style>
    </>
  );
}
