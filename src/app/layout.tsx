import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@/components/google-analytics'
import { StructuredData } from '@/components/structured-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nanny & Babysitter in Sri Lanka — In-Hotel Childcare | Mirissa, Hiriketiya, Weligama, Galle',
  description: 'Trusted nanny and babysitter service in Sri Lanka south coast. In-hotel & in-villa childcare. Live camera access available on request. Serving Mirissa, Hiriketiya, Weligama, Unawatuna, Galle, Ahangama, Hikkaduwa & Tangalle. English-speaking, background-verified. Book via WhatsApp.',
  keywords: 'nanny sri lanka, babysitter sri lanka, babysitter mirissa, nanny hiriketiya, babysitter weligama, nanny galle, childcare unawatuna, babysitter ahangama, hotel babysitter sri lanka, nanny south coast sri lanka, babysitter hikkaduwa, nanny tangalle, ceylon nannies',
  openGraph: {
    title: 'Nanny & Babysitter in Sri Lanka — In-Hotel Childcare',
    description: 'Trusted nanny and babysitter service on Sri Lanka south coast. English-speaking, background-verified. Live camera available on request. Mirissa, Hiriketiya, Weligama, Galle.',
    url: 'https://ceylonnannies.com',
    siteName: 'Ceylon Nannies',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Ceylon Nannies — Trusted Childcare for Traveling Families' }],
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
