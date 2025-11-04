export default function AnalyticsPage() {
  return (
    <div>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-blue-50 rounded dark:bg-blue-950">
          <div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">ページビュー</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">12,345</p>
          </div>
          <div className="text-3xl">👁️</div>
        </div>

        <div className="flex items-center justify-between p-4 bg-emerald-50 rounded dark:bg-emerald-950">
          <div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">訪問者数</p>
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">8,901</p>
          </div>
          <div className="text-3xl">🚀</div>
        </div>

        <div className="flex items-center justify-between p-4 bg-purple-50 rounded dark:bg-purple-950">
          <div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">コンバージョン率</p>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">4.2%</p>
          </div>
          <div className="text-3xl">📈</div>
        </div>

        <div className="flex items-center justify-between p-4 bg-orange-50 rounded dark:bg-orange-950">
          <div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">直帰率</p>
            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">32%</p>
          </div>
          <div className="text-3xl">📉</div>
        </div>
      </div>

      <p className="text-xs text-zinc-500 mt-4 dark:text-zinc-400">
        このコンテンツは @analytics/page.tsx から読み込まれています
      </p>
    </div>
  )
}
