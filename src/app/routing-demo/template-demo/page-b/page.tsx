import Link from 'next/link'

export default function PageB() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Page B</h1>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <p className="mb-2">
          このページは <code className="bg-white px-2 py-1 rounded">/template-demo/page-b/page.tsx</code> です。
        </p>
        <p className="text-sm text-gray-700">
          このページに遷移したとき、template.tsx が再度マウントされました。
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">ブラウザの開発者ツールを確認</h2>
        <p className="text-gray-700 mb-4">
          ブラウザの開発者ツール（F12キー）のコンソールを開いてみてください。
          ページ遷移のたびに「Template mounted at: ...」というログが出力されています。
        </p>
        <div className="bg-gray-50 border rounded p-4 text-sm font-mono">
          <div className="text-green-600">Console:</div>
          <div className="text-gray-700 mt-1">Template mounted at: 14:23:45</div>
          <div className="text-gray-700">Template mounted at: 14:23:52</div>
          <div className="text-gray-700">Template mounted at: 14:23:58</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">他のページへ移動</h2>
        <div className="grid gap-3">
          <Link
            href="/routing-demo/template-demo"
            className="block px-4 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 text-center"
          >
            メインページへ
          </Link>
          <Link
            href="/routing-demo/template-demo/page-a"
            className="block px-4 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 text-center"
          >
            Page A へ
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-3">🎨 Page B のコンテンツ</h3>
        <p className="mb-4">
          layout.tsx との違いを体感してみましょう。
          Nested Routing のデモと比較してみてください。
        </p>
        <div className="bg-white bg-opacity-20 rounded p-4">
          <p className="text-sm mb-3">
            <strong>layout.tsx:</strong> 状態が保持され、再マウントされない
          </p>
          <p className="text-sm">
            <strong>template.tsx:</strong> 毎回新しいインスタンスが作成される
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
        <h3 className="font-semibold mb-2">💡 実践的な使用例</h3>
        <div className="space-y-3 text-sm text-gray-700">
          <div>
            <p className="font-semibold">1. ページビュートラッキング</p>
            <p className="text-xs text-gray-600">
              useEffect でページ遷移を検知してアナリティクスに送信
            </p>
          </div>
          <div>
            <p className="font-semibold">2. フォームのリセット</p>
            <p className="text-xs text-gray-600">
              ページ遷移のたびにフォームの状態を初期化
            </p>
          </div>
          <div>
            <p className="font-semibold">3. アニメーションの実装</p>
            <p className="text-xs text-gray-600">
              ページ遷移時の enter/exit アニメーションを制御
            </p>
          </div>
        </div>
      </div>

      <Link
        href="/routing-demo/template-demo"
        className="text-blue-600 hover:underline"
      >
        ← メインページに戻る
      </Link>
    </div>
  )
}
