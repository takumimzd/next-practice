export default function ParallelLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">⚡ Parallel Routing</h1>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">概要</h2>
          <p className="mb-2">
            Parallel Routingは、同じレイアウト内で複数のページを同時にレンダリングします。
          </p>
          <p className="text-sm text-gray-700">
            このページでは、メインコンテンツ、Analytics、Teamの3つのスロットが並列で表示されています。
          </p>
        </div>

        {/* メインコンテンツ */}
        <div className="mb-6">
          {children}
        </div>

        {/* 並列スロット */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2">📊</span> Analytics スロット
            </h3>
            {analytics}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2">👥</span> Team スロット
            </h3>
            {team}
          </div>
        </div>
      </div>
    </div>
  )
}
