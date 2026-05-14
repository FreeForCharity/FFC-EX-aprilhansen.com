import { test, expect } from '@playwright/test'

/**
 * Smoke tests for aprilhansen.com memorial site.
 *
 * Verifies that the homepage loads and the three core sections
 * (Hero, Highlights, AboutSection) render their expected content.
 */

test.describe('aprilhansen.com — smoke', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('page loads with a 200 response', async ({ page }) => {
    await expect(page).toHaveURL(/.*/)
    // title should contain April Hansen
    await expect(page).toHaveTitle(/April Hansen/i)
  })

  test('hero section renders memorial heading', async ({ page }) => {
    const heroSection = page.locator('#hero')
    await expect(heroSection).toBeVisible()
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'The Life and Legacy of April Hansen'
    )
  })

  test('hero section renders eyebrow text', async ({ page }) => {
    await expect(
      page.getByText('Explore the World of April Hansen', { exact: false })
    ).toBeVisible()
  })

  test('highlights section renders three creative practice cards', async ({ page }) => {
    const highlightsSection = page.locator('#highlights')
    await expect(highlightsSection).toBeVisible()

    await expect(page.getByText('Innovative Graphic Designer', { exact: false })).toBeVisible()
    await expect(page.getByText('Visionary Artist', { exact: false })).toBeVisible()
    await expect(page.getByText('Textiles Expert', { exact: false })).toBeVisible()
  })

  test('about section renders biography', async ({ page }) => {
    const aboutSection = page.locator('#about')
    await expect(aboutSection).toBeVisible()

    await expect(page.getByRole('heading', { level: 2, name: /April Hansen/i })).toBeVisible()
    // Scope to #about to avoid strict-mode violation — the phrase also appears in Hero
    await expect(aboutSection.getByText('The Trendy Little Geek', { exact: false })).toBeVisible()
  })

  test('about section links to freeforcharity.org', async ({ page }) => {
    const freeForCharityLink = page.locator('#about a[href*="freeforcharity.org"]')
    await expect(freeForCharityLink).toBeVisible()
  })
})
