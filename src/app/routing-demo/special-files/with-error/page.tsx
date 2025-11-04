'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function WithErrorPage() {
  const [shouldThrow, setShouldThrow] = useState(false)

  if (shouldThrow) {
    throw new Error('これは意図的に発生させたエラーです（error.tsx のテスト用）')
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/routing-demo/special-files"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Special Files
        </Link>

        <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Error のデモ
        </h1>

        <section className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
          <h2 className="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-50">
            エラーハンドリングのテスト
          </h2>
          <p className="mb-2 text-blue-900 dark:text-blue-100">
            ボタンをクリックすると、意図的にエラーを発生させます。
          </p>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            エラーが発生すると、error.tsx で定義したエラーUIが自動的に表示されます。
          </p>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            エラーを発生させる
          </h2>
          <p className="mb-6 text-zinc-700 dark:text-zinc-300">
            下のボタンをクリックすると、コンポーネント内でエラーがスローされます。
            すると、最も近い error.tsx で定義されたエラーバウンダリがキャッチします。
          </p>

          <button
            onClick={() => setShouldThrow(true)}
            className="rounded bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600"
          >
            ⚠️ エラーを発生させる
          </button>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            error.tsx コード例
          </h2>
          <pre className="overflow-x-auto rounded bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-800">
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
        </section>

        <section className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
          <h3 className="mb-3 text-lg font-semibold text-amber-900 dark:text-amber-50">
            💡 重要なポイント
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-amber-800 dark:text-amber-200">
            <li>error.tsx は必ずクライアントコンポーネント（'use client'）にする</li>
            <li>error プロパティでエラー情報を受け取る</li>
            <li>reset() 関数で、エラーからの復帰を試みることができる</li>
            <li>最も近い親の error.tsx がエラーをキャッチする（階層的）</li>
            <li>サーバーコンポーネントのエラーもキャッチできる</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
