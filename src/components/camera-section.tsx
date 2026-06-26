export function CameraSection() {
  return (
    <section className="py-16 md:py-24 bg-ocean-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-ocean-800 px-3 py-1.5 rounded-full text-sm text-ocean-200 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Live Camera System
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Watch your child{' '}
              <span className="text-ocean-300">anytime, anywhere</span>
            </h2>

            <p className="text-ocean-200 text-lg mb-8 leading-relaxed">
              Our live camera system means you can check in on your little one
              from the restaurant, the beach, or anywhere with a phone signal.
              Available on request as an add-on — because trust isn&apos;t optional when it comes to your children.
            </p>

            <ul className="space-y-4">
              {[
                'Live video streaming directly to your phone',
                'Video-only — call WhatsApp anytime to hear or speak',
                'All recordings stored for 7 days',
                'Optional add-on — available on request for an extra charge',
                'Hotel WiFi + mobile data backup for reliability',
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

          <div className="relative">
            <div className="bg-ocean-900 rounded-3xl p-8 border border-ocean-800">
              <div className="aspect-[9/16] max-w-[240px] mx-auto bg-ocean-800 rounded-[2rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-ocean-700 rounded-[1.5rem] flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute top-3 left-0 right-0 flex justify-center">
                    <div className="flex items-center gap-1.5 bg-red-500/90 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      <span className="text-[10px] text-white font-medium">LIVE</span>
                    </div>
                  </div>

                  <div className="text-center px-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-ocean-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-ocean-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25z" />
                      </svg>
                    </div>
                    <p className="text-ocean-200 text-xs">Your child&apos;s live feed</p>
                    <p className="text-ocean-400 text-[10px] mt-1">Tap to view fullscreen</p>
                  </div>

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                    <div className="w-10 h-10 bg-ocean-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
