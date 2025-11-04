import Link from 'next/link'

const photos = [
  { id: 1, title: '美しい風景', description: '青空と緑の大地が広がる絶景', color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
  { id: 2, title: '都市の夜景', description: 'キラキラと輝く高層ビル群', color: 'bg-gradient-to-br from-purple-400 to-purple-600' },
  { id: 3, title: '自然の絶景', description: '手つかずの大自然の美しさ', color: 'bg-gradient-to-br from-green-400 to-green-600' },
  { id: 4, title: '夕暮れの海', description: '水平線に沈む夕日', color: 'bg-gradient-to-br from-orange-400 to-orange-600' },
  { id: 5, title: '山の景色', description: '雄大な山々の連なり', color: 'bg-gradient-to-br from-indigo-400 to-indigo-600' },
  { id: 6, title: '花畑', description: '色とりどりの花が咲き誇る', color: 'bg-gradient-to-br from-pink-400 to-pink-600' },
]

interface PhotoDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function PhotoDetailPage({ params }: PhotoDetailPageProps) {
  const { id } = await params
  const photo = photos.find(p => p.id === parseInt(id))

  if (!photo) {
    return <div>Photo not found</div>
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-lg border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mb-6">
            <Link
              href="/routing-demo/intercepting/photos"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              ← ギャラリーに戻る
            </Link>
          </div>

          <section className="mb-6 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6 dark:border-amber-700 dark:bg-amber-950">
            <h2 className="mb-2 text-lg font-semibold text-amber-900 dark:text-amber-50">
              📄 専用ページとして表示中
            </h2>
            <p className="mb-2 text-sm text-amber-800 dark:text-amber-200">
              このページは <code className="rounded bg-white px-2 py-1 dark:bg-amber-900">/photos/{id}/page.tsx</code> から読み込まれています。
            </p>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              ギャラリーから遷移した場合はモーダルで表示されますが、URLを直接開いた場合はこの専用ページが表示されます。
            </p>
          </section>

          <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            {photo.title}
          </h1>

          <div className={`${photo.color} rounded-lg aspect-video flex items-center justify-center text-white mb-6`}>
            <div className="text-center">
              <p className="text-8xl mb-4">🖼️</p>
              <p className="text-2xl font-bold">{photo.title}</p>
              <p className="text-lg opacity-80">ID: {photo.id}</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              詳細情報
            </h2>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300">{photo.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded bg-zinc-100 p-3 dark:bg-zinc-800">
                <p className="text-zinc-600 dark:text-zinc-400">Photo ID</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">{photo.id}</p>
              </div>
              <div className="rounded bg-zinc-100 p-3 dark:bg-zinc-800">
                <p className="text-zinc-600 dark:text-zinc-400">Category</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">自然・風景</p>
              </div>
              <div className="rounded bg-zinc-100 p-3 dark:bg-zinc-800">
                <p className="text-zinc-600 dark:text-zinc-400">Date</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">2024-01-15</p>
              </div>
              <div className="rounded bg-zinc-100 p-3 dark:bg-zinc-800">
                <p className="text-zinc-600 dark:text-zinc-400">Resolution</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">1920x1080</p>
              </div>
            </div>
          </div>

          <section className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:border-blue-700 dark:bg-blue-950">
            <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-50">
              💡 ポイント
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-blue-200">
              <li>この専用ページは、URLを直接開いたときに表示されます</li>
              <li>ギャラリーからクリックした場合は、モーダルでインターセプトされます</li>
              <li>これにより、同じコンテンツを2つの異なる方法で表示できます</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
