import Link from 'next/link'

const photos = [
  { id: 1, title: '美しい風景', color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
  { id: 2, title: '都市の夜景', color: 'bg-gradient-to-br from-purple-400 to-purple-600' },
  { id: 3, title: '自然の絶景', color: 'bg-gradient-to-br from-green-400 to-green-600' },
  { id: 4, title: '夕暮れの海', color: 'bg-gradient-to-br from-orange-400 to-orange-600' },
  { id: 5, title: '山の景色', color: 'bg-gradient-to-br from-indigo-400 to-indigo-600' },
  { id: 6, title: '花畑', color: 'bg-gradient-to-br from-pink-400 to-pink-600' },
]

export default function PhotosPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🔄 Intercepting Routing</h1>

        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">概要</h2>
          <p className="mb-4">
            Intercepting Routingは、現在のレイアウト内で別のルートのコンテンツを読み込みます。
            モーダルやオーバーレイUIの実装によく使われます。
          </p>
          <p className="text-sm text-gray-700">
            以下の写真をクリックすると、同じページ内でモーダルが開きます。
            直接URLにアクセスすると、専用ページとして表示されます。
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">フォトギャラリー</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {photos.map((photo) => (
              <Link
                key={photo.id}
                href={`/routing-demo/intercepting/photos/${photo.id}`}
                className="block"
              >
                <div className={`${photo.color} rounded-lg aspect-square flex items-center justify-center text-white hover:scale-105 transition-transform cursor-pointer`}>
                  <div className="text-center">
                    <p className="text-4xl mb-2">🖼️</p>
                    <p className="font-semibold">{photo.title}</p>
                    <p className="text-sm opacity-80">ID: {photo.id}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">動作の違い</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-green-50 p-4 rounded">
                <p className="font-semibold mb-1">✅ 写真をクリック（ソフトナビゲーション）</p>
                <p className="text-gray-700">→ モーダルで表示（Intercepting Routingが発動）</p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <p className="font-semibold mb-1">🔗 URLを直接開く（ハードナビゲーション）</p>
                <p className="text-gray-700">→ 専用ページとして表示（通常のルーティング）</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">ファイル構造</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`app/
└── routing-demo/
    └── intercepting/
        ├── layout.tsx            ← モーダルスロットを受け取る
        ├── @modal/               ← モーダルスロット
        │   └── (.)photos/        ← 同階層のphotosをインターセプト
        │       └── [id]/
        │           └── page.tsx  ← モーダル表示
        └── photos/
            ├── page.tsx          ← このページ（ギャラリー）
            └── [id]/
                └── page.tsx      ← 写真詳細（専用ページ）`}
          </pre>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">インターセプト記法</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <code className="bg-gray-100 px-2 py-1 rounded font-mono">(.)</code>
              <span>同じ階層のセグメントをマッチ</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="bg-gray-100 px-2 py-1 rounded font-mono">(..)</code>
              <span>1つ上の階層のセグメントをマッチ</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="bg-gray-100 px-2 py-1 rounded font-mono">(..)(..)</code>
              <span>2つ上の階層のセグメントをマッチ</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="bg-gray-100 px-2 py-1 rounded font-mono">(...)</code>
              <span>ルートからのセグメントをマッチ</span>
            </div>
          </div>
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
