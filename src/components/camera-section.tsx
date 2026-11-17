export function CameraSection() {
  return (
    <section data-section="video-check-ins" className="py-12 md:py-16 bg-ocean-950 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-ocean-800 px-3 py-1.5 rounded-full text-sm text-ocean-200 mb-5">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Video Check-Ins
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          See your little one{' '}
          <span className="text-ocean-300">anytime you like</span>
        </h2>

        <p className="text-ocean-200 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          At dinner, on the beach, or at the spa — just ask, and your nanny will video-call you
          so you can see your little one, wherever you are.
        </p>

        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-3xl mx-auto text-left">
          {[
            'See and speak to your child in real time',
            'As often as you like — just message us',
            'No app to install — a simple WhatsApp video call',
            'Always free — peace of mind is never an add-on',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-ocean-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-ocean-100">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
