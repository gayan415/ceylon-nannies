import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { TOWNS } from '@/lib/towns'
import { TownPage } from '@/components/town-page'

// Pre-render one static page per town slug (required for output: 'export').
export function generateStaticParams() {
  return TOWNS.map((town) => ({ town: town.slug }))
}

// Only the town slugs are valid — anything else 404s.
export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string }>
}): Promise<Metadata> {
  const { town: slug } = await params
  const town = TOWNS.find((t) => t.slug === slug)
  if (!town) return {}
  return {
    title: town.metaTitle,
    description: town.metaDescription,
    alternates: { canonical: `https://www.ceylonnannies.com/${town.slug}` },
    openGraph: {
      title: town.metaTitle,
      description: town.metaDescription,
      url: `https://www.ceylonnannies.com/${town.slug}`,
      siteName: 'Ceylon Nannies',
      locale: 'en_US',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: town.h1 }],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ town: string }> }) {
  const { town: slug } = await params
  const town = TOWNS.find((t) => t.slug === slug)
  if (!town) notFound()
  return <TownPage town={town} />
}
