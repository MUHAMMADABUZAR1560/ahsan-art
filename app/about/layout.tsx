import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'About Us | Ahsan Art Creative Studio — Product Photography Faisalabad',
  description: "Ahsan Art is Faisalabad's dedicated e-commerce content studio. Founded by Muhammad Ahsan — 7+ years in e-commerce, ex-lead photographer at international brands. 500+ projects delivered.",
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
