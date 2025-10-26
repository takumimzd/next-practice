import { z } from "zod";

// バリデーションスキーマ
export const userSchema = z.object({
  name: z.string().min(2, "名前は2文字以上で入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  age: z.coerce.number().min(0, "年齢は0以上で入力してください").max(150, "年齢は150以下で入力してください"),
});
