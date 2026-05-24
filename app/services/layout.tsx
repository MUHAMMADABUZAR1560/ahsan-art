import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Our Services | Product Photography, Videography & E-Commerce Content — Ahsan Art Faisalabad',
  description: 'Ahsan Art offers product photography, videography, UGC videos, Amazon listing content, food photography, and full e-commerce visual solutions in Faisalabad, Pakistan.',
}

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
