export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ocean-950 mb-6">
              Experienced with{' '}
              <span className="text-ocean-600">Canadian &amp; American Children</span>
            </h2>

            <p className="text-ocean-700 text-lg mb-6 leading-relaxed">
              Our nanny currently cares for children from Canada and the United States daily.
              She communicates fluently in English, understands Western parenting expectations,
              and is familiar with the routines, foods, and comfort that international families expect.
            </p>

            <div className="space-y-4">
              {[
                { label: 'Age range', value: '0-6 years (all ages welcome)' },
                { label: 'Languages', value: 'Fluent English + Sinhala' },
                { label: 'Experience', value: 'Currently raising Canadian & American children' },
                { label: 'Capacity', value: 'Maximum 2 children per session (additional nanny for 3+)' },
                { label: 'Availability', value: 'Any time, any day — year-round' },
                { label: 'Background', value: 'Police-verified and background-checked' },
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
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-ocean-100">
                  <div className="text-2xl font-bold text-ocean-900">46</div>
                  <div className="text-xs text-ocean-500">Years of life experience</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-ocean-100">
                  <div className="text-2xl font-bold text-ocean-900">3</div>
                  <div className="text-xs text-ocean-500">Children currently caring for</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-ocean-100">
                  <div className="text-2xl font-bold text-ocean-900">2</div>
                  <div className="text-xs text-ocean-500">Countries (Canada & USA)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
