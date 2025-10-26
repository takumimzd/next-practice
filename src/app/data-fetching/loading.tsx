import Link from "next/link";

export default function DataFetchingLoading() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Data Fetching & Cache Demo
        </h1>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          データを読み込み中...
        </p>

        {/* User Selector Skeleton */}
        <div className="mb-8 animate-pulse rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mb-3 h-4 w-48 rounded bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="h-10 w-64 rounded-md bg-zinc-100 dark:bg-zinc-900"></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Users Loading Skeleton */}
          <div className="animate-pulse rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-8 w-32 rounded bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="h-6 w-20 rounded-full bg-green-100 dark:bg-green-900"></div>
            </div>
            <div className="mb-6 h-4 w-full rounded bg-zinc-100 dark:bg-zinc-900"></div>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-20 rounded-md border border-zinc-200 dark:border-zinc-800"
                ></div>
              ))}
            </div>
          </div>

          {/* Todos Loading Skeleton */}
          <div className="animate-pulse rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-8 w-32 rounded bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="h-6 w-24 rounded-full bg-orange-100 dark:bg-orange-900"></div>
            </div>
            <div className="mb-6 h-4 w-full rounded bg-zinc-100 dark:bg-zinc-900"></div>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-16 rounded-md border border-zinc-200 dark:border-zinc-800"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
