'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const companyInfo = {
    name: "株式会社ARCHAIVE",
    email: "info@archaive.co.jp"
  };

  const links = [
    { label: "ARCHAIVEとは", href: "#demo" },
    { label: "課題と解決", href: "#before-after" },
    { label: "主要機能", href: "#features" },
    { label: "導入事例", href: "#case" },
    { label: "導入ステップ", href: "#process" },
    { label: "お知らせ", href: "#news" },
    { label: "セキュリティ", href: "#security" },
    { label: "お問い合わせ", href: "#cta" },
    { label: "会社概要", href: "https://starup01.jp/", external: true }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* メインフッターコンテンツ */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
          {/* ロゴ */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-flex items-center gap-2 sm:gap-3">
              <Image
                src="/svg/logo.svg"
                alt="ARCHAIVE Logo"
                width={28}
                height={28}
                className="cursor-pointer sm:w-8 sm:h-8"
              />
              <Image
                src="/svg/logo-text.svg"
                alt="ARCHAIVE"
                width={90}
                height={25}
                className="cursor-pointer h-6 sm:h-7 sm:w-[100px] filter brightness-0 invert"
              />
            </Link>
          </div>

          {/* ナビゲーションリンク */}
          <nav className="flex flex-col gap-4 lg:gap-4 w-full lg:w-auto">
            {/* メインナビゲーション */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-3 sm:gap-4 lg:gap-6">
              {links.slice(0, -1).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-[#37B7C4] transition-colors duration-200 text-xs sm:text-sm lg:text-sm whitespace-nowrap"
                  onClick={(e) => {
                    if (!link.external && link.href.startsWith('#')) {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({
                          top: elementPosition - offset,
                          behavior: 'smooth'
                        });
                      }
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* 会社概要リンク */}
            <div className="pt-2 lg:pt-0">
              <a
                href={links[links.length - 1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#37B7C4] transition-colors duration-200 text-xs sm:text-sm lg:text-sm"
              >
                {links[links.length - 1].label}
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* コピーライト */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-center items-center">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2025 STAR UP All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}