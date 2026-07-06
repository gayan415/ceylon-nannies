import Link from 'next/link'
import { WhatsAppIcon } from './icons'
import { Logo } from './logo'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-ocean-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1.5">
          <Logo className="w-9 h-9" />
          <span className="text-lg font-bold text-ocean-900">Ceylon Nannies</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-ocean-800">
          <a href="#how-it-works" className="hover:text-ocean-600 transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-ocean-600 transition-colors">Pricing</a>
          <a href="#about" className="hover:text-ocean-600 transition-colors">About</a>
          <a href="#our-story" className="hover:text-ocean-600 transition-colors">Our Story</a>
          <a href="#reviews" className="hover:text-ocean-600 transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-ocean-600 transition-colors">FAQ</a>
          <Link href="/careers" className="hover:text-ocean-600 transition-colors">Join Our Team</Link>
        </nav>

        <a
          href="https://wa.me/14034044643?text=Hi%20Ceylon%20Nannies!%20I%27d%20like%20to%20know%20more%20about%20your%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Message Us</span>
        </a>
      </div>
    </header>
  )
}
