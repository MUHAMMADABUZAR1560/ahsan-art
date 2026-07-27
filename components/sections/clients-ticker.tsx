"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"

const brands = [
  { name: "MOOR FARMS", category: "Dairy", logo: "https://res.cloudinary.com/da6r15g9n/image/upload/v1781612283/WhatsApp_Image_2026-06-16_at_3.22.29_PM_bkvdvz.jpg" },
  { name: "RUE & MAN", category: "Clothing", logo: "https://res.cloudinary.com/da6r15g9n/image/upload/v1781612282/WhatsApp_Image_2026-06-16_at_3.22.29_PM_3_vhgfct.jpg" },
  { name: "ROYAL SHOP", category: "Clothing", logo: "https://res.cloudinary.com/da6r15g9n/image/upload/v1781612281/WhatsApp_Image_2026-06-16_at_3.22.29_PM_2_anaax3.jpg" },
  { name: "ELO", category: "Shopping Store", logo: "https://res.cloudinary.com/da6r15g9n/image/upload/v1781612281/WhatsApp_Image_2026-06-16_at_3.22.29_PM_1_wexnih.jpg" },
  { name: "REBEL APPAREL", category: "Clothing", logo: "https://res.cloudinary.com/da6r15g9n/image/upload/v1781612281/WhatsApp_Image_2026-06-16_at_3.22.28_PM_npgmwp.jpg" },
  { name: "MAMAYA", category: "Kids Clothing", logo: "https://res.cloudinary.com/da6r15g9n/image/upload/v1781612280/WhatsApp_Image_2026-06-16_at_3.22.28_PM_2_ousjxh.jpg" },
  { name: "DECOR TOWN", category: "Home Decor", logo: "https://res.cloudinary.com/da6r15g9n/image/upload/v1781612279/WhatsApp_Image_2026-06-16_at_3.22.27_PM_3_jn6mdt.jpg" },
  { name: "COMFORE", category: "Bed Sheets", logo: "https://res.cloudinary.com/da6r15g9n/image/upload/v1781612279/WhatsApp_Image_2026-06-16_at_3.22.28_PM_1_qqxhki.jpg" },
  { name: "YAMANI FABRICS", category: "Clothing", logo: "https://res.cloudinary.com/da6r15g9n/image/upload/v1781612279/WhatsApp_Image_2026-06-16_at_3.22.27_PM_2_tplku5.jpg" },
  { name: "LIBAAN FABRICS", category: "Clothing", logo: "https://res.cloudinary.com/da6r15g9n/image/upload/v1781612279/WhatsApp_Image_2026-06-16_at_3.22.27_PM_y8tfqn.jpg" },
  { name: "YUMZZ", category: "Kids Clothing", logo: "https://res.cloudinary.com/da6r15g9n/image/upload/v1781612278/WhatsApp_Image_2026-06-16_at_3.22.25_PM_1_q3lgfu.jpg" },
  { name: "Broh.", category: "Food", logo: "https://res.cloudinary.com/da6r15g9n/image/upload/v1781612278/WhatsApp_Image_2026-06-16_at_3.22.26_PM_xpjgua.jpg" },
  { name: "PURO PELLE", category: "Shoes", logo: "https://res.cloudinary.com/da6r15g9n/image/upload/v1781612278/WhatsApp_Image_2026-06-16_at_3.22.27_PM_1_fgovzp.jpg" },
  { name: "ETERNITY MEN", category: "Clothing", logo: "https://res.cloudinary.com/da6r15g9n/image/upload/v1781612278/WhatsApp_Image_2026-06-16_at_3.22.26_PM_1_rv5qn8.jpg" },
  { name: "OSCAR", category: "Shoes", logo: "https://res.cloudinary.com/da6r15g9n/image/upload/v1781612278/WhatsApp_Image_2026-06-16_at_3.22.25_PM_p4buyc.jpg" },
]

function BrandCard({ brand }: { brand: typeof brands[0] & { domain?: string, initials?: string } }) {
  const [imgError, setImgError] = useState(false)
  const logoUrl = brand.logo || (brand.domain ? `https://logo.clearbit.com/${brand.domain}` : '')

  return (
    <div className="flex flex-col items-center gap-3 px-6 flex-shrink-0 group cursor-default">
      {/* Circular logo container */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg ring-1 ring-white/10 group-hover:scale-110 group-hover:ring-primary/60 group-hover:shadow-primary/20 group-hover:shadow-xl transition-all duration-300 overflow-hidden">
        {!imgError && logoUrl ? (
          <Image
            src={logoUrl}
            alt={brand.name}
            width={80}
            height={80}
            className="w-full h-full object-contain p-2"
            onError={() => setImgError(true)}
            quality={80}
            loading="lazy"
            sizes="80px"
            unoptimized
          />
        ) : (
          <span className="text-gray-700 font-bold text-sm md:text-base tracking-wide select-none">
            {brand.initials || brand.name.slice(0, 2).toUpperCase()}
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
  const animationName = direction === "left" ? "ticker-slide-left" : "ticker-slide-right"

  return (
    <div className="flex overflow-hidden py-4" role="list" aria-label="Client brands">
      {/* Primary track — indexed by crawlers */}
      <div
        className="flex gap-0 flex-shrink-0"
        style={{
          animation: `${animationName} 40s linear infinite`,
          willChange: "transform",
        }}
      >
        {items.map((brand, i) => (
          <BrandCard key={`a-${i}`} brand={brand} />
        ))}
        {/* Seamless loop duplicate — hidden from crawlers & assistive tech */}
        {items.map((brand, i) => (
          <div key={`b-${i}`} aria-hidden="true">
            <BrandCard brand={brand} />
          </div>
        ))}
        {items.map((brand, i) => (
          <div key={`c-${i}`} aria-hidden="true">
            <BrandCard brand={brand} />
          </div>
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
          <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight whitespace-nowrap">
            Trusted By These Brands
          </h2>
        </div>

        {/* Scrolling brand logos */}
        <TickerRow items={brands} direction="left" />
      </div>
    </section>
  )
}
