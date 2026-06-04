"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 md:pt-32">
        <FAQSection />
      </div>

      <CTASection />
      <Footer />
    </main>
  )
}
