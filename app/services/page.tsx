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
    description: "Your product image is doing the selling before anyone reads a single word. We make sure it does that job well. We shoot with your brand identity in mind — so whether it's a website, social media, or a product listing, the images feel consistent, professional, and trustworthy.",
    features: [
      "Studio & white background shots",
      "Lifestyle and in-context photography",
      "Detail and texture close-ups",
      "360\u00b0 product views",
      "Color-accurate editing",
      "Social media and website ready formats",
    ],
    image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575375/pr1_zaane3.jpg",
  },
  {
    id: "videography",
    icon: Video,
    title: "Product Videography",
    description: "A video isn't just content — it's your brand talking to a customer. Before we shoot, we analyze your brand, your audience, and where the video will run. Then we plan the messaging, the look, and the format. The result is a video that positions your brand properly and drives action — not just views.",
    features: [
      "Brand-aligned video strategy",
      "Product showcase and demo videos",
      "Social media cuts (Reels, TikTok, YouTube Shorts)",
      "Ads-ready content that lowers your cost per result",
      "Unboxing and how-to videos",
      "Professional editing and color grading",
    ],
    image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575369/desighee_d8lhee.jpg",
  },
  {
    id: "ugc",
    icon: Play,
    title: "UGC Videos",
    description: "People trust people. UGC-style content looks real because it's made to feel real — and that's exactly why it converts. We create authentic review and testimonial-style videos in formats built for today's platforms.",
    features: [
      "Natural, trust-building video style",
      "TikTok, Instagram Reels, and ad formats",
      "Authentic review and testimonial style",
      "Multiple versions for A/B testing",
      "Quick turnaround",
    ],
    image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575377/x3_qnwnyr.jpg",
  },
  {
    id: "amazon",
    icon: Package,
    title: "Amazon Content",
    description: "On Amazon, your image is your storefront. We create listing visuals that follow Amazon's rules, highlight your product's best features, and give buyers a reason to click Add to Cart.",
    features: [
      "Main product images (Amazon compliant)",
      "Feature and benefit infographics",
      "A+ Content / Enhanced Brand Content",
      "Lifestyle and comparison images",
      "Full listing visual packages",
    ],
    image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575373/g2_owsbnm.jpg",
  },
  {
    id: "food",
    icon: Utensils,
    title: "Food Photography",
    description: "Food has to look delicious before anyone reads the menu. We style and shoot food the way it deserves — with lighting, composition, and color that makes people hungry just scrolling past.",
    features: [
      "Hero and feature shots",
      "Menu and catalog photography",
      "Packaging photography",
      "Flat lay and ingredient styling",
      "Social media content",
    ],
    image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575372/fp1_sdmddj.jpg",
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    description: "Running a full online store? We build complete visual packages so your entire catalog, website, and social media look consistent and professional — all in one place.",
    features: [
      "Full product catalog shoots",
      "Website banners and category images",
      "Social media content sets",
      "Ongoing content partnerships",
    ],
    image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575369/b1_pf2xsu.jpg",
  },
]

const process = [
  {
    step: "01",
    title: "We Listen",
    description: "Tell us about your product, your brand, and your goals. No assumptions, just honest conversation.",
  },
  {
    step: "02",
    title: "We Analyze & Plan",
    description: "We look at your brand, your competitors, and your platforms — then suggest what content you actually need.",
  },
  {
    step: "03",
    title: "We Shoot",
    description: "Professional production with your brand vision at the center of every frame.",
  },
  {
    step: "04",
    title: "We Deliver",
    description: "Edited, polished, and ready to use. On time, every time.",
  },
]

export default function ServicesPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, margin: "-100px" })

  return (
    <main className="min-h-screen font-serif">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-12 md:pt-40 md:pb-24 bg-white border-b border-stone-100">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.15
                    }
                }
            }}
          >
            <motion.span 
              variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 text-primary text-[10px] md:text-sm font-bold tracking-widest uppercase mb-4"
            >
              <span className="w-6 md:w-8 h-px bg-primary" /> What We Do
            </motion.span>
            <motion.h1 
              variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-7xl font-bold text-foreground leading-tight"
            >
              Professional Content Built to Perform<span className="text-primary">.</span>
            </motion.h1>
            <motion.p 
              variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-sm md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Every service we offer is designed with one goal — to help your brand look great and sell more.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List - Mobile 2x2 Grid / Desktop Alternating List */}
      <section className="py-24 lg:py-32 bg-background overflow-hidden font-serif">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div 
            variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-32"
          >
            {services.map((service, index) => {
              const isEven = index % 2 === 0
              return (
                <ServiceCard key={service.id} service={service} isEven={isEven} />
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 lg:py-32 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Our Process
              <span className="w-8 h-px bg-primary" />
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              How We Work
            </h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-lg">
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
            Ready to Make Your Brand Look Its Best?
          </h2>
          <p className="mt-6 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Tell us about your product. We'll build a content plan that fits your goals and your budget.
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