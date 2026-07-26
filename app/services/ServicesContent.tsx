"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Camera, Video, Play, Package, Utensils, ShoppingBag, Check } from "lucide-react"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { CTASection } from "@/components/sections/cta-section"

const services = [
  {
    id: "photography",
    number: "01",
    icon: Camera,
    title: "Product Photography",
    description: "Your product image is doing the selling before anyone reads a single word. We make sure it does that job well. We shoot with your brand identity in mind — so whether it's a website, social media, or a product listing, the images feel consistent, professional, and trustworthy.",
    features: [
      "Studio & white background shots",
      "Lifestyle and in-context photography",
      "Detail and texture close-ups",
      "360° product views",
      "Color-accurate editing",
      "Social media and website ready formats",
    ],
    image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575375/pr1_zaane3.jpg",
  },
  {
    id: "videography",
    number: "02",
    icon: Video,
    title: "Product Videography",
    description: "A video isn't just content — it's your brand talking to a customer. Before we shoot, we analyze your brand, your audience, and where the video will run. Then we plan the messaging, the look, and the format. The result is a video that positions your brand properly and drives action — not just views.",
    features: [
      "Brand-aligned video strategy",
      "Product showcase and demo videos",
      "Social media cuts (Reels, TikTok)",
      "Ads-ready content",
      "Unboxing and how-to videos",
      "Professional editing and color grading",
    ],
    image: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575369/desighee_d8lhee.jpg",
  },
  {
    id: "ugc",
    number: "03",
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
    number: "04",
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
    number: "05",
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
    number: "06",
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

export function ServicesContent() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 md:pt-48 md:pb-24 border-b border-border/50">
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
            <motion.h1 
              variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight"
            >
              Our Services<span className="text-primary">.</span>
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

      {/* Services List - Sticky Layout */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex flex-col">
            {services.map((service, index) => (
              <ServiceRow key={service.id} service={service} index={index} isLast={index === services.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Reusing existing components */}
      <WhyChooseUs />
      <CTASection />
    </>
  )
}

function ServiceRow({ service, index, isLast }: { service: typeof services[0], index: number, isLast: boolean }) {
  return (
    <div id={service.id} className={`flex flex-col lg:flex-row relative ${!isLast ? "border-b border-border/50 pb-20 mb-20" : ""}`}>
      
      {/* Sticky Left Column (Number & Title) */}
      <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
        <div className="sticky top-32 lg:pr-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl md:text-6xl font-serif font-bold text-muted-foreground/20 tracking-tighter">
              {service.number}.
            </span>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-4">
            {service.title}
          </h2>
        </div>
      </div>

      {/* Scrolling Right Column (Content & Image) */}
      <div className="w-full lg:w-2/3 lg:pl-12">
        <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-10 md:mb-16">
          {service.description}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 md:mb-16">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-foreground text-sm leading-tight">{feature}</span>
            </div>
          ))}
        </div>

        {/* Parallax Image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
          <div 
            className="absolute inset-0 h-[120%] -top-[10%]"
            style={{
              animation: "scroll-parallax-y linear forwards",
              willChange: "transform",
              ...({
                animationTimeline: "view()",
                animationRange: "entry exit"
              } as any)
            }}
          >
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover"
              quality={60}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 mt-8 md:mt-12 bg-foreground text-background px-6 py-3 md:px-8 md:py-4 rounded-full text-xs md:text-sm font-medium hover:bg-primary hover:text-white transition-colors group"
        >
          Request a Quote
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  )
}
