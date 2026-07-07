import { WhatsAppIcon } from './icons'

// Review data is kept separate from the markup so that when we later automate
// (Google Places API or a reviews widget), only this array changes — not the design.
type Review = {
  author: string
  location: string
  rating: number // out of 5
  text: string
}

const reviews: Review[] = [
  {
    author: 'Steph',
    location: 'visiting from Melbourne 🇦🇺',
    rating: 5,
    text: 'We had an amazing experience with Ceylon Nannies! The communication was so quick via WhatsApp and everything was booked so easily. Mahesha was incredible — experienced, kind, and fun with our little boy. I would highly recommend Ceylon Nannies to anyone needing a nanny for a night out while on holiday.',
  },
  {
    author: 'Felicity',
    location: 'holidaying in Sri Lanka',
    rating: 5,
    text: 'We had such a lovely experience with Ceylon Nannies during our holiday in Sri Lanka. We used them for two afternoons, and our three children absolutely loved spending time with the nannies. They were kind, caring, and wonderful with the kids, and it gave us complete peace of mind knowing they were so well looked after while we had a little time together. Thank you for taking such great care of our family. We’d happily recommend Ceylon Nannies to anyone travelling with children.',
  },
]

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/otv4oL3UC8A2HLWt8'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-sand-400' : 'text-ocean-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-ocean-900 rounded-2xl p-6 md:p-8 border border-ocean-800 shadow-lg">
      <Stars rating={review.rating} />
      <blockquote className="text-ocean-100 text-base md:text-lg leading-relaxed my-5">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-sand-400 flex items-center justify-center text-ocean-950 font-bold text-lg">
          {review.author.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-white">{review.author}</div>
          <div className="text-sm text-ocean-400">{review.location}</div>
        </div>
      </div>
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-ocean-950">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-ocean-800 px-4 py-1.5 rounded-full text-sm text-sand-300 mb-4">
            <Stars rating={5} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Loved by Families on Holiday
          </h2>
          <p className="text-ocean-300 max-w-xl mx-auto">
            Real words from real parents who enjoyed their evening while their little
            ones were in safe hands.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-10 items-start">
          {reviews.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-ocean-50 text-ocean-900 px-6 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            See all our reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
