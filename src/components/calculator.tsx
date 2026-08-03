'use client'

import { useState } from 'react'
import { WhatsAppIcon } from './icons'

const RATES = [
  { label: '2 hours', hours: 2, price: 35 },
  { label: '4 hours', hours: 4, price: 55 },
  { label: '6 hours', hours: 6, price: 75 },
  { label: '8 hours', hours: 8, price: 90 },
]

export function Calculator() {
  const [hours, setHours] = useState(4)
  const [days, setDays] = useState(1)
  const [extraHours, setExtraHours] = useState(0)

  const baseRate = RATES.find(r => r.hours === hours)
  const dailyRate = (baseRate?.price || 0) + (extraHours * 12)
  const total = dailyRate * days

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
            </div>
          </div>

          {/* Breakdown */}
          <div className="border-t border-ocean-200 pt-5 space-y-2">
            <div className="flex justify-between text-sm text-ocean-600">
              <span>Daily rate ({hours}hr{extraHours > 0 && ` + ${extraHours}hr overtime`})</span>
              <span>${dailyRate}/day</span>
            </div>
            {days > 1 && (
              <div className="flex justify-between text-sm text-ocean-600">
                <span>{days} days</span>
                <span>${dailyRate}/day × {days}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-bold text-ocean-950 pt-2 border-t border-ocean-200">
              <span>Total</span>
              <span>${total.toFixed(2)} USD</span>
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
            Prices in USD. Prefer to pay in LKR? We convert at the Sri Lanka Central Bank rate on the day of payment. A travel charge may apply depending on your location — message us for a full quote.
          </p>
        </div>
      </div>
    </section>
  )
}
