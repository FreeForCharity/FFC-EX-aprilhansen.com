import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Header from '../../src/components/header'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))

describe('Header component (aprilhansen.com memorial wordmark)', () => {
  it('should render a banner landmark', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should display the April Hansen wordmark', () => {
    render(<Header />)
    expect(screen.getByLabelText(/April Hansen.*home/i)).toBeInTheDocument()
  })

  it('should link the wordmark to the hero anchor', () => {
    render(<Header />)
    const link = screen.getByLabelText(/April Hansen.*home/i)
    expect(link).toHaveAttribute('href', '/#hero')
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
