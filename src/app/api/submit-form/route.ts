import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Supabase初期化
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Resend初期化
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 1. Supabaseにデータを保存
    const { data, error } = await supabase
      .from('leads') // 'leads'というテーブル名（Supabaseで作成する必要あり）
      .insert([
        {
          company_name: body.companyName,
          name: body.name,
          department: body.department || null,
          position: body.position || null,
          email: body.email,
          phone: body.phone,
          employee_count: body.employeeCount,
          purpose: body.purpose,
          message: body.message || null,
          form_type: body.formType || 'apply',
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error('Supabase保存エラー:', error);
      throw new Error('データベースへの保存に失敗しました');
    }

    // 2. 管理者へメール通知
    const emailResult = await resend.emails.send({
      from: 'ARCHAIVE <noreply@your-domain.com>', // あなたのドメインに変更
      to: process.env.ADMIN_EMAIL!,
      subject: body.formType === 'download' 
        ? `【資料ダウンロード】${body.companyName} - ${body.name}様`
        : `【無料デモ申込み】${body.companyName} - ${body.name}様`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #37B7C4; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 5px; }
            .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
            .value { font-size: 16px; color: #333; }
            .footer { margin-top: 30px; text-align: center; color: #999; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>新規お問い合わせ</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">会社名</div>
                <div class="value">${body.companyName}</div>
              </div>
              
              <div class="field">
                <div class="label">お名前</div>
                <div class="value">${body.name}</div>
              </div>
              
              ${body.department ? `
              <div class="field">
                <div class="label">部署</div>
                <div class="value">${body.department}</div>
              </div>
              ` : ''}
              
              ${body.position ? `
              <div class="field">
                <div class="label">役職</div>
                <div class="value">${body.position}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">メールアドレス</div>
                <div class="value"><a href="mailto:${body.email}">${body.email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">電話番号</div>
                <div class="value">${body.phone}</div>
              </div>
              
              <div class="field">
                <div class="label">従業員数</div>
                <div class="value">${body.employeeCount}</div>
              </div>
              
              <div class="field">
                <div class="label">お問い合わせ目的</div>
                <div class="value">${body.purpose}</div>
              </div>
              
              ${body.message ? `
              <div class="field">
                <div class="label">メッセージ</div>
                <div class="value">${body.message}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">受信日時</div>
                <div class="value">${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</div>
              </div>
            </div>
            <div class="footer">
              <p>このメールは自動送信されています。</p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    if (emailResult.error) {
      console.error('メール送信エラー:', emailResult.error);
      // メール送信に失敗してもデータは保存されているので、処理は続行
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'お問い合わせを受け付けました' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API処理エラー:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'サーバーエラーが発生しました' 
      },
      { status: 500 }
    );
  }
}