"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, MessageCircle, Instagram } from "lucide-react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground overflow-hidden relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-background blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-background blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-primary-foreground/80 text-sm font-medium tracking-wider uppercase mb-6">
              <span className="w-8 h-px bg-primary-foreground/50" />
              Start Your Project
              <span className="w-8 h-px bg-primary-foreground/50" />
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold leading-tight"
          >
            Ready to Transform
            <br />
            Your Brand Visuals?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Let's discuss your project and create stunning visuals that 
            capture attention and drive conversions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
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
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8"
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
              href="https://instagram.com/ahsan.art1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </div>
              <span>@ahsan.art1</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/10 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/10 rounded-full pointer-events-none"
      />
    </section>
  )
}