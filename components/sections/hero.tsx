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
          OVERLAY — lighter, less fading
      ══════════════════════════════════════ */}

      {/* Left-to-right gradient — only darkens left sidebar area, bleeds to transparent on right */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, rgba(4,2,12,0.88) 0%, rgba(4,2,12,0.65) 30%, rgba(4,2,12,0.20) 60%, rgba(4,2,12,0.05) 100%)",
        }}
      />
      {/* Subtle top vignette only (navbar readability) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 20%)",
        }}
      />

      {/* ══════════════════════════════════════
          CONTENT — DESKTOP (lg +)
      ══════════════════════════════════════ */}
      <div className="absolute inset-0 z-20 hidden lg:flex flex-col">

        {/* ── MAIN ROW ── */}
        <div className="flex flex-1 items-center">

          {/* LEFT SIDEBAR — service nav */}
          <div
            className="flex flex-col justify-center flex-shrink-0 relative px-12 lg:px-16 pt-32"
            style={{ width: "clamp(240px, 22vw, 320px)" }}
          >
            {/* Vertical track line */}
            <div
              className="absolute top-0 bottom-0 z-0"
              style={{
                left: "calc(3rem + 4px)",
                width: "1px",
                background:
                  "linear-gradient(to bottom, transparent 5%, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent 95%)",
              }}
            />

            <ul className="flex flex-col gap-[22px] relative z-10">
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
                  <span className="text-white/70 text-[15px] font-medium tracking-wide leading-snug">
                    {svc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — editorial headline */}
          <div className="flex-1 flex items-center pr-10 lg:pr-16">
            <h1
              className="font-serif font-black text-white uppercase leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 4.5vw, 4.8rem)" }}
            >
              VISUALS
              <br />
              THAT
              <br />
              BUILD
              <br />
              <span
                style={{
                  color: "#a855f7",
                  fontStyle: "italic",
                  display: "block",
                }}
              >
                BRANDS.
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          CONTENT — TABLET  (md – lg)
      ══════════════════════════════════════ */}
      <div className="absolute inset-0 z-20 hidden md:flex lg:hidden flex-col justify-center px-8 pt-28 pb-10 gap-6">
        <h1
          className="font-serif font-black text-white uppercase leading-[1.0] tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}
        >
          VISUALS<br />THAT<br />BUILD<br />
          <span style={{ color: "#a855f7", fontStyle: "italic" }}>BRANDS.</span>
        </h1>
      </div>

      {/* ══════════════════════════════════════
          CONTENT — MOBILE  (< md)
      ══════════════════════════════════════ */}
      <div className="absolute inset-0 z-20 flex md:hidden flex-col justify-center px-5 pt-20 gap-6">

        {/* Headline */}
        <h1
          className="font-serif font-black text-white uppercase leading-[1.0] tracking-tight"
          style={{ fontSize: "clamp(2rem, 8vw, 3rem)" }}
        >
          VISUALS<br />THAT<br />BUILD<br />
          <span style={{ color: "#a855f7", fontStyle: "italic" }}>BRANDS.</span>
        </h1>
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