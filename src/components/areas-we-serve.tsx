import Link from 'next/link'
import { TOWNS } from '@/lib/towns'
import { SERVICE_AREAS } from '@/lib/constants'

const REGION_ORDER = ['Western', 'Hill Country', 'South Coast'] as const

const REGION_LABELS: Record<string, string> = {
  Western: 'Colombo & Western Coast',
  'Hill Country': 'Hill Country',
  'South Coast': 'South Coast',
}

export function AreasWeServe() {
  const byRegion = REGION_ORDER.map((region) => ({
    region,
    label: REGION_LABELS[region],
    towns: TOWNS.filter((t) => t.region === region),
  })).filter((g) => g.towns.length > 0)

  return (
    <section id="areas" className="py-16 md:py-24 bg-ocean-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-950 mb-4">
            We Come to You — Across Sri Lanka
          </h2>
          <p className="text-ocean-600 max-w-xl mx-auto">
            From the moment you land in Colombo to your last sunset in the south, our nanny
            travels to your hotel, villa, or home — anywhere on the island.
          </p>
        </div>

        <div className="space-y-8">
          {byRegion.map((group) => (
            <div key={group.region}>
              <h3 className="text-sm font-semibold text-ocean-500 uppercase tracking-wider text-center mb-4">
                {group.label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {group.towns.map((town) => (
                  <Link
                    key={town.slug}
                    href={`/${town.slug}`}
                    className="group bg-white border border-ocean-100 hover:border-ocean-300 rounded-xl px-4 py-4 shadow-sm transition-colors"
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
            </div>
          ))}
        </div>

        {SERVICE_AREAS.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            <span className="text-sm text-ocean-500">Also serving:</span>
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="bg-white/70 px-3 py-1.5 rounded-full border border-ocean-100 text-sm font-medium text-ocean-700"
              >
                {area}
              </span>
            ))}
          </div>
        )}

        <p className="text-center text-sm text-ocean-400 mt-6">
          Don&apos;t see your area? Message us — we likely cover it.
        </p>

        <p className="text-center text-xs text-ocean-300 mt-8 max-w-2xl mx-auto leading-relaxed">
          Ceylon Nannies provides premier English-speaking babysitter and nanny services across
          Sri Lanka. Whether you need a nanny in Colombo, a babysitter in Negombo, childcare in
          Kandy, or a trusted nanny in Galle, Mirissa, Hiriketiya, Weligama, Unawatuna, Tangalle,
          or Hambantota — we come to your hotel, villa, or home, with optional live camera access
          available on request.
        </p>
      </div>
    </section>
  )
}
