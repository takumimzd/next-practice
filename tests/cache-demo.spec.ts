// spec: specs/home-page-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Cache Components - キャッシュ動作の検証', () => {
  test('キャッシュされるコンポーネントの表示', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // 1. ホームページから「Cache Components」リンクをクリック
    await page.getByRole('link', { name: 'Cache Components "use cache' }).click();

    // 2. ページが読み込まれたら、「1. キャッシュされるコンポーネント」セクションが表示されることを確認
    await expect(page.getByText('1. キャッシュされるコンポーネント')).toBeVisible();

    // 「キャッシュされた時刻」が表示されることを確認
    await expect(page.getByText('キャッシュされた時刻:')).toBeVisible();

    // 説明テキストが表示されることを確認
    await expect(page.getByText('💡 ページをリロードしても同じ時刻が表示されます（15分間キャッシュされているため）')).toBeVisible();
  });

  test('キャッシュされないコンポーネントの表示', async ({ page }) => {
    await page.goto('http://localhost:3000/cache-demo');

    // 「2. キャッシュされないコンポーネント（動的API使用）」セクションが表示されることを確認
    await expect(page.getByText('2. キャッシュされないコンポーネント（動的API使用）')).toBeVisible();

    // 「動的に生成された時刻」が表示されることを確認
    await expect(page.getByText('動的に生成された時刻:')).toBeVisible();

    // 説明テキストが表示されることを確認
    await expect(page.getByText('💡 ページをリロードすると時刻が更新されます（動的APIによりキャッシュが無効化されるため）')).toBeVisible();
  });

  test('ページリフレッシュボタンの動作', async ({ page }) => {
    await page.goto('http://localhost:3000/cache-demo');

    // 「ページをリフレッシュ」ボタンをクリック
    await page.getByRole('button', { name: 'ページをリフレッシュ' }).click();

    // キャッシュされた時刻とダイナミックな時刻が両方表示されていることを確認
    await expect(page.getByText('キャッシュされた時刻:')).toBeVisible();
    await expect(page.getByText('動的に生成された時刻:')).toBeVisible();
  });

  test('キャッシュの仕組みの説明表示', async ({ page }) => {
    await page.goto('http://localhost:3000/cache-demo');

    // キャッシュの仕組みセクションが表示されることを確認
    await expect(page.getByText('📚 キャッシュの仕組み')).toBeVisible();

    // 「"use cache"」の説明が表示されることを確認（リスト内のテキストを確認）
    await expect(page.getByText(': 関数やコンポーネントの出力をキャッシュします。')).toBeVisible();

    // 「動的API」の説明が表示されることを確認（リスト内のテキストを確認）
    await expect(page.getByText(': cookies()、headers()、searchParamsなどを使用すると自動的にキャッシュが無効化されます')).toBeVisible();

    // 「router.refresh()」の説明が表示されることを確認（リスト内のテキストを確認）
    await expect(page.getByText(': クライアント側からサーバーコンポーネントを再フェッチできます')).toBeVisible();
  });
});
