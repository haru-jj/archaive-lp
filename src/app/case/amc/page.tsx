'use client';

import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import Image from 'next/image';

export default function AmcCase() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* インタビューセクション */}
        <div className="interview-section">
          <div className="interview-header">
            <h1>Interview</h1>
            <h2>インタビュー</h2>
          </div>
        </div>

        {/* インタビューコンテンツ */}
        <div className="interview-content-wrapper">
          <div className="interview-content">
            <h3>株式会社エイ・エム・シィ/副工場長 中西弘栄様 ✖️ STAR UP/辻 拓真</h3>
            <hr />
            <div className="relative w-2/3 h-64 md:h-96 mb-6 mx-auto">
              <Image
                src="/images/nakanishi.jpg"
                alt="Interview Image 1"
                fill
                className="object-cover"
              />
            </div>
            
            <hr />
            
            <h3 className="section-title">ARCHAIVE導入前の課題</h3>
            <hr />

            <div className="mb-12">
              <p className="interview-question">ー(辻)： 本日はお忙しい中、ありがとうございます。早速ですが、貴社ではAI図面化プラットフォームを導入される前、どのような課題をお持ちでしたか？</p>
              <p>(中西様、以下敬省略)： そうですね、一番の課題は図面管理の属人化でした。これまでは紙の図面を会社名別に五十音順で整理していましたが、使った後に元の場所に戻されなかったり、間違った場所に入れられたりすることが頻繁にありました。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(辻)： それは大変でしたね。探すだけでも時間がかかってしまいそうです。</p>
              <p>(中西)： まさにその通りです。また、ローマ字入力に不慣れな従業員もいるので、いざシステムを導入するとなっても、入力のハードルが高いのではないかという懸念もありました。例えば、「ふ」って何行だっけ？とか、「フォー」ってどう書くんだ？みたいな状況が日常的に発生していましたね。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className="section-title">ARCHAIVE導入の経緯と決め手</h3>
            <hr />
            
            <div className="relative w-2/3 h-64 md:h-96 mb-6 mx-auto">
              <Image
                src="/images/nakanishi_2.jpg"
                alt="Interview Image 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-12">
              <p className="interview-question">ー(辻)： そのような課題をお持ちの中、AI図面化プラットフォームの導入を検討されたきっかけは何だったのでしょうか？</p>
              <p>(中西)： 実は、松田さん（株式会社クロステック様）のご紹介が大きかったです。以前から石川県の方で交流があったのですが、弊社の図面管理の課題について相談したところ、STAR UPさんを紹介していただきました。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(辻)： 松田さんからのお声がけだったのですね。弊社を選んでいただいた決め手は何だったのでしょうか？</p>
              <p>(中西)： いくつか理由があります。まず、初期費用が手頃だったこと。他社のシステムと比較しても導入しやすい価格設定で、中小企業にとって非常に魅力的でした。また、柔軟なカスタマイズ性も大きな決め手でしたね。既存の業務フローに合わせてシステムを構築・改善してくれるので、本当に助かっています。現場の要望を伝えると、迅速にシステムに反映してくれる対応力には驚きました。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(辻)： 弊社のスピード感を評価いただけて嬉しいです。</p>
              <p>(中西)： はい、それにトータルソリューションを目指している点も魅力的でした。図面管理だけでなく、今後開発予定の生産管理や顧客管理といった前後工程も一貫してシステム化することで、業務全体の効率化が期待できると感じました。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className="section-title">ARCHAIVE導入後の効果</h3>
            <hr />

            <div className="mb-12">
              <p className="interview-question">ー(辻)： 実際に導入されてみて、どのような効果を実感されていますか？</p>
              <p>(中西)： 一番大きいのは、図面を探す手間が劇的に減ったことです。文字入力なしでクリック操作だけで図面を探せるので、パソコン操作に不慣れな従業員でもすぐに使えるようになりました。事務員と作業員の業務を分担できるようになったため、業務全体の効率化が進んでいます。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(辻)： それは素晴らしいですね。その他に何か変化はありましたか？</p>
              <p>(中西)： はい。現場で発生していた図面の所在不明問題が改善され、探す時間や場所を尋ねる手間が大幅に削減されました。また、類似案件の検索が容易になったことも大きな変化です。これまでは見積もり時の入力や登録、加工後の本図面や加工実績の入力と紐付けに時間がかかっていましたが、ARCHAIVE（アーカイブ）では簡単に検索できるので、これらの手間削減にも期待しています。これにより、より本来の業務に集中できるようになり、生産性の向上に繋がっていると感じています。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className="section-title">STAR UPへの今後の期待</h3>
            <hr />
            
            <div className="relative w-2/3 h-64 md:h-96 mb-6 mx-auto">
              <Image
                src="/images/nakanishi_3.jpg"
                alt="Interview Image 3"
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-12">
              <p className="interview-question">ー(辻)： 今後のSTAR UPに期待することはありますか？</p>
              <p>(中西)： そうですね、これまで培ってきた技術やノウハウを、新しい世代に継承していくためにも、システムをさらに活用していきたいです。現場の「基礎」となる部分をどれだけ大事にできるかが重要だと考えています。また、私たちは自動車部品をメインにしているので、電気自動車化など、自動車業界の今後のトレンドに合わせた部品製造に対応していくためにも、引き続きシステムによる支援を期待しています。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(辻)： ありがとうございます。弊社のメンバーは平均年齢が20代と若いですが、高い開発力を持つ優秀な人材が揃っています。カナダのトロント大学との連携もあり、時差を活用することで24時間体制での開発も可能にしています。これにより、お客様の課題解決に素早くコミットし、使い勝手の良さとデータの連携を強みとしたサービスを提供できると自負しております。</p>
              <p>(中西)： ええ、貴社の開発チームの皆さんの熱意と技術力はいつも感じています。これからもお客様のニーズに応えられるよう、さらなる進化を期待しています。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(辻)： ありがとうございます。本日は貴重なお話をありがとうございました。</p>
            </div>

            <hr />

            {/* 企業情報 */}
            <div className="company-info">
              <h3>株式会社エイ・エム・シィ</h3>
              <p><strong>代表取締役：</strong>佐々木徹</p>
              <p><strong>所在地：</strong>石川県かほく市内日角中49番地</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      <style jsx>{`
        .interview-section {
          background-color: #37B7C4;
          padding: 40px 20px 30px;
          text-align: center;
        }

        @media (min-width: 640px) {
          .interview-section {
            padding: 60px 20px 40px;
          }
        }

        .interview-header h1 {
          font-size: 32px;
          color: white;
          margin: 0;
        }

        @media (min-width: 640px) {
          .interview-header h1 {
            font-size: 40px;
          }
        }

        @media (min-width: 1024px) {
          .interview-header h1 {
            font-size: 48px;
          }
        }

        .interview-header h2 {
          font-size: 18px;
          color: white;
          margin: 0;
        }

        @media (min-width: 640px) {
          .interview-header h2 {
            font-size: 20px;
          }
        }

        @media (min-width: 1024px) {
          .interview-header h2 {
            font-size: 24px;
          }
        }

        .interview-content-wrapper {
          background-color: #37B7C4;
          margin: 0;
          padding: 20px 10px 40px;
        }

        @media (min-width: 640px) {
          .interview-content-wrapper {
            padding: 30px 20px 50px;
          }
        }

        @media (min-width: 1024px) {
          .interview-content-wrapper {
            padding: 40px 20px 60px;
          }
        }

        .interview-content {
          background-color: white;
          padding: 30px 20px;
          text-align: left;
          max-width: 1200px;
          margin: 0 auto;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        @media (min-width: 640px) {
          .interview-content {
            padding: 40px 30px;
          }
        }

        @media (min-width: 768px) {
          .interview-content {
            padding: 50px 40px;
          }
        }

        @media (min-width: 1024px) {
          .interview-content {
            padding: 60px 80px;
          }
        }

        .interview-content h3 {
          font-size: 16px;
          font-weight: bold;
          margin: 0 0 10px;
          text-align: center;
          line-height: 1.4;
        }

        @media (min-width: 640px) {
          .interview-content h3 {
            font-size: 18px;
          }
        }

        @media (min-width: 1024px) {
          .interview-content h3 {
            font-size: 20px;
          }
        }

        .interview-content hr {
          border: none;
          border-top: 1px solid #333;
          margin: 20px 0;
        }

        @media (min-width: 640px) {
          .interview-content hr {
            margin: 25px 0;
          }
        }

        @media (min-width: 1024px) {
          .interview-content hr {
            margin: 30px 0;
          }
        }

        .interview-content img {
          width: 100%;
          height: auto;
          margin-bottom: 20px;
        }

        .interview-content p {
          font-size: 14px;
          color: #333;
          margin: 12px 0;
          line-height: 1.7;
        }

        @media (min-width: 640px) {
          .interview-content p {
            font-size: 15px;
            margin: 14px 0;
            line-height: 1.8;
          }
        }

        @media (min-width: 1024px) {
          .interview-content p {
            font-size: 16px;
            margin: 15px 0;
          }
        }

        .interview-question {
          color: #37B7C4;
          margin-top: 20px;
        }

        @media (min-width: 640px) {
          .interview-question {
            margin-top: 25px;
          }
        }

        @media (min-width: 1024px) {
          .interview-question {
            margin-top: 30px;
          }
        }

        .section-title {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          text-align: center;
          margin: 60px 0 15px;
        }

        @media (min-width: 640px) {
          .section-title {
            font-size: 17px;
            margin: 70px 0 18px;
          }
        }

        @media (min-width: 1024px) {
          .section-title {
            font-size: 18px;
            margin: 80px 0 20px;
          }
        }

        .company-info {
          margin-top: 40px;
          padding: 15px;
          background-color: #f9f9f9;
          border-radius: 8px;
        }

        @media (min-width: 640px) {
          .company-info {
            margin-top: 50px;
            padding: 18px;
          }
        }

        @media (min-width: 1024px) {
          .company-info {
            margin-top: 60px;
            padding: 20px;
          }
        }

        .company-info h3 {
          font-size: 16px;
          margin-bottom: 8px;
        }

        @media (min-width: 640px) {
          .company-info h3 {
            font-size: 17px;
            margin-bottom: 9px;
          }
        }

        @media (min-width: 1024px) {
          .company-info h3 {
            font-size: 18px;
            margin-bottom: 10px;
          }
        }

        .company-info p {
          margin: 4px 0;
          font-size: 14px;
        }

        @media (min-width: 640px) {
          .company-info p {
            margin: 5px 0;
            font-size: 15px;
          }
        }

        @media (min-width: 1024px) {
          .company-info p {
            font-size: 16px;
          }
        }

        .company-info a {
          color: #37B7C4;
          text-decoration: none;
        }

        .company-info a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}