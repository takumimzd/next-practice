import Link from 'next/link'

interface DynamicPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { id } = await params

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🔀 Dynamic Routing</h1>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">URLパラメータ</h2>
          <p className="mb-4">
            現在のIDは: <span className="font-bold text-purple-700 text-2xl">{id}</span>
          </p>
          <p className="text-sm text-gray-700">
            URL: <code className="bg-white px-2 py-1 rounded">/routing-demo/dynamic/{id}</code>
          </p>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">概要</h2>
          <p className="mb-4">
            Dynamic Routingは、ディレクトリ名を<code className="bg-gray-100 px-2 py-1 rounded">[パラメータ名]</code>
            の形式で作成することで、URLのその部分を動的に受け取れます。
          </p>
          <p className="text-sm text-gray-700">
            このページは <code className="bg-white px-2 py-1 rounded">/routing-demo/dynamic/[id]/page.tsx</code> にあります。
          </p>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">ファイル構造</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
{`app/
└── routing-demo/
    └── dynamic/
        └── [id]/
            └── page.tsx  ← このファイル`}
          </pre>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">コード例</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
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
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">他のIDでアクセスしてみる</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['1', '42', '100', 'abc', 'user-123', 'product-xyz'].map((testId) => (
              <Link
                key={testId}
                href={`/routing-demo/dynamic/${testId}`}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-center"
              >
                ID: {testId}
              </Link>
            ))}
          </div>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">実際の使用例</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><code className="bg-gray-100 px-2 py-1 rounded">/blog/[slug]</code> - ブログ記事のスラッグ</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">/products/[id]</code> - 商品の詳細ページ</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">/users/[username]</code> - ユーザープロフィール</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">/posts/[postId]/comments/[commentId]</code> - 複数のダイナミックセグメント</li>
          </ul>
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
