import Link from 'next/link'

export default function TemplateDemoPage() {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        📋 Template のデモ
      </h1>

      {/* 概要 */}
      <section className="mb-8 rounded-lg border border-pink-200 bg-pink-50 p-6 dark:border-pink-900 dark:bg-pink-950">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-pink-900 dark:text-pink-50">
          <span>💡</span>
          概要
        </h2>
        <p className="mb-4 text-pink-900 dark:text-pink-100">
          template.tsx は layout.tsx と似ていますが、ページ遷移のたびに新しいインスタンスが作成され、
          再マウントされます。
        </p>
        <p className="text-sm text-pink-800 dark:text-pink-200">
          上部のヘッダーの「マウント時刻」が、ページ遷移のたびに更新されることに注目してください。
        </p>
      </section>

      {/* ナビゲーション */}
      <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          <span>🧭</span>
          ナビゲーション
        </h2>
        <div className="grid gap-4 mb-6">
          <Link
            href="/routing-demo/template-demo"
            className="group block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 text-center font-semibold text-white transition-all duration-300 hover:shadow-xl dark:from-purple-700 dark:to-pink-700"
          >
            このページ（再マウントを確認）
          </Link>
          <Link
            href="/routing-demo/template-demo/page-a"
            className="group block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 text-center font-semibold text-white transition-all duration-300 hover:shadow-xl dark:from-purple-700 dark:to-pink-700"
          >
            Page A へ移動
          </Link>
          <Link
            href="/routing-demo/template-demo/page-b"
            className="group block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 text-center font-semibold text-white transition-all duration-300 hover:shadow-xl dark:from-purple-700 dark:to-pink-700"
          >
            Page B へ移動
          </Link>
        </div>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-950">
          <p className="flex items-center gap-2 text-sm text-amber-900 dark:text-amber-100">
            <span className="text-lg">💡</span>
            これらのリンクをクリックするたびに、上部のヘッダーのマウント時刻が更新されます。
            これは、template.tsx が再マウントされている証拠です。
          </p>
        </div>
      </section>

      {/* ファイル構造 */}
      <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          <span>📁</span>
          ファイル構造
        </h2>
        <pre className="overflow-x-auto rounded-lg border-2 border-zinc-300 bg-zinc-900 p-6 text-sm text-emerald-400 dark:border-zinc-700 dark:bg-zinc-800">
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
      </section>

      {/* 比較 */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <section className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-blue-900 dark:text-blue-50">
            <span className="text-2xl">📄</span>
            layout.tsx
          </h3>
          <ul className="space-y-3 text-sm text-blue-900 dark:text-blue-100">
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-500 dark:text-blue-400">✓</span>
              ページ遷移時に状態を保持
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-500 dark:text-blue-400">✓</span>
              再レンダリングされない
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-500 dark:text-blue-400">✓</span>
              パフォーマンスが良い
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-500 dark:text-blue-400">✓</span>
              通常のレイアウトに使用
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-purple-900 dark:text-purple-50">
            <span className="text-2xl">📋</span>
            template.tsx
          </h3>
          <ul className="space-y-3 text-sm text-purple-900 dark:text-purple-100">
            <li className="flex items-start gap-2">
              <span className="font-bold text-purple-500 dark:text-purple-400">✓</span>
              ページ遷移時に再マウント
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-purple-500 dark:text-purple-400">✓</span>
              状態がリセットされる
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-purple-500 dark:text-purple-400">✓</span>
              useEffectが毎回実行される
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-purple-500 dark:text-purple-400">✓</span>
              特殊なケースで使用
            </li>
          </ul>
        </section>
      </div>

      {/* 使用例 */}
      <section className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
        <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-emerald-900 dark:text-emerald-50">
          <span>🌟</span>
          template.tsx の使用例
        </h3>
        <ul className="space-y-3 text-sm text-emerald-900 dark:text-emerald-100">
          <li className="flex items-start gap-3">
            <span className="font-bold text-emerald-500 dark:text-emerald-400">→</span>
            ページ遷移アニメーションを実装したい場合
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold text-emerald-500 dark:text-emerald-400">→</span>
            各ページでフォームをリセットしたい場合
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold text-emerald-500 dark:text-emerald-400">→</span>
            ページごとに異なる enter/exit アニメーションを適用したい場合
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold text-emerald-500 dark:text-emerald-400">→</span>
            useEffect でページビューをトラッキングしたい場合
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold text-emerald-500 dark:text-emerald-400">→</span>
            CSS フレームワークのコンテナをページごとに初期化したい場合
          </li>
        </ul>
      </section>

      {/* コード例 */}
      <section className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          <span>💻</span>
          template.tsx コード例
        </h2>
        <pre className="overflow-x-auto rounded-lg border-2 border-zinc-300 bg-zinc-900 p-6 text-sm leading-relaxed text-cyan-300 dark:border-zinc-700 dark:bg-zinc-800">
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
      </section>

      {/* 重要なポイント */}
      <section className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
        <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-blue-900 dark:text-blue-50">
          <span>💡</span>
          重要なポイント
        </h3>
        <ul className="space-y-3 text-sm text-blue-900 dark:text-blue-100">
          <li className="flex items-start gap-3">
            <span className="text-xl">•</span>
            <span>template.tsx は必ずクライアントコンポーネントにする必要があります</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">•</span>
            <span>layout.tsx と template.tsx を同時に使用できます（template が内側）</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">•</span>
            <span>通常は layout.tsx で十分なので、template.tsx の使用は慎重に検討してください</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">•</span>
            <span>不要な再マウントはパフォーマンスに影響する可能性があります</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
