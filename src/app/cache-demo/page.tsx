import Link from "next/link";
import { CachedTimeDisplay } from "./components/CachedTimeDisplay";
import { NonCachedTimeDisplay } from "./components/NonCachedTimeDisplay";
import { RefreshButton } from "./components/RefreshButton";

export default function CacheDemoPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Cache Components Demo
        </h1>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          &quot;use cache&quot;ディレクティブとキャッシュの動作を確認
        </p>

        <div className="space-y-8">
          {/* Cached Component */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              1. キャッシュされるコンポーネント
            </h2>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              &quot;use cache&quot;を使用したサーバーコンポーネント。15分間、同じ時刻が表示され続けます。
            </p>
            <div className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-900">
              <CachedTimeDisplay />
            </div>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
              💡 ページをリロードしても同じ時刻が表示されます（15分間キャッシュされているため）
            </p>
          </section>

          {/* Non-Cached Component (Dynamic API) */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              2. キャッシュされないコンポーネント（動的API使用）
            </h2>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              cookies()やheaders()などの動的APIを使用したコンポーネント。毎回新しい時刻が表示されます。
            </p>
            <div className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-900">
              <NonCachedTimeDisplay />
            </div>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
              💡 ページをリロードすると時刻が更新されます（動的APIによりキャッシュが無効化されるため）
            </p>
          </section>

          {/* Client Component */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              3. クライアントコンポーネントでページをリフレッシュ
            </h2>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              クライアントコンポーネントからrouter.refresh()を使用してページを更新
            </p>
            <RefreshButton />
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
              💡 ボタンをクリックすると、動的APIを使用したコンポーネントのみが更新されます
            </p>
          </section>

          {/* Explanation */}
          <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
            <h3 className="mb-3 text-xl font-semibold text-emerald-900 dark:text-emerald-50">
              📚 キャッシュの仕組み
            </h3>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>
                <strong>&quot;use cache&quot;</strong>: 関数やコンポーネントの出力をキャッシュします。
                デフォルトで15分間キャッシュされ、その後自動的に再検証されます。
                cacheLife()で期間をカスタマイズできます。
              </li>
              <li>
                <strong>動的API</strong>: cookies()、headers()、searchParamsなどを使用すると自動的にキャッシュが無効化されます
              </li>
              <li>
                <strong>router.refresh()</strong>: クライアント側からサーバーコンポーネントを再フェッチできます
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
