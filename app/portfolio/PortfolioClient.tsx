"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { portfolioItems } from "@/lib/portfolio-data"

const categories = ["All", "Photography", "Videography", "Amazon", "Food", "UGC Videos"]

export default function PortfolioClient() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category.includes(activeCategory))

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-12 md:pt-48 md:pb-24 border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-6"
            >
              <span className="w-8 h-px bg-primary" /> Our Work
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight text-foreground"
            >
              Selected Projects<span className="text-primary">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 md:mt-8 text-base md:text-xl max-w-2xl text-muted-foreground leading-relaxed"
            >
              A showcase of our finest work across product photography, videography, and e-commerce content.
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

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 }
              }
            }}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(0,0,0,0.18)" }}
                  style={{
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                    overflow: "hidden",
                    aspectRatio: "1 / 1",
                    position: "relative",
                    display: "block",
                  }}
                  className="md:[aspect-ratio:4/5]"
                >
                  {/* Each card is now a real navigable link to the project page */}
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="group block absolute inset-0"
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-110"
                      quality={60}
                      loading="lazy"
                      sizes="(max-width: 768px) 33vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 p-4 md:p-6 flex flex-col justify-end">
                      <div className="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-primary text-[10px] md:text-sm font-bold tracking-wider uppercase">{item.category}</span>
                        <h3 className="text-sm md:text-2xl font-serif font-bold text-white mt-1 mb-2">{item.title}</h3>
                        <div className="flex items-center gap-2 text-white/90 text-[10px] md:text-sm font-medium">
                          <span>View Gallery</span>
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold italic">Like What You See?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-8 bg-white text-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
