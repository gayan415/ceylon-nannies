import { WhatsAppIcon } from './icons'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/14034044643?text=Hi%20Ceylon%20Nannies!%20I%27d%20like%20to%20book%20a%20session."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white pl-4 pr-5 py-3 rounded-full shadow-lg shadow-green-500/30 transition-all hover:scale-105 md:bottom-8 md:right-8"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
      <span className="font-medium text-sm hidden sm:inline">WhatsApp Us</span>
    </a>
  )
}
