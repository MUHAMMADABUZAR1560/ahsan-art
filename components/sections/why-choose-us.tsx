"use client"

import { useRef, useEffect, useState } from "react"
import { Award, Clock, Target, Users, Sparkles, Shield, ArrowRight } from "lucide-react"

const stats = [
  { value: 7, suffix: "+", label: "Years in E-Commerce", icon: Award },
  { value: 200, suffix: "+", label: "Projects", icon: Target },
  { value: 100, suffix: "+", label: "Clients", icon: Users },
  { value: 24, suffix: "hr", label: "Turnaround", icon: Clock },
]

const features = [
  {
    icon: Award,
    title: "E-Commerce Specialists",
    description: "Our whole team is focused on e-commerce content. This is all we do — and it shows in the results.",
  },
  {
    icon: Target,
    title: "Strategy Before Every Shoot",
    description: "We analyze your brand, your competitors, and your audience before we plan a single shot.",
  },
  {
    icon: Sparkles,
    title: "Better Ads, Lower Costs",
    description: "Our content is built to perform in paid campaigns — your cost per result goes down, your orders go up.",
  },
  {
    icon: Clock,
    title: "All Under One Roof",
    description: "Photography, video, editing, Amazon content — everything in one place. No juggling multiple vendors.",
  },
  {
    icon: Shield,
    title: "Clients Who Keep Coming Back",
    description: "Most of our clients stay with us for months and years. Some tried other studios and came back. The work speaks for itself.",
  },
  {
    icon: Users,
    title: "Personal Attention on Every Project",
    description: "You deal directly with us — not a random coordinator. We respond fast and care about your results.",
  },
]

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(value)
  const started = useRef(false)

  useEffect(() => {
    if (!isInView || started.current) return
    started.current = true

    const duration = 1200
    const startTime = performance.now()
    const startValue = 0

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = progress * (2 - progress) // ease out quadratic
      setCount(Math.floor(startValue + (value - startValue) * eased))
      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setCount(value)
      }
    }

    setCount(startValue)
    requestAnimationFrame(tick)
  }, [isInView, value])

  return (
    <span className="tabular-nums" data-target={value}>
      {count}
      {suffix}
    </span>
  )
}

export function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Fallback: trigger after 2 seconds in case IntersectionObserver fails
    const fallbackTimer = setTimeout(() => {
      setInView(true)
    }, 2000)

    if (typeof IntersectionObserver !== "undefined") {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true)
            clearTimeout(fallbackTimer)
            obs.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      obs.observe(el)
      return () => {
        clearTimeout(fallbackTimer)
        obs.disconnect()
      }
    } else {
      setInView(true)
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <section ref={ref} className="py-16 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-serif font-bold text-foreground leading-tight">
            Why Choose Us
          </h2>
        </div>

        {/* Stats Bar */}
        <div
          className="grid grid-cols-4 gap-2 md:gap-4 p-4 md:p-10 bg-foreground rounded-xl md:rounded-3xl mb-12 md:mb-20 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "scale(1)" : "scale(0.95)" }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center border-r last:border-0 border-background/10">
              <div className="text-xl md:text-5xl font-serif font-bold text-background">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={inView} />
              </div>
              <div className="text-[8px] md:text-xs uppercase tracking-tighter md:tracking-widest text-background/50 mt-1 md:mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-5 md:p-8 bg-secondary rounded-xl md:rounded-2xl border border-transparent hover:border-primary/20 transition-all duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 500ms ease ${index * 80}ms, transform 500ms ease ${index * 80}ms, border-color 300ms`,
              }}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-sm md:text-xl font-bold text-foreground mb-2">{feature.title}</h4>
              <p className="text-[11px] md:text-sm text-muted-foreground leading-snug md:leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}