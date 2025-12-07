'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answerBold: string;
  answerRest?: string;
};

const faqs: FAQItem[] = [
  {
    question: 'Q1. 無料デモやトライアルで、実際の使い勝手を確認できますか？',
    answerBold: 'A. はい、可能です。',
    answerRest:
      ' 弊社が用意しておりますデータによる無料デモに加え、貴社の実際の図面データを用いたトライアル利用（有償PoC）も実施しております。「自社の図面がどう整理されるか」をお試しいただけます。',
  },
  {
    question: 'Q2. 過去データの移行サポート（導入時や導入後のサポート）はありますか？',
    answerBold: 'A. 専任スタッフによるデータ移行サポートが可能です。',
    answerRest:
      ' 既存のファイルサーバーからのデータ移行支援を行っておりますので、大量の図面がある場合でも最適な移行プランをご提案します。',
  },
  {
    question: 'Q3. 図面は機密情報ですが、セキュリティ対策は万全ですか？',
    answerBold: 'A. 世界最高水準のセキュリティ基準を持つAWSを採用しています。',
    answerRest:
      ' 通信の暗号化や詳細なアクセス権限設定機能も備え、官公庁や大手企業でも採用される管理体制で技術情報を安全に保護します。',
  },
  {
    question: 'Q4. 専用ソフトのインストールは必要ですか？スマホやタブレットでも見られますか？',
    answerBold: 'A. インストール不要で、ブラウザさえあれば利用可能です。',
    answerRest:
      ' パソコンはもちろん、タブレットやスマートフォンからも図面の閲覧・検索ができ、工場内や外出先など場所を選ばず最新の図面情報にアクセスできます。',
  },
  {
    question: 'Q5. ファイル名が整理されていなくても、AIで図面を探せますか？',
    answerBold: 'A. はい、ファイル名に依存せず「中身」で検索可能です。',
    answerRest:
      ' AI-OCRが図面内の「図番」「品名」「材質」「顧客名」などを自動でテキスト化するため、記載情報さえ分かれば瞬時に検索・発見できます。',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative -mx-[50vw] left-[50%] right-[50%] w-screen bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(55,183,196,0.06),transparent_25%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(55,183,196,0.06),transparent_25%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-wide text-[#37B7C4]">FAQ</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">よくある質問</h2>
          <p className="mt-3 text-gray-600">
            クリックで回答を表示します。導入前のご不明点があればお気軽にお問い合わせください。
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.question} className="space-y-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 text-left shadow-sm transition-all duration-200 hover:border-[#37B7C4]/50"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="text-base font-semibold text-gray-800 leading-relaxed">{item.question}</span>
                  <span
                    className={`ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-[#37B7C4]/70 text-[#37B7C4] transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex items-center rounded-2xl border border-[#37B7C4]/40 bg-white/90 px-5 py-4 text-sm text-gray-700 leading-relaxed shadow-sm">
                    <span className="font-semibold text-gray-900">{item.answerBold}</span>
                    {item.answerRest}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
