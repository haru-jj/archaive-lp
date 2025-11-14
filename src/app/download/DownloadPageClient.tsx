'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export default function DownloadPageClient() {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    department: '',
    position: '',
    email: '',
    phone: '',
    inquiryContent: '',
    inquiryDetails: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'download',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormData({
          companyName: '',
          name: '',
          department: '',
          position: '',
          email: '',
          phone: '',
          inquiryContent: '',
          inquiryDetails: '',
        });
        setSubmitStatus({
          type: 'success',
          message: '資料請求が完了しました。ご入力いただいたメールアドレス宛に、資料のダウンロードリンクをお送りさせていただきます。'
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'エラーが発生しました。時間をおいて再度お試しください。'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: '送信に失敗しました。しばらく経ってから再度お試しください。'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-r from-[#37B7C4] to-[#2a9aa5] text-white py-8 sm:py-12 lg:py-16 px-4 shadow-lg">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">ARCHAIVE 製品資料ダウンロード</h1>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              製造業向けAI図面検索システムの詳細資料をダウンロードしていただけます
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-3xl py-8 sm:py-12 relative">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <img
              src="/images/sub_ui.png"
              alt="ARCHAIVE UIシステム背景"
              className="w-[80vw] max-w-5xl blur-sm opacity-70"
              style={{ height: 'auto' }}
              loading="lazy"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 lg:p-8 xl:p-12 space-y-6"
          >
            <div aria-live="polite">
              {submitStatus && (
                <div
                  className={`rounded-lg border px-4 py-3 text-sm ${
                    submitStatus.type === 'success'
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                      : 'border-red-300 bg-red-50 text-red-700'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </div>
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

            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">役職</label>
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
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-4 sm:mb-6 flex flex-col gap-4">
              <div className="w-full">
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

              <div className="w-full">
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  電話番号
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="例 | 090-1234-5678"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                現在抱えている課題
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  name="inquiryContent"
                  value={formData.inquiryContent}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent appearance-none bg-white text-sm sm:text-base"
                  required
                >
                  <option value="">選択してください</option>
                  <option value="図面検索業務の効率化">図面検索業務の効率化</option>
                  <option value="見積作成業務の効率化">見積作成業務の効率化</option>
                  <option value="ナレッジ共有の仕組み化">ナレッジ共有の仕組み化</option>
                  <option value="過去トラブル・不良の活用">過去トラブル・不良の活用</option>
                  <option value="その他">その他</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                詳細（任意）
              </label>
              <textarea
                name="inquiryDetails"
                value={formData.inquiryDetails}
                onChange={handleInputChange}
                placeholder="具体的な課題や現状の取り組み状況などがあればご記入ください"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent text-sm sm:text-base h-32"
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                送信いただいた情報は、お問い合わせへの対応のみに利用し、プライバシーポリシーに基づき適切に取り扱います。
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#37B7C4] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2a9aa5] transition-all duration-300 disabled:opacity-60"
              >
                {isSubmitting ? '送信中…' : '資料をダウンロードする'}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
