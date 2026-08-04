'use client'

import { useState } from 'react'
import Link from 'next/link'
import { WhatsAppIcon } from './icons'
import { Logo } from './logo'
import { HIRING_OPEN, HIRING_SEASON } from '@/lib/hiring'

const NAV_LINKS = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
  { href: '#our-story', label: 'Our Story' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-ocean-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1.5">
          <Logo className="w-9 h-9" />
          <span className="text-lg font-bold text-ocean-900">Ceylon Nannies</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-ocean-800">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ocean-600 transition-colors">
              {link.label}
            </a>
          ))}
          <Link href="/careers" className="group inline-flex items-center gap-1.5 hover:text-ocean-600 transition-colors">
            Join Our Team
            {HIRING_OPEN && (
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 border border-green-200 px-2 py-0.5 text-[11px] font-semibold text-green-700 group-hover:bg-green-100 transition-colors">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                </span>
                Hiring {HIRING_SEASON}
              </span>
            )}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/14034044643?text=Hi%20Ceylon%20Nannies!%20I%27d%20like%20to%20know%20more%20about%20your%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Message Us</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-ocean-800 hover:bg-ocean-50 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="md:hidden border-t border-ocean-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-ocean-800 hover:text-ocean-600 border-b border-ocean-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/careers"
              onClick={() => setOpen(false)}
              className="py-3 inline-flex items-center gap-2 text-ocean-800 hover:text-ocean-600 transition-colors"
            >
              Join Our Team
              {HIRING_OPEN && (
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 border border-green-200 px-2 py-0.5 text-[11px] font-semibold text-green-700">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                  </span>
                  Hiring {HIRING_SEASON}
                </span>
              )}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
