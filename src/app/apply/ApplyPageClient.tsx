'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';

export default function ApplyPageClient() {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    department: '',
    position: '',
    email: '',
    phone: '',
    employeeCount: '',
    purpose: [] as string[],
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleCheckboxValue = (name: 'purpose', value: string) => {
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
        purpose: Array.isArray(formData.purpose) ? formData.purpose.join(', ') : formData.purpose,
      };
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...submissionData,
          formType: 'apply',
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
          employeeCount: '',
          purpose: [],
          message: '',
        });
        setSubmitStatus({
          type: 'success',
          message: '送信が完了しました。担当者より、1〜2営業日以内にご連絡いたします。'
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
                無料デモ
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                「ARCHAIVE」を体験する
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                図面検索から見積自動化、ナレッジ共有まで、ARCHAIVEの基本を体験していただけます。
                必要に応じて御社データも組み込んだシナリオをご用意させていただくこともあります。
              </p>

              <div className="relative w-full max-w-2xl mx-auto mb-8">
                <Image
                  src="/images/UI_PC.png"
                  alt="ARCHAIVEデモ画面の実際のUI。"
                  width={7888}
                  height={5128}
                  className="w-full h-auto"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8" />
            </section>

            <form
              onSubmit={handleSubmit}
              className="w-full lg:w-[460px] xl:w-[520px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 space-y-6"
            >
              <div className="text-center">
                <p className="text-lg font-bold text-[#37B7C4]">30秒で無料デモを予約</p>
                <p className="text-sm text-gray-500 mt-1">フォーム送信後、担当より日程調整のご連絡を差し上げます。</p>
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
                placeholder="例 | 山田太郎"
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

            <div className="mb-4 sm:mb-6">
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

            <div className="mb-4 sm:mb-6">
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

            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                従業員数
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent appearance-none bg-white text-sm sm:text-base"
                  required
                >
                  <option value="">選択してください</option>
                  <option value="1-49名">1-49名</option>
                  <option value="50-199名">50-199名</option>
                  <option value="200-499名">200-499名</option>
                  <option value="500名以上">500名以上</option>
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
                ご検討の目的
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="flex flex-col gap-2">
                {[
                  '図面検索業務の効率化',
                  '見積作成業務の効率化',
                  'ナレッジ共有の仕組み化',
                  'データ連携・AI活用',
                  'その他',
                ].map((option) => (
                  <label key={option} className="flex items-center gap-3 text-sm sm:text-base text-gray-700">
                    <input
                      type="checkbox"
                      checked={Array.isArray(formData.purpose) && formData.purpose.includes(option)}
                      onChange={() => toggleCheckboxValue('purpose', option)}
                      className="h-4 w-4 rounded border-gray-300 text-[#37B7C4] focus:ring-[#37B7C4]"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <input
                type="text"
                name="purpose"
                value={Array.isArray(formData.purpose) ? formData.purpose.join(', ') : formData.purpose}
                onChange={() => {}}
                className="sr-only"
                required
                aria-hidden="true"
                tabIndex={-1}
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">お問い合わせ内容（任意）</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="具体的な導入時期や課題感などがあればご入力ください"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:border-transparent text-sm sm:text-base h-32"
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                送信いただいた情報は、デモ対応およびご案内のみに利用し、プライバシーポリシーに基づき適切に管理します。
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#37B7C4] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2a9aa5] transition-all duration-300 disabled:opacity-60"
              >
                {isSubmitting ? '送信中…' : '無料デモを申し込む'}
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
