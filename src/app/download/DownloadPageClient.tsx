'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';

export default function DownloadPageClient() {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    department: '',
    position: '',
    email: '',
    phone: '',
    inquiryContent: [] as string[],
    inquiryDetails: '',
  });
  const [currentImage, setCurrentImage] = useState(0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleCheckboxValue = (name: 'inquiryContent', value: string) => {
    setFormData((prev) => {
      const current = new Set(Array.isArray(prev[name]) ? prev[name] : []);
      if (current.has(value)) {
        current.delete(value);
      } else {
        current.add(value);
      }
      return { ...prev, [name]: Array.from(current) };
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const submissionData = {
        ...formData,
        inquiryContent: Array.isArray(formData.inquiryContent)
          ? formData.inquiryContent.join(', ')
          : formData.inquiryContent,
      };
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...submissionData,
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
          inquiryContent: [],
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
    <div className="min-h-screen flex flex-col bg-[#f7f9fc]">
      <Header />

      <main className="flex-grow pt-36 pb-16 px-4 sm:px-6 lg:px-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <section className="flex-[1.05] xl:flex-[1.1] lg:max-w-[780px] xl:max-w-[840px] text-gray-800">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#37B7C4] mb-3">
                <span className="block h-px w-10 bg-[#37B7C4]" />
                資料ダウンロード
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                ARCHAIVE製品紹介カタログ
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                製造業向けAIデータプラットフォーム「
                <Link href="/" className="text-inherit" style={{ textDecoration: 'none' }}>
                  ARCHAIVE
                </Link>
                」の概要・ビジョン・主要機能・事例を簡単に把握できるコンパクト版です。
              </p>

              <div className="relative w-full max-w-2xl mx-auto mb-8">
                <div className="relative overflow-visible rounded-2xl shadow-lg">
                  <Image
                    src={['/images/paper1215.webp', '/images/paper1215-1.webp', '/images/paper1215-2.webp'][currentImage]}
                    alt="ARCHAIVE製品紹介カタログの表紙。"
                    width={2474}
                    height={1392}
                    className="w-full h-auto"
                    sizes="(min-width: 1024px) 520px, 100vw"
                    priority
                  />
                  <button
                    type="button"
                    aria-label="前の画像へ"
                    onClick={() => setCurrentImage((prev) => (prev + 2) % 3)}
                    className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition z-10"
                  >
                    <span className="sr-only">前へ</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="次の画像へ"
                    onClick={() => setCurrentImage((prev) => (prev + 1) % 3)}
                    className="absolute -right-5 sm:-right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition z-10"
                  >
                    <span className="sr-only">次へ</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 space-y-6 mb-8">
                <h2 className="text-left text-2xl sm:text-3xl font-bold text-[#37B7C4]">資料内容</h2>
                <div className="space-y-3">
                  {[
                    '製造業向けAIデータプラットフォーム「ARCHAIVE」の製品概要／主な機能紹介',
                    '図面を起点とした業務フローの刷新と、間接業務の大幅な削減事例',
                    'SIerとSaaSの強みを統合した、現場主導のDX推進体制とシステム構築マップ',
                  ].map((text) => (
                    <div
                      key={text}
                      className="text-sm sm:text-base text-gray-800 font-bold"
                    >
                      ・{text}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <form
              onSubmit={handleSubmit}
              className="w-full lg:w-[460px] xl:w-[520px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 space-y-6"
            >
              <div className="text-center">
                <p className="text-lg font-bold text-[#37B7C4]">30秒で資料を受け取る</p>
                <p className="text-sm text-gray-500 mt-1">フォーム入力後、メールでダウンロードリンクをお送りします。</p>
              </div>

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
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                役職
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent appearance-none bg-white text-sm sm:text-base"
                  required
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
              <div className="flex flex-col gap-2">
                {[
                  '図面検索業務の効率化',
                  '見積作成業務の効率化',
                  'ナレッジ共有の仕組み化',
                  '過去トラブル・不良の活用',
                  'その他',
                ].map((option) => (
                  <label key={option} className="flex items-center gap-3 text-sm sm:text-base text-gray-700">
                    <input
                      type="checkbox"
                      checked={Array.isArray(formData.inquiryContent) && formData.inquiryContent.includes(option)}
                      onChange={() => toggleCheckboxValue('inquiryContent', option)}
                      className="h-4 w-4 rounded border-gray-300 text-[#37B7C4] focus:ring-[#37B7C4]"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <input
                type="text"
                name="inquiryContent"
                value={Array.isArray(formData.inquiryContent) ? formData.inquiryContent.join(', ') : formData.inquiryContent}
                onChange={() => {}}
                className="sr-only"
                required
                aria-hidden="true"
                tabIndex={-1}
              />
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
      </div>
      </main>

      <Footer />
    </div>
  );
}
