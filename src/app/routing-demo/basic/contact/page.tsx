import Link from 'next/link'

export default function ContactPage() {
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
          Contact ページ
        </h1>

        <section className="mb-8 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950">
          <p className="mb-3 text-purple-900 dark:text-purple-100">
            このページは <code className="bg-white px-2 py-1 rounded text-purple-800 dark:bg-purple-900 dark:text-purple-200">/routing-demo/basic/contact/page.tsx</code> にあります。
          </p>
          <p className="text-sm text-purple-800 dark:text-purple-200">
            URL: <code className="bg-white px-2 py-1 rounded dark:bg-purple-900">/routing-demo/basic/contact</code>
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
        ├── about/
        │   └── page.tsx
        └── contact/
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
            href="/routing-demo/basic/about"
            className="block rounded bg-emerald-600 px-4 py-2 text-center text-white hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
          >
            About ページへ →
          </Link>
        </div>
      </main>
    </div>
  )
}
