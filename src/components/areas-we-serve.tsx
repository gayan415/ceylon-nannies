import Link from 'next/link'
import { TOWNS } from '@/lib/towns'

export function AreasWeServe() {
  return (
    <section id="areas" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-ocean-950 mb-4">
          Areas We Serve
        </h2>
        <p className="text-ocean-600 max-w-xl mx-auto mb-10">
          We come to you — anywhere on Sri Lanka&apos;s south coast, from Galle to Tangalle.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {TOWNS.map((town) => (
            <Link
              key={town.slug}
              href={`/${town.slug}`}
              className="group bg-ocean-50 hover:bg-ocean-100 border border-ocean-100 hover:border-ocean-300 rounded-xl px-4 py-4 transition-colors"
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
    </section>
  )
}
