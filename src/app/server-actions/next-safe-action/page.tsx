import Link from "next/link";
import { UserForm } from "./components/UserForm";
import { getUsers } from "./actions";

export default async function NextSafeActionPage() {
  const users = await getUsers();

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
          next-safe-action + react-hook-form
        </h1>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          型安全なServer Actionsとリアルタイムバリデーション
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
        <section className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <h3 className="mb-3 text-xl font-semibold text-emerald-900 dark:text-emerald-50">
            📚 next-safe-action + react-hook-formの特徴
          </h3>
          <ul className="space-y-2 text-emerald-800 dark:text-emerald-200">
            <li>
              <strong>型安全性</strong>: Zodスキーマから自動的に型が推論される
            </li>
            <li>
              <strong>二重バリデーション</strong>:
              クライアント側（react-hook-form）とサーバー側（next-safe-action）の両方でバリデーション
            </li>
            <li>
              <strong>リアルタイムフィードバック</strong>:
              入力中にエラーメッセージが表示される
            </li>
            <li>
              <strong>useActionフック</strong>:
              Server Actionsを簡単に呼び出せるフック
            </li>
            <li>
              <strong>ローディング状態</strong>: isExecutingで簡単にローディング状態を管理
            </li>
          </ul>
        </section>

        {/* Code Example */}
        <section className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
          <h3 className="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-50">
            💻 実装例
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <div className="mb-2 font-semibold text-blue-800 dark:text-blue-200">
                Server Action（型安全）
              </div>
              <pre className="overflow-x-auto rounded-md bg-blue-100 p-4 dark:bg-blue-900">
                <code className="text-blue-900 dark:text-blue-100">{`// actions.ts
const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(0).max(150),
});

export const addUserAction = actionClient
  .schema(userSchema)
  .action(async ({ parsedInput }) => {
    // parsedInputは型安全！
    const newUser = { ...parsedInput };
    return { success: true, user: newUser };
  });`}</code>
              </pre>
            </div>

            <div>
              <div className="mb-2 font-semibold text-blue-800 dark:text-blue-200">
                クライアント側（react-hook-form）
              </div>
              <pre className="overflow-x-auto rounded-md bg-blue-100 p-4 dark:bg-blue-900">
                <code className="text-blue-900 dark:text-blue-100">{`// UserForm.tsx
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(userSchema),
});

const { execute, isExecuting } = useAction(addUserAction, {
  onSuccess: ({ data }) => {
    console.log('Success:', data);
  },
});

const onSubmit = (data) => execute(data);`}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
