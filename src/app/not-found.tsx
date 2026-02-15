import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - ページが見つかりません',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">404</h2>
        <p className="text-xl text-gray-600 mb-6">お探しのページが見つかりません</p>
        <Link
          href="/"
          className="bg-[#37B7C4] text-white px-6 py-3 rounded-lg hover:bg-[#2a8e99] transition-colors inline-block"
        >
          トップページへ戻る
        </Link>
      </div>
    </div>
  );
}
