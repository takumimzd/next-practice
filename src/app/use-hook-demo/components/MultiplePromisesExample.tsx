"use client";

import { use, Suspense } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type MultiplePromisesExampleProps = {
  fastPromise: Promise<string>;
  slowPromise: Promise<string>;
  userPromise: Promise<User>;
};

// 個別のPromiseコンポーネント
function FastMessage({ promise }: { promise: Promise<string> }) {
  const message = use(promise);
  return (
    <div className="rounded-md bg-blue-50 p-3 dark:bg-blue-950">
      <div className="text-xs font-semibold text-blue-700 dark:text-blue-300">
        高速メッセージ (500ms)
      </div>
      <div className="text-sm text-blue-900 dark:text-blue-50">{message}</div>
    </div>
  );
}

function SlowMessage({ promise }: { promise: Promise<string> }) {
  const message = use(promise);
  return (
    <div className="rounded-md bg-orange-50 p-3 dark:bg-orange-950">
      <div className="text-xs font-semibold text-orange-700 dark:text-orange-300">
        低速メッセージ (3000ms)
      </div>
      <div className="text-sm text-orange-900 dark:text-orange-50">
        {message}
      </div>
    </div>
  );
}

function UserInfo({ promise }: { promise: Promise<User> }) {
  const user = use(promise);
  return (
    <div className="rounded-md bg-purple-50 p-3 dark:bg-purple-950">
      <div className="text-xs font-semibold text-purple-700 dark:text-purple-300">
        ユーザー情報 (API取得)
      </div>
      <div className="mt-2 text-sm text-purple-900 dark:text-purple-50">
        <div className="font-semibold">{user.name}</div>
        <div className="text-xs text-purple-600 dark:text-purple-400">
          {user.email}
        </div>
      </div>
    </div>
  );
}

/**
 * 複数のPromiseを並列で処理する例
 *
 * ポイント:
 * - 各Promiseを個別のSuspense境界で包む
 * - 完了したものから順に表示される
 * - 遅いPromiseが他をブロックしない
 */
export function MultiplePromisesExample({
  fastPromise,
  slowPromise,
  userPromise,
}: MultiplePromisesExampleProps) {
  return (
    <div className="space-y-4">
      {/* Fast Promise */}
      <Suspense
        fallback={
          <div className="rounded-md bg-zinc-100 p-3 dark:bg-zinc-900">
            <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="h-3 w-3 animate-spin rounded-full border-2 border-zinc-400 border-t-zinc-700"></div>
              高速メッセージを読み込み中...
            </div>
          </div>
        }
      >
        <FastMessage promise={fastPromise} />
      </Suspense>

      {/* User Promise */}
      <Suspense
        fallback={
          <div className="rounded-md bg-zinc-100 p-3 dark:bg-zinc-900">
            <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="h-3 w-3 animate-spin rounded-full border-2 border-zinc-400 border-t-zinc-700"></div>
              ユーザー情報を読み込み中...
            </div>
          </div>
        }
      >
        <UserInfo promise={userPromise} />
      </Suspense>

      {/* Slow Promise */}
      <Suspense
        fallback={
          <div className="rounded-md bg-zinc-100 p-3 dark:bg-zinc-900">
            <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="h-3 w-3 animate-spin rounded-full border-2 border-zinc-400 border-t-zinc-700"></div>
              低速メッセージを読み込み中...（少し時間がかかります）
            </div>
          </div>
        }
      >
        <SlowMessage promise={slowPromise} />
      </Suspense>

      <div className="mt-4 rounded-md bg-zinc-100 p-3 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
        💡 各Promiseは並列で処理され、完了したものから順に表示されます。
        ページをリロードして動作を確認してみてください。
      </div>
    </div>
  );
}
