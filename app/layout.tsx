import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pratham Dabhane',
  description: 'Personal portfolio of PRATHAM DABHANE, a passionate software engineer and developer specializing in modern web technologies.',
  keywords: ['AI & DS engineer', 'developer', 'Machine Learning', 'portfolio'],
  authors: [{ name: 'Pratham Dabhane' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.jpg" />
        <link rel="shortcut icon" href="/favicon.jpg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
