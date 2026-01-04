'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const navigationItems = [
    { href: "#demo", label: "ARCHAIVEについて" },
    { href: "#before-after", label: "課題と解決" },
    { href: "#features", label: "主要機能" },
    { href: "#case", label: "導入事例" },
    { href: "#process", label: "導入ステップ" },
    { href: "#news", label: "お知らせ" },
    { href: "#faq", label: "よくある質問" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // ホームページ以外からの場合はトップページに遷移
    if (!isHomePage && href.startsWith('#')) {
      window.location.href = '/' + href;
      return;
    }
    
    e.preventDefault();
    setIsMenuOpen(false);
    const offset = 80; // ヘッダーの高さ分のオフセット
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Element with ID ${href} not found`);
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="w-full px-2 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <div className="flex items-center flex-shrink-0 ml-4">
            <Link 
              href="/" 
              className="flex items-center gap-2"
            >
              <Image
                src="/svg/logo.svg"
                alt="ARCHAIVE Logo"
                width={40}
                height={40}
                priority
              />
              <Image
                src="/svg/logo-text.svg"
                alt="ARCHAIVE"
                width={120}
                height={32}
                priority
                className="h-8"
              />
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center justify-center">
            <div className="flex items-center space-x-6">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-black hover:text-[#37B7C4] transition-colors duration-200 font-bold text-sm whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* CTA ボタン */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <Link 
              href="/download"
              className="bg-[#f54848] border-2 border-[#f54848] rounded-full text-white px-6 py-3 text-sm font-bold cursor-pointer flex items-center justify-center hover:opacity-90 btn-hover"
            >
              資料ダウンロード
            </Link>
            <Link 
              href="/apply"
              className="bg-white border-2 border-gray-300 text-black rounded-full px-6 py-3 text-sm font-bold cursor-pointer flex items-center justify-center hover:bg-gray-50 btn-hover"
            >
              無料デモ体験
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-black hover:text-[#37B7C4] transition-colors duration-200 font-bold py-2 text-sm"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col space-y-3 mt-6">
              <Link 
                href="/download"
                className="bg-[#f54848] border-2 border-[#f54848] rounded-full text-white px-6 py-3 text-base font-bold cursor-pointer flex items-center justify-center hover:opacity-90 btn-hover"
              >
                資料ダウンロード
              </Link>
              <Link 
                href="/apply"
                className="bg-white border-2 border-gray-300 text-black rounded-full px-6 py-3 text-base font-bold cursor-pointer flex items-center justify-center hover:bg-gray-50 btn-hover"
              >
                無料デモ体験
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
