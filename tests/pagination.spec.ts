// spec: specs/home-page-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Pagination Demo - SSR + SWRのページネーション', () => {
  test('初期ページ（ページ1）の表示', async ({ page }) => {
    // Navigate to home page
    await page.goto('http://localhost:3000');

    // 1. ホームページから「SSR + SWR Pagination」リンクをクリック
    await page.getByRole('link', { name: 'SSR + SWR Pagination' }).click();

    // 2. ページが完全に読み込まれるまで待機
    await expect(page.getByRole('heading', { name: 'Server Component + SWR Pagination' })).toBeVisible();

    // Verify page 1 displays 10 posts (ID: 1-10)
    await expect(page.getByText('ID: 1', { exact: true })).toBeVisible();
    await expect(page.getByText('ID: 10', { exact: true })).toBeVisible();

    // Verify pagination info
    await expect(page.getByText('Page 1 of 10 (Total: 100 posts)')).toBeVisible();

    // Verify Previous button is disabled
    await expect(page.getByRole('button', { name: 'Previous' })).toBeDisabled();

    // Verify Next button is enabled
    await expect(page.getByRole('button', { name: 'Next', exact: true })).toBeEnabled();

    // Verify page number buttons are displayed
    await expect(page.getByRole('button', { name: '1' })).toBeVisible();
    await expect(page.getByRole('button', { name: '2' })).toBeVisible();
    await expect(page.getByRole('button', { name: '3' })).toBeVisible();

    // Verify Server-side rendered badge
    await expect(page.getByText('✓ Server-side rendered')).toBeVisible();
  });

  test('ページ2への遷移（SWRによるクライアント側フェッチ）', async ({ page }) => {
    // Navigate to home page
    await page.goto('http://localhost:3000');

    // Navigate to Pagination Demo page
    await page.getByRole('link', { name: 'SSR + SWR Pagination' }).click();

    // 1. Pagination Demoページで「Next」ボタンをクリック
    await page.getByRole('button', { name: 'Next', exact: true }).click();

    // 2. ページが更新されるまで待機
    // Verify page 2 displays 10 posts (ID: 11-20)
    await expect(page.getByText('ID: 11', { exact: true })).toBeVisible();
    await expect(page.getByText('ID: 20', { exact: true })).toBeVisible();

    // Verify pagination info updated to page 2
    await expect(page.getByText('Page 2 of 10 (Total: 100 posts)')).toBeVisible();

    // Verify Previous button is now enabled
    await expect(page.getByRole('button', { name: 'Previous' })).toBeEnabled();

    // Verify page number buttons
    await expect(page.getByRole('button', { name: '1' })).toBeVisible();
    await expect(page.getByRole('button', { name: '2' })).toBeVisible();
    await expect(page.getByRole('button', { name: '3' })).toBeVisible();
    await expect(page.getByRole('button', { name: '4' })).toBeVisible();

    // Verify Client-side fetched badge
    await expect(page.getByText('✓ Client-side fetched (SWR)')).toBeVisible();

    // Verify URL has not changed (client-side state management)
    expect(page.url()).toBe('http://localhost:3000/pagination-demo');
  });

  test('複数ページの移動', async ({ page }) => {
    // Navigate to home page
    await page.goto('http://localhost:3000');

    // Navigate to Pagination Demo page
    await page.getByRole('link', { name: 'SSR + SWR Pagination' }).click();

    // 1. 「3」ボタンをクリック
    await page.getByRole('button', { name: '3' }).click();
    await expect(page.getByText('Page 3 of 10 (Total: 100 posts)')).toBeVisible();
    await expect(page.getByText('ID: 21', { exact: true })).toBeVisible();
    await expect(page.getByText('ID: 30', { exact: true })).toBeVisible();
    await expect(page.getByText('✓ Client-side fetched (SWR)')).toBeVisible();

    // 2. 「Next」ボタンを2回クリック（ページ5まで進む）
    await page.getByRole('button', { name: 'Next', exact: true }).click();
    await expect(page.getByText('Page 4 of 10 (Total: 100 posts)')).toBeVisible();
    await expect(page.getByText('ID: 31', { exact: true })).toBeVisible();
    await expect(page.getByText('ID: 40', { exact: true })).toBeVisible();

    await page.getByRole('button', { name: 'Next', exact: true }).click();
    await expect(page.getByText('Page 5 of 10 (Total: 100 posts)')).toBeVisible();
    await expect(page.getByText('ID: 41', { exact: true })).toBeVisible();
    await expect(page.getByText('ID: 50', { exact: true })).toBeVisible();

    // 3. 「Previous」ボタンを1回クリック
    await page.getByRole('button', { name: 'Previous' }).click();
    await expect(page.getByText('Page 4 of 10 (Total: 100 posts)')).toBeVisible();
    await expect(page.getByText('ID: 31', { exact: true })).toBeVisible();
    await expect(page.getByText('ID: 40', { exact: true })).toBeVisible();

    // Verify all pages show Client-side fetched badge
    await expect(page.getByText('✓ Client-side fetched (SWR)')).toBeVisible();
  });
});
