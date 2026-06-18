import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { portfolioItemsBySlug, portfolioSlugs } from "@/lib/portfolio-data"
import { ProjectPageClient } from "./ProjectPageClient"

interface PageProps {
  params: Promise<{ slug: string }>
}

/** Pre-render all 14 project pages at build time */
export function generateStaticParams() {
  return portfolioSlugs.map((slug) => ({ slug }))
}

/** Per-page SEO metadata */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const item = portfolioItemsBySlug[slug]

  if (!item) {
    return {
      title: "Project Not Found",
    }
  }

  const title = `${item.title} — Product Photography`
  const url = `https://www.ahsanart.pk/portfolio/${item.slug}`

  return {
    title,
    description: item.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_PK",
      url,
      title: `${item.title} | Ahsan Art Creative Studio Faisalabad`,
      description: item.metaDescription,
      images: [
        {
          url: item.image,
          width: 1200,
          height: 630,
          alt: `${item.title} — product photography by Ahsan Art Creative Studio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} | Ahsan Art Creative Studio`,
      description: item.metaDescription,
      images: [item.image],
    },
  }
}

/** Server component — resolves data, hands off to client component for interactivity */
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const item = portfolioItemsBySlug[slug]

  if (!item) {
    notFound()
  }

  return <ProjectPageClient item={item} />
}
