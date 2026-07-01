// GA4 計測ヘルパー。
// GA本体は本番ビルド(NODE_ENV=production)でのみ読み込まれるため、
// dev では送信せず確認用に console へ出すだけにする。
export const GA_ID = 'G-0FZZ3RVR1P';

type GtagParams = Record<string, string | number | boolean | undefined>;

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

/** GA4 カスタムイベントを送信する（未ロード時・dev では no-op） */
export function gaEvent(name: string, params: GtagParams = {}): void {
  if (typeof window === 'undefined') return;

  if (process.env.NODE_ENV !== 'production') {
    // dev では GA が読み込まれないので、配線確認用にログだけ出す
    // eslint-disable-next-line no-console
    console.debug('[ga4]', name, params);
    return;
  }

  const w = window as GtagWindow;
  if (typeof w.gtag !== 'function') return;
  w.gtag('event', name, params);
}
