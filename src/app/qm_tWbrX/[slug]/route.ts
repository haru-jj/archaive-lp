import { NextRequest } from 'next/server';

const headers = {
  'Cache-Control': 'public, max-age=31536000, immutable',
  'X-Robots-Tag': 'noindex',
};

export function GET(_req: NextRequest) {
  return new Response('Gone', { status: 410, headers });
}

export function HEAD(_req: NextRequest) {
  return new Response(null, { status: 410, headers });
}
