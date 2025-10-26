"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAction } from "next-safe-action/hooks";
import { addUserAction } from "../actions";
import { useState } from "react";

// バリデーションスキーマ（サーバー側と同じ）
const userSchema = z.object({
  name: z.string().min(2, "名前は2文字以上で入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  age: z.number().min(0, "年齢は0以上で入力してください").max(150, "年齢は150以下で入力してください"),
});

type UserFormData = z.infer<typeof userSchema>;

export function UserForm() {
  const [successMessage, setSuccessMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema) as any,
  });

  const { execute, isExecuting } = useAction(addUserAction, {
    onSuccess: ({ data }) => {
      setSuccessMessage(`${data?.user.name}さんが登録されました！`);
      reset();
      setTimeout(() => setSuccessMessage(""), 3000);
    },
    onError: ({ error }) => {
      console.error("Error:", error);
    },
  });

  const onSubmit = (data: UserFormData) => {
    execute(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
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
            {...register("name")}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-zinc-300 focus:ring-zinc-500 dark:border-zinc-700"
            } bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50`}
            placeholder="山田 太郎"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
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
            {...register("email")}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-zinc-300 focus:ring-zinc-500 dark:border-zinc-700"
            } bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50`}
            placeholder="yamada@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Age Field */}
        <div>
          <label
            htmlFor="age"
            className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            年齢
          </label>
          <input
            type="number"
            id="age"
            {...register("age", { valueAsNumber: true })}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
              errors.age
                ? "border-red-500 focus:ring-red-500"
                : "border-zinc-300 focus:ring-zinc-500 dark:border-zinc-700"
            } bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50`}
            placeholder="25"
          />
          {errors.age && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.age.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isExecuting}
          className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-600"
        >
          {isExecuting ? "登録中..." : "登録する"}
        </button>
      </form>

      {/* Success Message */}
      {successMessage && (
        <div className="mt-4 rounded-md bg-green-50 p-4 dark:bg-green-950">
          <p className="text-sm text-green-800 dark:text-green-200">
            ✅ {successMessage}
          </p>
        </div>
      )}

      {/* Info */}
      <div className="mt-6 rounded-md bg-blue-50 p-4 dark:bg-blue-950">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          💡 このフォームは<strong>next-safe-action + react-hook-form</strong>
          を使用しています。
          <br />
          ✅ クライアント側とサーバー側の両方でバリデーション
          <br />
          ✅ 型安全なServer Actions
          <br />✅ リアルタイムバリデーション
        </p>
      </div>
    </div>
  );
}
