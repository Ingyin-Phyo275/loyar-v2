import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Loyar Taxi - Your Trusted Ride Partner',
  description: 'Loyar Taxi offers reliable, affordable, and safe transportation services. Book Loyar Thwar, Loyar Sar, Loyar Poh, and Airport Checkin rides with ease.',
  keywords: 'taxi, ride, transportation, Loyar, airport transfer, Myanmar taxi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
