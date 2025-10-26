"use client";

import { use } from "react";
import type { User } from "./types";

type UsersTabProps = {
  promise: Promise<User[]>;
};

export function UsersTab({ promise }: UsersTabProps) {
  // useフックでPromiseを読み取る
  const users = use(promise);

  return (
    <div className="space-y-3">
      <div className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
        合計 {users.length} 人のユーザー
      </div>
      {users.map((user) => (
        <div
          key={user.id}
          className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="font-semibold text-zinc-900 dark:text-zinc-50">
              {user.name}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-500">
              @{user.username}
            </div>
          </div>
          <div className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">📧</span>
              {user.email}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">📱</span>
              {user.phone}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">🌐</span>
              {user.website}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
