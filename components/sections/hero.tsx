"use client"

import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"

const services = [
  "Product Photography",
  "Product Videography",
  "UGC Videos",
  "Amazon Content",
  "Food Photography",
  "E-Commerce Solutions",
]

const stats = [
  { value: "7+",    label: "Years in E-Commerce" },
  { value: "200+",  label: "Projects" },
  { value: "100+",  label: "Clients" },
]

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      aria-label="Hero"
    >
      {/* ══════════════════════════════
          LAYERED BACKGROUND
      ══════════════════════════════ */}

      {/* 1 · Base dark-purple solid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(155deg,#080515 0%,#0e0825 35%,#160c38 62%,#0c0820 100%)",
        }}
      />

      {/* 2 · Subtle grid mesh */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(139,92,246,0.07) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(139,92,246,0.07) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "52px 52px",
        }}
      />

      {/* 3 · Radial purple glow (centre-right) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 66% 48%, rgba(112,40,255,0.42) 0%, rgba(80,20,180,0.16) 50%, transparent 74%)",
        }}
      />

      {/* 4 · Soft bottom vignette */}
      <div
        className="absolute bottom-0 inset-x-0 h-28 z-0"
        style={{
          background: "linear-gradient(to top, rgba(8,5,21,0.85), transparent)",
        }}
      />

      {/* ══════════════════════════════
          DESKTOP CONTENT  (md +)
      ══════════════════════════════ */}
      <div className="absolute inset-0 z-10 hidden md:flex flex-col">

        {/* ── TOP ROW ── */}
        <div className="flex items-start justify-between px-12 lg:px-20 pt-28 lg:pt-32">

          {/* Tagline — two lines, no dash */}
          <p className="text-white/55 text-[13px] font-medium leading-relaxed tracking-wide">
            Faisalabad&apos;s E-Commerce<br />Content Studio
          </p>

          {/* CTA pair — View Our Work only (Start a Project lives in navbar) */}
          <div className="flex items-center gap-3">
            <Link
              href="/portfolio"
              className="group flex items-center gap-2 border border-white/25 text-white/85 hover:border-white/50 hover:bg-white/8 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="bg-white text-black hover:bg-white/90 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* ── MIDDLE ROW: services list + headline ── */}
        <div className="flex flex-1 items-center px-12 lg:px-20 gap-10 xl:gap-16">

          {/* Services list */}
          <div className="flex flex-col w-52 xl:w-60 flex-shrink-0">
            <p className="text-white/22 text-[9px] font-bold uppercase tracking-[0.28em] mb-6">
              Our Services
            </p>
            <ul className="flex flex-col gap-[18px]">
              {services.map((svc) => (
                <li key={svc} className="flex items-center gap-3.5">
                  {/* Plain white dot — matches sample exactly */}
                  <span className="w-[7px] h-[7px] rounded-full bg-white/50 flex-shrink-0" />
                  <span className="text-white/60 text-[13.5px] font-medium leading-snug">
                    {svc}
                  </span>
                </li>
              ))}
            </ul>
            {/* Year stamp at bottom of sidebar */}
            <p className="mt-10 text-[10px] text-white/18 font-mono tracking-widest">
              {new Date().getFullYear()}
            </p>
          </div>

          {/* Hero Headline */}
          <div className="flex-1">
            <h1
              className="font-bold text-white leading-[1.02] tracking-[-0.02em]"
              style={{ fontSize: "clamp(4.2rem, 8.8vw, 9rem)" }}
            >
              Visuals That
              <br />
              Build{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "#a855f7",
                  fontWeight: 700,
                }}
              >
                Brands
              </em>
            </h1>
          </div>
        </div>

        {/* ── BOTTOM ROW: stats + scroll ── */}
        <div className="flex items-end justify-between px-12 lg:px-20 pb-12 lg:pb-16">

          {/* Stats */}
          <div className="flex items-end gap-12 lg:gap-20">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl lg:text-5xl font-bold text-white leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-1.5 text-white/28 select-none">
            <span className="text-[8px] font-bold uppercase tracking-[0.22em]">Scroll</span>
            <ArrowDown
              className="w-3.5 h-3.5"
              style={{ animation: "heroScrollBounce 1.9s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          MOBILE CONTENT  (< md)
      ══════════════════════════════ */}
      <div className="absolute inset-0 z-10 flex md:hidden flex-col justify-between">

        {/* Top */}
        <div className="flex items-start justify-between px-5 pt-24">
          <p className="text-white/50 text-[11px] font-medium leading-snug">
            Faisalabad&apos;s E-Commerce<br />Content Studio
          </p>
          <Link
            href="/portfolio"
            className="group flex items-center gap-1.5 border border-white/20 text-white/80 px-4 py-2 rounded-full text-[11px] font-semibold"
          >
            View Work
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Headline */}
        <div className="flex-1 flex items-center px-5">
          <h1
            className="font-bold text-white leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(3rem, 13vw, 4.5rem)" }}
          >
            Visuals That
            <br />
            Build{" "}
            <em style={{ fontStyle: "italic", color: "#a855f7", fontWeight: 700 }}>
              Brands
            </em>
          </h1>
        </div>

        {/* Bottom strip */}
        <div
          className="px-5 py-6"
          style={{
            background: "rgba(0,0,0,0.35)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Service chips */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar mb-5 pb-0.5">
            {services.map((svc) => (
              <span
                key={svc}
                className="flex-shrink-0 text-[9px] font-medium text-white/45 bg-white/5 border border-white/10 rounded-full px-3 py-1 uppercase tracking-wider"
              >
                {svc}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mb-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-xl font-bold text-white leading-none">{s.value}</div>
                <div className="text-[8px] font-bold uppercase tracking-widest text-white/35 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            className="w-full flex items-center justify-center bg-white text-black font-bold py-3 rounded-full text-sm"
          >
            Start a Project
          </Link>
        </div>
      </div>

      {/* Keyframe for scroll bounce */}
      <style>{`
        @keyframes heroScrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.28; }
          50%       { transform: translateY(5px); opacity: 0.55; }
        }
      `}</style>
    </section>
  )
}