"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowUpRight, Play } from "lucide-react"

const categories = ["All", "Photography", "Videography", "Amazon", "Food"]

const portfolioItems = [
  { id: 1, title: "Skincare", category: "Photography", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578569/1_oa9m7u.jpg", type: "image" },
  { id: 2, title: "Water Bottles", category: "Videography", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575418/1_c8da7s.jpg", type: "image" },
  { id: 3, title: "Bedding", category: "Amazon", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575484/1_kttjdw.jpg", type: "image" },
  { id: 4, title: "Food", category: "Food", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575591/1_f4bbym.jpg", type: "image" },
  { id: 5, title: "Fashion Acc.", category: "Photography", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883470/1_ophv2w.jpg", type: "image" },
  { id: 6, title: "Men Footwear", category: "Photography", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883014/1_kwi1qt.jpg", type: "image" },
  { id: 7, title: "Kids", category: "Photography", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883337/1_lt4of6.jpg", type: "image" },
  { id: 8, title: "Launch", category: "Videography", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575368/a2_tc7xlt.jpg", type: "video" },
  { id: 9, title: "Listing", category: "Amazon", image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883127/1_hr9gwd.jpg", type: "image" },
]

export function PortfolioPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section ref={ref} className="py-12 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Adjusted Header for Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 md:mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-primary text-[10px] md:text-sm font-medium tracking-widest uppercase mb-2 md:mb-4">
              <span className="w-6 md:w-8 h-px bg-primary" />
              Our Work
            </span>
            <h2 className="text-2xl md:text-5xl font-serif font-bold leading-tight">
              Selected Projects
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary ml-1 md:ml-2 align-middle" />
            </h2>
          </div>

          {/* Category Filter - Scrollable on mobile to save space */}
          <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar lg:flex-wrap lg:justify-end lg:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-[11px] md:text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/10 text-background/70 hover:bg-background/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 3x3 Grid on Mobile, 3 columns on Desktop */}
        <motion.div layout className="grid grid-cols-3 lg:grid-cols-3 gap-2 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-square md:aspect-[4/5] rounded-sm md:rounded-xl overflow-hidden cursor-pointer bg-stone-900"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 md:group-hover:scale-110"
                />
                
                {/* Content - Hidden on mobile squares to prevent clutter */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity p-3 md:p-6 flex flex-col justify-end">
                  <span className="text-primary text-[10px] md:text-sm font-medium">{item.category}</span>
                  <h3 className="text-xs md:text-xl font-semibold text-background mt-1">{item.title}</h3>
                </div>

                {/* Video Icon - Smaller on Mobile */}
                {item.type === "video" && (
                  <div className="absolute top-1 right-1 md:top-4 md:right-4 w-5 h-5 md:w-10 md:h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 md:w-5 md:h-5 text-background fill-background" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Compact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mt-10 md:mt-16 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:font-medium hover:bg-primary/90 transition-colors group"
          >
            Full Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}