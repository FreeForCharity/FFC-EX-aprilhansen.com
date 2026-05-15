'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

/**
 * Header — minimal wordmark for the aprilhansen.com memorial site.
 *
 * The original WordPress site had a single "Home" menu item; on the static
 * port we replace that with a quiet serif wordmark that scrolls back to the
 * top of the page. No search, no mobile menu — there is nowhere else to go.
 */
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      id="header"
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--ah-paper)]/95 backdrop-blur-sm shadow-[0_1px_0_var(--ah-rule)] h-[56px]'
          : 'bg-transparent h-[72px]'
      }`}
    >
      <div className="ah-container h-full flex items-center justify-center">
        <Link
          href="/#hero"
          aria-label="April Hansen — home"
          className="display-font text-[var(--ah-primary)] hover:text-[var(--ah-primary-soft)] transition-colors text-[18px] md:text-[20px] tracking-[0.04em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ah-primary)] rounded-sm"
        >
          April Hansen
        </Link>
      </div>
    </header>
  )
}

export default Header
