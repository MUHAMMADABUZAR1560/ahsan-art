"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { ArrowRight, MessageCircle } from "lucide-react"

const categories = [
  { label: "Shipping & Products", icon: "📦" },
  { label: "Turnaround Time", icon: "⏱️" },
  { label: "Pricing", icon: "💰" },
  { label: "Usage Rights", icon: "✅" },
  { label: "Revisions", icon: "🔄" },
]

export function FAQPageClient() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section ref={heroRef} className="pt-36 pb-16 md:pt-52 md:pb-24 border-b border-border/50 overflow-hidden relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
            }}
          >
            <motion.span
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-6"
            >
              <span className="w-8 h-px bg-primary" /> Help Center
            </motion.span>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-tight"
            >
              Got Questions<span className="text-primary">?</span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-muted-foreground text-base md:text-xl leading-relaxed max-w-xl"
            >
              Everything you need to know about working with us — from shipping your products to getting final deliverables.
            </motion.p>

            {/* Quick Category Pills */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3 mt-10"
            >
              {categories.map((cat, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-foreground/70 rounded-full text-xs font-medium border border-border/50"
                >
                  {cat.icon} {cat.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <FAQSection />

      {/* Still Have Questions Banner */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-3xl bg-secondary border border-border/50">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                Still have a question?
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Can't find the answer you're looking for? Reach out to us directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href="https://wa.me/923081122525"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-colors group"
              >
                Contact Form
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
