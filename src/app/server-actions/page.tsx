import Link from "next/link";
import { SubmitButton } from "./components/SubmitButton";
import { addUser } from "./actions";
import { getUsers } from "./data";

export default function ServerActionsPage() {
  // データストアからユーザーを取得
  const users = getUsers();
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
          Server Actions Demo
        </h1>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          Server Actionsを使ったフォーム実装のデモ
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form Section */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              ユーザー登録フォーム
            </h2>

            <form action={addUser} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                  placeholder="yamada@example.com"
                />
              </div>

              <SubmitButton />
            </form>

            <div className="mt-6 rounded-md bg-blue-50 p-4 dark:bg-blue-950">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                💡 このフォームはServer Actionsを使用しています。JavaScriptが無効でも動作します！
              </p>
            </div>
          </section>

          {/* User List Section */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              登録済みユーザー
            </h2>

            {users.length === 0 ? (
              <p className="text-zinc-500 dark:text-zinc-500">
                まだユーザーが登録されていません
              </p>
            ) : (
              <div className="space-y-4">
                {users.map((user) => (
                  <div
                    key={user.id}
                    className="rounded-md border border-zinc-200 p-4 dark:border-zinc-800"
                  >
                    <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {user.name}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      {user.email}
                    </div>
                    <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
                      登録日時: {user.createdAt.toLocaleString("ja-JP")}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Other Examples */}
        <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/server-actions/next-safe-action"
            className="group block rounded-lg border border-blue-200 bg-blue-50 p-6 transition-all hover:border-blue-300 hover:shadow-lg dark:border-blue-900 dark:bg-blue-950 dark:hover:border-blue-700"
          >
            <h3 className="mb-2 text-xl font-semibold text-blue-900 dark:text-blue-50">
              next-safe-action + RHF
            </h3>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              型安全なServer Actionsとリアルタイムバリデーション
            </p>
            <ul className="mt-4 space-y-1 text-xs text-blue-600 dark:text-blue-400">
              <li>✅ 型安全</li>
              <li>✅ useActionフック</li>
              <li>✅ 複雑なフォーム向け</li>
            </ul>
          </Link>

          <Link
            href="/server-actions/react-hook-form"
            className="group block rounded-lg border border-green-200 bg-green-50 p-6 transition-all hover:border-green-300 hover:shadow-lg dark:border-green-900 dark:bg-green-950 dark:hover:border-green-700"
          >
            <h3 className="mb-2 text-xl font-semibold text-green-900 dark:text-green-50">
              RHF + Server Actions
            </h3>
            <p className="text-sm text-green-700 dark:text-green-300">
              シンプルにreact-hook-formとServer Actionsを組み合わせる
            </p>
            <ul className="mt-4 space-y-1 text-xs text-green-600 dark:text-green-400">
              <li>✅ シンプル</li>
              <li>✅ リアルタイムバリデーション</li>
              <li>✅ useTransition</li>
            </ul>
          </Link>

          <Link
            href="/server-actions/conform"
            className="group block rounded-lg border border-purple-200 bg-purple-50 p-6 transition-all hover:border-purple-300 hover:shadow-lg dark:border-purple-900 dark:bg-purple-950 dark:hover:border-purple-700"
          >
            <h3 className="mb-2 text-xl font-semibold text-purple-900 dark:text-purple-50">
              Conform
            </h3>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              プログレッシブエンハンスメントとアクセシビリティ重視
            </p>
            <ul className="mt-4 space-y-1 text-xs text-purple-600 dark:text-purple-400">
              <li>✅ JS無効でも動作</li>
              <li>✅ アクセシビリティ対応</li>
              <li>✅ サーバー優先</li>
            </ul>
          </Link>
        </section>

        {/* Explanation */}
        <section className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <h3 className="mb-3 text-xl font-semibold text-emerald-900 dark:text-emerald-50">
            📚 Server Actionsの仕組み
          </h3>
          <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>
              <strong>フォーム送信</strong>: formのaction属性にServer Actionを指定するだけで使用できます
            </li>
            <li>
              <strong>サーバーサイド処理</strong>: データの検証や保存などの処理をサーバー側で安全に実行できます
            </li>
            <li>
              <strong>プログレッシブエンハンスメント</strong>: JavaScriptが無効でも動作します
            </li>
            <li>
              <strong>自動再検証</strong>: revalidatePath()を使用してページデータを自動的に更新できます
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
