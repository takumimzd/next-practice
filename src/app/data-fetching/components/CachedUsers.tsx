// ファイルの先頭に"use cache"を配置すると、
// このファイル内のすべてのエクスポートがキャッシュされる
"use cache";

type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
};

type CachedUsersData = {
  users: User[];
  fetchedAt: string;
};

// "use cache"のみでシンプルにキャッシュ（デフォルトで15分間）
async function getCachedUsersWithTimestamp(): Promise<CachedUsersData> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const users = await res.json();

  // new Date()は通常リクエストごとに異なる値を返すが、
  // "use cache"内では初回実行時の値がキャッシュされる
  const fetchedAt = new Date().toLocaleString("ja-JP", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return { users, fetchedAt };
}

export async function CachedUsers() {
  const { users, fetchedAt } = await getCachedUsersWithTimestamp();

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

      <div className="max-h-96 space-y-3 overflow-y-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-md border border-zinc-200 p-3 dark:border-zinc-800"
          >
            <div className="font-semibold text-zinc-900 dark:text-zinc-50">
              {user.name}
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              @{user.username}
            </div>
            <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
              {user.email}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
        合計: {users.length}人のユーザー
      </div>
    </div>
  );
}
