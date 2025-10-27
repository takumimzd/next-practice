import { fetchUserTodos } from "../api";

type Props = {
  userId: number;
};

export async function UserTodos({ userId }: Props) {
  const todos = await fetchUserTodos(userId);

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
          Todos
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {completedCount}/{totalCount} completed
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            CACHED 5m
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-start gap-3 rounded-md border border-zinc-100 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <div
              className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded border-2 ${
                todo.completed
                  ? "border-green-500 bg-green-500"
                  : "border-zinc-300 dark:border-zinc-600"
              }`}
            >
              {todo.completed && (
                <svg
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span
              className={`text-sm ${
                todo.completed
                  ? "text-zinc-400 line-through dark:text-zinc-500"
                  : "text-zinc-700 dark:text-zinc-300"
              }`}
            >
              {todo.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
