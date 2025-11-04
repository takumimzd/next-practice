import Link from 'next/link'

export default function TemplateDemoPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📋 Template のデモ</h1>

      <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3">概要</h2>
        <p className="mb-4">
          template.tsx は layout.tsx と似ていますが、ページ遷移のたびに新しいインスタンスが作成され、
          再マウントされます。
        </p>
        <p className="text-sm text-gray-700">
          上部のヘッダーの「マウント時刻」が、ページ遷移のたびに更新されることに注目してください。
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">ナビゲーション</h2>
        <div className="grid gap-3 mb-6">
          <Link
            href="/routing-demo/template-demo"
            className="block px-4 py-3 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            このページ（再マウントを確認）
          </Link>
          <Link
            href="/routing-demo/template-demo/page-a"
            className="block px-4 py-3 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Page A へ移動
          </Link>
          <Link
            href="/routing-demo/template-demo/page-b"
            className="block px-4 py-3 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Page B へ移動
          </Link>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
          <p className="text-sm text-gray-700">
            💡 これらのリンクをクリックするたびに、上部のヘッダーのマウント時刻が更新されます。
            これは、template.tsx が再マウントされている証拠です。
          </p>
        </div>
      </div>

      <div className="border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">ファイル構造</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`app/
└── routing-demo/
    └── template-demo/
        ├── template.tsx  ← テンプレート（再マウントされる）
        ├── page.tsx      ← このページ
        ├── page-a/
        │   └── page.tsx
        └── page-b/
            └── page.tsx`}
        </pre>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg p-6 bg-white">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <span className="text-2xl mr-2">📄</span>
            layout.tsx
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>ページ遷移時に状態を保持</li>
            <li>再レンダリングされない</li>
            <li>パフォーマンスが良い</li>
            <li>通常のレイアウトに使用</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 bg-white">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <span className="text-2xl mr-2">📋</span>
            template.tsx
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>ページ遷移時に再マウント</li>
            <li>状態がリセットされる</li>
            <li>useEffectが毎回実行される</li>
            <li>特殊なケースで使用</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h3 className="text-lg font-semibold mb-3">template.tsx の使用例</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li>ページ遷移アニメーションを実装したい場合</li>
          <li>各ページでフォームをリセットしたい場合</li>
          <li>ページごとに異なる enter/exit アニメーションを適用したい場合</li>
          <li>useEffect でページビューをトラッキングしたい場合</li>
          <li>CSS フレームワークのコンテナをページごとに初期化したい場合</li>
        </ul>
      </div>

      <div className="border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">template.tsx コード例</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`'use client'

import { useEffect } from 'react'

export default function Template({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // ページ遷移のたびに実行される
    console.log('Template mounted!')
  }, [])

  return (
    <div>
      {/* 共通のラッパー */}
      {children}
    </div>
  )
}`}
        </pre>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="text-lg font-semibold mb-3">💡 重要なポイント</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li>template.tsx は必ずクライアントコンポーネントにする必要があります</li>
          <li>layout.tsx と template.tsx を同時に使用できます（template が内側）</li>
          <li>通常は layout.tsx で十分なので、template.tsx の使用は慎重に検討してください</li>
          <li>不要な再マウントはパフォーマンスに影響する可能性があります</li>
        </ul>
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
