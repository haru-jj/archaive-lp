'use client';

import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Archaive21ReleaseNews() {
  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-20">
        {/* News Header */}
        <div className="bg-[#37B7C4] text-white text-center py-8 sm:py-12">
          <h1 className="m-0 text-3xl sm:text-4xl lg:text-5xl font-bold">NEWS</h1>
          <p className="m-0 text-lg sm:text-xl lg:text-2xl">お知らせ</p>
        </div>

        {/* News Page */}
        <div className="bg-[#f4f4f4] py-8 sm:py-12 lg:py-20 flex justify-center min-h-screen">
          <div className="w-full sm:w-[90%] lg:w-[80%] xl:w-[70%] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#888] text-sm mb-4 sm:mb-6">2025/9/8</p>
            <h2 className="text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-6 mb-8 sm:mb-12 font-bold leading-relaxed">製造業のDXを加速するAIプラットフォーム「ARCHAIVE 2.1」を2025年10月1日より提供開始</h2>
            <div className="bg-white p-4 sm:p-6 lg:p-12 shadow-lg rounded-lg h-fit">
            <div className="news-article">
              {/* 機能詳細画像 */}
              <div className="text-center my-6 sm:my-8">
                <img 
                  src="/news/142139-12-db5647717e97f2603463709ff7136c46-1600x900.jpeg" 
                  alt="ARCHAIVE 2.1機能詳細" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                製造業のDXを加速するAIプラットフォーム「ARCHAIVE 2.1」を2025年10月1日より提供開始。AIによる図面解析・見積から顧客管理までを一気通貫で支援。
              </p>
              
              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                株式会社STAR UP（本社：京都府、代表取締役：緒方勇斗）は、製造業の業務効率化とDXを推進するAIプラットフォーム「ARCHAIVE（アーカイブ） 2.1」を、2025年10月1日より提供開始することをお知らせいたします。
              </p>

              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                「ARCHAIVE 2.1」は、従来のAI図面管理システム「ARCHAIVE 1.0」を大幅にアップデートし、新たにAI顧客管理クラウド（CRM）機能や、企業ごとの課題に対応するカスタムAIソリューションサービスを統合。これにより、図面データの活用から見積作成、案件管理までをシームレスに連携させ、製造業における多様なニーズに応えるプラットフォームへと進化しました。
              </p>

              <h3 className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">開発の背景：製造業が抱える「情報のサイロ化」という課題</h3>
              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                多くの製造業では、過去の膨大な紙図面やCADデータが整理されず、有効活用されていないのが現状です。また、見積作成は担当者の経験と勘に依存しがちで属人化が進み、さらに顧客情報や案件の進捗はExcelや個別のツールで管理されているため、部門間の情報連携がスムーズに行えない「情報のサイロ化」が深刻な課題となっています。
              </p>

              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                これらの課題は、業務効率の低下や新たなビジネスチャンスの損失に直結します。当社は、AI技術を用いてこれらの課題を根本から解決するため、これまでの図面管理の知見を活かし、より包括的なソリューションとして「ARCHAIVE」をプラットフォームへと進化させました。
              </p>

              {/* プラットフォーム概要画像 */}
              <div className="text-center my-6 sm:my-8">
                <img 
                  src="/news/142139-12-d7188450a70ef6fb74db8c95685ecb31-1600x900.jpg" 
                  alt="ARCHAIVE 2.1プラットフォーム概要" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">製造業AIプラットフォーム「ARCHAIVE 2.1」の主な特長</h3>
              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                「ARCHAIVE 2.1」は、以下の3つの主要なサービスで構成され、製造業の多様なニーズに柔軟に対応します。
              </p>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">1. ARCHAIVE-CORE： AI図面解析・見積クラウド</h4>
                <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  紙やPDFの図面をアップロードするだけで、AIが図面内の寸法、公差、材質、加工指示などの情報を自動でデータ化。高精度な類似図面検索により、過去の類似案件の見積や加工ノウハウを瞬時に探し出すことができます。これにより、見積作成にかかる工数を大幅に削減し、業務の標準化を実現します。また、AIが見積もった価格からシームレスに見積書などの帳票が発行できたり、納品書・請求書の発行まで行えるようになっています。
                </p>
              </div>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">2. ARCHAIVE-CRM（β版）： AI顧客管理クラウド</h4>
                <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  図面データと顧客情報、案件情報を紐づけて一元管理できる、製造業特化型のCRM機能です。どの顧客からいつ、どのような図面の引き合いがあったかを可視化し、営業活動の効率化と顧客対応の品質向上を支援します。
                </p>
              </div>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">3. ARCHAIVE+： カスタムAIソリューションサービス</h4>
                <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  お客様独自の業務フローや特別な課題に対し、専門のチームがヒアリングを行い、最適なカスタムAIソリューションを開発・提供します。外観検査AIの構築や、需要予測AIの導入など、企業の競争力強化に直結するDXをオーダーメイドで支援します。
                </p>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">今後の展望：All in Oneの製造業AIクラウドを目指して</h3>
              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                当社は、「ARCHAIVE 2.1」の提供を皮切りに、今後は生産管理やPLM（製品ライフサイクル管理）、ERP（統合基幹業務システム）など、製造業に必要なあらゆるシステムをAIネイティブで統合する「ARCHAIVE 3.1」の開発を進めてまいります（2027.XX予定）。
              </p>

              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                個社ごとに最適化された「All in One AI Manufacturing Cloud」を構築することで、日本の製造業全体の生産性向上と、新たな価値創造に貢献してまいります。
              </p>

              <p className="text-sm sm:text-base leading-relaxed mt-6 sm:mt-8 mb-4 sm:mb-6">
                ARCHAIVEについては<Link href="/" className="text-[#37B7C4] no-underline hover:underline">こちら</Link>
              </p>
            </div>
            </div>

            {/* 戻るリンク */}
            <div className="mt-12 sm:mt-20 text-center">
              <Link 
                href="/news" 
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 border-2 border-[#37B7C4] text-[#37B7C4] rounded-lg font-bold hover:bg-[#37B7C4] hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
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