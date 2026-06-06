"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const brands = [
  { name: "ELO", category: "Skincare", color: "from-violet-500 to-purple-700", initials: "EL" },
  { name: "Peropelle", category: "Fashion", color: "from-rose-500 to-pink-700", initials: "PE" },
  { name: "Vogue Aesthetics", category: "Beauty", color: "from-fuchsia-500 to-purple-700", initials: "VA" },
  { name: "Urban Sole", category: "Footwear", color: "from-blue-500 to-indigo-700", initials: "US" },
  { name: "Safi", category: "Healthcare", color: "from-emerald-500 to-teal-700", initials: "SA" },
  { name: "Khaadi", category: "Clothing", color: "from-amber-500 to-orange-700", initials: "KH" },
  { name: "Sapphire", category: "Fashion", color: "from-sky-500 to-blue-700", initials: "SP" },
  { name: "Outfitters", category: "Apparel", color: "from-red-500 to-rose-700", initials: "OU" },
  { name: "J.", category: "Retail", color: "from-violet-600 to-indigo-700", initials: "J." },
  { name: "Bonanza Satrangi", category: "Clothing", color: "from-pink-500 to-rose-700", initials: "BS" },
  { name: "Edenrobe", category: "Fashion", color: "from-teal-500 to-emerald-700", initials: "ER" },
  { name: "Charizma", category: "Textiles", color: "from-orange-500 to-amber-700", initials: "CH" },
]

function BrandCard({ brand }: { brand: typeof brands[0] }) {
  return (
    <div className="flex flex-col items-center gap-2.5 px-6 flex-shrink-0 group">
      {/* Circular logo */}
      <div
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${brand.color} flex items-center justify-center shadow-lg ring-2 ring-white/10 group-hover:scale-110 group-hover:ring-primary/40 transition-all duration-300`}
      >
        <span className="text-white font-bold text-sm md:text-base tracking-wide select-none">
          {brand.initials}
        </span>
      </div>
      {/* Brand name */}
      <div className="text-center">
        <p className="text-xs md:text-sm font-semibold text-foreground/80 whitespace-nowrap leading-tight">
          {brand.name}
        </p>
        <p className="text-[9px] md:text-[10px] font-medium text-primary/70 uppercase tracking-widest mt-0.5">
          {brand.category}
        </p>
      </div>
    </div>
  )
}

function TickerRow({ items, direction = "left" }: { items: typeof brands; direction?: "left" | "right" }) {
  const repeated = [...items, ...items, ...items]

  return (
    <div className="flex overflow-hidden py-4">
      <motion.div
        className="flex gap-0 flex-shrink-0"
        animate={{ x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeated.map((brand, i) => (
          <BrandCard key={i} brand={brand} />
        ))}
      </motion.div>
    </div>
  )
}

export function ClientsTicker() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="py-14 md:py-20 bg-secondary border-y border-border/50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Label */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-muted-foreground/60">
            <span className="w-8 h-px bg-border" />
            Brands We&apos;ve Worked With
            <span className="w-8 h-px bg-border" />
          </span>
        </div>

        {/* Scrolling brand logos */}
        <TickerRow items={brands} direction="left" />
      </motion.div>
    </section>
  )
}
