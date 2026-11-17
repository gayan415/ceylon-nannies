import { WhatsAppIcon } from './icons'

// A WhatsApp CTA labelled for analytics — the site-wide listener in
// google-analytics.tsx fires `whatsapp_click` with this cta_context.
// Used on town landing pages.
export function TrackedWhatsAppCTA({
  href,
  label,
  ctaContext,
  position,
  className,
}: {
  href: string
  label: string
  ctaContext: string
  position?: 'top' | 'bottom'
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={ctaContext}
      data-cta-position={position}
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
