# `use` vs 従来のサーバーコンポーネントでのデータ取得

## 1. data-fetchingページの方式（サーバーコンポーネント）

```typescript
// サーバーコンポーネント
export async function NonCachedTodos({ userId }: Props) {
  // サーバー側でawaitして完全にデータを取得
  const todos = await fetchTodos(userId);

  // データが全て揃ってからHTMLをレンダリング
  return <div>{todos.map(...)}</div>;
}
```

**フロー:**
1. サーバーがfetchを開始
2. データ取得が**完了するまで待つ** (await)
3. データが揃ったらHTMLをレンダリング
4. クライアントに送信

**特徴:**
- ✅ シンプルで分かりやすい
- ✅ データが確実に揃ってから表示
- ❌ データ取得中はHTMLが送信されない（待ち時間）
- ❌ すべてサーバーコンポーネント

---

## 2. useフックの方式（ストリーミング）

```typescript
// サーバーコンポーネント (page.tsx)
export default function Page() {
  // Promiseを作成するだけ（awaitしない！）
  const todosPromise = fetchTodos();

  // すぐにHTMLを送信
  return (
    <Suspense fallback={<Loading />}>
      <TodosClient promise={todosPromise} />
    </Suspense>
  );
}

// クライアントコンポーネント
"use client";
export function TodosClient({ promise }) {
  // クライアント側でPromiseを読み取る
  const todos = use(promise);
  return <div>{todos.map(...)}</div>;
}
```

**フロー:**
1. サーバーがPromiseを作成（awaitせず）
2. **すぐにHTMLを送信**（Loading状態）
3. データ取得は並行して継続
4. データが届いたらクライアント側で表示更新

**特徴:**
- ✅ 初期HTMLが即座に送信される（高速）
- ✅ データストリーミング
- ✅ 複数のデータソースを並列処理しやすい
- ❌ クライアントコンポーネントが必要
- ❌ やや複雑

---

## 実際の違いを体感する比較デモ

視覚的に違いを理解できるように、両方式を比較するページを作成しましょうか？
