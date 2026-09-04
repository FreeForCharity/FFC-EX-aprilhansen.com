'use client'

import React from 'react'
import Link from 'next/link'

/**
 * Footer — quiet attribution and policy links for the aprilhansen.com
 * memorial site. The visual style is intentionally restrained: a thin gold
 * rule, small caps attribution, and inline links — no large social-media
 * graphics or CTA cards (this is not a transactional site).
 */
const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])

  return (
    <footer role="contentinfo" className="bg-paper text-[var(--ah-ink)] mt-8">
      <div className="ah-container py-12 md:py-16 max-w-[720px] text-center">
        <div aria-hidden="true" className="ah-rule mb-10" />

        <p className="aria-font text-[12px] tracking-[0.28em] uppercase text-[var(--ah-gold)] mb-4">
          In Loving Memory
        </p>

        <p className="display-font text-[22px] md:text-[26px] text-[var(--ah-primary)] mb-6">
          April Hansen
        </p>

        <p className="body-font italic text-[15px] md:text-[16px] leading-[1.7] text-[var(--ah-muted)] max-w-[58ch] mx-auto mb-8">
          Site hosted and supported in memorial by{' '}
          <Link
            href="https://freeforcharity.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--ah-primary)] underline decoration-[var(--ah-gold)] underline-offset-4 hover:decoration-[var(--ah-primary)] transition-colors"
          >
            Free For Charity
          </Link>{' '}
          — a US 501(c)(3) nonprofit to which she volunteered her graphic design services.
        </p>

        <nav aria-label="Site policies" className="mb-8">
          <ul className="aria-font flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-[var(--ah-muted)]">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-[var(--ah-primary)] transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li aria-hidden="true">·</li>
            <li>
              <Link
                href="/terms-of-service"
                className="hover:text-[var(--ah-primary)] transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li aria-hidden="true">·</li>
            <li>
              {/* Persistent consent re-entry point (withdrawing consent must
                  stay as easy as giving it): reopens the preferences modal
                  the cookie-consent banner registers on window. */}
              <button
                type="button"
                onClick={() => window.openCookiePreferences?.()}
                className="hover:text-[var(--ah-primary)] transition-colors"
              >
                Cookie Preferences
              </button>
            </li>
          </ul>
        </nav>

        <p
          className="aria-font text-[12px] text-[var(--ah-muted)]"
          aria-label={`Copyright ${currentYear}`}
        >
          © {currentYear} aprilhansen.com — A memorial site maintained by Free For Charity.
        </p>
      </div>
    </footer>
  )
}

export default Footer
