'use client';

import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PresentationAchievementNews() {
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
            <p className="text-[#888] text-sm mb-6">2024/12/21</p>
            <h2 className="text-2xl mt-6 mb-12 font-bold">登壇実績</h2>
            <div className="bg-white p-12 shadow-lg rounded-lg h-fit">
            <div className="news-article">
              <p className="text-base leading-6 mb-6">
                株式会社STAR UPのセミナー実績をご紹介いたします。
              </p>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">KYOTO SMARTCITY EXPO</h3>
                <img 
                  src="/images/KYOTO SMARTCITY EXPO.webp" 
                  alt="KYOTO SMARTCITY EXPO" 
                  className="w-64 h-auto mb-6"
                />
                <p className="text-base leading-6">
                  京都市の製造業に対して、DXの必要性や現在の課題点などを伝え、弊社の事例も交えながら現実的なDX手法についてお伝えしました。
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">MI-NET DXセミナー</h3>
                <img 
                  src="/images/MI-NET DXセミナー.webp" 
                  alt="MI-NET DXセミナー" 
                  className="w-64 h-auto mb-6"
                />
                <p className="text-base leading-6">
                  モノづくりイノベーションネットワーク（MI-Net）様と共同で、20社を超える京都のものづくり企業様に対して、DX化の基礎についてのレクチャーを行いました。現在のAIのトレンドから、組織への導入まで「翌日から動ける」をコンセプトに開催いたしました。
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">TRY ANGLE EHIME</h3>
                <img 
                  src="/images/TRY ANGLE EHIME.webp" 
                  alt="TRY ANGLE EHIME" 
                  className="w-64 h-auto mb-6"
                />
                <p className="text-base leading-6">
                  愛媛県の製造業の方々に向けて、DXの事例や移り変わりゆくAI事情に関しての基本知識をお伝えしました。受託の会社に頼るのみでなく、現場にITのできる環境、人材をデザインすることを目標に地域活性化を目指しています。
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">岐阜県DX推進コンソーシアム</h3>
                <img 
                  src="/images/岐阜県DX推進コンソーシアム.webp" 
                  alt="岐阜県DX推進コンソーシアム" 
                  className="w-64 h-auto mb-6"
                />
                <p className="text-base leading-6">
                  デジタル時代を勝ち抜くためのDX。その鍵を握るのが、効果的なデータ活用です。DXを進めたいが何から取り組めばよいか悩んでいる方、さらに効率的に推進したい方に向けて、専門家の解説と事例紹介を通じてDX推進のヒントをご提供します。
                </p>
              </div>
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