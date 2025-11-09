// spec: specs/home-page-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('ホームページ - 初期表示とナビゲーション', () => {
  test('ホームページの初期表示', async ({ page }) => {
    // 1. ブラウザで http://localhost:3000 にアクセス
    await page.goto('http://localhost:3000');

    // メインヘッダー「Next.js 16 Practice」が表示されることを確認
    await expect(page.getByText('Next.js 16 Practice')).toBeVisible();

    // サブテキストが表示されることを確認
    await expect(page.getByText('Next.js 16の新機能をキャッチアップするためのプロジェクト')).toBeVisible();

    // Cache Componentsカードが表示されることを確認
    await expect(page.getByRole('link', { name: 'Cache Components "use cache"ディレクティブを使ったキャッシュの動作を確認 • サーバーコンポーネントのキャッシュ • 動的APIを使った非キャッシュ化 • クライアントコンポーネントとの組み合わせ' })).toBeVisible();

    // Server Actionsカードが表示されることを確認
    await expect(page.getByRole('link', { name: 'Server Actions Server Actionsを使ったフォーム実装のデモ • フォームデータの送信 • サーバーサイドでのバリデーション • 楽観的更新（Optimistic Updates）' })).toBeVisible();

    // Routing Demoカードが表示されることを確認
    await expect(page.getByRole('link', { name: 'Routing Demo Next.js App Routerの様々なルーティングパターンを学ぶ • Dynamic / Catch-all / Parallel Routing • Intercepting Routing (モーダル) • 特殊ファイル (loading/error/not-found)' })).toBeVisible();
  });

  test('各デモページへのナビゲーション', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // 1. ホームページから「Cache Components」リンクをクリック
    await page.getByRole('link', { name: 'Cache Components "use cache' }).click();

    // 2. Cache Demoページが表示されることを確認
    await expect(page.getByText('Cache Components Demo')).toBeVisible();

    // 3. 「← Back to Home」リンクをクリックしてホームに戻る
    await page.getByRole('link', { name: '← Back to Home' }).click();

    // ホームページに戻ったことを確認
    await expect(page.getByText('Next.js 16 Practice')).toBeVisible();
  });
});
