"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Camera, Video, Play, Package, Utensils, ShoppingBag, Check } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const services = [
  {
    id: "photography",
    icon: Camera,
    title: "Product Photography",
    description: "High-quality product images that showcase your items in their best light and drive conversions.",
    features: [
      "Professional studio lighting",
      "White background shots",
      "Lifestyle photography",
      "360-degree product shots",
      "Detail and texture shots",
      "Color-accurate editing",
    ],
    image: "/images/portfolio/pr1.jpg",
  },
  {
    id: "videography",
    icon: Video,
    title: "Product Videography",
    description: "Dynamic video content that brings your products to life and engages your audience.",
    features: [
      "Product showcase videos",
      "Unboxing videos",
      "How-to demonstrations",
      "Brand story videos",
      "Social media content",
      "Professional editing",
    ],
    image: "/images/portfolio/desighee.jpg",
  },
  {
    id: "ugc",
    icon: Play,
    title: "UGC Videos",
    description: "Authentic user-generated style content that builds trust and drives engagement.",
    features: [
      "Authentic testimonials",
      "Product reviews",
      "Social-ready formats",
      "TikTok & Reels content",
      "Multiple versions",
      "Quick turnaround",
    ],
    image: "/images/portfolio/x3.jpg",
  },
  {
    id: "amazon",
    icon: Package,
    title: "Amazon Content",
    description: "Optimized visual content designed specifically for Amazon listings to maximize conversions.",
    features: [
      "Main image optimization",
      "Infographic images",
      "A+ Content design",
      "Lifestyle images",
      "Comparison charts",
      "Amazon compliance",
    ],
    image: "/images/portfolio/g2.jpg",
  },
  {
    id: "food",
    icon: Utensils,
    title: "Food Photography",
    description: "Mouth-watering food imagery that makes viewers crave your products.",
    features: [
      "Hero shots",
      "Menu photography",
      "Ingredient styling",
      "Action shots",
      "Packaging shots",
      "Social content",
    ],
    image: "/images/portfolio/fp1.jpg",
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    description: "Complete visual solutions for your online store and brand presence.",
    features: [
      "Full catalog shoots",
      "Website imagery",
      "Social media assets",
      "Banner designs",
      "Brand guidelines",
      "Ongoing support",
    ],
    image: "/images/portfolio/b1.jpg",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your brand, products, and goals to create a tailored approach.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Detailed shot lists, mood boards, and timelines to ensure smooth execution.",
  },
  {
    step: "03",
    title: "Production",
    description: "Professional shooting with attention to every detail and your brand vision.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Expertly edited content delivered on time and ready for use.",
  },
]

export default function ServicesPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, margin: "-100px" })

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-32 text-background bg-[rgba(255,255,255,1)]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-6"
            >
              <span className="w-8 h-px bg-primary" />
              Our Services
            </motion.span>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={heroInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight text-foreground"
              >
                Everything Your
                <br />
                Brand Needs
                <span className="inline-block w-3 h-3 rounded-full bg-primary ml-3 align-middle" />
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-8 text-lg md:text-xl max-w-2xl leading-relaxed text-foreground"
            >
              From stunning product photography to engaging video content, 
              we offer comprehensive visual solutions designed to elevate 
              your brand and drive results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List - Mobile 2x2 Grid / Desktop Alternating List */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0
              return (
                <ServiceCard key={service.id} service={service} isEven={isEven} />
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section - Mobile 2x2 Grid / Desktop 4-col Grid */}
      <section ref={processRef} className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-12">
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
              How We Work
            </h2>
            <p className="mt-4 text-muted-foreground">
              A streamlined process designed to deliver exceptional results every time.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
          >
            {process.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="p-5 lg:p-8 bg-background rounded-2xl h-full">
                  <div className="text-3xl lg:text-5xl font-serif font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-base lg:text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs lg:text-base text-muted-foreground line-clamp-3 lg:line-clamp-none">
                    {item.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-primary/30" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            Ready to Get Started?
          </h2>
          <p className="mt-6 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Let's discuss your project and create stunning visuals that drive results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-background text-foreground px-8 py-4 rounded-full font-medium hover:bg-background/90 transition-colors group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ServiceCard({ service, isEven }: { service: typeof services[0]; isEven: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} id={service.id} className="scroll-mt-32">
      {/* - Grid 1 col on mobile (content and image stacked) 
          - LG screens: 2 cols (original layout)
      */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
        
        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`${isEven ? "" : "lg:order-2"} p-4 lg:p-0 bg-secondary/30 lg:bg-transparent rounded-2xl lg:rounded-none`}
        >
          <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 lg:mb-6">
            <service.icon className="w-5 h-5 lg:w-7 lg:h-7 text-primary" />
          </div>
          <h2 className="text-lg lg:text-4xl font-serif font-bold text-foreground">
            {service.title}
          </h2>
          <p className="mt-2 lg:mt-4 text-muted-foreground text-xs lg:text-lg leading-relaxed line-clamp-2 lg:line-clamp-none">
            {service.description}
          </p>

          {/* Features Hidden on Mobile to save space in the 2x2 grid */}
          <div className="hidden lg:grid mt-8 grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-4 lg:mt-10 bg-foreground text-background px-4 py-2 lg:px-6 lg:py-3 rounded-full text-[10px] lg:text-base font-medium hover:bg-primary transition-colors group"
          >
            Get a Quote
            <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`relative ${isEven ? "" : "lg:order-1"} order-first lg:order-none`}
        >
          <div className="aspect-square lg:aspect-[4/3] rounded-xl lg:rounded-2xl overflow-hidden">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
          <div className={`absolute -z-10 -bottom-2 lg:-bottom-4 ${isEven ? "-right-2 lg:-right-4" : "-left-2 lg:-left-4"} w-full h-full bg-primary/10 rounded-xl lg:rounded-2xl`} />
        </motion.div>
      </div>
    </div>
  )
}