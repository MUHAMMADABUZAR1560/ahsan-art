"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Clock, Target, Users, Sparkles, Shield, ArrowRight } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const stats = [
  { value: 5, suffix: "+", label: "Years Exp", icon: Award },
  { value: 500, suffix: "+", label: "Projects", icon: Target },
  { value: 100, suffix: "+", label: "Clients", icon: Users },
  { value: 24, suffix: "hr", label: "Turnaround", icon: Clock },
]

const features = [
  {
    icon: Award,
    title: "5+ Years Exp",
    description: "Trusted expertise in visual branding.",
  },
  {
    icon: Target,
    title: "E-com Focus",
    description: "Optimized for Amazon & Shopify.",
  },
  {
    icon: Sparkles,
    title: "All-in-One",
    description: "Photo, video, and design solutions.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick turnaround without quality loss.",
  },
  {
    icon: Shield,
    title: "Guaranteed",
    description: "Premium results that exceed expectations.",
  },
  {
    icon: Users,
    title: "Live Support",
    description: "Personal attention for every project.",
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = value / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-flex items-center gap-2 text-primary text-[10px] md:text-sm font-bold tracking-widest uppercase mb-4"
          >
            <span className="w-6 md:w-8 h-px bg-primary" />
            Why Choose Us
            <span className="w-6 md:w-8 h-px bg-primary" />
          </motion.span>
          <h2 className="text-2xl md:text-5xl font-serif font-bold text-foreground leading-tight">
            Your Partner in <span className="text-primary">Visual Excellence</span>
          </h2>
        </div>

        {/* Stats Bar - Compacted */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          className="grid grid-cols-4 gap-2 md:gap-4 p-4 md:p-10 bg-foreground rounded-xl md:rounded-3xl mb-12 md:mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center border-r last:border-0 border-background/10">
              <div className="text-xl md:text-5xl font-serif font-bold text-background">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[8px] md:text-xs uppercase tracking-tighter md:tracking-widest text-background/50 mt-1 md:mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features 3x3 Grid (2-col mobile, 3-col desktop) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group p-5 md:p-8 bg-secondary rounded-xl md:rounded-2xl border border-transparent hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-sm md:text-xl font-bold text-foreground mb-2">{feature.title}</h4>
              <p className="text-[11px] md:text-sm text-muted-foreground leading-snug md:leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}

          {/* Call to Action Tile - Completes the Grid Look */}
          <motion.div
            variants={fadeInUp}
            className="col-span-2 lg:col-span-3 mt-4 md:mt-8 p-6 md:p-10 bg-primary rounded-xl md:rounded-3xl text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-3xl font-serif font-bold">Ready to elevate your brand?</h3>
              <p className="text-sm md:text-lg text-primary-foreground/80 mt-1">Let's create stunning visuals that convert.</p>
            </div>
            <a
              href="/contact"
              className="bg-white text-foreground px-8 py-3 md:py-4 rounded-full font-bold hover:bg-stone-100 transition-colors flex items-center gap-2 text-xs md:text-base whitespace-nowrap"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}