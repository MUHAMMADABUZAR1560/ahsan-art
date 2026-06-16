"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { useEffect } from "react"
import { ArrowUpRight, Camera, Video, ShoppingBag, Utensils, Play, Package } from "lucide-react"

const services = [
  {
    number: "01",
    icon: Camera,
    title: "Product Photography",
    description: "Sharp, clean images that make your product look exactly how it should — built for websites, social media, and online stores. We shoot with your brand in mind so every image feels consistent and trustworthy.",
    href: "/services/product-photography",
    tag: "Photography",
  },
  {
    number: "02",
    icon: Video,
    title: "Product Videography",
    description: "Not just a video — a sales tool. We plan the strategy first, then shoot content that positions your brand and drives results. From concept to final edit, handled end to end.",
    href: "/services/product-videography",
    tag: "Videography",
  },
  {
    number: "03",
    icon: Play,
    title: "UGC Videos",
    description: "Real-looking content people actually trust — made for TikTok, Reels, and ads that convert. Authentic, high-performing, built for today's platforms.",
    href: "/services/ugc-videos",
    tag: "UGC",
  },
  {
    number: "04",
    icon: Package,
    title: "Amazon Content",
    description: "Listing images, infographics, and A+ content built to rank and convert on Amazon. Your image is your storefront — we make sure it does the job.",
    href: "/services/amazon-content",
    tag: "Amazon",
  },
  {
    number: "05",
    icon: Utensils,
    title: "Food Photography",
    description: "Food shots that make people hungry just by looking — styled and shot for menus, packaging, and social media. Every frame is crafted to evoke appetite.",
    href: "/services/food-photography",
    tag: "Food",
  },
  {
    number: "06",
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description: "Full content packages for your online store — consistent visuals across your website, social media, and ads. One studio, complete coverage.",
    href: "/services/ecommerce-solutions",
    tag: "E-Commerce",
  },
]

export function ServicesPreview() {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
    <section ref={ref} className="py-16 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-12">

        {/* Section Header */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Our Services
            </h2>
          </div>
          <div
            className="transition-all duration-700 delay-300"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(20px)" }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300"
            >
              View All Services
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Numbered Services List */}
        <div className="flex flex-col gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 500ms ease ${index * 70}ms, transform 500ms ease ${index * 70}ms`,
              }}
            >
              <Link
                href={service.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group flex items-center justify-between gap-4 md:gap-8 py-5 md:py-6 px-4 md:px-8 transition-all duration-300 rounded-l-2xl bg-gradient-to-r from-primary/80 via-primary/20 to-transparent border-l-4 border-transparent hover:border-primary"
              >
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className={`text-lg md:text-2xl font-serif font-bold transition-colors duration-300 ${hoveredIndex === index ? "text-primary-foreground" : "text-foreground"}`}>
                    {service.title}
                  </h3>
                </div>

                {/* Arrow */}
                <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? "bg-primary-foreground border-primary-foreground" : "border-border bg-transparent"}`}>
                  <ArrowUpRight className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ${hoveredIndex === index ? "text-primary translate-x-0.5 -translate-y-0.5" : "text-muted-foreground"}`} />
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}