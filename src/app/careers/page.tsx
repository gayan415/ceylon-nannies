import type { Metadata } from 'next'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'We\'re Hiring Childcare Professionals — Ceylon Nannies',
  description:
    'Join Ceylon Nannies — a warm, family-run premier childcare service for travelling families in Sri Lanka. We\'re hiring caring, English-speaking childcare professionals across the west coast, hill country, and south coast.',
}

const HIRING_REGIONS = [
  { region: 'West Coast', places: 'Colombo & Negombo' },
  { region: 'Hill Country', places: 'Kandy & Ella' },
  { region: 'South Coast', places: 'Galle, Hikkaduwa, Hiriketiya, Mirissa, Tangalle & Hambantota' },
]

const WHAT_YOULL_DO = [
  'Warm, attentive in-hotel & in-villa childcare',
  'Care for children from Canada, the USA, Australia & the UK',
  'Travel to hotels, villas & resorts in your area',
  'Deliver safe, professional, thoughtful care',
]

const WHAT_WERE_LOOKING_FOR = [
  { bold: 'Minimum age 21', rest: '' },
  { bold: '2+ years childcare experience', rest: ' — raising your own children absolutely counts!' },
  { bold: 'Fluent English', rest: ' — confident, natural communication is essential' },
  { bold: 'Genuine warmth & patience', rest: ' with young children' },
  { bold: 'Able & willing to travel', rest: ' to different hotels and villas in your area' },
  { bold: 'Excellent personal hygiene', rest: ' — clean, well-dressed & organized' },
  { bold: 'Professional & reliable', rest: ' — beautifully presented and dependable' },
]

export default function CareersPage() {
  return (
    <>
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

      <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {/* Intro */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-ocean-100 text-ocean-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              We&apos;re Hiring
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-ocean-950 mb-6">
              Childcare Professionals
            </h1>
            <p className="text-lg text-ocean-700 leading-relaxed">
              Ceylon Nannies is a premier boutique childcare service caring for travelling
              families visiting Sri Lanka. We&apos;re a warm, family-run business growing our
              team of exceptional childcare professionals. If you love caring for children,
              speak beautiful English, and take pride in thoughtful, professional care,
              we&apos;d love to hear from you.
            </p>
          </div>

          <div className="space-y-10 text-ocean-700 leading-relaxed">
            {/* Where we're hiring */}
            <section>
              <h2 className="text-xl font-bold text-ocean-950 mb-4">Where we&apos;re hiring</h2>
              <ul className="space-y-2">
                {HIRING_REGIONS.map((r) => (
                  <li key={r.region} className="flex gap-2">
                    <span className="text-ocean-400" aria-hidden="true">•</span>
                    <span>
                      <strong className="text-ocean-900">{r.region}</strong> — {r.places}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* What you'll do */}
            <section>
              <h2 className="text-xl font-bold text-ocean-950 mb-4">What you&apos;ll do</h2>
              <ul className="space-y-2 list-disc pl-5">
                {WHAT_YOULL_DO.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            {/* What we're looking for */}
            <section>
              <h2 className="text-xl font-bold text-ocean-950 mb-4">What we&apos;re looking for</h2>
              <ul className="space-y-2 list-disc pl-5">
                {WHAT_WERE_LOOKING_FOR.map((item) => (
                  <li key={item.bold}>
                    <strong className="text-ocean-900">{item.bold}</strong>
                    {item.rest}
                  </li>
                ))}
              </ul>
            </section>

            {/* Especially welcome */}
            <section className="bg-ocean-950 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-sand-300 mb-2">
                We especially welcome those with
              </p>
              <p className="text-lg font-semibold text-white">
                Overseas childcare experience · or luxury / high-end hotel hospitality
              </p>
            </section>

            {/* Standards */}
            <section className="bg-sand-50 border border-sand-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-ocean-950 mb-3">Our standards</h2>
              <p>
                Every childcare professional must pass a{' '}
                <strong className="text-ocean-900">thorough background check</strong>, provide a{' '}
                <strong className="text-ocean-900">clear police record</strong>, and consent to{' '}
                <strong className="text-ocean-900">reference checks</strong> from past jobs. It&apos;s
                how we care for families the way we&apos;d care for our own.
              </p>
            </section>

            {/* How to apply */}
            <section className="text-center pt-2">
              <h2 className="text-2xl font-bold text-ocean-950 mb-3">How to apply</h2>
              <p className="mb-6">
                Send your resume with a little about yourself, your experience, and your
                location. We&apos;d love to meet you.
              </p>
              <a
                href="mailto:ceylonnannies@gmail.com?subject=Childcare%20Professional%20Application"
                className="inline-flex items-center gap-2 bg-ocean-600 hover:bg-ocean-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
              >
                Email us at ceylonnannies@gmail.com
              </a>
              <p className="mt-8 text-ocean-500 italic">
                Ceylon Nannies — caring for families the way we&apos;d care for our own.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
