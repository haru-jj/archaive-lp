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
    { href: "#demo", label: "ARCHAIVEとは" },
    { href: "#before-after", label: "課題と解決" },
    { href: "#features", label: "主要機能" },
    { href: "#case", label: "導入事例" },
    { href: "#process", label: "導入ステップ" },
    { href: "#news", label: "お知らせ" },
    { href: "#security", label: "セキュリティ" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // ホームページ以外からの場合はトップページに遷移
    if (!isHomePage && href.startsWith('#')) {
      window.location.href = '/' + href;
      return;
    }
    
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // ヘッダーの高さ分のオフセット
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
      <div className="w-full px-8 py-4">
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
                  className="text-gray-600 hover:text-[#37B7C4] transition-colors duration-200 font-bold text-sm whitespace-nowrap"
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
              className="bg-white border-2 border-gray-300 rounded-lg text-black px-6 py-3 text-sm font-bold cursor-pointer flex items-center justify-center hover:bg-gray-50 btn-hover"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                サービス紹介資料
              </span>
            </Link>
            <Link 
              href="/apply"
              className="bg-transparent border-2 border-[#37B7C4] text-[#37B7C4] rounded-lg px-6 py-3 text-sm font-bold cursor-pointer flex items-center justify-center hover:bg-[#37B7C4]/10 btn-hover"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                無料デモの申込み
              </span>
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
                  className="text-gray-600 hover:text-[#37B7C4] transition-colors duration-200 font-bold py-2 text-sm"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col space-y-3 mt-6">
              <Link 
                href="/download"
                className="bg-white border-2 border-gray-300 rounded-lg text-black px-6 py-3 text-base font-bold cursor-pointer flex items-center justify-center hover:bg-gray-50 btn-hover"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                  サービス紹介資料
                </span>
              </Link>
              <Link 
                href="/apply"
                className="bg-transparent border-2 border-[#37B7C4] text-[#37B7C4] rounded-lg px-6 py-3 text-base font-bold cursor-pointer flex items-center justify-center hover:bg-[#37B7C4]/10 btn-hover"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  無料デモの申込み
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}