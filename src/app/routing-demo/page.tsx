import Link from 'next/link'

export default function RoutingDemoPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Next.js ルーティングデモ</h1>

        <p className="text-lg mb-8 text-gray-700">
          Next.js App Routerの様々なルーティングパターンを実際に体験できるデモページです。
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Basic Routing */}
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">📄 Page Routing</h2>
            <p className="text-gray-600 mb-4">
              ページ遷移の基本。page.tsxファイルでルートを定義します。
            </p>
            <Link
              href="/routing-demo/basic"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              デモを見る →
            </Link>
          </div>

          {/* Dynamic Routing */}
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">🔀 Dynamic Routing</h2>
            <p className="text-gray-600 mb-4">
              URLパラメータを使った動的なルーティング。[id]の形式で定義します。
            </p>
            <Link
              href="/routing-demo/dynamic/123"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              デモを見る →
            </Link>
          </div>

          {/* Catch-all Routing */}
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">🎯 Catch-all Routing</h2>
            <p className="text-gray-600 mb-4">
              階層をまとめて受け取る。[...slug]の形式で任意の深さのパスを受け取ります。
            </p>
            <Link
              href="/routing-demo/catch-all/docs/api/reference"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              デモを見る →
            </Link>
          </div>

          {/* Nested Routing */}
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">📦 Nested Routing</h2>
            <p className="text-gray-600 mb-4">
              UIの入れ子構造。親子関係のあるページ構成とレイアウト共有を実現します。
            </p>
            <Link
              href="/routing-demo/nested"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              デモを見る →
            </Link>
          </div>

          {/* Parallel Routing */}
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">⚡ Parallel Routing</h2>
            <p className="text-gray-600 mb-4">
              複数のUIを同時に描画。@folderの形式でスロットを定義します。
            </p>
            <Link
              href="/routing-demo/parallel"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              デモを見る →
            </Link>
          </div>

          {/* Intercepting Routing */}
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">🔄 Intercepting Routing</h2>
            <p className="text-gray-600 mb-4">
              特定ルートの一時置換。モーダルなどに利用される(.)記法を使います。
            </p>
            <Link
              href="/routing-demo/intercepting/photos"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              デモを見る →
            </Link>
          </div>

          {/* Special Files */}
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">⚙️ Special Files</h2>
            <p className="text-gray-600 mb-4">
              loading.tsx, error.tsx, not-found.tsxなどの特殊ファイルの使い方。
            </p>
            <Link
              href="/routing-demo/special-files"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              デモを見る →
            </Link>
          </div>

          {/* Template */}
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">📋 Template</h2>
            <p className="text-gray-600 mb-4">
              レイアウトと似ているが、再マウントされる。フォームリセットなどに有効。
            </p>
            <Link
              href="/routing-demo/template-demo"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              デモを見る →
            </Link>
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">📚 特殊ファイルの役割</h3>
          <div className="grid gap-3 text-sm">
            <div className="flex">
              <code className="bg-white px-2 py-1 rounded mr-3 font-mono">page.tsx</code>
              <span>ルートに対応するページ</span>
            </div>
            <div className="flex">
              <code className="bg-white px-2 py-1 rounded mr-3 font-mono">layout.tsx</code>
              <span>共通レイアウト（状態を保持）</span>
            </div>
            <div className="flex">
              <code className="bg-white px-2 py-1 rounded mr-3 font-mono">template.tsx</code>
              <span>レイアウトと似ているが、再マウントされる</span>
            </div>
            <div className="flex">
              <code className="bg-white px-2 py-1 rounded mr-3 font-mono">loading.tsx</code>
              <span>Suspense の fallback UI</span>
            </div>
            <div className="flex">
              <code className="bg-white px-2 py-1 rounded mr-3 font-mono">error.tsx</code>
              <span>エラーハンドリング用コンポーネント</span>
            </div>
            <div className="flex">
              <code className="bg-white px-2 py-1 rounded mr-3 font-mono">not-found.tsx</code>
              <span>404 ページ</span>
            </div>
            <div className="flex">
              <code className="bg-white px-2 py-1 rounded mr-3 font-mono">route.ts</code>
              <span>API Route（サーバー専用）</span>
            </div>
            <div className="flex">
              <code className="bg-white px-2 py-1 rounded mr-3 font-mono">default.tsx</code>
              <span>並列ルートで未マウント時のデフォルト</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">
            ← ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
