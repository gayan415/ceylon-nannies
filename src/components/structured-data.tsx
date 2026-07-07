// JSON-LD structured data is static and trusted — no user input.
export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ceylon Nannies',
    description: 'Premier English-speaking nanny and babysitter service across Sri Lanka — Colombo, Kandy, Galle, and the south coast. In-hotel and in-villa childcare for traveling families. Live camera access available on request.',
    url: 'https://ceylonnannies.com',
    telephone: '+14034044643',
    areaServed: [
      { '@type': 'City', name: 'Colombo, Sri Lanka' },
      { '@type': 'City', name: 'Negombo, Sri Lanka' },
      { '@type': 'City', name: 'Kandy, Sri Lanka' },
      { '@type': 'City', name: 'Galle, Sri Lanka' },
      { '@type': 'City', name: 'Unawatuna, Sri Lanka' },
      { '@type': 'City', name: 'Hikkaduwa, Sri Lanka' },
      { '@type': 'City', name: 'Ahangama, Sri Lanka' },
      { '@type': 'City', name: 'Weligama, Sri Lanka' },
      { '@type': 'City', name: 'Mirissa, Sri Lanka' },
      { '@type': 'City', name: 'Dikwella, Sri Lanka' },
      { '@type': 'City', name: 'Hiriketiya, Sri Lanka' },
      { '@type': 'City', name: 'Matara, Sri Lanka' },
      { '@type': 'City', name: 'Tangalle, Sri Lanka' },
      { '@type': 'City', name: 'Hambantota, Sri Lanka' },
    ],
    serviceType: 'Babysitter',
    priceRange: '$30-$90 USD',
    availableLanguage: 'English',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Nanny Services',
      itemListElement: [
        { '@type': 'Offer', name: 'Quick Session (2 hours)', price: '30', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Standard Session (4 hours)', price: '55', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Extended Session (6 hours)', price: '75', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Full Day Session (8 hours)', price: '90', priceCurrency: 'USD' },
      ],
    },
  }

  // Content is hardcoded/static — safe to inject as JSON-LD for search engines
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
