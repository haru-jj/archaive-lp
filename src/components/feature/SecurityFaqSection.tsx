'use client';

import { useState } from 'react';

import {
  ChevronDown,
  Cloud,
  KeyRound,
  Lock,
  ShieldCheck,
} from 'lucide-react';

const SECURITY_CARDS = [
  {
    spec: 'ISO 27001',
    label: 'ISMS 準拠',
    body: '情報セキュリティマネジメントシステムの国際規格に準拠した運用体制を整備。',
    icon: ShieldCheck,
  },
  {
    spec: 'AES-256',
    label: 'TLS 1.3 / 暗号化',
    body: '通信経路と保存データの両方を、業界最高水準の暗号化方式で保護。',
    icon: Lock,
  },
  {
    spec: 'AWS',
    label: 'セキュアクラウド',
    body: '冗長化と自動バックアップを備えた高可用性クラウド基盤で運用。',
    icon: Cloud,
  },
  {
    spec: 'RBAC',
    label: 'アクセス制御',
    body: '部署・役職別の権限設定で、情報漏洩リスクを最小化。',
    icon: KeyRound,
  },
] as const;

const FAQ_ITEMS = [
  {
    question: '他の図面管理ツールとの違いは？',
    answer:
      '多くの図面管理ツールは図面の検索・保管に特化していますが、ARCHAIVEは図面を「起点」として、仕様書、過去のトラブル、設計判断の経緯までを製品ごとに蓄積する情報基盤です。蓄積されたデータをAIで横断検索したり、概算見積を自動算出したりと、活用までを一気通貫でサポートします。',
  },
  {
    question: 'PLMとの違いは？',
    answer:
      'PLMは大企業向けに設計された大規模システムで、導入には数千万円規模の費用と半年以上の期間が必要です。ARCHAIVEは、PLMが担う「製品にまつわる情報の蓄積と共有」の機能を、より導入しやすい形で提供するクラウドサービスです。',
  },
  {
    question: '導入にどれくらいの期間がかかりますか？',
    answer:
      '標準機能（ARCHAIVE-CORE）であれば、契約から最短1週間で利用を開始いただけます。既存システムとのAPI連携は2〜4週間、自社専用AI構築（ARCHAIVE+）は2〜3ヶ月が目安です。',
  },
  {
    question: '既存の図面データを移行できますか？',
    answer:
      'PDF・DXF・STEP・JPG・PNGなど主要なファイル形式に対応しています。手書き図面のスキャンPDFは、AI-OCRで自動的にデータ化されます。既存ファイルサーバーの構造を維持したまま連携することも可能です。',
  },
  {
    question: '小規模な会社でも導入できますか？',
    answer:
      'はい、ご利用いただけます。標準機能のみでスタートし、必要に応じて連携・カスタム開発へ拡張する段階的な導入が可能です。',
  },
  {
    question: '料金体系を教えてください。',
    answer:
      'ご利用人数・図面枚数・連携範囲によって料金プランをご案内しています。詳細は資料ダウンロードまたはお問い合わせよりご確認ください。',
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
      className='relative scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,var(--lp-surface)_0%,var(--lp-surface-soft)_58%,var(--lp-surface-soft)_100%)] px-6 py-16 sm:px-10 lg:px-16 lg:py-20'
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
              <p className='text-lp-primary text-sm font-bold sm:text-[0.95rem]'>
                SECURITY
              </p>
              <h2 className='text-lp-text mt-5 max-w-none text-[clamp(1.45rem,2.4vw,2rem)] leading-[1.35] font-bold'>
                図面データを安心して預けられる仕組み
              </h2>
              <div className='border-lp-text/52 mt-7 h-px w-full max-w-[22rem] border-t-2 border-solid sm:max-w-[24rem]' />
              <p className='text-lp-text-subtle mt-4 text-base leading-7 font-normal sm:text-lg'>
                企業の機密情報である図面を扱うため、エンタープライズ水準のセキュリティ対策を実装しています。
              </p>
            </div>

            <div className='mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4'>
              {SECURITY_CARDS.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.spec}
                    className='group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--lp-primary-border)] hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)] sm:p-6'
                  >
                    <div
                      aria-hidden='true'
                      className='pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,var(--lp-primary-deep)_0%,var(--lp-primary-strong)_50%,var(--lp-primary)_100%)]'
                    />
                    <div
                      aria-hidden='true'
                      className='pointer-events-none absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-[var(--lp-primary-soft)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-80'
                    />

                    <div className='relative flex items-start justify-between gap-3'>
                      <div className='min-w-0 flex-1'>
                        <div className='text-[1.7rem] leading-[1] font-bold text-[var(--lp-primary-deep)] sm:text-[1.95rem]'>
                          {card.spec}
                        </div>
                        <div className='text-lp-text-subtle mt-1.5 text-[0.66rem] font-bold uppercase'>
                          {card.label}
                        </div>
                      </div>
                      <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--lp-primary-soft)] text-[var(--lp-primary-strong)] transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-[1.06]'>
                        <Icon className='h-[1.35rem] w-[1.35rem]' strokeWidth={1.9} />
                      </div>
                    </div>

                    <div
                      aria-hidden='true'
                      className='relative mt-5 h-px w-full bg-[linear-gradient(90deg,var(--lp-primary-border)_0%,transparent_100%)]'
                    />

                    <p className='text-lp-text-muted relative mt-4 text-[0.875rem] leading-[1.75] font-normal'>
                      {card.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div id='faq' className='scroll-mt-24'>
            <div className='lg:grid lg:min-h-[18rem] lg:grid-rows-[auto_minmax(8.8rem,auto)_auto_auto]'>
              <p className='text-lp-primary text-sm font-bold sm:text-[0.95rem]'>
                FAQ
              </p>
              <h2 className='text-lp-text mt-5 text-[clamp(1.45rem,2.4vw,2rem)] leading-[1.35] font-bold'>
                よくいただくご質問
              </h2>
              <div className='border-lp-text/52 mt-7 h-px w-full max-w-[22rem] border-t-2 border-solid sm:max-w-[24rem]' />
              <p className='text-lp-text-subtle mt-4 text-base leading-7 font-normal sm:text-lg'>
                導入を検討中のお客様からよくいただくご質問にお答えします。
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
                          <div className='border-lp-border text-lp-text-muted border-t pt-4 text-[0.97rem] leading-8 font-normal'>
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
