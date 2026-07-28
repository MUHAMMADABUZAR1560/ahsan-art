"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { studioInfo } from "@/lib/studio-info"

export function AboutPreview() {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Fallback: trigger after 2 seconds in case IntersectionObserver fails
    const fallbackTimer = setTimeout(() => {
      setInView(true)
    }, 2000)

    if (typeof IntersectionObserver !== "undefined") {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true)
            clearTimeout(fallbackTimer)
            obs.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      obs.observe(el)
      return () => {
        clearTimeout(fallbackTimer)
        obs.disconnect()
      }
    } else {
      setInView(true)
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div
            className="relative transition-all duration-700"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575375/studio_zpk4im.jpg"
                alt="Ahsan Art Creative Studio - E-commerce Product Photography in Faisalabad"
                fill
                className="object-cover"
                quality={60}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div
              className="absolute -right-4 lg:-right-8 bottom-8 bg-background p-6 rounded-xl shadow-2xl max-w-[200px] transition-all duration-700 delay-300"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(20px)" }}
            >
              <div className="text-4xl font-serif font-bold text-primary">{studioInfo.stats.yearsString}</div>
              <div className="text-sm text-muted-foreground mt-1">
                Years of Professional Experience
              </div>
            </div>
            {/* Purple Accent */}
            <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-primary/10 rounded-2xl" />
          </div>

          {/* Content Side */}
          <div
            className="lg:pl-8 transition-all duration-700 delay-150"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
              About Us
              <span className="inline-block w-2 h-2 rounded-full bg-primary ml-2 align-middle" />
            </h2>

            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Most photographers in Faisalabad do weddings, events, everything. We don't. Ahsan Art Creative Studio is built specifically for e-commerce and product content — and that focus makes all the difference. We don't just shoot pretty pictures. Before any project, we study your brand, your social media, your website — and then we plan content that fits your goals and your budget. The result? Better ads, lower ad costs, more orders, and a brand that people actually remember. That's why most of our clients don't leave. They stay — some for 2 years and counting.
            </p>

            <div
              className="mt-10 transition-all duration-500 delay-[300ms]"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
