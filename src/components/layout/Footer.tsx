'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const companyInfo = {
    name: "株式会社ARCHAIVE",
    email: "info@archaive.co.jp"
  };

  const pathname = usePathname();

  const links = [
    { label: "ARCHAIVEとは", href: "#demo" },
    { label: "課題と解決", href: "#before-after" },
    { label: "主要機能", href: "#features" },
    { label: "導入事例", href: "#case" },
    { label: "導入ステップ", href: "#process" },
    { label: "お知らせ", href: "#news" },
    { label: "セキュリティ", href: "#security" },
  ];

  const inlineLinks = [
    { label: "お問い合わせ", href: "#cta" },
    { label: "会社概要", href: "https://starup01.jp/", external: true }
  ];

  const allLinks = [...links, ...inlineLinks];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { href: string; external?: boolean }) => {
    if (link.external) return;
    if (link.href.startsWith('#')) {
      // ホーム以外ではトップへ遷移してからアンカーへ（ヘッダーと同様の挙動）
      if (pathname !== '/') {
        e.preventDefault();
        window.location.href = '/' + link.href;
        return;
      }
      e.preventDefault();
      const element = document.querySelector(link.href);
      if (element) {
        const offset = 80; // ヘッダーと同じオフセット
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  const renderFooter = () => (
    <>
      {/* メインフッターコンテンツ */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="flex flex-col items-start gap-7 sm:gap-8">
          {/* ロゴ */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-flex items-center gap-2 sm:gap-3">
              <Image
                src="/svg/logo.svg"
                alt="ARCHAIVE Logo"
                width={40}
                height={40}
                className="cursor-pointer sm:w-10 sm:h-10"
              />
              <Image
                src="/svg/logo-text.svg"
                alt="ARCHAIVE"
                width={120}
                height={32}
                className="cursor-pointer h-8 sm:h-9 sm:w-[132px]"
              />
            </Link>
          </div>

          {/* ナビゲーションリンク */}
          <nav className="flex flex-col gap-5 w-full">
            {/* メインナビゲーション */}
            <div className="flex flex-nowrap items-center gap-7 sm:gap-10 lg:gap-14 overflow-x-auto">
              {allLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-[#37B7C4] transition-colors duration-200 text-xs sm:text-sm lg:text-sm whitespace-nowrap font-medium"
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* コピーライト */}
      <div className="border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-center items-center">
            <p className="text-gray-500 text-xs sm:text-sm">© 2025 STAR UP All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      {/* Mobile */}
      <div className="sm:hidden pl-6">{renderFooter()}</div>
      {/* Desktop */}
      <div className="hidden sm:block">{renderFooter()}</div>
    </footer>
  );
}
