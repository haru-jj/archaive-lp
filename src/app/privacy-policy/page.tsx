import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'プライバシーポリシー｜ARCHAIVE',
  description:
    '株式会社STAR UPおよびARCHAIVEにおける個人情報の取扱い（利用目的・第三者提供・安全管理・開示請求・お問い合わせ窓口等）について定めたプライバシーポリシーです。',
  alternates: {
    canonical: 'https://archaive.net/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// 事業者情報
const COMPANY = {
  name: '株式会社STAR UP',
  representative: '代表取締役 緒方勇斗',
  address: '京都府京都市上京区甲斐守町97 西陣産業創造會館109',
  siteName: 'ARCHAIVE',
  siteUrl: 'https://archaive.net',
} as const;

const UPDATED_AT = '2026年7月5日';

type Section = {
  id: string;
  heading: string;
  body: React.ReactNode;
};

const SECTIONS: Section[] = [
  {
    id: 'policy',
    heading: '1. 基本方針',
    body: (
      <p>
        {COMPANY.name}（以下「当社」といいます。）は、当社が提供する「
        {COMPANY.siteName}」その他のサービスおよびウェブサイト（以下「本サービス」といいます。）において取得する個人情報の重要性を認識し、個人情報の保護に関する法律その他の関係法令およびガイドラインを遵守するとともに、以下のプライバシーポリシー（以下「本ポリシー」といいます。）に基づき、個人情報を適切に取り扱い、その保護に努めます。
      </p>
    ),
  },
  {
    id: 'definition',
    heading: '2. 個人情報の定義',
    body: (
      <p>
        本ポリシーにおいて「個人情報」とは、個人情報の保護に関する法律に定める個人情報を指し、生存する個人に関する情報であって、氏名、会社名、メールアドレス、電話番号その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができるものを含みます。）をいいます。
      </p>
    ),
  },
  {
    id: 'acquire',
    heading: '3. 取得する情報と取得方法',
    body: (
      <>
        <p>当社は、本サービスの提供にあたり、以下の情報を取得することがあります。</p>
        <ul>
          <li>
            お問い合わせ・資料請求・デモお申し込み等のフォームにご入力いただく情報（会社名、氏名、メールアドレス、電話番号、お問い合わせ内容等）
          </li>
          <li>
            本サービスのご利用にあたりアップロード・入力される図面・帳票等のデータおよびこれに関連する情報
          </li>
          <li>
            Cookie、アクセスログ、IPアドレス、ブラウザ・端末情報、閲覧履歴等、本サービスの利用状況に関する情報（
            <a href="#tools">4. 外部サービスの利用</a>に記載のツールを通じて自動的に取得されるものを含みます。）
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'tools',
    heading: '4. 外部サービスの利用（アクセス解析等）',
    body: (
      <>
        <p>
          当社は、本サービスの利便性向上および利用状況の把握のため、以下の外部サービスを利用しています。これらのサービスは、Cookie等を用いて情報を収集する場合があります。取得される情報は各提供事業者のプライバシーポリシーに従って管理されます。
        </p>
        <ul>
          <li>
            <strong>Google Analytics（Google LLC）</strong>：アクセス状況の分析のために利用しています。Cookieを利用して個人を特定しない形で情報を収集します。詳細および無効化の方法は
            <a
              href="https://policies.google.com/privacy?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              Googleのプライバシーポリシー
            </a>
            をご確認ください。
          </li>
          <li>
            <strong>Cloudflare Turnstile（Cloudflare, Inc.）</strong>：フォーム送信時の不正防止（ボット対策）のために利用しています。
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'purpose',
    heading: '5. 利用目的',
    body: (
      <>
        <p>当社は、取得した個人情報を以下の目的の範囲内で利用します。</p>
        <ul>
          <li>本サービスの提供、運用、維持および改善のため</li>
          <li>お問い合わせ、資料請求、デモお申し込み等への対応のため</li>
          <li>本サービスに関するご案内・情報提供（メール等による連絡を含む）のため</li>
          <li>ご契約の締結・履行、料金の請求その他取引の管理のため</li>
          <li>本サービスの利用状況の分析および新機能・サービスの開発のため</li>
          <li>不正利用の防止、本人確認、お問い合わせ対応の記録のため</li>
          <li>法令に基づく対応その他上記に付随する目的のため</li>
        </ul>
      </>
    ),
  },
  {
    id: 'third-party',
    heading: '6. 第三者への提供',
    body: (
      <>
        <p>
          当社は、次のいずれかに該当する場合を除き、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供しません。
        </p>
        <ul>
          <li>法令に基づく場合</li>
          <li>人の生命、身体または財産の保護のために必要があり、本人の同意を得ることが困難な場合</li>
          <li>
            公衆衛生の向上または児童の健全な育成の推進のために特に必要があり、本人の同意を得ることが困難な場合
          </li>
          <li>
            国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'outsourcing',
    heading: '7. 個人情報の取扱いの委託',
    body: (
      <p>
        当社は、利用目的の達成に必要な範囲で、個人情報の取扱いの全部または一部を外部（クラウドサービス提供事業者等）に委託することがあります。この場合、当社は、委託先において個人情報が適切に取り扱われるよう、必要かつ適切な監督を行います。
      </p>
    ),
  },
  {
    id: 'security',
    heading: '8. 安全管理措置',
    body: (
      <p>
        当社は、取り扱う個人情報の漏えい、滅失またはき損の防止その他の個人情報の安全管理のために、組織的・人的・物理的・技術的な安全管理措置を講じます。通信の暗号化（SSL/TLS）、アクセス権限の管理、従業者に対する教育等を通じて、個人情報の適切な保護に努めます。
      </p>
    ),
  },
  {
    id: 'disclosure',
    heading: '9. 開示・訂正・利用停止等の請求',
    body: (
      <p>
        ご本人から、個人情報の利用目的の通知、開示、内容の訂正・追加・削除、利用の停止・消去または第三者提供の停止（以下「開示等」といいます。）のご請求があった場合、当社は、ご本人であることを確認のうえ、法令に従い遅滞なく対応します。開示等のご請求は、
        <Link href="/apply">お問い合わせ窓口</Link>までご連絡ください。
      </p>
    ),
  },
  {
    id: 'optional',
    heading: '10. 情報提供の任意性',
    body: (
      <p>
        個人情報のご提供は任意です。ただし、必要な情報をご提供いただけない場合、お問い合わせへの対応や本サービスの一部をご利用いただけないことがあります。
      </p>
    ),
  },
  {
    id: 'change',
    heading: '11. 本ポリシーの変更',
    body: (
      <p>
        当社は、法令の変更や本サービスの内容の変更等に応じて、本ポリシーを改定することがあります。改定後の本ポリシーは、本ページに掲載した時点から効力を生じるものとします。重要な変更を行う場合には、本サービス上でお知らせします。
      </p>
    ),
  },
  {
    id: 'contact',
    heading: '12. お問い合わせ窓口',
    body: (
      <>
        <p>
          本ポリシーに関するお問い合わせ、および個人情報の取扱いに関するご相談・苦情は、以下の窓口までご連絡ください。
        </p>
        <div className="not-prose mt-4 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm leading-7 text-gray-700">
          <p>{COMPANY.name}</p>
          <p>{COMPANY.representative}</p>
          <p>{COMPANY.address}</p>
          <p className="mt-2">
            お問い合わせ：
            <Link href="/apply" className="text-[#37B7C4] hover:underline">
              お問い合わせフォーム
            </Link>
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${COMPANY.siteUrl}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'プライバシーポリシー',
        item: `${COMPANY.siteUrl}/privacy-policy`,
      },
    ],
  };

  return (
    <div className="font-noto-sans-jp min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
          {/* パンくず */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#37B7C4]">
              ホーム
            </Link>
            <span>/</span>
            <span className="text-gray-800">プライバシーポリシー</span>
          </nav>

          <header className="mb-8 border-b border-gray-200 pb-6">
            <h1 className="text-2xl font-bold text-[#333333] sm:text-3xl">
              プライバシーポリシー
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              最終改定日：{UPDATED_AT}
            </p>
          </header>

          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="mb-3 text-lg font-bold text-[#333333] sm:text-xl">
                  {section.heading}
                </h2>
                <div className="privacy-body space-y-3 text-[0.95rem] leading-8 text-gray-700">
                  {section.body}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 text-right text-sm text-gray-600">
            以上
          </div>
        </div>
      </main>
      <Footer />

      {/* 本文内リストとリンクの体裁 */}
      <style>{`
        .privacy-body ul { list-style: disc; padding-left: 1.4em; }
        .privacy-body li { margin-top: 0.4em; }
        .privacy-body a { color: #37B7C4; text-decoration: underline; }
        .privacy-body a:hover { color: #2a9aa5; }
        .privacy-body strong { color: #333333; font-weight: 700; }
      `}</style>
    </div>
  );
}
