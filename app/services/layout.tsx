import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Product Photography & Videography',
  description: 'E-commerce product photography, videography, UGC videos, Amazon listing content, food photography, and visual solutions by Ahsan Art in Faisalabad.',
  alternates: { canonical: 'https://www.ahsanart.pk/services' },
  openGraph: {
    url: 'https://www.ahsanart.pk/services',
    title: 'Our Services | Product Photography & Videography',
    description: 'E-commerce product photography, videography, UGC videos, Amazon listing content, food photography, and visual solutions by Ahsan Art in Faisalabad.',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
