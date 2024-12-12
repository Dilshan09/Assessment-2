import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/', { waitUntil: 'domcontentloaded' });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Wiley Online Library/, { timeout: 10000 });
});


