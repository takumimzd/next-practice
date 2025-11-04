import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen p-8 bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-8xl mb-4">🔍</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">ページが見つかりません</h2>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 text-left">
          <p className="text-sm text-gray-700 mb-2">
            このページは <code className="bg-white px-2 py-1 rounded">not-found.tsx</code> で処理されています。
          </p>
          <p className="text-sm text-gray-700">
            存在しないパスにアクセスしたとき、または notFound() 関数が呼ばれたときに表示されます。
          </p>
        </div>

        <p className="text-gray-600 mb-6">
          お探しのページは存在しないか、移動した可能性があります。
        </p>

        <div className="space-y-3">
          <Link
            href="/routing-demo/special-files"
            className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Special Files ページに戻る
          </Link>
          <Link
            href="/routing-demo"
            className="block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            ルーティングデモ一覧に戻る
          </Link>
          <Link
            href="/"
            className="block text-blue-600 hover:underline"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
