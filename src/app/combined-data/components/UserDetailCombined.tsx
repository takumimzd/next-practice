import {
  fetchUser,
  fetchUserPosts,
  fetchUserTodos,
  fetchUserAlbums,
} from "../api";

type Props = {
  userId: number;
};

/**
 * 1つのコンポーネント内で複数のAPIを並列に取得するパターン
 *
 * Promise.all()を使用して4つのAPIを同時に取得し、
 * すべてのデータが揃ってから1つの統合UIをレンダリングします。
 *
 * メリット:
 * - シンプルなコード構造
 * - すべてのデータが同時に表示される
 * - データ間の整合性が保証される
 *
 * デメリット:
 * - 最も遅いAPIがボトルネックになる
 * - 一部のAPIが失敗すると全体が表示されない
 */
export async function UserDetailCombined({ userId }: Props) {
  // 複数のAPIを並列で取得（Promise.all）
  const [user, posts, todos, albums] = await Promise.all([
    fetchUser(userId),
    fetchUserPosts(userId),
    fetchUserTodos(userId),
    fetchUserAlbums(userId),
  ]);

  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <div className="space-y-6">
      {/* User Info Section */}
      <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {user.name}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              @{user.username}
            </p>
          </div>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900 dark:text-purple-300">
            ALL IN ONE
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-zinc-500">📧</span>
              <div>
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {user.email}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-zinc-500">📱</span>
              <div>
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Phone
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {user.phone}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-zinc-500">🌐</span>
              <div>
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Website
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {user.website}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-zinc-500">📍</span>
              <div>
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Address
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {user.address.suite} {user.address.street},{" "}
                  {user.address.city} {user.address.zipcode}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-zinc-500">🏢</span>
              <div>
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Company
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {user.company.name}
                </div>
                <div className="text-xs italic text-zinc-500 dark:text-zinc-500">
                  &quot;{user.company.catchPhrase}&quot;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-zinc-200 bg-gradient-to-br from-blue-50 to-blue-100 p-4 dark:border-zinc-700 dark:from-blue-950 dark:to-blue-900">
          <div className="text-3xl font-bold text-blue-900 dark:text-blue-50">
            {posts.length}
          </div>
          <div className="text-sm font-medium text-blue-700 dark:text-blue-300">
            Posts
          </div>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-gradient-to-br from-green-50 to-green-100 p-4 dark:border-zinc-700 dark:from-green-950 dark:to-green-900">
          <div className="text-3xl font-bold text-green-900 dark:text-green-50">
            {completedTodos}/{todos.length}
          </div>
          <div className="text-sm font-medium text-green-700 dark:text-green-300">
            Todos Completed
          </div>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-gradient-to-br from-purple-50 to-purple-100 p-4 dark:border-zinc-700 dark:from-purple-950 dark:to-purple-900">
          <div className="text-3xl font-bold text-purple-900 dark:text-purple-50">
            {albums.length}
          </div>
          <div className="text-sm font-medium text-purple-700 dark:text-purple-300">
            Albums
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Posts */}
        <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
          <h3 className="mb-4 text-lg font-bold text-zinc-900 dark:text-zinc-50">
            Recent Posts
          </h3>
          <div className="space-y-3">
            {posts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="rounded-md border border-zinc-100 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-900"
              >
                <h4 className="mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {post.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  {post.body.slice(0, 100)}...
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Todos */}
        <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
          <h3 className="mb-4 text-lg font-bold text-zinc-900 dark:text-zinc-50">
            Recent Todos
          </h3>
          <div className="space-y-2">
            {todos.slice(0, 5).map((todo) => (
              <div
                key={todo.id}
                className="flex items-start gap-2 rounded-md border border-zinc-100 bg-zinc-50 p-2 dark:border-zinc-700 dark:bg-zinc-900"
              >
                <div
                  className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border-2 ${
                    todo.completed
                      ? "border-green-500 bg-green-500"
                      : "border-zinc-300 dark:border-zinc-600"
                  }`}
                >
                  {todo.completed && (
                    <svg
                      className="h-2.5 w-2.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-xs ${
                    todo.completed
                      ? "text-zinc-400 line-through dark:text-zinc-500"
                      : "text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  {todo.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Albums */}
        <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 lg:col-span-2">
          <h3 className="mb-4 text-lg font-bold text-zinc-900 dark:text-zinc-50">
            Albums
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {albums.slice(0, 8).map((album) => (
              <div
                key={album.id}
                className="rounded-md border border-zinc-100 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-900"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xl">📸</span>
                  <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    #{album.id}
                  </span>
                </div>
                <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  {album.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
