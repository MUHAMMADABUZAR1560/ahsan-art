"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const brands = [
  { name: "Khaadi", category: "Clothing", domain: "khaadi.com", initials: "KH" },
  { name: "Sapphire", category: "Fashion", domain: "sapphireonline.pk", initials: "SP" },
  { name: "Outfitters", category: "Apparel", domain: "outfitters.com.pk", initials: "OU" },
  { name: "Edenrobe", category: "Fashion", domain: "edenrobe.com", initials: "ER" },
  { name: "Bonanza Satrangi", category: "Clothing", domain: "bonanzasatrangi.com", initials: "BS" },
  { name: "Charizma", category: "Textiles", domain: "charizma.com.pk", initials: "CH" },
  { name: "J.", category: "Retail", domain: "j-dot.pk", initials: "J." },
  { name: "Safi", category: "Healthcare", domain: "safi.pk", initials: "SA" },
  { name: "Peropelle", category: "Fashion", domain: "peropelle.com", initials: "PE" },
  { name: "Urban Sole", category: "Footwear", domain: "urbansole.pk", initials: "US" },
  { name: "Alkaram Studio", category: "Textiles", domain: "alkaramstudio.com", initials: "AK" },
  { name: "Gul Ahmed", category: "Clothing", domain: "gulahmedshop.com", initials: "GA" },
]

function BrandCard({ brand }: { brand: typeof brands[0] }) {
  const [imgError, setImgError] = useState(false)
  const logoUrl = `https://logo.clearbit.com/${brand.domain}`

  return (
    <div className="flex flex-col items-center gap-3 px-6 flex-shrink-0 group cursor-default">
      {/* Circular logo container */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-md ring-1 ring-border/30 group-hover:scale-110 group-hover:ring-primary/40 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
        {!imgError ? (
          <Image
            src={logoUrl}
            alt={brand.name}
            width={80}
            height={80}
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
            onError={() => setImgError(true)}
            quality={60}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 100vw"
            unoptimized
          />
        ) : (
          // Fallback: clean initials on white background
          <span className="text-gray-700 font-bold text-sm md:text-base tracking-wide select-none">
            {brand.initials}
          </span>
        )}
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
  const isInView = useInView(ref, { margin: "-50px" })

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
