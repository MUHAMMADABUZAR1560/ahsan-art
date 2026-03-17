import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutPreview } from "@/components/sections/about-preview"
import { ServicesPreview } from "@/components/sections/services-preview"
import { PortfolioPreview } from "@/components/sections/portfolio-preview"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </main>
  )
}
