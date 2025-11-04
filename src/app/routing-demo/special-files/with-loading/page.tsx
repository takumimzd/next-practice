import Link from 'next/link'

// 3秒待機する非同期関数
async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default async function WithLoadingPage() {
  // データ取得をシミュレート（3秒待機）
  await delay(3000)

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Loading のデモ</h1>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">✅ データ読み込み完了</h2>
          <p className="mb-2">
            このページは3秒間のデータ取得をシミュレートしています。
          </p>
          <p className="text-sm text-gray-700">
            ページに遷移すると、loading.tsx で定義したローディングUIが表示され、
            データ取得が完了すると自動的にこのコンテンツに切り替わります。
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">読み込まれたデータ</h2>
          <div className="grid gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="border rounded-lg p-4 hover:bg-gray-50">
                <h3 className="font-semibold mb-2">アイテム #{item}</h3>
                <p className="text-gray-600 text-sm">
                  これはサーバーサイドで取得されたデータです。
                  loading.tsx のおかげで、ユーザーは待機中もUIを確認できます。
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">loading.tsx コード例</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
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
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="text-lg font-semibold mb-3">💡 ポイント</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>loading.tsx は自動的に Suspense でラップされます</li>
            <li>非同期のpage.tsxがレンダリング中に表示されます</li>
            <li>スケルトンUIを実装することで、UXが向上します</li>
            <li>このページをリロードすると、再度ローディングUIが表示されます</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            ページをリロード（ローディングを再表示）
          </button>
          <Link
            href="/routing-demo/special-files"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            ← 戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
