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

  // Logo3_r5awnk = BLACK logo (for light/white backgrounds)
  // footerlogo_ucwjlu = WHITE logo (for dark backgrounds like footer/hero)
  const blackLogoUrl = "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575375/Logo3_r5awnk.png"
  const whiteLogoUrl = "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575381/footerlogo_ucwjlu.png"

  // showBlack = true → show black logo; false → show white logo
  const showBlack = color === "dark" && variant !== "footer"

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
      {/* BLACK logo — visible on light/white backgrounds */}
      <img
        src={blackLogoUrl}
        alt="Ahsan Art Creative Studio Logo"
        width={width}
        height={height}
        style={{
          position: "absolute",
          objectFit: "contain",
          opacity: showBlack ? 1 : 0,
          transition: "opacity 300ms ease",
        }}
      />
      {/* WHITE logo — visible on dark backgrounds (footer / hero) */}
      <img
        src={whiteLogoUrl}
        alt="Ahsan Art Creative Studio Logo"
        width={width}
        height={height}
        style={{
          position: "absolute",
          objectFit: "contain",
          opacity: showBlack ? 0 : 1,
          transition: "opacity 300ms ease",
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

