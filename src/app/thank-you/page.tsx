import type { Metadata } from 'next'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Footer } from '@/components/footer'
import { WhatsAppIcon } from '@/components/icons'
import { PaymentConfirmation } from '@/components/payment-confirmation'
import { GOOGLE_REVIEW_URL } from '@/lib/reviews'

// Post-payment landing page (Stripe Payment Link → "After payment" redirect).
// Not for search — kept out of the sitemap and noindexed.
export const metadata: Metadata = {
  title: 'Thank You — Ceylon Nannies',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-ocean-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5">
            <Logo className="w-9 h-9" />
            <span className="text-lg font-bold text-ocean-900">Ceylon Nannies</span>
          </Link>
          <Link href="/" className="text-sm text-ocean-600 hover:text-ocean-800 transition-colors">
            &larr; Back to home
          </Link>
        </div>
      </header>

      <main className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
            <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <PaymentConfirmation />

          {/* Review request — the moment right after a happy session is when
              families are most likely to leave one. */}
          <div className="mt-10 bg-white border-2 border-sand-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex justify-center gap-1 text-sand-400 mb-3" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-ocean-950 mb-2">
              Would you share your experience?
            </h2>
            <p className="text-ocean-700 mb-6">
              A quick Google review helps other travelling families find a nanny they can trust —
              and it means the world to our small team. It takes about a minute.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="review_click"
              data-cta="thank-you"
              className="inline-flex items-center gap-2 bg-ocean-600 hover:bg-ocean-700 text-white px-7 py-3.5 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-ocean-600/25"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#fff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#fff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#fff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Leave a Google review
            </a>
          </div>

          <p className="mt-10 text-ocean-600">
            Staying a little longer?{' '}
            <a
              href="https://wa.me/14034044643?text=Hi%20Ceylon%20Nannies!%20We%27d%20love%20to%20book%20another%20session."
              target="_blank"
              rel="noopener noreferrer"
              data-cta="thank-you-rebook"
              className="inline-flex items-center gap-1.5 font-semibold text-green-600 hover:text-green-700"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Book another session
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}
