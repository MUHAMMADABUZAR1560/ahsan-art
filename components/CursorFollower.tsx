"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CursorFollower() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    setMounted(true)
    
    // Check if the device has a mouse/fine pointer
    const touchQuery = window.matchMedia("(pointer: coarse)")
    setIsTouchDevice(touchQuery.matches)

    let timer: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      if (touchQuery.matches) return

      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      
      setIsVisible(true)
      clearTimeout(timer)
      
      timer = setTimeout(() => {
        setIsVisible(false)
      }, 300)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timer)
    }
  }, [mouseX, mouseY])

  if (!mounted || isTouchDevice) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5 
      }}
    >
      <img 
        src="https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575373/Cursor_mayvjg.png" 
        alt="Follower" 
        className="w-24 h-24 object-cover rounded-full shadow-2xl"
      />
    </motion.div>
  )
}