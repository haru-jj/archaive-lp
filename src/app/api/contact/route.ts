import { NextRequest, NextResponse } from 'next/server';

// メール送信ライブラリ（例: nodemailer, resend, sendgrid等）
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const turnstileToken = body?.turnstileToken as string | undefined;

    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey && process.env.NODE_ENV === 'production') {
      throw new Error('TURNSTILE_SECRET_KEY is not configured');
    }

    if (secretKey) {
      if (!turnstileToken) {
        return NextResponse.json(
          { error: '認証に失敗しました。再度お試しください。' },
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
          { error: '認証に失敗しました。再度お試しください。' },
          { status: 400 }
        );
      }
    }
    
    // 1. バリデーション
    const { companyName, name, email, phone, employeeCount, purpose, message } = body;
    
    if (!companyName || !name || !email || !phone || !employeeCount || !purpose) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }
    
    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      );
    }
    
    // 2. データベース保存（例: Supabase, Prisma, MongoDB等）
    // const lead = await prisma.lead.create({
    //   data: {
    //     companyName,
    //     name,
    //     email,
    //     phone,
    //     employeeCount,
    //     purpose,
    //     message,
    //     createdAt: new Date(),
    //   }
    // });
    
    // 3. 管理者への通知メール送信
    // await resend.emails.send({
    //   from: 'noreply@archaive.jp',
    //   to: 'admin@archaive.jp',
    //   subject: `【新規お問い合わせ】${companyName} - ${name}様`,
    //   html: `
    //     <h2>新規お問い合わせがありました</h2>
    //     <p><strong>会社名:</strong> ${companyName}</p>
    //     <p><strong>氏名:</strong> ${name}</p>
    //     <p><strong>メール:</strong> ${email}</p>
    //     <p><strong>電話:</strong> ${phone}</p>
    //     <p><strong>従業員数:</strong> ${employeeCount}</p>
    //     <p><strong>目的:</strong> ${purpose}</p>
    //     <p><strong>メッセージ:</strong> ${message || 'なし'}</p>
    //   `
    // });
    
    // 4. お客様への自動返信メール
    // await resend.emails.send({
    //   from: 'noreply@archaive.jp',
    //   to: email,
    //   subject: '【ARCHAIVE】お問い合わせありがとうございます',
    //   html: `
    //     <p>${name}様</p>
    //     <p>この度はARCHAIVEにお問い合わせいただき、誠にありがとうございます。</p>
    //     <p>以下の内容でお問い合わせを承りました。</p>
    //     <hr>
    //     <p><strong>会社名:</strong> ${companyName}</p>
    //     <p><strong>お名前:</strong> ${name}</p>
    //     <p><strong>メール:</strong> ${email}</p>
    //     <p><strong>お問い合わせ内容:</strong> ${message || 'なし'}</p>
    //     <hr>
    //     <p>担当者より2営業日以内にご連絡させていただきます。</p>
    //     <p>今しばらくお待ちください。</p>
    //   `
    // });
    
    // 5. Slack通知（オプション）
    // await fetch(process.env.SLACK_WEBHOOK_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     text: `新規リード: ${companyName} - ${name}様`
    //   })
    // });
    
    // 6. CRM連携（HubSpot例）
    // await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     properties: {
    //       firstname: name.split(' ')[0],
    //       lastname: name.split(' ')[1] || '',
    //       email,
    //       phone,
    //       company: companyName,
    //     }
    //   })
    // });
    
    return NextResponse.json(
      { 
        success: true,
        message: 'お問い合わせを受け付けました' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('フォーム送信エラー:', error);
    
    // エラーログをSentryやDatadogに送信
    // Sentry.captureException(error);
    
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
