export default function ParallelPage() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">メインコンテンツ</h2>

      <div className="border rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">ファイル構造</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`app/
└── routing-demo/
    └── parallel/
        ├── layout.tsx        ← レイアウト（スロットを受け取る）
        ├── page.tsx          ← このページ（メインコンテンツ）
        ├── @analytics/       ← analyticsスロット
        │   ├── page.tsx
        │   └── default.tsx
        └── @team/            ← teamスロット
            ├── page.tsx
            └── default.tsx`}
        </pre>
      </div>

      <div className="border rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">layout.tsx コード例</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`export default function ParallelLayout({
  children,
  analytics,  // @analytics スロット
  team,       // @team スロット
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <div>
      {/* メインコンテンツ */}
      {children}

      {/* 並列スロット */}
      <div className="grid grid-cols-2 gap-4">
        <div>{analytics}</div>
        <div>{team}</div>
      </div>
    </div>
  )
}`}
        </pre>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
        <h3 className="text-lg font-semibold mb-3">スロットの命名規則</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><code className="bg-white px-2 py-1 rounded">@folder</code> の形式でスロットを定義</li>
          <li>layout.tsxでpropsとして受け取る（@を除いた名前）</li>
          <li>children はデフォルトのスロット（page.tsx）</li>
        </ul>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-6">
        <h3 className="text-lg font-semibold mb-3">実際の使用例</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>ダッシュボード（メイン + サイドバー + 統計情報）</li>
          <li>SNS（フィード + おすすめユーザー + トレンド）</li>
          <li>ECサイト（商品一覧 + フィルター + 広告）</li>
          <li>モーダルとページの同時表示</li>
        </ul>
      </div>
    </div>
  )
}
