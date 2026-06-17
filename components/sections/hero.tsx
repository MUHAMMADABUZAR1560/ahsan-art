"use client"

import Link from "next/link"
import { ArrowDown } from "lucide-react"

const services = [
  "Product Photography",
  "Product Videography",
  "UGC Videos",
  "Amazon Content",
  "Food Photography",
  "E-Commerce Solutions",
]

const stats = [
  { value: "7+",   label: "Years in E-Commerce" },
  { value: "200+", label: "Projects" },
  { value: "100+", label: "Clients" },
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
      <div className="absolute inset-0 z-0" style={{
        background: "linear-gradient(155deg,#080515 0%,#0e0825 35%,#160c38 62%,#0c0820 100%)",
      }} />
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: [
          "linear-gradient(rgba(139,92,246,0.07) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(139,92,246,0.07) 1px, transparent 1px)",
        ].join(","),
        backgroundSize: "52px 52px",
      }} />
      <div className="absolute inset-0 z-0" style={{
        background: "radial-gradient(ellipse 55% 65% at 66% 48%, rgba(112,40,255,0.42) 0%, rgba(80,20,180,0.16) 50%, transparent 74%)",
      }} />
      <div className="absolute bottom-0 inset-x-0 h-28 z-0" style={{
        background: "linear-gradient(to top, rgba(8,5,21,0.85), transparent)",
      }} />

      {/* ══════════════════════════════
          DESKTOP  (lg +)
      ══════════════════════════════ */}
      <div className="absolute inset-0 z-10 hidden lg:flex flex-col">

        {/* TOP ROW — tagline only, no buttons */}
        <div className="flex items-start px-12 lg:px-20 pt-28 lg:pt-32">
          <p className="text-white/55 text-[13px] font-medium leading-relaxed tracking-wide">
            Faisalabad&apos;s E-Commerce<br />Content Studio
          </p>
        </div>

        {/* MIDDLE ROW — frosted glass services panel LEFT  +  headline RIGHT */}
        <div className="flex flex-1 items-center gap-10 xl:gap-16 pl-0 pr-12 lg:pr-20">

          {/* ── FROSTED GLASS LEFT PANEL ── */}
          <div
            className="self-stretch flex-shrink-0 flex flex-col justify-center"
            style={{
              width: "clamp(260px, 22vw, 340px)",
              backdropFilter: "blur(22px) saturate(160%)",
              WebkitBackdropFilter: "blur(22px) saturate(160%)",
              background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(139,92,246,0.05) 100%)",
              borderRight: "1px solid rgba(255,255,255,0.09)",
              /* Soft right-edge fade so panel dissolves into background */
              WebkitMaskImage: "linear-gradient(to right, black 75%, transparent 100%)",
              maskImage: "linear-gradient(to right, black 75%, transparent 100%)",
            }}
          >
            <div className="px-10 lg:px-14 py-12">
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/22 mb-8">
                Our Services
              </p>

              {/* Services list with animated connecting line */}
              <div className="relative">
                {/* Animated glowing beam running down through all dots */}
                <div
                  className="absolute top-[6px] bottom-[6px] left-[5px] w-[1px]"
                  style={{
                    background: "rgba(168,85,247,0.15)",
                    zIndex: 0,
                  }}
                >
                  <div
                    className="absolute inset-x-0"
                    style={{
                      background: "linear-gradient(to bottom, transparent, #a855f7, #c084fc, transparent)",
                      backgroundSize: "100% 40%",
                      height: "100%",
                      animation: "beamTravel 2.4s ease-in-out infinite",
                    }}
                  />
                </div>

                <ul className="flex flex-col gap-[22px] relative">
                  {services.map((svc, i) => (
                    <li key={svc} className="flex items-center gap-4 relative z-10">
                      {/* Dot — glows when beam passes */}
                      <span
                        className="flex-shrink-0 w-[11px] h-[11px] rounded-full border-2 border-white/40 bg-transparent"
                        style={{
                          boxShadow: "0 0 0 0 rgba(168,85,247,0)",
                          animation: `dotGlow 2.4s ease-in-out infinite`,
                          animationDelay: `${i * 0.4}s`,
                        }}
                      />
                      <span className="text-white/70 text-[15px] font-medium leading-snug">
                        {svc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-10 text-[10px] text-white/18 font-mono tracking-widest">
                {new Date().getFullYear()}
              </p>
            </div>
          </div>

          {/* ── HEADLINE ── */}
          <div className="flex-1 flex flex-col gap-14">
            <h1
              className="font-bold text-white leading-[1.02] tracking-[-0.02em]"
              style={{ fontSize: "clamp(4rem, 8.5vw, 9rem)" }}
            >
              Visuals That
              <br />
              Build{" "}
              <em style={{ fontStyle: "italic", color: "#a855f7", fontWeight: 700 }}>
                Brands
              </em>
            </h1>

            {/* STATS — centered under headline */}
            <div className="flex items-end gap-16 xl:gap-24">
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="font-bold text-white leading-none"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white/35">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW — scroll only */}
        <div className="flex items-end justify-end px-12 lg:px-20 pb-12 lg:pb-16">
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
          TABLET  (md–lg)
      ══════════════════════════════ */}
      <div className="absolute inset-0 z-10 hidden md:flex lg:hidden flex-col justify-between px-8 pt-28 pb-10">
        <p className="text-white/50 text-[12px] font-medium leading-snug">
          Faisalabad&apos;s E-Commerce<br />Content Studio
        </p>
        <h1 className="font-bold text-white leading-[1.02] tracking-tight text-[4rem]">
          Visuals That<br />
          Build <em style={{ fontStyle: "italic", color: "#a855f7", fontWeight: 700 }}>Brands</em>
        </h1>
        <div className="flex items-end gap-12">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-white leading-none">{s.value}</div>
              <div className="text-[8px] font-bold uppercase tracking-widest text-white/35 mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════
          MOBILE  (< md)
      ══════════════════════════════ */}
      <div className="absolute inset-0 z-10 flex md:hidden flex-col justify-between">
        <div className="px-5 pt-24">
          <p className="text-white/50 text-[11px] font-medium leading-snug">
            Faisalabad&apos;s E-Commerce<br />Content Studio
          </p>
        </div>

        <div className="flex-1 flex items-center px-5">
          <h1
            className="font-bold text-white leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(3rem, 13vw, 4.5rem)" }}
          >
            Visuals That<br />
            Build{" "}
            <em style={{ fontStyle: "italic", color: "#a855f7", fontWeight: 700 }}>Brands</em>
          </h1>
        </div>

        <div className="px-5 py-6" style={{
          background: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}>
          <div className="flex items-center gap-8 mb-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-xl font-bold text-white leading-none">{s.value}</div>
                <div className="text-[8px] font-bold uppercase tracking-widest text-white/35 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="w-full flex items-center justify-center bg-white text-black font-bold py-3 rounded-full text-sm"
          >
            Start a Project
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════
          KEYFRAMES
      ══════════════════════════════ */}
      <style>{`
        @keyframes heroScrollBounce {
          0%, 100% { transform: translateY(0);  opacity: 0.28; }
          50%       { transform: translateY(5px); opacity: 0.55; }
        }

        /* Glowing beam travels from top dot to bottom dot, loops */
        @keyframes beamTravel {
          0%   { background-position: 0%   -100%; }
          100% { background-position: 0%    200%; }
        }

        /* Each dot pulses with a glow when beam reaches it */
        @keyframes dotGlow {
          0%, 100% {
            border-color: rgba(255,255,255,0.3);
            box-shadow: 0 0 0 0 rgba(168,85,247,0);
          }
          50% {
            border-color: #a855f7;
            box-shadow: 0 0 8px 3px rgba(168,85,247,0.55);
          }
        }
      `}</style>
    </section>
  )
}