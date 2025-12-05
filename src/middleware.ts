import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const gonePaths = new Set([
  '/form',
  '/form-1',
  '/form-3',
  '/form-4',
  '/info',
  '/_nuxt',
  '/qm_tWbrX/sfvMfoBD',
  '/qm_tWbrX/KSUIVxB6',
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // パスが完全一致する不要URLは410で明示的にクローズ
  if (gonePaths.has(pathname.replace(/\/$/, ''))) {
    return new NextResponse('Gone', {
      status: 410,
      headers: {
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }
  return NextResponse.next();
}

// すべてのリクエストを検査（セット内でのみ応答を変える）
export const config = {
  matcher: '/:path*',
};
