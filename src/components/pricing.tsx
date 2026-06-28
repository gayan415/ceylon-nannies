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

        <div className="mb-10 bg-gradient-to-br from-sand-50 to-ocean-50 border-2 border-sand-200 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-7 h-7 text-sand-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-ocean-950 mb-2">
                Welcome — let&apos;s make this vacation unforgettable
              </h3>
              <p className="text-ocean-700 text-sm md:text-base mb-4">
                We value your choice of Sri Lanka and want to make your time here memorable for life. First-time clients, please reach out — we&apos;d be honored to welcome your family to ours and treat your little ones the way we&apos;d treat our own.
              </p>
              <a
                href="https://wa.me/14034044643?text=Hi%20Ceylon%20Nannies!%20I%27m%20a%20first-time%20client%20visiting%20Sri%20Lanka%20—%20I%27d%20love%20to%20learn%20more%20about%20your%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Message Us on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-ocean-500 mb-4">
            Overtime after 8 hours: $12 USD per hour.
          </p>
          <p className="text-sm text-ocean-500 mb-4">
            Have 3-4 children? We provide a second nanny for focused care at a discounted rate — contact us to arrange.
          </p>
          <p className="text-xs text-ocean-400">
            Prices in USD. Prefer to pay in LKR? We convert at the Sri Lanka Central Bank rate on the day of payment.
          </p>
        </div>
      </div>
    </section>
  )
}
