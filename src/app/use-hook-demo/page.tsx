import Link from "next/link";
import { Suspense } from "react";
import { MessagePromiseExample } from "./components/MessagePromiseExample";
import { MultiplePromisesExample } from "./components/MultiplePromisesExample";
import { ConditionalContextExample } from "./components/ConditionalContextExample";

// サーバー側でPromiseを作成してクライアントに渡す
async function fetchMessage(delay: number = 1000): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return `メッセージが ${delay}ms 後に取得されました (${new Date().toLocaleTimeString("ja-JP")})`;
}

async function fetchUserData(userId: number): Promise<{ id: number; name: string; email: string }> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!response.ok) throw new Error("Failed to fetch user");
  return response.json();
}

export default function UseHookDemoPage() {
  // サーバーコンポーネントでPromiseを作成（awaitしない）
  const messagePromise = fetchMessage(1500);
  const fastMessagePromise = fetchMessage(500);
  const slowMessagePromise = fetchMessage(3000);
  const userPromise = fetchUserData(1);

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
          use Hook Demo
        </h1>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          React 19の新しい`use`フックの使い方を学ぶ
        </p>

        <div className="space-y-8">
          {/* Basic Promise Example */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              1. Promiseからデータを読む
            </h2>
            <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
              サーバーコンポーネントからPromiseを渡し、クライアントコンポーネントで`use`を使ってデータを読み取ります。
            </p>
            <Suspense
              fallback={
                <div className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-900">
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-400 border-t-zinc-700 dark:border-zinc-600 dark:border-t-zinc-300"></div>
                    メッセージを読み込み中...
                  </div>
                </div>
              }
            >
              <MessagePromiseExample messagePromise={messagePromise} />
            </Suspense>
          </section>

          {/* Multiple Promises Example */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              2. 複数のPromiseを並列で処理
            </h2>
            <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
              複数のPromiseを同時に処理し、完了したものから順に表示します。
            </p>
            <Suspense
              fallback={
                <div className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-900">
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-400 border-t-zinc-700 dark:border-zinc-600 dark:border-t-zinc-300"></div>
                    データを読み込み中...
                  </div>
                </div>
              }
            >
              <MultiplePromisesExample
                fastPromise={fastMessagePromise}
                slowPromise={slowMessagePromise}
                userPromise={userPromise}
              />
            </Suspense>
          </section>

          {/* Conditional Context Example */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              3. 条件付きでContextを読む
            </h2>
            <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
              `use`は条件文の中で呼び出せるため、`useContext`よりも柔軟です。
            </p>
            <ConditionalContextExample />
          </section>

          {/* Comparison Link */}
          <section className="rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-purple-900 dark:text-purple-50">
                  🔍 await vs use の違いを体感
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  従来のサーバーコンポーネント(await)とuseフック(streaming)の実際の違いを視覚的に比較できます
                </p>
              </div>
              <Link
                href="/use-hook-demo/comparison"
                className="whitespace-nowrap rounded-md bg-purple-600 px-6 py-3 font-semibold text-white transition-all hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600"
              >
                比較デモを見る →
              </Link>
            </div>
          </section>

          {/* Explanation */}
          <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
            <h3 className="mb-3 text-xl font-semibold text-emerald-900 dark:text-emerald-50">
              📚 useフックの特徴
            </h3>
            <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <div>
                <strong className="text-emerald-800 dark:text-emerald-200">条件文で使える:</strong>
                <p className="ml-4 text-sm">
                  他のHooksと違い、if文やループの中で`use`を呼び出せます。これにより、より柔軟なロジックが書けます。
                </p>
              </div>
              <div>
                <strong className="text-emerald-800 dark:text-emerald-200">Suspenseと連携:</strong>
                <p className="ml-4 text-sm">
                  Promiseが解決するまで、Suspenseのfallbackが表示されます。エラーはErrorBoundaryでキャッチできます。
                </p>
              </div>
              <div>
                <strong className="text-emerald-800 dark:text-emerald-200">ストリーミング:</strong>
                <p className="ml-4 text-sm">
                  サーバーコンポーネントからクライアントコンポーネントへPromiseを渡すことで、
                  データをストリーミングできます。awaitを待たずにUIを先に送信できるため、初期表示が高速化します。
                </p>
              </div>
              <div>
                <strong className="text-emerald-800 dark:text-emerald-200">制約:</strong>
                <p className="ml-4 text-sm">
                  try-catchブロックの中では使えません。エラーハンドリングはErrorBoundaryで行います。
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
