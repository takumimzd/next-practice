import Link from "next/link";
import { UserForm } from "./components/UserForm";
import { getUsersRHF } from "./actions";

export default async function ReactHookFormPage() {
  const users = await getUsersRHF();

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
          react-hook-form + Server Actions
        </h1>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          next-safe-actionなしでreact-hook-formとServer Actionsを組み合わせる
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
        <section className="mt-8 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950">
          <h3 className="mb-3 text-xl font-semibold text-green-900 dark:text-green-50">
            📚 react-hook-form + Server Actionsの特徴
          </h3>
          <ul className="space-y-2 text-green-800 dark:text-green-200">
            <li>
              <strong>シンプル</strong>: next-safe-actionなしで直接Server Actionを呼び出し
            </li>
            <li>
              <strong>リアルタイムバリデーション</strong>:
              react-hook-formによる高速なクライアント側バリデーション
            </li>
            <li>
              <strong>二重バリデーション</strong>:
              クライアント（react-hook-form）とサーバー（Server Action内）の両方
            </li>
            <li>
              <strong>useTransition</strong>: ローディング状態を手動管理
            </li>
            <li>
              <strong>型安全性</strong>: zodスキーマから型を推論
            </li>
          </ul>
        </section>

        {/* Comparison */}
        <section className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950">
          <h3 className="mb-3 text-xl font-semibold text-amber-900 dark:text-amber-50">
            🎯 next-safe-actionあり vs なし
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-amber-300 dark:border-amber-700">
                  <th className="p-2 text-left font-semibold text-amber-800 dark:text-amber-200">
                    特徴
                  </th>
                  <th className="p-2 text-left font-semibold text-amber-800 dark:text-amber-200">
                    next-safe-actionあり
                  </th>
                  <th className="p-2 text-left font-semibold text-amber-800 dark:text-amber-200">
                    next-safe-actionなし
                  </th>
                </tr>
              </thead>
              <tbody className="text-amber-900 dark:text-amber-100">
                <tr className="border-b border-amber-200 dark:border-amber-800">
                  <td className="p-2 font-semibold">セットアップ</td>
                  <td className="p-2">やや複雑</td>
                  <td className="p-2">✅ シンプル</td>
                </tr>
                <tr className="border-b border-amber-200 dark:border-amber-800">
                  <td className="p-2 font-semibold">ローディング状態</td>
                  <td className="p-2">✅ useAction自動</td>
                  <td className="p-2">useTransition手動</td>
                </tr>
                <tr className="border-b border-amber-200 dark:border-amber-800">
                  <td className="p-2 font-semibold">エラーハンドリング</td>
                  <td className="p-2">✅ 自動</td>
                  <td className="p-2">手動実装</td>
                </tr>
                <tr className="border-b border-amber-200 dark:border-amber-800">
                  <td className="p-2 font-semibold">型安全性</td>
                  <td className="p-2">✅ 完全自動</td>
                  <td className="p-2">○ zodで型推論</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">推奨用途</td>
                  <td className="p-2">複雑なフォーム</td>
                  <td className="p-2">シンプルなフォーム</td>
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
export async function addUser(data: UserFormData) {
  // サーバー側バリデーション
  const result = userSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  // データ保存処理
  return { success: true, user: newUser };
}`}</code>
              </pre>
            </div>

            <div>
              <div className="mb-2 font-semibold text-blue-800 dark:text-blue-200">
                クライアント側（react-hook-form）
              </div>
              <pre className="overflow-x-auto rounded-md bg-blue-100 p-4 dark:bg-blue-900">
                <code className="text-blue-900 dark:text-blue-100">{`// UserForm.tsx
const [isPending, startTransition] = useTransition();
const { register, handleSubmit, setError } = useForm({
  resolver: zodResolver(userSchema),
});

const onSubmit = (data) => {
  startTransition(async () => {
    const result = await addUser(data);

    if (!result.success) {
      // サーバー側エラーをフォームに反映
      Object.entries(result.errors).forEach(([field, messages]) => {
        setError(field, { message: messages[0] });
      });
    }
  });
};`}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
