"use client"

import { motion } from "framer-motion"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  animated?: boolean
  color?: "light" | "dark"
  variant?: "primary" | "footer" 
}

export function Logo({ 
  className = "", 
  size = "md", 
  animated = true, 
  color = "dark",
  variant = "primary" 
}: LogoProps) {
  const sizes = {
    sm: { width: 120, height: 48 },
    md: { width: 160, height: 64 },
    lg: { width: 200, height: 80 },
  }

  const { width, height } = sizes[size]

  // Logic to switch between the main logo and the footer logo
  const imageSrc = variant === "footer" 
    ? "/images/portfolio/footerlogo.png" 
    : "/images/portfolio/Logo3.png"

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const LogoImage = (
    <img
      src={imageSrc}
      alt="Ahsan Art Logo"
      width={width}
      height={height}
      style={{
        display: "block",
        objectFit: "contain",
      }}
    />
  )

  if (animated) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate="visible"
        variants={logoVariants}
      >
        {LogoImage}
      </motion.div>
    )
  }

  return <div className={className}>{LogoImage}</div>
}

