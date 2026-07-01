import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { PRESS_RELEASES } from '@/lib/news';

// トップページの「お知らせ（Press Release）」セクション。
// 最新3件のプレスリリースをリスト表示し、/news へ誘導する。データは lib/news.ts に一元化。

export function PressReleaseSection() {
  const items = PRESS_RELEASES.slice(0, 3);

  return (
    <section id="news" className="bg-white px-6 py-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1000px]">
        <div className="text-center">
          <p className="text-lp-primary text-sm font-bold tracking-[0.2em] uppercase">
            Press Release
          </p>
          <h2 className="mt-3 text-2xl font-bold text-[#333333] sm:text-3xl md:text-[2.25rem]">
            お知らせ
          </h2>
          <div className="bg-lp-primary mx-auto mt-5 h-1 w-12 rounded-full" />
        </div>

        <div className="mx-auto mt-10 max-w-[860px] sm:mt-12">
          {items.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="group block border-b border-gray-200 px-2 py-5 transition-colors duration-200 first:border-t hover:bg-gray-50 sm:px-4 sm:py-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span className="text-sm font-bold text-gray-700 sm:text-base">
                  {item.date}
                </span>
                <span className="bg-lp-primary inline-block w-fit rounded-full px-3 py-1 text-xs whitespace-nowrap text-white">
                  {item.tags[0]?.label ?? 'プレスリリース'}
                </span>
              </div>
              <p className="group-hover:text-lp-primary mt-3 text-base font-bold leading-relaxed text-gray-800 transition-colors sm:text-lg">
                {item.content}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/news"
            className="text-lp-primary hover:text-lp-primary-strong inline-flex items-center gap-2 text-sm font-bold transition-colors sm:text-base"
          >
            すべてのお知らせを見る
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </section>
  );
}
