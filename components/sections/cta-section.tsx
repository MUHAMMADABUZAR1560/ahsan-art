"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, MessageCircle, Instagram } from "lucide-react"

export function CTASection() {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { rootMargin: "-80px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground overflow-hidden relative"
    >
      {/* Static Background Pattern — no JS animation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-background blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-background blur-3xl" />
      </div>

      {/* Decorative rings — CSS pulse instead of Framer Motion */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/10 rounded-full pointer-events-none animate-[ping_4s_ease-in-out_infinite] opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/10 rounded-full pointer-events-none animate-[ping_6s_ease-in-out_infinite] opacity-[0.07]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold leading-tight transition-all duration-700 delay-100"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
          >
            Let&apos;s Start Your Project
          </h2>

          <p
            className="mt-6 text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto transition-all duration-700 delay-150"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
          >
            Tell us about your product. We'll build a content plan that fits your goals and your budget.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-200"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
          >
            <Link
              href="/contact"
              className="group bg-background text-foreground px-8 py-4 rounded-full font-medium hover:bg-background/90 transition-all inline-flex items-center gap-2"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary-foreground/10 transition-all"
            >
              View Our Work
            </Link>
          </div>

          {/* Contact Info */}
          <div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 transition-all duration-700 delay-300"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
          >
            <a
              href="https://wa.me/923081122525"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span>0308-1122525</span>
            </a>
            <a
              href="https://www.instagram.com/ahsanart.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </div>
              <span>@ahsanart.studio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}