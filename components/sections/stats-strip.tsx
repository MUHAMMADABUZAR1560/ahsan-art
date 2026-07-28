"use client"

import { useRef, useEffect, useState } from "react"
import { studioInfo } from "@/lib/studio-info"

const stats = [
  { value: studioInfo.stats.projects, suffix: "+", label: "Projects Delivered" },
  { value: studioInfo.stats.clients, suffix: "+", label: "Happy Clients" },
  { value: studioInfo.stats.years, suffix: "+", label: "Years in E-Commerce" },
  { value: 6, suffix: "", label: "Core Services" },
]

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  // Server/SSR renders the real number — avoids "0+" flash on hydration
  const [count, setCount] = useState(value)
  const started = useRef(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !isInView || started.current) return
    started.current = true

    const duration = 1500
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease out cubic
      setCount(Math.floor(value * eased))
      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setCount(value)
      }
    }

    setCount(0)
    requestAnimationFrame(tick)
  }, [mounted, isInView, value])

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export function StatsStrip() {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

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
    <section ref={ref} className="py-0 bg-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div
          className="grid grid-cols-2 md:grid-cols-4 transition-opacity duration-600"
          style={{ opacity: inView ? 1 : 0 }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`py-10 md:py-14 px-6 md:px-10 text-center border-border/20 transition-all duration-500 ${
                index < stats.length - 1 ? "border-r" : ""
              } ${index >= 2 ? "border-t md:border-t-0" : ""}`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <div className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-background leading-none">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={inView} />
              </div>
              <div className="mt-2 text-[10px] md:text-xs uppercase tracking-widest text-background/50 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
