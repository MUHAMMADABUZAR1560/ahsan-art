"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground"
    >
      {/* Background with Parallax */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground z-10 bg-primary" />
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 container mx-auto px-6 lg:px-12 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-muted">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Premium Creative Studio
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-background leading-[1.1] tracking-tight"
          >
            Crafting Visual
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-background leading-[1.1] tracking-tight"
          >
            Stories That
            <span className="text-primary"> Sell</span>
            <span className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary ml-2 align-middle" />
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-background/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Premium product photography & videography studio specializing in 
          e-commerce brands, Amazon listings, and conversion-focused visual content.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/portfolio"
            className="group relative bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-background/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
          <Link
            href="/contact"
            className="group border border-background/30 text-background px-8 py-4 rounded-full text-base font-medium hover:bg-background hover:text-foreground transition-all"
          >
            Start a Project
          </Link>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "500+", label: "Projects Delivered" },
            { value: "100+", label: "Happy Clients" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-background">
                {stat.value}
              </div>
              <div className="text-background/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center gap-2 text-background/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Floating Elements (Faded Pink Circles) */}
      
      {/* Top Right - Large */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-24 h-24 border border-primary/20 rounded-full z-10 hidden lg:block"
      />

      {/* Bottom Left - Extra Large */}
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[8%] w-40 h-40 border border-primary/10 rounded-full z-10 hidden lg:block"
      />

      {/* Top Left - Medium */}
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-[15%] left-[15%] w-16 h-16 border border-primary/15 rounded-full z-10 hidden lg:block"
      />

      {/* Center Right - Small */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-1/2 right-[5%] w-12 h-12 border border-primary/10 rounded-full z-10 hidden lg:block"
      />

      {/* Bottom Right - Large */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[20%] w-32 h-32 border border-primary/20 rounded-full z-10 hidden lg:block"
      />

      {/* Bottom Center - Small */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute bottom-[5%] left-1/2 w-8 h-8 border border-primary/10 rounded-full z-10 hidden lg:block"
      />
    </section>
  )
}