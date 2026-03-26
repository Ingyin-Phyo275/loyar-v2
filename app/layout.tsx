import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import TanstackProvider from '@/provider/TanStackProvider'
import { Toaster } from '@/components/ui/sonner'
import { Suspense } from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Loyar Myanmar',
  description: 'Loyar Taxi offers reliable, affordable, and safe transportation services. Book Loyar Thwar, Loyar Sar, Loyar Poh, and Airport Checkin rides with ease.',
  keywords: 'taxi, ride, transportation, Loyar, airport transfer, Myanmar taxi',
  icons: {
    icon: [
      {
        url: '/images/loyar_logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/loyar_logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/loyar_logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <TanstackProvider>
          <Suspense>
            {children}
          </Suspense>
          <Toaster richColors position='bottom-right' />
        </TanstackProvider>
        <Analytics />
      </body>
    </html>
  )
}
