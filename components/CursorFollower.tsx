"use client"

import { useEffect, useRef, useState } from "react"

export function CursorFollower() {
  const [mounted, setMounted] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  // Track hover state for magnetic effect
  const hoverTarget = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setMounted(true)
    
    // Check if the device has a mouse/fine pointer
    const touchQuery = window.matchMedia("(pointer: coarse)")
    setIsTouchDevice(touchQuery.matches)

    if (touchQuery.matches) return

    let timer: NodeJS.Timeout
    let animationFrameId: number

    // State for velocity & rotation
    let lastX = 0
    let lastY = 0
    let velX = 0
    let velY = 0
    let currentRotation = 0

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX
      const currentY = e.clientY

      const cursor = cursorRef.current
      if (!cursor) return

      // Find magnetic targets (buttons, links, or items with .magnetic class)
      const target = e.target as HTMLElement
      const magneticTarget = target.closest('button, a, .magnetic, [role="button"], input, select, textarea') as HTMLElement

      if (magneticTarget) {
        if (hoverTarget.current !== magneticTarget) {
          hoverTarget.current = magneticTarget
        }
      } else {
        if (hoverTarget.current) {
          hoverTarget.current = null
          // Reset to default round size
          cursor.style.width = '48px'
          cursor.style.height = '48px'
          cursor.style.borderRadius = '50%'
        }
      }

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = requestAnimationFrame(() => {
        // Calculate velocity for squash & stretch and highlight shift
        const dx = currentX - lastX
        const dy = currentY - lastY
        
        lastX = currentX
        lastY = currentY
        
        // Exponential smoothing for fluid velocity
        velX = velX * 0.8 + dx * 0.2
        velY = velY * 0.8 + dy * 0.2
        
        const velocity = Math.sqrt(velX * velX + velY * velY)
        
        // Highlight shifts opposite to cursor movement direction
        const maxShift = 30 // percent max shift from center
        const shiftX = Math.max(-1, Math.min(1, -velX / 15)) * maxShift
        const shiftY = Math.max(-1, Math.min(1, -velY / 15)) * maxShift
        
        const hx = 50 + shiftX
        const hy = 50 + shiftY

        cursor.style.setProperty("--hx", `${hx}%`)
        cursor.style.setProperty("--hy", `${hy}%`)

        let scaleX = 1
        let scaleY = 1
        
        if (magneticTarget) {
          // Magnetic Morph: Hug the element
          const rect = magneticTarget.getBoundingClientRect()
          const pad = 16
          cursor.style.width = `${rect.width + pad}px`
          cursor.style.height = `${rect.height + pad}px`
          
          const computedStyle = window.getComputedStyle(magneticTarget)
          cursor.style.borderRadius = computedStyle.borderRadius || '8px'
          
          // Snap position to center of the target element
          const targetX = rect.left + rect.width / 2
          const targetY = rect.top + rect.height / 2
          
          cursor.style.setProperty("--x", `${targetX}px`)
          cursor.style.setProperty("--y", `${targetY}px`)
        } else {
          // Normal tracking with fluid squash and stretch
          cursor.style.setProperty("--x", `${currentX}px`)
          cursor.style.setProperty("--y", `${currentY}px`)
          
          // Only squash when moving to avoid jitter when stationary
          if (velocity > 1) {
            const targetRotation = Math.atan2(velY, velX) * (180 / Math.PI)
            let delta = targetRotation - (currentRotation % 360)
            // Shortest-path rotation to avoid 360 spins
            if (delta > 180) delta -= 360
            if (delta < -180) delta += 360
            currentRotation += delta
            
            const stretch = Math.min(velocity * 0.015, 0.4) // Max 40% stretch
            scaleX = 1 + stretch
            scaleY = 1 - stretch * 0.5
          }
        }

        cursor.style.opacity = "1"
        cursor.style.transform = `translate3d(var(--x), var(--y), 0) translate(-50%, -50%) rotate(${currentRotation}deg) scaleX(${scaleX}) scaleY(${scaleY})`
        
        clearTimeout(timer)
        timer = setTimeout(() => {
          if (cursorRef.current) {
            cursorRef.current.style.opacity = "0"
            // Reset transforms gently on idle
            cursorRef.current.style.transform = "translate3d(var(--x), var(--y), 0) translate(-50%, -50%) scale(0.5)"
          }
        }, 1500)
      })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    
    // Set initial properties gracefully
    if (cursorRef.current) {
      cursorRef.current.style.width = '48px'
      cursorRef.current.style.height = '48px'
    }

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
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        willChange: "transform, opacity, width, height, border-radius",
        transition: "width 0.35s cubic-bezier(.2,.9,.25,1), height 0.35s cubic-bezier(.2,.9,.25,1), border-radius 0.35s cubic-bezier(.2,.9,.25,1), transform 150ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease-out",
        // Liquid Glass styling
        background: "linear-gradient(155deg, rgba(255,255,255,0.35), rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.12) 100%)",
        backdropFilter: "blur(18px) saturate(180%)",
        WebkitBackdropFilter: "blur(18px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.45)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.25), 0 8px 32px 0 rgba(0, 0, 0, 0.15)",
        // Custom properties initialized
        ["--hx" as string]: "50%",
        ["--hy" as string]: "50%",
        transform: "translate3d(0, 0, 0) translate(-50%, -50%) scale(0.5)"
      }}
    >
      {/* Specular Highlight */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: 'inherit',
          mixBlendMode: 'screen',
          background: "radial-gradient(circle at var(--hx, 50%) var(--hy, 50%), rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)"
        }}
      />
    </div>
  )
}