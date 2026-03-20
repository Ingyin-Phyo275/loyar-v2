import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import TanstackProvider from '@/provider/TanStackProvider'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Loyar Myanmar',
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
      <body className="font-sans antialiased" suppressHydrationWarning>
        <TanstackProvider>
          {children}
          <Toaster richColors position='bottom-right' />
        </TanstackProvider>
        <Analytics />
      </body>
    </html>
  )
}
