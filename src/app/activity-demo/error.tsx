"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ActivityDemoError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Activity demo error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Home
        </Link>

        <div className="text-center">
          <div className="mb-6 text-6xl">⚠️</div>
          <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Activity Demoでエラーが発生しました
          </h1>
          <p className="mb-8 text-zinc-600 dark:text-zinc-400">
            データの取得中にエラーが発生しました。
          </p>

          <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
            <p className="text-sm text-red-800 dark:text-red-200">
              {error.message || "不明なエラー"}
            </p>
          </div>

          <button
            onClick={reset}
            className="rounded-md bg-zinc-900 px-6 py-3 font-semibold text-white transition-all hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            もう一度試す
          </button>
        </div>
      </main>
    </div>
  );
}
