"use server";

import { parseWithZod } from "@conform-to/zod";
import { revalidatePath } from "next/cache";
import { userSchema } from "./schema";

// インメモリデータストア
let users: Array<{
  id: string;
  name: string;
  email: string;
  age: number;
  createdAt: Date;
}> = [];

// Server Action
export async function addUserConform(prevState: unknown, formData: FormData) {
  // Conformでバリデーション
  const submission = parseWithZod(formData, { schema: userSchema as any });

  // バリデーションエラーがあれば返す
  if (submission.status !== "success") {
    return submission.reply();
  }

  // わざと遅延を入れる
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newUser = {
    id: Math.random().toString(36).substring(7),
    name: (submission.value as any).name,
    email: (submission.value as any).email,
    age: (submission.value as any).age,
    createdAt: new Date(),
  };

  users.push(newUser);

  // ページを再検証
  revalidatePath("/server-actions/conform");

  return submission.reply({ resetForm: true });
}

// ユーザー一覧取得
export async function getUsersConform() {
  return users;
}
