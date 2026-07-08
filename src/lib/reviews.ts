// Single source of truth for customer reviews. Used by the homepage Reviews
// section AND every city landing page — add a review here once and it appears
// everywhere. When we later automate (Google Places API), only this file changes.

export type Review = {
  author: string
  location: string
  rating: number // out of 5
  text: string
}

export const REVIEWS: Review[] = [
  {
    author: 'Steph',
    location: 'visiting from Melbourne 🇦🇺',
    rating: 5,
    text: 'We had an amazing experience with Ceylon Nannies! The communication was so quick via WhatsApp and everything was booked so easily. Mahesha was incredible — experienced, kind, and fun with our little boy. I would highly recommend Ceylon Nannies to anyone needing a nanny for a night out while on holiday.',
  },
  {
    author: 'Felicity',
    location: 'on a family holiday from Australia 🇦🇺',
    rating: 5,
    text: 'We had such a lovely experience with Ceylon Nannies during our holiday in Sri Lanka. We used them for two afternoons, and our three children absolutely loved spending time with the nannies. They were kind, caring, and wonderful with the kids, and it gave us complete peace of mind knowing they were so well looked after while we had a little time together. Thank you for taking such great care of our family. We’d happily recommend Ceylon Nannies to anyone travelling with children.',
  },
]

export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/otv4oL3UC8A2HLWt8'
