import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "About Ahsan Art Creative Studio | Faisalabad's E-Commerce Content Studio",
  description: "Ahsan Art Creative Studio is Faisalabad's dedicated e-commerce content studio. Founded by Muhammad Ahsan — 7+ years in e-commerce. 200+ projects delivered.",
  alternates: { canonical: 'https://www.ahsanart.pk/about' },
  openGraph: {
    url: 'https://www.ahsanart.pk/about',
    title: "About Ahsan Art Creative Studio | Faisalabad's E-Commerce Content Studio",
    description: "7+ years of product photography and videography. 200+ projects. Based in Faisalabad, Pakistan.",
  },
}
export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
