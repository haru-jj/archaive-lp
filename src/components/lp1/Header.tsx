'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { label: '課題', href: '#problem' },
  { label: '解決策', href: '#solution' },
  { label: '特徴', href: '#features' },
  { label: '機能', href: '#product' },
  { label: '導入事例', href: '#case' },
  { label: '導入の流れ', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/lp1" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-[#37B7C4] to-[#2A96A5] rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-black text-xl">A</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#37B7C4] rounded-full animate-pulse"></div>
            </div>
            <span className={`text-2xl font-black tracking-tight transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-gray-900'
            }`}>
              ARCHAIVE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`font-medium transition-all duration-300 hover:text-[#37B7C4] relative ${
                    isScrolled ? 'text-gray-700' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#37B7C4] transition-all duration-300 hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-[#37B7C4] to-[#2A96A5] text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              無料デモを申し込む
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <ul className="py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 hover:text-[#37B7C4] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="px-6 py-3">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-[#37B7C4] to-[#2A96A5] text-white px-6 py-3 rounded-lg font-medium text-center shadow-lg"
              >
                無料デモを申し込む
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}