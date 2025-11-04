export default function AnalyticsPage() {
  return (
    <div>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-blue-50 rounded">
          <div>
            <p className="text-sm text-gray-600">ページビュー</p>
            <p className="text-2xl font-bold text-blue-600">12,345</p>
          </div>
          <div className="text-3xl">👁️</div>
        </div>

        <div className="flex items-center justify-between p-4 bg-green-50 rounded">
          <div>
            <p className="text-sm text-gray-600">訪問者数</p>
            <p className="text-2xl font-bold text-green-600">8,901</p>
          </div>
          <div className="text-3xl">🚀</div>
        </div>

        <div className="flex items-center justify-between p-4 bg-purple-50 rounded">
          <div>
            <p className="text-sm text-gray-600">コンバージョン率</p>
            <p className="text-2xl font-bold text-purple-600">4.2%</p>
          </div>
          <div className="text-3xl">📈</div>
        </div>

        <div className="flex items-center justify-between p-4 bg-orange-50 rounded">
          <div>
            <p className="text-sm text-gray-600">直帰率</p>
            <p className="text-2xl font-bold text-orange-600">32%</p>
          </div>
          <div className="text-3xl">📉</div>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        このコンテンツは @analytics/page.tsx から読み込まれています
      </p>
    </div>
  )
}
