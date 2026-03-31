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
              <span className="w-6 md:w-8 h-px bg-primary" /> About Ahsan Art
            </motion.span>
            <motion.h1
              variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-7xl font-serif font-bold text-foreground leading-tight"
            >
              Where Vision <br className="hidden md:block" /> Meets Craft<span className="text-primary">.</span>
            </motion.h1>
            <motion.p
              variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-sm md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              We capture stories through stunning visual content that resonates and drives results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar - Compact single row */}
      <section className="py-8 bg-stone-50 border-y border-stone-100">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1
                    }
                }
            }}
            className="grid grid-cols-3 gap-4 text-center"
          >
            {[
              { label: "Projects", value: "500+" },
              { label: "Clients", value: "100+" },
              { label: "Years", value: "5+" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-2xl md:text-4xl font-serif font-bold text-primary">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section - Upgraded to 2x2 Mobile Grid */}
      <section ref={valuesRef} className="py-16 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
          >
            <h2 className="text-2xl md:text-5xl font-serif font-bold text-foreground">Our Core Values</h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-lg">The principles that guide our creative process and client partnerships.</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                className="text-center p-6 md:p-10 bg-stone-50 rounded-2xl md:rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all group border border-transparent hover:border-stone-100"
              >
                <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <value.icon className="w-6 h-6 md:w-10 md:h-10 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-base md:text-2xl font-bold text-foreground mb-2 md:mb-3">{value.title}</h3>
                <p className="text-xs md:text-base text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities - Grid Based */}
      <section className="py-16 md:py-32 bg-foreground text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Full-Service Studio</h2>
              <p className="text-white/60 mb-10 text-sm md:text-base">We handle every aspect of your visual content needs, ensuring brand consistency at every touchpoint.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <Camera className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-bold text-sm">Photography</h4>
                  <p className="text-[10px] text-white/40">Studio & Lifestyle</p>
                </motion.div>
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <Video className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-bold text-sm">Videography</h4>
                  <p className="text-[10px] text-white/40">Ads & UGC</p>
                </motion.div>
              </div>
              
              <Link href="/services" className="inline-flex items-center gap-2 mt-8 text-primary font-bold text-sm group">
                Explore All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
            >
                <Image src="https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575375/studio_zpk4im.jpg" alt="Our Work" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold italic">Ready to work together?</h2>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-8 bg-white text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}