"use client"

import { useEffect, useRef, useState } from "react"

export function CursorFollower() {
  const [mounted, setMounted] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const arrowRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)

    // Only show custom cursor on pointer/mouse devices
    const touchQuery = window.matchMedia("(pointer: coarse)")
    setIsTouchDevice(touchQuery.matches)
    if (touchQuery.matches) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let rafId: number

    // Arrow tracks mouse instantly
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      const arrow = arrowRef.current
      if (arrow) {
        arrow.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        arrow.style.opacity = "1"
      }
    }

    // Expand ring on hover over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable = !!target.closest(
        'a, button, [role="button"], input, select, textarea, label, [tabindex]'
      )
      const ring = ringRef.current
      if (!ring) return
      if (isClickable) {
        ring.style.width = "52px"
        ring.style.height = "52px"
        ring.style.backgroundColor = "rgba(140, 82, 255, 0.12)"
        ring.style.borderColor = "#8c52ff"
        ring.style.opacity = "1"
      } else {
        ring.style.width = "36px"
        ring.style.height = "36px"
        ring.style.backgroundColor = "transparent"
        ring.style.borderColor = "rgba(140, 82, 255, 0.55)"
        ring.style.opacity = "1"
      }
    }

    // Ring follows with smooth lerp (lag effect)
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.11
      ringY += (mouseY - ringY) * 0.11
      const ring = ringRef.current
      if (ring) {
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      }
      rafId = requestAnimationFrame(animateRing)
    }
    rafId = requestAnimationFrame(animateRing)

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseover", handleMouseOver, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (!mounted || isTouchDevice) return null

  return (
    <>
      {/* ── Purple arrow cursor — tracks instantly ── */}
      <div
        ref={arrowRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none select-none"
        style={{
          opacity: 0,
          willChange: "transform",
        }}
      >
        <svg
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L10.8 23L14 15.2L22 12L2 2Z"
            fill="#8c52ff"
            stroke="white"
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ── Purple ring — lags behind for premium feel ── */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border-2"
        style={{
          opacity: 0,
          width: "36px",
          height: "36px",
          borderColor: "rgba(140, 82, 255, 0.55)",
          willChange: "transform",
          transition:
            "width 220ms cubic-bezier(0.16,1,0.3,1), height 220ms cubic-bezier(0.16,1,0.3,1), background-color 220ms ease, border-color 220ms ease, opacity 300ms ease",
        }}
      />
    </>
  )
}