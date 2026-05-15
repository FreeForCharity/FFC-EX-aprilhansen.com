import React from 'react'

/**
 * Hero — memorial banner for aprilhansen.com.
 *
 * Mirrors the original WordPress page structure:
 *   - Eyebrow:    "Explore the World of April Hansen"
 *   - Sub-eyebrow:"Celebrating Creativity and Innovation"
 *   - H1:         "The Life and Legacy of April Hansen"
 *   - Lead:       Trendy Little Geek introduction
 *
 * Visual treatment is intentionally quiet: warm paper background with a
 * slate-blue ink palette and a soft gold rule. No CTAs — this is a tribute
 * page, not a transactional one.
 */
const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden bg-paper pt-[120px] pb-[80px] md:pt-[160px] md:pb-[120px]"
    >
      {/* Decorative SVG background pattern — purely visual */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.045]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="ah-diamonds"
            x="0"
            y="0"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path d="M32 4 L60 32 L32 60 L4 32 Z" fill="none" stroke="#a88b5c" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ah-diamonds)" />
      </svg>

      {/* Subtle decorative top rule */}
      <div aria-hidden="true" className="ah-container max-w-[640px] mb-10 md:mb-14">
        <div className="ah-rule" />
      </div>

      <div className="ah-container text-center">
        <p className="aria-font text-[13px] md:text-[14px] tracking-[0.28em] uppercase text-[var(--ah-gold)] mb-3">
          Explore the World of April Hansen
        </p>
        <p className="body-font text-[15px] md:text-[16px] italic text-[var(--ah-muted)] mb-8">
          Celebrating Creativity and Innovation
        </p>

        <h1
          id="hero-heading"
          className="display-font text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] font-[400] leading-[1.12] text-[var(--ah-primary)] mb-8 max-w-[18ch] mx-auto"
        >
          The Life and Legacy of April Hansen
        </h1>

        <p className="body-font text-[17px] md:text-[19px] leading-[1.7] text-[var(--ah-ink)]/85 max-w-[62ch] mx-auto">
          Explore the remarkable journey of April Hansen, affectionately known as{' '}
          <em className="text-[var(--ah-primary)]">The Trendy Little Geek</em>, whose creativity and
          passion left an indelible mark on the world of design and textiles.
        </p>

        <div aria-hidden="true" className="ah-container max-w-[640px] mt-12 md:mt-16">
          <div className="ah-rule" />
        </div>
      </div>
    </section>
  )
}

export default Hero
