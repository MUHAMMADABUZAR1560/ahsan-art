"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"
import { ArrowRight } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/faq", label: "FAQ" },
  { href: "/behind-the-scenes", label: "BTS" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "top-4 mx-auto w-[95%] max-w-5xl rounded-full bg-background/80 backdrop-blur-md border border-white/10 shadow-lg"
            : "top-0 w-full bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-50 group">
              <Logo
                size="sm"
                animated={false}
                color="dark"
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-foreground/80 hover:text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right side CTA (Desktop) */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="group relative flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-medium overflow-hidden hover:bg-primary transition-colors duration-300 whitespace-nowrap"
              >
                <span className="relative z-10">Start a Project</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 p-3 -mr-3 active:scale-90 transition-transform duration-150"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5 flex flex-col justify-center">
                <span
                  className="absolute w-full h-0.5 bg-foreground rounded-full origin-center transition-transform duration-300"
                  style={{ transform: isOpen ? "translateY(0) rotate(45deg)" : "translateY(-4px)" }}
                />
                <span
                  className="absolute w-full h-0.5 bg-foreground rounded-full transition-opacity duration-300"
                  style={{ opacity: isOpen ? 0 : 1 }}
                />
                <span
                  className="absolute w-full h-0.5 bg-foreground rounded-full origin-center transition-transform duration-300"
                  style={{ transform: isOpen ? "translateY(0) rotate(-45deg)" : "translateY(4px)" }}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Bottom border on scroll */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-center transition-transform duration-300"
          style={{ transform: isScrolled ? "scaleX(1)" : "scaleX(0)" }}
        />
      </header>

      {/* Mobile Menu — pure CSS transitions, no Framer Motion */}
      <div
        className="fixed inset-0 z-40 lg:hidden pointer-events-none"
        style={{
          opacity: isOpen ? 1 : 0,
          transition: "opacity 250ms ease",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background" />

        {/* Content */}
        <div
          className="relative flex flex-col h-full pt-24 pb-8 px-6"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(-12px)",
            transition: "opacity 300ms ease 80ms, transform 300ms ease 80ms",
          }}
        >
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center justify-between py-4 border-b border-border/50 ${
                  pathname === item.href ? "text-primary" : "text-foreground"
                }`}
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateX(0)" : "translateX(-16px)",
                  transition: `opacity 300ms ease ${index * 40 + 120}ms, transform 300ms ease ${index * 40 + 120}ms`,
                }}
              >
                <span className="text-3xl font-serif font-semibold tracking-tight group-hover:text-primary transition-colors">
                  {item.label}
                </span>
                <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className="pt-8"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 300ms ease 450ms, transform 300ms ease 450ms",
            }}
          >
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full bg-foreground text-background py-4 rounded-2xl text-lg font-medium hover:bg-primary transition-colors duration-300"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Social/Contact Info */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="mailto:ahsanart.creativestudio@gmail.com" className="hover:text-primary transition-colors">
                ahsanart.creativestudio@gmail.com
              </a>
              <span className="w-1 h-1 rounded-full bg-border" />
              <a href="tel:+923081122525" className="hover:text-primary transition-colors">
                0308-1122525
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
