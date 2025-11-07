import type { Metadata } from 'next';
import ApplyPageClient from './ApplyPageClient';

export const metadata: Metadata = {
  title: '無料デモ申し込み｜ARCHAIVEトライアル予約',
  description:
    'ARCHAIVEの無料デモ・トライアルをお申し込みいただけます。図面検索やAI見積を自社データで体験し、導入効果を確認しましょう。',
  keywords: ['ARCHAIVEデモ', '無料トライアル', '製造業DX相談', 'AI見積デモ', '図面管理デモ'],
  alternates: {
    canonical: 'https://archaive.net/apply',
  },
  openGraph: {
    title: '無料デモ申し込み｜ARCHAIVEトライアル予約',
    description:
      '製造業DXを推進するARCHAIVEのデモを予約。図面管理や見積業務の自動化を実際の画面でご確認いただけます。',
    url: 'https://archaive.net/apply',
  },
  twitter: {
    card: 'summary',
    title: '無料デモ申し込み｜ARCHAIVEトライアル予約',
    description:
      'ARCHAIVEの無料デモを通じて、図面検索・AI見積の活用方法を専門スタッフがご案内します。',
  },
};

export default function ApplyPage() {
  return <ApplyPageClient />;
}
