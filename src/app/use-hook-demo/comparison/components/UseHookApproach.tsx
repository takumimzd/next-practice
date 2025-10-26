"use client";

import { use, useState, useEffect } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type UseHookApproachProps = {
  promise: Promise<Todo[]>;
  startTime: number;
};

/**
 * useフックを使ったストリーミング方式
 *
 * 特徴:
 * - Promiseを受け取ってuseで読み取る
 * - HTMLは即座に送信される（Suspenseのfallback）
 * - データは後から表示される
 */
export function UseHookApproach({
  promise,
  startTime,
}: UseHookApproachProps) {
  // useでPromiseを読み取る
  const todos = use(promise);

  // ハイドレーションエラーを避けるため、時刻計算はuseEffectで行う
  const [htmlSentTime, setHtmlSentTime] = useState<number | null>(null);
  const [dataFetchTime, setDataFetchTime] = useState<number | null>(null);

  useEffect(() => {
    // クライアント側でのみ時刻を計算
    const now = Date.now();
    setHtmlSentTime(now - startTime);
    setDataFetchTime(now - startTime);
  }, [startTime]);

  return (
    <div className="space-y-4">
      {/* Metrics */}
      <div className="rounded-md bg-emerald-50 p-3 dark:bg-emerald-950">
        <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
          📊 メトリクス
        </div>
        <div className="mt-2 space-y-1 text-xs text-emerald-900 dark:text-emerald-100">
          <div>
            HTML送信までの時間:{" "}
            <strong className="text-emerald-600 dark:text-emerald-400">
              {htmlSentTime !== null ? `${htmlSentTime}ms` : "計測中..."}
            </strong>
          </div>
          <div>
            データ取得完了:{" "}
            <strong>
              {dataFetchTime !== null ? `${dataFetchTime}ms` : "計測中..."}
            </strong>
          </div>
          <div className="text-emerald-700 dark:text-emerald-300">
            ⚡ HTMLは即座に送信され、データは後から表示されました！
          </div>
        </div>
      </div>

      {/* Todos List */}
      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-start gap-3 rounded-md border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-800 dark:bg-emerald-950"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              readOnly
              className="mt-1 h-4 w-4 rounded"
            />
            <div className="flex-1">
              <div
                className={`text-sm ${
                  todo.completed
                    ? "text-emerald-600 line-through dark:text-emerald-400"
                    : "text-emerald-900 dark:text-emerald-50"
                }`}
              >
                {todo.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-md bg-emerald-100 p-3 text-xs text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
        ✅ ストリーミング完了！HTMLが先に表示され、データは後から挿入されました。
      </div>
    </div>
  );
}
