import Link from 'next/link'

export default function NestedPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📦 Nested Routing</h1>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3">概要</h2>
        <p className="mb-4">
          Nested Routingは、親子関係のあるページ構成で、共通のレイアウトを共有します。
          上部のナビゲーションバーと背景色は、このディレクトリ内の全ページで共有されています。
        </p>
        <p className="text-sm text-gray-700">
          このページは <code className="bg-white px-2 py-1 rounded">/routing-demo/nested/page.tsx</code> にあります。
        </p>
      </div>

      <div className="border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">ファイル構造</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
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
      </div>

      <div className="border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">レイアウトの特徴</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>ページ遷移時もレイアウトは再レンダリングされず、状態が保持される</li>
          <li>子ページのコンテンツのみが切り替わる</li>
          <li>ネストされたレイアウトは複数の階層で定義できる</li>
          <li>パフォーマンスが向上し、スムーズな遷移が実現できる</li>
        </ul>
      </div>

      <div className="border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">試してみよう</h2>
        <p className="mb-4">上部のナビゲーションバーを使って、他のページに移動してみてください。</p>
        <p className="text-sm text-gray-600">
          ナビゲーションバーと背景が維持されたまま、コンテンツ部分だけが切り替わることを確認できます。
        </p>
      </div>

      <div className="border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">layout.tsx コード例</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
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
      </div>

      <Link
        href="/routing-demo"
        className="text-blue-600 hover:underline"
      >
        ← ルーティングデモ一覧に戻る
      </Link>
    </div>
  )
}
