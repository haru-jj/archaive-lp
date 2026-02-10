'use client';

const noteCards = [
  {
    title: 'これさえ読めばOK！製造業の主要ITツール（CAD/CAM/PDM/PLM）を総まとめ比較',
    text: 'CAD/CAM/PDM/PLMの違いと導入時の落とし穴を整理し、現場規模に合う選び方を解説。',
    href: 'https://note.com/starup_ogata/n/n18f895d01cbc',
    image: '/images/note/image_1.png',
  },
  {
    title: 'IT人材不足の会社こそ「クラウド」を選ぶべき理由。サーバー管理の手間とコストから解放される図面管理とは',
    text: 'IT人材不足でも進めやすいクラウドの利点を、図面管理の運用負荷・コスト削減の視点で紹介。',
    href: 'https://note.com/starup_ogata/n/ne47727b63eab',
    image: '/images/note/スクリーンショット 2026-02-06 0.37.52.png',
  },
  {
    title: '図面が見つからない…製造業の現場で起こるトラブルと解決策',
    text: '図面紛失の原因と現場トラブルのリスクを整理し、再発を防ぐ管理の要点をまとめます。',
    href: 'https://note.com/starup_ogata/n/nf0084932001f',
    image: '/images/note/image_3.png',
  },
];

export default function NoteSection() {
  return (
    <section className="pt-24 pb-12 bg-white" aria-label="ARCHAIVE note">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold text-[#37B7C4] mb-3">ARCHAIVE note</p>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">図面・運用改善のヒント</h3>
        </div>
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 xl:grid-cols-3 text-gray-700">
          {noteCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/70 overflow-hidden transition-transform duration-300 hover:-translate-y-1 w-full"
            >
              <div className="relative w-full bg-gray-100 overflow-hidden aspect-[16/9]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-100"
                  width={1600}
                  height={900}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col gap-3">
                <h4 className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-[#37B7C4] transition-colors leading-relaxed line-clamp-2">
                  {card.title}
                </h4>
                <p className="text-sm leading-relaxed font-medium text-gray-700 line-clamp-3">{card.text}</p>
                <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#37B7C4]">
                  読む
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-6 text-center pb-10 sm:pb-12">
          <a
            href="https://note.com/starup_ogata"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white border-2 border-[#37B7C4] text-[#37B7C4] rounded-full font-bold hover:bg-[#37B7C4] hover:text-white btn-hover group relative overflow-hidden text-sm sm:text-base"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#37B7C4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10">noteでさらに詳しく読む</span>
            <svg
              className="w-5 h-5 group-icon-right relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
