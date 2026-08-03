import type { Metadata } from 'next'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Ceylon Nannies',
  description: 'How Ceylon Nannies collects, uses, and protects your personal information and your family\'s details.',
}

export default function PrivacyPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-ocean-950 mb-3">
            Privacy Policy
          </h1>
          <p className="text-ocean-500 mb-10">
            Your family&apos;s trust means everything to us. Here&apos;s exactly how we
            handle your information — in plain English.
          </p>

          <div className="space-y-8 text-ocean-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-ocean-950 mb-3">What we collect</h2>
              <p className="mb-3">
                We only collect what we need to care for your child and arrange your booking:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong>Contact details</strong> — your name and the phone number you use
                  to message us on WhatsApp.
                </li>
                <li>
                  <strong>Booking details</strong> — your accommodation, dates, times, and
                  the number of children.
                </li>
                <li>
                  <strong>Your child&apos;s information</strong> — details you choose to share
                  with us, such as age, allergies, dietary needs, routines, and any medical
                  information relevant to their care.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ocean-950 mb-3">The optional live camera feed</h2>
              <p className="mb-3">
                Live camera access is an optional add-on you can request. When you use it:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong>Video only</strong> — the feed carries no audio.</li>
                <li>
                  <strong>Recordings are kept for 7 days</strong>, then automatically and
                  permanently deleted.
                </li>
                <li>
                  <strong>Access is private</strong> — only you and Ceylon Nannies can view
                  the feed and recordings. They are never shared with anyone else.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ocean-950 mb-3">How we use your information</h2>
              <p>
                We use your information solely to arrange and provide your childcare booking,
                to keep your child safe, and to stay in touch with you before, during, and
                after the session. That&apos;s it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ocean-950 mb-3">We never sell or share your data</h2>
              <p>
                We do not sell, rent, or share your personal information — or your child&apos;s
                details — with any third parties for marketing or any other purpose. Your
                information stays between you and Ceylon Nannies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ocean-950 mb-3">Your choices</h2>
              <p>
                You can ask us at any time to see, correct, or delete the information we hold
                about you and your family. Just reach out and we&apos;ll take care of it
                promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ocean-950 mb-3">Contact us</h2>
              <p className="mb-4">
                For any privacy questions or data requests, message us anytime:
              </p>
              <a
                href="https://wa.me/14034044643"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                Message us on WhatsApp
              </a>
              <p className="mt-4 text-sm text-ocean-600">
                Prefer email? Write to us at{' '}
                <a href="mailto:ceylonnannies@gmail.com" className="text-ocean-700 underline hover:text-ocean-900">
                  ceylonnannies@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
