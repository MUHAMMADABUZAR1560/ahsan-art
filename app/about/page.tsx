"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Award, Target, Users, Sparkles, Camera, Video } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const timeline = [
  { year: "2019", title: "The Beginning", description: "Started with a passion for storytelling." },
  { year: "2020", title: "E-com Focus", description: "Specialized in Amazon and Shopify content." },
  { year: "2022", title: "Video Prod", description: "Expanded into high-end videography and UGC." },
  { year: "2024", title: "Full Studio", description: "End-to-end visual solutions for global brands." },
]

const values = [
  { icon: Sparkles, title: "Creativity", description: "Fresh eyes for every project." },
  { icon: Target, title: "Precision", description: "Attention to every single pixel." },
  { icon: Users, title: "Collaboration", description: "Bringing your vision to life together." },
  { icon: Award, title: "Excellence", description: "Only the best results will do." },
]

export default function AboutPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" })

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Compact */}
      <section ref={heroRef} className="pt-24 pb-12 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            className="inline-flex items-center gap-2 text-primary text-[10px] md:text-sm font-bold tracking-widest uppercase mb-4"
          >
            <span className="w-6 md:w-8 h-px bg-primary" /> About Ahsan Art
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-7xl font-serif font-bold text-foreground leading-tight"
          >
            Where Vision <br className="hidden md:block" /> Meets Craft<span className="text-primary">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            className="mt-6 text-sm md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            We capture stories through stunning visual content that resonates and drives results.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar - Compact single row */}
      <section className="py-8 bg-stone-50 border-y border-stone-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl md:text-4xl font-serif font-bold text-primary">500+</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Projects</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-serif font-bold text-primary">100+</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Clients</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-serif font-bold text-primary">5+</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Upgraded to 2x2 Mobile Grid */}
      <section ref={valuesRef} className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground">Our Values</h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-5 md:p-8 bg-stone-50 rounded-xl md:rounded-2xl hover:bg-white hover:shadow-xl transition-all group border border-transparent hover:border-stone-100"
              >
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-primary transition-colors">
                  <value.icon className="w-5 h-5 md:w-8 md:h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-sm md:text-xl font-bold text-foreground mb-1 md:mb-2">{value.title}</h3>
                <p className="text-[11px] md:text-sm text-muted-foreground leading-snug">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities - Grid Based */}
      <section className="py-16 md:py-32 bg-foreground text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Full-Service Studio</h2>
              <p className="text-white/60 mb-10 text-sm md:text-base">We handle every aspect of your visual content needs, ensuring brand consistency at every touchpoint.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <Camera className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-bold text-sm">Photography</h4>
                  <p className="text-[10px] text-white/40">Studio & Lifestyle</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <Video className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-bold text-sm">Videography</h4>
                  <p className="text-[10px] text-white/40">Ads & UGC</p>
                </div>
              </div>
              
              <Link href="/services" className="inline-flex items-center gap-2 mt-8 text-primary font-bold text-sm group">
                Explore All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               <Image src="/images/studio.jpg" alt="Our Work" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold italic">Ready to work together?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-8 bg-white text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}