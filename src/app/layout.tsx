import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import CookieConsent from './../components/cookie-consent'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
import { CONSENT_MODE_BOOTSTRAP } from '@/lib/consent-mode'
import { openSans, lora, quattrocento } from '@/lib/fonts'

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://aprilhansen.com'),
  title: {
    default: 'April Hansen | The Life and Legacy of The Trendy Little Geek',
    template: '%s | April Hansen',
  },
  description:
    'A memorial tribute to April Hansen — known to many as The Trendy Little Geek — celebrating her creativity and passion in graphic design, art, and textiles.',
  keywords: [
    'April Hansen',
    'The Trendy Little Geek',
    'memorial',
    'tribute',
    'graphic designer',
    'textile artist',
    'creative legacy',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://aprilhansen.com/',
    siteName: 'April Hansen',
    title: 'April Hansen | The Life and Legacy of The Trendy Little Geek',
    description:
      'A memorial tribute to April Hansen — celebrating her creativity in graphic design, art, and textiles.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'April Hansen — In Memoriam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'April Hansen | The Life and Legacy of The Trendy Little Geek',
    description:
      'A memorial tribute to April Hansen — celebrating her creativity in graphic design, art, and textiles.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: `${basePath}/icon.svg`, type: 'image/svg+xml' }],
    apple: [{ url: `${basePath}/apple-icon.svg`, type: 'image/svg+xml' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#22577a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Consent Mode v2 defaults — MUST run before any Google tag
            (i.e. before the GoogleTagManager component below) so the global
            consent defaults are already on the dataLayer when GTM/GA4
            initialise. Denied worldwide: one unscoped default withholds
            analytics and ad storage from every visitor until they opt in, so
            there is no region left for Google to resolve from the visitor's IP
            address. See src/lib/consent-mode.ts. */}
        <script dangerouslySetInnerHTML={{ __html: CONSENT_MODE_BOOTSTRAP }} />
        <GoogleTagManager />
      </head>
      <body
        className={['antialiased', openSans.variable, lora.variable, quattrocento.variable].join(
          ' '
        )}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
