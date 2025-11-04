import Link from 'next/link'

interface CatchAllPageProps {
  params: Promise<{
    slug: string[]
  }>
}

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const { slug } = await params

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
          🎯 Catch-all Routing
        </h1>

        <section className="mb-8 rounded-lg border border-orange-200 bg-orange-50 p-6 dark:border-orange-900 dark:bg-orange-950">
          <h2 className="mb-3 text-xl font-semibold text-orange-900 dark:text-orange-50">
            URLパス
          </h2>
          <div className="mb-4">
            <p className="text-sm text-orange-800 mb-2 dark:text-orange-200">配列として受け取ったセグメント:</p>
            <div className="bg-white p-4 rounded border border-orange-200 dark:bg-orange-900 dark:border-orange-800">
              <code className="text-orange-700 font-mono dark:text-orange-300">
                {JSON.stringify(slug, null, 2)}
              </code>
            </div>
          </div>
          <p className="text-sm text-orange-800 dark:text-orange-200">
            パスの深さ: <span className="font-bold">{slug.length}</span> 階層
          </p>
          <p className="text-sm text-orange-800 mt-2 dark:text-orange-200">
            パス: <code className="bg-white px-2 py-1 rounded dark:bg-orange-900">/{slug.join('/')}</code>
          </p>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            概要
          </h2>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            Catch-all Routingは、<code className="bg-zinc-100 px-2 py-1 rounded dark:bg-zinc-800">[...パラメータ名]</code>
            の形式で、任意の深さのパスセグメントを配列として受け取ります。
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            このページは <code className="bg-zinc-100 px-2 py-1 rounded dark:bg-zinc-800">/routing-demo/catch-all/[...slug]/page.tsx</code> にあります。
          </p>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            ファイル構造
          </h2>
          <pre className="overflow-x-auto rounded bg-zinc-900 p-4 text-zinc-100 dark:bg-zinc-800">
{`app/
└── routing-demo/
    └── catch-all/
        └── [...slug]/
            └── page.tsx  ← このファイル`}
          </pre>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            コード例
          </h2>
          <pre className="overflow-x-auto rounded bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-800">
{`interface CatchAllPageProps {
  params: Promise<{
    slug: string[]
  }>
}

export default async function CatchAllPage({
  params
}: CatchAllPageProps) {
  const { slug } = await params

  return (
    <div>
      <h1>Catch-all Page</h1>
      <p>Segments: {slug.join('/')}</p>
      <p>Depth: {slug.length}</p>
    </div>
  )
}`}
          </pre>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            様々なパスで試してみる
          </h2>
          <div className="grid gap-3">
            <Link
              href="/routing-demo/catch-all/docs"
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-600"
            >
              /docs (1階層)
            </Link>
            <Link
              href="/routing-demo/catch-all/docs/api"
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-600"
            >
              /docs/api (2階層)
            </Link>
            <Link
              href="/routing-demo/catch-all/docs/api/reference"
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-600"
            >
              /docs/api/reference (3階層)
            </Link>
            <Link
              href="/routing-demo/catch-all/docs/api/reference/v1/components"
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-600"
            >
              /docs/api/reference/v1/components (5階層)
            </Link>
          </div>
        </section>

        <section className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <h2 className="mb-4 text-xl font-semibold text-emerald-900 dark:text-emerald-50">
            実際の使用例
          </h2>
          <ul className="list-disc list-inside space-y-2 text-emerald-800 dark:text-emerald-200">
            <li><code className="bg-white px-2 py-1 rounded dark:bg-emerald-900">/docs/[...slug]</code> - ドキュメントサイトの階層構造</li>
            <li><code className="bg-white px-2 py-1 rounded dark:bg-emerald-900">/shop/[...categories]</code> - 商品カテゴリーの深い階層</li>
            <li><code className="bg-white px-2 py-1 rounded dark:bg-emerald-900">/files/[...path]</code> - ファイルシステムのような階層</li>
          </ul>
        </section>

        <section className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
          <h3 className="mb-2 font-semibold text-amber-900 dark:text-amber-50">
            📝 Optional Catch-all Routes
          </h3>
          <p className="text-sm text-amber-800 mb-2 dark:text-amber-200">
            <code className="bg-white px-2 py-1 rounded dark:bg-amber-900">[[...slug]]</code> のように二重括弧にすると、
            パラメータがない場合（<code className="bg-white px-2 py-1 rounded dark:bg-amber-900">/catch-all</code>）も
            このルートがマッチします。
          </p>
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <code className="bg-white px-2 py-1 rounded dark:bg-amber-900">[...slug]</code> は最低1つのセグメントが必要ですが、
            <code className="bg-white px-2 py-1 rounded dark:bg-amber-900">[[...slug]]</code> はセグメントなしでもOKです。
          </p>
        </section>
      </main>
    </div>
  )
}
