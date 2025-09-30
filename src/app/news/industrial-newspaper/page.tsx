'use client';

import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function IndustrialNewspaperNews() {
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
            <p className="text-[#888] text-sm mb-6">2025/3/1</p>
            <h2 className="text-2xl mt-6 mb-12 font-bold">日刊工業新聞で取り上げられました</h2>
            <div className="bg-white p-12 shadow-lg rounded-lg h-fit">
            <div className="news-article">
              <p className="text-base leading-6 mb-6">
                弊社の製造業向け図面管理プロダクトである「ARCHAIVE」について、日刊工業新聞で取り上げられました。
              </p>
              <p className="text-base leading-6 mb-6">
                2/18日付け　日刊工業新聞<br />
                <strong>関西新興、製造業のDX支援　中小の導入遅れ改善に商機</strong>
              </p>
              <a href="https://www.nikkan.co.jp/articles/view/00740261" className="text-[#37B7C4] no-underline hover:underline">
                https://www.nikkan.co.jp/articles/view/00740261
              </a>
              <p className="text-base leading-6 mt-8 mb-6">
                ARCHAIVEについては<Link href="/" className="text-[#37B7C4] no-underline hover:underline">こちら</Link>
              </p>
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