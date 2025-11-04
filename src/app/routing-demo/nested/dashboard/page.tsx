export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard ページ</h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
        <p className="mb-2">
          このページは <code className="bg-white px-2 py-1 rounded">/routing-demo/nested/dashboard/page.tsx</code> にあります。
        </p>
        <p className="text-sm text-gray-700">
          親のレイアウト（ナビゲーションバー）が共有されていることに注目してください。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">総訪問者数</h3>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">アクティブユーザー</h3>
          <p className="text-3xl font-bold">456</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">新規登録</h3>
          <p className="text-3xl font-bold">89</p>
        </div>
      </div>

      <p className="text-gray-600">
        ダッシュボードのデモコンテンツです。上部のナビゲーションからSettings や Profile に移動してみてください。
      </p>
    </div>
  )
}
