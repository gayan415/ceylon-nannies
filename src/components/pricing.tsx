import { WhatsAppIcon } from './icons'

export function Pricing() {
  const plans = [
    { duration: '2 hours', price: 30, label: 'Quick', perHour: '15.00', popular: false, useCase: 'Perfect for a quick dinner out' },
    { duration: '4 hours', price: 55, label: 'Standard', perHour: '13.75', popular: true, useCase: 'Dinner, drinks & a beach walk' },
    { duration: '6 hours', price: 75, label: 'Extended', perHour: '12.50', popular: false, useCase: 'Sunset session to late-night' },
    { duration: '8 hours', price: 90, label: 'Full Day', perHour: '11.25', popular: false, useCase: 'Day trip, surf, or full work day' },
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 bg-ocean-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-950 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-ocean-600 max-w-xl mx-auto">
            All sessions include travel to your accommodation and a pre-session introduction call. Live camera access available on request (extra charge).
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-ocean-600">
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-ocean-100">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Live camera on request
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-ocean-100">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Max 2 children per nanny
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-ocean-100">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Any time of day
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-ocean-100">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Travel to your accommodation
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className={`relative bg-white rounded-2xl p-6 shadow-sm border ${
                plan.popular ? 'border-ocean-500 ring-2 ring-ocean-500/20' : 'border-ocean-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ocean-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-sm font-medium text-ocean-500 mb-1">{plan.label}</div>
              <div className="text-3xl font-bold text-ocean-950 mb-1">${plan.price} <span className="text-base font-normal text-ocean-400">USD</span></div>
              <div className="text-xs text-ocean-400 mb-4">{plan.duration} &middot; ${plan.perHour}/hr</div>
              <div className="pt-4 border-t border-ocean-50">
                <p className="text-sm text-ocean-600 italic">{plan.useCase}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-ocean-500 mb-4">
            Overtime after 8 hours: $12 USD per hour.
          </p>
          <p className="text-sm text-ocean-500 mb-4">
            Have 3-4 children? We provide a second nanny for focused care at a discounted rate — contact us to arrange.
          </p>
          <p className="text-xs text-ocean-400 mb-6">
            Prices in USD. Prefer to pay in LKR? We convert at the Sri Lanka Central Bank rate on the day of payment.
          </p>
          <a
            href="https://wa.me/14034044643?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Book a Session
          </a>
        </div>
      </div>
    </section>
  )
}
