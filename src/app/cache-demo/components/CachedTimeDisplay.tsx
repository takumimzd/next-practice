"use cache";

// このコンポーネントは "use cache" ディレクティブを使用しているため、
// 出力がキャッシュされます
export async function CachedTimeDisplay() {
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
        キャッシュされた時刻:
      </div>
      <div className="text-2xl font-mono font-bold text-zinc-900 dark:text-zinc-50">
        {currentTime}
      </div>
      <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
        コンポーネントレンダリング時刻（15分間キャッシュされます）
      </div>
    </div>
  );
}
