'use client'

import { useEffect, useRef, useState } from 'react'
import { REVIEWS, type Review } from '@/lib/reviews'

export function Stars({ rating }: { rating: number }) {
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

// One review, clamped to 6 lines with a "Read more" toggle so long reviews
// don't turn the section into a wall of text.
function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false)
  const [clamped, setClamped] = useState(false)
  const textRef = useRef<HTMLQuoteElement>(null)

  // Only show "Read more" when the text actually overflows 6 lines.
  useEffect(() => {
    const check = () => {
      const el = textRef.current
      if (el && !expanded) setClamped(el.scrollHeight > el.clientHeight + 1)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [expanded])

  return (
    <div className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[calc(50%-0.75rem)] bg-ocean-900 rounded-2xl p-6 md:p-8 border border-ocean-800 shadow-lg">
      <Stars rating={review.rating} />
      <blockquote
        ref={textRef}
        className={`text-ocean-100 text-base md:text-lg leading-relaxed whitespace-pre-line mt-5 ${
          expanded ? '' : 'line-clamp-6'
        }`}
      >
        &ldquo;{review.text}&rdquo;
      </blockquote>
      {(clamped || expanded) && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-sm font-semibold text-sand-300 hover:text-sand-200 transition-colors"
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
      <div className="flex items-center gap-3 mt-5">
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

function ArrowButton({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-ocean-800 hover:bg-ocean-700 text-white flex items-center justify-center transition-colors"
      aria-label={direction === 'prev' ? 'Previous review' : 'Next review'}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d={direction === 'prev' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
      </svg>
    </button>
  )
}

// Horizontally scrolling row of reviews — swipe on mobile (the next card
// peeks in), arrow buttons on desktop. Used on the homepage and town pages.
export function ReviewCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current
    const card = el?.firstElementChild as HTMLElement | null
    if (!el || !card) return
    el.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: 'smooth' })
  }

  return (
    <div>
      <div
        ref={scrollerRef}
        className="no-scrollbar flex items-start gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
        role="region"
        aria-label="Customer reviews"
        tabIndex={0}
      >
        {REVIEWS.map((review) => (
          <ReviewCard key={review.author} review={review} />
        ))}
      </div>
      {REVIEWS.length > 1 && (
        <div className="flex items-center justify-center gap-3 mt-6">
          <ArrowButton direction="prev" onClick={() => scroll(-1)} />
          <span className="text-sm text-ocean-400">Swipe or tap to see all {REVIEWS.length} reviews</span>
          <ArrowButton direction="next" onClick={() => scroll(1)} />
        </div>
      )}
    </div>
  )
}
