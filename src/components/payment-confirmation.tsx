'use client'

import { useEffect, useState } from 'react'
import { track } from '@/lib/analytics'

// Stripe Payment Links redirect here with ?session_id={CHECKOUT_SESSION_ID}.
// Only then do we say "payment received" and record payment_complete — a
// direct visit to /thank-you shows the generic thank-you and records nothing.
export function PaymentConfirmation() {
  const [paid, setPaid] = useState(false)

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id')
    if (!sessionId) return
    setPaid(true)
    // Guard against double-counting if the page is refreshed.
    const key = `cn_paid_${sessionId}`
    if (sessionStorage.getItem(key)) return
    sessionStorage.setItem(key, '1')
    track('payment_complete', { transaction_id: sessionId, currency: 'USD' })
  }, [])

  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold text-ocean-950 mb-4">
        {paid ? 'Payment received — thank you!' : 'Thank you!'}
      </h1>
      <p className="text-lg text-ocean-700 leading-relaxed">
        {paid
          ? 'Your Stripe receipt is on its way to your email. Thank you for trusting us with your little ones — we hope you enjoyed some well-earned time to yourselves.'
          : 'Thank you for choosing Ceylon Nannies. We hope you enjoyed some well-earned time to yourselves.'}
      </p>
    </>
  )
}
