'use client';

import Link from 'next/link';

const navigation = {
  product: [
    { name: '特徴', href: '#features' },
    { name: '機能', href: '#product' },
    { name: '導入事例', href: '#case' },
    { name: '料金プラン', href: '#pricing' },
  ],
  support: [
    { name: '導入の流れ', href: '#process' },
    { name: 'よくある質問', href: '#faq' },
    { name: 'お問い合わせ', href: '#contact' },
    { name: 'サポート', href: '/support' },
  ],
  company: [
    { name: '会社概要', href: '/company' },
    { name: 'ニュース', href: '/news' },
    { name: '採用情報', href: '/careers' },
    { name: 'パートナー', href: '/partners' },
  ],
  legal: [
    { name: '利用規約', href: '/terms' },
    { name: 'プライバシーポリシー', href: '/privacy' },
    { name: '特定商取引法', href: '/legal' },
    { name: 'セキュリティ', href: '/security' },
  ],
};

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="bg-gradient-to-r from-[#37B7C4]/20 to-[#2A96A5]/20 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                見積もり業務の効率化を始めませんか？
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                最新の製品アップデートやお役立ち情報をお届けします
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="メールアドレスを入力"
                  className="flex-1 px-6 py-3 bg-white/10 backdrop-blur border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#37B7C4] transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-[#37B7C4] to-[#2A96A5] text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  登録する
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/lp1" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#37B7C4] to-[#2A96A5] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">A</span>
              </div>
              <span className="text-2xl font-black text-white">ARCHAIVE</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              AIの力で見積もり業務を革新し、製造業の未来を創造します。
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#37B7C4] rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">製品</h4>
              <ul className="space-y-3">
                {navigation.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-[#37B7C4] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">サポート</h4>
              <ul className="space-y-3">
                {navigation.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-[#37B7C4] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">会社情報</h4>
              <ul className="space-y-3">
                {navigation.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-[#37B7C4] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">法的情報</h4>
              <ul className="space-y-3">
                {navigation.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-[#37B7C4] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-800 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#37B7C4] mb-1">200+</div>
            <div className="text-sm text-gray-400">導入企業</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#37B7C4] mb-1">3分</div>
            <div className="text-sm text-gray-400">見積作成時間</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#37B7C4] mb-1">84倍</div>
            <div className="text-sm text-gray-400">効率化実績</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#37B7C4] mb-1">99.8%</div>
            <div className="text-sm text-gray-400">精度</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 ARCHAIVE, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="/sitemap" className="hover:text-[#37B7C4] transition-colors">
              サイトマップ
            </a>
            <a href="/accessibility" className="hover:text-[#37B7C4] transition-colors">
              アクセシビリティ
            </a>
            <a href="/contact" className="hover:text-[#37B7C4] transition-colors">
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}