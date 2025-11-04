export default function NestedPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
        📦 Nested Routing
      </h1>

      <section className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8 dark:bg-emerald-950 dark:border-emerald-700">
        <h2 className="text-xl font-semibold mb-3 text-emerald-900 dark:text-emerald-50">
          概要
        </h2>
        <p className="mb-4 text-emerald-900 dark:text-emerald-100">
          Nested Routingは、親子関係のあるページ構成で、共通のレイアウトを共有します。
          上部のナビゲーションバーと背景色は、このディレクトリ内の全ページで共有されています。
        </p>
        <p className="text-sm text-emerald-800 dark:text-emerald-200">
          このページは <code className="bg-white px-2 py-1 rounded dark:bg-emerald-900">/routing-demo/nested/page.tsx</code> にあります。
        </p>
      </section>

      <section className="border border-zinc-200 rounded-lg p-6 mb-8 dark:border-zinc-700">
        <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
          ファイル構造
        </h2>
        <pre className="bg-zinc-900 text-zinc-100 p-4 rounded overflow-x-auto dark:bg-zinc-800">
{`app/
└── routing-demo/
    └── nested/
        ├── layout.tsx     ← 共通レイアウト（ナビゲーションなど）
        ├── page.tsx       ← このページ
        ├── dashboard/
        │   └── page.tsx
        ├── settings/
        │   └── page.tsx
        └── profile/
            └── page.tsx`}
        </pre>
      </section>

      <section className="border border-zinc-200 rounded-lg p-6 mb-8 dark:border-zinc-700">
        <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
          レイアウトの特徴
        </h2>
        <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>ページ遷移時もレイアウトは再レンダリングされず、状態が保持される</li>
          <li>子ページのコンテンツのみが切り替わる</li>
          <li>ネストされたレイアウトは複数の階層で定義できる</li>
          <li>パフォーマンスが向上し、スムーズな遷移が実現できる</li>
        </ul>
      </section>

      <section className="border border-zinc-200 rounded-lg p-6 mb-8 dark:border-zinc-700">
        <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
          試してみよう
        </h2>
        <p className="mb-4 text-zinc-700 dark:text-zinc-300">
          上部のナビゲーションバーを使って、他のページに移動してみてください。
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          ナビゲーションバーと背景が維持されたまま、コンテンツ部分だけが切り替わることを確認できます。
        </p>
      </section>

      <section className="border border-zinc-200 rounded-lg p-6 dark:border-zinc-700">
        <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
          layout.tsx コード例
        </h2>
        <pre className="bg-zinc-900 text-zinc-100 p-4 rounded overflow-x-auto text-sm dark:bg-zinc-800">
{`export default function NestedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* 共通のナビゲーション */}
      <nav>...</nav>

      {/* 子ページのコンテンツ */}
      {children}
    </div>
  )
}`}
        </pre>
      </section>
    </div>
  )
}
