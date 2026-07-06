import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { CameraSection } from '@/components/camera-section'
import { Pricing } from '@/components/pricing'
import { Calculator } from '@/components/calculator'
import { About } from '@/components/about'
import { OurStory } from '@/components/our-story'
import { Reviews } from '@/components/reviews'
import { TrustSection } from '@/components/trust-section'
import { ServiceArea } from '@/components/service-area'
import { AreasWeServe } from '@/components/areas-we-serve'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <CameraSection />
        <Pricing />
        <Calculator />
        <About />
        <OurStory />
        <Reviews />
        <TrustSection />
        <ServiceArea />
        <AreasWeServe />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
