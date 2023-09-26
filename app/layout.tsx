import '@/styles/globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Weekly Asteroids',
  description: 'View details about asteroids expected to approach Earth in the next week.',
}

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={poppins.className} lang="en">
      <body>{children}</body>
    </html>
  )
}
