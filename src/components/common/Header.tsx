// src/components/common/Header.tsx
import Link from "next/link";
import Icon from "@/components/ui/Icon";

const nav = [
  { label: '特徴', href: '#features' },
  { label: 'お客様の声', href: '#cases' },
  { label: 'ご利用の流れ', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'お問い合わせ', href: '#contact' },
];

export default function Header() {
  return (
    <header className="w-full bg-white/90 backdrop-blur shadow-sm sticky top-0 z-30">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2">
          <Icon type="ai" size={32} />
          <span className="text-[#37B7C4] font-bold text-xl tracking-tight">ARCHAIVE</span>
        </Link>
        {/* ナビゲーション */}
        <ul className="hidden md:flex gap-6 text-[#2596a6] font-medium">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-[#37B7C4] transition px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#37B7C4]">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* CTAボタン */}
        <Link
          href="#contact"
          className="hidden md:inline-block px-6 py-2 bg-[#37B7C4] text-white rounded-lg font-bold hover:bg-[#2596a6] transition shadow focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:ring-offset-2"
        >
          無料デモ体験
        </Link>
      </nav>
    </header>
  );
}