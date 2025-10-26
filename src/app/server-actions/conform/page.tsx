import Link from "next/link";
import { UserForm } from "./components/UserForm";
import { getUsersConform } from "./actions";

export default async function ConformPage() {
  const users = await getUsersConform();

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/server-actions"
          className="mb-8 inline-block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Back to Server Actions
        </Link>

        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Conform
        </h1>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          プログレッシブエンハンスメントを重視したフォームバリデーション
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form Section */}
          <section className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              ユーザー登録フォーム
            </h2>
            <UserForm />
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
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      年齢: {user.age}歳
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

        {/* Features */}
        <section className="mt-8 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950">
          <h3 className="mb-3 text-xl font-semibold text-purple-900 dark:text-purple-50">
            📚 Conformの特徴
          </h3>
          <ul className="space-y-2 text-purple-800 dark:text-purple-200">
            <li>
              <strong>プログレッシブエンハンスメント</strong>:
              JavaScriptが無効でもフォームが動作
            </li>
            <li>
              <strong>サーバー優先</strong>:
              サーバー側バリデーションを優先し、クライアント側は補助
            </li>
            <li>
              <strong>アクセシビリティ</strong>:
              ARIA属性が自動的に付与される
            </li>
            <li>
              <strong>useFormStateと統合</strong>:
              React 19のuseFormStateと完全に統合
            </li>
            <li>
              <strong>型安全</strong>: Zodスキーマから型が推論される
            </li>
          </ul>
        </section>

        {/* Comparison */}
        <section className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
          <h3 className="mb-3 text-xl font-semibold text-amber-900 dark:text-amber-50">
            🎯 react-hook-form vs Conform
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-amber-300 dark:border-amber-700">
                  <th className="p-2 text-left font-semibold text-amber-800 dark:text-amber-200">
                    特徴
                  </th>
                  <th className="p-2 text-left font-semibold text-amber-800 dark:text-amber-200">
                    react-hook-form
                  </th>
                  <th className="p-2 text-left font-semibold text-amber-800 dark:text-amber-200">
                    Conform
                  </th>
                </tr>
              </thead>
              <tbody className="text-amber-900 dark:text-amber-100">
                <tr className="border-b border-amber-200 dark:border-amber-800">
                  <td className="p-2 font-semibold">バリデーション</td>
                  <td className="p-2">クライアント優先</td>
                  <td className="p-2">サーバー優先</td>
                </tr>
                <tr className="border-b border-amber-200 dark:border-amber-800">
                  <td className="p-2 font-semibold">JS無効時</td>
                  <td className="p-2">動作しない</td>
                  <td className="p-2">✅ 動作する</td>
                </tr>
                <tr className="border-b border-amber-200 dark:border-amber-800">
                  <td className="p-2 font-semibold">アクセシビリティ</td>
                  <td className="p-2">手動設定</td>
                  <td className="p-2">✅ 自動</td>
                </tr>
                <tr className="border-b border-amber-200 dark:border-amber-800">
                  <td className="p-2 font-semibold">リアルタイム</td>
                  <td className="p-2">✅ 高速</td>
                  <td className="p-2">やや遅い</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">推奨用途</td>
                  <td className="p-2">SPA、リッチUI</td>
                  <td className="p-2">SSR、アクセシビリティ重視</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Code Example */}
        <section className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
          <h3 className="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-50">
            💻 実装例
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <div className="mb-2 font-semibold text-blue-800 dark:text-blue-200">
                Server Action
              </div>
              <pre className="overflow-x-auto rounded-md bg-blue-100 p-4 dark:bg-blue-900">
                <code className="text-blue-900 dark:text-blue-100">{`// actions.ts
export async function addUser(prevState, formData) {
  const submission = parseWithZod(formData, { schema: userSchema });

  if (submission.status !== 'success') {
    return submission.reply(); // バリデーションエラー返却
  }

  // データ保存処理
  return submission.reply({ resetForm: true });
}`}</code>
              </pre>
            </div>

            <div>
              <div className="mb-2 font-semibold text-blue-800 dark:text-blue-200">
                クライアント側（Conform）
              </div>
              <pre className="overflow-x-auto rounded-md bg-blue-100 p-4 dark:bg-blue-900">
                <code className="text-blue-900 dark:text-blue-100">{`// UserForm.tsx
const [lastResult, action] = useFormState(addUser, undefined);
const [form, fields] = useForm({
  lastResult,
  onValidate({ formData }) {
    return parseWithZod(formData, { schema: userSchema });
  },
});

<form id={form.id} onSubmit={form.onSubmit} action={action}>
  <input name={fields.name.name} />
  {fields.name.errors && <p>{fields.name.errors}</p>}
</form>`}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
