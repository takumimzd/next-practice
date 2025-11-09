// spec: specs/home-page-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Routing Demo - ルーティングパターンの探索', () => {
  test('Dynamic Routingの確認', async ({ page }) => {
    // Navigate to home page
    await page.goto('http://localhost:3000');

    // Navigate to Routing Demo page
    await page.getByRole('link', { name: 'Routing Demo Next.js App' }).click();

    // 1. Routing Demoページで「Dynamic Routing」カードをクリック
    await page.getByRole('link', { name: '🔀 Dynamic Routing URL' }).click();

    // 2. ページが読み込まれることを確認
    // Verify URL changed to /routing-demo/dynamic/123
    await expect(page).toHaveURL('/routing-demo/dynamic/123');

    // Verify page title
    await expect(page.getByRole('heading', { name: '🔀 Dynamic Routing' })).toBeVisible();

    // Verify URL parameter "123" is displayed
    await expect(page.getByText('現在のIDは: 123')).toBeVisible();

    // Verify description is displayed
    await expect(page.getByText('Dynamic Routingは、ディレクトリ名を')).toBeVisible();
  });

  test('Catch-all Routingの確認', async ({ page }) => {
    // Navigate to home page
    await page.goto('http://localhost:3000');

    // Navigate to Routing Demo page
    await page.getByRole('link', { name: 'Routing Demo Next.js App' }).click();

    // 1. Routing Demoページに戻る (already there)
    // 2. 「Catch-all Routing」カードをクリック
    await page.getByRole('link', { name: '🎯 Catch-all Routing' }).click();

    // Verify URL changed to /routing-demo/catch-all/docs/api/reference
    await expect(page).toHaveURL('/routing-demo/catch-all/docs/api/reference');

    // Verify page title
    await expect(page.getByRole('heading', { name: '🎯 Catch-all Routing' })).toBeVisible();

    // Verify path segments are displayed
    await expect(page.getByText('[ "docs", "api", "reference" ]')).toBeVisible();
    await expect(page.getByText('パスの深さ: 3 階層')).toBeVisible();

    // Verify description is displayed
    await expect(page.getByText('Catch-all Routingは、')).toBeVisible();
  });

  test('Intercepting Routing（モーダル）の確認', async ({ page }) => {
    // Navigate to home page
    await page.goto('http://localhost:3000');

    // Navigate to Routing Demo page
    await page.getByRole('link', { name: 'Routing Demo Next.js App' }).click();

    // 1. Routing Demoページに戻る (already there)
    // 2. 「Intercepting Routing」カードをクリック
    await page.getByRole('link', { name: '🔄 Intercepting Routing' }).click();

    // 3. フォトギャラリーページが表示されることを確認
    await expect(page.getByRole('heading', { name: 'フォトギャラリー' })).toBeVisible();
    await expect(page.getByText('美しい風景')).toBeVisible();

    // 4. 最初の写真「美しい風景」をクリック
    await page.getByRole('link', { name: '🖼️ 美しい風景 ID: 1' }).click();

    // Verify URL changed to /routing-demo/intercepting/photos/1
    await expect(page).toHaveURL('/routing-demo/intercepting/photos/1');

    // Verify modal opened
    await expect(page.getByRole('heading', { name: '美しい風景' })).toBeVisible();

    // Verify modal description
    await expect(page.getByRole('heading', { name: '✨ モーダル表示中' })).toBeVisible();
    await expect(page.getByText('このモーダルは')).toBeVisible();

    // Verify photo details are displayed in modal
    await expect(page.getByText('Photo ID')).toBeVisible();
    await expect(page.getByText('Category')).toBeVisible();
    await expect(page.getByText('自然・風景')).toBeVisible();

    // Verify background (photo gallery) is still visible
    await expect(page.getByRole('heading', { name: 'フォトギャラリー' })).toBeVisible();

    // Verify close button exists
    await expect(page.getByRole('button', { name: '×' })).toBeVisible();
  });
});
