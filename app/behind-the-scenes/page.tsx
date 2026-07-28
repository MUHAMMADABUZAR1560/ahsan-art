import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BTSContent } from "./BTSContent"

export default function BehindTheScenesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BTSContent />
      <Footer />
    </main>
  )
}