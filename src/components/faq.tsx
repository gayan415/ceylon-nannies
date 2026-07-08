'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What do I need to provide?',
    a: 'You provide all food, drinks, diapers, wipes, and any medication for your child — this ensures allergy safety, as we never feed your child anything you haven\'t approved. It also helps to leave a few notes on your child\'s routine (nap times, comfort items, bedtime) and an emergency contact number so your nanny can reach you or a local point of contact if needed.',
  },
  {
    q: 'How does the camera system work?',
    a: 'The live camera is an optional add-on available on request for an extra charge. When requested, we set up a dedicated phone as a live camera in the room — you receive a link on your phone and can watch the live video feed anytime during the session. Video only — no audio. You can call our nanny on WhatsApp anytime to hear or speak.',
  },
  {
    q: 'Is the camera included by default?',
    a: 'No, the live camera is an optional add-on. It is available on request for an extra charge. Message us for pricing if you\'d like it included in your booking.',
  },
  {
    q: 'What ages do you accept?',
    a: 'We care for children aged 0-6 years. Our nanny is experienced with all ages in this range, from infants to active toddlers.',
  },
  {
    q: 'How many children per nanny?',
    a: 'Up to 2 children in our nanny\'s sole care — this keeps attention personal and focused. A third child can be looked after when a parent is present as a helper, or we can arrange a second nanny for larger groups. Just tell us how many little ones you have and we\'ll find the right fit.',
  },
  {
    q: 'What if my child has allergies?',
    a: 'You disclose all allergies on our consent form before the session. Since you provide all food and medication, there\'s no risk of us giving your child something they\'re allergic to.',
  },
  {
    q: 'Can the nanny take my child outside?',
    a: 'Not without your explicit written permission. By default, children stay inside your accommodation. If you want your child to go to the pool or garden, you sign a separate off-premises authorization form.',
  },
  {
    q: 'What language does the nanny speak?',
    a: 'Our service is conducted entirely in English — this is a safety requirement, so instructions, allergy details, and any concerns are always understood clearly by everyone. Your nanny currently raises Canadian, American, and Australian children and communicates fluently in English daily.',
  },
  {
    q: 'I\'m a first-time client — how do I get started?',
    a: 'We\'re honored you chose Sri Lanka for your vacation, and we want your time here to be memorable. Please reach out on WhatsApp — tell us about your stay, your family, and what you need. We\'ll take care of the rest and welcome you into the Ceylon Nannies family.',
  },
  {
    q: 'How do I pay?',
    a: 'We keep payment simple and flexible — caring for your child always comes first. Most families pay cash at your accommodation on the day of the session. Bank transfer is available on request (payments in LKR are calculated at the Sri Lanka Central Bank rate on the day). We\'ll confirm all the details with you before your booking so there are no surprises.',
  },
  {
    q: 'What\'s the cancellation policy?',
    a: 'Cancel more than 2 hours before: no charge. Less than 2 hours: 50% of the booking fee. No-show: full fee.',
  },
  {
    q: 'What if I\'m outside your service area?',
    a: 'We serve families across Sri Lanka — Colombo, Negombo, Kandy, and the whole south coast from Galle to Hambantota. Depending on your exact location, a travel charge may apply. Just message us with where you\'re staying and we\'ll send a full quote — we always work with you to keep it simple and fair.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-950 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-ocean-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-ocean-50 transition-colors"
              >
                <span className="font-medium text-ocean-900 pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-ocean-400 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-ocean-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
