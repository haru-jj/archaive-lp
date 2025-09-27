'use client';

import Link from 'next/link';

export default function HeroQuickNav() {
  return (
    <section className="bg-white h-[calc(20vh-16px)] border-t border-gray-200">
      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 h-full">
          <QuickNavItem href="#demo" title="ARCHAIVEとは" label="サービス紹介" />
          <QuickNavItem href="#problem-solution" title="ARCHAIVEが解決する" label="課題と解決策" />
          <QuickNavItem href="#features" title="ARCHAIVEの" label="主要機能" />
          <QuickNavItem href="#case" title="ARCHAIVEの" label="導入事例" />
          <QuickNavItem href="#process" title="ARCHAIVEの" label="導入ステップ" />
        </div>
      </div>
    </section>
  );
}

function QuickNavItem({ href, title, label }: { href: string; title: string; label: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80; // ヘッダーの高さ + 余白
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="group flex items-center justify-between h-full px-3 hover:bg-gray-50 transition-all duration-300 relative overflow-hidden"
    >
      {/* Ripple wave animation */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-[#37B7C4]/20 rounded-full animate-ripple"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-[#37B7C4]/15 rounded-full animate-ripple-delay"></div>
      </div>
      
      {/* Simple bottom border animation */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#37B7C4] group-hover:w-full transition-all duration-400"></div>
      
      <div className="transition-transform duration-300 group-hover:scale-105 relative z-10">
        <div className="text-sm text-gray-400 tracking-widest group-hover:text-gray-600 transition-all duration-300">{title}</div>
        <div className="text-lg font-semibold text-gray-800 mt-1 group-hover:text-[#37B7C4] transition-all duration-300 delay-100">{label}</div>
      </div>
      <svg
        className="w-5 h-5 text-gray-300 group-hover:text-[#37B7C4] group-hover:translate-x-1 transition-all duration-300 relative z-10"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
      </svg>
      
      <style jsx>{`
        @keyframes ripple {
          0% {
            width: 1rem;
            height: 1rem;
            opacity: 1;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 1.5s ease-out infinite;
        }
        .animate-ripple-delay {
          animation: ripple 1.5s ease-out infinite;
          animation-delay: 0.3s;
        }
      `}</style>
    </a>
  );
}