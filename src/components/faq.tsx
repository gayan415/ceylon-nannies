'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What do I need to provide?',
    a: 'You provide all food, drinks, diapers, wipes, and any medication for your child. This ensures allergy safety — we never feed your child anything you haven\'t approved.',
  },
  {
    q: 'How does the camera system work?',
    a: 'We set up a dedicated phone as a live camera in the room. You receive a link on your phone and can watch the live video feed anytime during the session. Video only — no audio. You can call our nanny on WhatsApp anytime to hear or speak.',
  },
  {
    q: 'Is the camera mandatory?',
    a: 'Yes, always. The camera protects both you and our nanny. It runs for the entire session without exception, even if you say you don\'t need it.',
  },
  {
    q: 'What ages do you accept?',
    a: 'We care for children aged 0-6 years. Our nanny is experienced with all ages in this range, from infants to active toddlers.',
  },
  {
    q: 'How many children per session?',
    a: 'Maximum 2 children per nanny. This ensures personalized, focused attention. If you have 3-4 children, we provide a second nanny at a discounted rate — contact us to arrange.',
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
    a: 'Our service is conducted entirely in English. Our nanny currently raises Canadian and American children and communicates fluently in English daily.',
  },
  {
    q: 'How do I pay?',
    a: 'Payment is due at the time of booking, during the initial intro call. We accept e-transfer or bank transfer.',
  },
  {
    q: 'What\'s the cancellation policy?',
    a: 'Cancel more than 2 hours before: no charge. Less than 2 hours: 50% of the booking fee. No-show: full fee.',
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
