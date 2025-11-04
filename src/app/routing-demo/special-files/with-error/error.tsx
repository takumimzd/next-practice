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
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <div className="text-8xl mb-4">💥</div>
          <h1 className="text-3xl font-bold text-red-600 mb-3">エラーが発生しました</h1>
          <p className="text-gray-600">
            このUIは <code className="bg-gray-100 px-2 py-1 rounded">error.tsx</code> で定義されています
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-2">エラー詳細:</h2>
          <p className="text-sm text-red-700 font-mono break-all">
            {error.message || 'Unknown error occurred'}
          </p>
          {error.digest && (
            <p className="text-xs text-red-600 mt-3">
              エラーID: {error.digest}
            </p>
          )}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="font-semibold mb-2">💡 エラーハンドリングの仕組み</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>error.tsx は Error Boundary として機能します</li>
            <li>子コンポーネントで発生したエラーをキャッチします</li>
            <li>reset() 関数で、セグメントの再レンダリングを試みます</li>
            <li>プロダクション環境では、エラーの詳細は隠されるべきです</li>
          </ul>
        </div>

        <div className="flex gap-3">
          <button
            onClick={reset}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
          >
            🔄 もう一度試す
          </button>
          <a
            href="/routing-demo/special-files"
            className="flex-1 px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 font-semibold text-center"
          >
            ← 戻る
          </a>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          リセットボタンをクリックすると、エラーが発生したコンポーネントが再レンダリングされます
        </p>
      </div>
    </div>
  )
}
