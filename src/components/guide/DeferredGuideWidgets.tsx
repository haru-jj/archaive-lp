'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import type { ChatTerm } from './GuideChat';

// 全ページ共通の用語ウィジェットは初期描画に不要なので、
// アイドル後に別チャンクで遅延ロードして初期JSの実行を軽くする。
const GuideChat = dynamic(() => import('./GuideChat'), { ssr: false });
const GuideTermHinter = dynamic(
  () => import('@/components/feature/GuideTermHinter'),
  { ssr: false },
);

export default function DeferredGuideWidgets({ terms }: { terms: ChatTerm[] }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let done = false;
    const show = () => {
      if (!done) {
        done = true;
        setReady(true);
      }
    };
    // アイドル時に読み込み。最初のユーザー操作でも前倒しで起動。
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const ricId =
      typeof w.requestIdleCallback === 'function'
        ? w.requestIdleCallback(show, { timeout: 3000 })
        : window.setTimeout(show, 1800);
    const opts = { once: true, passive: true } as const;
    window.addEventListener('pointerdown', show, opts);
    window.addEventListener('keydown', show, opts);
    window.addEventListener('scroll', show, opts);

    return () => {
      window.removeEventListener('pointerdown', show);
      window.removeEventListener('keydown', show);
      window.removeEventListener('scroll', show);
      if (typeof w.cancelIdleCallback === 'function') {
        w.cancelIdleCallback(ricId);
      } else {
        window.clearTimeout(ricId);
      }
    };
  }, []);

  if (!ready) return null;

  return (
    <>
      <GuideTermHinter />
      <GuideChat terms={terms} />
    </>
  );
}
