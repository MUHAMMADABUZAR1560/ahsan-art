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

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = requestAnimationFrame(() => {
        const cursor = cursorRef.current
        if (!cursor) return

        cursor.style.setProperty("--x", `${e.clientX}px`)
        cursor.style.setProperty("--y", `${e.clientY}px`)
        cursor.style.opacity = "1"
        cursor.style.transform = "translate3d(var(--x), var(--y), 0) translate(-50%, -50%) scale(1)"
        
        clearTimeout(timer)
        timer = setTimeout(() => {
          if (cursor) {
            cursor.style.opacity = "0"
            cursor.style.transform = "translate3d(var(--x), var(--y), 0) translate(-50%, -50%) scale(0.5)"
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
        transition: "transform 150ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease-out"
      }}
    >
      <img 
        src="https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575373/Cursor_mayvjg.png" 
        alt="Follower" 
        className="w-24 h-24 object-cover rounded-full shadow-2xl"
      />
    </div>
  )
}