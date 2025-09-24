'use client';

export default function ApplyError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          申込みページでエラーが発生しました
        </h2>
        <p className="text-gray-600 mb-6">
          申し訳ございません。フォームの処理中にエラーが発生しました。
        </p>
        <button
          onClick={() => reset()}
          className="bg-[#37B7C4] text-white px-6 py-3 rounded-lg hover:bg-[#2a8e99] transition-colors"
        >
          もう一度試す
        </button>
      </div>
    </div>
  );
}