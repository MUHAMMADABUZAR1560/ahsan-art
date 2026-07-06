"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { ArrowUpRight, Play } from "lucide-react"

const categories = ["All", "Photography", "Videography", "Amazon", "Food"]

/**
 * Map from the homepage preview item id to the portfolio project slug.
 * The homepage uses slightly different titles, so we map by id rather than title.
 */
const idToSlug: Record<number, string> = {
  1: "luxury-skincare",
  2: "water-bottles",
  3: "bed-sheets",
  4: "gourmet-food",
  5: "fashion-accessories",
  6: "men-footwear",
  7: "kids",
  8: "delivery-app",
}

const portfolioItems = [
  { id: 1, title: "Premium Skincare", category: "Photography", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578569/1_oa9m7u.jpg", type: "image", size: "large" },
  { id: 2, title: "Hydration Campaign", category: "Videography", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575418/1_c8da7s.jpg", type: "image", size: "small" },
  { id: 3, title: "Luxury Bedding", category: "Amazon", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575484/1_kttjdw.jpg", type: "image", size: "small" },
  { id: 4, title: "Gourmet Burgers", category: "Food", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575591/1_f4bbym.jpg", type: "image", size: "small" },
  { id: 5, title: "Fashion Accessories", category: "Photography", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883470/1_ophv2w.jpg", type: "image", size: "large" },
  { id: 6, title: "Men's Footwear", category: "Photography", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883014/1_kwi1qt.jpg", type: "image", size: "small" },
  { id: 8, title: "Brand Launch", category: "Videography", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575368/a2_tc7xlt.jpg", type: "video", size: "large" },
  { id: 7, title: "Kids Wear", category: "Photography", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883337/1_lt4of6.jpg", type: "image", size: "small" },
]

export function PortfolioPreview() {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { rootMargin: "-80px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Simple fade trick on filter change — no AnimatePresence needed
  const handleCategory = (cat: string) => {
    if (cat === activeCategory) return
    setVisible(false)
    setTimeout(() => { setActiveCategory(cat); setVisible(true) }, 200)
  }

  let filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory)

  // Limit to 4 items to create a 2x2 grid on homepage
  filteredItems = filteredItems.slice(0, 4)

  return (
    <section ref={ref} className="py-20 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-12">

        {/* Header */}
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-20 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Our Work
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar flex-nowrap lg:justify-end lg:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-background/5 text-background/60 hover:bg-background/10 hover:text-background"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Grid — each card now links to its project page */}
        <div
          className="grid grid-cols-2 gap-4 md:gap-6 transition-opacity duration-200"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {filteredItems.map((item) => {
            const slug = idToSlug[item.id]
            const href = slug ? `/portfolio/${slug}` : "/portfolio"

            return (
              <Link
                key={item.id}
                href={href}
                className="group relative overflow-hidden cursor-pointer rounded-2xl bg-background/5 aspect-[4/3] block"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={60}
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 50vw"
                />

                {/* Persistent dark gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                {/* Hover Overlay Background */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content Container */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span className="w-6 h-px bg-primary" />
                      <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest">{item.category}</span>
                    </div>
                    <h3 className="text-xl md:text-3xl font-serif font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 text-white/90 text-[10px] md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                      <span>{item.type === "video" ? "Watch Video" : "View Gallery"}</span>
                      <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Top Right Arrow / Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {item.type === "video" ? (
                    <Play className="w-5 h-5 text-white fill-white translate-x-0.5" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  )}
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div
          className="mt-16 md:mt-24 text-center transition-all duration-700 delay-300"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 border border-background/20 text-background hover:bg-background hover:text-foreground px-8 py-4 rounded-full text-sm font-bold tracking-wide uppercase transition-all duration-300"
          >
            Explore Full Portfolio
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}