'use client';

import Image from 'next/image';

import { FileSearch, Puzzle, Workflow } from 'lucide-react';

import { RippleLink } from './CtaRipple';

const ORBIT_ITEMS = [
  { label: '設計データ', angle: '0deg' },
  { label: '仕様管理', angle: '72deg' },
  { label: '部品構成', angle: '144deg' },
  { label: '見積連携', angle: '216deg' },
  { label: '現場知見', angle: '288deg' },
];

const ARC_RINGS = [
  {
    size: '34%',
    width: '1px',
    opacity: 0.28,
    duration: '13s',
    delay: '-1.1s',
    rotate: '34deg',
  },
  {
    size: '38%',
    width: '1px',
    opacity: 0.34,
    duration: '11s',
    delay: '-4.2s',
    rotate: '112deg',
  },
  {
    size: '42%',
    width: '2px',
    opacity: 0.38,
    duration: '9.4s',
    delay: '-2.5s',
    rotate: '248deg',
  },
  {
    size: '46%',
    width: '1px',
    opacity: 0.42,
    duration: '14.8s',
    delay: '-3.9s',
    rotate: '16deg',
  },
  {
    size: '50%',
    width: '1px',
    opacity: 0.46,
    duration: '8.6s',
    delay: '-6.1s',
    rotate: '194deg',
  },
  {
    size: '54%',
    width: '2px',
    opacity: 0.5,
    duration: '12.2s',
    delay: '-2.2s',
    rotate: '298deg',
  },
  {
    size: '58%',
    width: '1px',
    opacity: 0.54,
    duration: '10.6s',
    delay: '-5.4s',
    rotate: '76deg',
  },
  {
    size: '62%',
    width: '1px',
    opacity: 0.58,
    duration: '15s',
    delay: '-3.6s',
    rotate: '164deg',
  },
  {
    size: '66%',
    width: '2px',
    opacity: 0.62,
    duration: '9.8s',
    delay: '-7s',
    rotate: '224deg',
  },
  {
    size: '70%',
    width: '1px',
    opacity: 0.66,
    duration: '13.8s',
    delay: '-1.8s',
    rotate: '142deg',
  },
  {
    size: '74%',
    width: '1px',
    opacity: 0.7,
    duration: '8.4s',
    delay: '-4.8s',
    rotate: '318deg',
  },
  {
    size: '78%',
    width: '2px',
    opacity: 0.74,
    duration: '12.8s',
    delay: '-6.8s',
    rotate: '58deg',
  },
  {
    size: '82%',
    width: '1px',
    opacity: 0.78,
    duration: '10.2s',
    delay: '-2.8s',
    rotate: '264deg',
  },
  {
    size: '86%',
    width: '1px',
    opacity: 0.82,
    duration: '14.2s',
    delay: '-5.1s',
    rotate: '96deg',
  },
  {
    size: '90%',
    width: '2px',
    opacity: 0.86,
    duration: '9s',
    delay: '-3.3s',
    rotate: '186deg',
  },
];

const BUBBLES = [
  'hub-bubble-x1',
  'hub-bubble-x2',
  'hub-bubble-x3',
  'hub-bubble-x4',
  'hub-bubble-x5',
  'hub-bubble-x6',
  'hub-bubble-x7',
  'hub-bubble-x8',
  'hub-bubble-x9',
  'hub-bubble-x10',
  'hub-bubble-x11',
  'hub-bubble-x12',
  'hub-bubble-x13',
  'hub-bubble-x14',
  'hub-bubble-x15',
];

type ProblemCard = {
  number: string;
  title: string;
  description: string;
  metric: string;
  icon: typeof FileSearch;
};

const problemCards: ProblemCard[] = [
  {
    number: '01',
    title: '図面はあった。\nでも、その周りが出てこない。',
    description:
      '見積書は別フォルダ、仕様書はメール、検査記録は紙の棚。1製品の全体像を揃えるだけで、午前が消える。',
    metric: '年間 240時間 ロス',
    icon: FileSearch,
  },
  {
    number: '02',
    title: 'あの人の頭の中にしか、なかった。',
    description:
      '取引先との取り決め、過去のトラブル、値段を下げた理由。書き残す場所がないから、退職と一緒に消えた。',
    metric: '知識消失リスク',
    icon: Puzzle,
  },
  {
    number: '03',
    title: '同じ製品なのに、見ているデータが違う。',
    description:
      '設計の図面、調達の単価表、製造の工程表。同じ製品のはずが、別ファイルで、更新タイミングも違う。確認の電話が毎日鳴る。',
    metric: '確認往復が常態化',
    icon: Workflow,
  },
];

export function ProblemSolutionSection() {
  return (
    <section className='bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-20'>
      <div className='mx-auto max-w-[1320px]'>
        <div className='mx-auto max-w-[840px] text-center'>
          <p className='text-lp-primary text-sm font-semibold tracking-[0.18em]'>
            THE PROBLEM
          </p>
          <h2 className='text-lp-text mt-4 text-[clamp(2.15rem,4vw,3.7rem)] leading-[1.04] font-black tracking-[-0.06em]'>
            <span className='block'>製造現場で起きている</span>
            <span className='block'>3つの情報の分断</span>
          </h2>
          <div className='mx-auto mt-6 max-w-[640px] space-y-3'>
            <div className='border-lp-text-subtle/55 border-t-2 border-solid' />
            <p className='text-lp-text-subtle mx-auto max-w-[44rem] text-base leading-7 font-semibold sm:text-lg'>
              図面そのものの保管はできても、図面に紐づく仕様書や過去のトラブル、設計判断の経緯までを一元的に参照できる仕組みは、整備されていない企業が多く存在します。情報が分断されている状態は現場の判断を遅らせ、ノウハウの引き継ぎを困難にしています。
            </p>
          </div>
        </div>

        <div className='mt-12 grid gap-8 lg:grid-cols-3'>
          {problemCards.map(
            ({ number, title, description, metric, icon: Icon }) => (
              <article
                key={number}
                className='border-lp-border relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-white px-6 py-8 shadow-[0_18px_44px_rgba(15,23,42,0.07)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.10)]'
              >
                <div className='pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--lp-danger)_80%,transparent)_0%,color-mix(in_srgb,var(--lp-danger)_30%,transparent)_100%)]' />

                <span className='text-lp-text/[0.05] pointer-events-none absolute -top-6 -right-2 text-[9rem] leading-none font-black tracking-[-0.06em] select-none'>
                  {number}
                </span>

                <div className='relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--lp-primary)_0%,var(--lp-primary-strong)_100%)] text-white shadow-[0_12px_28px_color-mix(in_srgb,var(--lp-primary)_38%,transparent)]'>
                  <span className='absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.45),transparent_60%)]' />
                  <Icon className='relative h-8 w-8 stroke-[1.8]' />
                </div>

                <p className='text-lp-primary relative z-10 mt-5 text-[1.05rem] leading-none font-black tracking-[0.04em]'>
                  {number}
                </p>
                <h3 className='text-lp-text relative z-10 mt-3 text-[1.16rem] leading-tight font-bold tracking-[-0.03em] whitespace-pre-line'>
                  {title}
                </h3>
                <p className='text-lp-text-muted relative z-10 mt-3 text-[0.92rem] leading-7 font-medium'>
                  {description}
                </p>

                <div className='relative z-10 mt-auto pt-6'>
                  <span className='text-lp-danger ring-lp-danger/30 inline-flex items-center gap-2 rounded-full bg-[color-mix(in_srgb,var(--lp-danger)_12%,white)] px-4 py-2 text-[0.85rem] font-black ring-1'>
                    <span className='bg-lp-danger h-1.5 w-1.5 animate-pulse rounded-full' />
                    {metric}
                  </span>
                </div>
              </article>
            ),
          )}
        </div>

        <section className='relative mt-22 overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,var(--lp-primary-deep)_0%,var(--lp-primary-strong)_54%,var(--lp-primary)_100%)] px-6 py-14 sm:px-10 sm:py-16 lg:bg-[linear-gradient(90deg,var(--lp-primary-deep)_0%,var(--lp-primary-strong)_52%,var(--lp-primary)_100%)] lg:px-14 lg:py-14'>
          <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_82%_76%,rgba(255,255,255,0.16),transparent_30%),linear-gradient(180deg,rgba(0,26,71,0.38)_0%,rgba(0,26,71,0.18)_42%,rgba(0,26,71,0)_82%)] lg:bg-[radial-gradient(circle_at_22%_28%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(255,255,255,0.16),transparent_30%),linear-gradient(90deg,rgba(0,26,71,0.38)_0%,rgba(0,26,71,0.18)_46%,rgba(0,26,71,0)_82%)]' />
          <div className='pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_100%)] lg:block' />
          {BUBBLES.map((bubbleClass) => (
            <span
              key={bubbleClass}
              className={`hub-bubble pointer-events-none absolute ${bubbleClass}`}
            />
          ))}

          <div className='relative z-10 grid items-center gap-7 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-6'>
            <div className='max-w-[44rem]'>
              <p className='text-sm font-black tracking-[0.24em] text-white/92 uppercase'>
                THE SOLUTION
              </p>
              <h3 className='mt-4 text-[clamp(1.9rem,4vw,3.45rem)] leading-[1.12] font-black tracking-[-0.04em] text-white'>
                <span className='block'>図面を入口に</span>
                <span className='block'>製造のノウハウが、</span>
                <span className='block'>会社に残る仕組みを。</span>
              </h3>
              <p className='mt-5 max-w-[40rem] text-base leading-8 font-semibold text-white/94 sm:text-[1.05rem]'>
                ARCHAIVEは、図面と、図面に紐づくものづくりの情報を、製品単位で蓄積する次世代のAIデータ基盤です。担当者の異動や退職があっても、過去のノウハウと判断は会社に残り、AIで活用できる状態が維持されます。
              </p>
              <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                <RippleLink
                  href='#contact'
                  className='inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-base font-black text-[color-mix(in_srgb,var(--lp-primary)_68%,black)] shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition hover:translate-y-[-1px] hover:bg-[color-mix(in_srgb,white_90%,var(--lp-primary))]'
                  bgClassName='bg-[color-mix(in_srgb,var(--lp-primary)_86%,black_6%)]'
                  contentClassName='text-inherit group-hover:text-white'
                >
                  資料を無料ダウンロード
                </RippleLink>
                <RippleLink
                  href='#demo'
                  className='inline-flex items-center justify-center rounded-2xl border border-white/45 bg-white/10 px-7 py-4 text-base font-black text-white shadow-[0_12px_30px_rgba(15,23,42,0.10)] backdrop-blur-sm transition hover:translate-y-[-1px] hover:bg-white/16'
                  bgClassName='bg-[color-mix(in_srgb,var(--lp-primary)_86%,black_6%)]'
                  contentClassName='text-inherit'
                >
                  デモを予約する
                </RippleLink>
              </div>
            </div>

            <div className='relative flex min-h-[17rem] items-center justify-center sm:min-h-[21.5rem] lg:justify-center'>
              <div className='relative h-[15.75rem] w-[15.75rem] sm:h-[23.5rem] sm:w-[23.5rem] lg:h-[25.5rem] lg:w-[25.5rem]'>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div
                    className='absolute h-[15.25rem] w-[15.25rem] animate-[hubOrbitSpin_18s_linear_infinite] rounded-full sm:h-[23rem] sm:w-[23rem] lg:h-[25rem] lg:w-[25rem]'
                    style={{
                      background:
                        'conic-gradient(from 0deg, color-mix(in srgb, var(--lp-primary) 22%, transparent), rgba(255,255,255,0.82), color-mix(in srgb, var(--lp-primary) 86%, white), rgba(255,255,255,0.62), color-mix(in srgb, var(--lp-primary) 70%, white), rgba(255,255,255,0.88), color-mix(in srgb, var(--lp-primary) 40%, transparent), rgba(255,255,255,0.48))',
                    }}
                  >
                    <div className='absolute inset-3 rounded-full bg-[var(--lp-primary)]' />
                  </div>
                </div>
                <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
                  {ARC_RINGS.map((ring) => (
                    <div
                      key={ring.size}
                      className='absolute rounded-full'
                      style={{
                        width: ring.size,
                        height: ring.size,
                        opacity: ring.opacity,
                        transform: `rotate(${ring.rotate})`,
                      }}
                    >
                      <div
                        className='hub-scifi-ring h-full w-full animate-[hubTrailRotate_var(--trail-duration)_linear_alternate_infinite] rounded-full'
                        style={{
                          borderWidth: ring.width,
                          animationDelay: ring.delay,
                          ['--trail-duration' as string]: ring.duration,
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className='hub-orbit absolute inset-[6%]'>
                  {ORBIT_ITEMS.map((item, index) => (
                    <div
                      key={item.label}
                      className='hub-orbit-node absolute top-1/2 left-1/2'
                      style={{
                        ['--hub-node-angle' as string]: item.angle,
                      }}
                    >
                      <div
                        className='hub-orbit-node-upright'
                        style={{ transform: `rotate(-${item.angle})` }}
                      >
                        <div
                          className={`hub-orbit-node-inner relative flex h-[3.5rem] w-[3.5rem] items-center justify-center ${
                            item.label === '設計データ'
                              ? 'sm:h-[5.2rem] sm:w-[5.2rem] lg:h-[5.6rem] lg:w-[5.6rem]'
                              : 'sm:h-20 sm:w-20'
                          }`}
                        >
                          <div
                            className='absolute inset-0 animate-[hubNodeReverse_8s_linear_infinite] rounded-full border-2 border-white/30'
                            style={{ animationDelay: `${index * 1.6}s` }}
                          />
                          <div className='absolute inset-1 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(255,255,255,0.72))] shadow-lg' />
                          <div className='absolute inset-1 rounded-full bg-[linear-gradient(45deg,color-mix(in_srgb,var(--lp-primary)_80%,transparent),color-mix(in_srgb,var(--lp-primary)_58%,transparent),transparent)]' />
                          <div className='absolute inset-0 animate-pulse rounded-full bg-[color-mix(in_srgb,var(--lp-primary)_20%,transparent)] blur-xl' />
                          <span className='relative z-10 px-1.5 text-[8px] font-black tracking-[0.02em] whitespace-nowrap text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.22)] sm:px-2 sm:text-[10px] lg:text-[11px]'>
                            {item.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='relative flex h-[7.5rem] w-[7.5rem] items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.20)_0%,color-mix(in_srgb,var(--lp-primary)_82%,black_10%)_58%,color-mix(in_srgb,var(--lp-primary)_72%,black_24%)_100%)] shadow-[0_26px_80px_rgba(8,31,36,0.34)] sm:h-48 sm:w-48 lg:h-56 lg:w-56'>
                    <div className='absolute inset-[10%] rounded-full border border-white/14' />
                    <div className='absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,white_18%,transparent),transparent_68%)] blur-xl' />
                    <Image
                      src='/svg/logo-text.svg'
                      alt='ARCHAIVE'
                      width={164}
                      height={70}
                      className='relative z-10 h-auto w-[6.3rem] brightness-[1.28] contrast-[1.1] drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)] sm:w-[9.4rem] lg:w-[10.6rem]'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .hub-orbit {
              animation: hubOrbitSpin 24s linear infinite;
            }

            .hub-orbit-node {
              margin-left: -1.75rem;
              margin-top: -1.75rem;
              transform: rotate(var(--hub-node-angle)) translateY(-7.4rem);
            }

            @media (min-width: 640px) {
              .hub-orbit-node {
                margin-left: -2.5rem;
                margin-top: -2.5rem;
                transform: rotate(var(--hub-node-angle)) translateY(-11.8rem);
              }
            }

            .hub-orbit-node-inner {
              animation: hubOrbitCounter 24s linear infinite;
            }

            .hub-bubble {
              width: 5vw;
              height: 5vw;
              background: color-mix(in srgb, var(--lp-primary) 88%, white 12%);
              border: 0.5px solid rgba(255, 255, 255, 0.7);
              border-radius: 9999px;
              box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
            }

            @keyframes hubOrbitSpin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }

            @keyframes hubOrbitCounter {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(-360deg);
              }
            }

            @keyframes hubNodeReverse {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(-360deg);
              }
            }

            @keyframes hubTrailRotate {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }

            @keyframes hubBubbleRise {
              0% {
                top: 100%;
                opacity: 0;
              }
              15% {
                opacity: 0.3;
              }
              50% {
                opacity: 1;
              }
              100% {
                top: 0;
                opacity: 0;
              }
            }

            @keyframes hubBubbleSideways {
              0% {
                margin-left: 0;
              }
              100% {
                margin-left: 5vw;
              }
            }

            .hub-bubble-x1 {
              left: 85vw;
              transform: scale(0.9);
              opacity: 0.2;
              animation:
                hubBubbleRise 4s linear infinite,
                hubBubbleSideways 4s ease-in-out infinite alternate;
            }

            .hub-bubble-x2 {
              left: 5vw;
              transform: scale(0.6);
              opacity: 0.5;
              animation:
                hubBubbleRise 6s linear infinite,
                hubBubbleSideways 5s ease-in-out infinite alternate;
            }

            .hub-bubble-x3 {
              left: 35vw;
              transform: scale(0.8);
              opacity: 0.3;
              animation:
                hubBubbleRise 5s linear infinite,
                hubBubbleSideways 4s ease-in-out infinite alternate;
            }

            .hub-bubble-x4 {
              left: 47vw;
              transform: scale(0.75);
              opacity: 0.35;
              animation:
                hubBubbleRise 8s linear infinite,
                hubBubbleSideways 2s ease-in-out infinite alternate;
            }

            .hub-bubble-x5 {
              left: 15vw;
              transform: scale(0.8);
              opacity: 0.3;
              animation:
                hubBubbleRise 5s linear infinite,
                hubBubbleSideways 1s ease-in-out infinite alternate;
            }

            .hub-bubble-x6 {
              left: 73vw;
              transform: scale(0.4);
              opacity: 0.2;
              animation:
                hubBubbleRise 4s linear infinite,
                hubBubbleSideways 4s ease-in-out infinite alternate;
            }

            .hub-bubble-x7 {
              left: 67vw;
              transform: scale(0.6);
              opacity: 0.5;
              animation:
                hubBubbleRise 11s linear infinite,
                hubBubbleSideways 5s ease-in-out infinite alternate;
            }

            .hub-bubble-x8 {
              left: 56vw;
              transform: scale(0.8);
              opacity: 0.3;
              animation:
                hubBubbleRise 9s linear infinite,
                hubBubbleSideways 4s ease-in-out infinite alternate;
            }

            .hub-bubble-x9 {
              left: 20vw;
              transform: scale(0.75);
              opacity: 0.35;
              animation:
                hubBubbleRise 4.5s linear infinite,
                hubBubbleSideways 2s ease-in-out infinite alternate;
            }

            .hub-bubble-x10 {
              left: 33vw;
              transform: scale(0.4);
              opacity: 0.3;
              animation:
                hubBubbleRise 11.3s linear infinite,
                hubBubbleSideways 5s ease-in-out infinite alternate;
            }

            .hub-bubble-x11 {
              left: 11vw;
              transform: scale(0.55);
              opacity: 0.22;
              animation:
                hubBubbleRise 7.4s linear infinite,
                hubBubbleSideways 3.4s ease-in-out infinite alternate;
            }

            .hub-bubble-x12 {
              left: 28vw;
              transform: scale(0.7);
              opacity: 0.26;
              animation:
                hubBubbleRise 6.6s linear infinite,
                hubBubbleSideways 2.8s ease-in-out infinite alternate;
            }

            .hub-bubble-x13 {
              left: 52vw;
              transform: scale(0.5);
              opacity: 0.2;
              animation:
                hubBubbleRise 9.8s linear infinite,
                hubBubbleSideways 4.6s ease-in-out infinite alternate;
            }

            .hub-bubble-x14 {
              left: 76vw;
              transform: scale(0.72);
              opacity: 0.28;
              animation:
                hubBubbleRise 7.1s linear infinite,
                hubBubbleSideways 3.1s ease-in-out infinite alternate;
            }

            .hub-bubble-x15 {
              left: 92vw;
              transform: scale(0.46);
              opacity: 0.18;
              animation:
                hubBubbleRise 10.4s linear infinite,
                hubBubbleSideways 4.9s ease-in-out infinite alternate;
            }

            .hub-scifi-ring {
              border-style: solid;
              border-color: rgba(255, 255, 255, 0.7) transparent;
              filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.14));
              will-change: transform;
            }
          `}</style>
        </section>
      </div>
    </section>
  );
}
