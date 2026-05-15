import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import CookieConsent from './../components/cookie-consent'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
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
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '32x32' },
      { url: `${basePath}/icon.png`, type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: `${basePath}/apple-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}

export const viewport: Viewport = {
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
        <GoogleTagManager />
      </head>
      <body
        className={['antialiased', openSans.variable, lora.variable, quattrocento.variable].join(
          ' '
        )}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
