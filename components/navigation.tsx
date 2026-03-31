"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "./logo"
import { Menu, X, ArrowRight } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/behind-the-scenes", label: "BTS" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHover, setActiveHover] = useState<string | null>(null)
  const pathname = usePathname()


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background ${
          isScrolled
  ? "top-4 mx-auto w-[95%] max-w-5xl rounded-full bg-background/80 backdrop-blur-md border border-white/10 shadow-lg"
  : "top-0 w-full bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-50 group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Logo 
                  size="sm" 
                  animated={false} 
                  color={isScrolled || isOpen ? "dark" : "dark"} 
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setActiveHover(item.href)}
                  onMouseLeave={() => setActiveHover(null)}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={`relative z-10 text-sm font-medium transition-colors duration-300 text-stone-400 ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-foreground/80 group-hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                  
                  {/* Hover background */}
                  <AnimatePresence>
                    {activeHover === item.href && pathname !== item.href && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute inset-0 bg-secondary/80 rounded-full"
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Active indicator */}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}

              {/* Divider */}
              <div className="w-px h-6 bg-border mx-4" />

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="group relative flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-medium overflow-hidden"
                >
                  <span className="relative z-10">Start a Project</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <motion.div
                    className="absolute inset-0 bg-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 p-3 -mr-3"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5 flex flex-col justify-center">
                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 0 : -4,
                  }}
                  className="absolute w-full h-0.5 bg-foreground rounded-full origin-center"
                />
                <motion.span
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    scaleX: isOpen ? 0 : 1,
                  }}
                  className="absolute w-full h-0.5 bg-foreground rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? 0 : 4,
                  }}
                  className="absolute w-full h-0.5 bg-foreground rounded-full origin-center"
                />
              </div>
            </motion.button>
          </div>
        </nav>

        {/* Animated bottom border on scroll */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-center"
        />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background"
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative flex flex-col h-full pt-24 pb-8 px-6"
            >
              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`group flex items-center justify-between py-4 border-b border-border/50 ${
                        pathname === item.href ? "text-primary" : "text-foreground"
                      }`}
                    >
                      <span className="text-3xl font-serif font-semibold tracking-tight group-hover:text-primary transition-colors">
                        {item.label}
                      </span>
                      <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileHover={{ x: 5, opacity: 1 }}
                        className="text-primary"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}


              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="pt-8"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-foreground text-background py-4 rounded-2xl text-lg font-medium"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </Link>

                {/* Social/Contact Info */}
                <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <a href="mailto:hello@ahsanart.com" className="hover:text-primary transition-colors">
                    hello@ahsanart.com
                  </a>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
