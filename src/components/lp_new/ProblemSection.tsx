'use client';

export default function ProblemSection() {
  const problems = [
    {
      number: "1",
      title: "図面や価格・仕様書などの検索に時間がかかり、コストが増大",
      description: "過去の類似実績や仕様を再利用できず、毎回ゼロからの調査に多大な時間が費やされている。"
    },
    {
      number: "2",
      title: "業務やデータが属人化している",
      description: "見積もり根拠やトラブル対処法などの重要な情報が、特定の担当者の経験や記憶に依存し、会社のノウハウが失われ続けている。"
    },
    {
      number: "3",
      title: "「設計」「調達」「営業」「製造」等で繰り返される確認作業と手戻り",
      description: "部門間のやり取りや手戻りにかかる見えにくい時間が、確実に会社のコストを圧迫している。"
    }
  ];

  return (
    <section className="pt-24 pb-12 px-4 bg-gray-100 relative">
      <div className="container mx-auto max-w-6xl">
        {/* セクションタイトル */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">
            DX推進やAI活用においてこんな課題はありませんか？
          </h2>
        </div>
      </div>
    </section>
  );
}