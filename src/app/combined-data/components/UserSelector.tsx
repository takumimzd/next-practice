"use client";

import { useRouter, useSearchParams } from "next/navigation";

type UserSelectorProps = {
  selectedUserId: number;
};

export function UserSelector({ selectedUserId }: UserSelectorProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleUserChange = (userId: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("userId", userId);
    router.push(`/combined-data?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="user-select"
        className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
      >
        ユーザーを選択:
      </label>
      <select
        id="user-select"
        value={selectedUserId}
        onChange={(e) => handleUserChange(e.target.value)}
        className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50"
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
          <option key={id} value={id}>
            User {id}
          </option>
        ))}
      </select>
    </div>
  );
}
