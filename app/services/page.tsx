import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesContent } from "./ServicesContent"

export default function ServicesPage() {
  return (
    <main className="min-h-screen font-serif bg-background">
      <Navigation />
      <ServicesContent />
      <Footer />
    </main>
  )
}