'use client';

const LOGOS = [
  'A社',
  'B社',
  'C工業',
  'D精密',
  'E製作所',
  'Fテック',
  'G産業',
  'Hソリューションズ',
  'Iマテリアル',
  'Jパーツ',
  'K機械',
  'Lエンジニアリング',
];

export function LogoMarquee() {
  const items = [...LOGOS, ...LOGOS];

  return (
    <section className='relative overflow-hidden border-y border-slate-200/80 bg-white/85 py-10 backdrop-blur lg:py-12'>
      <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-28' />
      <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-28' />
      <div className='relative'>
        <div className='logo-marquee flex w-max items-center gap-4 px-4 sm:gap-6 sm:px-6'>
          {items.map((name, index) => (
            <div
              key={`${name}-${index}`}
              className='flex h-[7rem] min-w-[16rem] items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-10 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:h-[8rem] sm:min-w-[18rem] sm:px-12'
            >
              <span className='text-lg font-black tracking-[0.14em] text-slate-500 sm:text-xl'>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .logo-marquee {
          animation: logo-marquee 32s linear infinite;
        }

        @keyframes logo-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
