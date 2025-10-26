"use client";

type ErrorCardProps = {
  title: string;
  error: Error;
  reset: () => void;
};

export function ErrorCard({ title, error, reset }: ErrorCardProps) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950">
      <div className="mb-4 text-center text-3xl">⚠️</div>
      <h3 className="mb-2 text-center text-lg font-semibold text-red-900 dark:text-red-50">
        {title}の読み込みに失敗しました
      </h3>
      <p className="mb-4 text-center text-sm text-red-700 dark:text-red-300">
        {error.message || "不明なエラー"}
      </p>
      <div className="text-center">
        <button
          onClick={reset}
          className="rounded-md bg-red-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-red-700 dark:bg-red-800 dark:hover:bg-red-700"
        >
          再試行
        </button>
      </div>
    </div>
  );
}
