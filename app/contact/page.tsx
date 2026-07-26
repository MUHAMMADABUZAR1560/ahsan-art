import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactContent } from "./ContactContent"

export const metadata: Metadata = {
  title: "Contact | Ahsan Art Creative Studio — Get a Quote for Product Photography Faisalabad",
  description: "Contact Ahsan Art Creative Studio for product photography, videography, Amazon content and UGC video quotes. Based in Faisalabad, serving brands across Pakistan.",
  alternates: { canonical: "https://ahsanart.pk/contact" },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactContent />
      <Footer />
    </main>
  )
}
