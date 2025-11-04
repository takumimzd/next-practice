export default function ParallelPage() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
      <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
        メインコンテンツ
      </h2>

      <section className="border border-zinc-200 rounded-lg p-6 mb-6 dark:border-zinc-700">
        <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
          ファイル構造
        </h3>
        <pre className="bg-zinc-900 text-zinc-100 p-4 rounded overflow-x-auto text-sm dark:bg-zinc-800">
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
      </section>

      <section className="border border-zinc-200 rounded-lg p-6 mb-6 dark:border-zinc-700">
        <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
          layout.tsx コード例
        </h3>
        <pre className="bg-zinc-900 text-zinc-100 p-4 rounded overflow-x-auto text-sm dark:bg-zinc-800">
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
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 dark:bg-blue-950 dark:border-blue-700">
        <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-50">
          スロットの命名規則
        </h3>
        <ul className="list-disc list-inside space-y-2 text-blue-900 dark:text-blue-100">
          <li><code className="bg-white px-2 py-1 rounded dark:bg-blue-900">@folder</code> の形式でスロットを定義</li>
          <li>layout.tsxでpropsとして受け取る（@を除いた名前）</li>
          <li>children はデフォルトのスロット（page.tsx）</li>
        </ul>
      </section>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 p-6 dark:bg-emerald-950 dark:border-emerald-700">
        <h3 className="text-lg font-semibold mb-3 text-emerald-900 dark:text-emerald-50">
          実際の使用例
        </h3>
        <ul className="list-disc list-inside space-y-2 text-emerald-900 dark:text-emerald-100">
          <li>ダッシュボード（メイン + サイドバー + 統計情報）</li>
          <li>SNS（フィード + おすすめユーザー + トレンド）</li>
          <li>ECサイト（商品一覧 + フィルター + 広告）</li>
          <li>モーダルとページの同時表示</li>
        </ul>
      </section>
    </div>
  )
}
