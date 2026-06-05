"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const brands = [
  { name: "ELO", category: "Skincare" },
  { name: "Peropelle", category: "Fashion" },
  { name: "Vogue Aesthetics", category: "Beauty" },
  { name: "Urban Sole", category: "Footwear" },
  { name: "Safi", category: "Healthcare" },
  { name: "Khaadi", category: "Clothing" },
  { name: "Sapphire", category: "Fashion" },
  { name: "Outfitters", category: "Apparel" },
  { name: "J.", category: "Retail" },
  { name: "Bonanza Satrangi", category: "Clothing" },
  { name: "Edenrobe", category: "Fashion" },
  { name: "Charizma", category: "Textiles" },
]

export function BrandsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary mb-4">
              <span className="w-8 h-px bg-primary" />
              Client Roster
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Brands We <span className="italic text-primary">Serve</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-xs">
            Trusted by Pakistan's leading retail and e-commerce brands.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.06 }
            }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px border border-border/30 rounded-2xl overflow-hidden"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.4 } }
              }}
              className="group flex flex-col items-center justify-center p-6 md:p-8 bg-secondary/40 hover:bg-secondary transition-colors duration-300 border-border/20"
            >
              <span className="text-base md:text-lg font-serif font-bold text-foreground/40 group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
                {brand.name}
              </span>
              <span className="mt-1.5 text-[10px] font-medium tracking-widest uppercase text-foreground/20 group-hover:text-primary transition-colors duration-300">
                {brand.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* "And more" row */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center text-xs text-muted-foreground tracking-widest uppercase"
        >
          + Many more local and international brands
        </motion.p>
      </div>
    </section>
  )
}
