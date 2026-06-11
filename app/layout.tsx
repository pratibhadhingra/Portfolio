import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Providers from './providers'
import './globals.css'
import content from '../locales/en.json'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(content.metadata.domain),
  title: content.metadata.title,
  description: content.metadata.description,

  openGraph: {
    title: content.metadata.title,
    description: content.metadata.description,
    images: ['/opengraph-image'],
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geistSans.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
