import type { Metadata } from 'next'
import { Outfit, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-sans',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Hand Sanitizer Preparation | Chemical Prototyping Experiment',
  description: 'A college project on hand sanitizer preparation - chemical prototyping experiment by Abhijeet Damal, Piyush Sarode, Shravani Minache, and Vikrant Haral',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

import { BackgroundBubbles } from '@/components/background-bubbles'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${poppins.variable} font-sans antialiased`}>
        <BackgroundBubbles />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
