import { NextRequest, NextResponse } from 'next/server';

interface FormData {
  formType: 'download' | 'apply';
  companyName: string;
  email: string;
  phone: string;
  turnstileToken?: string;
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
    const turnstileToken = formData.turnstileToken;

    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey && process.env.NODE_ENV === 'production') {
      throw new Error('TURNSTILE_SECRET_KEY is not configured');
    }

    if (secretKey) {
      if (!turnstileToken) {
        return NextResponse.json(
          { success: false, error: '認証に失敗しました。再度お試しください。' },
          { status: 400 }
        );
      }

      const ip =
        request.headers.get('cf-connecting-ip') ??
        request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
        undefined;

      const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: secretKey,
          response: turnstileToken,
          ...(ip ? { remoteip: ip } : {}),
        }),
      });

      const verifyResult = await verifyResponse.json();
      if (!verifyResult.success) {
        return NextResponse.json(
          { success: false, error: '認証に失敗しました。再度お試しください。' },
          { status: 400 }
        );
      }
    }

    const { turnstileToken: _token, ...cleanFormData } = formData;

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
      body: JSON.stringify(cleanFormData),
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
