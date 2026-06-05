"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Play } from "lucide-react"

const categories = ["All", "Photography", "Videography", "Amazon", "Food"]

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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  let filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory)
    
  // Limit to 4 items to create a perfect 2x2 grid on the homepage
  filteredItems = filteredItems.slice(0, 4)

  return (
    <section ref={ref} className="py-20 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-20"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Selected Works
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              A Glimpse Into <br className="hidden md:block"/> Our <span className="text-primary italic">Portfolio</span>.
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar lg:flex-wrap lg:justify-end lg:pb-0 lg:max-w-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
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
        </motion.div>

        {/* 2x2 Grid */}
        <motion.div layout className="grid grid-cols-2 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden cursor-pointer rounded-2xl bg-background/5 aspect-[4/3]"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
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
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 text-center"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 border border-background/20 text-background hover:bg-background hover:text-foreground px-8 py-4 rounded-full text-sm font-bold tracking-wide uppercase transition-all duration-300"
          >
            Explore Full Portfolio
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}