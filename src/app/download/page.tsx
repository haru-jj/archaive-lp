'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export default function DownloadPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    department: '',
    position: '',
    email: '',
    phone: '',
    inquiryContent: '',
    inquiryDetails: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'download'
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        // フォームをリセット
        setFormData({
          companyName: '',
          name: '',
          department: '',
          position: '',
          email: '',
          phone: '',
          inquiryContent: '',
          inquiryDetails: ''
        });
      } else {
        alert(result.error || 'エラーが発生しました');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('送信に失敗しました。しばらく経ってから再度お試しください。');
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
        <div className="bg-gradient-to-r from-[#37B7C4] to-[#2a9aa5] text-white py-8 sm:py-12 lg:py-16 px-4 shadow-lg">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              ARCHAIVE 製品資料ダウンロード
            </h1>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              製造業向けAI図面検索システムの詳細資料をダウンロードしていただけます
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 max-w-3xl py-8 sm:py-12 relative">
          {/* 背景画像 - フォームの後ろに配置 */}
          <div className="absolute inset-0 pointer-events-none hidden sm:block overflow-hidden" style={{ zIndex: 1 }}>
            <img 
              src="/images/sub_ui.png" 
              alt="" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 blur-sm max-w-none"
              style={{ width: '175%', minWidth: '980px', height: 'auto' }}
            />
          </div>
          
          {/* フォーム */}
          <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 lg:p-8 xl:p-12 relative z-10">
            {/* 会社名 */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                会社名
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="例 | 株式会社〇〇"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent text-sm sm:text-base"
                required
              />
            </div>

            {/* 氏名 */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                氏名
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="例 | 山田 太郎"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent text-sm sm:text-base"
                required
              />
            </div>

            {/* 部署 */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                部署
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                placeholder="例 | 図面管理部"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent text-sm sm:text-base"
                required
              />
            </div>

            {/* 役職 */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                役職
              </label>
              <div className="relative">
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent appearance-none bg-white text-sm sm:text-base"
                >
                  <option value="">選択してください</option>
                  <option value="取締役">取締役</option>
                  <option value="執行役員">執行役員</option>
                  <option value="部門長">部門長</option>
                  <option value="課長">課長</option>
                  <option value="リーダー/主任">リーダー/主任</option>
                  <option value="一般社員">一般社員</option>
                  <option value="その他">その他</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Eメール・電話番号 */}
            <div className="mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Eメール */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Eメール
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="例 | example@starup01.jp"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent text-sm sm:text-base"
                  required
                />
              </div>

              {/* 電話番号 */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  電話番号
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="例 | 03-1234-5678"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            {/* お問合わせ内容 */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                お問合わせ内容
              </label>
              <div className="relative">
                <select
                  name="inquiryContent"
                  value={formData.inquiryContent}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent appearance-none bg-white text-sm sm:text-base"
                >
                  <option value="">選択してください</option>
                  <option value="機能について">機能について</option>
                  <option value="導入について">導入について</option>
                  <option value="料金について">料金について</option>
                  <option value="お客様へのご提案について">お客様へのご提案について</option>
                  <option value="その他">その他</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* お問い合わせ内容詳細 */}
            <div className="mb-6 sm:mb-8">
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                お問い合わせ内容詳細
              </label>
              <textarea
                name="inquiryDetails"
                value={formData.inquiryDetails}
                onChange={handleInputChange}
                placeholder="詳細なお問い合わせ内容がございましたらご記入ください"
                rows={4}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent resize-none text-sm sm:text-base"
              />
            </div>

            {/* ダウンロードボタン */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 text-base sm:text-lg shadow-lg transform flex items-center justify-center gap-2 bg-gradient-to-r from-[#37B7C4] to-[#2a9aa5] hover:from-[#2a9aa5] hover:to-[#37B7C4] hover:shadow-xl hover:-translate-y-0.5 text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  送信中...
                </>
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
