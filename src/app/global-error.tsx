"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ja">
      <body className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <p className="text-slate-400 mb-4">予期しないエラーが発生しました</p>
          <button
            onClick={reset}
            className="px-6 py-2 rounded-full border border-slate-600 text-sm hover:border-slate-400 transition-colors"
          >
            再試行
          </button>
        </div>
      </body>
    </html>
  );
}
