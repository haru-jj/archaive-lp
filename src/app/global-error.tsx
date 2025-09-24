'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              システムエラーが発生しました
            </h2>
            <p className="text-gray-600 mb-6">
              申し訳ございません。予期しないエラーが発生しました。
            </p>
            <button
              onClick={() => reset()}
              className="bg-[#37B7C4] text-white px-6 py-3 rounded-lg hover:bg-[#2a8e99] transition-colors"
            >
              再読み込み
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}