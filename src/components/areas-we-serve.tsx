import Link from 'next/link'
import { TOWNS } from '@/lib/towns'
import { SERVICE_AREAS } from '@/lib/constants'

// Towns that have their own landing page (clickable cards).
const LINKED_TOWN_NAMES = new Set(TOWNS.map((t) => t.name))

// Towns we serve that don't (yet) have a dedicated page — shown as plain chips
// so coverage stays visible for searches like "nanny Ahangama".
const OTHER_AREAS = SERVICE_AREAS.filter((area) => !LINKED_TOWN_NAMES.has(area))

export function AreasWeServe() {
  return (
    <section id="areas" className="py-16 md:py-24 bg-ocean-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-950 mb-4">
            We Come to You
          </h2>
          <p className="text-ocean-600 max-w-xl mx-auto">
            Our nanny travels to your hotel, villa, or Airbnb anywhere along Sri Lanka&apos;s
            southern coast — from Galle to Tangalle.
          </p>
        </div>

        {/* Towns with dedicated pages — clickable cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
          {TOWNS.map((town) => (
            <Link
              key={town.slug}
              href={`/${town.slug}`}
              className="group bg-white hover:bg-white border border-ocean-100 hover:border-ocean-300 rounded-xl px-4 py-4 shadow-sm transition-colors"
            >
              <span className="flex items-center justify-center gap-1.5 font-medium text-ocean-800">
                {town.name}
                <svg
                  className="w-4 h-4 text-ocean-400 group-hover:text-ocean-600 group-hover:translate-x-0.5 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Other areas we serve (no dedicated page yet) */}
        {OTHER_AREAS.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            <span className="text-sm text-ocean-500">Also serving:</span>
            {OTHER_AREAS.map((area) => (
              <span
                key={area}
                className="bg-white/70 px-3 py-1.5 rounded-full border border-ocean-100 text-sm font-medium text-ocean-700"
              >
                {area}
              </span>
            ))}
          </div>
        )}

        <p className="text-center text-sm text-ocean-400">
          Don&apos;t see your area? Message us — we likely cover it.
        </p>

        <p className="text-center text-xs text-ocean-300 mt-8 max-w-2xl mx-auto leading-relaxed">
          Ceylon Nannies provides professional babysitter and nanny services across Sri Lanka&apos;s
          south coast. Whether you need a babysitter in Mirissa, a nanny in Hiriketiya, childcare in
          Weligama, a babysitter in Unawatuna, a nanny in Galle, or hotel childcare in Ahangama,
          Hikkaduwa, or Tangalle — we come to your accommodation, with optional live camera access
          available on request.
        </p>
      </div>
    </section>
  )
}
