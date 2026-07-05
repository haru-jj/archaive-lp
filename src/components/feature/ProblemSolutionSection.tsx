'use client';

import Image from 'next/image';

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
  illustration: string;
  illustrationAlt: string;
  illustrationClass: string;
};

const problemCards: ProblemCard[] = [
  {
    number: '01',
    title: '必要な図面がすぐに見つからない',
    description:
      '図面はファイルサーバーに、仕様書はメール、検査記録は紙の棚。1つの製品の全体像を集めるだけで、午前が消えていきます。',
    metric: '年間 240時間のロス',
    illustration: '/lp-v2/problem_too_many_data.svg',
    illustrationAlt: '大量のデータに埋もれて図面を探すイラスト',
    illustrationClass: 'h-32 w-[58%] sm:h-36',
  },
  {
    number: '02',
    title: 'ノウハウが個人に依存している',
    description:
      '取引先との取り決め、過去のトラブルの原因、設計判断の理由。記録する場所がないから、担当者の異動や退職とともに消えていきます。',
    metric: '知識の消失リスク',
    illustration: '/lp-v2/problem_zokuzinka.svg',
    illustrationAlt: '属人化したノウハウのイラスト',
    illustrationClass: 'h-32 w-[58%] sm:h-36',
  },
  {
    number: '03',
    title: '同じ製品なのに、見ているデータが違う',
    description:
      '設計は図面、製造は工程表、調達は単価表。同じ製品なのに、別ファイル、別タイミング。\n確認のための連絡が、毎日発生しています。',
    metric: '確認業務の常態化',
    illustration: '/lp-v2/problem_different_data.svg',
    illustrationAlt: '部門ごとに異なるデータを参照しているイラスト',
    illustrationClass: 'h-32 w-[58%] sm:h-36',
  },
];

export function ProblemSolutionSection() {
  return (
    <section className='relative overflow-hidden bg-[linear-gradient(180deg,#0A1B40_0%,#0D2453_32%,#27437A_58%,#8AA0C2_82%,#FFFFFF_100%)] px-6 py-10 sm:px-10 sm:py-16 lg:px-16 lg:py-20'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(85,189,207,0.16),transparent_42%),radial-gradient(circle_at_88%_18%,rgba(85,189,207,0.10),transparent_38%)]' />
      <div className='relative z-10 mx-auto max-w-[1320px]'>
        <div className='mx-auto max-w-[840px] text-center'>
          <p className='text-lp-primary text-sm font-bold'>
            THE PROBLEM
          </p>
          <h2 className='mt-4 text-[1.5rem] leading-[1.35] font-bold text-white sm:text-[clamp(1.625rem,2.6vw,2rem)]'>
            「辿り着けない」がなくなる会社へ
          </h2>
          <div className='mx-auto mt-6 max-w-[640px] space-y-3'>
            <div className='border-t-2 border-solid border-white/22' />
            <p className='mx-auto max-w-[44rem] text-base leading-7 font-normal text-white/78 sm:text-lg'>
              図面は保管されている。仕様書も、過去のトラブル記録もどこかにある。
              <br />
              それなのに、必要なときに必要な情報が出てこない。
              <br />
              製造現場で起きている3つの分断を、ARCHAIVEは解消します。
            </p>
          </div>
        </div>

        <div className='mt-12 grid gap-8 lg:grid-cols-3'>
          {problemCards.map(
            ({
              number,
              title,
              description,
              metric,
              illustration,
              illustrationAlt,
              illustrationClass,
            }) => (
              <article
                key={number}
                className='relative mx-auto flex h-full w-full max-w-[34rem] flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-white px-6 pt-9 pb-8 shadow-[0_18px_44px_rgba(0,10,40,0.28)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,10,40,0.36)] lg:max-w-none'
              >
                <div className='pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,var(--lp-primary-strong)_0%,color-mix(in_srgb,var(--lp-primary)_30%,transparent)_100%)]' />

                <span className='pointer-events-none absolute -top-4 -left-3 text-[8rem] leading-none font-bold text-[color-mix(in_srgb,var(--lp-text)_32%,transparent)] select-none sm:-top-6 sm:-left-4 sm:text-[10.5rem]'>
                  {number}
                </span>

                <div className={`relative z-10 ml-auto flex items-center justify-center ${illustrationClass}`}>
                  <Image
                    src={illustration}
                    alt={illustrationAlt}
                    width={260}
                    height={220}
                    className='h-full w-auto object-contain'
                  />
                </div>

                <h3 className='text-lp-text relative z-10 mt-6 text-[1.16rem] leading-tight font-bold whitespace-pre-line'>
                  {title}
                </h3>
                <p className='text-lp-text-muted relative z-10 mt-3 text-[0.92rem] leading-7 font-normal whitespace-pre-line'>
                  {description}
                </p>

                <div className='relative z-10 mt-auto pt-6 text-center'>
                  <span className='relative inline-block px-5 py-2'>
                    <span
                      aria-hidden='true'
                      className='pointer-events-none absolute inset-0 rounded-full bg-[color-mix(in_srgb,var(--lp-primary)_20%,white)] ring-1 ring-[color-mix(in_srgb,var(--lp-primary)_32%,transparent)]'
                    />
                    <span className='relative text-[1.1rem] font-bold text-[var(--lp-text)] sm:text-[1.18rem]'>
                      {metric}
                    </span>
                  </span>
                </div>
              </article>
            ),
          )}
        </div>

        <section className='relative mt-12 sm:mt-22 overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,var(--lp-primary-deep)_0%,var(--lp-primary-strong)_54%,var(--lp-primary)_100%)] px-6 py-10 sm:px-10 sm:py-16 lg:bg-[linear-gradient(90deg,var(--lp-primary-deep)_0%,var(--lp-primary-strong)_52%,var(--lp-primary)_100%)] lg:px-14 lg:py-14'>
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
              <p className='text-[1.1rem] leading-[1.6] font-bold text-white sm:text-[1.2rem]'>
                PLMは重すぎる。図面管理では足りない。製造現場に要るのは、その間にある「情報の基盤」です。
              </p>
              <p className='mt-6 text-sm font-bold text-white/92 uppercase'>
                THE SOLUTION
              </p>
              <h3 className='mt-4 text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.35] font-bold text-white'>
                図面に、書かれなかった全部を。
              </h3>
              <div className='mt-5 max-w-[40rem] space-y-5 text-base leading-8 font-normal text-white/94 sm:text-[1.05rem]'>
                <p>
                  図面には、寸法も公差も材質も、必要な仕様はすべて書いてあります。書かれていないのは、なぜその仕様にしたのか、いくらで請けたのか、前に何が起きたのか——判断の理由です。それは担当者の頭の中にあって、辞めれば一緒に消えます。
                </p>
                <p>
                  ARCHAIVEは、その判断を図面に紐付けて残します。担当者が辞めても、会社からは消えません。
                </p>
              </div>
              <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                <RippleLink
                  href='#contact'
                  className='inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-base font-bold text-[color-mix(in_srgb,var(--lp-primary)_68%,black)] shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition hover:translate-y-[-1px] hover:bg-[color-mix(in_srgb,white_90%,var(--lp-primary))]'
                  bgClassName='bg-[color-mix(in_srgb,var(--lp-primary)_86%,black_6%)]'
                  contentClassName='text-inherit group-hover:text-white'
                >
                  資料を無料ダウンロード
                </RippleLink>
                <RippleLink
                  href='#demo'
                  className='inline-flex items-center justify-center rounded-2xl border border-white/45 bg-white/10 px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(15,23,42,0.10)] backdrop-blur-sm transition hover:translate-y-[-1px] hover:bg-white/16'
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
                          <span className='relative z-10 px-1.5 text-[8px] font-bold whitespace-nowrap text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.22)] sm:px-2 sm:text-[10px] lg:text-[11px]'>
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
                    <div className='relative z-10 flex flex-col items-center gap-2 sm:gap-3'>
                      <Image
                        src='/images/Group (1).svg'
                        alt=''
                        aria-hidden='true'
                        width={127}
                        height={129}
                        className='h-auto w-12 drop-shadow-[0_4px_12px_rgba(0,0,0,0.28)] sm:w-16 lg:w-20'
                      />
                      <Image
                        src='/images/Group (2).svg'
                        alt='ARCHAIVE'
                        width={760}
                        height={122}
                        className='h-auto w-12 drop-shadow-[0_8px_20px_rgba(0,0,0,0.2)] sm:w-16 lg:w-20'
                      />
                    </div>
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
