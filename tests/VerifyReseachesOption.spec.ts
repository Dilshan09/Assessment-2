import { test, expect } from '@playwright/test';

test('Verify Researchers Option Exists', async ({ page }) => {
  // Open the homepage
  await page.goto('https://onlinelibrary.wiley.com/', { waitUntil: 'domcontentloaded' });

  // Check if the "Researchers" option exists
  const researchersOption = page.locator("//a[@href='/researchers' and contains(text(), 'Researchers')]");
  await expect(researchersOption).toBeVisible(); // Ensure "Researchers" is visible
});
