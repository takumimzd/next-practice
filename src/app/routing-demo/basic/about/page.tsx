import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/routing-demo/basic"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Basic Routing
        </Link>

        <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          About ページ
        </h1>

        <section className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <p className="mb-3 text-emerald-900 dark:text-emerald-100">
            このページは <code className="bg-white px-2 py-1 rounded text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">/routing-demo/basic/about/page.tsx</code> にあります。
          </p>
          <p className="text-sm text-emerald-800 dark:text-emerald-200">
            URL: <code className="bg-white px-2 py-1 rounded dark:bg-emerald-900">/routing-demo/basic/about</code>
          </p>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            ファイル構造
          </h2>
          <pre className="overflow-x-auto rounded bg-zinc-900 p-4 text-zinc-100 dark:bg-zinc-800">
{`app/
└── routing-demo/
    └── basic/
        ├── page.tsx
        └── about/
            └── page.tsx  ← このファイル`}
          </pre>
        </section>

        <div className="space-y-3">
          <Link
            href="/routing-demo/basic"
            className="block rounded bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            ← Basic ページに戻る
          </Link>
          <Link
            href="/routing-demo/basic/contact"
            className="block rounded bg-emerald-600 px-4 py-2 text-center text-white hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
          >
            Contact ページへ →
          </Link>
        </div>
      </main>
    </div>
  )
}
