import Link from "next/link";
import { Suspense } from "react";
import { CachedUsers } from "./components/CachedUsers";
import { NonCachedTodos } from "./components/NonCachedTodos";
import { UserSelector } from "./components/UserSelector";
import { LoadingCard } from "./components/LoadingCard";
import { DataErrorBoundary } from "./components/DataErrorBoundary";

type PageProps = {
  searchParams: Promise<{ userId?: string }>;
};

export default async function DataFetchingPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const selectedUserId = params.userId;

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Data Fetching & Cache Demo
        </h1>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          JSONPlaceholderを使ったデータ取得とキャッシュの動作確認
        </p>

        {/* User Selector */}
        <div className="mb-8">
          <UserSelector selectedUserId={selectedUserId} />
        </div>

        {/*
          個別のSuspense境界を使用する理由:
          - CachedUsersとNonCachedTodosを並列でフェッチできる
          - 一方のデータ取得が遅くても、もう一方は先に表示できる
          - よりきめ細かいローディング状態の管理が可能
        */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Cached Users with individual Suspense */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                Users（キャッシュあり）
              </h2>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
                CACHED
              </span>
            </div>
            <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
              &quot;use cache&quot;を使用したコンポーネント。データがキャッシュされます。
            </p>
            <DataErrorBoundary title="Users">
              <Suspense
                fallback={
                  <LoadingCard
                    title="Users"
                    badge={{ text: "CACHED", color: "green" }}
                  />
                }
              >
                <CachedUsers />
              </Suspense>
            </DataErrorBoundary>
            <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
              💡 ページをリロードしても同じ取得時刻が表示されます
            </p>
          </section>

          {/* Non-Cached Todos with individual Suspense */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                Todos（キャッシュなし）
              </h2>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                NO CACHE
              </span>
            </div>
            <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
              cache: &apos;no-store&apos;を使用したコンポーネント。毎回新しいデータを取得します。
            </p>
            <DataErrorBoundary title="Todos">
              <Suspense
                fallback={
                  <LoadingCard
                    title="Todos"
                    badge={{ text: "NO CACHE", color: "orange" }}
                  />
                }
              >
                <NonCachedTodos userId={selectedUserId} />
              </Suspense>
            </DataErrorBoundary>
            <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
              💡 ページをリロードすると取得時刻が更新されます
            </p>
          </section>
        </div>

        {/* Explanation */}
        <section className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <h3 className="mb-3 text-xl font-semibold text-emerald-900 dark:text-emerald-50">
            📚 データフェッチのキャッシュ戦略
          </h3>
          <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
            <div>
              <strong className="text-emerald-800 dark:text-emerald-200">&quot;use cache&quot;ディレクティブ:</strong>
              <p className="ml-4 text-sm">
                コンポーネント全体の出力をキャッシュします。ユーザーリストのような変更頻度が低いデータに適しています。
              </p>
            </div>
            <div>
              <strong className="text-emerald-800 dark:text-emerald-200">cache: &apos;no-store&apos;:</strong>
              <p className="ml-4 text-sm">
                fetchオプションでキャッシュを無効化します。ユーザー固有のTodosのような動的データに適しています。
              </p>
            </div>
            <div>
              <strong className="text-emerald-800 dark:text-emerald-200">revalidate:</strong>
              <p className="ml-4 text-sm">
                特定の秒数後にキャッシュを再検証できます（例: revalidate: 60で60秒ごと）
              </p>
            </div>
          </div>
        </section>

        {/* Suspense & Error Handling Explanation */}
        <section className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
          <h3 className="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-50">
            🔄 Suspense & ErrorBoundary
          </h3>
          <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
            <div>
              <strong className="text-blue-800 dark:text-blue-200">個別のSuspense境界:</strong>
              <p className="ml-4 text-sm">
                UsersとTodosコンポーネントに個別のSuspenseを設定することで、並列データフェッチが可能になります。
                一方のデータ取得が遅くても、もう一方は先に表示できるため、ユーザー体験が向上します。
              </p>
            </div>
            <div>
              <strong className="text-blue-800 dark:text-blue-200">個別のErrorBoundary:</strong>
              <p className="ml-4 text-sm">
                各コンポーネントに個別のErrorBoundaryを設定することで、一方のAPIが失敗しても、
                もう一方は正常に表示できます。ページ全体がクラッシュせず、部分的なエラー表示が可能です。
              </p>
            </div>
            <div>
              <strong className="text-blue-800 dark:text-blue-200">ページレベルのフォールバック:</strong>
              <p className="ml-4 text-sm">
                loading.tsxとerror.tsxは、ページ全体のローディングやエラーをハンドリングします。
                個別のSuspense/ErrorBoundaryと組み合わせることで、きめ細かいUX制御が可能です。
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
