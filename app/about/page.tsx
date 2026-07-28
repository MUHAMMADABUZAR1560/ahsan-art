import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutContent } from "./AboutContent"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <AboutContent />
      <Footer />
    </main>
  )
}