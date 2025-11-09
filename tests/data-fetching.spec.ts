// spec: specs/home-page-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Data Fetching - データ取得とキャッシュ戦略', () => {
  test('初期データ表示の確認', async ({ page }) => {
    // Navigate to home page
    await page.goto('http://localhost:3000');

    // 1. ホームページから「Data Fetching」リンクをクリック
    await page.getByRole('link', { name: 'Data Fetching 外部API' }).click();

    // 2. ページが完全に読み込まれるまで待機
    // Verify Users section
    await expect(page.getByRole('heading', { name: 'Users（時刻付きキャッシュ）' })).toBeVisible();
    await expect(page.getByText('合計: 10人のユーザー')).toBeVisible();
    await expect(page.getByText('取得時刻:').first()).toBeVisible();
    
    // Verify user details are displayed
    await expect(page.getByText('Leanne Graham')).toBeVisible();
    await expect(page.getByText('@Bret')).toBeVisible();
    await expect(page.getByText('Sincere@april.biz')).toBeVisible();

    // Verify Todos section
    await expect(page.getByRole('heading', { name: 'Todos（キャッシュなし）' })).toBeVisible();
    await expect(page.getByText('表示中: 20/200件')).toBeVisible();
    
    // Verify completion statistics are displayed
    await expect(page.getByText('完了: 90')).toBeVisible();
    await expect(page.getByText('未完了: 110')).toBeVisible();
  });

  test('ユーザー選択によるTodosフィルタリング', async ({ page }) => {
    // Navigate to home page
    await page.goto('http://localhost:3000');

    // Navigate to Data Fetching page
    await page.getByRole('link', { name: 'Data Fetching 外部API' }).click();

    // 1. Data Fetchingページの「Todosを表示するユーザーを選択:」ドロップダウンを開く
    // 2. 「User 2」を選択
    await page.getByLabel('Todosを表示するユーザーを選択:').selectOption(['2']);

    // 3. Todosリストが更新されるまで待機
    // Verify URL changed to include userId=2
    await expect(page).toHaveURL('/data-fetching?userId=2');

    // Verify todos are filtered to User 2 only
    await expect(page.getByText('User ID: 2').first()).toBeVisible();
    await expect(page.getByText('合計: 20件のTodo')).toBeVisible();

    // Verify completion statistics are updated
    await expect(page.getByText('完了: 8')).toBeVisible();
    await expect(page.getByText('未完了: 12')).toBeVisible();
  });
});
