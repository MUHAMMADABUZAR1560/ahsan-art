import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import PortfolioClient from "./PortfolioClient"

export const metadata: Metadata = {
  title: 'Portfolio | Ahsan Art Creative Studio — Product Photography & Videography Faisalabad',
  description: 'Browse our portfolio of professional product photography, videography, Amazon content, food photography and UGC videos for e-commerce brands in Pakistan.',
  alternates: { canonical: 'https://ahsanart.pk/portfolio' }
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PortfolioClient />
      <Footer />
    </main>
  )
}