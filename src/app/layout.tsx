import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Brew Heaven Cafe | Premium Luxury Coffee Experience',
  description: 'Experience the pinnacle of luxury coffee culture at Brew Heaven Cafe. Award-winning espresso, artisanal pastries, and an unforgettable ambiance in Addis Ababa.',
  keywords: 'luxury cafe, premium coffee, espresso, latte art, Addis Ababa, cafe culture',
  authors: [{ name: 'Brew Heaven Cafe' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brewheavencafe.com',
    siteName: 'Brew Heaven Cafe',
    title: 'Brew Heaven Cafe | Premium Luxury Coffee Experience',
    description: 'Experience the pinnacle of luxury coffee culture at Brew Heaven Cafe.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brew Heaven Cafe | Premium Luxury Coffee Experience',
    description: 'Experience the pinnacle of luxury coffee culture.',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0E0B0A" />
      </head>
      <body className="bg-espresso text-cream overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
