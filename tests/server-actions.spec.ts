// spec: specs/home-page-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Server Actions - フォーム送信とバリデーション', () => {
  test('基本的なServer Actionsフォーム送信（成功ケース）', async ({ page }) => {
    // Navigate to home page
    await page.goto('http://localhost:3000');

    // 1. ホームページから「Server Actions」リンクをクリック
    await page.getByRole('link', { name: 'Server Actions Server Actions' }).click();

    // 2. 「名前」フィールドに「田中太郎」と入力
    await page.getByRole('textbox', { name: '名前' }).fill('田中太郎');

    // 3. 「メールアドレス」フィールドに「tanaka@example.com」と入力
    await page.getByRole('textbox', { name: 'メールアドレス' }).fill('tanaka@example.com');

    // 4. 「登録する」ボタンをクリック
    await page.getByRole('button', { name: '登録する' }).click();

    // Verify that the user was registered (check the first occurrence which is the most recent)
    await expect(page.getByText('田中太郎').first()).toBeVisible();
    await expect(page.getByText('tanaka@example.com').first()).toBeVisible();
    await expect(page.getByText(/登録日時:/).first()).toBeVisible();
  });

  test('基本的なServer Actionsフォーム送信（バリデーションエラー）', async ({ page }) => {
    // Navigate to home page
    await page.goto('http://localhost:3000');

    // Navigate to Server Actions page
    await page.getByRole('link', { name: 'Server Actions Server Actions' }).click();

    // 1. 「名前」フィールドを空のまま
    // (Leave the name field empty)

    // 2. 「メールアドレス」フィールドに「invalid-email」（無効な形式）と入力
    await page.getByRole('textbox', { name: 'メールアドレス' }).fill('invalid-email');

    // Get the initial count of registered users
    const initialUserCount = await page.locator('text=登録済みユーザー').locator('..').locator('> div').nth(1).locator('> div').count();

    // 3. 「登録する」ボタンをクリック
    await page.getByRole('button', { name: '登録する' }).click();

    // Verify that the user was not registered (count should remain the same)
    const finalUserCount = await page.locator('text=登録済みユーザー').locator('..').locator('> div').nth(1).locator('> div').count();
    expect(finalUserCount).toBe(initialUserCount);

    // Verify that the invalid email is still in the field
    await expect(page.getByRole('textbox', { name: 'メールアドレス' })).toHaveValue('invalid-email');
  });
});
