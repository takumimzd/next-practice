import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact ページ</h1>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
          <p className="mb-3">
            このページは <code className="bg-white px-2 py-1 rounded">/routing-demo/basic/contact/page.tsx</code> にあります。
          </p>
          <p className="text-sm text-gray-700">
            URL: <code className="bg-white px-2 py-1 rounded">/routing-demo/basic/contact</code>
          </p>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">ファイル構造</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
{`app/
└── routing-demo/
    └── basic/
        ├── page.tsx
        ├── about/
        │   └── page.tsx
        └── contact/
            └── page.tsx  ← このファイル`}
          </pre>
        </div>

        <div className="space-y-3">
          <Link
            href="/routing-demo/basic"
            className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
          >
            ← Basic ページに戻る
          </Link>
          <Link
            href="/routing-demo/basic/about"
            className="block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-center"
          >
            About ページへ →
          </Link>
        </div>
      </div>
    </div>
  )
}
