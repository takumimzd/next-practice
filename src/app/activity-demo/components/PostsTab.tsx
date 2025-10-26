"use client";

import { use } from "react";
import type { Post } from "./types";

type PostsTabProps = {
  promise: Promise<Post[]>;
};

export function PostsTab({ promise }: PostsTabProps) {
  // useフックでPromiseを読み取る
  const posts = use(promise);

  return (
    <div className="space-y-3">
      <div className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
        合計 {posts.length} 件の投稿
      </div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              User {post.userId}
            </span>
          </div>
          <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-50">
            {post.title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {post.body}
          </p>
        </div>
      ))}
    </div>
  );
}
