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

        {/* Comparison Table */}
        <section className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
          <h3 className="mb-6 text-2xl font-bold text-amber-900 dark:text-amber-50">
            🔍 各アプローチの比較
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-amber-300 dark:border-amber-700">
                  <th className="p-3 text-left font-semibold text-amber-900 dark:text-amber-50">項目</th>
                  <th className="p-3 text-left font-semibold text-blue-900 dark:text-blue-50">
                    next-safe-action + RHF
                  </th>
                  <th className="p-3 text-left font-semibold text-green-900 dark:text-green-50">
                    RHF + Server Actions
                  </th>
                  <th className="p-3 text-left font-semibold text-purple-900 dark:text-purple-50">
                    Conform
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-200 dark:divide-amber-800">
                <tr>
                  <td className="p-3 font-medium text-amber-900 dark:text-amber-100">型安全性</td>
                  <td className="p-3 text-blue-800 dark:text-blue-200">
                    <strong>⭐⭐⭐</strong>
                    <br />
                    スキーマベースで完全な型推論
                  </td>
                  <td className="p-3 text-green-800 dark:text-green-200">
                    <strong>⭐⭐</strong>
                    <br />
                    手動で型定義が必要
                  </td>
                  <td className="p-3 text-purple-800 dark:text-purple-200">
                    <strong>⭐⭐</strong>
                    <br />
                    スキーマベースだが型アサーションが必要
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-amber-900 dark:text-amber-100">
                    クライアント側バリデーション
                  </td>
                  <td className="p-3 text-blue-800 dark:text-blue-200">
                    <strong>リアルタイム</strong>
                    <br />
                    onChange/onBlurで即座に検証
                  </td>
                  <td className="p-3 text-green-800 dark:text-green-200">
                    <strong>リアルタイム</strong>
                    <br />
                    onChange/onBlurで即座に検証
                  </td>
                  <td className="p-3 text-purple-800 dark:text-purple-200">
                    <strong>onBlur/onInput</strong>
                    <br />
                    デフォルトはonBlur（カスタマイズ可能）
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-amber-900 dark:text-amber-100">
                    サーバー側バリデーション
                  </td>
                  <td className="p-3 text-blue-800 dark:text-blue-200">
                    <strong>自動</strong>
                    <br />
                    .schema()で自動実行
                  </td>
                  <td className="p-3 text-green-800 dark:text-green-200">
                    <strong>手動</strong>
                    <br />
                    safeParse()を明示的に呼び出し
                  </td>
                  <td className="p-3 text-purple-800 dark:text-purple-200">
                    <strong>自動</strong>
                    <br />
                    parseWithZod()で自動実行
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-amber-900 dark:text-amber-100">
                    プログレッシブエンハンスメント
                  </td>
                  <td className="p-3 text-blue-800 dark:text-blue-200">
                    <strong>❌</strong>
                    <br />
                    JavaScript必須
                  </td>
                  <td className="p-3 text-green-800 dark:text-green-200">
                    <strong>❌</strong>
                    <br />
                    JavaScript必須
                  </td>
                  <td className="p-3 text-purple-800 dark:text-purple-200">
                    <strong>✅</strong>
                    <br />
                    JavaScript無効でも動作
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-amber-900 dark:text-amber-100">ローディング状態</td>
                  <td className="p-3 text-blue-800 dark:text-blue-200">
                    <strong>useAction</strong>
                    <br />
                    isExecutingで管理
                  </td>
                  <td className="p-3 text-green-800 dark:text-green-200">
                    <strong>useTransition</strong>
                    <br />
                    isPendingで管理
                  </td>
                  <td className="p-3 text-purple-800 dark:text-purple-200">
                    <strong>useFormState</strong>
                    <br />
                    React標準のフック使用
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-amber-900 dark:text-amber-100">学習コスト</td>
                  <td className="p-3 text-blue-800 dark:text-blue-200">
                    <strong>高</strong>
                    <br />
                    2つのライブラリを学ぶ必要
                  </td>
                  <td className="p-3 text-green-800 dark:text-green-200">
                    <strong>中</strong>
                    <br />
                    RHFの知識があれば簡単
                  </td>
                  <td className="p-3 text-purple-800 dark:text-purple-200">
                    <strong>中〜高</strong>
                    <br />
                    独自の概念（submission, reply等）
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-amber-900 dark:text-amber-100">
                    アクセシビリティ
                  </td>
                  <td className="p-3 text-blue-800 dark:text-blue-200">
                    <strong>手動</strong>
                    <br />
                    ARIA属性を自分で設定
                  </td>
                  <td className="p-3 text-green-800 dark:text-green-200">
                    <strong>手動</strong>
                    <br />
                    ARIA属性を自分で設定
                  </td>
                  <td className="p-3 text-purple-800 dark:text-purple-200">
                    <strong>自動</strong>
                    <br />
                    ARIA属性を自動で付与
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-amber-900 dark:text-amber-100">バンドルサイズ</td>
                  <td className="p-3 text-blue-800 dark:text-blue-200">
                    <strong>大</strong>
                    <br />
                    RHF + next-safe-action
                  </td>
                  <td className="p-3 text-green-800 dark:text-green-200">
                    <strong>中</strong>
                    <br />
                    RHFのみ
                  </td>
                  <td className="p-3 text-purple-800 dark:text-purple-200">
                    <strong>小〜中</strong>
                    <br />
                    Conformのみ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Selection Guide */}
        <section className="mt-8 rounded-lg border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-900 dark:bg-indigo-950">
          <h3 className="mb-6 text-2xl font-bold text-indigo-900 dark:text-indigo-50">
            💡 選定のポイント
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {/* next-safe-action + RHF */}
            <div className="rounded-lg border border-blue-300 bg-blue-100 p-5 dark:border-blue-800 dark:bg-blue-900/50">
              <h4 className="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-50">
                next-safe-action + RHF
              </h4>
              <p className="mb-3 text-sm font-medium text-blue-800 dark:text-blue-200">
                こんな場合におすすめ:
              </p>
              <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <li>✅ 複雑なフォームが多い（複数ステップ、動的フィールド等）</li>
                <li>✅ 型安全性を最優先したい</li>
                <li>✅ チームがTypeScriptに習熟している</li>
                <li>✅ リアルタイムフィードバックが必須</li>
                <li>✅ useActionの便利な機能（onSuccess等）を使いたい</li>
              </ul>
              <p className="mt-4 text-xs text-blue-600 dark:text-blue-400">
                <strong>注意:</strong> JavaScriptが必須、学習コスト高め
              </p>
            </div>

            {/* RHF + Server Actions */}
            <div className="rounded-lg border border-green-300 bg-green-100 p-5 dark:border-green-800 dark:bg-green-900/50">
              <h4 className="mb-3 text-lg font-semibold text-green-900 dark:text-green-50">
                RHF + Server Actions
              </h4>
              <p className="mb-3 text-sm font-medium text-green-800 dark:text-green-200">
                こんな場合におすすめ:
              </p>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                <li>✅ すでにRHFを使用している・知っている</li>
                <li>✅ シンプルな構成を保ちたい</li>
                <li>✅ リアルタイムバリデーションが欲しい</li>
                <li>✅ バンドルサイズを抑えたい</li>
                <li>✅ next-safe-actionの追加依存を避けたい</li>
              </ul>
              <p className="mt-4 text-xs text-green-600 dark:text-green-400">
                <strong>最適:</strong> 中規模フォーム、RHF経験者
              </p>
            </div>

            {/* Conform */}
            <div className="rounded-lg border border-purple-300 bg-purple-100 p-5 dark:border-purple-800 dark:bg-purple-900/50">
              <h4 className="mb-3 text-lg font-semibold text-purple-900 dark:text-purple-50">
                Conform
              </h4>
              <p className="mb-3 text-sm font-medium text-purple-800 dark:text-purple-200">
                こんな場合におすすめ:
              </p>
              <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                <li>✅ プログレッシブエンハンスメントが必須</li>
                <li>✅ アクセシビリティを重視したい</li>
                <li>✅ サーバー優先のアプローチを取りたい</li>
                <li>✅ 公開Webサイト（SEO重視）</li>
                <li>✅ JavaScriptが無効な環境も考慮したい</li>
              </ul>
              <p className="mt-4 text-xs text-purple-600 dark:text-purple-400">
                <strong>最適:</strong> 公開サイト、アクセシビリティ重視
              </p>
            </div>
          </div>
        </section>

        {/* Quick Decision Tree */}
        <section className="mt-8 rounded-lg border border-rose-200 bg-rose-50 p-6 dark:border-rose-900 dark:bg-rose-950">
          <h3 className="mb-6 text-2xl font-bold text-rose-900 dark:text-rose-50">
            ⚡ クイック選定フローチャート
          </h3>

          <div className="space-y-4 text-rose-800 dark:text-rose-200">
            <div className="rounded-lg border-2 border-rose-300 bg-white p-4 dark:border-rose-700 dark:bg-rose-900/30">
              <p className="font-semibold">Q1: JavaScriptが無効な環境でも動作する必要がある？</p>
              <p className="mt-2 text-sm">
                <strong>YES</strong> → <span className="text-purple-600 dark:text-purple-400">Conform</span> 一択
              </p>
              <p className="mt-1 text-sm">
                <strong>NO</strong> → Q2へ
              </p>
            </div>

            <div className="rounded-lg border-2 border-rose-300 bg-white p-4 dark:border-rose-700 dark:bg-rose-900/30">
              <p className="font-semibold">Q2: すでにreact-hook-formを使用している・熟知している？</p>
              <p className="mt-2 text-sm">
                <strong>YES</strong> → Q3へ
              </p>
              <p className="mt-1 text-sm">
                <strong>NO</strong> → Q4へ
              </p>
            </div>

            <div className="rounded-lg border-2 border-rose-300 bg-white p-4 dark:border-rose-700 dark:bg-rose-900/30">
              <p className="font-semibold">
                Q3: 複雑なフォーム（複数ステップ、動的フィールド、配列フィールド等）？
              </p>
              <p className="mt-2 text-sm">
                <strong>YES</strong> →{" "}
                <span className="text-blue-600 dark:text-blue-400">next-safe-action + RHF</span> がおすすめ
              </p>
              <p className="mt-1 text-sm">
                <strong>NO</strong> →{" "}
                <span className="text-green-600 dark:text-green-400">RHF + Server Actions</span> で十分
              </p>
            </div>

            <div className="rounded-lg border-2 border-rose-300 bg-white p-4 dark:border-rose-700 dark:bg-rose-900/30">
              <p className="font-semibold">Q4: アクセシビリティとSEOを最優先したい？</p>
              <p className="mt-2 text-sm">
                <strong>YES</strong> → <span className="text-purple-600 dark:text-purple-400">Conform</span>
              </p>
              <p className="mt-1 text-sm">
                <strong>NO</strong> →{" "}
                <span className="text-blue-600 dark:text-blue-400">next-safe-action + RHF</span> または{" "}
                <span className="text-green-600 dark:text-green-400">RHF + Server Actions</span>
              </p>
            </div>
          </div>
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
