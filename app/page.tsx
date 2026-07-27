import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { StatsStrip } from "@/components/sections/stats-strip"
import { AboutPreview } from "@/components/sections/about-preview"
import { ClientsTicker } from "@/components/sections/clients-ticker"
import { ServicesPreview } from "@/components/sections/services-preview"
import { ReelsShowcase } from "@/components/sections/reels-showcase"
import { PortfolioPreview } from "@/components/sections/portfolio-preview"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { GoogleReviews } from "@/components/sections/google-reviews"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Ahsan Art Creative Studio | Product Photography & Videography Faisalabad",
  description: "Specialized e-commerce content studio in Faisalabad, Pakistan. Professional product photography, videography, UGC videos, and Amazon listing designs that drive sales.",
  alternates: {
    canonical: "https://ahsanart.pk",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* SEO: secondary heading below hero — visually subtle, crawler-readable */}
      <div className="bg-background border-b border-border/40 py-4 px-6">
        <div className="container mx-auto">
          <h2 className="text-center text-sm md:text-base font-medium text-muted-foreground tracking-wide">
            Product Photography &amp; Videography Studio in{" "}
            <span className="text-foreground font-semibold">Faisalabad, Pakistan</span>
          </h2>
        </div>
      </div>
      <ServicesPreview />
      <ClientsTicker />
      <PortfolioPreview />
      <ReelsShowcase />
      <WhyChooseUs />
      <StatsStrip />
      <GoogleReviews />
      <AboutPreview />
      <CTASection />
      <Footer />
    </main>
  )
}
