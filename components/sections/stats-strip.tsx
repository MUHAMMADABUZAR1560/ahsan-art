"use client"

import { useRef, useEffect, useState } from "react"

const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 7, suffix: "+", label: "Years in E-Commerce" },
  { value: 6, suffix: "", label: "Core Services" },
]

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(value)
  const started = useRef(false)

  useEffect(() => {
    if (!isInView || started.current) return
    started.current = true

    const duration = 1500
    const startTime = performance.now()
    const startValue = 0

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease out cubic
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
