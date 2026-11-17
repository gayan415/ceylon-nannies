'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getConsent, setConsent, type Consent } from '@/lib/analytics'

const OPEN_EVENT = 'cn:open-consent'

// Europe (EU/EEA, UK, Switzerland) needs opt-in consent for analytics cookies.
// A static site can't see the visitor's country, so we use the device time
// zone to decide who sees the banner. Google's own consent mode (set in
// google-analytics.tsx) independently keeps analytics OFF by default for
// EEA/UK/CH IP addresses until the visitor accepts.
function isEuropeanTimeZone() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
    return tz.startsWith('Europe/') || ['Atlantic/Canary', 'Atlantic/Madeira', 'Atlantic/Azores', 'Atlantic/Reykjavik', 'Atlantic/Faroe'].includes(tz)
  } catch {
    return false
  }
}

export function ConsentBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!getConsent() && isEuropeanTimeZone()) setOpen(true)
    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_EVENT, reopen)
    return () => window.removeEventListener(OPEN_EVENT, reopen)
  }, [])

  if (!open) return null

  const choose = (value: Consent) => {
    setConsent(value)
    setOpen(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed bottom-0 inset-x-0 z-[60] p-3 md:p-4"
    >
      <div className="max-w-3xl mx-auto bg-white border border-ocean-200 rounded-2xl shadow-2xl p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
        <p className="text-sm text-ocean-700 leading-relaxed flex-1">
          We use Google Analytics cookies to see how visitors use our site, so we can make it
          better. No ads, and we never sell your data.{' '}
          <Link href="/privacy" className="underline hover:text-ocean-900">Privacy policy</Link>
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => choose('denied')}
            className="flex-1 md:flex-none px-4 py-2 rounded-full border border-ocean-200 text-sm font-medium text-ocean-700 hover:bg-ocean-50 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => choose('granted')}
            className="flex-1 md:flex-none px-5 py-2 rounded-full bg-ocean-600 hover:bg-ocean-700 text-sm font-medium text-white transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

// Footer link that reopens the banner so anyone can change their choice.
export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))} className={className}>
      Cookie settings
    </button>
  )
}
