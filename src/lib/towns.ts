// Town/city landing page data. One entry per page — the shared TownPage
// template renders them all. South-coast towns use approved verbatim copy;
// newer city pages (Colombo, Negombo, Kandy, Hambantota) use on-brand drafted copy.

export type Town = {
  slug: string // e.g. 'nanny-galle' → /nanny-galle
  name: string // e.g. 'Galle'
  region: 'South Coast' | 'Western' | 'Hill Country'
  metaTitle: string
  metaDescription: string
  h1: string
  paragraphs: string[]
  ctaText: string
}

export const TOWNS: Town[] = [
  {
    slug: 'nanny-galle',
    name: 'Galle',
    region: 'South Coast',
    metaTitle: 'Nanny & Babysitter in Galle, Sri Lanka — Hotel & Villa Childcare',
    metaDescription:
      'Premier English-speaking nanny service in Galle. In-hotel and in-villa childcare near Galle Fort, Unawatuna Road and beyond. Message us on WhatsApp for a quote.',
    h1: 'Nanny & Babysitter in Galle, Sri Lanka',
    paragraphs: [
      'There’s a reason so many families fall in love with Galle. The old Fort glows gold in the evening light, café tables spill onto cobbled lanes, and the ramparts at sunset feel like they were made for slow walks. It’s also where many of our families come for the most special occasions of all — weddings, anniversaries, and once-in-a-lifetime celebrations.',
      'And that’s exactly when you need a second pair of hands you can truly trust.',
      'Our nanny comes directly to your hotel or villa — whether you’re staying inside the Fort at a boutique heritage hotel, along Lighthouse Beach, or in a family villa on the edge of town. While you enjoy a candlelit dinner on the ramparts or dance at a wedding just steps away, your little one is settled, safe, and cared for exactly the way you would do it yourself.',
      'Every booking starts with a short video call, so you and your child meet your nanny before day one. She arrives early, follows your routines — bath, milk, stories, lights out — and optional live camera access lets you check in anytime, right from your phone at the table.',
      'Galle gave you the perfect evening. Let us take care of the rest.',
    ],
    ctaText: 'Message us on WhatsApp — we’re in Galle',
  },
  {
    slug: 'nanny-unawatuna',
    name: 'Unawatuna',
    region: 'South Coast',
    metaTitle: 'Nanny & Babysitter in Unawatuna, Sri Lanka — Beachside Childcare',
    metaDescription:
      'English-speaking nanny service in Unawatuna. We come to your hotel or villa near the bay. Safe, vetted, flexible childcare for travelling families.',
    h1: 'Nanny & Babysitter in Unawatuna, Sri Lanka',
    paragraphs: [
      'Unawatuna is the beach families dream about — a gentle, palm-fringed crescent where the water stays calm enough for little legs, and breakfast somehow drifts into sunset without anyone checking the time. Jungle Beach for a morning adventure, fresh juice under the palms by noon, tiny feet in the sand all afternoon.',
      'But even in paradise, parents deserve a real break.',
      'That’s where we come in. Our nanny travels to your hotel, guesthouse, or villa anywhere around the bay. Maybe you’d love a long dinner for two at one of the beachfront restaurants, an early-morning dive trip, or simply an uninterrupted afternoon nap while someone loving builds sandcastles with your toddler.',
      'We’re a family-founded service — we travel to Sri Lanka every year with our own young children, so we know exactly what it takes to trust someone new in a new country. That’s why every booking includes a video introduction before we arrive, why your nanny follows your routines to the letter, and why optional live camera access is always available so you can peek in between courses.',
      'The bay will still be there tomorrow. Tonight, take the evening off.',
    ],
    ctaText: 'Message us on WhatsApp — we’re in Unawatuna',
  },
  {
    slug: 'nanny-weligama',
    name: 'Weligama',
    region: 'South Coast',
    metaTitle: 'Nanny & Babysitter in Weligama, Sri Lanka — Surf-Town Childcare',
    metaDescription:
      'Premier nanny service in Weligama. In-hotel childcare near the bay — perfect for surf lessons and date nights. English-speaking, vetted, flexible.',
    h1: 'Nanny & Babysitter in Weligama, Sri Lanka',
    paragraphs: [
      'Weligama has one of the friendliest waves in the world — a long, soft, sandy-bottomed bay where half the lineup is learning to stand for the very first time. It’s the town where mum and dad finally get to take that surf lesson together, where stilt fishermen balance against the sunrise, and where family resorts and surf camps sit right on the sand.',
      'Here’s the thing about surf lessons, though: they’re better without a toddler on your hip.',
      'Our nanny comes straight to your resort, surf camp, or villa anywhere in Weligama. Book a morning session while your little one has breakfast and beach games with someone experienced, patient, and genuinely fun. Or take the evening instead — a quiet dinner overlooking the bay while bedtime happens exactly on schedule back in the room.',
      'You’ll meet your nanny on a short video call before your first session, so nothing about day one feels like a stranger arriving. She speaks fluent English, follows your routines, and optional live camera access means you can check in from the beach between waves.',
      'Catch the wave. We’ve got the little ones.',
    ],
    ctaText: 'Message us on WhatsApp — we’re in Weligama',
  },
  {
    slug: 'nanny-mirissa',
    name: 'Mirissa',
    region: 'South Coast',
    metaTitle:
      'Nanny & Babysitter in Mirissa, Sri Lanka — Whale-Watching & Date-Night Childcare',
    metaDescription:
      'English-speaking nanny service in Mirissa. In-hotel and in-villa childcare — perfect for whale watching mornings and beachfront dinners.',
    h1: 'Nanny & Babysitter in Mirissa, Sri Lanka',
    paragraphs: [
      'Mirissa is where Sri Lanka shows off. Blue whales gliding past at dawn, the famous palm grove on Coconut Tree Hill, and long golden evenings where the whole beach turns into one candlelit dinner table. It’s romantic, it’s wild, and it’s absolutely worth experiencing with both hands free.',
      'Whale-watching boats leave early — often before six — and a rolling ocean is no place for a restless toddler. Let them sleep in instead. Our nanny arrives at your hotel or villa before you leave, holds the morning routine steady, and has breakfast and beach play under control while you’re out on the water watching the largest animals on Earth.',
      'Or save us for the evening: a table for two at one of the beachfront restaurants, toes in the sand, while bedtime happens peacefully back in the room — bath, milk, stories, exactly the way you do it.',
      'We’re founded by travelling parents, so trust is built in: a video introduction before day one, a fluent-English, background-verified nanny, and optional live camera access so you’re never more than a glance away.',
      'The whales are waiting. So is that dinner. Go — we’ve got this.',
    ],
    ctaText: 'Message us on WhatsApp — we’re in Mirissa',
  },
  {
    slug: 'nanny-hiriketiya',
    name: 'Hiriketiya',
    region: 'South Coast',
    metaTitle: 'Nanny & Babysitter in Hiriketiya, Sri Lanka — Boutique Bay Childcare',
    metaDescription:
      'Premier nanny service in Hiriketiya. We come to your villa or boutique stay around the bay. English-speaking, vetted, flexible childcare.',
    h1: 'Nanny & Babysitter in Hiriketiya, Sri Lanka',
    paragraphs: [
      'Hiriketiya is a perfect little horseshoe of a bay — jungle tumbling down to turquoise water, longboards crossing gentle peelers, and some of the loveliest cafés and boutique stays on the whole south coast. “Hiri” has a way of making families cancel their onward plans and stay another week.',
      'And when you’re staying that long, you’ll want a night — or three — to yourselves.',
      'Our nanny comes to your villa, boutique hotel, or surf lodge anywhere around Hiriketiya and neighbouring Dikwella. Take the sunset surf together. Linger over wood-fired pizza and fresh juice at one of the bay’s cafés. Or just sit on the terrace in the quiet, being a couple again for a few hours, while your little one is read to sleep by someone kind, experienced, and completely present.',
      'Families here often stay poolside — so it’s worth knowing our nanny treats water supervision as her single job whenever children are anywhere near a pool. You’ll meet her on video before the first session, she follows your routines exactly, and optional live camera access keeps you connected from anywhere in the bay.',
      'Stay the extra week. We’ll help make it feel like a holiday.',
    ],
    ctaText: 'Message us on WhatsApp — we’re in Hiriketiya',
  },
  {
    slug: 'nanny-dikwella',
    name: 'Dikwella',
    region: 'South Coast',
    metaTitle: 'Nanny & Babysitter in Dikwella, Sri Lanka — Quiet-Coast Childcare',
    metaDescription:
      'English-speaking nanny service in Dikwella. In-villa and in-hotel childcare on the quiet south coast, minutes from Hiriketiya bay.',
    h1: 'Nanny & Babysitter in Dikwella, Sri Lanka',
    paragraphs: [
      'Dikwella is the south coast at its most unhurried. Long, quiet beaches where you can walk for an hour and count the footprints, the thunder of the Hummanaya blowhole just up the road, and the great seated Buddha of Wewurukannala watching over it all. Families who choose Dikwella choose space, calm, and time.',
      'We’d love to give you a little more of all three.',
      'Our nanny comes directly to your villa, guesthouse, or beachfront stay anywhere in Dikwella — and because we’re just minutes from Hiriketiya, evening plans in the bay are easy too. A slow dinner out. A morning trip to the blowhole while the baby naps at home. An afternoon completely, gloriously unscheduled.',
      'Everything about how we work is built for trust: you meet your nanny on a video call before the first session, she speaks fluent English and is fully background-verified, and she follows your child’s routines — meals, naps, bedtime — precisely as you set them. Optional live camera access is there whenever you’d like to check in.',
      'Dikwella slows everything down. Let us slow it down a little further.',
    ],
    ctaText: 'Message us on WhatsApp — we’re in Dikwella',
  },
  {
    slug: 'nanny-tangalle',
    name: 'Tangalle',
    region: 'South Coast',
    metaTitle: 'Nanny & Babysitter in Tangalle, Sri Lanka — Resort & Villa Childcare',
    metaDescription:
      'Premier nanny service in Tangalle. In-resort and in-villa childcare on the south coast’s most beautiful beaches. English-speaking & vetted.',
    h1: 'Nanny & Babysitter in Tangalle, Sri Lanka',
    paragraphs: [
      'Tangalle is where the south coast stretches out and exhales — wide, wild beaches that go on forever, lagoons full of birdlife, sea turtles nesting at Rekawa by moonlight, and some of Sri Lanka’s most beautiful resorts and private villas tucked along the sand.',
      'It’s the kind of place that deserves your full attention. Both of yours.',
      'Our nanny travels to your resort or villa anywhere in Tangalle — the peaceful far end of the south coast. Book a candlelit dinner under the palms, a couples’ spa afternoon, or that magical late-night turtle watch at Rekawa, while your little one sleeps soundly with a familiar, gentle presence nearby.',
      'Familiar is the key word: before any booking begins, you and your child meet our nanny on a short video call, so the first knock on the door is a friendly face, not a stranger. She’s fluent in English, background-verified, follows your routines exactly — and optional live camera access lets you check in from the beach, the spa, or the far end of the sand.',
      'The turtles come out at night. So should you.',
    ],
    ctaText: 'Message us on WhatsApp — we’re in Tangalle',
  },
  {
    slug: 'nanny-hambantota',
    name: 'Hambantota',
    region: 'South Coast',
    metaTitle: 'Nanny & Babysitter in Hambantota, Sri Lanka — Resort Childcare',
    metaDescription:
      'Premier English-speaking nanny service in Hambantota. In-resort and in-villa childcare near the harbour, safari gateways, and southern beaches. Message us on WhatsApp.',
    h1: 'Nanny & Babysitter in Hambantota, Sri Lanka',
    paragraphs: [
      'Hambantota is the gateway to Sri Lanka’s wild south — big skies, uncrowded beaches, and some of the island’s best safari country just up the road at Yala and Bundala. It’s where families base themselves for early-morning game drives and long, unhurried days by the pool.',
      'And a 5am safari jeep is no place for a sleepy toddler.',
      'Our nanny comes to your resort or villa anywhere around Hambantota. Head out to spot leopards and elephants at dawn while your little one stays on their own schedule — breakfast, play, and a proper nap — with someone calm, experienced, and endlessly patient. Or take the evening for a quiet dinner while bedtime happens right on time back in the room.',
      'Every booking begins with a video introduction so you and your child meet your nanny before day one. She speaks fluent English, is fully background-verified, follows your routines exactly, and optional live camera access lets you check in from the park or the pool.',
      'See the leopards at sunrise. We’ll hold the fort at home.',
    ],
    ctaText: 'Message us on WhatsApp — we’re in Hambantota',
  },
  {
    slug: 'nanny-colombo',
    name: 'Colombo',
    region: 'Western',
    metaTitle: 'Nanny & Babysitter in Colombo, Sri Lanka — Hotel & Home Childcare',
    metaDescription:
      'Premier English-speaking nanny and babysitter service in Colombo. In-hotel, in-apartment, and in-home childcare for visiting and expat families. Message us on WhatsApp.',
    h1: 'Nanny & Babysitter in Colombo, Sri Lanka',
    paragraphs: [
      'Colombo is where most Sri Lankan journeys begin and end — the arrival flight, the last-night dinner, the business trip with the family in tow. Rooftop bars, waterfront dining, and some of the island’s finest hotels sit minutes from one another across the city.',
      'It’s also where a reliable nanny makes all the difference — whether you’re easing jet-lagged little ones into the trip, stepping out for a proper dinner, or attending a wedding or meeting child-free.',
      'Our nanny comes to your hotel, serviced apartment, or home anywhere in Colombo. Fluent English, fully background-verified, and experienced with Canadian, American, and Australian children — she settles in quickly, follows your routines, and keeps bedtime steady while you enjoy the city.',
      'Every booking starts with a video introduction so you and your child meet your nanny beforehand, and optional live camera access lets you check in from dinner, an event, or across town.',
      'Enjoy Colombo — we’ll take care of the little ones.',
    ],
    ctaText: 'Message us on WhatsApp — we’re in Colombo',
  },
  {
    slug: 'nanny-negombo',
    name: 'Negombo',
    region: 'Western',
    metaTitle: 'Nanny & Babysitter in Negombo, Sri Lanka — Airport & Beach Childcare',
    metaDescription:
      'Premier English-speaking nanny service in Negombo, minutes from Colombo airport. In-hotel and in-villa childcare for arriving and departing families. Message us on WhatsApp.',
    h1: 'Nanny & Babysitter in Negombo, Sri Lanka',
    paragraphs: [
      'Negombo is the first and last stop for so many families — just minutes from Bandaranaike International Airport, with a long sandy beach, the lagoon, and easy resorts perfect for the start or end of a trip.',
      'Arriving with jet-lagged children, or facing a late-night flight home, is exactly when an extra pair of trusted hands is worth its weight in gold.',
      'Our nanny comes to your hotel or villa anywhere in Negombo. Whether you need a calm presence while you unpack and reset after a long flight, an evening out before you leave the island, or daytime care while you run pre-departure errands — she’s experienced, fluent in English, and fully background-verified.',
      'As with every booking, you’ll meet your nanny on a video call first, she follows your routines to the letter, and optional live camera access keeps you connected whenever you step away.',
      'Land, unwind, and let us help — right from your first night.',
    ],
    ctaText: 'Message us on WhatsApp — we’re in Negombo',
  },
  {
    slug: 'nanny-kandy',
    name: 'Kandy',
    region: 'Hill Country',
    metaTitle: 'Nanny & Babysitter in Kandy, Sri Lanka — Hill-Country Childcare',
    metaDescription:
      'Premier English-speaking nanny service in Kandy. In-hotel and in-villa childcare near the lake, the Temple, and the hill country. Message us on WhatsApp for a quote.',
    h1: 'Nanny & Babysitter in Kandy, Sri Lanka',
    paragraphs: [
      'Kandy is Sri Lanka’s cultural heart — the lake, the Temple of the Sacred Tooth, misty hills, and the cool green calm of the tea country all around. Families come for the history, the scenery, and the gentle change of pace from the coast.',
      'But temple visits, cultural shows, and winding tea-country drives aren’t always toddler-friendly.',
      'Our nanny comes to your hotel or villa anywhere in Kandy. Explore the Temple and the botanical gardens, enjoy a peaceful lakeside dinner, or take a day trip into the hills while your little one stays happy and rested on their own schedule — cared for by someone experienced, warm, and fluent in English.',
      'Every booking starts with a video introduction so there are no strangers on day one, your routines are followed exactly, and optional live camera access lets you check in from wherever the day takes you.',
      'Discover Kandy at your pace. We’ll keep the little ones content.',
    ],
    ctaText: 'Message us on WhatsApp — we’re in Kandy',
  },
]

// Prefilled per-town WhatsApp link (spec-defined message).
export function townWhatsAppUrl(townName: string): string {
  const text = `Hi! I'm staying near ${townName} and I'm looking for childcare during our trip.`
  return `https://wa.me/14034044643?text=${encodeURIComponent(text)}`
}
