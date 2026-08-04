'use client'

import { useState } from 'react'

const EMAIL = 'ceylonnannies@gmail.com'

// Shows the email as selectable text with a one-click copy button, so
// applicants can paste it into Gmail/Outlook/anything — instead of a
// mailto: link that hijacks the OS default mail app.
export function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked — the address is still visible/selectable to copy manually.
    }
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-ocean-200 bg-white p-1.5 pl-5">
      <span className="select-all font-medium text-ocean-900">{EMAIL}</span>
      <button
        onClick={copy}
        className="inline-flex items-center gap-1.5 rounded-full bg-ocean-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ocean-700"
        aria-label="Copy email address"
      >
        {copied ? (
          <>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>
            Copy
          </>
        )}
      </button>
    </div>
  )
}
