import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "About Ahsan Art | Faisalabad's E-Commerce Content Studio",
  description: "Ahsan Art is Faisalabad's dedicated e-commerce content studio. Founded by Muhammad Ahsan — 7+ years in e-commerce. 500+ projects delivered.",
  alternates: { canonical: 'https://www.ahsanart.pk/about' },
  openGraph: {
    url: 'https://www.ahsanart.pk/about',
    title: "About Ahsan Art | Faisalabad's E-Commerce Content Studio",
    description: "7+ years of product photography and videography. 500+ projects. Based in Faisalabad, Pakistan.",
  },
}
export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
