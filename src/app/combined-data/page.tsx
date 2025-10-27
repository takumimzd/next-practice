import Link from "next/link";
import { Suspense } from "react";
import { UserInfo } from "./components/UserInfo";
import { UserPosts } from "./components/UserPosts";
import { UserTodos } from "./components/UserTodos";
import { UserAlbums } from "./components/UserAlbums";
import { UserDetailCombined } from "./components/UserDetailCombined";
import { LoadingCard } from "./components/LoadingCard";
import { DataErrorBoundary } from "./components/DataErrorBoundary";
import { UserSelector } from "./components/UserSelector";
import { PatternSelector } from "./components/PatternSelector";

type PageProps = {
  searchParams: Promise<{
    userId?: string;
    pattern?: "combined" | "separated";
  }>;
};

/**
 * 複数APIレスポンス統合デモページ
 *
 * このページは以下の4つの異なるAPIエンドポイントからデータを取得し、
 * 1つの統合されたユーザー詳細UIを構成します:
 *
 * 1. User API (/users/:id) - キャッシュあり (15分)
 * 2. Posts API (/posts?userId=:id) - キャッシュなし (常に最新)
 * 3. Todos API (/todos?userId=:id) - キャッシュあり (5分)
 * 4. Albums API (/albums?userId=:id) - キャッシュあり (10分)
 *
 * Next.js 15+ のベストプラクティス:
 * - 個別のSuspense境界により並列データフェッチング
 * - unstable_cache によるきめ細かいキャッシング制御
 * - Error Boundary による部分的エラーハンドリング
 * - Server Components によるゼロバンドルサイズ
 */
export default async function CombinedDataPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const userId = params.userId ? Number(params.userId) : 1;
  const pattern = params.pattern || "combined";

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Home
        </Link>

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            複数APIレスポンス統合デモ
          </h1>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">
            4つの異なるAPIエンドポイントからデータを取得し、1つの統合されたユーザー詳細UIを構成します
          </p>

          <div className="space-y-4">
            {/* Pattern Selector */}
            <PatternSelector selectedPattern={pattern} />

            {/* User Selector */}
            <UserSelector selectedUserId={userId} />
          </div>
        </div>

        {/* Main Content */}
        {pattern === "combined" ? (
          // 統合パターン: 1つのコンポーネントで全APIを取得
          <DataErrorBoundary title="User Details">
            <Suspense
              fallback={
                <div className="space-y-6">
                  <LoadingCard title="Loading all user data..." />
                </div>
              }
            >
              <UserDetailCombined userId={userId} />
            </Suspense>
          </DataErrorBoundary>
        ) : (
          // 分離パターン: 各コンポーネントが個別にAPIを取得
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column: User Info (1/3 width) */}
            <div className="lg:col-span-1">
              <DataErrorBoundary title="User Info">
                <Suspense fallback={<LoadingCard title="User Info" />}>
                  <UserInfo userId={userId} />
                </Suspense>
              </DataErrorBoundary>
            </div>

            {/* Right Column: Posts, Todos, Albums (2/3 width) */}
            <div className="space-y-6 lg:col-span-2">
              {/* Posts Section */}
              <DataErrorBoundary title="Posts">
                <Suspense fallback={<LoadingCard title="Posts" />}>
                  <UserPosts userId={userId} />
                </Suspense>
              </DataErrorBoundary>

              {/* Todos and Albums Grid */}
              <div className="grid gap-6 xl:grid-cols-2">
                {/* Todos Section */}
                <DataErrorBoundary title="Todos">
                  <Suspense fallback={<LoadingCard title="Todos" />}>
                    <UserTodos userId={userId} />
                  </Suspense>
                </DataErrorBoundary>

                {/* Albums Section */}
                <DataErrorBoundary title="Albums">
                  <Suspense fallback={<LoadingCard title="Albums" />}>
                    <UserAlbums userId={userId} />
                  </Suspense>
                </DataErrorBoundary>
              </div>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 space-y-6">
          {/* Current Pattern Info */}
          <div
            className={`rounded-lg border p-6 ${
              pattern === "combined"
                ? "border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-950"
                : "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950"
            }`}
          >
            <h2
              className={`mb-3 text-lg font-semibold ${
                pattern === "combined"
                  ? "text-purple-900 dark:text-purple-50"
                  : "text-blue-900 dark:text-blue-50"
              }`}
            >
              {pattern === "combined" ? "統合パターン" : "分離パターン"}の特徴
            </h2>
            {pattern === "combined" ? (
              <ul
                className={`space-y-2 text-sm text-purple-800 dark:text-purple-200`}
              >
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">🔗</span>
                  <span>
                    <strong>Promise.all()で並列取得:</strong>{" "}
                    1つのコンポーネント内で4つのAPIを同時に取得
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">⏱️</span>
                  <span>
                    <strong>最も遅いAPIがボトルネック:</strong>{" "}
                    全てのデータが揃うまで表示されない（約1秒）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">🔒</span>
                  <span>
                    <strong>データの整合性:</strong>{" "}
                    全てのデータが同一時点で取得される
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">⚠️</span>
                  <span>
                    <strong>全体的エラーハンドリング:</strong>{" "}
                    1つのAPIが失敗すると全体が表示されない
                  </span>
                </li>
              </ul>
            ) : (
              <ul className={`space-y-2 text-sm text-blue-800 dark:text-blue-200`}>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">🔄</span>
                  <span>
                    <strong>個別Suspense境界:</strong>{" "}
                    各コンポーネントが独立してデータを取得
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">⚡</span>
                  <span>
                    <strong>段階的な表示:</strong>{" "}
                    取得完了したデータから順次表示される
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">🛡️</span>
                  <span>
                    <strong>部分的エラーハンドリング:</strong>{" "}
                    1つのAPIが失敗しても他は正常に表示
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">💾</span>
                  <span>
                    <strong>きめ細かいキャッシング:</strong>{" "}
                    各データソースで異なるキャッシュ戦略
                  </span>
                </li>
              </ul>
            )}
          </div>

          {/* Common Features */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800">
            <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              共通の実装特徴
            </h2>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">🌐</span>
                <span>
                  <strong>4つのAPIエンドポイント:</strong>{" "}
                  User / Posts / Todos / Albums
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">⚡</span>
                <span>
                  <strong>Server Components:</strong>{" "}
                  全てのデータフェッチングはサーバー側で実行
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">🎯</span>
                <span>
                  <strong>TypeScript型安全性:</strong>{" "}
                  全てのAPIレスポンスに型定義
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
