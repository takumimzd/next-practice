"use server";

import { revalidatePath } from "next/cache";
import { userSchema, type UserFormData } from "./schema";

// インメモリデータストア
let users: Array<{
  id: string;
  name: string;
  email: string;
  age: number;
  createdAt: Date;
}> = [];

// Server Action（next-safe-actionなし）
export async function addUserRHF(data: UserFormData) {
  // サーバー側でもバリデーション（セキュリティのため必須）
  const result = userSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  // わざと遅延を入れる
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newUser = {
    id: Math.random().toString(36).substring(7),
    ...result.data,
    createdAt: new Date(),
  };

  users.push(newUser);

  // ページを再検証
  revalidatePath("/server-actions/react-hook-form");

  return {
    success: true,
    user: newUser,
  };
}

// ユーザー一覧取得
export async function getUsersRHF() {
  return users;
}
