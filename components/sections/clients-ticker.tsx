"use client"

import { useRef, useState, useEffect } from "react"
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
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg ring-1 ring-white/10 group-hover:scale-110 group-hover:ring-primary/60 group-hover:shadow-primary/20 group-hover:shadow-xl transition-all duration-300 overflow-hidden">
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
            sizes="80px"
            unoptimized
          />
        ) : (
          <span className="text-gray-700 font-bold text-sm md:text-base tracking-wide select-none">
            {brand.initials}
          </span>
        )}
      </div>
      {/* Brand name */}
      <div className="text-center">
        <p className="text-xs md:text-sm font-semibold text-white/80 whitespace-nowrap leading-tight">
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
  const animationName = direction === "left" ? "ticker-slide-left" : "ticker-slide-right"

  return (
    <div className="flex overflow-hidden py-4">
      <div
        className="flex gap-0 flex-shrink-0"
        style={{
          animation: `${animationName} 40s linear infinite`,
          willChange: "transform",
        }}
      >
        {repeated.map((brand, i) => (
          <BrandCard key={i} brand={brand} />
        ))}
      </div>
    </div>
  )
}

export function ClientsTicker() {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { rootMargin: "-50px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* === GRADIENT BACKGROUND === */}
      {/* Solid purple left → pure black right, exactly like the reference image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #3b0f8c 0%, #220a5c 30%, #0e0428 55%, #000000 80%)",
        }}
      />

      {/* Radial purple bloom anchored to far left for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 120% at -10% 50%, rgba(140,82,255,0.55) 0%, transparent 70%)",
        }}
      />

      {/* Left + Right ticker fade masks */}
      <div
        className="absolute inset-y-0 left-0 w-24 md:w-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #000 0%, transparent 100%)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 md:w-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #000 0%, transparent 100%)" }}
      />


      <div className="relative z-10">
        {/* Heading */}
        <div
          className="text-center mb-12 px-6 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)" }}
        >
          <span className="inline-flex items-center gap-3 text-primary text-xs font-bold tracking-widest uppercase mb-5">
            <span className="w-8 h-px bg-primary" />
            Our Clients
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight whitespace-nowrap">
            Brands We&apos;ve{" "}
            <span className="text-primary italic">Worked With</span>
          </h2>
        </div>

        {/* Scrolling brand logos */}
        <TickerRow items={brands} direction="left" />
      </div>
    </section>
  )
}
