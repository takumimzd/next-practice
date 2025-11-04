export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile ページ</h1>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6">
        <p className="mb-2">
          このページは <code className="bg-white px-2 py-1 rounded">/routing-demo/nested/profile/page.tsx</code> にあります。
        </p>
        <p className="text-sm text-gray-700">
          すべての子ページで同じレイアウト（layout.tsx）が適用されています。
        </p>
      </div>

      <div className="flex gap-6 mb-6">
        <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
          JD
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">John Doe</h2>
          <p className="text-gray-600 mb-4">フルスタックデベロッパー</p>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Next.js</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">TypeScript</span>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">プロフィール情報</h3>
        <div className="space-y-3">
          <div className="flex py-2 border-b">
            <span className="w-32 text-gray-600">ユーザー名:</span>
            <span className="font-medium">johndoe</span>
          </div>
          <div className="flex py-2 border-b">
            <span className="w-32 text-gray-600">メール:</span>
            <span className="font-medium">john.doe@example.com</span>
          </div>
          <div className="flex py-2 border-b">
            <span className="w-32 text-gray-600">場所:</span>
            <span className="font-medium">東京, 日本</span>
          </div>
          <div className="flex py-2">
            <span className="w-32 text-gray-600">登録日:</span>
            <span className="font-medium">2024年1月15日</span>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">最近のアクティビティ</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 py-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">新しいプロジェクトを作成しました</span>
            <span className="text-sm text-gray-500 ml-auto">2時間前</span>
          </div>
          <div className="flex items-center gap-3 py-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700">プロフィールを更新しました</span>
            <span className="text-sm text-gray-500 ml-auto">1日前</span>
          </div>
          <div className="flex items-center gap-3 py-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-gray-700">新しいスキルを追加しました</span>
            <span className="text-sm text-gray-500 ml-auto">3日前</span>
          </div>
        </div>
      </div>
    </div>
  )
}
