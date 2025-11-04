'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function WithErrorPage() {
  const [shouldThrow, setShouldThrow] = useState(false)

  if (shouldThrow) {
    throw new Error('これは意図的に発生させたエラーです（error.tsx のテスト用）')
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Error のデモ</h1>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">エラーハンドリングのテスト</h2>
          <p className="mb-2">
            ボタンをクリックすると、意図的にエラーを発生させます。
          </p>
          <p className="text-sm text-gray-700">
            エラーが発生すると、error.tsx で定義したエラーUIが自動的に表示されます。
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">エラーを発生させる</h2>
          <p className="text-gray-700 mb-6">
            下のボタンをクリックすると、コンポーネント内でエラーがスローされます。
            すると、最も近い error.tsx で定義されたエラーバウンダリがキャッチします。
          </p>

          <button
            onClick={() => setShouldThrow(true)}
            className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 font-semibold"
          >
            ⚠️ エラーを発生させる
          </button>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">error.tsx コード例</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h1>エラーが発生しました</h1>
      <p>{error.message}</p>
      <button onClick={reset}>
        もう一度試す
      </button>
    </div>
  )
}`}
          </pre>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
          <h3 className="text-lg font-semibold mb-3">💡 重要なポイント</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>error.tsx は必ずクライアントコンポーネント（'use client'）にする</li>
            <li>error プロパティでエラー情報を受け取る</li>
            <li>reset() 関数で、エラーからの復帰を試みることができる</li>
            <li>最も近い親の error.tsx がエラーをキャッチする（階層的）</li>
            <li>サーバーコンポーネントのエラーもキャッチできる</li>
          </ul>
        </div>

        <Link
          href="/routing-demo/special-files"
          className="text-blue-600 hover:underline"
        >
          ← Special Files ページに戻る
        </Link>
      </div>
    </div>
  )
}
