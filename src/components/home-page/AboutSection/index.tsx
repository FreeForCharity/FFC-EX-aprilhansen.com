import React from 'react'

/**
 * AboutSection — long-form biography from the original WordPress source.
 *
 * Replaces the FFC-template Mission component. The Mission directory still
 * exists at src/components/home-page/Mission/ for backward reference but is
 * no longer imported by the home page.
 */
const AboutSection: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-paper py-16 md:py-24">
      <div className="ah-container max-w-[820px]">
        <header className="text-center mb-10 md:mb-12">
          <p className="aria-font text-[12px] md:text-[13px] tracking-[0.28em] uppercase text-[var(--ah-gold)] mb-3">
            In Memoriam
          </p>
          <h2
            id="about-heading"
            className="display-font text-[32px] md:text-[44px] font-[400] leading-[1.15] text-[var(--ah-primary)]"
          >
            April Hansen
          </h2>
          <div aria-hidden="true" className="mt-6 max-w-[200px] mx-auto">
            <div className="ah-rule" />
          </div>
        </header>

        <div className="body-font text-[17px] md:text-[19px] leading-[1.8] text-[var(--ah-ink)]/90 space-y-6">
          <p>
            April Hansen, known to many as{' '}
            <em className="text-[var(--ah-primary)]">The Trendy Little Geek</em>, worked in the
            fields of graphic design, art, and textiles. Born with a passion for creativity, April
            pursued her dreams with relentless dedication.
          </p>
          <p>
            As a graphic designer, she pushed the boundaries of digital art, creating visually
            stunning pieces that resonated with audiences and the charities she supported. Her
            artistic endeavors extended beyond digital media, as she explored the world of textiles,
            crafting beautiful and innovative designs.
          </p>
          <p>
            April&apos;s contributions to the creative community were profound, inspiring countless
            individuals to embrace their artistic potential. Her legacy continues to inspire.
          </p>
        </div>

        <div aria-hidden="true" className="mt-12 md:mt-16 max-w-[400px] mx-auto">
          <div className="ah-rule" />
        </div>

        <p className="body-font mt-10 text-center italic text-[15px] md:text-[16px] text-[var(--ah-muted)] max-w-[60ch] mx-auto">
          Site hosted and supported in memorial by{' '}
          <a
            href="https://freeforcharity.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--ah-primary)] underline decoration-[var(--ah-gold)] underline-offset-4 hover:decoration-[var(--ah-primary)] transition-colors"
          >
            freeforcharity.org
          </a>{' '}
          — a charity to which she volunteered her graphic design services.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
