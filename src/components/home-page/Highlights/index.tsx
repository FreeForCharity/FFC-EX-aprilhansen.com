import React from 'react'

/**
 * Three short blurbs from the original WordPress page that summarise April's
 * creative practice: graphic design, art, and textiles.
 */
interface Highlight {
  title: string
  body: string
  numeral: string
}

const HIGHLIGHTS: Highlight[] = [
  {
    numeral: '01',
    title: 'Innovative Graphic Designer',
    body: "April's unique approach to graphic design combined artistic flair with cutting-edge technology.",
  },
  {
    numeral: '02',
    title: 'Visionary Artist',
    body: 'Her artwork, characterized by vibrant colors and intricate details, captivated people and inspired fellow artists.',
  },
  {
    numeral: '03',
    title: 'Textiles Expert',
    body: "April's expertise in textiles brought a fresh perspective to fabric design, blending traditional techniques with modern aesthetics.",
  },
]

const Highlights: React.FC = () => {
  return (
    <section
      id="highlights"
      aria-labelledby="highlights-heading"
      className="bg-[#f0ece4] py-16 md:py-24"
    >
      <div className="ah-container">
        <h2 id="highlights-heading" className="sr-only">
          Highlights of April&apos;s creative work
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {HIGHLIGHTS.map((item) => (
            <li key={item.title} className="relative border-t-2 border-[var(--ah-gold)] pt-8">
              <span
                aria-hidden="true"
                className="aria-font absolute top-6 right-0 text-[48px] font-[700] leading-none text-[var(--ah-rule)] select-none"
              >
                {item.numeral}
              </span>
              <h3 className="display-font text-[22px] md:text-[24px] font-[400] leading-[1.25] text-[var(--ah-primary)] mb-3 pr-14">
                {item.title}
              </h3>
              <p className="body-font text-[16px] md:text-[17px] leading-[1.7] text-[var(--ah-ink)]/85">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Highlights
