import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Product Photography & Videography Work',
  description: 'View our product photography and videography portfolio. 500+ projects for e-commerce brands across Pakistan including skincare, fashion, food, and Amazon sellers.',
  alternates: { canonical: 'https://www.ahsanart.pk/portfolio' },
  openGraph: {
    url: 'https://www.ahsanart.pk/portfolio',
    title: 'Portfolio | Product Photography & Videography Work',
    description: '500+ product photography and videography projects for e-commerce brands across Pakistan.',
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
