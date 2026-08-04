import { WhatsAppIcon } from './icons'

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-ocean-50 to-white overflow-hidden">
      {/* Faint beach brand image as a background watermark — decorative/aspirational
          only (AI-generated), never presented as a real nanny. Kept very low
          opacity with a white gradient wash so hero text stays fully readable. */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: 'url(/hero-banner.jpg)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" aria-hidden="true" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ocean-300 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sand-200 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-ocean-100 text-ocean-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
Colombo · Kandy · Ella · South Coast
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-ocean-950 leading-tight mb-5">
          Premier Childcare for{' '}
          <span className="text-ocean-600">Traveling Families</span>
        </h1>

        {/* Trust bar — social proof above the fold. 5.0 = true average of our
            Google reviews; flags are countries of families we've served. */}
        <div className="inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 mb-7 text-sm md:text-base text-ocean-700">
          <span className="flex items-center gap-0.5 text-sand-400" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </span>
          <span className="font-semibold text-ocean-900">5.0 on Google</span>
          <span className="text-ocean-300" aria-hidden="true">·</span>
          <span>Loved by families from 🇺🇸 🇨🇦 🇦🇺 🇬🇧</span>
        </div>

        <p className="text-lg md:text-xl text-ocean-700 max-w-2xl mx-auto mb-8 leading-relaxed">
          Premier in-hotel nanny and babysitter service on Sri Lanka&apos;s west coast, hill country, and south coast. Live camera access available on request.
          Enjoy your evening — they&apos;re in safe hands.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="https://wa.me/14034044643?text=Hi%20Ceylon%20Nannies!%20I%27d%20like%20to%20book%20a%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-green-500/25"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Message Us on WhatsApp
          </a>
          <a
            href="#how-it-works"
            className="text-ocean-600 hover:text-ocean-800 font-medium transition-colors"
          >
            Learn how it works &darr;
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-ocean-600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Live camera (on request)
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            English-fluent nanny
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Max 2 children per nanny
          </div>
        </div>
      </div>
    </section>
  )
}
