import type { Metadata } from 'next'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Footer } from '@/components/footer'
import { CopyEmail } from '@/components/copy-email'
import { HIRING_OPEN, HIRING_SEASON } from '@/lib/hiring'

export const metadata: Metadata = {
  title: HIRING_OPEN
    ? 'We\'re Hiring Childcare Professionals — Ceylon Nannies'
    : 'Join Our Team — Ceylon Nannies',
  description: HIRING_OPEN
    ? 'Ceylon Nannies is hiring caring, English-speaking childcare professionals across Sri Lanka\'s west coast, hill country, and south coast. A warm, family-run premier service for travelling families.'
    : 'Ceylon Nannies is a warm, family-run premier childcare service for travelling families in Sri Lanka. Join our waitlist of caring childcare professionals — we\'ll reach out when a spot opens near you.',
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
  { bold: 'Genuine warmth & patience', rest: ' with young children — comfortable caring for babies through age 6' },
  { bold: 'Able & willing to travel', rest: ' to different hotels and villas in your area' },
  { bold: 'Excellent personal hygiene', rest: ' — clean, well-dressed & organized' },
  { bold: 'Professional & reliable', rest: ' — beautifully presented, punctual, and true to your commitments' },
  { bold: 'First aid or CPR knowledge a strong plus', rest: ' — we\'ll support training for the right person' },
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
            {HIRING_OPEN ? (
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Now hiring · applications open for {HIRING_SEASON}
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 bg-sand-100 text-sand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-sand-500 rounded-full" />
                Applications paused — join our waitlist
              </div>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-ocean-950 mb-6">
              Childcare Professionals
            </h1>
            <p className="text-lg text-ocean-700 leading-relaxed">
              <strong className="text-ocean-900">For us, caring for a child is never &ldquo;just
              a job.&rdquo;</strong> Ceylon Nannies is a warm, family-run team caring for
              travelling families visiting Sri Lanka — and we&apos;re looking for people who
              genuinely light up around children: who play, comfort, and care the way they
              would for their own. If you find real joy in a little one&apos;s laugh and take
              pride in thoughtful, professional care, we&apos;d love to hear from you.
            </p>
          </div>

          <div className="space-y-10 text-ocean-700 leading-relaxed">
            {/* Why join us */}
            <section>
              <h2 className="text-xl font-bold text-ocean-950 mb-4">Why join us</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong className="text-ocean-900">Flexible, booking-based work</strong> that fits around your life</li>
                <li>Care for families in beautiful hotels and villas near you</li>
                <li>A warm, family-run team that treats you the way we treat our families</li>
                <li>Grow with us as we expand across Sri Lanka</li>
              </ul>
              <p className="mt-4">
                <strong className="text-ocean-900">Pay:</strong> attractive, booking-based
                earnings — you&apos;re paid a generous share of every booking, and tips are
                always yours to keep. We&apos;ll discuss the details when we talk.
              </p>
            </section>

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
                Overseas childcare experience · high-end hotel hospitality · experience
                caring for children with additional needs · a second language such as
                French or Spanish is a lovely bonus
              </p>
            </section>

            {/* How we choose our nannies — vetting showcase (dual audience:
                reassures applicants of a high bar AND shows parents our rigor) */}
            <section className="bg-sand-50 border border-sand-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-ocean-950 mb-2">How we choose our nannies</h2>
              <p className="mb-5">
                We hire the way you&apos;d choose someone for your own child — because that&apos;s
                exactly the standard we started with. Only a small number of applicants meet it.
                Every nanny who joins us passes:
              </p>
              <ol className="space-y-3">
                {[
                  { t: 'Identity verified', d: 'We confirm government-issued ID (NIC) — every nanny is a real, identifiable person.' },
                  { t: 'Clear police record', d: 'A police clearance check with no concerning history.' },
                  { t: 'References we personally call', d: 'We speak to past families and employers and ask the question that matters: would you trust this person with your own child again?' },
                  { t: 'A face-to-face interview', d: 'We meet every candidate in person or by video — never hired from a résumé alone.' },
                  { t: 'Observed with a child', d: 'We watch how they actually are with children — warmth, patience, attentiveness — before they ever care for yours.' },
                  { t: 'Fluent English', d: 'A safety standard, not a preference — so allergies, routines, and emergencies are always understood clearly.' },
                ].map((step, i) => (
                  <li key={step.t} className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-ocean-600 text-white text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span>
                      <strong className="text-ocean-900">{step.t}</strong> — {step.d}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            {/* What to include */}
            <section>
              <h2 className="text-xl font-bold text-ocean-950 mb-4">In your email, please tell us</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong className="text-ocean-900">What you love most about caring for children</strong></li>
                <li>Which area you&apos;re based in</li>
                <li>Your childcare experience (raising your own children counts!)</li>
                <li>How comfortable you are speaking English</li>
                <li>Your general availability</li>
                <li>Whether you can travel to hotels and villas in your area</li>
                <li>Any references you can share</li>
              </ul>
            </section>

            {/* What happens next */}
            <section>
              <h2 className="text-xl font-bold text-ocean-950 mb-4">What happens next</h2>
              <p>
                We read every application and reach out for a friendly chat. For the right fit,
                we complete background and reference checks before warmly welcoming you to the
                team.
              </p>
            </section>

            {/* How to apply */}
            <section className="text-center pt-2">
              <h2 className="text-2xl font-bold text-ocean-950 mb-3">
                {HIRING_OPEN ? 'How to apply' : 'Join our waitlist'}
              </h2>
              <p className="mb-6">
                {HIRING_OPEN ? (
                  <>
                    Send your resume with a little about yourself, your experience, and your
                    location to the email below. We&apos;d love to meet you.
                  </>
                ) : (
                  <>
                    We&apos;re not actively hiring right now, but we&apos;re always glad to meet
                    wonderful caregivers. Send your details to the email below and we&apos;ll
                    reach out the moment a spot opens near you.
                  </>
                )}
              </p>
              <CopyEmail />
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
