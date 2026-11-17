// Tiny GA4 helper. Safe to call before gtag.js has loaded (events queue on
// dataLayer) and when GA isn't configured (events go nowhere).

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params)
    return
  }
  window.dataLayer = window.dataLayer || []
  // gtag.js expects an `arguments` object on the dataLayer, not an array.
  ;(function queue(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments)
  })('event', event, params)
}
