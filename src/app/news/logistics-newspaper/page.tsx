'use client';

import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LogisticsNewspaperNews() {
  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-20">
        {/* News Header */}
        <div className="bg-[#37B7C4] text-white text-center py-12">
          <h1 className="m-0 text-5xl font-bold">NEWS</h1>
          <p className="m-0 text-2xl">お知らせ</p>
        </div>

        {/* News Page */}
        <div className="bg-[#f4f4f4] py-20 flex justify-center min-h-screen">
          <div className="w-[70%] max-w-none mx-auto">
            <p className="text-[#888] text-sm mb-6">2025/3/5</p>
            <h2 className="text-2xl mt-6 mb-12 font-bold">日本物流新聞で取り上げられました</h2>
            <div className="bg-white p-12 shadow-lg rounded-lg h-fit">
            <div className="news-article">
              <p className="text-base leading-6 mb-6">
                弊社の製造業向け図面管理プロダクトである「ARCHAIVE」について、日本物流新聞で取り上げられました。
              </p>
              <p className="text-base leading-6 mb-6">
                2/25日付け 日本物流新聞<br />
                <strong>京都ビジネス交流フェア 京大発ベンチャーなど多彩な出展者</strong>
              </p>
              <a href="https://www.nb-shinbun.co.jp/" className="text-[#37B7C4] no-underline hover:underline">
                https://www.nb-shinbun.co.jp/
              </a>
              <p className="text-base leading-6 mt-8 mb-6">
                ARCHAIVEについては<Link href="/" className="text-[#37B7C4] no-underline hover:underline">こちら</Link>
              </p>
              {/* 新聞記事画像 */}
              <img 
                src="/images/nihon_butsuryu_shinbun_1.png" 
                alt="日本物流新聞記事" 
                className="w-full max-w-[600px] mt-8"
              />
            </div>
            </div>

            {/* 戻るリンク */}
            <div className="mt-20 text-center">
              <Link 
                href="/news" 
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#37B7C4] text-[#37B7C4] rounded-lg font-bold hover:bg-[#37B7C4] hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                お知らせ一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}