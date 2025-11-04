export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
        Profile ページ
      </h1>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 dark:bg-indigo-950 dark:border-indigo-700">
        <p className="mb-2 text-indigo-900 dark:text-indigo-100">
          このページは <code className="bg-white px-2 py-1 rounded dark:bg-indigo-900">/routing-demo/nested/profile/page.tsx</code> にあります。
        </p>
        <p className="text-sm text-indigo-800 dark:text-indigo-200">
          すべての子ページで同じレイアウト（layout.tsx）が適用されています。
        </p>
      </div>

      <div className="flex gap-6 mb-6">
        <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold dark:from-indigo-500 dark:to-purple-600">
          JD
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-50">John Doe</h2>
          <p className="text-zinc-600 mb-4 dark:text-zinc-400">フルスタックデベロッパー</p>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm dark:bg-indigo-900 dark:text-indigo-300">React</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm dark:bg-indigo-900 dark:text-indigo-300">Next.js</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm dark:bg-indigo-900 dark:text-indigo-300">TypeScript</span>
          </div>
        </div>
      </div>

      <div className="border border-zinc-200 rounded-lg p-6 mb-6 dark:border-zinc-700">
        <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
          プロフィール情報
        </h3>
        <div className="space-y-3">
          <div className="flex py-2 border-b border-zinc-200 dark:border-zinc-700">
            <span className="w-32 text-zinc-600 dark:text-zinc-400">ユーザー名:</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-50">johndoe</span>
          </div>
          <div className="flex py-2 border-b border-zinc-200 dark:border-zinc-700">
            <span className="w-32 text-zinc-600 dark:text-zinc-400">メール:</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-50">john.doe@example.com</span>
          </div>
          <div className="flex py-2 border-b border-zinc-200 dark:border-zinc-700">
            <span className="w-32 text-zinc-600 dark:text-zinc-400">場所:</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-50">東京, 日本</span>
          </div>
          <div className="flex py-2">
            <span className="w-32 text-zinc-600 dark:text-zinc-400">登録日:</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-50">2024年1月15日</span>
          </div>
        </div>
      </div>

      <div className="border border-zinc-200 rounded-lg p-6 dark:border-zinc-700">
        <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
          最近のアクティビティ
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 py-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full dark:bg-emerald-400"></div>
            <span className="text-zinc-700 dark:text-zinc-300">新しいプロジェクトを作成しました</span>
            <span className="text-sm text-zinc-500 ml-auto dark:text-zinc-400">2時間前</span>
          </div>
          <div className="flex items-center gap-3 py-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full dark:bg-blue-400"></div>
            <span className="text-zinc-700 dark:text-zinc-300">プロフィールを更新しました</span>
            <span className="text-sm text-zinc-500 ml-auto dark:text-zinc-400">1日前</span>
          </div>
          <div className="flex items-center gap-3 py-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full dark:bg-purple-400"></div>
            <span className="text-zinc-700 dark:text-zinc-300">新しいスキルを追加しました</span>
            <span className="text-sm text-zinc-500 ml-auto dark:text-zinc-400">3日前</span>
          </div>
        </div>
      </div>
    </div>
  )
}
