"use client";

import { useRouter, useSearchParams } from "next/navigation";

type UserSelectorProps = {
  selectedUserId?: string;
};

export function UserSelector({ selectedUserId }: UserSelectorProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleUserChange = (userId: string) => {
    const params = new URLSearchParams(searchParams);
    if (userId === "all") {
      params.delete("userId");
    } else {
      params.set("userId", userId);
    }
    router.push(`/data-fetching?${params.toString()}`);
  };

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <label
        htmlFor="user-select"
        className="mb-3 block text-sm font-semibold text-zinc-700 dark:text-zinc-300"
      >
        Todosを表示するユーザーを選択:
      </label>
      <select
        id="user-select"
        value={selectedUserId || "all"}
        onChange={(e) => handleUserChange(e.target.value)}
        className="w-full rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 md:w-auto"
      >
        <option value="all">すべてのユーザー</option>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((userId) => (
          <option key={userId} value={userId}>
            User {userId}
          </option>
        ))}
      </select>
      <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500">
        💡 ユーザーを変更すると、Todosコンポーネントのみが再フェッチされます（キャッシュなしのため）
      </p>
    </div>
  );
}
