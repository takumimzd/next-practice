type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

async function fetchTodos(userId?: string): Promise<Todo[]> {
  const url = userId
    ? `https://jsonplaceholder.typicode.com/users/${userId}/todos`
    : "https://jsonplaceholder.typicode.com/todos";

  // cache: 'no-store'を指定してキャッシュを無効化
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return res.json();
}

type NonCachedTodosProps = {
  userId?: string;
};

export async function NonCachedTodos({ userId }: NonCachedTodosProps) {
  const todos = await fetchTodos(userId);
  const fetchedAt = new Date().toLocaleString("ja-JP", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div>
      <div className="mb-4 rounded-md bg-zinc-100 p-3 dark:bg-zinc-900">
        <div className="text-xs text-zinc-500 dark:text-zinc-500">
          取得時刻:
        </div>
        <div className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-50">
          {fetchedAt}
        </div>
      </div>

      {todos.length === 0 ? (
        <p className="text-center text-zinc-500 dark:text-zinc-500">
          Todosがありません
        </p>
      ) : (
        <>
          <div className="mb-4 flex gap-4 text-sm">
            <div className="rounded-md bg-blue-50 px-3 py-1 dark:bg-blue-950">
              <span className="font-semibold text-blue-800 dark:text-blue-200">
                完了: {completedCount}
              </span>
            </div>
            <div className="rounded-md bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                未完了: {todos.length - completedCount}
              </span>
            </div>
          </div>

          <div className="max-h-96 space-y-2 overflow-y-auto">
            {todos.slice(0, 20).map((todo) => (
              <div
                key={todo.id}
                className="flex items-start gap-3 rounded-md border border-zinc-200 p-3 dark:border-zinc-800"
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
                        ? "text-zinc-500 line-through dark:text-zinc-600"
                        : "text-zinc-900 dark:text-zinc-50"
                    }`}
                  >
                    {todo.title}
                  </div>
                  <div className="mt-1 text-xs text-zinc-400 dark:text-zinc-600">
                    User ID: {todo.userId}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
            {todos.length > 20
              ? `表示中: 20/${todos.length}件`
              : `合計: ${todos.length}件のTodo`}
          </div>
        </>
      )}
    </div>
  );
}
