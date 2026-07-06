'use client'

import { WhatsAppIcon } from './icons'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// A WhatsApp CTA that fires a GA4 `whatsapp_click` event with a cta_context
// before following the link. Used on town landing pages.
export function TrackedWhatsAppCTA({
  href,
  label,
  ctaContext,
  className,
}: {
  href: string
  label: string
  ctaContext: string
  className?: string
}) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', { cta_context: ctaContext })
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={
        className ??
        'inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-full text-base font-semibold transition-all hover:scale-105 shadow-lg shadow-green-500/25'
      }
    >
      <WhatsAppIcon className="w-5 h-5" />
      {label}
    </a>
  )
}
