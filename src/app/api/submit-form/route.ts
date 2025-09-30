import { NextRequest, NextResponse } from 'next/server';

interface FormData {
  formType: 'download' | 'apply';
  companyName: string;
  email: string;
  phone: string;
  // download form specific
  lastName?: string;
  firstName?: string;
  department?: string;
  position?: string;
  inquiryContent?: string;
  inquiryDetails?: string;
  // apply form specific
  name?: string;
  employeeCount?: string;
  purpose?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();

    // Google Apps Script Web AppのURLを設定
    // 実際のGoogle Apps Script Web AppのURLに置き換えてください
    const GAS_WEB_APP_URL = process.env.GAS_WEB_APP_URL;
    
    if (!GAS_WEB_APP_URL) {
      throw new Error('GAS_WEB_APP_URL is not configured');
    }

    // Google Apps Scriptに送信
    const response = await fetch(GAS_WEB_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message
      });
    } else {
      throw new Error(result.error || 'Form submission failed');
    }

  } catch (error) {
    console.error('Form submission error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'フォームの送信に失敗しました。しばらく経ってから再度お試しください。'
      },
      { status: 500 }
    );
  }
}