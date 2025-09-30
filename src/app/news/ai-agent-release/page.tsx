'use client';

import { Header, Footer } from '@/components/layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AiAgentReleaseNews() {
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
            <p className="text-[#888] text-sm mb-6">2025/7/28</p>
            <h2 className="text-2xl mt-6 mb-12 font-bold">業界初、「探す」から「話す」へ。ARCHAIVE、製造業AIエージェント「チャット型データ検索機能」をリリース</h2>
            <div className="bg-white p-12 shadow-lg rounded-lg h-fit">
            <div className="news-article">
              {/* AIエージェント機能の画像 */}
              <div className="text-center my-8">
                <img 
                  src="/news/142139-11-5216d3335c660b5c6b7e0ceaae4f56d0-2068x1160.jpeg" 
                  alt="AIエージェント機能のリリース" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <p className="text-base leading-6 mb-6">
                業界初、「探す」から「話す」へ。ARCHAIVE、製造業AIエージェント「チャット型データ検索機能」をリリース。AIが膨大な社内データから必要な情報を瞬時にピックアップ。*1
              </p>
              
              <p className="text-base leading-6 mb-6">
                〜2D図面自動見積もり、図面検索、過去のトラブル事例も、話しかけるだけで。業務の属人化を解消し、組織全体の生産性を飛躍的に向上〜
              </p>

              <p className="text-sm text-gray-600 mb-6">
                *1 STARUP社調べ　2025年7月　図面管理・検索関連サービス約30社
              </p>

              <p className="text-base leading-6 mb-6">
                株式会社STAR UPは、図面データ活用クラウド「ARCHAIVE（アーカイブ）」において、社内に蓄積された膨大な情報の中から、必要な答えを会話形式で瞬時に引き出すことができる「AIエージェント」を、2025年7月28日より提供開始することをお知らせします。今回のリリースでは、見積もり支援機能がメインとなっており、近日全ての機能を提供予定です。
              </p>

              <p className="text-base leading-6 mb-6">
                「あの見積もり、どこだっけ？」「このトラブル、前にもあったはず…」といった日常的な情報検索の非効率や、ベテラン社員の頭の中にしかないノウハウの属人化は、多くの企業の成長を妨げる大きな課題でした。
              </p>

              <p className="text-base leading-6 mb-6">
                リリースする「AIエージェント」は、画面右下のボタンからいつでも起動でき、まるで社内のことを知り尽くした専門家に質問するように、自然な言葉で対話するだけで、2D図面からの自動見積もり、図面の検索、過去のトラブルシューティングなど、あらゆる社内情報を活用した業務を可能にする高精度なアシスタント機能です。今回のリリースでは自動見積もり機能を搭載いたします。順次、検索機能、資料要約機能、トラブルシューティング機能などを実装してまいります。
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">開発の背景</h3>
              <p className="text-base leading-6 mb-6">
                労働人口の減少と働き方改革の推進により、企業にとって「生産性の向上」は喫緊の経営課題となっています。しかし、多くの現場では、ファイルサーバーやチャットツール、過去のメールなどに情報が散在し、従業員は本来注力すべき業務時間の多くを「情報を探す」という作業に費やしているのが実情です。
              </p>

              <p className="text-base leading-6 mb-6">
                また、特定の従業員しか知らない業務知識や過去の経緯といった「暗黙知」が継承されない「業務の属人化」は、業務品質の低下や、新人・若手社員の育成コスト増大の要因となっています。
              </p>

              <p className="text-base leading-6 mb-6">
                当社は、これらの課題をテクノロジーの力で解決すべく、社内データに特化して学習し、対話を通じて誰もが会社の「知」にアクセスできる「AIエージェント」の開発に至りました。
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">新機能「AIチャット型データ検索」の概要</h3>
              <p className="text-base leading-6 mb-6">
                「AIチャット型データ検索」機能は、いつでも画面の右下から呼び出せる、貴社専属のAIエージェントです。自然言語での対話を通じて、以下の業務をはじめとする様々なタスクを支援します。
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3">高精度な社内情報検索</h4>
                <p className="text-base leading-6 mb-4">
                  「〇〇社向けの△△に関する図面を探して」「去年5月に発生した不良品のトラブル事例における原因と対策を教えて」と話しかけるだけで、AIが社内のあらゆるデータを横断的に検索し、最適な答えを提示します。
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3">ドキュメント作成支援</h4>
                <p className="text-base leading-6 mb-4">
                  「過去のA社向けの見積もりを参考に、B社向けの新しい見積もり案を作って」といった指示で、精度の高い見積書や報告書のドラフトを瞬時に作成。ドキュメント作成業務を劇的に効率化します。
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3">2D図面自動見積もり支援</h4>
                <p className="text-base leading-6 mb-4">
                  「この図面の部品を拾い出して、材質と加工費を含めた概算見積もりを作って」といった指示で、AIが図面を瞬時に解析し過去データに基づいた見積もり案を自動作成。数時間かかっていた作業を数分に短縮し、迅速な顧客対応を実現します。
                </p>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">具体的な利用シーン</h3>
              
              <div className="mb-4">
                <h4 className="text-lg font-bold mb-2">営業担当者</h4>
                <p className="text-base leading-6 mb-4">
                  商談の準備中に、その場で図面をアップロードし、「この図面の見積もりを行って」「過去の見積もり記録を探してきて」と指示。AIが即座に要点をまとめ、提案の質とスピードを高めます。
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-bold mb-2">設計担当者</h4>
                <p className="text-base leading-6 mb-4">
                  新しい製品の設計時に、「この部品を使った過去の図面と、その際の注意点を教えて」と質問。AIが関連図面と過去の仕様書を提示し、手戻りのない効率的な設計をサポートします。
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold mb-2">製造担当者</h4>
                <p className="text-base leading-6 mb-4">
                  新規製品を加工する際に、「この製品を作成する際の注意点を、過去のトラブルを参考に類推して」とAIに質問。AIが過去の対応履歴から最も有効な解決策を提示し、迅速で的確な加工の支援を実現します。
                </p>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">今後の展望</h3>
              <p className="text-base leading-6 mb-6">
                社内に蓄積された情報は、単なるデータの集合体ではなく、企業の歩みそのものです。今回の機能は、その「知」の集積に歩み寄る、最初のステップに過ぎません。
              </p>

              <p className="text-base leading-6 mb-6">
                私たちは、PLMやERPといったシステムの構築を通じ、製造業における情報の連なり、その複雑さを深く理解してきました。だからこそ、データ活用のための基盤構築や一社一社様の現場に深く入り込み、より本質的な価値創造を見据えています。
              </p>

              <p className="text-base leading-6 mb-6">
                引き続き、製造業の核心に寄り添いながら、テクノロジーを用いて「知」の可能性を最大限に引き出し、業界の新たな未来を共に創造してまいります。
              </p>

              <p className="text-base leading-6 mt-8 mb-6">
                ARCHAIVEについては<Link href="/" className="text-[#37B7C4] no-underline hover:underline">こちら</Link>
              </p>
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