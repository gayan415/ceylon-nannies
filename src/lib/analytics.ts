// Tiny GA4 helper. Events fired before gtag is ready are held and flushed once
// it exists — so they always land AFTER the consent defaults set in
// google-analytics.tsx (Google requires consent to be configured first).
// If GA isn't configured, events are simply dropped after a few seconds.

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const CONSENT_KEY = 'cn_consent'
export type Consent = 'granted' | 'denied'

const pending: [string, Record<string, unknown>][] = []
let waiting = false

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params)
    return
  }
  pending.push([event, params])
  if (waiting) return
  waiting = true
  let tries = 0
  const timer = setInterval(() => {
    if (typeof window.gtag === 'function') {
      pending.splice(0).forEach(([e, p]) => window.gtag!('event', e, p))
    } else if (++tries < 50) {
      return // keep waiting (up to ~10s)
    } else {
      pending.length = 0
    }
    clearInterval(timer)
    waiting = false
  }, 200)
}

export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

export function setConsent(value: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    // storage blocked — choice applies to this page view only
  }
  window.gtag?.('consent', 'update', { analytics_storage: value })
}
