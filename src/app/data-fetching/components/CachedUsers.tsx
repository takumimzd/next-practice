type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
};

// "use cache"でユーザーデータのみをキャッシュ
async function getCachedUsers(): Promise<User[]> {
  "use cache";

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache", // Next.js 15ではfetchのデフォルトがno-cacheなので明示的に指定
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

// キャッシュされた時刻を取得する関数（こちらもキャッシュ）
async function getCachedTimestamp(): Promise<string> {
  "use cache";

  return new Date().toLocaleString("ja-JP", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export async function CachedUsers() {
  const users = await getCachedUsers();
  const fetchedAt = await getCachedTimestamp();

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
