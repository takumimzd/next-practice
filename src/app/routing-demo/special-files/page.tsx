import Link from 'next/link'

export default function SpecialFilesPage() {
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
          ⚙️ Special Files
        </h1>

        <section className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
          <h2 className="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-50">
            概要
          </h2>
          <p className="mb-4 text-blue-900 dark:text-blue-100">
            Next.js App Routerには、特定の役割を持つ特殊なファイル名があります。
            これらを使って、ローディング状態、エラー処理、404ページなどを実装できます。
          </p>
        </section>

        <div className="space-y-6 mb-8">
          {/* Loading */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              <code className="rounded bg-zinc-100 px-3 py-1 dark:bg-zinc-800">loading.tsx</code>
            </h2>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300">
              Suspenseの自動的なfallback UI。データ取得中に表示されます。
            </p>
            <Link
              href="/routing-demo/special-files/with-loading"
              className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              Loading のデモ →
            </Link>
          </section>

          {/* Error */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              <code className="rounded bg-zinc-100 px-3 py-1 dark:bg-zinc-800">error.tsx</code>
            </h2>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300">
              エラーバウンダリーを自動作成。エラー発生時のUIを定義します。
            </p>
            <Link
              href="/routing-demo/special-files/with-error"
              className="inline-block rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600"
            >
              Error のデモ →
            </Link>
          </section>

          {/* Not Found */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              <code className="rounded bg-zinc-100 px-3 py-1 dark:bg-zinc-800">not-found.tsx</code>
            </h2>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300">
              404エラーページ。存在しないルートにアクセスしたときに表示されます。
            </p>
            <Link
              href="/routing-demo/special-files/this-page-does-not-exist"
              className="inline-block rounded bg-zinc-600 px-4 py-2 text-white hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600"
            >
              Not Found のデモ →
            </Link>
          </section>
        </div>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            ファイル構造
          </h2>
          <pre className="overflow-x-auto rounded bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-800">
{`app/
└── routing-demo/
    └── special-files/
        ├── page.tsx          ← このページ
        ├── loading.tsx       ← ローディングUI（自動適用）
        ├── error.tsx         ← エラーUI（自動適用）
        ├── not-found.tsx     ← 404ページ
        ├── with-loading/
        │   ├── page.tsx
        │   └── loading.tsx   ← このディレクトリ専用のローディング
        └── with-error/
            ├── page.tsx
            └── error.tsx     ← このディレクトリ専用のエラー処理`}
          </pre>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <section className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-700">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              loading.tsx の特徴
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Suspenseで自動的にラップされる</li>
              <li>ページのコンテンツが読み込まれるまで表示</li>
              <li>スケルトンUIの実装に最適</li>
              <li>階層ごとに異なるローディングUIを設定可能</li>
            </ul>
          </section>

          <section className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-700">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              error.tsx の特徴
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Error Boundaryで自動的にラップされる</li>
              <li>クライアントコンポーネントである必要がある</li>
              <li>エラーオブジェクトとリセット関数を受け取る</li>
              <li>階層ごとに異なるエラーUIを設定可能</li>
            </ul>
          </section>

          <section className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-700">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              not-found.tsx の特徴
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>notFound()関数で明示的に呼び出せる</li>
              <li>存在しないルートで自動的に表示</li>
              <li>カスタム404ページを実装できる</li>
              <li>階層ごとに異なる404ページを設定可能</li>
            </ul>
          </section>

          <section className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-700">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              その他の特殊ファイル
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li><code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">route.ts</code> - API Route</li>
              <li><code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">default.tsx</code> - Parallel Routingのデフォルト</li>
              <li><code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">template.tsx</code> - 再マウントされるレイアウト</li>
              <li><code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">global-error.tsx</code> - ルートレベルのエラー</li>
            </ul>
          </section>
        </div>

        <section className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <h3 className="mb-3 text-lg font-semibold text-emerald-900 dark:text-emerald-50">
            💡 ベストプラクティス
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
            <li>loading.tsx: スケルトンUIを使ってコンテンツの構造を示す</li>
            <li>error.tsx: ユーザーフレンドリーなエラーメッセージと復旧手段を提供</li>
            <li>not-found.tsx: 代替リンクやサイトマップを提供して、ユーザーを誘導</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
