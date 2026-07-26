import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesContent } from "./ServicesContent"

export const metadata: Metadata = {
  title: "Services | Ahsan Art Creative Studio — Product Photography & Videography Faisalabad",
  description: "Professional product photography, videography, UGC videos, Amazon content, and food photography services in Faisalabad, Pakistan. Affordable pricing for e-commerce brands.",
  alternates: { canonical: "https://ahsanart.pk/services" },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen font-serif bg-background">
      <Navigation />
      <ServicesContent />
      <Footer />
    </main>
  )
}