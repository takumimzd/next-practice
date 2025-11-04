'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen p-8 bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-red-600 mb-2">エラーが発生しました</h1>
          <p className="text-gray-600">
            このページは error.tsx で処理されています
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded p-4 mb-6">
          <p className="text-sm text-red-800 font-mono break-all">
            {error.message || 'Unknown error'}
          </p>
          {error.digest && (
            <p className="text-xs text-red-600 mt-2">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <button
          onClick={reset}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-3"
        >
          もう一度試す
        </button>

        <a
          href="/routing-demo/special-files"
          className="block text-center text-blue-600 hover:underline"
        >
          ← Special Files ページに戻る
        </a>
      </div>
    </div>
  )
}
