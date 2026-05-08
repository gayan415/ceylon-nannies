export function TrustSection() {
  const dontDo = [
    'We never take your child outside without your written permission',
    'We never feed your child anything — you provide all food and drinks',
    'We never administer medication without your signed consent form',
    'We never turn off the camera — it runs the entire session',
    'We never share your personal details with anyone',
  ]

  const checklist = [
    'Food, snacks, milk, and drinks for the session duration',
    'Diapers, wipes, and changing supplies',
    'Write down your child\'s bedtime routine and preferences',
    'Note any allergies or medical conditions',
    'Leave an emergency contact number (or hotel front desk number)',
    'Pack your child\'s comfort item (favourite toy, game/activity, blanket, or pacifier)',
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              Our Safety Boundaries
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-ocean-950 mb-6">
              What we <span className="text-red-600">don&apos;t</span> do
            </h2>
            <p className="text-ocean-600 mb-6">
              Clear boundaries protect your child. Here&apos;s what we will never do without your explicit written consent:
            </p>
            <ul className="space-y-3">
              {dontDo.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <span className="text-ocean-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Before Your Session
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-ocean-950 mb-6">
              What to <span className="text-green-600">prepare</span>
            </h2>
            <p className="text-ocean-600 mb-6">
              A quick checklist so everything runs smoothly:
            </p>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-ocean-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
