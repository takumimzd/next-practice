type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

async function fetchTodosWithDelay(): Promise<Todo[]> {
  // 2秒の遅延をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
}

type ServerComponentApproachProps = {
  startTime: number;
};

/**
 * 従来のサーバーコンポーネント方式
 *
 * 特徴:
 * - awaitでデータ取得を待つ
 * - データが揃ってからHTMLをレンダリング
 * - クライアントに送信されるまで時間がかかる
 */
export async function ServerComponentApproach({
  startTime,
}: ServerComponentApproachProps) {
  // ここでawaitするため、このコンポーネント全体の処理が止まる
  const todos = await fetchTodosWithDelay();
  const renderTime = Date.now();
  const elapsedTime = renderTime - startTime;

  return (
    <div className="space-y-4">
      {/* Metrics */}
      <div className="rounded-md bg-blue-50 p-3 dark:bg-blue-950">
        <div className="text-xs font-semibold text-blue-700 dark:text-blue-300">
          📊 メトリクス
        </div>
        <div className="mt-2 space-y-1 text-xs text-blue-900 dark:text-blue-100">
          <div>
            データ取得時間: <strong>約2秒</strong>
          </div>
          <div>
            HTML送信までの時間: <strong>{elapsedTime}ms</strong>
          </div>
          <div className="text-blue-700 dark:text-blue-300">
            💡 データ取得が完了するまでHTMLは送信されません
          </div>
        </div>
      </div>

      {/* Todos List */}
      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-start gap-3 rounded-md border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-950"
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
                    ? "text-blue-600 line-through dark:text-blue-400"
                    : "text-blue-900 dark:text-blue-50"
                }`}
              >
                {todo.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-md bg-blue-100 p-3 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200">
        ✅ データ取得完了！すべてのデータが揃ってから表示されました。
      </div>
    </div>
  );
}
