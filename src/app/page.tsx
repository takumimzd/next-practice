import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Next.js 16 Practice
        </h1>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          Next.js 16の新機能をキャッチアップするためのプロジェクト
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Cache Components Demo */}
          <Link
            href="/cache-demo"
            className="group block rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Cache Components
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              &quot;use cache&quot;ディレクティブを使ったキャッシュの動作を確認
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
              <li>• サーバーコンポーネントのキャッシュ</li>
              <li>• 動的APIを使った非キャッシュ化</li>
              <li>• クライアントコンポーネントとの組み合わせ</li>
            </ul>
          </Link>

          {/* Server Actions Demo */}
          <Link
            href="/server-actions"
            className="group block rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Server Actions
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Server Actionsを使ったフォーム実装のデモ
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
              <li>• フォームデータの送信</li>
              <li>• サーバーサイドでのバリデーション</li>
              <li>• 楽観的更新（Optimistic Updates）</li>
            </ul>
          </Link>

          {/* Data Fetching Demo */}
          <Link
            href="/data-fetching"
            className="group block rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Data Fetching
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              外部APIを使ったデータ取得とキャッシュ戦略のデモ
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
              <li>• JSONPlaceholderからのデータ取得</li>
              <li>• キャッシュあり/なしの比較</li>
              <li>• ユーザーごとのTodosフィルタリング</li>
            </ul>
          </Link>

          {/* Combined Data Demo */}
          <Link
            href="/combined-data"
            className="group block rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Combined Data
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              複数のAPIレスポンスを組み合わせた統合UIのデモ
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
              <li>• 4つのAPIを並列フェッチング</li>
              <li>• きめ細かいキャッシング戦略</li>
              <li>• 部分的エラーハンドリング</li>
            </ul>
          </Link>

          {/* use Hook Demo */}
          <Link
            href="/use-hook-demo"
            className="group block rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              use Hook
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              React 19の新しい`use`フックの使い方を学ぶ
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
              <li>• Promiseのストリーミング</li>
              <li>• 条件付きContext読み取り</li>
              <li>• Suspenseとの連携</li>
            </ul>
          </Link>

          {/* Activity Demo */}
          <Link
            href="/activity-demo"
            className="group block rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              React Activity
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              React 19の&lt;Activity&gt;コンポーネントで状態保持
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-500">
              <li>• タブ切り替えで状態とDOMを保持</li>
              <li>• display: noneによる非表示制御</li>
              <li>• ストリーミングSSRとの連携</li>
            </ul>
          </Link>
        </div>
      </main>
    </div>
  );
}
