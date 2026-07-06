import type { Metadata } from 'next'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Footer } from '@/components/footer'
import { WhatsAppIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Join Our Team — Ceylon Nannies',
  description: 'Ceylon Nannies is growing. Caring, experienced nannies on Sri Lanka\'s south coast — we\'d love to hear from you.',
}

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

      <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-ocean-50 min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-sand-100 text-sand-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-sand-500 rounded-full animate-pulse" />
            Coming Soon
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-ocean-950 mb-6">
            Join Our Team
          </h1>

          <p className="text-lg text-ocean-700 leading-relaxed mb-4">
            Ceylon Nannies is growing — and we&apos;re looking for warm, experienced,
            English-speaking nannies who love caring for children along Sri Lanka&apos;s
            south coast.
          </p>

          <p className="text-ocean-600 leading-relaxed mb-10">
            We&apos;re putting together the details of what we&apos;re looking for.
            Full openings will be posted here soon. If you&apos;d love to be part of a
            caring, professional, family-run team, we&apos;d be delighted to hear from you.
          </p>

          <a
            href="https://wa.me/14034044643?text=Hi%20Ceylon%20Nannies!%20I%27m%20interested%20in%20joining%20your%20team%20as%20a%20nanny."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-green-500/25"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Express Your Interest
          </a>

          <p className="text-sm text-ocean-500 mt-4">
            Message us on WhatsApp and we&apos;ll be in touch when openings go live.
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}
