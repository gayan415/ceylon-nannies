'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { track } from '@/lib/analytics'
import { ConsentBanner } from './consent-banner'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

// EU/EEA + UK + Switzerland — analytics need opt-in consent here.
const EU_REGIONS = ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH']

// Site-wide event tracking, driven by data attributes so components stay
// plain markup:
//   <a href="https://wa.me/…" data-cta="hero">     → whatsapp_click {cta_context}
//      optional data-cta-position="top" / data-value="59" (USD quote)
//   <a data-event="review_click" data-cta="…">       → custom event name
//   <section id="pricing"> or data-section="…"       → section_view (once per page view)
function AnalyticsEvents() {
  const pathname = usePathname()

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a')
      if (!link) return
      const ds = link.dataset
      const isWhatsApp = link.href.includes('wa.me/')
      if (!isWhatsApp && !ds.event) return
      const params: Record<string, unknown> = { cta_context: ds.cta || 'unlabeled' }
      if (ds.ctaPosition) params.cta_position = ds.ctaPosition
      if (ds.value) {
        params.value = Number(ds.value)
        params.currency = 'USD'
      }
      track(ds.event || 'whatsapp_click', params)
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  useEffect(() => {
    const seen = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          const name = el.dataset.section || el.id
          if (!name || seen.has(name)) continue
          seen.add(name)
          track('section_view', { section: name })
          observer.unobserve(el)
        }
      },
      // Counts once the section's top reaches the upper 60% of the screen —
      // works for sections of any height (a % threshold never fires on tall ones).
      { rootMargin: '0px 0px -40% 0px', threshold: 0 },
    )
    document.querySelectorAll('section[id], section[data-section]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}

export function GoogleAnalytics() {
  if (!GA_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          // Consent defaults MUST come before anything else. EU/EEA, UK and
          // Switzerland: analytics off until the visitor accepts the banner.
          // Everywhere else: on (opt-out via "Cookie settings"). No ads, ever.
          gtag('consent', 'default', {
            analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
            region: ${JSON.stringify(EU_REGIONS)}
          });
          gtag('consent', 'default', {
            analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'
          });
          try {
            var c = localStorage.getItem('cn_consent');
            if (c === 'granted' || c === 'denied') gtag('consent', 'update', { analytics_storage: c });
          } catch (e) {}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <AnalyticsEvents />
      <ConsentBanner />
    </>
  )
}
