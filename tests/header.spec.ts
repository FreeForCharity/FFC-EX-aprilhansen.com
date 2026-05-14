import { test, expect } from '@playwright/test'

/**
 * E2E tests for the aprilhansen.com Header component.
 *
 * The header is a minimal wordmark — no nav menu, no logo image.
 * It renders a single link back to the hero anchor.
 */

test.describe('Header', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders the banner landmark', async ({ page }) => {
    await expect(page.getByRole('banner')).toBeVisible()
  })

  test('displays the April Hansen wordmark link', async ({ page }) => {
    const wordmark = page.getByLabel(/April Hansen.*home/i)
    await expect(wordmark).toBeVisible()
  })

  test('wordmark links to the hero anchor', async ({ page }) => {
    const wordmark = page.getByLabel(/April Hansen.*home/i)
    await expect(wordmark).toHaveAttribute('href', '/#hero')
  })
})
