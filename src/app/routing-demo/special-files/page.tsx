import Link from 'next/link'

export default function SpecialFilesPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">⚙️ Special Files</h1>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">概要</h2>
          <p className="mb-4">
            Next.js App Routerには、特定の役割を持つ特殊なファイル名があります。
            これらを使って、ローディング状態、エラー処理、404ページなどを実装できます。
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {/* Loading */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              <code className="bg-gray-100 px-3 py-1 rounded">loading.tsx</code>
            </h2>
            <p className="text-gray-700 mb-4">
              Suspenseの自動的なfallback UI。データ取得中に表示されます。
            </p>
            <Link
              href="/routing-demo/special-files/with-loading"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 inline-block"
            >
              Loading のデモ →
            </Link>
          </div>

          {/* Error */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              <code className="bg-gray-100 px-3 py-1 rounded">error.tsx</code>
            </h2>
            <p className="text-gray-700 mb-4">
              エラーバウンダリーを自動作成。エラー発生時のUIを定義します。
            </p>
            <Link
              href="/routing-demo/special-files/with-error"
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 inline-block"
            >
              Error のデモ →
            </Link>
          </div>

          {/* Not Found */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              <code className="bg-gray-100 px-3 py-1 rounded">not-found.tsx</code>
            </h2>
            <p className="text-gray-700 mb-4">
              404エラーページ。存在しないルートにアクセスしたときに表示されます。
            </p>
            <Link
              href="/routing-demo/special-files/this-page-does-not-exist"
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 inline-block"
            >
              Not Found のデモ →
            </Link>
          </div>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">ファイル構造</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`app/
└── routing-demo/
    └── special-files/
        ├── page.tsx          ← このページ
        ├── loading.tsx       ← ローディングUI（自動適用）
        ├── error.tsx         ← エラーUI（自動適用）
        ├── not-found.tsx     ← 404ページ
        ├── with-loading/
        │   ├── page.tsx
        │   └── loading.tsx   ← このディレクトリ専用のローディング
        └── with-error/
            ├── page.tsx
            └── error.tsx     ← このディレクトリ専用のエラー処理`}
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">loading.tsx の特徴</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>Suspenseで自動的にラップされる</li>
              <li>ページのコンテンツが読み込まれるまで表示</li>
              <li>スケルトンUIの実装に最適</li>
              <li>階層ごとに異なるローディングUIを設定可能</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">error.tsx の特徴</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>Error Boundaryで自動的にラップされる</li>
              <li>クライアントコンポーネントである必要がある</li>
              <li>エラーオブジェクトとリセット関数を受け取る</li>
              <li>階層ごとに異なるエラーUIを設定可能</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">not-found.tsx の特徴</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>notFound()関数で明示的に呼び出せる</li>
              <li>存在しないルートで自動的に表示</li>
              <li>カスタム404ページを実装できる</li>
              <li>階層ごとに異なる404ページを設定可能</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">その他の特殊ファイル</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li><code className="bg-gray-100 px-1 rounded">route.ts</code> - API Route</li>
              <li><code className="bg-gray-100 px-1 rounded">default.tsx</code> - Parallel Routingのデフォルト</li>
              <li><code className="bg-gray-100 px-1 rounded">template.tsx</code> - 再マウントされるレイアウト</li>
              <li><code className="bg-gray-100 px-1 rounded">global-error.tsx</code> - ルートレベルのエラー</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <h3 className="text-lg font-semibold mb-3">💡 ベストプラクティス</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>loading.tsx: スケルトンUIを使ってコンテンツの構造を示す</li>
            <li>error.tsx: ユーザーフレンドリーなエラーメッセージと復旧手段を提供</li>
            <li>not-found.tsx: 代替リンクやサイトマップを提供して、ユーザーを誘導</li>
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
