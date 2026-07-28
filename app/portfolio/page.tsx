import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import PortfolioClient from "./PortfolioClient"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PortfolioClient />
      <Footer />
    </main>
  )
}