"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const brands = [
  "Skincare Brand",
  "Amazon Seller",
  "Fashion Label",
  "Food Brand",
  "Bedding Co.",
  "Footwear Brand",
  "Kids Fashion",
  "Cosmetics",
  "Electronics",
  "Home Decor",
  "Sports Gear",
  "Jewellery Studio",
]

function TickerRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const repeated = [...items, ...items, ...items]

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-0 flex-shrink-0"
        animate={{ x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeated.map((brand, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-8 py-4 flex-shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span className="text-sm md:text-base font-medium text-foreground/50 whitespace-nowrap uppercase tracking-widest">
              {brand}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function ClientsTicker() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="py-12 md:py-16 bg-secondary border-y border-border/50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Label */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-muted-foreground/60">
            <span className="w-6 h-px bg-border" />
            Brands We&apos;ve Worked With
            <span className="w-6 h-px bg-border" />
          </span>
        </div>

        {/* Ticker */}
        <TickerRow items={brands} direction="left" />
      </motion.div>
    </section>
  )
}
