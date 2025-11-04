import Link from 'next/link'

interface DynamicPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { id } = await params

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
          🔀 Dynamic Routing
        </h1>

        <section className="mb-8 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950">
          <h2 className="mb-3 text-xl font-semibold text-purple-900 dark:text-purple-50">
            URLパラメータ
          </h2>
          <p className="mb-4 text-purple-900 dark:text-purple-100">
            現在のIDは: <span className="font-bold text-2xl text-purple-700 dark:text-purple-300">{id}</span>
          </p>
          <p className="text-sm text-purple-800 dark:text-purple-200">
            URL: <code className="bg-white px-2 py-1 rounded dark:bg-purple-900">/routing-demo/dynamic/{id}</code>
          </p>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            概要
          </h2>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            Dynamic Routingは、ディレクトリ名を<code className="bg-zinc-100 px-2 py-1 rounded dark:bg-zinc-800">[パラメータ名]</code>
            の形式で作成することで、URLのその部分を動的に受け取れます。
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            このページは <code className="bg-zinc-100 px-2 py-1 rounded dark:bg-zinc-800">/routing-demo/dynamic/[id]/page.tsx</code> にあります。
          </p>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            ファイル構造
          </h2>
          <pre className="overflow-x-auto rounded bg-zinc-900 p-4 text-zinc-100 dark:bg-zinc-800">
{`app/
└── routing-demo/
    └── dynamic/
        └── [id]/
            └── page.tsx  ← このファイル`}
          </pre>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            コード例
          </h2>
          <pre className="overflow-x-auto rounded bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-800">
{`interface DynamicPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function DynamicPage({
  params
}: DynamicPageProps) {
  const { id } = await params

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Current ID: {id}</p>
    </div>
  )
}`}
          </pre>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            他のIDでアクセスしてみる
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['1', '42', '100', 'abc', 'user-123', 'product-xyz'].map((testId) => (
              <Link
                key={testId}
                href={`/routing-demo/dynamic/${testId}`}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-center dark:bg-purple-700 dark:hover:bg-purple-600"
              >
                ID: {testId}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <h2 className="mb-4 text-xl font-semibold text-emerald-900 dark:text-emerald-50">
            実際の使用例
          </h2>
          <ul className="list-disc list-inside space-y-2 text-emerald-800 dark:text-emerald-200">
            <li><code className="bg-white px-2 py-1 rounded dark:bg-emerald-900">/blog/[slug]</code> - ブログ記事のスラッグ</li>
            <li><code className="bg-white px-2 py-1 rounded dark:bg-emerald-900">/products/[id]</code> - 商品の詳細ページ</li>
            <li><code className="bg-white px-2 py-1 rounded dark:bg-emerald-900">/users/[username]</code> - ユーザープロフィール</li>
            <li><code className="bg-white px-2 py-1 rounded dark:bg-emerald-900">/posts/[postId]/comments/[commentId]</code> - 複数のダイナミックセグメント</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
