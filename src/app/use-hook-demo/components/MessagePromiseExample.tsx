"use client";

import { use } from "react";

type MessagePromiseExampleProps = {
  messagePromise: Promise<string>;
};

/**
 * useフックを使ってPromiseからデータを読み取る例
 *
 * ポイント:
 * - "use client"ディレクティブが必要
 * - use()でPromiseを読み取る
 * - Promiseが解決するまでSuspenseのfallbackが表示される
 */
export function MessagePromiseExample({
  messagePromise,
}: MessagePromiseExampleProps) {
  // use()でPromiseを読み取る（awaitのような動作）
  const message = use(messagePromise);

  return (
    <div className="rounded-md bg-emerald-50 p-4 dark:bg-emerald-950">
      <div className="mb-2 text-sm font-semibold text-emerald-800 dark:text-emerald-200">
        ✅ メッセージ取得完了:
      </div>
      <div className="text-emerald-900 dark:text-emerald-50">{message}</div>
      <div className="mt-3 text-xs text-emerald-600 dark:text-emerald-400">
        💡 このデータはサーバーからストリーミングされました
      </div>
    </div>
  );
}
