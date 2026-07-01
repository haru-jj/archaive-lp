'use client';

// LP/Kaihara/frustration ブランチの2つのバナー型CTAを完全移植したもの。
// - DocDownloadCta : 資料DLバナー（FeaturesSection 由来 / RippleLink）→ /download
//   ※ BeforeAfterSection の結論部に埋め込むため <section> ラッパは持たない。
// - ProcessFlowCta : 「導入の流れを資料で確認」バナー（GettingStartedSection 由来）→ /apply
//   ※ ProcessSection 直下に単独セクションとして配置。
// デザイントークン(--lp-* / lp.* / spacing / opacity)は既存設定に揃え済み。

import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';

import { RippleLink } from './CtaRipple';

const CTA_IMAGES = [
  {
    src: '/images/CTA2.png',
    alt: 'ARCHAIVE 資料プレビュー 1',
    className: 'col-start-1 row-start-1',
  },
  {
    src: '/images/CTA2-2.png',
    alt: 'ARCHAIVE 資料プレビュー 2',
    className: 'col-start-2 row-start-1 translate-y-8',
  },
  {
    src: '/images/CTA2-3.png',
    alt: 'ARCHAIVE 資料プレビュー 3',
    className: 'col-start-1 row-start-2',
  },
  {
    src: '/images/CTA2-4.png',
    alt: 'ARCHAIVE 資料プレビュー 4',
    className: 'col-start-2 row-start-2 translate-y-8',
  },
];

// CTA 1: 資料DLバナー → /download
export function DocDownloadCta({ className = '' }: { className?: string }) {
  return (
    <RippleLink
      href="/download"
      className={`mx-auto block max-w-[1120px] overflow-hidden bg-[linear-gradient(100deg,var(--lp-text)_0%,color-mix(in_srgb,var(--lp-primary-deep)_82%,var(--lp-primary))_54%,color-mix(in_srgb,var(--lp-primary)_78%,white)_100%)] px-5 py-5 shadow-[0_18px_42px_rgba(0,26,71,0.16)] transition-transform duration-300 hover:-translate-y-0.5 sm:px-7 lg:px-8 lg:py-6 ${className}`}
      bgClassName="bg-[linear-gradient(100deg,color-mix(in_srgb,var(--lp-primary-deep)_92%,black)_0%,var(--lp-primary-strong)_100%)]"
      contentClassName="block w-full"
    >
      <div className="grid items-center gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(29rem,0.95fr)]">
        <div className="text-center lg:text-left">
          <p className="text-[clamp(0.98rem,4.1vw,1.28rem)] leading-[1.55] font-bold text-white sm:text-[clamp(1.2rem,2.05vw,1.78rem)]">
            <span className="block whitespace-nowrap">図面管理のその先がわかる</span>
            <span className="block whitespace-nowrap">資料を無料で</span>
          </p>
          <span className="bg-lp-accent text-lp-text mt-5 inline-flex min-h-10 min-w-[13rem] items-center justify-center gap-4 rounded-lg px-4.5 text-sm font-bold shadow-[0_6px_0_color-mix(in_srgb,var(--lp-accent-strong)_78%,black_10%),0_10px_20px_rgba(0,26,71,0.14)] sm:min-w-[15.5rem] sm:text-[0.95rem]">
            資料を無料ダウンロード
            <Download className="h-4 w-4" strokeWidth={2.4} />
          </span>
        </div>

        <div className="relative min-h-[9.5rem] sm:min-h-[11rem] lg:min-h-[12.6rem]">
          <div className="absolute top-3 left-[4%] w-[58%] rotate-[-1deg] overflow-hidden rounded-xl border border-white/80 bg-white shadow-[0_14px_28px_rgba(0,26,71,0.16)] sm:left-[10%] sm:w-[48%] lg:top-2 lg:left-[5.5rem] lg:w-[17.5rem]">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/CTA1Big.png"
                alt="ARCHAIVEの資料プレビュー"
                fill
                sizes="(min-width: 1024px) 280px, 58vw"
                className="object-cover object-left"
              />
            </div>
          </div>
          <div className="absolute top-0 right-[3%] w-[43%] rotate-[1deg] overflow-hidden rounded-xl border border-white/80 bg-white shadow-[0_14px_28px_rgba(0,26,71,0.16)] sm:right-[9%] sm:w-[34%] lg:right-auto lg:left-[17rem] lg:w-[13rem]">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/CTA1-Small.png"
                alt="ARCHAIVEの資料プレビュー"
                fill
                sizes="(min-width: 1024px) 210px, 43vw"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="absolute right-4 bottom-0 flex h-17 w-17 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,color-mix(in_srgb,var(--lp-primary)_52%,white)_0%,var(--lp-primary)_64%,var(--lp-primary-strong)_100%)] text-center text-white shadow-[0_14px_28px_rgba(0,26,71,0.14)] sm:right-[14%] sm:h-20 sm:w-20 lg:right-2 lg:bottom-2 lg:h-24 lg:w-24">
            <p className="text-[0.64rem] leading-4 font-bold sm:text-[0.72rem] sm:leading-5 lg:text-[0.82rem]">
              3分で
              <br />
              機能を解説
            </p>
          </div>
        </div>
      </div>
    </RippleLink>
  );
}

// CTA 2: 導入の流れを資料で確認 → /apply（ProcessSection 直下に単独セクションで配置）
export function ProcessFlowCta() {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <Link
          href="/apply"
          className="group mx-auto block max-w-[1040px] overflow-hidden border border-white/12 bg-[linear-gradient(90deg,var(--lp-text)_0%,color-mix(in_srgb,var(--lp-primary)_88%,var(--lp-primary-deep))_50%,var(--lp-text)_100%)] px-4 py-5 shadow-[0_14px_30px_rgba(0,26,71,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(0,26,71,0.22)] sm:px-6 lg:px-10 lg:py-5"
        >
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.98fr)_minmax(19rem,1.02fr)] lg:gap-7">
            <div className="relative mx-auto h-[8.5rem] w-full max-w-[22rem] overflow-hidden lg:hidden">
              <div className="absolute inset-x-0 top-1 mx-auto flex w-[min(19rem,100%)] justify-center">
                {CTA_IMAGES.slice(0, 3).map((image, imageIndex) => (
                  <div
                    key={image.src}
                    className={`absolute w-[min(8.6rem,44vw)] overflow-hidden border-2 border-white bg-white shadow-[0_10px_20px_rgba(0,26,71,0.16)] ${
                      imageIndex === 0
                        ? 'top-5 left-1 -rotate-6'
                        : imageIndex === 1
                          ? 'top-0 left-1/2 z-10 -translate-x-1/2'
                          : 'top-5 right-1 rotate-6'
                    }`}
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="144px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center transition-transform duration-300 group-hover:translate-x-1 lg:translate-x-6 lg:text-left lg:group-hover:translate-x-8">
              <p className="text-[clamp(1.1rem,1.95vw,1.75rem)] leading-[1.35] font-bold text-white">
                導入の流れを
                <br />
                資料で確認。
              </p>
              <p className="mx-auto mt-3 max-w-[30rem] text-[0.8rem] leading-6 font-normal text-white/86 transition-colors duration-300 group-hover:text-white lg:mx-0">
                機能・プラン・導入事例までまとめて確認できます。
              </p>
              <span className="text-lp-text mt-4 inline-flex min-h-11 w-full max-w-[17rem] items-center justify-center gap-3 bg-white px-5 text-[0.82rem] font-bold shadow-[0_10px_20px_rgba(0,26,71,0.16)] transition-all duration-300 group-hover:scale-[1.03] group-hover:bg-[var(--lp-surface-soft)] group-hover:shadow-[0_14px_28px_rgba(0,26,71,0.22)] sm:w-auto sm:min-w-[15.5rem]">
                導入の流れを資料で確認
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </span>
            </div>

            <div className="relative hidden min-h-[13.2rem] lg:block">
              <div className="absolute top-[-2.6rem] left-1/2 w-[27rem] -translate-x-1/2">
                <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                  {CTA_IMAGES.map((image) => (
                    <div key={image.src} className={image.className}>
                      <div className="overflow-hidden border-2 border-white bg-white shadow-[0_10px_20px_rgba(0,26,71,0.12)]">
                        <div className="relative aspect-[16/10]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="240px"
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
