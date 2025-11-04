import Link from 'next/link'

export default function ParallelLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/routing-demo"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Routing Demo
        </Link>

        <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          ⚡ Parallel Routing
        </h1>

        <section className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
          <h2 className="mb-3 text-xl font-semibold text-amber-900 dark:text-amber-50">
            概要
          </h2>
          <p className="mb-2 text-amber-900 dark:text-amber-100">
            Parallel Routingは、同じレイアウト内で複数のページを同時にレンダリングします。
          </p>
          <p className="text-sm text-amber-800 dark:text-amber-200">
            このページでは、メインコンテンツ、Analytics、Teamの3つのスロットが並列で表示されています。
          </p>
        </section>

        {/* メインコンテンツ */}
        <div className="mb-6">
          {children}
        </div>

        {/* 並列スロット */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500 dark:bg-zinc-950 dark:border-blue-600">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-zinc-900 dark:text-zinc-50">
              <span className="mr-2">📊</span> Analytics スロット
            </h3>
            {analytics}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-emerald-500 dark:bg-zinc-950 dark:border-emerald-600">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-zinc-900 dark:text-zinc-50">
              <span className="mr-2">👥</span> Team スロット
            </h3>
            {team}
          </div>
        </div>
      </main>
    </div>
  )
}
