'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const photos = [
  { id: 1, title: '美しい風景', description: '青空と緑の大地が広がる絶景', color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
  { id: 2, title: '都市の夜景', description: 'キラキラと輝く高層ビル群', color: 'bg-gradient-to-br from-purple-400 to-purple-600' },
  { id: 3, title: '自然の絶景', description: '手つかずの大自然の美しさ', color: 'bg-gradient-to-br from-green-400 to-green-600' },
  { id: 4, title: '夕暮れの海', description: '水平線に沈む夕日', color: 'bg-gradient-to-br from-orange-400 to-orange-600' },
  { id: 5, title: '山の景色', description: '雄大な山々の連なり', color: 'bg-gradient-to-br from-indigo-400 to-indigo-600' },
  { id: 6, title: '花畑', description: '色とりどりの花が咲き誇る', color: 'bg-gradient-to-br from-pink-400 to-pink-600' },
]

interface PhotoModalProps {
  params: Promise<{
    id: string
  }>
}

export default function PhotoModal({ params }: PhotoModalProps) {
  const router = useRouter()
  const [id, setId] = useState<string>('')

  useEffect(() => {
    params.then(p => setId(p.id))
  }, [params])

  if (!id) return null

  const photo = photos.find(p => p.id === parseInt(id))

  if (!photo) {
    return null
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={() => router.back()}
    >
      <div
        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{photo.title}</h2>
          <button
            onClick={() => router.back()}
            className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <h3 className="font-semibold mb-2">✨ モーダル表示中</h3>
            <p className="text-sm text-gray-700">
              このモーダルは <code className="bg-white px-2 py-1 rounded">@modal/(.)photos/[id]/page.tsx</code> から読み込まれています。
            </p>
            <p className="text-sm text-gray-700 mt-2">
              Intercepting Routingにより、ギャラリーからの遷移をインターセプトしてモーダルで表示しています。
            </p>
          </div>

          <div className={`${photo.color} rounded-lg aspect-video flex items-center justify-center text-white mb-6`}>
            <div className="text-center">
              <p className="text-7xl mb-3">🖼️</p>
              <p className="text-2xl font-bold">{photo.title}</p>
              <p className="text-lg opacity-80">ID: {photo.id}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">詳細情報</h3>
            <p className="text-gray-700 mb-4">{photo.description}</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-600">Photo ID</p>
                <p className="font-semibold">{photo.id}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-600">Category</p>
                <p className="font-semibold">自然・風景</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-semibold mb-2">💡 試してみよう</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>このモーダルを閉じて、別の写真をクリックしてみてください</li>
              <li>
                URLを新しいタブで開くと、専用ページとして表示されます:<br/>
                <code className="bg-white px-2 py-1 rounded text-xs">/routing-demo/intercepting/photos/{photo.id}</code>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
