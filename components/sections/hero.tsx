"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowDown } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const bgSlides = [
  { src: "/images/cimage.jpeg", alt: "Product photography studio shoot" },
  { src: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575374/skincare_mijkbh.jpg", alt: "Skincare product photography" },
  { src: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883470/1_ophv2w.jpg", alt: "Fashion product shoot" },
]

const services = [
  "Product Photography",
  "Product Videography",
  "UGC Videos",
  "Amazon Content",
  "Food Photography",
  "E-Commerce Solutions",
]

const stats = [
  { value: "7+", label: "Years in E-Commerce" },
  { value: "200+", label: "Projects" },
  { value: "100+", label: "Clients" },
]

export function HeroSection() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* ── BACKGROUND: sliding carousel ── */}
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
                quality={70}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* ── OVERLAYS: darken entire background ── */}
      {/* Deep vignette + left heavy darkness so text is always readable */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* ── STATIC CONTENT OVERLAY ── */}
      <div className="absolute inset-0 z-20 flex flex-col min-h-screen">

        {/* ════════════════════════════════════
            DESKTOP LAYOUT (md and up)
        ════════════════════════════════════ */}
        <div className="hidden md:flex flex-col flex-1">

          {/* TOP ROW: tagline left, CTAs right */}
          <div className="flex items-start justify-between px-10 lg:px-16 pt-28 lg:pt-32">
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                Faisalabad&apos;s E-Commerce Content Studio
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/portfolio"
                className="group bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 duration-300"
              >
                View Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="group border border-white/25 text-white hover:bg-white hover:text-black px-6 py-2.5 rounded-full text-sm font-semibold flex items-center transition-all hover:scale-105 active:scale-95 duration-300"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* MIDDLE ROW: glass sidebar left + headline right */}
          <div className="flex flex-1 items-center">

            {/* ── FROSTED GLASS SIDEBAR ── */}
            {/* Outer wrapper clips the mask properly */}
            <div
              className="relative flex-shrink-0 self-stretch flex items-center"
              style={{
                width: "clamp(280px, 24vw, 380px)",
                // Soft right-edge fade so it blends into the image
                WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%)",
                maskImage: "linear-gradient(to right, black 70%, transparent 100%)",
              }}
            >
              {/* Glass panel */}
              <div
                className="absolute inset-0"
                style={{
                  backdropFilter: "blur(20px) saturate(140%)",
                  WebkitBackdropFilter: "blur(20px) saturate(140%)",
                  background: "rgba(255,255,255,0.06)",
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                }}
              />

              {/* Services nav content */}
              <div className="relative z-10 px-10 lg:px-14 py-10 w-full">
                {/* Vertical line running through all dots */}
                <div
                  className="absolute left-[calc(2.5rem+6px)] lg:left-[calc(3.5rem+6px)] top-[88px] bottom-[88px] w-px bg-white/20"
                />

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 mb-8">
                  Our Services
                </p>

                <ul className="flex flex-col gap-5">
                  {services.map((svc, i) => (
                    <li key={i} className="flex items-center gap-4 relative">
                      {/* Dot marker */}
                      <span
                        className="flex-shrink-0 w-3 h-3 rounded-full border-2 border-primary bg-black z-10"
                        style={{ boxShadow: "0 0 6px 2px rgba(140,82,255,0.4)" }}
                      />
                      <span className="text-sm text-white/65 font-sans font-medium leading-snug">
                        {svc}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Year at bottom of panel */}
                <p className="mt-10 text-[11px] text-white/20 font-mono tracking-widest">
                  {new Date().getFullYear()}
                </p>
              </div>
            </div>

            {/* ── MAIN HEADLINE ── */}
            <div className="flex-1 px-12 lg:px-20 xl:px-24">
              <h1
                className="font-serif font-bold text-white leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(4rem, 9vw, 9rem)" }}
              >
                Visuals That
                <br />
                Build{" "}
                <span className="text-primary italic">Brands</span>
                <span className="inline-block w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-primary ml-2 align-middle animate-pulse" />
              </h1>
            </div>
          </div>

          {/* BOTTOM ROW: stats */}
          <div className="flex items-end justify-between px-10 lg:px-16 pb-12 lg:pb-16">
            {/* Stat blocks */}
            <div className="flex items-center gap-12 lg:gap-16">
              {stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="text-3xl lg:text-4xl font-serif font-bold text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-[10px] mt-2 font-medium tracking-[0.15em] uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div
              className="flex flex-col items-center gap-1.5 text-white/30 pointer-events-none"
              style={{ animation: "scrollBounce 1.8s ease-in-out infinite" }}
            >
              <span className="text-[9px] uppercase tracking-widest font-semibold">Scroll</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>


        {/* ════════════════════════════════════
            MOBILE LAYOUT (below md)
        ════════════════════════════════════ */}
        <div className="flex md:hidden flex-col flex-1 justify-between">

          {/* Top: tagline */}
          <div className="flex items-center gap-2 px-5 pt-24">
            <span className="h-px w-5 bg-primary" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary">
              Faisalabad&apos;s E-Commerce Content Studio
            </span>
          </div>

          {/* Center: headline */}
          <div className="px-5 flex-1 flex items-center">
            <h1 className="font-serif font-bold text-white leading-[0.95] tracking-tight text-[2.8rem] sm:text-6xl">
              Visuals That<br />
              Build <span className="text-primary italic">Brands</span>
              <span className="inline-block w-2 h-2 rounded-full bg-primary ml-1.5 align-middle animate-pulse" />
            </h1>
          </div>

          {/* Bottom frosted strip */}
          <div
            className="mx-0 mb-0 px-5 py-6"
            style={{
              backdropFilter: "blur(16px) saturate(150%)",
              WebkitBackdropFilter: "blur(16px) saturate(150%)",
              background: "rgba(0,0,0,0.45)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Mobile services: horizontal compact chips */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4 pb-1">
              {services.map((svc, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 text-[9px] font-medium uppercase tracking-wider text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                >
                  {svc}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex items-center justify-between mb-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-lg font-serif font-bold text-white leading-none">{stat.value}</div>
                  <div className="text-white/40 text-[7px] mt-1 font-medium tracking-widest uppercase">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3">
              <Link
                href="/portfolio"
                className="flex-1 flex items-center justify-center gap-1.5 bg-primary text-white px-4 py-3 rounded-full text-xs font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
              >
                View Our Work
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center border border-white/20 text-white px-4 py-3 rounded-full text-xs font-bold transition-all"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

      </div>{/* /static overlay */}

    </section>
  )
}