"use client"

import { useRef } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

/* ─── Background slides (your own product photos) ─── */
const bgSlides = [
  {
    src: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575374/skincare_mijkbh.jpg",
    alt: "Skincare product photography by Ahsan Art",
  },
  {
    src: "/images/cimage.jpeg",
    alt: "Studio product photography by Ahsan Art",
  },
  {
    src: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883470/1_ophv2w.jpg",
    alt: "Fashion e-commerce photography by Ahsan Art",
  },
]

const services = [
  "Product Photography",
  "Product Videography",
  "UGC Videos",
  "Amazon Content",
  "Food Photography",
  "E-Commerce Solutions",
]

export function HeroSection() {
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  )

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-black"
      aria-label="Hero"
    >
      {/* ══════════════════════════════════════
          BACKGROUND — cycling product photos
      ══════════════════════════════════════ */}
      <Carousel
        plugins={[plugin.current as any]}
        opts={{ loop: true }}
        className="absolute inset-0 z-0"
      >
        <CarouselContent className="h-screen m-0">
          {bgSlides.map((slide, i) => (
            <CarouselItem key={i} className="relative h-full p-0">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-cover object-center"
                sizes="100vw"
                quality={80}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* ══════════════════════════════════════
          OVERLAYS — cinematic dark treatment
      ══════════════════════════════════════ */}

      {/* Heavy left-to-right gradient (sidebar is nearly black, photo bleeds through on right) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, rgba(4,2,12,0.97) 0%, rgba(4,2,12,0.85) 28%, rgba(4,2,12,0.60) 55%, rgba(4,2,12,0.35) 100%)",
        }}
      />
      {/* Top & bottom vignettes */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 25%, transparent 72%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* ══════════════════════════════════════
          CONTENT — DESKTOP (lg +)
      ══════════════════════════════════════ */}
      <div className="absolute inset-0 z-20 hidden lg:flex flex-col">

        {/* TOP-LEFT micro-label */}
        <div className="px-12 lg:px-16 pt-28 lg:pt-32">
          <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/30">
            Content Studio
          </span>
        </div>

        {/* ── MAIN ROW ── */}
        <div className="flex flex-1">

          {/* LEFT SIDEBAR — service nav */}
          <div
            className="flex flex-col justify-center flex-shrink-0 relative px-12 lg:px-16"
            style={{ width: "clamp(220px, 20vw, 300px)" }}
          >
            {/* Vertical track line */}
            <div
              className="absolute top-0 bottom-0 z-0"
              style={{
                left: "calc(3rem + 4px)",
                width: "1px",
                background:
                  "linear-gradient(to bottom, transparent 5%, rgba(255,255,255,0.10) 20%, rgba(255,255,255,0.10) 80%, transparent 95%)",
              }}
            />

            <ul className="flex flex-col gap-[18px] relative z-10">
              {services.map((svc, i) => (
                <li key={svc} className="flex items-center gap-4">
                  {/* Dot with staggered pulse */}
                  <span
                    className="w-[9px] h-[9px] rounded-full border border-white/30 bg-transparent flex-shrink-0"
                    style={{
                      animation: `dotPulse 3s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                  <span className="text-white/45 text-[12px] font-medium tracking-wide leading-snug">
                    {svc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — MASSIVE editorial headline */}
          <div className="flex-1 flex items-center pr-10 lg:pr-16">
            <h1
              className="font-serif font-bold text-white uppercase leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 6vw, 6rem)" }}
            >
              Visuals
              <br />
              That
              <br />
              Build
              <br />
              <span
                style={{
                  color: "#a855f7",
                  fontStyle: "italic",
                  display: "block",
                }}
              >
                Brands.
              </span>
            </h1>
          </div>
        </div>

        {/* ── BOTTOM ROW ── */}
        <div className="flex items-end justify-between px-12 lg:px-16 pb-12 lg:pb-16">

          {/* Year stamp */}
          <span className="text-[11px] font-mono text-white/22 tracking-widest">
            {new Date().getFullYear()}
          </span>

          {/* Two editorial text columns */}
          <div className="flex gap-12 xl:gap-20">
            <p className="max-w-[210px] text-white/38 text-[11.5px] leading-[1.75] font-medium">
              Faisalabad&apos;s premier e-commerce content studio — crafting visuals that convert browsers into buyers.
            </p>
            <p className="max-w-[210px] text-white/38 text-[11.5px] leading-[1.75] font-medium">
              Every detail is thoughtfully created to elevate your brand, from product photography to full Amazon content packages.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          CONTENT — TABLET  (md – lg)
      ══════════════════════════════════════ */}
      <div className="absolute inset-0 z-20 hidden md:flex lg:hidden flex-col justify-between px-8 pt-28 pb-10">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">Content Studio</span>
        <h1
          className="font-serif font-bold text-white uppercase leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
        >
          Visuals<br />That<br />Build<br />
          <span style={{ color: "#a855f7", fontStyle: "italic" }}>Brands.</span>
        </h1>
        <p className="text-white/40 text-[12px] leading-relaxed max-w-xs">
          Faisalabad&apos;s premier e-commerce content studio crafting visuals that convert.
        </p>
      </div>

      {/* ══════════════════════════════════════
          CONTENT — MOBILE  (< md)
      ══════════════════════════════════════ */}
      <div className="absolute inset-0 z-20 flex md:hidden flex-col justify-between">

        {/* Top label */}
        <div className="px-5 pt-24">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">Content Studio</span>
        </div>

        {/* Massive headline */}
        <div className="flex-1 flex items-center px-5">
          <h1
            className="font-serif font-bold text-white uppercase leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 3.5rem)" }}
          >
            Visuals<br />That<br />Build<br />
            <span style={{ color: "#a855f7", fontStyle: "italic" }}>Brands.</span>
          </h1>
        </div>

        {/* Bottom */}
        <div
          className="px-5 py-7"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4 pb-0.5">
            {services.map((svc) => (
              <span
                key={svc}
                className="flex-shrink-0 text-[9px] font-medium text-white/40 bg-white/5 border border-white/10 rounded-full px-3 py-1 uppercase tracking-wider"
              >
                {svc}
              </span>
            ))}
          </div>
          <p className="text-white/38 text-[11px] leading-relaxed">
            Faisalabad&apos;s e-commerce content studio — visuals that convert.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════
          KEYFRAMES
      ══════════════════════════════════════ */}
      <style>{`
        @keyframes dotPulse {
          0%, 100% { border-color: rgba(255,255,255,0.25); box-shadow: 0 0 0 0 rgba(168,85,247,0); }
          50%       { border-color: rgba(168,85,247,0.8);  box-shadow: 0 0 7px 2px rgba(168,85,247,0.4); }
        }
      `}</style>
    </section>
  )
}