'use client';

// LP本文をドラッグ選択した語が、ガイドの用語に一致したときだけ、
// 選択範囲の近くに「ガイドで読む」チップを出して該当記事へ誘導する。
// PC専用（min-width:1024 かつ pointer:fine）。本文側はリンク化しない（鬱陶しさ回避）。

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

import { matchGuideTerm } from '@/lib/guideTerms';

interface Hint {
  slug: string;
  label: string;
  x: number;
  y: number;
}

export default function GuideTermHinter() {
  const [hint, setHint] = useState<Hint | null>(null);
  const chipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop = () =>
      window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;

    const onMouseUp = () => {
      // 選択確定後に判定（mouseup 直後は getSelection が未確定なことがある）
      window.setTimeout(() => {
        if (!isDesktop()) return;
        // ガイド内では誘導しない（自己参照になりやすいため）
        if (window.location.pathname.startsWith('/guide')) return;

        const sel = window.getSelection();
        if (!sel || sel.isCollapsed) {
          setHint(null);
          return;
        }
        const m = matchGuideTerm(sel.toString());
        if (!m) {
          setHint(null);
          return;
        }
        const rect = sel.getRangeAt(0).getBoundingClientRect();
        if (!rect || (rect.width === 0 && rect.height === 0)) {
          setHint(null);
          return;
        }
        const x = Math.min(
          Math.max(rect.left + rect.width / 2, 90),
          window.innerWidth - 90,
        );
        setHint({ ...m, x, y: rect.bottom + 8 });
      }, 0);
    };

    // チップ外を押したら閉じる（チップ内は維持してクリックを通す）
    const onMouseDown = (e: MouseEvent) => {
      if (chipRef.current && chipRef.current.contains(e.target as Node)) return;
      setHint(null);
    };
    const onScroll = () => setHint(null);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setHint(null);
    };

    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousedown', onMouseDown);
    window.addEventListener('scroll', onScroll, true);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('scroll', onScroll, true);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  if (!hint) return null;

  return (
    <div
      ref={chipRef}
      style={{
        position: 'fixed',
        left: hint.x,
        top: hint.y,
        transform: 'translateX(-50%)',
        zIndex: 60,
      }}
      className="animate-fade-in"
    >
      <Link
        href={`/guide/${hint.slug}`}
        onClick={() => setHint(null)}
        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0f172a] shadow-[0_8px_24px_rgba(0,26,71,0.18)] ring-1 ring-[#37B7C4]/40 transition-transform duration-200 hover:-translate-y-0.5 hover:ring-[#37B7C4]"
      >
        <BookOpen className="h-4 w-4 text-[#37B7C4]" strokeWidth={2.2} />
        <span>
          「{hint.label}」をガイドで読む
        </span>
        <span className="text-[#37B7C4]">→</span>
      </Link>
    </div>
  );
}
