"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, ChevronLeft, X, Play } from "lucide-react"
import { PortfolioItem, GalleryAsset } from "@/lib/portfolio-data"

interface ProjectPageClientProps {
  item: PortfolioItem
}

/** Extract a YouTube embed URL from a watch URL or Shorts URL. Returns null if not YouTube. */
function getYouTubeEmbedUrl(url: string): string | null {
  // Handle https://www.youtube.com/shorts/VIDEO_ID
  const shortsMatch = url.match(/youtube\.com\/shorts\/([\w-]+)/)
  if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}?autoplay=1`
  // Handle https://www.youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/[?&]v=([\w-]+)/)
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}?autoplay=1`
  // Handle https://youtu.be/VIDEO_ID
  const shortMatch = url.match(/youtu\.be\/([\w-]+)/)
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}?autoplay=1`
  return null
}

/** Get a YouTube thumbnail URL from a watch URL or Shorts URL. */
function getYouTubeThumbnail(url: string): string | null {
  const shortsMatch = url.match(/youtube\.com\/shorts\/([\w-]+)/)
  if (shortsMatch) return `https://img.youtube.com/vi/${shortsMatch[1]}/hqdefault.jpg`
  const watchMatch = url.match(/[?&]v=([\w-]+)/)
  if (watchMatch) return `https://img.youtube.com/vi/${watchMatch[1]}/hqdefault.jpg`
  const shortMatch = url.match(/youtu\.be\/([\w-]+)/)
  if (shortMatch) return `https://img.youtube.com/vi/${shortMatch[1]}/hqdefault.jpg`
  return null
}

export function ProjectPageClient({ item }: ProjectPageClientProps) {
  const [fullscreenAsset, setFullscreenAsset] = useState<GalleryAsset | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* ── Breadcrumb ── */}
      <div className="pt-28 md:pt-36 pb-0 container mx-auto px-6 lg:px-12">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{item.title}</span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="pt-8 pb-12 md:pb-20 container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Category label */}
          <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-primary" />
            {item.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight text-foreground mb-8 md:mb-12">
            {item.title}<span className="text-primary">.</span>
          </h1>

          {/* Primary hero image */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl md:rounded-2xl overflow-hidden bg-stone-100">
            <Image
              src={item.image}
              alt={`${item.title} — hero image`}
              fill
              className="object-cover"
              quality={85}
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* ── Project Description ── */}
      <section className="pb-16 md:pb-24 container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-xl text-muted-foreground leading-relaxed"
          >
            {/* EDIT: Replace the longDescription for this project in lib/portfolio-data.ts */}
            {item.longDescription}
          </motion.p>
        </div>
      </section>

      {/* ── Image Gallery ── */}
      <section className="pb-16 md:pb-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8"
          >
            Project Gallery
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4"
          >
            {item.gallery.map((asset, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={() => setFullscreenAsset(asset)}
                className="group relative aspect-square bg-stone-100 rounded-lg md:rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={asset.type === "video" ? (asset.thumbnail || getYouTubeThumbnail(asset.url) || item.image) : asset.url}
                  alt={`${item.title} — image ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={70}
                  loading={idx < 8 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  {asset.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Play className="w-8 h-8 text-white fill-white drop-shadow-lg" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* ── Placeholder slots for future images ── */}
            {/* EDIT: Add 2–4 more gallery items in lib/portfolio-data.ts for this project */}
            {[...Array(Math.max(0, 4 - (item.gallery.length % 4 === 0 ? 4 : item.gallery.length % 4)))].map((_, i) => (
              <div
                key={`placeholder-${i}`}
                className="aspect-square bg-stone-50 border-2 border-dashed border-stone-200 rounded-lg md:rounded-xl flex flex-col items-center justify-center gap-2 text-stone-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-xs font-medium">Add Image</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA — matches /portfolio page style exactly ── */}
      <section className="py-16 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold italic">Like What You See?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-white text-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Back to Portfolio ── */}
      <div className="bg-background py-10 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      <Footer />

      {/* ── Fullscreen Lightbox ── */}
      <AnimatePresence>
        {fullscreenAsset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setFullscreenAsset(null)}
          >
            <button
              onClick={() => setFullscreenAsset(null)}
              className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <div
              className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {fullscreenAsset.type === "video" ? (
                getYouTubeEmbedUrl(fullscreenAsset.url) ? (
                  <iframe
                    src={getYouTubeEmbedUrl(fullscreenAsset.url)!}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="w-full rounded-md"
                    style={{ aspectRatio: "9/16", maxHeight: "80vh" }}
                  />
                ) : (
                  <video
                    src={fullscreenAsset.url}
                    controls
                    autoPlay
                    className="max-h-full max-w-full rounded-md"
                  />
                )
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={fullscreenAsset.url}
                    alt="Fullscreen view"
                    fill
                    className="object-contain"
                    quality={90}
                    sizes="100vw"
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
