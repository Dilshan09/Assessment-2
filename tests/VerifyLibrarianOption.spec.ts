import { test, expect } from '@playwright/test';

test('Verify Researchers Option Exists', async ({ page }) => {
  // Open the homepage
  await page.goto('https://onlinelibrary.wiley.com/', { waitUntil: 'domcontentloaded' });

  // Check if the "librarians" option exists
  const librarianOption = page.locator("//a[@href='/library-info' and contains(text(), 'Librarians')]");
  await expect(librarianOption).toBeVisible(); // Ensure "librarians" is visible
});
