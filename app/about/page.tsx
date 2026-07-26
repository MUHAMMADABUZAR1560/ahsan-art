import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutContent } from "./AboutContent"

export const metadata: Metadata = {
  title: "About | Ahsan Art Creative Studio — E-Commerce Content Studio Faisalabad",
  description: "Learn about Ahsan Art Creative Studio — Faisalabad's dedicated product photography and videography studio. Built for e-commerce brands, Amazon sellers, and online businesses across Pakistan.",
  alternates: { canonical: "https://ahsanart.pk/about" },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <AboutContent />
      <Footer />
    </main>
  )
}