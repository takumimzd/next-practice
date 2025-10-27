import type { Post, PaginatedResponse } from "./types";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const TOTAL_POSTS = 100;

/**
 * Server Component用の初期データ取得関数
 *
 * Next.js v16の "use cache" ディレクティブを使用して、
 * 初期表示時（第1ページ）のデータをビルド時にプリレンダリングします。
 *
 * これにより以下を実現:
 * - SEO対応（HTMLに初期データが含まれる）
 * - Fast First Paint（サーバー側でレンダリング済み）
 * - キャッシュによる高速な初期表示
 */
export async function fetchInitialPosts(
  page: number = 1,
  limit: number = 10
): Promise<PaginatedResponse<Post>> {
  "use cache";

  // 模擬的な遅延を追加
  await new Promise((resolve) => setTimeout(resolve, 800))

  const res = await fetch(
    `${BASE_URL}/posts?_page=${page}&_limit=${limit}`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.statusText}`);
  }

  const posts: Post[] = await res.json();

  return {
    data: posts,
    pagination: {
      page,
      limit,
      total: TOTAL_POSTS,
      hasMore: page * limit < TOTAL_POSTS,
    },
  };
}
