"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { addUserRHF } from "../actions";
import { userSchema, type UserFormData } from "../schema";

export function UserForm() {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserFormData) => {
    startTransition(async () => {
      const result = await addUserRHF(data);

      if (result.success && result.user) {
        setSuccessMessage(`${result.user.name}さんが登録されました！`);
        reset();
        setTimeout(() => setSuccessMessage(""), 3000);
      } else if (!result.success && result.errors) {
        // サーバー側のバリデーションエラーをフォームに反映
        Object.entries(result.errors).forEach(([field, messages]) => {
          if (messages) {
            setError(field as keyof UserFormData, {
              message: messages[0],
            });
          }
        });
      }
    });
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
            disabled={isPending}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-zinc-300 focus:ring-zinc-500 dark:border-zinc-700"
            } bg-white text-zinc-900 disabled:opacity-50 dark:bg-zinc-900 dark:text-zinc-50`}
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
            disabled={isPending}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-zinc-300 focus:ring-zinc-500 dark:border-zinc-700"
            } bg-white text-zinc-900 disabled:opacity-50 dark:bg-zinc-900 dark:text-zinc-50`}
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
            disabled={isPending}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
              errors.age
                ? "border-red-500 focus:ring-red-500"
                : "border-zinc-300 focus:ring-zinc-500 dark:border-zinc-700"
            } bg-white text-zinc-900 disabled:opacity-50 dark:bg-zinc-900 dark:text-zinc-50`}
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
          disabled={isPending}
          className="w-full rounded-md bg-green-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-400 dark:bg-green-700 dark:hover:bg-green-600"
        >
          {isPending ? "登録中..." : "登録する"}
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
      <div className="mt-6 rounded-md bg-green-50 p-4 dark:bg-green-950">
        <p className="text-sm text-green-800 dark:text-green-200">
          💡 このフォームは<strong>react-hook-form + Server Actions</strong>
          を使用しています。
          <br />
          ✅ クライアント側とサーバー側の両方でバリデーション
          <br />
          ✅ リアルタイムバリデーション
          <br />✅ useTransitionでローディング状態管理
        </p>
      </div>
    </div>
  );
}
