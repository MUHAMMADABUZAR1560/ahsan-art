"use client"

import { useEffect, useRef, useState } from "react"

export function CursorFollower() {
  const [mounted, setMounted] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    
    // Check if the device has a mouse/fine pointer
    const touchQuery = window.matchMedia("(pointer: coarse)")
    setIsTouchDevice(touchQuery.matches)

    if (touchQuery.matches) return

    let timer: NodeJS.Timeout
    let animationFrameId: number

    let lastX = 0
    let lastY = 0
    let velX = 0
    let velY = 0

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      const currentX = e.clientX
      const currentY = e.clientY

      animationFrameId = requestAnimationFrame(() => {
        const cursor = cursorRef.current
        if (!cursor) return

        const dx = currentX - lastX
        const dy = currentY - lastY
        
        lastX = currentX
        lastY = currentY
        
        velX = velX * 0.8 + dx * 0.2
        velY = velY * 0.8 + dy * 0.2
        
        const maxShift = 30 
        const shiftX = Math.max(-1, Math.min(1, -velX / 15)) * maxShift
        const shiftY = Math.max(-1, Math.min(1, -velY / 15)) * maxShift
        
        const hx = 50 + shiftX
        const hy = 50 + shiftY

        cursor.style.setProperty("--x", `${currentX}px`)
        cursor.style.setProperty("--y", `${currentY}px`)
        cursor.style.setProperty("--hx", `${hx}%`)
        cursor.style.setProperty("--hy", `${hy}%`)

        cursor.style.opacity = "1"
        cursor.style.transform = "translate3d(var(--x), var(--y), 0) translate(-50%, -50%) scale(1)"
        
        clearTimeout(timer)
        timer = setTimeout(() => {
          if (cursorRef.current) {
            cursorRef.current.style.opacity = "0"
            cursorRef.current.style.transform = "translate3d(var(--x), var(--y), 0) translate(-50%, -50%) scale(0.5)"
          }
        }, 300)
      })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      clearTimeout(timer)
    }
  }, [])

  if (!mounted || isTouchDevice) return null

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        opacity: 0,
        transform: "translate3d(0, 0, 0) translate(-50%, -50%) scale(0.5)",
        willChange: "transform, opacity",
        transition: "transform 150ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease-out",
        ["--hx" as string]: "50%",
        ["--hy" as string]: "50%"
      }}
    >
      <div 
        className="relative w-24 h-24 rounded-full overflow-hidden backdrop-blur-xl bg-white/10 border border-white/30" 
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.25), 0 8px 32px 0 rgba(0, 0, 0, 0.15)" }}
      >
        <img 
          src="/images/ahsan-art-cursor.png" 
          alt="Follower" 
          className="w-full h-full object-cover"
        />
        {/* Specular Highlight that reacts to movement */}
        <div 
          className="absolute inset-0 pointer-events-none rounded-full"
          style={{
            mixBlendMode: 'screen',
            background: "radial-gradient(circle at var(--hx, 50%) var(--hy, 50%), rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)"
          }}
        />
      </div>
    </div>
  )
}