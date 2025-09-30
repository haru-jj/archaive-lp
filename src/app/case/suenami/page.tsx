'use client';

import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import Image from 'next/image';

export default function SuenamiCase() {
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
            <h3>スエナミ工業株式会社/営業 兼 開発 横山智一様 ✖️ STAR UP/稲元 海翔</h3>
            <hr />
            <div className="relative w-2/3 h-64 md:h-96 mb-6 mx-auto">
              <Image
                src="/images/yokoyama_1.png"
                alt="Interview Image 1"
                fill
                className="object-cover"
              />
            </div>
            
            <hr />
            
            <h3 className="section-title">ARCHAIVE導入前の課題</h3>
            <hr />

            <div className="mb-12">
              <p className="interview-question">ー(稲元)： 本日はお忙しい中、ありがとうございます。早速ですが、ArchAIveを導入される前、どのような課題をお持ちでしたか？</p>
              <p>(横山様、以下敬省略)： 一番は、見積もり業務の複雑さと属人化ですね。図面が多く、一度に100枚〜150枚もの依頼がくることも珍しくありませんでした。見積もりは私の「感覚と経験」に大きく依存しており、新入社員への教育や、私が不在時の対応が困難でした。<br />
              手作業での見積もり算出には時間がかかり、迅速な対応ができませんでした。AIによる見積もりも最終的には人のチェックが必要で、その精度と信頼性の向上を求めていました。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className="section-title">ARCHAIVE導入の経緯と決め手</h3>
            <hr />

            <div className="mb-12">
              <p className="interview-question">ー(稲元)： そのような課題をお持ちの中、弊社を選んでいただいた決め手は何だったのでしょうか？</p>
              <p>(横山)： 決め手はいくつかあります。他社が「できない」と回答する中で、STAR UPさんが「可能かもしれない」と向き合ってくれたことです。私たちの独自の算出方法に、AIがどこまで近づけるかという「可能性」を感じたことが大きかったです。<br />
              また、開発の柔軟性とレスポンスの速さも大きな決め手でした。顧客の声をすぐに聞き入れ、システムに反映するスピード感が評価できました。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(稲元)： 弊社のスピード感を評価いただけて嬉しいです。</p>
              <p>(横山)： はい。STAR UPさんの開発チームがユーザーからのフィードバックを元に月2回の頻繁なアップデートを実施していると伺い、その開発体制にも安心感を覚えました。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className="section-title">ARCHAIVE導入後の効果</h3>
            <hr />

            <div className="mb-12">
              <p className="interview-question">ー(稲元)： 実際に導入されてみて、どのような効果を実感されていますか？</p>
              <p>(横山)： まずは、複雑な見積もり業務をAIがサポートしてくれることです。特に、図面をアップロードするだけで、過去の履歴やトラブル情報と紐付けてAIが対話しながら見積もりを算出する「コパイロット」のような機能に期待しています。多数の図面を一括で処理し、概算見積もりをCSVで出力できる機能は、私たちの業務を効率化してくれています。<br />
              また、既存のExcelデータや独自の計算ロジックをAIに学習させ、材料費、加工賃、外注費などを含んだ市場価格ベースの見積もりを自動算出できる機能も期待しています。</p>
            </div>

            <div style={{ marginTop: '80px' }}>
              <hr />
            </div>

            <h3 className="section-title">STAR UPへの今後の期待</h3>
            <hr />

            <div className="mb-12">
              <p className="interview-question">ー(稲元)： 横山様、長期的な視点でのご期待はいかがでしょうか？私たちが目指しているのは、見積もりだけでなく、工程管理、生産管理、原価計算、販売管理、顧客管理といった業務全体をサポートするモジュール型システムです。業務を一貫してシステム上で管理することで、より深い部分での効率化を実現できると考えています。</p>
              <p>(横山)：それは素晴らしいですね。まさに私たちが求めていた未来です。STAR UPさんの迅速な対応力と開発力があれば、それが実現できると信じています。</p>
            </div>

            <div className="mb-12">
              <p className="interview-question">(稲元)： ありがとうございます。私たちは一社一社のローカルなデータに深く入り込み、その会社独自の業務サポートを実現することを目指しています。今後もスエナミ工業様の課題に寄り添い、共に成長していければ幸いです。本日は貴重なお話をありがとうございました。</p>
            </div>

            <hr />

            {/* 企業情報 */}
            <div className="company-info">
              <h3 className="text-xl font-bold mb-6">スエナミ工業株式会社</h3>
              <div>
                <p><strong>代表取締役：</strong>末次明</p>
                <p><strong>所在地：</strong>岐阜県関市側島286番地</p>
              </div>
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
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          border: 1px solid #e5e5e5;
        }

        @media (min-width: 640px) {
          .company-info {
            margin-top: 50px;
            padding: 25px;
          }
        }

        @media (min-width: 1024px) {
          .company-info {
            margin-top: 60px;
            padding: 30px;
          }
        }

        .company-info h3 {
          margin: 0 0 12px 0;
          font-size: 16px;
        }

        @media (min-width: 640px) {
          .company-info h3 {
            margin: 0 0 14px 0;
            font-size: 18px;
          }
        }

        @media (min-width: 1024px) {
          .company-info h3 {
            margin: 0 0 16px 0;
            font-size: 20px;
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