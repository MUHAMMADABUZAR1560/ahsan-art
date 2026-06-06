"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Camera, Video, ShoppingBag, Utensils, Play, Package } from "lucide-react"

const services = [
  {
    number: "01",
    icon: Camera,
    title: "Product Photography",
    description: "Sharp, clean images that make your product look exactly how it should — built for websites, social media, and online stores. We shoot with your brand in mind so every image feels consistent and trustworthy.",
    href: "/services#photography",
    tag: "Photography",
  },
  {
    number: "02",
    icon: Video,
    title: "Product Videography",
    description: "Not just a video — a sales tool. We plan the strategy first, then shoot content that positions your brand and drives results. From concept to final edit, handled end to end.",
    href: "/services#videography",
    tag: "Videography",
  },
  {
    number: "03",
    icon: Play,
    title: "UGC Videos",
    description: "Real-looking content people actually trust — made for TikTok, Reels, and ads that convert. Authentic, high-performing, built for today's platforms.",
    href: "/services#ugc",
    tag: "UGC",
  },
  {
    number: "04",
    icon: Package,
    title: "Amazon Content",
    description: "Listing images, infographics, and A+ content built to rank and convert on Amazon. Your image is your storefront — we make sure it does the job.",
    href: "/services#amazon",
    tag: "Amazon",
  },
  {
    number: "05",
    icon: Utensils,
    title: "Food Photography",
    description: "Food shots that make people hungry just by looking — styled and shot for menus, packaging, and social media. Every frame is crafted to evoke appetite.",
    href: "/services#food",
    tag: "Food",
  },
  {
    number: "06",
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description: "Full content packages for your online store — consistent visuals across your website, social media, and ads. One studio, complete coverage.",
    href: "/services#ecommerce",
    tag: "E-Commerce",
  },
]

export function ServicesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-16 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Our Services
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              One Studio.{" "}
              <span className="text-primary italic">Everything</span>
              <br />Your Brand Needs.
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300"
            >
              View All Services
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Numbered Services List */}
        <div className="flex flex-col gap-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={service.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group flex items-center gap-4 md:gap-8 py-5 md:py-6 px-4 md:px-8 transition-all duration-300 rounded-l-[2rem] md:rounded-l-full bg-gradient-to-r from-primary/30 via-primary/10 to-transparent border-l-4 border-transparent hover:border-primary"
              >
                {/* Number */}
                <span className={`text-xs md:text-sm font-mono font-bold tracking-widest transition-colors duration-300 flex-shrink-0 w-8 ${hoveredIndex === index ? "text-primary" : "text-muted-foreground/40"}`}>
                  {service.number}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <h3 className={`text-lg md:text-2xl font-serif font-bold transition-colors duration-300 ${hoveredIndex === index ? "text-primary" : "text-foreground"}`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 md:mt-2 text-sm leading-relaxed text-muted-foreground/70 max-w-2xl">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? "bg-primary border-primary" : "border-border bg-transparent"}`}>
                  <ArrowUpRight className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ${hoveredIndex === index ? "text-white translate-x-0.5 -translate-y-0.5" : "text-muted-foreground"}`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}