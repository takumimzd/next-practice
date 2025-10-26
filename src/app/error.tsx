"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // エラーをログに記録（本番環境ではエラー追跡サービスに送信）
    console.error("Global error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
      <div className="mx-auto max-w-md px-6 text-center">
        <div className="mb-6 text-6xl">⚠️</div>
        <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          エラーが発生しました
        </h1>
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          申し訳ございません。予期しないエラーが発生しました。
        </p>

        <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
          <p className="text-sm text-red-800 dark:text-red-200">
            {error.message || "不明なエラー"}
          </p>
          {error.digest && (
            <p className="mt-2 text-xs text-red-600 dark:text-red-400">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="rounded-md bg-zinc-900 px-6 py-3 font-semibold text-white transition-all hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            もう一度試す
          </button>
          <Link
            href="/"
            className="rounded-md border border-zinc-300 px-6 py-3 font-semibold text-zinc-900 transition-all hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
