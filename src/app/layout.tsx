import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@/components/google-analytics'
import { StructuredData } from '@/components/structured-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ceylonnannies.com'),
  title: 'Nanny & Babysitter in Sri Lanka — Premier In-Hotel Childcare | Colombo, Kandy, Galle & South Coast',
  description: 'Premier English-speaking nanny and babysitter service across Sri Lanka. In-hotel, in-villa & in-home childcare in Colombo, Negombo, Kandy, Galle, Mirissa, Hiriketiya, Weligama, Unawatuna, Tangalle, Hambantota and more. Background-verified. Live camera on request. Book via WhatsApp.',
  keywords: 'nanny sri lanka, babysitter sri lanka, nannies sri lanka, nanny colombo, babysitter colombo, nanny kandy, nanny ella, babysitter negombo, babysitter mirissa, nanny hiriketiya, babysitter weligama, nanny galle, childcare unawatuna, nanny hambantota, hotel babysitter sri lanka, nanny near me, babysitter near me, nanny service for kids, ceylon nannies',
  openGraph: {
    title: 'Nanny & Babysitter in Sri Lanka — Premier In-Hotel Childcare',
    description: 'Premier English-speaking nanny and babysitter service across Sri Lanka. Background-verified. Live camera on request. Colombo, Kandy, Galle, Mirissa, Hiriketiya & more.',
    url: 'https://ceylonnannies.com',
    siteName: 'Ceylon Nannies',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Ceylon Nannies — Premier Childcare for Traveling Families' }],
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
