import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Product Photography, Videography & Amazon Content',
  description: 'Ahsan Art Creative Studio offers product photography, videography, UGC videos, Amazon listing content, food photography and full e-commerce visual solutions in Faisalabad, Pakistan.',
  alternates: { canonical: 'https://www.ahsanart.pk/services' },
  openGraph: {
    url: 'https://www.ahsanart.pk/services',
    title: 'Our Services | Product Photography, Videography & Amazon Content',
    description: 'Product photography, videography, UGC videos, Amazon listing content and food photography in Faisalabad.',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
