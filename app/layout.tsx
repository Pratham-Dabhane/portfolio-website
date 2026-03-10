import type { Metadata, Viewport } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import Cursor from '@/components/Cursor'

export const metadata: Metadata = {
  title: 'Pratham Dabhane',
  description: 'Personal portfolio of PRATHAM DABHANE, a passionate software engineer and developer specializing in modern web technologies.',
  keywords: ['AI & DS engineer', 'developer', 'Machine Learning', 'portfolio'],
  authors: [{ name: 'Pratham Dabhane' }],
  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg" />
        <link rel="shortcut icon" href="/favicon.jpg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
      </head>
      <body className="antialiased bg-bg text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Cursor />
      </body>
    </html>
  )
}
