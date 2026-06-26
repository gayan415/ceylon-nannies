import { SERVICE_AREAS } from '@/lib/constants'

export function ServiceArea() {
  const towns = SERVICE_AREAS

  return (
    <section className="py-16 md:py-24 bg-ocean-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-950 mb-4">
            We Come to You
          </h2>
          <p className="text-ocean-600 max-w-xl mx-auto">
            Our nanny travels to your hotel, villa, or Airbnb anywhere along Sri Lanka&apos;s southern coast — from Galle to Tangalle.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {towns.map((town) => (
            <span
              key={town}
              className="bg-white px-4 py-2.5 rounded-full border border-ocean-100 text-sm font-medium text-ocean-800 hover:border-ocean-400 hover:bg-ocean-50 transition-colors"
            >
              {town}
            </span>
          ))}
        </div>

        <p className="text-center text-sm text-ocean-400 mt-6">
          Don&apos;t see your area? Message us — we likely cover it.
        </p>

        <p className="text-center text-xs text-ocean-300 mt-8 max-w-2xl mx-auto leading-relaxed">
          Ceylon Nannies provides professional babysitter and nanny services across Sri Lanka&apos;s south coast.
          Whether you need a babysitter in Mirissa, a nanny in Hiriketiya, childcare in Weligama,
          a babysitter in Unawatuna, a nanny in Galle, or hotel childcare in Ahangama, Hikkaduwa, or Tangalle —
          we come to your accommodation — with optional live camera access available on request.
        </p>
      </div>
    </section>
  )
}
