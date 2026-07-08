import Link from 'next/link'
import { WhatsAppIcon } from './icons'
import { Logo } from './logo'
import { TOWNS } from '@/lib/towns'

export function Footer() {
  return (
    <footer className="bg-ocean-950 text-ocean-200 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <Logo className="w-9 h-9" />
              <span className="text-lg font-bold text-white">Ceylon Nannies</span>
            </div>
            <p className="text-sm text-ocean-400 leading-relaxed">
              Premier childcare for traveling families — we come to your hotel, villa, or Airbnb across Sri Lanka&apos;s
              west coast, hill country, and south coast. English service. Live camera available on request.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-ocean-400">
              {TOWNS.map((town) => (
                <li key={town.slug}>
                  <Link href={`/${town.slug}`} className="hover:text-white transition-colors">
                    {town.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Contact</h3>
            <a
              href="https://wa.me/14034044643"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mb-3"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Message us on WhatsApp
            </a>
            <p className="text-sm text-ocean-400">
              WhatsApp us anytime — we respond as quickly as possible, usually within a few hours.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://instagram.com/ceylonnannies" target="_blank" rel="noopener noreferrer" className="text-ocean-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://facebook.com/ceylonnannies" target="_blank" rel="noopener noreferrer" className="text-ocean-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ocean-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ocean-500">
            &copy; {new Date().getFullYear()} Ceylon Nannies. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-ocean-400">
            <Link href="/careers" className="hover:text-white transition-colors">Join Our Team</Link>
            <span className="text-ocean-700">&middot;</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
          <p className="text-xs text-ocean-500">
            Service conducted in English for your child&apos;s safety.
          </p>
        </div>
      </div>
    </footer>
  )
}
