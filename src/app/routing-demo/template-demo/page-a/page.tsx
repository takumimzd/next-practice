import Link from 'next/link'

export default function PageA() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Page A</h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <p className="mb-2">
          このページは <code className="bg-white px-2 py-1 rounded">/template-demo/page-a/page.tsx</code> です。
        </p>
        <p className="text-sm text-gray-700">
          このページに遷移したとき、template.tsx が再マウントされ、
          上部のマウント時刻が更新されました。
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">再マウントの確認</h2>
        <p className="text-gray-700 mb-4">
          ページ上部のヘッダーを見てください。「マウント時刻」が、
          あなたがこのページに遷移した時刻になっているはずです。
        </p>
        <p className="text-sm text-gray-600">
          これは、template.tsx の useEffect が再実行された証拠です。
        </p>
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
            href="/routing-demo/template-demo/page-b"
            className="block px-4 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 text-center"
          >
            Page B へ
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-3">🎨 Page A のコンテンツ</h3>
        <p className="mb-4">
          各ページは独自のコンテンツを持っていますが、
          template.tsx で定義された共通のラッパーに包まれています。
        </p>
        <div className="bg-white bg-opacity-20 rounded p-4">
          <p className="text-sm">
            template.tsx は、ページごとに新しいインスタンスが作成されるため、
            ページ遷移アニメーションやページビュートラッキングに最適です。
          </p>
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
