"use cache";

import Link from "next/link";
import { Suspense } from "react";
import { fetchInitialPosts } from "./api";
import { PostsList } from "./components/PostsList";

/**
 * Server Component + SWR ページネーションデモ
 *
 * このページは以下のパターンを実装しています:
 *
 * 1. **初期表示はServer Componentで取得（"use cache"使用）**
 *    - 第1ページのデータをサーバー側でプリレンダリング
 *    - Next.js v16の "use cache" ディレクティブでキャッシュ
 *    - SEO対応とFast First Paintを実現
 *    - 初期HTMLに投稿データが含まれる
 *
 * 2. **ページネーションはSWRでクライアント側**
 *    - 2ページ目以降はクライアント側で取得
 *    - SWRによる自動キャッシュ・再検証
 *    - ユーザーインタラクションに応じた動的データ取得
 *
 * 3. **ハイブリッドアプローチのメリット**
 *    - 初期表示が高速（サーバーレンダリング + "use cache"）
 *    - ページ遷移がスムーズ（クライアント側フェッチ）
 *    - SEOに最適化（初期データがHTML内）
 *
 * Next.js 16 + React 19のベストプラクティス:
 * - "use cache" ディレクティブで関数レベルでキャッシュ
 * - SuspenseでストリーミングSSRを有効化（ヘッダーは即座に表示）
 * - cacheComponents: true 設定でキャッシュ戦略を明示的に制御
 * - Client ComponentsでSWRを使った段階的データ取得
 */

async function PostsContent() {
  // Server Componentで初期データ（第1ページ）を取得
  // fetchInitialPosts内の"use cache"により、2回目以降はキャッシュから即座に返される
  const initialData = await fetchInitialPosts(1, 10);
  return <PostsList initialData={initialData} />;
}

export default async function PaginationDemoPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Home
        </Link>

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Server Component + SWR Pagination
          </h1>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">
            初期表示はサーバーコンポーネントで取得、ページネーションはSWRでクライアント側で実装
          </p>
        </div>

        {/* Main Content - Suspenseでストリーミング */}
        <Suspense
          fallback={
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800"
                >
                  <div className="mb-3 h-6 w-3/4 rounded bg-zinc-200 dark:bg-zinc-700"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-700"></div>
                    <div className="h-4 w-5/6 rounded bg-zinc-200 dark:bg-zinc-700"></div>
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <PostsContent />
        </Suspense>

        {/* Info Section */}
        <div className="mt-12 space-y-6">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
            <h2 className="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-50">
              実装の特徴
            </h2>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">⚡</span>
                <span>
                  <strong>ストリーミングSSR:</strong>{" "}
                  Suspenseでヘッダーは即座に表示、データ部分は準備でき次第送信
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">💾</span>
                <span>
                  <strong>"use cache"でキャッシュ:</strong>{" "}
                  fetchInitialPosts関数が"use cache"でキャッシュされ、2回目以降は高速
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">🔄</span>
                <span>
                  <strong>SWRでクライアント側ページネーション:</strong>{" "}
                  2ページ目以降はブラウザでAPIを呼び出し、SWRが自動キャッシュ
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">🎯</span>
                <span>
                  <strong>SEO最適化:</strong>{" "}
                  初期ページの内容はHTMLに含まれるため検索エンジンがクロール可能
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800">
            <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              技術スタック
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  サーバー側
                </h3>
                <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Server Components</li>
                  <li>• "use cache" directive（関数レベル）</li>
                  <li>• Suspense（ストリーミングSSR）</li>
                  <li>• cacheComponents: true</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  クライアント側
                </h3>
                <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• SWR (useSWR)</li>
                  <li>• Client Components</li>
                  <li>• Next.js API Routes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950">
            <h2 className="mb-3 text-lg font-semibold text-purple-900 dark:text-purple-50">
              使い方のヒント
            </h2>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">💡</span>
                <span>
                  初回アクセス時、ヘッダーは即座に表示され、データ部分はスケルトンローディングが表示されます
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">💡</span>
                <span>
                  第1ページの投稿は緑色のバッジ「Server-side rendered」が表示されます
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">💡</span>
                <span>
                  2ページ目以降は青色のバッジ「Client-side fetched (SWR)」が表示されます
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">💡</span>
                <span>
                  開発者ツールのNetworkタブで、第1ページの初回リクエストがないことを確認できます
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
