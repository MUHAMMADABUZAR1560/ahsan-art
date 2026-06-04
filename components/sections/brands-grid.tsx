"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const brands = [
  "ELO",
  "Peropelle",
  "Vogue Aesthetics",
  "Urban Sole",
  "Safi",
  "Khaadi",
  "Sapphire",
  "Outfitters",
  "J.",
  "Bonanza Satrangi",
  "Edenrobe",
  "Charizma"
]

export function BrandsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary mb-4">
            <span className="w-8 h-px bg-primary" />
            Brands We Serve
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Trusted by Industry <span className="italic text-primary">Leaders</span>
          </h2>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 }
            }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex items-center justify-center p-8 md:p-12 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors duration-300 group grayscale hover:grayscale-0"
            >
              <span className="text-xl md:text-2xl font-serif font-bold text-foreground/50 group-hover:text-foreground transition-colors uppercase tracking-wider text-center">
                {brand}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
