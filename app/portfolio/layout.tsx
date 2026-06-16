import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Product Photography & Videography Work',
  description: 'View our product photography and videography portfolio. 200+ projects for e-commerce brands across Pakistan including skincare, fashion, food, and Amazon sellers.',
  alternates: { canonical: 'https://www.ahsanart.pk/portfolio' },
  openGraph: {
    url: 'https://www.ahsanart.pk/portfolio',
    title: 'Portfolio | Ahsan Art Creative Studio',
    description: '200+ product photography and videography projects for e-commerce brands across Pakistan.',
    type: 'website',
    locale: 'en_PK',
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
