"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { Instagram, MessageCircle, Mail, ArrowUpRight, MapPin } from "lucide-react"
import { studioInfo } from "@/lib/studio-info"

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/faq", label: "FAQ" },
    { href: "/behind-the-scenes", label: "BTS" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#photography", label: "Photography" },
    { href: "/services#videography", label: "Videography" },
    { href: "/services#ugc", label: "UGC Videos" },
    { href: "/services#amazon", label: "Amazon Content" },
    { href: "/services#food", label: "Food Photography" },
    { href: "/services#ecommerce", label: "E-Commerce" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-background/5">
      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-8 lg:pt-24 lg:pb-12">
        
        {/* Top Section: Brand & Bio */}
        <div className="max-w-xl mb-12">
          {/* UPDATED: Added variant="footer" to trigger the alternate logo */}
          <Logo size="md" animated={false} color="light" variant="footer" />
          
          <p className="mt-6 text-background/60 text-sm md:text-base leading-relaxed">
            Premium product photography and videography studio specializing in e-commerce and brand content.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { icon: Instagram, href: studioInfo.instagramLink },
              { icon: MessageCircle, href: studioInfo.phoneLink },
              { icon: Mail, href: `mailto:${studioInfo.email}` }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/5 border border-background/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
              >
                <social.icon className="w-5 h-5 text-background/70 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* 3x3 Grid Re-Architecture */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 lg:gap-8">
          
          {/* Column 1: Navigation */}
          <div className="col-span-1">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="col-span-1">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Get in Touch</h4>
            <div className="space-y-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-xs font-bold hover:scale-105 transition-transform"
              >
                Start a Project <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <div className="space-y-3">
                <p className="text-sm text-background/80 font-mono">{studioInfo.phone}</p>
                <p className="text-xs text-background/50 leading-relaxed max-w-[200px]">
                  {studioInfo.address}
                </p>
                <div className="pt-2">
                  <p className="text-xs font-bold text-background/70 uppercase tracking-wider mb-1">Hours</p>
                  <p className="text-xs text-background/50">Sat–Thu: 11:00 AM – 6:00 PM<br/>Friday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Map */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
             <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
              <MapPin className="w-3 h-3" /> Location
            </h4>
            <div className="relative w-full aspect-video md:aspect-square lg:aspect-video rounded-xl overflow-hidden border border-background/10 bg-background/5">
              <iframe
                src="https://maps.google.com/maps?q=31.46619448105869,73.19306313222438&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ahsan Art Creative Studio Location"
                className="w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] md:text-xs text-background/40">
            © {new Date().getFullYear()} Ahsan Art Creative Studio.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-background/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      {/* Large Moving Text Footer */}
      <div className="border-t border-background/5 py-8 md:py-12 overflow-hidden bg-background/[0.02]">
        <div
          style={{
            animation: "marquee-mobile 25s linear infinite",
            willChange: "transform",
          }}
          className="flex whitespace-nowrap select-none pointer-events-none"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[10vw] font-serif font-black text-background/[0.03] mx-4 uppercase">
              Ahsan Art Creative Studio • 
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}