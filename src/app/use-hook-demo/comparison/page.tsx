import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";
import { ServerComponentApproach } from "./components/ServerComponentApproach";
import { UseHookApproach } from "./components/UseHookApproach";

// 遅延をシミュレートするfetch関数
async function slowFetch<T>(url: string, delay: number = 2000): Promise<T> {
  await new Promise((resolve) => setTimeout(resolve, delay));
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default async function ComparisonPage() {
  // このページは動的にレンダリングされる必要があるため、connection()を呼び出す
  // これにより、Date.now()を使用できるようになる
  await connection();

  // use方式: Promiseを作成（awaitしない）
  const todosPromise = slowFetch<
    Array<{ id: number; title: string; completed: boolean }>
  >("https://jsonplaceholder.typicode.com/todos?_limit=5", 2000);

  const startTime = Date.now();

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/use-hook-demo"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to use Hook Demo
        </Link>

        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          データ取得方式の比較
        </h1>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          サーバーコンポーネント(await) vs use Hook(streaming)の違いを体感
        </p>

        {/* 重要な注意 */}
        <section className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950">
          <div className="flex gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="mb-2 font-semibold text-amber-900 dark:text-amber-50">
                重要: どちらもSuspenseでストリーミング可能
              </h3>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                両方式ともSuspenseで囲むことで、ページの他の部分は即座に表示されます。
                違いは<strong>「どこで処理するか」</strong>です。
              </p>
            </div>
          </div>
        </section>

        {/* タイムライン説明 */}
        <section className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
          <h2 className="mb-4 text-xl font-semibold text-blue-900 dark:text-blue-50">
            📊 処理フローの違い
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Server Component Timeline */}
            <div>
              <h3 className="mb-3 font-semibold text-blue-800 dark:text-blue-200">
                方式1: サーバーコンポーネント (await) + Suspense
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-600 text-center text-white">
                    1
                  </div>
                  <span className="text-blue-900 dark:text-blue-100">
                    ページHTMLを即座に送信
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-600 text-center text-white">
                    2
                  </div>
                  <span className="text-blue-900 dark:text-blue-100">
                    <strong>サーバー側</strong>でデータ取得 (2秒)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-600 text-center text-white">
                    3
                  </div>
                  <span className="text-blue-900 dark:text-blue-100">
                    <strong>サーバー側</strong>でHTMLレンダリング
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-600 text-center text-white">
                    4
                  </div>
                  <span className="text-blue-900 dark:text-blue-100">
                    完成したHTMLをストリーミング送信
                  </span>
                </div>
              </div>
              <div className="mt-4 rounded-md bg-blue-100 p-3 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                ✅ サーバーで処理完結（JavaScriptなしでも動作）<br/>
                ⚠️ サーバーの処理負荷
              </div>
            </div>

            {/* use Hook Timeline */}
            <div>
              <h3 className="mb-3 font-semibold text-emerald-800 dark:text-emerald-200">
                方式2: use Hook (client) + Suspense
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-emerald-600 text-center text-white">
                    1
                  </div>
                  <span className="text-emerald-900 dark:text-emerald-100">
                    ページHTMLを即座に送信
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-emerald-600 text-center text-white">
                    2
                  </div>
                  <span className="text-emerald-900 dark:text-emerald-100">
                    Promiseをシリアライズして送信
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-emerald-600 text-center text-white">
                    3
                  </div>
                  <span className="text-emerald-900 dark:text-emerald-100">
                    <strong>クライアント側</strong>でデータ受信
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-emerald-600 text-center text-white">
                    4
                  </div>
                  <span className="text-emerald-900 dark:text-emerald-100">
                    <strong>JavaScriptで</strong>DOM更新
                  </span>
                </div>
              </div>
              <div className="mt-4 rounded-md bg-emerald-100 p-3 text-xs text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                ✅ サーバー負荷軽減、クライアント側で処理<br/>
                ⚠️ JavaScriptが必要
              </div>
            </div>
          </div>
        </section>

        {/* 実際の比較 */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Server Component Approach */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                方式1: await
              </h2>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                SERVER
              </span>
            </div>
            <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
              サーバーコンポーネントでawaitを使用。データ取得完了まで待ってからHTMLを送信します。
            </p>
            <Suspense
              fallback={
                <div className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-900">
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-400 border-t-zinc-700"></div>
                    ページ全体を読み込み中...
                  </div>
                </div>
              }
            >
              <ServerComponentApproach startTime={startTime} />
            </Suspense>
          </section>

          {/* use Hook Approach */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                方式2: use
              </h2>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                STREAMING
              </span>
            </div>
            <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
              useフックでPromiseを読み取り。HTMLは即座に送信され、データは後から表示されます。
            </p>
            <Suspense
              fallback={
                <div className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-900">
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-400 border-t-zinc-700"></div>
                    データを読み込み中...（HTMLは既に表示済み）
                  </div>
                </div>
              }
            >
              <UseHookApproach
                promise={todosPromise}
                startTime={startTime}
              />
            </Suspense>
          </section>
        </div>

        {/* Date.now() Warning */}
        <section className="mt-8 rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950">
          <h3 className="mb-3 text-xl font-semibold text-red-900 dark:text-red-50">
            ⚠️ サーバーコンポーネントでDate.now()を使う際の注意
          </h3>
          <div className="space-y-3 text-sm text-red-900 dark:text-red-100">
            <p>
              Next.js 16では、サーバーコンポーネントで<code className="rounded bg-red-100 px-1 dark:bg-red-900">Date.now()</code>を使う前に、
              動的APIにアクセスする必要があります。
            </p>
            <div className="rounded-md bg-red-100 p-3 dark:bg-red-900">
              <p className="mb-2 font-semibold">エラーメッセージ:</p>
              <code className="text-xs">
                Route used `Date.now()` before accessing uncached data...
              </code>
            </div>
            <div>
              <p className="mb-2 font-semibold">解決方法:</p>
              <ul className="ml-6 list-disc space-y-1 text-red-800 dark:text-red-200">
                <li><code className="rounded bg-red-100 px-1 dark:bg-red-900">await connection()</code>を呼び出す（このページで使用）</li>
                <li><code className="rounded bg-red-100 px-1 dark:bg-red-900">cookies()</code>、<code className="rounded bg-red-100 px-1 dark:bg-red-900">headers()</code>などの動的APIを使用</li>
                <li>クライアントコンポーネントに移動</li>
              </ul>
            </div>
            <p className="text-xs text-red-700 dark:text-red-300">
              💡 このページでは、<code className="rounded bg-red-100 px-1 dark:bg-red-900">await connection()</code>を使用して動的レンダリングを明示しています。
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
          <h3 className="mb-3 text-xl font-semibold text-amber-900 dark:text-amber-50">
            🎯 どちらを使うべき？
          </h3>
          <div className="space-y-4 text-sm text-amber-900 dark:text-amber-100">
            <div>
              <strong className="text-amber-800 dark:text-amber-200">
                サーバーコンポーネント(await) + Suspense:
              </strong>
              <ul className="ml-6 mt-2 list-disc space-y-1 text-amber-800 dark:text-amber-200">
                <li>✅ シンプルな実装（async/awaitだけ）</li>
                <li>✅ JavaScriptなしでも動作（SEO最適）</li>
                <li>✅ サーバーでHTMLが完成するため安全</li>
                <li>⚠️ サーバーの処理負荷が高い</li>
                <li>⚠️ クライアント側でのインタラクションは別途必要</li>
              </ul>
            </div>
            <div>
              <strong className="text-amber-800 dark:text-amber-200">
                use Hook + Suspense:
              </strong>
              <ul className="ml-6 mt-2 list-disc space-y-1 text-amber-800 dark:text-amber-200">
                <li>✅ サーバー負荷を軽減（クライアント側で処理）</li>
                <li>✅ インタラクティブなUIと組み合わせやすい</li>
                <li>✅ 条件付きでデータを読み取れる（if文内など）</li>
                <li>⚠️ JavaScriptが必須</li>
                <li>⚠️ クライアントコンポーネントが必要（やや複雑）</li>
              </ul>
            </div>
            <div className="mt-4 rounded-md bg-amber-100 p-3 dark:bg-amber-900">
              <p className="text-xs font-semibold text-amber-900 dark:text-amber-100">
                💡 結論:
              </p>
              <p className="mt-1 text-xs text-amber-800 dark:text-amber-200">
                <strong>基本的にはサーバーコンポーネント(await)</strong>を使用し、
                クライアント側でのインタラクションが必要な場合や、
                条件付きでデータを読み取りたい場合に<strong>use</strong>を検討しましょう。
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
