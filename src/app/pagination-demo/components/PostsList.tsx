"use client";

import { useState } from "react";
import useSWR from "swr";
import type { Post, PaginatedResponse } from "../types";

type Props = {
  initialData: PaginatedResponse<Post>;
};

/**
 * SWRを使ったクライアント側ページネーション実装
 *
 * - 初期データはServer Componentから受け取る（SSR対応）
 * - 2ページ目以降はSWRでクライアント側で取得
 * - キャッシュ、再検証、エラーハンドリングをSWRが自動で処理
 */

// SWR用のfetcher関数
const fetcher = async (url: string): Promise<PaginatedResponse<Post>> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export function PostsList({ initialData }: Props) {
  const [page, setPage] = useState(1);

  // SWRでデータ取得
  // page=1の場合はinitialDataを使用（サーバーで取得済み）
  const { data, error, isLoading } = useSWR<PaginatedResponse<Post>>(
    `/api/posts?page=${page}&limit=10`,
    fetcher,
    {
      fallbackData: page === 1 ? initialData : undefined,
      revalidateOnFocus: false, // フォーカス時の自動再検証を無効化
      revalidateOnReconnect: true, // 再接続時は再検証
      revalidateIfStale: false, // page=1の初期データは再検証しない（SSRで取得済み）
      dedupingInterval: 60000, // 60秒間は同じリクエストを重複排除
    }
  );

  const posts = data?.data || [];
  const pagination = data?.pagination;

  return (
    <div className="space-y-6">
      {/* Posts List */}
      <div className="space-y-4">
        {isLoading && page !== 1 && (
          <div className="flex items-center justify-center py-8">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-900 dark:border-zinc-600 dark:border-t-zinc-50"></div>
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
            <p className="text-sm text-red-800 dark:text-red-200">
              エラーが発生しました: {error.message}
            </p>
          </div>
        )}

        {!isLoading && !error && posts.length === 0 && (
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-700 dark:bg-zinc-900">
            <p className="text-zinc-600 dark:text-zinc-400">
              投稿が見つかりませんでした
            </p>
          </div>
        )}

        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800"
          >
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {post.title}
              </h3>
              <span className="flex-shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300">
                ID: {post.id}
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {post.body}
            </p>
            <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-500">
              User ID: {post.userId}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {pagination && (
        <div className="flex flex-col items-center gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-700">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Page {pagination.page} of{" "}
            {Math.ceil(pagination.total / pagination.limit)} (Total:{" "}
            {pagination.total} posts)
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1 || isLoading}
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Previous
            </button>

            <div className="flex items-center gap-2">
              {/* Page Numbers */}
              {Array.from(
                { length: Math.min(5, Math.ceil(pagination.total / pagination.limit)) },
                (_, i) => {
                  const pageNum = Math.max(
                    1,
                    Math.min(
                      page - 2 + i,
                      Math.ceil(pagination.total / pagination.limit)
                    )
                  );
                  return pageNum;
                }
              )
                .filter(
                  (num, idx, arr) => arr.indexOf(num) === idx && num > 0
                )
                .map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    disabled={isLoading}
                    className={`h-10 w-10 rounded-md text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
                      page === pageNum
                        ? "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900"
                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
            </div>

            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={!pagination.hasMore || isLoading}
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Next
            </button>
          </div>

          {/* Data Source Indicator */}
          <div className="flex items-center gap-2 text-xs">
            {page === 1 && !isLoading && (
              <span className="rounded-full bg-green-100 px-3 py-1 font-semibold text-green-700 dark:bg-green-900 dark:text-green-300">
                ✓ Server-side rendered
              </span>
            )}
            {page !== 1 && !isLoading && (
              <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                ✓ Client-side fetched (SWR)
              </span>
            )}
            {isLoading && (
              <span className="rounded-full bg-orange-100 px-3 py-1 font-semibold text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                ⟳ Loading...
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
