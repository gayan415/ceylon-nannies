// Single source of truth for customer reviews. Used by the homepage Reviews
// section AND every city landing page — add a review here once and it appears
// everywhere. When we later automate (Google Places API), only this file changes.

export type Review = {
  author: string
  location: string
  rating: number // out of 5
  text: string // use \n\n for paragraph breaks
}

// Order = display order: the first card is the one most visitors read, so
// lead with our core market (Australia / Western families).
export const REVIEWS: Review[] = [
  {
    author: 'Felicity',
    location: 'on a family holiday from Australia 🇦🇺',
    rating: 5,
    text: 'We had such a lovely experience with Ceylon Nannies during our holiday in Sri Lanka. We used them for two afternoons, and our three children absolutely loved spending time with the nannies. They were kind, caring, and wonderful with the kids, and it gave us complete peace of mind knowing they were so well looked after while we had a little time together. Thank you for taking such great care of our family. We’d happily recommend Ceylon Nannies to anyone travelling with children.',
  },
  {
    author: 'Or',
    location: 'on a family holiday from Israel 🇮🇱',
    rating: 5,
    text: 'We wholeheartedly recommend Ceylon Nannies. We used their service for 12 full days in Sri Lanka, and it was reliable and excellent from our first conversation until the end of our trip. Yashi managed everything with care and checked in with me every day to ask how we were doing and whether we were happy. She made us feel supported throughout our stay.\n\nKumari made our holiday wonderful. She cared for our little girl with warmth and patience, played with her, and always seemed to have the energy, a smile and a lovely attitude. She was thoughtful and proactive, including when our daughter was upset. She also carried her around a lot—something our arms were very grateful for! 😊\n\nMy wife and I hadn’t imagined we would feel comfortable leaving our daughter with a nanny while we went surfing, or that we’d get to enjoy a peaceful dinner together. Kumari earned our trust and made those moments possible. Choosing Ceylon Nannies was one of the best decisions we made on this trip. Thank you, Yashi and Kumari! ❤️',
  },
  {
    author: 'Steph',
    location: 'visiting from Melbourne 🇦🇺',
    rating: 5,
    text: 'We had an amazing experience with Ceylon Nannies! The communication was so quick via WhatsApp and everything was booked so easily. Mahesha was incredible — experienced, kind, and fun with our little boy. I would highly recommend Ceylon Nannies to anyone needing a nanny for a night out while on holiday.',
  },
  {
    author: 'Trisha',
    location: 'travelling with her baby from India 🇮🇳',
    rating: 5,
    text: 'I was initially hesitant to book a local nanny for our Sri Lanka trip, as I wasn’t sure about trusting a stranger with my baby. But Yashi from Ceylon Nannies immediately put me at ease. She was prompt, reassuring, and quickly connected us with Kumari.\n\nKumari travelled with us for 5 days and was absolutely brilliant. She was proactive, efficient, caring, and my baby warmed up to her instantly. Having her with us genuinely made our holiday so much easier and more enjoyable.\n\nHighly recommend Ceylon Nannies for families travelling to Sri Lanka with young children',
  },
]

export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/otv4oL3UC8A2HLWt8'

// Opens our Google listing with the "write a review" box already open
// (place ID + !12e1). Used by the /thank-you page; the /review short link in
// vercel.json points to the same URL — keep both in sync.
export const GOOGLE_REVIEW_URL =
  'https://www.google.com/maps/place//data=!4m3!3m2!1s0x207593e8aad6e063:0x226d9e9afb63f868!12e1'
