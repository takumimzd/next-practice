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
- **SWR** 2.3.6 - データフェッチングライブラリ
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

### 2. Combined Data Demo (`/combined-data`)

複数のAPIエンドポイントからデータを取得し、統合されたUIを構成するデモです。

**学べること:**
- 4つの異なるAPIエンドポイント（User / Posts / Todos / Albums）の統合
- 統合パターン vs 分離パターンの比較
- きめ細かいキャッシング戦略（各APIで異なるキャッシュ期間）
- 個別のSuspense境界による並列データフェッチング
- 部分的エラーハンドリング（Error Boundary）

**主なファイル:**
- `src/app/combined-data/components/UserDetailCombined.tsx` - 統合パターンの実装
- `src/app/combined-data/components/UserInfo.tsx` - ユーザー情報コンポーネント
- `src/app/combined-data/components/UserPosts.tsx` - 投稿一覧コンポーネント
- `src/app/combined-data/components/DataErrorBoundary.tsx` - エラーバウンダリ

### 3. Pagination Demo (`/pagination-demo`)

Server ComponentとSWRを組み合わせたハイブリッドページネーション実装のデモです。

**学べること:**
- 初期表示はServer Componentで取得（`"use cache"`使用）
- 2ページ目以降はSWRでクライアント側フェッチ
- ストリーミングSSR（Suspense）との連携
- SEO最適化とFast First Paint
- Server-side rendered vs Client-side fetchedの視覚的な比較

**主なファイル:**
- `src/app/pagination-demo/api.ts` - `"use cache"`を使ったデータフェッチ関数
- `src/app/pagination-demo/components/PostsList.tsx` - SWRを使ったクライアントコンポーネント

### 4. Server Actions Demo (`/server-actions`)

Server Actionsを使ったフォーム実装を3つの異なるアプローチで比較できます。

#### 4-1. 基本実装 (`/server-actions`)

最もシンプルなServer Actionsの実装例です。

**学べること:**
- フォームの`action`属性に直接Server Actionを指定
- `revalidatePath()`による自動再検証
- プログレッシブエンハンスメント（JavaScript無効でも動作）

#### 4-2. next-safe-action + React Hook Form (`/server-actions/next-safe-action`)

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

#### 4-3. React Hook Form + Server Actions (`/server-actions/react-hook-form`)

React Hook Formを使いつつ、Server Actionsでサーバー側処理を行うシンプルな実装です。

**学べること:**
- React Hook Formのクライアント側バリデーション
- `useTransition`を使った非同期処理の状態管理
- Server Actionsへのデータ送信

**特徴:**
- ✅ シンプルで理解しやすい
- ✅ リアルタイムバリデーション
- ✅ 使い慣れたReact Hook Formのエコシステム

#### 4-4. Conform (`/server-actions/conform`)

プログレッシブエンハンスメントとアクセシビリティを重視した実装です。

**学べること:**
- Conformによるサーバー優先のフォーム処理
- `useForm`フックを使ったクライアント側の機能強化
- アクセシビリティに配慮したエラー表示

**特徴:**
- ✅ JavaScriptが無効でも完全に動作
- ✅ アクセシビリティ対応（ARIA属性の自動付与）
- ✅ サーバーサイドでのバリデーション優先

### 5. Data Fetching Demo (`/data-fetching`)

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

### 6. use Hook Demo (`/use-hook-demo`)

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

### 7. Activity Demo (`/activity-demo`)

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

### 8. Routing Demo (`/routing-demo`)

Next.js App Routerの様々なルーティングパターンを実際に体験できるデモです。

**学べること:**
- Dynamic Routing（`[id]`）による動的ルート
- Catch-all Routing（`[...slug]`）による階層的なパス処理
- Nested Routing（親子関係のあるページ構成）
- Parallel Routing（`@folder`）による複数UIの同時描画
- Intercepting Routing（`(.)`記法）によるモーダル実装
- 特殊ファイル（loading.tsx / error.tsx / not-found.tsx）の使い方
- template.tsx による再マウント制御

**主なファイル:**
- `src/app/routing-demo/basic/page.tsx` - 基本的なページルーティング
- `src/app/routing-demo/dynamic/[id]/page.tsx` - 動的ルーティング
- `src/app/routing-demo/catch-all/[...slug]/page.tsx` - Catch-allルーティング
- `src/app/routing-demo/nested/layout.tsx` - ネストされたレイアウト
- `src/app/routing-demo/parallel/` - パラレルルーティングの実装

## 📁 プロジェクト構成

```
next-practice/
├── src/
│   └── app/
│       ├── activity-demo/        # React Activity デモ
│       │   └── components/
│       ├── cache-demo/           # キャッシュ機能デモ
│       │   └── components/
│       ├── combined-data/        # 複数API統合デモ
│       │   └── components/
│       ├── data-fetching/        # データフェッチングデモ
│       │   └── components/
│       ├── pagination-demo/      # SSR + SWR ページネーションデモ
│       │   ├── components/
│       │   └── api.ts
│       ├── routing-demo/         # ルーティングパターンデモ
│       │   ├── basic/
│       │   ├── dynamic/
│       │   ├── catch-all/
│       │   ├── nested/
│       │   ├── parallel/
│       │   ├── intercepting/
│       │   ├── special-files/
│       │   └── template-demo/
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
- App Routerの高度なルーティングパターン

### React 19の新機能
- `use`フック - PromiseとContextの新しい扱い方
- `<Activity>`コンポーネント - DOMの状態保持
- Server Componentsのストリーミング改善

### データフェッチングのベストプラクティス
- Server ComponentsとClient Componentsの使い分け
- SWRによるクライアント側データフェッチング
- きめ細かいキャッシング戦略
- 個別のSuspense境界による並列フェッチング
- 部分的エラーハンドリング

### フォーム実装のベストプラクティス
- プログレッシブエンハンスメント
- クライアント・サーバー両方でのバリデーション
- 型安全性の確保
- アクセシビリティ対応

### ルーティングパターン
- 動的ルーティング、Catch-all、Parallel、Intercepting
- 特殊ファイル（loading / error / not-found）の活用
- Layout vs Template の使い分け

## 📝 ライセンス

このプロジェクトは学習目的で作成されています。

## 🔗 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Conform](https://conform.guide/)
- [next-safe-action](https://next-safe-action.dev/)
- [Zod](https://zod.dev/)
