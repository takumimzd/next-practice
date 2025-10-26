"use client";

import { use } from "react";
import type { Album } from "./types";

type AlbumsTabProps = {
  promise: Promise<Album[]>;
};

export function AlbumsTab({ promise }: AlbumsTabProps) {
  // useフックでPromiseを読み取る
  const albums = use(promise);

  return (
    <div className="space-y-3">
      <div className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
        合計 {albums.length} 件のアルバム
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {albums.map((album) => (
          <div
            key={album.id}
            className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                User {album.userId}
              </span>
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              📸 {album.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
