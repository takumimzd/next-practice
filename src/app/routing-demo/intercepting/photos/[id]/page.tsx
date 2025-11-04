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
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <Link
              href="/routing-demo/intercepting/photos"
              className="text-blue-600 hover:underline"
            >
              ← ギャラリーに戻る
            </Link>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h2 className="text-lg font-semibold mb-2">📄 専用ページとして表示中</h2>
            <p className="text-sm text-gray-700">
              このページは <code className="bg-white px-2 py-1 rounded">/photos/{id}/page.tsx</code> から読み込まれています。
            </p>
            <p className="text-sm text-gray-700 mt-2">
              ギャラリーから遷移した場合はモーダルで表示されますが、URLを直接開いた場合はこの専用ページが表示されます。
            </p>
          </div>

          <h1 className="text-3xl font-bold mb-4">{photo.title}</h1>

          <div className={`${photo.color} rounded-lg aspect-video flex items-center justify-center text-white mb-6`}>
            <div className="text-center">
              <p className="text-8xl mb-4">🖼️</p>
              <p className="text-2xl font-bold">{photo.title}</p>
              <p className="text-lg opacity-80">ID: {photo.id}</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">詳細情報</h2>
            <p className="text-gray-700 mb-4">{photo.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-600">Photo ID</p>
                <p className="font-semibold">{photo.id}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-600">Category</p>
                <p className="font-semibold">自然・風景</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-600">Date</p>
                <p className="font-semibold">2024-01-15</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-600">Resolution</p>
                <p className="font-semibold">1920x1080</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="font-semibold mb-2">💡 ポイント</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>この専用ページは、URLを直接開いたときに表示されます</li>
              <li>ギャラリーからクリックした場合は、モーダルでインターセプトされます</li>
              <li>これにより、同じコンテンツを2つの異なる方法で表示できます</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
