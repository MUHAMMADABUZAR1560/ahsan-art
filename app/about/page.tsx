"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Award, Target, Users, Sparkles, Camera, Video, Instagram, MessageCircle } from "lucide-react"

const values = [
  { icon: Sparkles, title: "Creative That Fits Your Brand", description: "We match the look, feel, and tone to what your brand needs — whether that's clean and minimal or rich and bold." },
  { icon: Target, title: "Precision in Every Frame", description: "Every detail is intentional — lighting, angles, color. Nothing is left to chance." },
  { icon: Users, title: "Strategy First", description: "Good content without a plan is wasted. We think about where this content goes and what it needs to do before we shoot." },
  { icon: Award, title: "Long-Term Partnerships", description: "We want clients who grow with us. Most do — and that's the biggest proof of what we deliver." },
]

export default function AboutPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  
  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" })

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section - Upgraded with bolder typography */}
      <section ref={heroRef} className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 }
                }
            }}
            className="max-w-4xl"
          >
            <motion.span
              variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 text-primary text-[10px] md:text-sm font-bold tracking-widest uppercase mb-6 md:mb-8"
            >
              <span className="w-6 md:w-8 h-px bg-primary" /> About The Studio
            </motion.span>
            
            <motion.h1
              variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-7xl lg:text-[5.5rem] font-serif font-bold leading-[1.1] tracking-tight"
            >
              Built for <span className="italic text-primary">E-Commerce</span>.<br className="hidden md:block"/> Focused on Results.
            </motion.h1>
            
            <motion.p
              variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 md:mt-12 text-base md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light"
            >
              We're not a general photography studio. We're a content team that specializes in one thing — making online brands grow.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Image Collage / Split Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-8">
                The Studio Behind Hundreds of Brands
              </h2>
              
              <div className="space-y-6 text-muted-foreground text-sm md:text-lg leading-relaxed">
                <p>
                  Ahsan Art Creative Studio was started by Muhammad Ahsan, who has spent over 7 years in the e-commerce industry. Before starting the studio, he worked as a product photographer at Elo and as Lead Photographer at Peropelle — giving him hands-on experience with international brand standards and e-commerce content at scale.
                </p>
                <p>
                  Based in Faisalabad, we noticed one thing early on — most local photographers shoot everything. Weddings, events, products, all mixed together. We chose to go the other way. Our entire team is focused entirely on product and brand content.
                </p>
                <p className="font-semibold text-foreground border-l-2 border-primary pl-4 py-1">
                  We study your brand before we shoot. We plan your content strategy. And we deliver visuals that build trust, strengthen your identity, and bring real sales.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="p-5 bg-secondary rounded-2xl border border-transparent hover:border-border transition-colors">
                  <Camera className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-bold text-sm text-foreground">Photography</h4>
                  <p className="text-[11px] text-muted-foreground mt-1">Studio & Lifestyle</p>
                </div>
                <div className="p-5 bg-secondary rounded-2xl border border-transparent hover:border-border transition-colors">
                  <Video className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-bold text-sm text-foreground">Videography</h4>
                  <p className="text-[11px] text-muted-foreground mt-1">Ads & UGC</p>
                </div>
              </div>
            </motion.div>

            {/* Right Images (Collage style) */}
            <motion.div 
              className="relative h-[600px] w-full hidden md:block"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Main large image */}
              <div className="absolute right-0 top-0 w-[80%] h-[75%] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575375/studio_zpk4im.jpg" 
                  alt="Ahsan Art Creative Studio Product Photography Setup in Faisalabad" 
                  fill 
                  className="object-cover transition-all duration-700" 
                  quality={60}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
              </div>
              
              {/* Overlapping smaller image */}
              <div className="absolute left-0 bottom-0 w-[55%] h-[45%] rounded-3xl overflow-hidden shadow-2xl border-8 border-background">
                <Image 
                  src="https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575369/b1_pf2xsu.jpg" 
                  alt="Behind the scenes of a product photography shoot at Ahsan Art Creative Studio" 
                  fill 
                  className="object-cover transition-all duration-700" 
                  quality={60}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute top-[65%] right-[70%] bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl w-40 text-center">
                <div className="text-4xl font-serif font-bold">500+</div>
                <div className="text-[10px] uppercase tracking-widest mt-2 font-medium">Projects</div>
              </div>
            </motion.div>

            {/* Mobile Fallback Image */}
            <div className="md:hidden relative aspect-square rounded-2xl overflow-hidden w-full">
               <Image 
                  src="https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575375/studio_zpk4im.jpg" 
                  alt="Professional product videography equipment at Ahsan Art Creative Studio" 
                  fill 
                  className="object-cover" 
                  quality={60}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
            </div>
            
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 md:py-32 bg-secondary border-y border-border/50">
        <div className="container mx-auto px-4 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Our Core Values</h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-lg">The principles that guide our creative process and client partnerships.</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, y: 0,
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                className="p-6 md:p-8 bg-background rounded-2xl md:rounded-3xl hover:shadow-xl transition-all group border border-border/50 hover:border-primary/30"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-500">
                  <value.icon className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-sm md:text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-[11px] md:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-background blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-background blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold italic mb-6">Ready to work together?</h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
              Let's create something that elevates your brand and drives real results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform w-full sm:w-auto">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-primary-foreground/80">
              <a href="https://wa.me/923081122525" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">0308-1122525</span>
              </a>
              <a href="https://www.instagram.com/ahsanart.studio/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-medium">@ahsanart.studio</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}