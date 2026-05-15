import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for aprilhansen.com — a memorial site honoring the life and legacy of April Hansen.',
}

export default function TermsOfService() {
  return (
    <main className="pt-[130px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] max-w-[820px] mx-auto">
        <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
          <em>Effective Date: 2026-05-15</em>
        </p>

        <h1 className="text-[30px] text-[#333] pb-[10px] leading-[1em] font-[500]">
          Terms of Service
        </h1>

        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          Welcome to aprilhansen.com (the &ldquo;Site&rdquo;), a memorial site honoring the life and
          legacy of April Hansen. By accessing or using the Site, you agree to these Terms of
          Service.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          Purpose
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          The Site exists to celebrate April Hansen&rsquo;s life, art, and contributions. Content
          is provided for remembrance and educational purposes only.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          Content and copyright
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          Text, images, and other media on the Site are owned by the family and estate of April
          Hansen unless otherwise credited. Please do not reproduce or redistribute Site content
          without permission. Quotations for editorial, journalistic, or personal-tribute purposes
          are welcome with attribution.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          Acceptable use
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          You agree not to use the Site to harass, defame, or impersonate April Hansen or anyone
          associated with this memorial; not to attempt to compromise the security or availability
          of the Site; and not to use the Site for commercial solicitation.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          No warranty
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          The Site is provided &ldquo;as is&rdquo; without warranty of any kind. We make no
          representations about the accuracy or completeness of any information.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          Hosting attribution
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          The Site is hosted as a volunteer-maintained memorial by{' '}
          <a
            href="https://freeforcharity.org"
            className="text-[#007bff] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Free For Charity
          </a>
          , a US 501(c)(3) nonprofit that builds and hosts websites for charitable causes.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          Changes
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          We may update these Terms occasionally. Continued use of the Site after changes are posted
          constitutes acceptance of the revised Terms.
        </p>

        <h2 className="text-[22px] text-[#333] pt-[12px] pb-[8px] leading-[1.2em] font-[600]">
          Contact
        </h2>
        <p className="text-[14px] text-[#666] pb-[16px] leading-[24px] font-[500]">
          Questions about these Terms can be sent through the contact information on{' '}
          <a href="/" className="text-[#007bff] underline">
            our home page
          </a>
          .
        </p>
      </div>
    </main>
  )
}
