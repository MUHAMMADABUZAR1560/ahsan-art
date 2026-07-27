"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Play, Instagram, ExternalLink } from "lucide-react"
import Link from "next/link"

type Reel = {
  id: string
  media_type: string
  media_url: string
  thumbnail_url?: string
  caption?: string
  permalink?: string
}

const FALLBACK_REELS: Reel[] = [
  { id: '1', media_type: 'VIDEO', media_url: 'https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575368/a2_tc7xlt.mp4', thumbnail_url: 'https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575368/a2_tc7xlt.jpg', caption: 'Skincare Texture', permalink: '#' },
  { id: '2', media_type: 'VIDEO', media_url: 'https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575368/a2_tc7xlt.mp4', thumbnail_url: 'https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575418/1_c8da7s.jpg', caption: 'Product Unboxing', permalink: '#' },
  { id: '3', media_type: 'VIDEO', media_url: 'https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575368/a2_tc7xlt.mp4', thumbnail_url: 'https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883470/1_ophv2w.jpg', caption: 'UGC Testimonial', permalink: '#' },
  { id: '4', media_type: 'VIDEO', media_url: 'https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575368/a2_tc7xlt.mp4', thumbnail_url: 'https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578569/1_oa9m7u.jpg', caption: 'Amazon Video Ad', permalink: '#' },
]

export function ReelsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })
  const [reels, setReels] = useState<Reel[]>(FALLBACK_REELS)
  const [isLive, setIsLive] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/instagram-reels')
      .then(res => res.json())
      .then(data => {
        if (data.reels && data.reels.length > 0) {
          setReels(data.reels.slice(0, 4))
          setIsLive(data.source === 'instagram')
        }
      })
      .catch(() => { /* keep fallback */ })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary/30 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Reels &amp; UGC Content
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-muted-foreground max-w-md text-sm md:text-base">
              High-converting vertical video content designed for TikTok, Instagram Reels, and Shorts.
            </p>
            {isLive && (
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                <Instagram className="w-3 h-3" />
                Live from Instagram
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              </span>
            )}
          </div>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-4 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0 md:mx-0 md:px-0 no-scrollbar">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              style={{
                borderRadius: "8px",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.1), 0px 6px 12px rgba(0,0,0,0.08)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                position: "relative",
              }}
              className="relative flex-shrink-0 w-[45vw] sm:w-[40vw] md:w-auto aspect-[9/16]"
            >
              <div className="absolute inset-0" style={{ borderRadius: "7px", overflow: "hidden" }}>
                <video
                  src={reel.media_url}
                  poster={reel.thumbnail_url}
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => {
                    e.currentTarget.pause()
                    e.currentTarget.currentTime = 0
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top: Instagram link if live */}
                  {isLive && reel.permalink && reel.permalink !== '#' && (
                    <Link
                      href={reel.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-end w-9 h-9 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </Link>
                  )}

                  {/* Bottom: Play + Caption */}
                  <div className="flex flex-col justify-end mt-auto">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/40 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-5 h-5 text-white fill-white translate-x-0.5" />
                    </div>
                    {reel.caption && (
                      <h3 className="text-white font-serif font-bold text-lg md:text-xl line-clamp-2">
                        {reel.caption.split('\n')[0].substring(0, 40)}
                      </h3>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
