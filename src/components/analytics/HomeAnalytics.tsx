'use client';

import { useEffect } from 'react';

import { gaEvent } from '@/lib/gtag';

// href → CTA の対応表。delegated click で拾う。
const CTA_BY_HREF: Record<string, { cta: string; label: string }> = {
  '/download': { cta: 'document_download', label: '資料ダウンロード' },
  '/apply': { cta: 'contact_apply', label: 'お問い合わせ・申込' },
  '#contact': { cta: 'contact', label: 'お問い合わせ' },
  '#demo': { cta: 'demo_reserve', label: 'デモ予約' },
};

/** href から CTA 情報を引く（tel/ログイン等も判定） */
function resolveCta(href: string): { cta: string; label: string } | null {
  if (CTA_BY_HREF[href]) return CTA_BY_HREF[href];
  if (href.startsWith('tel:')) return { cta: 'tel', label: '電話' };
  if (href.includes('/auth/login')) return { cta: 'login', label: 'ログイン' };
  return null;
}

function sectionOf(el: Element | null): string {
  return el?.closest('[data-ga-section]')?.getAttribute('data-ga-section') ?? 'unknown';
}

/**
 * トップLP用のGA4カスタム計測。
 * - section_view : 各セクションが初めて画面に入ったら1回（=どこまで見られたか／どこが一番見られているか）
 * - cta_click    : 資料DL・お問い合わせ・デモ予約・電話・ログイン
 * - faq_toggle   : FAQの開閉
 * - carousel_nav : 事例／機能カルーセルの操作
 * - scroll_depth : 25/50/75/100%
 * GA本体は本番のみ読み込まれるため、実送信は本番だけ（dev は console 出力のみ）。
 */
export default function HomeAnalytics() {
  useEffect(() => {
    // 1) section_view
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const name = entry.target.getAttribute('data-ga-section');
          if (!name || seen.has(name)) continue;
          if (entry.isIntersecting) {
            seen.add(name);
            gaEvent('section_view', { section_name: name });
            observer.unobserve(entry.target);
          }
        }
      },
      // 画面中央30%のバンドにセクションが入ったら「見られた」と判定。
      // Features 等の超縦長(420vh)セクションでも確実に発火する。
      { rootMargin: '-35% 0px -35% 0px', threshold: 0 },
    );
    document
      .querySelectorAll('[data-ga-section]')
      .forEach((el) => observer.observe(el));

    // 2) delegated click（CTA / FAQ / カルーセル）
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest('a[href]') as HTMLAnchorElement | null;
      if (link) {
        const href = link.getAttribute('href') ?? '';
        const cta = resolveCta(href);
        if (cta) {
          gaEvent('cta_click', {
            cta: cta.cta,
            cta_label: cta.label,
            location: sectionOf(link),
            link_text: link.textContent?.trim().slice(0, 80) ?? '',
          });
        }
        return;
      }

      const button = target.closest('button') as HTMLButtonElement | null;
      if (!button) return;

      if (button.hasAttribute('aria-expanded')) {
        // クリック時点の aria-expanded は「変更前」の値
        const wasOpen = button.getAttribute('aria-expanded') === 'true';
        gaEvent('faq_toggle', {
          action: wasOpen ? 'close' : 'open',
          question: button.textContent?.trim().slice(0, 100) ?? '',
          location: sectionOf(button),
        });
        return;
      }

      const ariaLabel = button.getAttribute('aria-label') ?? '';
      if (/事例|機能|表示|前へ|次へ|前の|次の/.test(ariaLabel)) {
        gaEvent('carousel_nav', {
          control: ariaLabel.slice(0, 60),
          location: sectionOf(button),
        });
      }
    };
    document.addEventListener('click', onClick, true);

    // 3) scroll_depth
    const milestones = [25, 50, 75, 100];
    const firedDepths = new Set<number>();
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = ((window.scrollY || doc.scrollTop) / scrollable) * 100;
      for (const mark of milestones) {
        if (percent >= mark && !firedDepths.has(mark)) {
          firedDepths.add(mark);
          gaEvent('scroll_depth', { percent: mark });
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
