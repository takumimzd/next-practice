import { NextRequest, NextResponse } from "next/server";
import type { Post, PaginatedResponse } from "@/app/pagination-demo/types";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const TOTAL_POSTS = 100; // JSONPlaceholderの総投稿数

/**
 * クライアント側からのページネーション用APIルート
 *
 * GET /api/posts?page=2&limit=10
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  try {
    // JSONPlaceholder APIは_page と _limit パラメータでページネーションをサポート
    const res = await fetch(
      `${BASE_URL}/posts?_page=${page}&_limit=${limit}`,
      {
        cache: "no-store", // クライアント側のページネーションは常に最新データを取得
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }

    const posts: Post[] = await res.json();

    const response: PaginatedResponse<Post> = {
      data: posts,
      pagination: {
        page,
        limit,
        total: TOTAL_POSTS,
        hasMore: page * limit < TOTAL_POSTS,
      },
    };

    // 模擬的な遅延を追加（ネットワーク遅延をシミュレート）
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
