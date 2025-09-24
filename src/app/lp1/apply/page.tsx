import Link from 'next/link';
import Icon from '@/components/ui/Icon';

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#e6f7fa] via-white to-[#f0f7fa] font-sans flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-white/80 rounded-2xl shadow-2xl p-10 border border-blue-100">
          <div className="flex justify-center mb-4">
            <Icon type="ai" size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#37B7C4] drop-shadow">お申し込み</h1>
          <p className="text-lg mb-8 text-gray-700">
            サービスへのお申し込みありがとうございます。<br />
            AIで見積もり業務を革新する体験を、ぜひご体感ください。
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-100">
            <h2 className="text-2xl font-bold mb-4 text-[#37B7C4]">申し込みフォーム</h2>
            <p className="text-gray-600 mb-6">
              現在、申し込みフォームは準備中です。お問い合わせは以下の方法でお願いします。
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-[#37B7C4] text-xl">📧</span>
                <span className="text-gray-700">info@mysaas.co.jp</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-[#37B7C4] text-xl">📞</span>
                <span className="text-gray-700">03-1234-5678</span>
              </div>
            </div>
          </div>
          <Link
            href="/lp1"
            className="inline-block px-8 py-3 bg-[#37B7C4] text-white rounded-lg font-bold text-lg hover:bg-[#2596a6] transition shadow"
          >
            LP1トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
} 