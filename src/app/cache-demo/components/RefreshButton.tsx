"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function RefreshButton() {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // サーバーコンポーネントを再フェッチ
    router.refresh();
    // アニメーションのために少し待ってからリセット
    setTimeout(() => setIsRefreshing(false), 500);
  };

  return (
    <button
      onClick={handleRefresh}
      disabled={isRefreshing}
      className="rounded-md bg-zinc-900 px-6 py-3 font-semibold text-white transition-all hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
    >
      {isRefreshing ? "更新中..." : "ページをリフレッシュ"}
    </button>
  );
}
