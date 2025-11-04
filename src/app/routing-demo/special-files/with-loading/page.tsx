import Link from 'next/link'

// 3秒待機する非同期関数
async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default async function WithLoadingPage() {
  // データ取得をシミュレート（3秒待機）
  await delay(3000)

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
          Loading のデモ
        </h1>

        <section className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <h2 className="mb-3 text-xl font-semibold text-emerald-900 dark:text-emerald-50">
            ✅ データ読み込み完了
          </h2>
          <p className="mb-2 text-emerald-900 dark:text-emerald-100">
            このページは3秒間のデータ取得をシミュレートしています。
          </p>
          <p className="text-sm text-emerald-800 dark:text-emerald-200">
            ページに遷移すると、loading.tsx で定義したローディングUIが表示され、
            データ取得が完了すると自動的にこのコンテンツに切り替わります。
          </p>
        </section>

        <section className="mb-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            読み込まれたデータ
          </h2>
          <div className="grid gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="border rounded-lg p-4 hover:bg-zinc-50 border-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800">
                <h3 className="font-semibold mb-2 text-zinc-900 dark:text-zinc-50">アイテム #{item}</h3>
                <p className="text-zinc-600 text-sm dark:text-zinc-400">
                  これはサーバーサイドで取得されたデータです。
                  loading.tsx のおかげで、ユーザーは待機中もUIを確認できます。
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            loading.tsx コード例
          </h2>
          <pre className="overflow-x-auto rounded bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-800">
{`export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-10 bg-gray-300 rounded mb-4"></div>
      <div className="space-y-3">
        <div className="h-20 bg-gray-200 rounded"></div>
        <div className="h-20 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}`}
          </pre>
        </section>

        <section className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
          <h3 className="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-50">
            💡 ポイント
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <li>loading.tsx は自動的に Suspense でラップされます</li>
            <li>非同期のpage.tsxがレンダリング中に表示されます</li>
            <li>スケルトンUIを実装することで、UXが向上します</li>
            <li>このページをリロードすると、再度ローディングUIが表示されます</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
