import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Behind the Scenes | Ahsan Art Creative Studio',
  description: 'Take a peek behind the lens. See our studio setup, styling process, and how we create magic for e-commerce brands in Faisalabad.',
  alternates: { canonical: 'https://www.ahsanart.pk/behind-the-scenes' },
  openGraph: {
    url: 'https://www.ahsanart.pk/behind-the-scenes',
    title: 'Behind the Scenes | Ahsan Art',
    description: 'A glimpse into our studio, process, and the work that goes into creating stunning visuals.',
  },
}

export default function BTSLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
