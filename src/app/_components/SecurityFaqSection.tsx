'use client';

import { useState } from 'react';

import {
  ChevronDown,
  Cloud,
  DatabaseBackup,
  KeyRound,
  Lock,
  ShieldCheck,
} from 'lucide-react';

const SECURITY_CARDS = [
  {
    title: 'ISO 27001 準拠',
    body: '情報セキュリティマネジメントシステムに準拠した運用体制。',
    icon: ShieldCheck,
  },
  {
    title: '通信・保存の暗号化',
    body: 'TLS 1.3 による通信暗号化、AES-256 による保存データの暗号化。',
    icon: Lock,
  },
  {
    title: 'AWS',
    body: 'セキュアなクラウド環境にデータを保管。冗長化・定期バックアップ実施。',
    icon: Cloud,
  },
  {
    title: 'アクセス権限管理',
    body: '部署・役職ごとの細かいアクセス権限設定で情報漏洩を防止。',
    icon: KeyRound,
  },
  {
    title: '---',
    body: '---',
    icon: DatabaseBackup,
  },
] as const;

const FAQ_ITEMS = [
  {
    question: '他の図面管理ツールとの違いは？',
    answer:
      '多くの図面管理ツールは図面の検索・保管に特化していますが、ARCHAIVEは図面を「起点」として、見積書・仕様書・検査記録・トラブル履歴・判断の経緯まで製品ごとに紐づけて蓄積します。さらに、蓄積されたデータをAIチャットで横断検索したり、AI見積エージェントで概算見積を自動生成したりと、溜まったデータの活用まで対応します。',
  },
  {
    question: '導入にどれくらいの期間がかかりますか？',
    answer:
      '標準機能であれば最短1週間で利用開始できます。既存環境との連携や運用設計を含む場合は、要件に応じて2〜4週間程度を想定しています。',
  },
  {
    question: '既存の図面データを移行できますか？',
    answer:
      '可能です。既存の図面・仕様書・関連書類を段階的に取り込み、検索や参照に使える状態へ整理できます。',
  },
  {
    question: '小規模な会社でも導入できますか？',
    answer:
      '導入できます。まずは標準機能から始め、必要に応じて段階的に拡張できるため、小規模な組織でも無理なく運用を始められます。',
  },
  {
    question: '料金体系を教えてください。',
    answer:
      '利用規模や連携範囲、必要な機能に応じて個別にご案内しています。まずは資料請求またはお問い合わせからご相談ください。',
  },
] as const;

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export function SecurityFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id='security'
      className='relative scroll-mt-16 overflow-hidden bg-[linear-gradient(180deg,var(--lp-surface)_0%,var(--lp-surface-soft)_58%,var(--lp-surface-soft)_100%)] px-6 py-16 sm:px-10 lg:px-16 lg:py-20'
    >
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className='pointer-events-none absolute inset-0 bg-white' />

      <div className='relative z-10 mx-auto max-w-[1320px]'>
        <div className='grid gap-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.88fr)] lg:gap-20 xl:gap-24'>
          <div>
            <div className='lg:grid lg:min-h-[18rem] lg:grid-rows-[auto_minmax(8.8rem,auto)_auto_auto]'>
              <p className='text-lp-primary text-sm font-black tracking-[0.24em] sm:text-base'>
                SECURITY
              </p>
              <h2 className='text-lp-text mt-5 max-w-none text-[clamp(1.85rem,8.6vw,3.2rem)] leading-[1.08] font-black tracking-[-0.05em] sm:max-w-[11ch] sm:text-[clamp(1.95rem,3.6vw,3.2rem)]'>
                <span className='block'>図面は、</span>
                <span className='block whitespace-nowrap'>
                  企業の記憶です。
                </span>
              </h2>
              <div className='border-lp-text/52 mt-7 h-px w-full max-w-[22rem] border-t-2 border-solid sm:max-w-[24rem]' />
              <p className='text-lp-text-subtle mt-4 text-base leading-7 font-semibold sm:text-lg'>
                経験が積み上がる場所だから、守り方にも手は抜けません。エンタープライズ水準のセキュリティで、全データを保護します。
              </p>
            </div>

            <div
              className={`mt-10 grid auto-rows-fr justify-center gap-4 sm:gap-5 ${
                SECURITY_CARDS.length === 5
                  ? 'sm:grid-cols-[repeat(6,minmax(0,9.5rem))]'
                  : 'sm:grid-cols-2'
              }`}
            >
              {SECURITY_CARDS.map((card, index) => {
                const Icon = card.icon;
                const isFiveCardLayout = SECURITY_CARDS.length === 5;

                return (
                  <article
                    key={card.title}
                    className={`group border-lp-primary-border relative overflow-hidden rounded-[1.35rem] border bg-[linear-gradient(180deg,var(--lp-primary)_0%,var(--lp-primary-strong)_100%)] px-4.5 py-4 text-white shadow-[0_18px_36px_rgba(85,189,207,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--lp-primary-border)] hover:shadow-[0_24px_44px_rgba(85,189,207,0.26)] sm:px-5 sm:py-4.5 ${
                      isFiveCardLayout
                        ? index < 3
                          ? 'sm:col-span-2'
                          : index === 3
                            ? 'sm:col-span-2 sm:col-start-2'
                            : 'sm:col-span-2 sm:col-start-4'
                        : ''
                    }`}
                  >
                    <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0))]' />
                    <div className='relative flex items-start justify-between gap-4'>
                      <div className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/40 bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_18px_rgba(34,109,122,0.16)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.03]'>
                        <Icon className='h-4.5 w-4.5' strokeWidth={2.2} />
                      </div>
                    </div>
                    <h3 className='relative mt-4 text-[0.98rem] leading-tight font-black tracking-[-0.03em] text-white'>
                      {card.title}
                    </h3>
                    <p className='relative mt-2 text-[0.88rem] leading-6 font-semibold text-white/95'>
                      {card.body}
                    </p>
                    <div className='relative mt-4 h-px w-full max-w-[7.5rem] bg-[linear-gradient(90deg,rgba(255,255,255,0.8),rgba(255,255,255,0.12))]' />
                  </article>
                );
              })}
            </div>
          </div>

          <div>
            <div className='lg:grid lg:min-h-[18rem] lg:grid-rows-[auto_minmax(8.8rem,auto)_auto_auto]'>
              <p className='text-lp-primary text-sm font-black tracking-[0.24em] sm:text-base'>
                FAQ
              </p>
              <h2 className='text-lp-text mt-5 text-[clamp(1.8rem,3.3vw,2.75rem)] leading-[1.08] font-black tracking-[-0.05em]'>
                よくある質問
              </h2>
              <div className='border-lp-text/52 mt-7 h-px w-full max-w-[22rem] border-t-2 border-solid sm:max-w-[24rem]' />
              <p className='text-lp-text-subtle mt-4 text-base leading-7 font-semibold sm:text-lg'>
                導入前の不安や、運用面でよくいただく疑問にお答えします。
              </p>
            </div>

            <div className='mt-12 space-y-4'>
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                const panelId = `security-faq-panel-${index}`;
                const buttonId = `security-faq-button-${index}`;

                return (
                  <div
                    key={item.question}
                    className={`overflow-hidden rounded-[1.05rem] border bg-white transition-colors duration-300 ${
                      isOpen
                        ? 'border-lp-primary-border bg-[var(--lp-surface-soft)]'
                        : 'border-lp-border'
                    }`}
                  >
                    <button
                      id={buttonId}
                      type='button'
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenIndex((currentIndex) =>
                          currentIndex === index ? null : index,
                        )
                      }
                      className='flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5'
                    >
                      <span className='text-lp-text pr-2 text-[1rem] leading-7 font-bold sm:text-[1.04rem]'>
                        {item.question}
                      </span>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? 'border-lp-primary-border bg-lp-primary-soft text-lp-primary-strong'
                            : 'border-lp-border text-lp-text bg-white'
                        }`}
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          strokeWidth={2.2}
                        />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className='overflow-hidden'>
                        <div
                          id={panelId}
                          role='region'
                          aria-labelledby={buttonId}
                          className='px-5 pb-5 sm:px-6 sm:pb-6'
                        >
                          <div className='border-lp-border text-lp-text-muted border-t pt-4 text-[0.97rem] leading-8 font-medium'>
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
