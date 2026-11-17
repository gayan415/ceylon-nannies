import type { Metadata } from 'next'
import { GOOGLE_REVIEW_URL } from '@/lib/reviews'

// Short link ceylonnannies.com/review → Google's "write a review" box.
// A page (not a vercel.json redirect) because the Google URL contains ":",
// which vercel.json treats as a route parameter and rejects.
export const metadata: Metadata = {
  title: 'Leave a review — Ceylon Nannies',
  robots: { index: false, follow: false },
}

export default function ReviewRedirectPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 text-center">
      <script
        // Static, trusted URL constant — runs immediately, before React loads.
        // The link below is the fallback if JavaScript is off.
        dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(GOOGLE_REVIEW_URL)})` }}
      />
      <p className="text-ocean-700">
        Taking you to Google…{' '}
        <a href={GOOGLE_REVIEW_URL} className="underline font-medium">
          Tap here if nothing happens
        </a>
      </p>
    </main>
  )
}
