import { cookies } from "next/headers";

// このコンポーネントはcookies()という動的APIを使用しているため、
// 自動的にキャッシュが無効化されます
export async function NonCachedTimeDisplay() {
  // cookies()を呼び出すことで、このコンポーネントは動的になり、
  // キャッシュされなくなります
  const cookieStore = await cookies();
  const userAgent = cookieStore.get("user-agent");

  // サーバー側で実行される重い処理をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 100));

  const currentTime = new Date().toLocaleString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <div>
      <div className="mb-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
        動的に生成された時刻:
      </div>
      <div className="text-2xl font-mono font-bold text-zinc-900 dark:text-zinc-50">
        {currentTime}
      </div>
      <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
        コンポーネントレンダリング時刻（毎回更新されます）
      </div>
      {userAgent && (
        <div className="mt-3 text-xs text-zinc-400 dark:text-zinc-600">
          User Agent Cookie: {userAgent.value}
        </div>
      )}
    </div>
  );
}
