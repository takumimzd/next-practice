import { fetchUserPosts } from "../api";

type Props = {
  userId: number;
};

export async function UserPosts({ userId }: Props) {
  const posts = await fetchUserPosts(userId);

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
          Posts
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {posts.length} posts
          </span>
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-900 dark:text-orange-300">
            NO CACHE
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-md border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <h4 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-50">
              {post.title}
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
