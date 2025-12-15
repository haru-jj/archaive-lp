'use client';

export default function PricingSection() {
  const plans = [
    {
      name: 'ライトプラン',
      price: '月額 ¥50,000〜',
      desc: '小規模チーム向け。図面管理と基本検索をすぐに開始。',
      features: ['図面管理・検索', '基本ユーザー権限', 'メールサポート'],
    },
    {
      name: 'スタンダードプラン',
      price: '月額 ¥120,000〜',
      desc: '標準機能＋見積支援。複数部門での活用に最適。',
      features: ['見積AI・検索拡張', '高度な権限設定', '優先サポート'],
    },
    {
      name: 'エンタープライズ',
      price: 'お見積り',
      desc: '要件に合わせたカスタム開発と連携を含むフルサポート。',
      features: ['既存システム連携', '専任伴走・PoC', 'セキュリティ要件対応'],
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4" style={{ backgroundColor: 'rgba(55, 183, 196, 0.08)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-sm font-semibold text-[#37B7C4] mb-3">Pricing</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333]">
            料金プラン
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            利用規模や要件に応じて柔軟にプランをご提案します。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 p-6 flex flex-col"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#333333] mb-2">{plan.name}</h3>
              <p className="text-[#37B7C4] font-bold text-xl sm:text-2xl mb-3">{plan.price}</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{plan.desc}</p>
              <ul className="space-y-2 text-sm text-gray-700 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-[#37B7C4]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <a
                  href="/apply"
                  className="inline-flex items-center justify-center w-full rounded-lg border-2 border-[#37B7C4] text-[#37B7C4] font-semibold py-2.5 hover:bg-[#37B7C4] hover:text-white transition-colors duration-200"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
