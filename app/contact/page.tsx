import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactContent } from "./ContactContent"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactContent />
      <Footer />
    </main>
  )
}
