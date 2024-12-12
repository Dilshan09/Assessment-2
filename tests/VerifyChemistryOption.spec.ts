import { test, expect } from '@playwright/test';

test('Verify Chemistry Section Exists', async ({ page }) => {
  // Open the homepage
  await page.goto('https://onlinelibrary.wiley.com/', { waitUntil: 'domcontentloaded' });

  // Check if the Chemistry section exists
  const chemistryHeader = page.locator("//a[contains(@class, 'accordion-tabbed__control') and contains(text(), 'Chemistry')]");
  await expect(chemistryHeader).toBeVisible(); // Ensure "Chemistry" is visible
});
