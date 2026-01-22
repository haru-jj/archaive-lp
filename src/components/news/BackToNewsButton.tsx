'use client';

import Link from 'next/link';

const buttonClasses =
  'inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white border-2 border-[#37B7C4] text-[#37B7C4] rounded-full font-bold hover:bg-[#37B7C4] hover:text-white transition-all duration-300 btn-hover group relative overflow-hidden text-sm sm:text-base';

export default function BackToNewsButton({ text = 'お知らせ一覧に戻る' }: { text?: string }) {
  return (
    <Link href="/news" className={buttonClasses}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#37B7C4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative z-10">{text}</span>
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
    </Link>
  );
}
