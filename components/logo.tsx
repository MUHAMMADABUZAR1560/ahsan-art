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

  // Determine which logo URL to use based on the color prop or variant
  const darkLogoUrl = "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575381/footerlogo_ucwjlu.png"
  const lightLogoUrl = "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575375/Logo3_r5awnk.png"

  const isDarkLogo = variant === "footer" || color === "dark"

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any, 
      },
    },
  }

  const LogoImage = (
    <div className="relative flex items-center" style={{ width, height }}>
      {/* Light Logo (White text, green dots) */}
      <img
        src={lightLogoUrl}
        alt="Ahsan Art Creative Studio Logo"
        width={width}
        height={height}
        className={`absolute transition-opacity duration-300 ${isDarkLogo ? 'opacity-0' : 'opacity-100'}`}
        style={{
          objectFit: "contain",
        }}
      />
      {/* Dark Logo (Black text, green dots) */}
      <img
        src={darkLogoUrl}
        alt="Ahsan Art Creative Studio Logo"
        width={width}
        height={height}
        className={`absolute transition-opacity duration-300 ${isDarkLogo ? 'opacity-100' : 'opacity-0'}`}
        style={{
          objectFit: "contain",
        }}
      />
    </div>
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

