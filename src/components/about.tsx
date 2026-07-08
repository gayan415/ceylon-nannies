export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ocean-950 mb-6">
              Hand-Picked Nannies —{' '}
              <span className="text-ocean-600">Never a Faceless Agency</span>
            </h2>

            <p className="text-ocean-700 text-lg mb-6 leading-relaxed">
              We&apos;re a small, boutique team — not an agency with a roster of strangers.
              Every nanny is someone we&apos;d trust with our own children, because they&apos;ve
              cared for children from Canada, the United States, and Australia. Fluent English,
              Western parenting standards, and the warmth that makes a new place feel like home.
            </p>

            <p className="text-ocean-700 text-lg mb-6 leading-relaxed">
              Because our team is small and personally vetted, you get the one thing agencies
              can&apos;t promise: a nanny we truly know and stand behind — whose details we share
              with you before arrival, with a quick video hello available any time you&apos;d like one.
            </p>

            <div className="space-y-4">
              {[
                { label: 'Age range', value: '0-6 years (all ages welcome)' },
                { label: 'Languages', value: 'Fluent English + Sinhala' },
                { label: 'Experience', value: 'Raising Canadian, American & Australian children' },
                { label: 'Capacity', value: 'Maximum 2 children per nanny (more with a second nanny)' },
                { label: 'Availability', value: 'Any time, any day — year-round' },
                { label: 'Vetting', value: 'Every nanny police-verified and background-checked' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-ocean-500 mt-2.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-ocean-900">{item.label}:</span>{' '}
                    <span className="text-ocean-600">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ocean-50 rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-ocean-100">
                <div className="text-2xl font-bold text-ocean-900">5.0 ★</div>
                <div className="text-xs text-ocean-500 mt-1">Rated on Google</div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-ocean-100">
                <div className="text-2xl font-bold text-ocean-900">100%</div>
                <div className="text-xs text-ocean-500 mt-1">Background-verified nannies</div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-ocean-100">
                <div className="text-2xl font-bold text-ocean-900">🇨🇦 🇺🇸 🇦🇺</div>
                <div className="text-xs text-ocean-500 mt-1">Families we&apos;ve cared for</div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-ocean-100">
                <div className="text-2xl font-bold text-ocean-900">3 regions</div>
                <div className="text-xs text-ocean-500 mt-1">West coast, hill country &amp; south coast</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
