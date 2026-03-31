"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image Side */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575375/studio_zpk4im.jpg"
                alt="Ahsan Art Creative Studio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -right-4 lg:-right-8 bottom-8 bg-background p-6 rounded-xl shadow-2xl max-w-[200px]"
            >
              <div className="text-4xl font-serif font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground mt-1">
                Years of Professional Experience
              </div>
            </motion.div>
            {/* Purple Accent */}
            <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-primary/10 rounded-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div variants={fadeInUp} className="lg:pl-8">
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
              Where Creativity
              <br />
              Meets Precision
              <span className="inline-block w-2 h-2 rounded-full bg-primary ml-2 align-middle" />
            </h2>

            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              At Ahsan Art, we believe every product has a story waiting to be told. 
              Our studio combines artistic vision with technical excellence to create 
              visual content that not only captures attention but drives conversions.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              With over 5 years of experience in product photography and videography, 
              we specialize in creating compelling visual content for e-commerce brands, 
              Amazon sellers, and businesses looking to elevate their online presence.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { title: "E-commerce Focus", desc: "Optimized for online sales" },
                { title: "Fast Turnaround", desc: "Quick delivery without compromise" },
                { title: "Creative Direction", desc: "From concept to execution" },
                { title: "Quality Assured", desc: "Premium results every time" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
