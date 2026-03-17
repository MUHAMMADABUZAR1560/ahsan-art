"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Camera, Video, ShoppingBag, Utensils, Play, Package } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "High-quality product images in their best light.",
    href: "/services#photography",
  },
  {
    icon: Video,
    title: "Videography",
    description: "Dynamic video content that brings items to life.",
    href: "/services#videography",
  },
  {
    icon: Play,
    title: "UGC Videos",
    description: "Authentic content that builds brand trust.",
    href: "/services#ugc",
  },
  {
    icon: Package,
    title: "Amazon",
    description: "Optimized visuals designed for listings.",
    href: "/services#amazon",
  },
  {
    icon: Utensils,
    title: "Food",
    description: "Mouth-watering imagery that drives desire.",
    href: "/services#food",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Complete visual solutions for your store.",
    href: "/services#ecommerce",
  },
]

export function ServicesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary text-xs md:text-sm font-medium tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-primary" />
            Our Services
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
            Everything You Need to
            <br />
            <span className="text-primary">Elevate Your Brand</span>
          </h2>
        </motion.div>

        {/* Services Grid: 2 columns on mobile, 3 on desktop */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              <Link
                href={service.href}
                className="block p-5 md:p-8 bg-secondary rounded-xl md:rounded-2xl border border-transparent hover:border-primary/20 transition-all duration-500 h-full"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-sm md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-[11px] md:text-base text-muted-foreground leading-tight md:leading-relaxed line-clamp-2 md:line-clamp-none">
                  {service.description}
                </p>
                <div className="mt-4 md:mt-6 flex items-center gap-2 text-primary text-xs md:text-sm font-medium opacity-0 md:group-hover:opacity-100 transition-opacity">
                  Learn More
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 md:px-8 md:py-4 rounded-full text-xs md:text-base font-medium hover:bg-primary transition-colors group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}