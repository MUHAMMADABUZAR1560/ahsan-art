"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Play, X, Camera, Video, Sparkles } from "lucide-react"

const btsItems = [
  {
    id: 1,
    title: "Studio Setup",
    description: "Professional lighting setup for a skincare product shoot",
    image: "/videos/studiosetup.mp4",
    thumbnail: "/images/portfolio/thumb4.jpg",
    type: "video",
    category: "Photography",
  },
  {
    id: 2,
    title: "Product Styling",
    description: "Careful arrangement and styling for the perfect shot",
    image: "/videos/productstyling.mp4",
    thumbnail: "/images/portfolio/thumb3.jpg",
    type: "video",
    category: "Styling",
  },
  {
    id: 3,
    title: "Video Production",
    description: "Behind the scenes of our video production process",
    image: "/videos/videopro.mp4",
    thumbnail: "/images/portfolio/thumb5.jpg", 
    type: "video",
    category: "Videography",
  },
  {
    id: 4,
    title: "Food Styling",
    description: "The art of making food look irresistible",
    image: "/videos/foodstyling.mp4",
    thumbnail: "/images/portfolio/thumb2.jpg",
    type: "video",
    category: "Styling",
  },
  {
    id: 5,
    title: "Creative Direction",
    description: "Planning and conceptualizing the perfect visual story",
    image: "/videos/creative.mp4",
    thumbnail: "/images/portfolio/thumb1.jpg",
    type: "video",
    category: "Creative",
  },
  {
    id: 6,
    title: "Post-Production",
    description: "Expert editing and color grading process",
    image: "/images/portfolio/fashion.mp4",
    thumbnail: "/images/portfolio/fashion.jpg",
    type: "video",
    category: "Editing",
  },
]

const processSteps = [
  {
    icon: Camera,
    title: "Professional Equipment",
    description: "We use top-of-the-line cameras, lenses, and lighting equipment to capture stunning visuals.",
  },
  {
    icon: Sparkles,
    title: "Creative Styling",
    description: "Every product is carefully styled and positioned to highlight its best features.",
  },
  {
    icon: Video,
    title: "Expert Execution",
    description: "Years of experience ensure smooth shoots and exceptional results every time.",
  },
]

export default function BTSPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, margin: "-100px" })
  const [selectedItem, setSelectedItem] = useState<typeof btsItems[0] | null>(null)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-24 text-background bg-[rgba(255,255,255,1)]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-6"
            >
              <span className="w-8 h-px bg-primary" />
              Behind the Scenes
            </motion.span>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={heroInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight text-foreground"
              >
                The Magic
                <br />
                Behind the Lens
                <span className="inline-block w-3 h-3 rounded-full bg-primary ml-3 align-middle" />
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-8 text-lg md:text-xl max-w-2xl leading-relaxed text-foreground"
            >
              Take a peek into our creative process and see how we bring 
              your products to life through our lens.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Our Process
              <span className="w-8 h-px bg-primary" />
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              How We Create Magic
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center p-8 bg-background rounded-2xl"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BTS Gallery - Now Upgraded to 3x3 Grid on Mobile */}
      <section className="py-12 md:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Gallery
              <span className="w-8 h-px bg-primary" />
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Behind Every Shot
            </h2>
            <p className="mt-4 text-muted-foreground hidden md:block">
              A glimpse into our studio, process, and the work that goes into creating stunning visuals.
            </p>
          </div>

          {/* Upgraded Grid System */}
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6">
            {btsItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-sm md:rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Mobile is square aspect for grid consistency, Desktop maintains masonry feel if desired, but here we use a fixed aspect for the 3x3 look */}
                <div className="relative aspect-square md:aspect-[4/5] bg-muted">
                  <Image
                    src={(item.type === "video" ? item.thumbnail : item.image) || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 md:group-hover:scale-110"
                  />
                  
                  {/* Overlay - simplified for mobile grid */}
                  <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-t md:from-foreground/80 md:via-foreground/20 md:to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Video Icon Overlay - Resized for small mobile grid tiles */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Play className="w-2.5 h-2.5 md:w-5 md:h-5 text-white fill-white" />
                        </div>
                    </div>
                  )}

                  {/* Content Overlay - Hidden on mobile grid to keep it clean */}
                  <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary text-sm font-medium">{item.category}</span>
                    <h3 className="text-lg font-semibold text-background mt-1">{item.title}</h3>
                    <p className="text-background/70 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 lg:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-background/20 transition-colors"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-black">
                {selectedItem.type === "video" ? (
                  <video 
                    src={selectedItem.image} 
                    poster={selectedItem.thumbnail}
                    controls 
                    autoPlay 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={selectedItem.image || "/placeholder.svg"}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="mt-6 text-center">
                <span className="text-primary text-sm font-medium">{selectedItem.category}</span>
                <h3 className="text-xl md:text-2xl font-semibold text-background mt-1">{selectedItem.title}</h3>
                <p className="text-background/70 mt-2 text-sm md:text-base px-4">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            Want to See More?
          </h2>
          <p className="mt-6 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Explore our portfolio to see the final results of our creative process.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="w-full sm:w-auto inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-medium hover:bg-background/90 transition-colors group justify-center"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors justify-center"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}