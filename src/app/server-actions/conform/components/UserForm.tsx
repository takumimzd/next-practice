"use client";

import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { addUserConform } from "../actions";
import { userSchema } from "../schema";

export function UserForm() {
  const [lastResult, action] = useFormState(addUserConform, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: userSchema as any });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div>
      <form id={form.id} onSubmit={form.onSubmit} action={action} className="space-y-4">
        {/* Name Field */}
        <div>
          <label
            htmlFor={fields.name.id}
            className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            名前
          </label>
          <input
            type="text"
            id={fields.name.id}
            name={fields.name.name}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
              fields.name.errors
                ? "border-red-500 focus:ring-red-500"
                : "border-zinc-300 focus:ring-zinc-500 dark:border-zinc-700"
            } bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50`}
            placeholder="山田 太郎"
            aria-invalid={!!fields.name.errors}
            aria-describedby={fields.name.errors ? `${fields.name.id}-error` : undefined}
          />
          {fields.name.errors && (
            <p id={`${fields.name.id}-error`} className="mt-1 text-sm text-red-600 dark:text-red-400">
              {fields.name.errors}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor={fields.email.id}
            className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            メールアドレス
          </label>
          <input
            type="email"
            id={fields.email.id}
            name={fields.email.name}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
              fields.email.errors
                ? "border-red-500 focus:ring-red-500"
                : "border-zinc-300 focus:ring-zinc-500 dark:border-zinc-700"
            } bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50`}
            placeholder="yamada@example.com"
            aria-invalid={!!fields.email.errors}
            aria-describedby={fields.email.errors ? `${fields.email.id}-error` : undefined}
          />
          {fields.email.errors && (
            <p id={`${fields.email.id}-error`} className="mt-1 text-sm text-red-600 dark:text-red-400">
              {fields.email.errors}
            </p>
          )}
        </div>

        {/* Age Field */}
        <div>
          <label
            htmlFor={fields.age.id}
            className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            年齢
          </label>
          <input
            type="number"
            id={fields.age.id}
            name={fields.age.name}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
              fields.age.errors
                ? "border-red-500 focus:ring-red-500"
                : "border-zinc-300 focus:ring-zinc-500 dark:border-zinc-700"
            } bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50`}
            placeholder="25"
            aria-invalid={!!fields.age.errors}
            aria-describedby={fields.age.errors ? `${fields.age.id}-error` : undefined}
          />
          {fields.age.errors && (
            <p id={`${fields.age.id}-error`} className="mt-1 text-sm text-red-600 dark:text-red-400">
              {fields.age.errors}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-md bg-purple-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600"
        >
          登録する
        </button>
      </form>

      {/* Info */}
      <div className="mt-6 rounded-md bg-purple-50 p-4 dark:bg-purple-950">
        <p className="text-sm text-purple-800 dark:text-purple-200">
          💡 このフォームは<strong>Conform</strong>を使用しています。
          <br />
          ✅ プログレッシブエンハンスメント（JavaScriptなしでも動作）
          <br />
          ✅ サーバー側バリデーション優先
          <br />✅ アクセシビリティ対応（ARIA属性自動付与）
        </p>
      </div>
    </div>
  );
}
