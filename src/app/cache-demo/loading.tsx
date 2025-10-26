import Link from "next/link";

export default function CacheDemoLoading() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Cache Components Demo
        </h1>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          読み込み中...
        </p>

        <div className="space-y-8">
          {/* Loading Skeleton */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="animate-pulse rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="mb-4 h-8 w-2/3 rounded bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="mb-4 h-4 w-full rounded bg-zinc-100 dark:bg-zinc-900"></div>
              <div className="h-24 rounded-md bg-zinc-100 dark:bg-zinc-900"></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
