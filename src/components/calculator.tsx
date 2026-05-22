'use client'

import { useState } from 'react'
import { useExchangeRate, formatLKR } from './exchange-rate'
import { WhatsAppIcon } from './icons'

const RATES = [
  { label: '2 hours', hours: 2, price: 30 },
  { label: '4 hours', hours: 4, price: 55 },
  { label: '6 hours', hours: 6, price: 75 },
  { label: '8 hours', hours: 8, price: 90 },
]

export function Calculator() {
  const rate = useExchangeRate()
  const [hours, setHours] = useState(4)
  const [days, setDays] = useState(1)
  const [extraHours, setExtraHours] = useState(0)

  const baseRate = RATES.find(r => r.hours === hours)
  const dailyRate = (baseRate?.price || 0) + (extraHours * 12)
  const subtotal = dailyRate * days
  const discount = days >= 3 ? subtotal * 0.1 : 0
  const total = subtotal - discount

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-950 mb-4">
            Pricing Calculator
          </h2>
          <p className="text-ocean-600">
            Get an instant quote for your stay.
          </p>
        </div>

        <div className="bg-ocean-50 rounded-2xl p-6 md:p-8 space-y-6">
          {/* Session duration */}
          <div>
            <label className="block text-sm font-medium text-ocean-800 mb-2">Session duration</label>
            <div className="grid grid-cols-4 gap-2">
              {RATES.map(r => (
                <button
                  key={r.hours}
                  onClick={() => { setHours(r.hours); setExtraHours(0) }}
                  className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                    hours === r.hours
                      ? 'bg-ocean-600 text-white'
                      : 'bg-white text-ocean-700 border border-ocean-200 hover:border-ocean-400'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Extra hours */}
          <div>
            <label className="block text-sm font-medium text-ocean-800 mb-2">
              Extra hours beyond {hours}hr ($12/hr each)
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setExtraHours(Math.max(0, extraHours - 1))}
                className="w-10 h-10 rounded-lg bg-white border border-ocean-200 text-ocean-700 font-bold hover:border-ocean-400"
              >
                -
              </button>
              <span className="text-lg font-semibold text-ocean-900 w-8 text-center">{extraHours}</span>
              <button
                onClick={() => setExtraHours(Math.min(6, extraHours + 1))}
                className="w-10 h-10 rounded-lg bg-white border border-ocean-200 text-ocean-700 font-bold hover:border-ocean-400"
              >
                +
              </button>
              <span className="text-sm text-ocean-500">
                {extraHours > 0 && `+$${extraHours * 12}`}
              </span>
            </div>
          </div>

          {/* Number of days */}
          <div>
            <label className="block text-sm font-medium text-ocean-800 mb-2">Number of days</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDays(Math.max(1, days - 1))}
                className="w-10 h-10 rounded-lg bg-white border border-ocean-200 text-ocean-700 font-bold hover:border-ocean-400"
              >
                -
              </button>
              <span className="text-lg font-semibold text-ocean-900 w-8 text-center">{days}</span>
              <button
                onClick={() => setDays(Math.min(14, days + 1))}
                className="w-10 h-10 rounded-lg bg-white border border-ocean-200 text-ocean-700 font-bold hover:border-ocean-400"
              >
                +
              </button>
              {days >= 3 && (
                <span className="text-sm text-green-600 font-medium">10% multi-day discount!</span>
              )}
            </div>
          </div>

          {/* Breakdown */}
          <div className="border-t border-ocean-200 pt-5 space-y-2">
            <div className="flex justify-between text-sm text-ocean-600">
              <span>Daily rate ({hours}hr{extraHours > 0 && ` + ${extraHours}hr overtime`})</span>
              <span>${dailyRate}/day</span>
            </div>
            <div className="flex justify-between text-sm text-ocean-600">
              <span>{days} day{days > 1 && 's'}</span>
              <span>${subtotal}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-sm text-green-600">
                <span>Multi-day discount (10%)</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-bold text-ocean-950 pt-2 border-t border-ocean-200">
              <span>Total</span>
              <div className="text-right">
                <div>${total.toFixed(2)} USD</div>
                <div className="text-sm font-normal text-ocean-500">LKR {formatLKR(total, rate)}</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/14034044643?text=${encodeURIComponent(`Hi Ceylon Nannies! I'd like to book:\n• ${hours}hr${extraHours > 0 ? ` + ${extraHours}hr overtime` : ''} per day\n• ${days} day${days > 1 ? 's' : ''}\n• Estimated total: $${total.toFixed(2)} USD`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-full font-medium transition-all hover:scale-[1.02]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Book This — Message Us
          </a>

          <p className="text-xs text-ocean-400 text-center">
            LKR based on live rate (1 USD = {rate} LKR). Travel surcharge applies outside Galle–Tangalle area.
          </p>
        </div>
      </div>
    </section>
  )
}
