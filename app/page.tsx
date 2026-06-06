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

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsStrip />
      <AboutPreview />
      <ClientsTicker />
      <ServicesPreview />
      <ReelsShowcase />
      <PortfolioPreview />
      <WhyChooseUs />
      <GoogleReviews />
      <CTASection />
      <Footer />
    </main>
  )
}
