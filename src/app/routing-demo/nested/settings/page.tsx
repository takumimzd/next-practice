export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
        Settings ページ
      </h1>

      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6 dark:bg-purple-950 dark:border-purple-700">
        <p className="mb-2 text-purple-900 dark:text-purple-100">
          このページは <code className="bg-white px-2 py-1 rounded dark:bg-purple-900">/routing-demo/nested/settings/page.tsx</code> にあります。
        </p>
        <p className="text-sm text-purple-800 dark:text-purple-200">
          ページ間を移動しても、親のレイアウトは再レンダリングされません。
        </p>
      </div>

      <div className="space-y-6">
        <div className="border border-zinc-200 rounded-lg p-6 dark:border-zinc-700">
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
            アカウント設定
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-700">
              <span className="text-zinc-700 dark:text-zinc-300">メール通知</span>
              <div className="w-12 h-6 bg-zinc-300 rounded-full dark:bg-zinc-600"></div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-700">
              <span className="text-zinc-700 dark:text-zinc-300">プッシュ通知</span>
              <div className="w-12 h-6 bg-blue-600 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-zinc-700 dark:text-zinc-300">ニュースレター</span>
              <div className="w-12 h-6 bg-zinc-300 rounded-full dark:bg-zinc-600"></div>
            </div>
          </div>
        </div>

        <div className="border border-zinc-200 rounded-lg p-6 dark:border-zinc-700">
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
            プライバシー設定
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-700">
              <span className="text-zinc-700 dark:text-zinc-300">プロフィールを公開</span>
              <div className="w-12 h-6 bg-blue-600 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-zinc-700 dark:text-zinc-300">アクティビティを表示</span>
              <div className="w-12 h-6 bg-zinc-300 rounded-full dark:bg-zinc-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
