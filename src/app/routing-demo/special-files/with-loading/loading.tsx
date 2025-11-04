export default function Loading() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block animate-spin text-6xl mb-4">⏳</div>
          <h2 className="text-2xl font-bold text-gray-700">データを読み込んでいます...</h2>
          <p className="text-gray-500 mt-2">このUIは loading.tsx で定義されています</p>
        </div>

        <div className="animate-pulse space-y-4">
          <div className="h-12 bg-gray-300 rounded w-1/3"></div>
          <div className="h-40 bg-gray-200 rounded"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
