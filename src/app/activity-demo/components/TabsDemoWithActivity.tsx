"use client";

import { useState, Suspense, Activity } from "react";
import { UsersTab } from "./UsersTab";
import { PostsTab } from "./PostsTab";
import { AlbumsTab } from "./AlbumsTab";
import type { User, Post, Album } from "./types";

type TabsDemoWithActivityProps = {
  usersPromise: Promise<User[]>;
  postsPromise: Promise<Post[]>;
  albumsPromise: Promise<Album[]>;
};

type TabId = "users" | "posts" | "albums";

const tabs = [
  { id: "users" as TabId, label: "Users", delay: "1秒" },
  { id: "posts" as TabId, label: "Posts", delay: "1.5秒" },
  { id: "albums" as TabId, label: "Albums", delay: "2秒" },
];

/**
 * React 19の<Activity>を使ったタブ実装
 *
 * 特徴:
 * - タブを切り替えても、非表示のタブの状態が保持される
 * - DOMも保持されるため、スクロール位置なども維持
 * - useTransitionと違い、一度ロードしたタブは即座に表示される
 */
export function TabsDemoWithActivity({
  usersPromise,
  postsPromise,
  albumsPromise,
}: TabsDemoWithActivityProps) {
  const [activeTab, setActiveTab] = useState<TabId>("users");

  return (
    <div>
      {/* Tab Headers */}
      <div className="mb-6 flex gap-2 border-b border-zinc-200 dark:border-zinc-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-3 font-semibold transition-all ${
              activeTab === tab.id
                ? "text-zinc-900 dark:text-zinc-50"
                : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
            }`}
          >
            <span className="flex items-center gap-2">
              {tab.label}
              <span className="text-xs text-zinc-400 dark:text-zinc-600">
                ({tab.delay})
              </span>
            </span>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-zinc-50"></div>
            )}
          </button>
        ))}
      </div>

      {/*
        <Activity>を使うことで、非表示のタブもDOMと状態が保持されます
        最初のロード後は、タブ切り替えが即座に行われます
      */}

      {/* Users Tab */}
      <Activity mode={activeTab === "users" ? "visible" : "hidden"}>
        <Suspense
          fallback={
            <TabLoadingFallback
              title="Users"
              message="ユーザーデータを読み込み中..."
            />
          }
        >
          <UsersTab promise={usersPromise} />
        </Suspense>
      </Activity>

      {/* Posts Tab */}
      <Activity mode={activeTab === "posts" ? "visible" : "hidden"}>
        <Suspense
          fallback={
            <TabLoadingFallback
              title="Posts"
              message="投稿データを読み込み中..."
            />
          }
        >
          <PostsTab promise={postsPromise} />
        </Suspense>
      </Activity>

      {/* Albums Tab */}
      <Activity mode={activeTab === "albums" ? "visible" : "hidden"}>
        <Suspense
          fallback={
            <TabLoadingFallback
              title="Albums"
              message="アルバムデータを読み込み中..."
            />
          }
        >
          <AlbumsTab promise={albumsPromise} />
        </Suspense>
      </Activity>

      {/* Info */}
      <div className="mt-6 rounded-md bg-emerald-50 p-4 text-xs dark:bg-emerald-950">
        <div className="mb-2 font-semibold text-emerald-700 dark:text-emerald-300">
          ✨ &lt;Activity&gt;の効果:
        </div>
        <div className="space-y-1 text-emerald-800 dark:text-emerald-200">
          <div>
            ✅ 一度ロードしたタブは、再度クリックすると即座に表示されます
          </div>
          <div>
            ✅ タブを切り替えても、スクロール位置や状態が保持されます
          </div>
          <div>
            ✅ 非表示のタブもDOMに残っているため、SEOにも有利です
          </div>
        </div>
      </div>

      {/* Status Info */}
      <div className="mt-6 rounded-md bg-zinc-100 p-4 text-xs dark:bg-zinc-900">
        <div className="mb-2 font-semibold text-zinc-700 dark:text-zinc-300">
          📊 現在の状態:
        </div>
        <div className="space-y-1 text-zinc-600 dark:text-zinc-400">
          <div>
            アクティブタブ: <strong>{activeTab}</strong>
          </div>
          <div>
            すべてのタブがDOMに存在し、非表示のタブは <code>display: none</code> で隠されています
          </div>
        </div>
      </div>
    </div>
  );
}

function TabLoadingFallback({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center gap-3">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-700 dark:border-zinc-700 dark:border-t-zinc-300"></div>
        <div>
          <div className="font-semibold text-zinc-900 dark:text-zinc-50">
            {title}
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}
