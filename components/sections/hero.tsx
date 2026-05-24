"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
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
    tag: "Premium Creative Studio",
    title1: "Crafting Visual",
    title2: "Stories That",
    highlight: "Sell",
    description: "Premium product photography & videography studio specializing in e-commerce brands, Amazon listings, and conversion-focused visual content.",
    bgImage: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575375/studio_zpk4im.jpg",
  },
  {
    tag: "E-Commerce Excellence",
    title1: "Elevate Your",
    title2: "Brand's",
    highlight: "Aesthetic",
    description: "Stand out in crowded marketplaces with stunning, high-end product photography that captures attention and drives sales.",
    bgImage: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575374/skincare_mijkbh.jpg",
  },
  {
    tag: "Cinematic Videography",
    title1: "Motion That",
    title2: "Captivates",
    highlight: "Audiences",
    description: "Engage your customers with premium video production, showcasing your products in their best light through dynamic visuals.",
    bgImage: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883470/1_ophv2w.jpg",
  }
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  )

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

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
              {/* Background Image with Parallax & Dark Cinematic Overlay */}
              <motion.div
                style={{ scale }}
                className="absolute inset-0 z-0 select-none pointer-events-none"
              >
                <Image
                  src={slide.bgImage}
                  alt={slide.tag}
                  fill
                  priority={index === 0}
                  className="object-cover object-center transition-all duration-700"
                  sizes="100vw"
                  quality={90}
                />
                {/* Left-heavy dark gradient for maximum text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10" />
              </motion.div>

              {/* Centered container with left-aligned glass card */}
              <div className="absolute inset-0 flex items-center z-20">
                <div className="container mx-auto px-6 lg:px-16 w-full">
                  <motion.div
                    style={{ y, opacity }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-xl lg:max-w-2xl min-h-[520px] lg:min-h-[560px] bg-black/35 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 text-left shadow-2xl ring-1 ring-white/5 flex flex-col justify-between"
                  >
                    <div>
                      {/* Tag/Badge with Accent line */}
                      <div className="flex items-center gap-3 mb-6">
                        <span className="h-[2px] w-8 bg-primary rounded-full" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/90">
                          {slide.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight">
                        {slide.title1} <br />
                        <span className="inline-block">
                          {slide.title2}
                          <span className="text-primary italic"> {slide.highlight}</span>
                          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary ml-1.5 align-middle animate-pulse" />
                        </span>
                      </h1>

                      {/* Description */}
                      <p className="mt-6 text-white/75 text-base md:text-lg leading-relaxed font-light max-w-xl">
                        {slide.description}
                      </p>
                    </div>

                    <div>
                      {/* CTA Buttons */}
                      <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <Link
                          href="/portfolio"
                          className="group bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/95 transition-all shadow-lg shadow-primary/25 hover:scale-105 active:scale-95 duration-300"
                        >
                          View Our Work
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <Link
                          href="/contact"
                          className="group border border-white/20 text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-sm font-semibold flex items-center justify-center transition-all hover:scale-105 active:scale-95 duration-300"
                        >
                          Start a Project
                        </Link>
                      </div>

                      {/* Premium Stats Preview (On all slides for perfect consistency) */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-start gap-8 md:gap-12"
                      >
                        {[
                          { value: "5+", label: "Years Exp" },
                          { value: "500+", label: "Projects" },
                          { value: "100+", label: "Clients" },
                        ].map((stat, idx) => (
                          <div key={idx} className="text-left">
                            <div className="text-2xl md:text-3xl font-serif font-bold text-white leading-none">
                              {stat.value}
                            </div>
                            <div className="text-white/40 text-xs mt-2 font-medium tracking-wide uppercase">{stat.label}</div>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Carousel controls - Custom glass styling */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30 hidden md:block">
          <CarouselPrevious className="relative static translate-x-0 translate-y-0 border-white/10 text-white hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-md h-12 w-12 transition-all hover:scale-110 active:scale-90" />
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden md:block">
          <CarouselNext className="relative static translate-x-0 translate-y-0 border-white/10 text-white hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-md h-12 w-12 transition-all hover:scale-110 active:scale-90" />
        </div>
      </Carousel>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>

    </section>
  )
}