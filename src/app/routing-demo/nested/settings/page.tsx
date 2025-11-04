export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings ページ</h1>

      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
        <p className="mb-2">
          このページは <code className="bg-white px-2 py-1 rounded">/routing-demo/nested/settings/page.tsx</code> にあります。
        </p>
        <p className="text-sm text-gray-700">
          ページ間を移動しても、親のレイアウトは再レンダリングされません。
        </p>
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">アカウント設定</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b">
              <span className="text-gray-700">メール通知</span>
              <div className="w-12 h-6 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <span className="text-gray-700">プッシュ通知</span>
              <div className="w-12 h-6 bg-blue-600 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-700">ニュースレター</span>
              <div className="w-12 h-6 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">プライバシー設定</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b">
              <span className="text-gray-700">プロフィールを公開</span>
              <div className="w-12 h-6 bg-blue-600 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-700">アクティビティを表示</span>
              <div className="w-12 h-6 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
