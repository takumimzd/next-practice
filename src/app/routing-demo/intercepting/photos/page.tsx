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
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/routing-demo"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Routing Demo
        </Link>

        <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          🔄 Intercepting Routing
        </h1>

        <section className="mb-8 rounded-lg border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-900 dark:bg-indigo-950">
          <h2 className="mb-3 text-xl font-semibold text-indigo-900 dark:text-indigo-50">
            概要
          </h2>
          <p className="mb-4 text-indigo-900 dark:text-indigo-100">
            Intercepting Routingは、現在のレイアウト内で別のルートのコンテンツを読み込みます。
            モーダルやオーバーレイUIの実装によく使われます。
          </p>
          <p className="text-sm text-indigo-800 dark:text-indigo-200">
            以下の写真をクリックすると、同じページ内でモーダルが開きます。
            直接URLにアクセスすると、専用ページとして表示されます。
          </p>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            フォトギャラリー
          </h2>

          <div className="mb-8 grid grid-cols-2 md:grid-cols-3 gap-4">
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

          <div className="border-t border-zinc-200 pt-6 dark:border-zinc-700">
            <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              動作の違い
            </h3>
            <div className="space-y-3 text-sm">
              <div className="rounded bg-emerald-50 p-4 dark:bg-emerald-950">
                <p className="mb-1 font-semibold text-emerald-900 dark:text-emerald-100">
                  ✅ 写真をクリック（ソフトナビゲーション）
                </p>
                <p className="text-emerald-800 dark:text-emerald-200">
                  → モーダルで表示（Intercepting Routingが発動）
                </p>
              </div>
              <div className="rounded bg-blue-50 p-4 dark:bg-blue-950">
                <p className="mb-1 font-semibold text-blue-900 dark:text-blue-100">
                  🔗 URLを直接開く（ハードナビゲーション）
                </p>
                <p className="text-blue-800 dark:text-blue-200">
                  → 専用ページとして表示（通常のルーティング）
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            ファイル構造
          </h2>
          <pre className="overflow-x-auto rounded bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-800">
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
        </section>

        <section className="rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
          <h2 className="mb-4 text-xl font-semibold text-amber-900 dark:text-amber-50">
            インターセプト記法
          </h2>
          <div className="space-y-3 text-sm text-amber-900 dark:text-amber-100">
            <div className="flex items-start gap-3">
              <code className="rounded bg-white px-2 py-1 font-mono dark:bg-amber-900">(.)</code>
              <span>同じ階層のセグメントをマッチ</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="rounded bg-white px-2 py-1 font-mono dark:bg-amber-900">(..)</code>
              <span>1つ上の階層のセグメントをマッチ</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="rounded bg-white px-2 py-1 font-mono dark:bg-amber-900">(..)(..)</code>
              <span>2つ上の階層のセグメントをマッチ</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="rounded bg-white px-2 py-1 font-mono dark:bg-amber-900">(...)</code>
              <span>ルートからのセグメントをマッチ</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
