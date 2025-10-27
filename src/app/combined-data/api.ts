import { unstable_cache } from "next/cache";
import type { User, Post, Todo, Album } from "./types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

/**
 * ユーザー情報を取得（キャッシュあり: 15分）
 */
export const fetchUser = unstable_cache(
  async (userId: number): Promise<User> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const res = await fetch(`${BASE_URL}/users/${userId}`);
    if (!res.ok) throw new Error(`Failed to fetch user ${userId}`);
    return res.json();
  },
  ["user"],
  { revalidate: 900, tags: ["user"] }
);

/**
 * ユーザーの投稿を取得（キャッシュなし: 常に最新）
 */
export async function fetchUserPosts(userId: number): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  const res = await fetch(`${BASE_URL}/posts?userId=${userId}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to fetch posts for user ${userId}`);
  return res.json();
}

/**
 * ユーザーのタスクを取得（キャッシュあり: 5分）
 */
export const fetchUserTodos = unstable_cache(
  async (userId: number): Promise<Todo[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch(`${BASE_URL}/todos?userId=${userId}`);
    if (!res.ok) throw new Error(`Failed to fetch todos for user ${userId}`);
    return res.json();
  },
  ["user-todos"],
  { revalidate: 300, tags: ["todos"] }
);

/**
 * ユーザーのアルバムを取得（キャッシュあり: 10分）
 */
export const fetchUserAlbums = unstable_cache(
  async (userId: number): Promise<Album[]> => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const res = await fetch(`${BASE_URL}/albums?userId=${userId}`);
    if (!res.ok) throw new Error(`Failed to fetch albums for user ${userId}`);
    return res.json();
  },
  ["user-albums"],
  { revalidate: 600, tags: ["albums"] }
);
