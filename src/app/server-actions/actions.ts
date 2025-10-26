"use server";

import { revalidatePath } from "next/cache";
import { addUserToStore, removeUserFromStore } from "./data";

// ユーザーを追加するServer Action
export async function addUser(formData: FormData) {
  // フォームデータを取得
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  // バリデーション
  if (!name || !email) {
    throw new Error("名前とメールアドレスは必須です");
  }

  if (!email.includes("@")) {
    throw new Error("有効なメールアドレスを入力してください");
  }

  // サーバー側での処理をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 500));

  // 新しいユーザーを作成
  const newUser = {
    id: Math.random().toString(36).substring(7),
    name,
    email,
    createdAt: new Date(),
  };

  // ユーザーリストに追加
  addUserToStore(newUser);

  // ページを再検証してデータを更新
  revalidatePath("/server-actions");
}

// ユーザーを削除するServer Action（オプション）
export async function deleteUser(userId: string) {
  removeUserFromStore(userId);

  revalidatePath("/server-actions");
}
