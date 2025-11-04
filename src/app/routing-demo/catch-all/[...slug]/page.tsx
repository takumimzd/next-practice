import Link from 'next/link'

interface CatchAllPageProps {
  params: Promise<{
    slug: string[]
  }>
}

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const { slug } = await params

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🎯 Catch-all Routing</h1>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">URLパス</h2>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">配列として受け取ったセグメント:</p>
            <div className="bg-white p-4 rounded border">
              <code className="text-orange-700 font-mono">
                {JSON.stringify(slug, null, 2)}
              </code>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            パスの深さ: <span className="font-bold">{slug.length}</span> 階層
          </p>
          <p className="text-sm text-gray-700 mt-2">
            パス: <code className="bg-white px-2 py-1 rounded">/{slug.join('/')}</code>
          </p>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">概要</h2>
          <p className="mb-4">
            Catch-all Routingは、<code className="bg-gray-100 px-2 py-1 rounded">[...パラメータ名]</code>
            の形式で、任意の深さのパスセグメントを配列として受け取ります。
          </p>
          <p className="text-sm text-gray-700">
            このページは <code className="bg-white px-2 py-1 rounded">/routing-demo/catch-all/[...slug]/page.tsx</code> にあります。
          </p>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">ファイル構造</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
{`app/
└── routing-demo/
    └── catch-all/
        └── [...slug]/
            └── page.tsx  ← このファイル`}
          </pre>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">コード例</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
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
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">様々なパスで試してみる</h2>
          <div className="grid gap-3">
            <Link
              href="/routing-demo/catch-all/docs"
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
            >
              /docs (1階層)
            </Link>
            <Link
              href="/routing-demo/catch-all/docs/api"
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
            >
              /docs/api (2階層)
            </Link>
            <Link
              href="/routing-demo/catch-all/docs/api/reference"
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
            >
              /docs/api/reference (3階層)
            </Link>
            <Link
              href="/routing-demo/catch-all/docs/api/reference/v1/components"
              className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
            >
              /docs/api/reference/v1/components (5階層)
            </Link>
          </div>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">実際の使用例</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><code className="bg-gray-100 px-2 py-1 rounded">/docs/[...slug]</code> - ドキュメントサイトの階層構造</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">/shop/[...categories]</code> - 商品カテゴリーの深い階層</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">/files/[...path]</code> - ファイルシステムのような階層</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
          <h3 className="font-semibold mb-2">📝 Optional Catch-all Routes</h3>
          <p className="text-sm text-gray-700 mb-2">
            <code className="bg-white px-2 py-1 rounded">[[...slug]]</code> のように二重括弧にすると、
            パラメータがない場合（<code className="bg-white px-2 py-1 rounded">/catch-all</code>）も
            このルートがマッチします。
          </p>
          <p className="text-sm text-gray-700">
            <code className="bg-white px-2 py-1 rounded">[...slug]</code> は最低1つのセグメントが必要ですが、
            <code className="bg-white px-2 py-1 rounded">[[...slug]]</code> はセグメントなしでもOKです。
          </p>
        </div>

        <Link
          href="/routing-demo"
          className="text-blue-600 hover:underline"
        >
          ← ルーティングデモ一覧に戻る
        </Link>
      </div>
    </div>
  )
}
