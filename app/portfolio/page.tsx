"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Play, X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "Photography", "Videography", "Amazon", "Food", "UGC Videos"]

/**
 * PORTFOLIO DATA
 */
const portfolioItems = [
  { 
    id: 1, title: "Luxury Skincare", category: "Photography", description: "Premium skincare brand product photography.", image: "/images/portfolio/skincare.jpg", type: "image", 
    gallery: [
        { type: "image", url: "/images/portfolio/skincare/1.jpg" },
        { type: "image", url: "/images/portfolio/skincare/2.jpg" },
        { type: "image", url: "/images/portfolio/skincare/3.jpg" },
        { type: "image", url: "/images/portfolio/skincare/4.jpg" },
        { type: "image", url: "/images/portfolio/skincare/5.jpg" },
        { type: "image", url: "/images/portfolio/skincare/6.jpg" }, ]
  },
  { 
    id: 2, title: "Water Bottles", category: "Photography", description: "Dynamic product video for technology launch.", image: "/images/portfolio/pr1.jpg", type: "image",
    gallery: [
               { type: "image", url: "/images/portfolio/bottles/1.jpg" },
               { type: "image", url: "/images/portfolio/bottles/2.jpg" },
               { type: "image", url: "/images/portfolio/bottles/3.jpg" },
    ]
  },
  { 
    id: 3, title: "Bed Sheets", category: "Photography", description: "Amazon listing imagery optimized for conversions.", image: "/images/portfolio/bedsheet.jpg", type: "image",
    gallery: [
               { type: "image", url: "/images/portfolio/bedding/1.jpg" },
               { type: "image", url: "/images/portfolio/bedding/2.jpg" },
               { type: "image", url: "/images/portfolio/bedding/3.jpg" },
               { type: "image", url: "/images/portfolio/bedding/4.jpg" },
               { type: "image", url: "/images/portfolio/bedding/5.jpg" },
               { type: "image", url: "/images/portfolio/bedding/6.jpg" },
               { type: "image", url: "/images/portfolio/bedding/7.jpg" },
               { type: "image", url: "/images/portfolio/bedding/8.jpg" },
               { type: "image", url: "/images/portfolio/bedding/9.jpg" },
               { type: "image", url: "/images/portfolio/bedding/10.jpg" },
               { type: "image", url: "/images/portfolio/bedding/11.jpg" },
               { type: "image", url: "/images/portfolio/bedding/12.jpg" },
               { type: "image", url: "/images/portfolio/bedding/13.jpg" },
               { type: "image", url: "/images/portfolio/bedding/14.jpg" },
               { type: "image", url: "/images/portfolio/bedding/15.jpg" }
    ]

  },
  { 
    id: 4, title: "Gourmet Food", category: "Food", description: "Appetizing food photography for restaurant menu.", image: "/images/portfolio/food.jpg", type: "image",
    gallery: [
               { type: "image", url: "/images/portfolio/food/1.jpg" },
               { type: "image", url: "/images/portfolio/food/2.jpg" },
               { type: "image", url: "/images/portfolio/food/3.jpg" },
               { type: "image", url: "/images/portfolio/food/4.jpg" },
               { type: "image", url: "/images/portfolio/food/5.jpg" },
               { type: "image", url: "/images/portfolio/food/6.jpg" },
               { type: "image", url: "/images/portfolio/food/7.jpg" },
               { type: "image", url: "/images/portfolio/food/8.jpg" },
               { type: "image", url: "/images/portfolio/food/9.jpg" },
               { type: "video", url: "/images/portfolio/food/10.mp4", thumbnail: "/images/portfolio/food/13.jpg" },
               { type: "video", url: "/images/portfolio/food/11.mp4", thumbnail: "/images/portfolio/food/14.jpg" },
               { type: "video", url: "/images/portfolio/food/12.mp4", thumbnail: "/images/portfolio/food/15.jpg" }, // Added thumbnail here
    ]
  },
  { 
    id: 5, title: "Fashion Acc.", category: "Photography", description: "High-end fashion accessory photography.", image: "/images/portfolio/fashion.jpg", type: "image",
    gallery: [ { type: "image", url: "/images/portfolio/flatlay clothing/1.jpg" },
               { type: "image", url: "/images/portfolio/flatlay clothing/2.jpg" },
               { type: "image", url: "/images/portfolio/flatlay clothing/3.jpg" },
               { type: "image", url: "/images/portfolio/flatlay clothing/4.jpg" },
               { type: "image", url: "/images/portfolio/flatlay clothing/5.jpg" },
               { type: "image", url: "/images/portfolio/flatlay clothing/6.jpg" },
               { type: "image", url: "/images/portfolio/flatlay clothing/7.jpg" },
               { type: "image", url: "/images/portfolio/flatlay clothing/8.jpg" },
               { type: "image", url: "/images/portfolio/flatlay clothing/9.jpg" },
               { type: "image", url: "/images/portfolio/flatlay clothing/10.jpg" },
               { type: "image", url: "/images/portfolio/flatlay clothing/11.jpg" },
               { type: "image", url: "/images/portfolio/flatlay clothing/12.jpg" },
               { type: "image", url: "/images/portfolio/flatlay clothing/13.jpg" },
               { type: "image", url: "/images/portfolio/flatlay clothing/14.jpg" },
               { type: "image", url: "/images/portfolio/flatlay clothing/15.jpg" },
]
  },
  { 
    id: 6, title: "Men Footwear", category: "Photography", description: "Compelling brand narrative video.", image: "/images/portfolio/men.jpg", type: "video",
    gallery: [ {type: "image", url: "/images/portfolio/men footwear/1.jpg" },
               { type: "image", url: "/images/portfolio/men footwear/2.jpg" },
               { type: "image", url: "/images/portfolio/men footwear/3.jpg" },
               { type: "image", url: "/images/portfolio/men footwear/4.jpg" },
               { type: "image", url: "/images/portfolio/men footwear/5.jpg" },
               { type: "image", url: "/images/portfolio/men footwear/6.jpg" },]
               },
  { 
    id: 7, title: "Kids", category: "Photography", description: "Complete product catalog photography.", image: "/images/portfolio/product.jpg", type: "image",
    gallery: [{ type: "image", url: "/images/portfolio/kids/1.jpg" },
               { type: "image", url: "/images/portfolio/kids/2.jpg" },
               { type: "image", url: "/images/portfolio/kids/3.jpg" },
               { type: "image", url: "/images/portfolio/kids/4.jpg" },
               { type: "image", url: "/images/portfolio/kids/5.jpg" },
               { type: "image", url: "/images/portfolio/kids/6.jpg" },
               { type: "image", url: "/images/portfolio/kids/7.jpg" },
               { type: "image", url: "/images/portfolio/kids/8.jpg" },
               { type: "image", url: "/images/portfolio/kids/9.jpg" },
               { type: "image", url: "/images/portfolio/kids/10.jpg" },
               { type: "image", url: "/images/portfolio/kids/11.jpg" },
               { type: "image", url: "/images/portfolio/kids/12.jpg" },
               { type: "image", url: "/images/portfolio/kids/13.jpg" },
               { type: "image", url: "/images/portfolio/kids/14.jpg" },
               { type: "image", url: "/images/portfolio/kids/15.jpg" },
               { type: "image", url: "/images/portfolio/kids/16.jpg" },
               { type: "image", url: "/images/portfolio/kids/17.jpg" },
               { type: "image", url: "/images/portfolio/kids/18.jpg" },
               { type: "image", url: "/images/portfolio/kids/19.jpg" },
               { type: "image", url: "/images/portfolio/kids/20.jpg" },
               { type: "image", url: "/images/portfolio/kids/21.jpg" },
               { type: "image", url: "/images/portfolio/kids/22.jpg" },
               { type: "image", url: "/images/portfolio/kids/23.jpg" },
               { type: "image", url: "/images/portfolio/kids/24.jpg" },]
  },
  { 
    id: 8, title: "Delivery App", category: "Photography", description: "Vibrant food photography for delivery app.", image: "/images/portfolio/food.jpg", type: "image",
    gallery: [{ type: "image", url: "/images/portfolio/men clothing/1.jpg" },
               { type: "image", url: "/images/portfolio/men clothing/2.jpg" },
               { type: "image", url: "/images/portfolio/men clothing/3.jpg" },
               { type: "image", url: "/images/portfolio/men clothing/4.jpg"},
               { type: "image", url: "/images/portfolio/men clothing/5.jpg" },
               { type: "image", url: "/images/portfolio/men clothing/6.jpg" },]
  },
  { 
    id: 9, title: "Amazon A+", category: "Amazon", description: "Premium A+ content design.", image: "/images/portfolio/amazon.jpg", type: "image",
    gallery: [ { type: "image", url: "/images/portfolio/men unstitchclothing/1.jpg" },
               { type: "image", url: "/images/portfolio/men unstitchclothing/2.jpg" },
               { type: "image", url: "/images/portfolio/men unstitchclothing/3.jpg" },
               { type: "image", url: "/images/portfolio/men unstitchclothing/4.jpg" },
               { type: "image", url: "/images/portfolio/men unstitchclothing/5.jpg" },
               { type: "image", url: "/images/portfolio/men unstitchclothing/6.jpg" },]
  },
   { 
    id: 10, title: "Amazon A+", category: "Amazon", description: "Premium A+ content design.", image: "/images/portfolio/amazon.jpg", type: "image",
    gallery: [ { type: "image", url: "/images/portfolio/men unstitchclothing/1.jpg" },
               { type: "image", url: "/images/portfolio/men unstitchclothing/2.jpg" },
               { type: "image", url: "/images/portfolio/men unstitchclothing/3.jpg" },
               { type: "image", url: "/images/portfolio/men unstitchclothing/4.jpg" },
               { type: "image", url: "/images/portfolio/men unstitchclothing/5.jpg" },
               { type: "image", url: "/images/portfolio/men unstitchclothing/6.jpg" },]
  },
  { 
    id: 11, title: "Amazon A+", category: "Amazon", description: "Premium A+ content design.", image: "/images/portfolio/amazon.jpg", type: "image",
    gallery: [ { type: "image", url: "/images/portfolio/pillow/1.jpg" },
               { type: "image", url: "/images/portfolio/pillow/2.jpg" },
               { type: "image", url: "/images/portfolio/pillow/3.jpg" },
               { type: "image", url: "/images/portfolio/pillow/4.jpg" },
               { type: "image", url: "/images/portfolio/pillow/5.jpg" },
               { type: "image", url: "/images/portfolio/pillow/6.jpg" },]
  },
  { 
    id: 12, title: "Gourmet Food", category: "Food", description: "Appetizing food photography for restaurant menu.", image: "/images/portfolio/food.jpg", type: "image",
    gallery: [
               { type: "image", url: "/images/portfolio/women flatlay/1.jpg" },
               { type: "image", url: "/images/portfolio/women flatlay/2.jpg" },
               { type: "image", url: "/images/portfolio/women flatlay/3.jpg" },
               { type: "image", url: "/images/portfolio/women flatlay/4.jpg" },
               { type: "image", url: "/images/portfolio/women flatlay/5.jpg" },
               { type: "image", url: "/images/portfolio/women flatlay/6.jpg" },
               { type: "image", url: "/images/portfolio/women flatlay/7.jpg" },
               { type: "image", url: "/images/portfolio/women flatlay/8.jpg" },
               { type: "image", url: "/images/portfolio/women flatlay/9.jpg" },]
  },
   { 
    id: 13, title: "Bed Sheets", category: "Photography", description: "Amazon listing imagery optimized for conversions.", image: "/images/portfolio/bedsheet.jpg", type: "image",
    gallery: [
               { type: "image", url: "/images/portfolio/women shoes/1.jpg" },
               { type: "image", url: "/images/portfolio/women shoes/2.jpg" },
               { type: "image", url: "/images/portfolio/women shoes/3.jpg" },
               { type: "image", url: "/images/portfolio/women shoes/4.jpg" },
               { type: "image", url: "/images/portfolio/women shoes/5.jpg" },
               { type: "image", url: "/images/portfolio/women shoes/6.jpg" },
               { type: "image", url: "/images/portfolio/women shoes/7.jpg" },
               { type: "image", url: "/images/portfolio/women shoes/8.jpg" },
               { type: "image", url: "/images/portfolio/women shoes/9.jpg" },
               { type: "image", url: "/images/portfolio/women shoes/10.jpg" },
               { type: "image", url: "/images/portfolio/women shoes/11.jpg" },
               { type: "image", url: "/images/portfolio/women shoes/12.jpg" },
               { type: "image", url: "/images/portfolio/women shoes/13.jpg" },
               { type: "image", url: "/images/portfolio/women shoes/14.jpg" },
               { type: "image", url: "/images/portfolio/women shoes/15.jpg" }
    ]

  },
   { 
    id: 14, title: "Bed Sheets", category: "Photography", description: "Amazon listing imagery optimized for conversions.", image: "/images/portfolio/bedsheet.jpg", type: "image",
    gallery: [
               { type: "image", url: "/images/portfolio/women's bag/1.jpg" },
               { type: "image", url: "/images/portfolio/women's bag/3.jpg" },
               { type: "image", url: "/images/portfolio/women's bag/2.jpg" },
               { type: "image", url: "/images/portfolio/women's bag/4.jpg" },
               { type: "image", url: "/images/portfolio/women's bag/6.jpg" },
               { type: "image", url: "/images/portfolio/women's bag/5.jpg" },
               { type: "image", url: "/images/portfolio/women's bag/7.jpg" },
               { type: "image", url: "/images/portfolio/women's bag/8.jpg" },
               { type: "image", url: "/images/portfolio/women's bag/9.jpg" },
               { type: "image", url: "/images/portfolio/women's bag/10.jpg" },
               { type: "image", url: "/images/portfolio/women's bag/11.jpg" },
               { type: "image", url: "/images/portfolio/women's bag/12.jpg" },
               { type: "image", url: "/images/portfolio/women's bag/13.jpg" },
               { type: "image", url: "/images/portfolio/women's bag/14.jpg" },
               { type: "image", url: "/images/portfolio/women's bag/15.jpg" }
    ]

  },
]

export default function PortfolioPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null)
  const [fullscreenAsset, setFullscreenAsset] = useState<{type: string, url: string} | null>(null)

  const filteredItems = activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-12 md:pt-40 md:pb-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 text-primary text-[10px] md:text-sm font-medium tracking-widest uppercase mb-4"
            >
              <span className="w-6 md:w-8 h-px bg-primary" />
              Our Work
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl md:text-7xl font-serif font-bold leading-tight text-foreground"
            >
              Selected Projects<span className="text-primary">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-4 md:mt-8 text-base md:text-xl max-w-2xl text-foreground/80 leading-relaxed"
            >
              A showcase of our finest work across product photography and e-commerce content.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-8 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-12">
          
          <motion.div className="flex overflow-x-auto pb-6 md:justify-center gap-2 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-stone-100 text-foreground hover:bg-stone-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  onClick={() => setSelectedProject(item)}
                  className="group relative aspect-square md:aspect-[4/5] rounded-sm md:rounded-xl overflow-hidden cursor-pointer bg-stone-100"
                >
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover transition-transform duration-500 md:group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                    <span className="text-primary text-[10px] md:text-sm font-medium">{item.category}</span>
                    <h3 className="text-xs md:text-xl font-semibold text-white mt-1">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Internal Project Gallery Overlay (3x3 Grid) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white overflow-y-auto"
          >
            <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md p-6 flex justify-between items-center border-b">
              <div>
                <h2 className="text-2xl md:text-4xl font-serif font-bold">{selectedProject.title}</h2>
                <p className="text-sm text-foreground/60">{selectedProject.category}</p>
              </div>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="p-3 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="container mx-auto px-6 py-12">
                <p className="mb-12 text-lg text-foreground/80 max-w-3xl leading-relaxed">
                    {selectedProject.description}
                </p>

                {/* The 3x3 Grid for Internal Assets */}
                <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6">
                    {selectedProject.gallery.map((asset, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 0.98 }}
                            onClick={() => setFullscreenAsset(asset)}
                            className="relative aspect-square bg-stone-100 rounded-lg overflow-hidden cursor-pointer"
                        >
                            {/* Logic to show thumbnail for videos or the image itself */}
                            <Image 
                              src={asset.type === "video" ? (asset.thumbnail || "/placeholder.svg") : asset.url} 
                              alt={`${selectedProject.title} ${idx}`} 
                              fill 
                              className="object-cover" 
                            />
                            {asset.type === "video" && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                    <Play className="w-8 h-8 text-white fill-white drop-shadow-lg" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Full-Size Viewer */}
      <AnimatePresence>
        {fullscreenAsset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          >
            <button 
                onClick={() => setFullscreenAsset(null)} 
                className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full"
            >
                <X className="w-8 h-8" />
            </button>
            
            <div className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center">
              {fullscreenAsset.type === "video" ? (
                <video src={fullscreenAsset.url} controls autoPlay className="max-h-full max-w-full rounded-md" />
              ) : (
                <div className="relative w-full h-full">
                  <Image src={fullscreenAsset.url} alt="Fullscreen Asset" fill className="object-contain" />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-16 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold italic">Like What You See?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-8 bg-white text-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}