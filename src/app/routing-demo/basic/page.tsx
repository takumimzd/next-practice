import Link from 'next/link'

export default function BasicRoutingPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/routing-demo"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Routing Demo
        </Link>

        <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          📄 Basic Page Routing
        </h1>

        <section className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
          <h2 className="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-50">
            概要
          </h2>
          <p className="mb-4 text-blue-900 dark:text-blue-100">
            Next.js App Routerでは、<code className="bg-white px-2 py-1 rounded text-blue-800 dark:bg-blue-900 dark:text-blue-200">page.tsx</code>
            ファイルを作成することで、そのディレクトリ名がURLのパスとして公開されます。
          </p>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            このページは <code className="bg-white px-2 py-1 rounded dark:bg-blue-900">/routing-demo/basic/page.tsx</code> にあるため、
            <code className="bg-white px-2 py-1 rounded dark:bg-blue-900">/routing-demo/basic</code> でアクセスできます。
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
        └── page.tsx  ← このファイル`}
          </pre>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            基本的なナビゲーション
          </h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">
            Linkコンポーネントを使って他のページへ遷移できます：
          </p>
          <div className="space-y-3">
            <Link
              href="/routing-demo/basic/about"
              className="block rounded bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              About ページへ →
            </Link>
            <Link
              href="/routing-demo/basic/contact"
              className="block rounded bg-emerald-600 px-4 py-2 text-center text-white hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
            >
              Contact ページへ →
            </Link>
          </div>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            コード例
          </h2>
          <pre className="overflow-x-auto rounded bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-800">
{`import Link from 'next/link'

export default function BasicPage() {
  return (
    <div>
      <h1>Basic Routing</h1>
      <Link href="/routing-demo/basic/about">
        About ページへ
      </Link>
    </div>
  )
}`}
          </pre>
        </section>
      </main>
    </div>
  )
}
