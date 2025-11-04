import Link from 'next/link'

export default function BasicRoutingPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">📄 Basic Page Routing</h1>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">概要</h2>
          <p className="mb-4">
            Next.js App Routerでは、<code className="bg-white px-2 py-1 rounded">page.tsx</code>
            ファイルを作成することで、そのディレクトリ名がURLのパスとして公開されます。
          </p>
          <p className="text-sm text-gray-700">
            このページは <code className="bg-white px-2 py-1 rounded">/routing-demo/basic/page.tsx</code> にあるため、
            <code className="bg-white px-2 py-1 rounded">/routing-demo/basic</code> でアクセスできます。
          </p>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">ファイル構造</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
{`app/
└── routing-demo/
    └── basic/
        └── page.tsx  ← このファイル`}
          </pre>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">基本的なナビゲーション</h2>
          <p className="mb-4">Linkコンポーネントを使って他のページへ遷移できます：</p>
          <div className="space-y-3">
            <Link
              href="/routing-demo/basic/about"
              className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
            >
              About ページへ →
            </Link>
            <Link
              href="/routing-demo/basic/contact"
              className="block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-center"
            >
              Contact ページへ →
            </Link>
          </div>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">コード例</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
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
        </div>

        <div className="flex gap-4">
          <Link
            href="/routing-demo"
            className="text-blue-600 hover:underline"
          >
            ← ルーティングデモ一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
