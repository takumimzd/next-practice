import Link from "next/link";
import { connection } from "next/server";
import { TabsDemoWithActivity } from "./components/TabsDemoWithActivity";

// 各タブ用のデータ取得関数
async function fetchUsers() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

async function fetchPosts() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

async function fetchAlbums() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums?_limit=10",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch albums");
  return res.json();
}

export default async function ActivityDemoPage() {
  // 動的レンダリングを明示
  await connection();

  // 各タブのデータをPromiseとして作成（awaitしない）
  const usersPromise = fetchUsers();
  const postsPromise = fetchPosts();
  const albumsPromise = fetchAlbums();

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          React 19 Activity Demo
        </h1>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          &lt;Activity&gt;コンポーネントを使ったタブ切り替えと状態保持
        </p>

        {/* Explanation */}
        <section className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <h2 className="mb-3 text-xl font-semibold text-emerald-900 dark:text-emerald-50">
            📚 &lt;Activity&gt;とは？
          </h2>
          <div className="space-y-3 text-sm text-emerald-900 dark:text-emerald-100">
            <p>
              <strong className="text-emerald-800 dark:text-emerald-200">&lt;Activity&gt;</strong>
              は、React 19で導入された新しいコンポーネントで、非表示のコンテンツの状態とDOMを保持します。
            </p>
            <div className="rounded-md bg-emerald-100 p-3 dark:bg-emerald-900">
              <p className="mb-2 font-semibold">主な特徴:</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>非表示時も状態とDOMツリーを保持（display: noneで隠す）</li>
                <li>タブ切り替えやアコーディオンなどで再レンダリングを回避</li>
                <li>スクロール位置やフォーム入力などが失われない</li>
                <li>一度ロードしたコンテンツは即座に再表示</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tabs Demo with Activity */}
        <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-emerald-900 dark:text-emerald-50">
              &lt;Activity&gt;を使ったタブ実装
            </h2>
            <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white dark:bg-emerald-700">
              React 19
            </span>
          </div>
          <TabsDemoWithActivity
            usersPromise={usersPromise}
            postsPromise={postsPromise}
            albumsPromise={albumsPromise}
          />
        </section>

        {/* Code Example */}
        <section className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <h3 className="mb-3 text-xl font-semibold text-emerald-900 dark:text-emerald-50">
            💻 実装例
          </h3>
          <div className="space-y-4 text-sm text-emerald-900 dark:text-emerald-100">
            <p>
              すべてのタブを同時にレンダリングし、<code>mode</code>プロパティで表示/非表示を切り替えます。
            </p>
            <pre className="overflow-x-auto rounded-md bg-emerald-100 p-4 dark:bg-emerald-900">
              <code>{`const [activeTab, setActiveTab] = useState('users');

// すべてのタブをレンダリングし、modeで表示/非表示を切り替え
<Activity mode={activeTab === 'users' ? 'visible' : 'hidden'}>
  <Suspense fallback={<Loading />}>
    <UsersTab promise={usersPromise} />
  </Suspense>
</Activity>

<Activity mode={activeTab === 'posts' ? 'visible' : 'hidden'}>
  <Suspense fallback={<Loading />}>
    <PostsTab promise={postsPromise} />
  </Suspense>
</Activity>

<Activity mode={activeTab === 'albums' ? 'visible' : 'hidden'}>
  <Suspense fallback={<Loading />}>
    <AlbumsTab promise={albumsPromise} />
  </Suspense>
</Activity>

// 状態とDOMが保持されるため、再表示が高速！
// スクロール位置やフォーム入力も失われない`}</code>
            </pre>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
          <h3 className="mb-3 text-xl font-semibold text-amber-900 dark:text-amber-50">
            🎯 条件付きレンダリング vs &lt;Activity&gt;
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-amber-300 dark:border-amber-700">
                  <th className="p-2 text-left font-semibold text-amber-800 dark:text-amber-200">特徴</th>
                  <th className="p-2 text-left font-semibold text-amber-800 dark:text-amber-200">条件付きレンダリング</th>
                  <th className="p-2 text-left font-semibold text-amber-800 dark:text-amber-200">&lt;Activity&gt;</th>
                </tr>
              </thead>
              <tbody className="text-amber-900 dark:text-amber-100">
                <tr className="border-b border-amber-200 dark:border-amber-800">
                  <td className="p-2 font-semibold">状態保持</td>
                  <td className="p-2">❌ 切替時にアンマウント・リセット</td>
                  <td className="p-2">✅ 状態とDOMを完全保持</td>
                </tr>
                <tr className="border-b border-amber-200 dark:border-amber-800">
                  <td className="p-2 font-semibold">再表示速度</td>
                  <td className="p-2">🔄 毎回再レンダリング・データ取得</td>
                  <td className="p-2">⚡ 即座に表示（display切替のみ）</td>
                </tr>
                <tr className="border-b border-amber-200 dark:border-amber-800">
                  <td className="p-2 font-semibold">スクロール位置</td>
                  <td className="p-2">❌ リセットされる</td>
                  <td className="p-2">✅ 保持される</td>
                </tr>
                <tr className="border-b border-amber-200 dark:border-amber-800">
                  <td className="p-2 font-semibold">メモリ使用量</td>
                  <td className="p-2">✅ 低い（表示中のみ保持）</td>
                  <td className="p-2">⚠️ 高い（全コンテンツ保持）</td>
                </tr>
                <tr className="border-b border-amber-200 dark:border-amber-800">
                  <td className="p-2 font-semibold">SEO</td>
                  <td className="p-2">⚠️ 非表示コンテンツは不可視</td>
                  <td className="p-2">✅ 全コンテンツがDOMに存在</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">推奨用途</td>
                  <td className="p-2">多数のタブ、重いコンテンツ</td>
                  <td className="p-2">少数のタブ、UX重視</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
