export function OurStory() {
  return (
    <section id="our-story" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-950 mb-4">
            Our Story
          </h2>
          <p className="text-ocean-600">
            Built by parents, for parents — because we&apos;ve been exactly where you are.
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border border-ocean-100">
            <img
              src="/family-photo.jpg"
              alt="Ceylon Nannies founders — a Sri Lankan-Canadian family at Lake Louise, Canadian Rockies"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        <div className="prose prose-ocean max-w-none">
          <div className="bg-ocean-50 rounded-3xl p-8 md:p-10 space-y-6 text-ocean-800 leading-relaxed">

            <p className="text-lg">
              We&apos;re a Sri Lankan-Canadian couple who&apos;ve called the Canadian Rockies home for
              over two decades. We&apos;re both engineering managers working across Canada and the
              United States — the kind of people who solve problems for a living.
            </p>

            <p>
              Every year, we bring our two young children (5 and 3) back to Sri Lanka to visit
              family and enjoy the southern coast. And every year, we hit the same wall:
              <strong> there&apos;s no reliable childcare for traveling families.</strong>
            </p>

            <p>
              We wanted a dinner out in Mirissa. A surf session in Weligama. A single evening
              where we could be a couple again — not just parents. But every time, we faced the
              same question: <em>&ldquo;Who watches the kids?&rdquo;</em>
            </p>

            <p>
              We asked hotels. We asked friends. We tried informal arrangements. Nothing felt safe
              enough for our own children. No camera. No consent forms. No accountability. Just
              &ldquo;trust me&rdquo; — and as parents, that&apos;s not good enough.
            </p>

            <p className="text-lg font-medium text-ocean-900">
              So we built what we wished existed.
            </p>

            <p>
              Ceylon Nannies is the service we designed as engineers and tested as parents. We took the
              nanny we personally trusted with our own children and built a proper system around her —
              filtered to North American standards with proper procedures, optional live camera access,
              signed agreements, and background checks.
            </p>

            <p>
              Your nanny has been vetted the same way we&apos;d vet someone caring for our
              own kids. Because she <em>did</em> care for our own kids first. That&apos;s our
              standard — if we wouldn&apos;t leave our children with her, we won&apos;t send her to yours.
            </p>

            <div className="border-l-4 border-ocean-400 pl-6 my-8">
              <p className="text-ocean-700 italic text-lg">
                &ldquo;We built Ceylon Nannies because no family visiting Sri Lanka should have to
                choose between enjoying this beautiful country and knowing their children are safe.
                You can have both.&rdquo;
              </p>
            </div>

            <p>
              Today, we serve families from Europe, Australia, North America, and beyond — all along
              Sri Lanka&apos;s south coast from Galle to Tangalle. Your nanny speaks fluent English,
              optional live camera access lets you check in anytime, and every booking comes with the
              same care and accountability we demand for our own family.
            </p>

            <p className="text-ocean-600 text-sm">
              Founded by Sri Lankan-Canadian engineers. Based in Alberta, Canada. Operating on Sri Lanka&apos;s south coast.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
