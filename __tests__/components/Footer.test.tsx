import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../src/components/footer'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('Footer component (aprilhansen.com memorial)', () => {
  it('should render the footer landmark', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('should display the In Loving Memory eyebrow', () => {
    render(<Footer />)
    expect(screen.getByText(/In Loving Memory/i)).toBeInTheDocument()
  })

  it('should display April Hansen as the memorialized name', () => {
    render(<Footer />)
    const matches = screen.getAllByText(/April Hansen/i)
    expect(matches.length).toBeGreaterThan(0)
  })

  it('should attribute hosting to Free For Charity', () => {
    render(<Footer />)
    const matches = screen.getAllByText(/Free For Charity/i)
    expect(matches.length).toBeGreaterThan(0)
  })

  it('should link to privacy policy and terms of service', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const hrefs = links.map((l) => l.getAttribute('href'))
    expect(hrefs).toContain('/privacy-policy')
    expect(hrefs).toContain('/terms-of-service')
  })

  it('should display the current year in copyright', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
