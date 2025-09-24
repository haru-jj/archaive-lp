'use client';

import { useState } from 'react';

interface FormData {
  companyName: string;
  name: string;
  department?: string;
  position?: string;
  email: string;
  phone: string;
  employeeCount: string;
  purpose: string;
  message?: string;
  privacyPolicy: boolean;
}

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
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
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // プライバシーポリシーの同意確認
    if (!formData.privacyPolicy) {
      setSubmitStatus({
        type: 'error',
        message: 'プライバシーポリシーへの同意が必要です'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'エラーが発生しました');
      }
      
      // 成功時の処理
      setSubmitStatus({
        type: 'success',
        message: 'お問い合わせありがとうございます。担当者より連絡させていただきます。'
      });
      
      // Google Analytics イベント送信
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form',
          value: 1
        });
      }
      
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
      
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : '送信に失敗しました。しばらく経ってから再度お試しください。'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit
  };
}