# Next.js 16 Practice

Next.js 16とReact 19の新機能をキャッチアップするための実践プロジェクトです。

## 📚 目次

- [技術スタック](#技術スタック)
- [セットアップ](#セットアップ)
- [デモページ](#デモページ)
- [プロジェクト構成](#プロジェクト構成)

## 🛠 技術スタック

- **Next.js** 16.0.0 (App Router)
- **React** 19.2.0
- **TypeScript** 5.x
- **Tailwind CSS** 4.x
- **Zod** - スキーマバリデーション
- **フォームライブラリ**:
  - React Hook Form
  - Conform
  - next-safe-action

## 🚀 セットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 📖 デモページ

### 1. Cache Components Demo (`/cache-demo`)

Next.js 16の`"use cache"`ディレクティブを使ったキャッシュ動作を確認できます。

**学べること:**
- サーバーコンポーネントのキャッシュ機構
- `cookies()`や`headers()`などの動的APIによるキャッシュの無効化
- `router.refresh()`を使ったクライアント側からの再フェッチ

**主なファイル:**
- `src/app/cache-demo/components/CachedTimeDisplay.tsx` - キャッシュされるコンポーネント
- `src/app/cache-demo/components/NonCachedTimeDisplay.tsx` - 動的APIによりキャッシュされないコンポーネント
- `src/app/cache-demo/components/RefreshButton.tsx` - クライアントコンポーネントからのrefresh

### 2. Server Actions Demo (`/server-actions`)

Server Actionsを使ったフォーム実装を3つの異なるアプローチで比較できます。

#### 2-1. 基本実装 (`/server-actions`)

最もシンプルなServer Actionsの実装例です。

**学べること:**
- フォームの`action`属性に直接Server Actionを指定
- `revalidatePath()`による自動再検証
- プログレッシブエンハンスメント（JavaScript無効でも動作）

#### 2-2. next-safe-action + React Hook Form (`/server-actions/next-safe-action`)

型安全なServer Actionsとクライアント側のリアルタイムバリデーションを組み合わせた実装です。

**学べること:**
- `next-safe-action`による型安全なServer Actions
- `useAction`フックを使った楽観的更新
- React Hook Formとの連携によるリアルタイムバリデーション
- Zodスキーマによる型推論

**特徴:**
- ✅ 完全な型安全性
- ✅ 複雑なフォームに適している
- ✅ クライアント・サーバー両方でのバリデーション

#### 2-3. React Hook Form + Server Actions (`/server-actions/react-hook-form`)

React Hook Formを使いつつ、Server Actionsでサーバー側処理を行うシンプルな実装です。

**学べること:**
- React Hook Formのクライアント側バリデーション
- `useTransition`を使った非同期処理の状態管理
- Server Actionsへのデータ送信

**特徴:**
- ✅ シンプルで理解しやすい
- ✅ リアルタイムバリデーション
- ✅ 使い慣れたReact Hook Formのエコシステム

#### 2-4. Conform (`/server-actions/conform`)

プログレッシブエンハンスメントとアクセシビリティを重視した実装です。

**学べること:**
- Conformによるサーバー優先のフォーム処理
- `useForm`フックを使ったクライアント側の機能強化
- アクセシビリティに配慮したエラー表示

**特徴:**
- ✅ JavaScriptが無効でも完全に動作
- ✅ アクセシビリティ対応（ARIA属性の自動付与）
- ✅ サーバーサイドでのバリデーション優先

### 3. Data Fetching Demo (`/data-fetching`)

外部API（JSONPlaceholder）を使ったデータ取得とキャッシュ戦略のデモです。

**学べること:**
- サーバーコンポーネントでの非同期データフェッチ
- キャッシュあり/なしの動作比較
- エラーハンドリングとLoading UI
- ユーザー選択に基づく動的データフィルタリング

**主なファイル:**
- `src/app/data-fetching/components/CachedUsers.tsx` - キャッシュされたユーザーリスト
- `src/app/data-fetching/components/NonCachedTodos.tsx` - リアルタイムのTodoリスト
- `src/app/data-fetching/components/DataErrorBoundary.tsx` - エラーバウンダリ

### 4. use Hook Demo (`/use-hook-demo`)

React 19の新しい`use`フックの使い方を学べます。

**学べること:**
- Promiseを直接コンポーネント内で扱う
- 条件付きでContextを読み取る
- Suspenseとの連携によるストリーミングレンダリング
- 従来のServer Componentアプローチとの比較

**主なファイル:**
- `src/app/use-hook-demo/components/MessagePromiseExample.tsx` - Promiseのストリーミング
- `src/app/use-hook-demo/components/ConditionalContextExample.tsx` - 条件付きContext読み取り
- `src/app/use-hook-demo/comparison/` - Server Componentとの比較

### 5. Activity Demo (`/activity-demo`)

React 19の`<Activity>`コンポーネントを使った状態保持のデモです。

**学べること:**
- タブ切り替え時にコンポーネントの状態とDOMを保持
- `display: none`による非表示制御（アンマウントしない）
- ストリーミングSSRとの連携
- 従来のアプローチ（アンマウント）との比較

**主なファイル:**
- `src/app/activity-demo/components/TabsDemoWithActivity.tsx` - Activityを使ったタブ
- `src/app/activity-demo/components/UsersTab.tsx` - ユーザー一覧タブ
- `src/app/activity-demo/components/PostsTab.tsx` - 投稿一覧タブ
- `src/app/activity-demo/components/AlbumsTab.tsx` - アルバム一覧タブ

## 📁 プロジェクト構成

```
next-practice/
├── src/
│   └── app/
│       ├── activity-demo/        # React Activity デモ
│       │   └── components/
│       ├── cache-demo/           # キャッシュ機能デモ
│       │   └── components/
│       ├── data-fetching/        # データフェッチングデモ
│       │   └── components/
│       ├── server-actions/       # Server Actionsデモ
│       │   ├── components/
│       │   ├── conform/          # Conform実装
│       │   ├── next-safe-action/ # next-safe-action実装
│       │   └── react-hook-form/  # React Hook Form実装
│       ├── use-hook-demo/        # useフックデモ
│       │   ├── components/
│       │   └── comparison/
│       ├── layout.tsx
│       └── page.tsx              # ホームページ（全デモへのリンク）
├── public/                       # 静的ファイル
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

## 🎯 学習のポイント

### Next.js 16の新機能
- `"use cache"`ディレクティブによる柔軟なキャッシュ制御
- 改良されたServer Actions
- 動的APIによるキャッシュの自動無効化

### React 19の新機能
- `use`フック - PromiseとContextの新しい扱い方
- `<Activity>`コンポーネント - DOMの状態保持
- Server Componentsのストリーミング改善

### フォーム実装のベストプラクティス
- プログレッシブエンハンスメント
- クライアント・サーバー両方でのバリデーション
- 型安全性の確保
- アクセシビリティ対応

## 📝 ライセンス

このプロジェクトは学習目的で作成されています。

## 🔗 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Conform](https://conform.guide/)
- [next-safe-action](https://next-safe-action.dev/)
- [Zod](https://zod.dev/)
