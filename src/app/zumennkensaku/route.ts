const headers = {
  'Cache-Control': 'public, max-age=31536000, immutable',
  'X-Robots-Tag': 'noindex',
};

export function GET() {
  return new Response('Gone', { status: 410, headers });
}

export function HEAD() {
  return new Response(null, { status: 410, headers });
}

