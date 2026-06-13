"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const slides = [
  {
    tag: "Faisalabad's E-Commerce Content Studio",
    title1: "Visuals That Build",
    title2: "Your Brand And Bring",
    highlight: "Sales",
    description: "We create product photos and videos for e-commerce brands, social media, and online stores — content that doesn't just look good, but actually converts.",
    bgImage: "/images/cimage.jpeg",
    // 📱 Replace mobileImage URL with a portrait/vertical version of your photo for best results
    mobileImage: "/images/cimage.jpeg",
  },
  {
    tag: "E-Commerce Excellence",
    title1: "Elevate Your",
    title2: "Brand's",
    highlight: "Aesthetic",
    description: "Stand out in crowded marketplaces with stunning, high-end product photography that captures attention and drives sales.",
    bgImage: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575374/skincare_mijkbh.jpg",
    // 📱 Replace mobileImage URL with a portrait/vertical version of your photo for best results
    mobileImage: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575374/skincare_mijkbh.jpg",
  },
  {
    tag: "Cinematic Videography",
    title1: "Motion That",
    title2: "Captivates",
    highlight: "Audiences",
    description: "Engage your customers with premium video production, showcasing your products in their best light through dynamic visuals.",
    bgImage: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883470/1_ophv2w.jpg",
    // 📱 Replace mobileImage URL with a portrait/vertical version of your photo for best results
    mobileImage: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883470/1_ophv2w.jpg",
  }
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  )

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-black"
    >
      <Carousel
        plugins={[plugin.current as any]}
        className="w-full h-full absolute inset-0 z-0"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-screen m-0 w-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full w-full p-0 flex-shrink-0">
              {/* Background Image & Dark Cinematic Overlay */}
              <div
                className="absolute inset-0 z-0 select-none pointer-events-none"
              >
                {/* Desktop image — landscape/wide format */}
                <Image
                  src={slide.bgImage}
                  alt={slide.tag}
                  fill
                  priority={index === 0}
                  className="object-cover object-center transition-all duration-700 hidden md:block"
                  sizes="100vw"
                  quality={60}
                />
                {/* Mobile image — portrait/vertical format (swap mobileImage URL per slide for best results) */}
                <Image
                  src={slide.mobileImage}
                  alt={slide.tag}
                  fill
                  priority={index === 0}
                  className="object-cover object-top transition-all duration-700 md:hidden"
                  sizes="100vw"
                  quality={60}
                />
                {/* Desktop: left-heavy gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 z-10 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10 hidden md:block" />
                {/* Mobile: only a bottom fade so banner is visible */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/85 z-10 md:hidden" />
              </div>

              {/* ── DESKTOP layout: left-aligned glass card ── */}
              <div className="absolute inset-0 hidden md:flex items-center z-20">
                <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
                  <div
                    className="w-full max-w-xl lg:max-w-2xl md:min-h-[520px] lg:min-h-[560px] bg-black/40 md:bg-black/35 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[2rem] p-6 md:p-12 text-left shadow-2xl ring-1 ring-white/5 flex flex-col justify-between mt-12 md:mt-0"
                    style={{ animation: 'fadeInLeft 0.8s cubic-bezier(0.16,1,0.3,1) both' }}
                  >
                    <div>
                      {/* Tag/Badge with Accent line */}
                      <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <span className="h-[2px] w-6 md:w-8 bg-primary rounded-full" />
                        <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-primary-foreground/90">
                          {slide.tag}
                        </span>
                      </div>

                      {/* Title */}
                      {index === 0 ? (
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight">
                          {slide.title1} <br />
                          <span className="inline-block">
                            {slide.title2}
                            <span className="text-primary italic"> {slide.highlight}</span>
                            <span className="inline-block w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-primary ml-1.5 align-middle animate-pulse" />
                          </span>
                        </h1>
                      ) : (
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight">
                          {slide.title1} <br />
                          <span className="inline-block">
                            {slide.title2}
                            <span className="text-primary italic"> {slide.highlight}</span>
                            <span className="inline-block w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-primary ml-1.5 align-middle animate-pulse" />
                          </span>
                        </h2>
                      )}

                      {/* Description */}
                      <p className="mt-4 md:mt-6 text-white/75 text-sm md:text-lg leading-relaxed font-light max-w-xl">
                        {slide.description}
                      </p>
                    </div>

                    <div>
                      {/* CTA Buttons */}
                      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
                        <Link
                          href="/portfolio"
                          className="group bg-primary text-primary-foreground px-6 md:px-8 py-3.5 md:py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/95 transition-all shadow-lg shadow-primary/25 hover:scale-105 active:scale-95 duration-300"
                        >
                          View Our Work
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <Link
                          href="/contact"
                          className="group border border-white/20 text-white hover:bg-white hover:text-black px-6 md:px-8 py-3.5 md:py-4 rounded-full text-sm font-semibold flex items-center justify-center transition-all hover:scale-105 active:scale-95 duration-300"
                        >
                          Start a Project
                        </Link>
                      </div>

                      <div
                        className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-start gap-12"
                        style={{ animation: 'fadeInUp 0.6s ease 0.8s both' }}
                      >
                        {[
                          { value: "7+", label: "Years in E-Commerce" },
                          { value: "500+", label: "Projects" },
                          { value: "100+", label: "Clients" },
                        ].map((stat, idx) => (
                          <div key={idx} className="text-left">
                            <div className="text-3xl font-serif font-bold text-white leading-none">
                              {stat.value}
                            </div>
                            <div className="text-white/40 text-xs mt-2 font-medium tracking-wide uppercase">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── MOBILE layout: compact strip pinned to bottom ── */}
              <div className="absolute bottom-0 left-0 right-0 z-20 md:hidden">
                <div
                  className="bg-black/60 backdrop-blur-xl border-t border-white/10 px-5 py-5"
                  style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) both' }}
                >
                  {/* Tag */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-[2px] w-5 bg-primary rounded-full" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
                      {slide.tag}
                    </span>
                  </div>
                  {/* Title */}
                  {index === 0 ? (
                    <h2 className="text-2xl font-serif font-bold text-white leading-tight mb-1">
                      {slide.title1}{" "}
                      <span className="text-primary italic">{slide.highlight}</span>
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary ml-1 align-middle animate-pulse" />
                    </h2>
                  ) : (
                    <h2 className="text-2xl font-serif font-bold text-white leading-tight mb-1">
                      {slide.title1}{" "}
                      <span className="text-primary italic">{slide.highlight}</span>
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary ml-1 align-middle animate-pulse" />
                    </h2>
                  )}
                  {/* CTA + Stats row */}
                  <div className="flex items-center justify-between mt-4 gap-3">
                    <Link
                      href="/portfolio"
                      className="group bg-primary text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 shrink-0"
                    >
                      View Work
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <div className="flex items-center gap-4">
                      {[
                        { value: "7+", label: "Years" },
                        { value: "500+", label: "Projects" },
                        { value: "100+", label: "Clients" },
                      ].map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-base font-serif font-bold text-white leading-none">{stat.value}</div>
                          <div className="text-white/40 text-[8px] mt-0.5 font-medium tracking-wide uppercase">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Carousel controls - Desktop only */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30 hidden md:block">
          <CarouselPrevious className="relative static translate-x-0 translate-y-0 border-white/10 text-white hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-md h-12 w-12 transition-all hover:scale-110 active:scale-90" />
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden md:block">
          <CarouselNext className="relative static translate-x-0 translate-y-0 border-white/10 text-white hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-md h-12 w-12 transition-all hover:scale-110 active:scale-90" />
        </div>
      </Carousel>

      {/* Scroll Indicator — CSS bounce, no JS */}
      <div className="absolute bottom-40 md:bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none" style={{ animation: 'fadeIn 1s ease 1.2s both' }}>
        <div className="flex flex-col items-center gap-1.5 text-white/40" style={{ animation: 'scrollBounce 1.8s ease-in-out infinite' }}>
          <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </div>

    </section>
  )
}