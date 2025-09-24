'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/lp_new/Header';
import Footer from '@/components/lp_new/Footer';

export default function DownloadPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    department: '',
    position: '',
    email: '',
    phone: '',
    employeeCount: '',
    purpose: '',
    message: '',
    privacyPolicy: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...formData, formType: 'download'}),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitMessage('資料のダウンロードリンクをメールでお送りします。');
        // フォームをリセット
        setFormData({
          companyName: '',
          name: '',
          department: '',
          position: '',
          email: '',
          phone: '',
          employeeCount: '',
          purpose: '',
          message: '',
          privacyPolicy: false
        });
      } else {
        setSubmitMessage('エラーが発生しました。もう一度お試しください。');
      }
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitMessage('通信エラーが発生しました。しばらくしてからお試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* メインコンテンツ */}
      <main className="flex-grow pt-20">
        {/* ページヘッダー */}
        <div className="bg-gradient-to-r from-[#37B7C4] to-[#2a9aa5] text-white py-16 px-4 shadow-lg">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              ARCHAIVE 製品資料ダウンロード
            </h1>
            <p className="text-white/90 text-lg">
              製造業向けAI図面検索システムの詳細資料をダウンロードしていただけます
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 max-w-3xl py-12 relative">
          {/* 背景画像 - フォームの後ろに配置 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 1 }}>
            <img 
              src="/images/sub_ui.png" 
              alt="" 
              className="opacity-60 blur-sm"
              style={{ width: '80vw', maxWidth: '80vw', height: 'auto' }}
            />
          </div>
          
          {/* フォーム */}
          <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12 relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#333333] mb-2">
                資料ダウンロードフォーム
              </h2>
              <p className="text-gray-600">
                以下の項目をご入力ください。資料をすぐにダウンロードいただけます。
              </p>
            </div>

            {/* 会社名 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                会社名
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="例 | 株式会社〇〇"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent"
                required
              />
            </div>

            {/* 氏名 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                氏名
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="例 | 山田太郎"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent"
                required
              />
            </div>

            {/* 部署 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                部署
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                placeholder="例 | 図面管理部"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="例 | example@starup01.jp"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent"
                required
              />
              <p className="text-xs text-gray-500 mt-1">資料のダウンロードリンクをお送りします</p>
            </div>

            {/* 電話番号 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                電話番号
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="例 | 03-1234-5678"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent"
              />
            </div>

            {/* 従業員数 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                従業員数
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent appearance-none bg-white"
                  required
                >
                  <option value="">選択してください</option>
                  <option value="1-5">1名以上 - 5名以下</option>
                  <option value="6-20">6名以上 - 20名以下</option>
                  <option value="21-50">21名以上 - 50名以下</option>
                  <option value="51-100">51名以上 - 100名以下</option>
                  <option value="101+">101名以上</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 資料ダウンロードの目的 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                資料ダウンロードの目的
              </label>
              <div className="relative">
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent appearance-none bg-white"
                >
                  <option value="">選択してください</option>
                  <option value="知見を深める">ご自身の知見を深めるため</option>
                  <option value="仕様を知る">仕様を知るため</option>
                  <option value="課題解決">課題解決に向けた情報収集のため</option>
                  <option value="比較検討">他社サービスと比較検討するため</option>
                  <option value="興味">興味があったため</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ご質問・ご要望 */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                ご質問・ご要望
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="その他お問い合わせ内容がございましたらご記入ください"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent resize-none"
              />
            </div>

            {/* プライバシーポリシー */}
            <div className="mb-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleInputChange}
                  className="mr-3 w-5 h-5 text-[#37B7C4] border-gray-300 rounded focus:ring-[#37B7C4]"
                  required
                />
                <span className="text-sm text-gray-700">
                  <Link href="/privacy-policy" className="text-[#37B7C4] hover:underline">
                    プライバシーポリシー
                  </Link>
                  を確認し、同意しました。
                  <span className="text-red-500 ml-1">*</span>
                </span>
              </label>
            </div>

            {/* エラー・成功メッセージ */}
            {submitMessage && (
              <div className={`p-4 rounded-lg mb-4 ${
                submitMessage.includes('送ります') 
                  ? 'bg-green-100 text-green-700 border border-green-400' 
                  : 'bg-red-100 text-red-700 border border-red-400'
              }`}>
                {submitMessage}
              </div>
            )}

            {/* ダウンロードボタン */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-300 text-lg shadow-lg transform flex items-center justify-center gap-2 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-[#37B7C4] to-[#2a9aa5] hover:from-[#2a9aa5] hover:to-[#37B7C4] hover:shadow-xl hover:-translate-y-0.5'
              } text-white`}
            >
              {isSubmitting ? (
                '送信中...'
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                  資料をダウンロード
                </>
              )}
            </button>
          </form>

        </div>
      </main>

      <Footer />
    </div>
  );
}