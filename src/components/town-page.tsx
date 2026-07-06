import Link from 'next/link'
import { Logo } from './logo'
import { Footer } from './footer'
import { Pricing } from './pricing'
import { HowItWorks } from './how-it-works'
import { TrackedWhatsAppCTA } from './tracked-whatsapp-cta'
import { WhatsAppButton } from './whatsapp-button'
import { TOWNS, townWhatsAppUrl, type Town } from '@/lib/towns'

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/otv4oL3UC8A2HLWt8'

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-sand-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function TownPage({ town }: { town: Town }) {
  const waUrl = townWhatsAppUrl(town.name)
  const ctaContext = `town-${town.slug}`

  // JSON-LD: ChildCare + areaServed. Content is fully static/trusted (our own
  // town data), serialized with JSON.stringify — same pattern as structured-data.tsx.
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ChildCare',
    name: `Ceylon Nannies — ${town.name}`,
    description: town.metaDescription,
    url: `https://www.ceylonnannies.com/${town.slug}`,
    telephone: '+14034044643',
    areaServed: { '@type': 'City', name: `${town.name}, Sri Lanka` },
    availableLanguage: 'English',
    priceRange: '$30-$90 USD',
  })

  const otherTowns = TOWNS.filter((t) => t.slug !== town.slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

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

      <main>
        {/* Hero — H1 + intro + CTA in first viewport */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-ocean-50 to-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-ocean-100 text-ocean-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {town.name} · Sri Lanka&apos;s South Coast
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-ocean-950 leading-tight mb-6">
              {town.h1}
            </h1>
            <p className="text-lg text-ocean-700 leading-relaxed mb-8">
              {town.paragraphs[0]}
            </p>
            <TrackedWhatsAppCTA href={waUrl} label={town.ctaText} ctaContext={ctaContext} />
          </div>
        </section>

        {/* Remaining intro copy */}
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 space-y-5 text-ocean-700 text-lg leading-relaxed">
            {town.paragraphs.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* How it works in {Town} */}
        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-4 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-ocean-950 text-center">
              How it works in {town.name}
            </h2>
          </div>
          <HowItWorks />
        </div>

        {/* Pricing (shared component) */}
        <Pricing />

        {/* Short review card */}
        <section className="py-16 md:py-20 bg-ocean-950">
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-ocean-900 rounded-2xl p-6 md:p-8 border border-ocean-800 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Stars />
              </div>
              <blockquote className="text-ocean-100 text-lg leading-relaxed mb-4">
                &ldquo;Mahesha was incredible — experienced, kind, and fun with our little
                boy. I would highly recommend Ceylon Nannies to anyone needing a nanny while
                on holiday.&rdquo;
              </blockquote>
              <div className="text-sm text-ocean-400 mb-6">— Steph, visiting from Melbourne 🇦🇺</div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-ocean-50 text-ocean-900 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                See all our reviews on Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* FAQ link + final CTA */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-ocean-950 mb-4">
              Ready to enjoy {town.name}?
            </h2>
            <p className="text-ocean-600 mb-8">
              Have a question first? Read our{' '}
              <Link href="/#faq" className="text-ocean-600 underline hover:text-ocean-800">
                frequently asked questions
              </Link>{' '}
              — or just message us and we&apos;ll help you plan.
            </p>
            <TrackedWhatsAppCTA href={waUrl} label={town.ctaText} ctaContext={ctaContext} />
          </div>
        </section>

        {/* Cross-links to other towns */}
        <section className="py-12 bg-ocean-50 border-t border-ocean-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm font-medium text-ocean-500 mb-4">
              We also serve these areas on Sri Lanka&apos;s south coast
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {otherTowns.map((t) => (
                <Link
                  key={t.slug}
                  href={`/${t.slug}`}
                  className="bg-white px-4 py-2 rounded-full border border-ocean-200 text-sm font-medium text-ocean-800 hover:border-ocean-400 hover:bg-ocean-50 transition-colors"
                >
                  {t.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
