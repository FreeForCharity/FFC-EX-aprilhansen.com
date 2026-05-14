import { test, expect } from '@playwright/test'

/**
 * E2E tests for the aprilhansen.com Footer component.
 *
 * The footer has: an "In Loving Memory" eyebrow, the April Hansen name,
 * a Free For Charity attribution link, and policy nav links.
 */

test.describe('Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders the contentinfo landmark', async ({ page }) => {
    await expect(page.getByRole('contentinfo')).toBeVisible()
  })

  test('displays In Loving Memory eyebrow', async ({ page }) => {
    await expect(page.getByText('In Loving Memory', { exact: false })).toBeVisible()
  })

  test('displays April Hansen as the memorialized name', async ({ page }) => {
    const footer = page.getByRole('contentinfo')
    await expect(footer.getByText('April Hansen', { exact: false })).toBeVisible()
  })

  test('links to Free For Charity', async ({ page }) => {
    const footer = page.getByRole('contentinfo')
    const freeForCharityLink = footer.getByRole('link', { name: /Free For Charity/i })
    await expect(freeForCharityLink).toBeVisible()
    await expect(freeForCharityLink).toHaveAttribute('href', 'https://freeforcharity.org')
  })

  test('contains privacy policy link', async ({ page }) => {
    const footer = page.getByRole('contentinfo')
    const privacyLink = footer.getByRole('link', { name: /Privacy Policy/i })
    await expect(privacyLink).toHaveAttribute('href', '/privacy-policy')
  })

  test('contains terms of service link', async ({ page }) => {
    const footer = page.getByRole('contentinfo')
    const tosLink = footer.getByRole('link', { name: /Terms of Service/i })
    await expect(tosLink).toHaveAttribute('href', '/terms-of-service')
  })

  test('displays copyright with the current year', async ({ page }) => {
    const currentYear = new Date().getFullYear().toString()
    const footer = page.getByRole('contentinfo')
    await expect(footer.getByText(new RegExp(currentYear))).toBeVisible()
  })
})
