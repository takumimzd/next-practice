"use server";

import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";
import { revalidatePath } from "next/cache";

// バリデーションスキーマ
const userSchema = z.object({
  name: z.string().min(2, "名前は2文字以上で入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  age: z.number().min(0, "年齢は0以上で入力してください").max(150, "年齢は150以下で入力してください"),
});

// インメモリデータストア
let users: Array<{
  id: string;
  name: string;
  email: string;
  age: number;
  createdAt: Date;
}> = [];

// Safe Actionクライアントを作成
const actionClient = createSafeActionClient();

// 型安全なServer Action
export const addUserAction = actionClient
  .schema(userSchema as any)
  .action(async ({ parsedInput }: { parsedInput: z.infer<typeof userSchema> }) => {
    // わざと遅延を入れてPending状態を確認できるようにする
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newUser = {
      id: Math.random().toString(36).substring(7),
      name: parsedInput.name,
      email: parsedInput.email,
      age: parsedInput.age,
      createdAt: new Date(),
    };

    users.push(newUser);

    // ページを再検証
    revalidatePath("/server-actions/next-safe-action");

    return {
      success: true,
      user: newUser,
    };
  });

// ユーザー一覧取得
export async function getUsers() {
  return users;
}
