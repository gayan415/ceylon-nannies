'use client'

import { useEffect, useState } from 'react'

const FALLBACK_RATE = 323
const CACHE_KEY = 'ceylon_nannies_usd_lkr'
const CACHE_DURATION = 6 * 60 * 60 * 1000 // 6 hours

interface CachedRate {
  rate: number
  timestamp: number
}

function getCachedRate(): number | null {
  if (typeof window === 'undefined') return null
  try {
    const cached = localStorage.getItem(CACHE_KEY)
    if (!cached) return null
    const { rate, timestamp }: CachedRate = JSON.parse(cached)
    if (Date.now() - timestamp < CACHE_DURATION) return rate
    return null
  } catch {
    return null
  }
}

function setCachedRate(rate: number) {
  if (typeof window === 'undefined') return
  try {
    const data: CachedRate = { rate, timestamp: Date.now() }
    localStorage.setItem(CACHE_KEY, JSON.stringify(data))
  } catch {
    // localStorage might be unavailable
  }
}

export function useExchangeRate() {
  const [rate, setRate] = useState<number>(FALLBACK_RATE)

  useEffect(() => {
    const cached = getCachedRate()
    if (cached) {
      setRate(cached)
      return
    }

    fetch('https://open.er-api.com/v6/latest/USD')
      .then(res => res.json())
      .then(data => {
        if (data?.rates?.LKR) {
          const liveRate = Math.round(data.rates.LKR)
          setRate(liveRate)
          setCachedRate(liveRate)
        }
      })
      .catch(() => {
        // Silently fall back to default rate
      })
  }, [])

  return rate
}

export function formatLKR(usd: number, rate: number): string {
  const lkr = Math.round((usd * rate) / 50) * 50 // Round to nearest 50
  return lkr.toLocaleString()
}
