"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Play } from "lucide-react"

const reels = [
  {
    id: 1,
    title: "Skincare Texture",
    videoSrc: "https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575368/a2_tc7xlt.mp4", // Replace with actual video URL
    poster: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575368/a2_tc7xlt.jpg",
  },
  {
    id: 2,
    title: "Product Unboxing",
    videoSrc: "https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575368/a2_tc7xlt.mp4", // Replace with actual video URL
    poster: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575418/1_c8da7s.jpg",
  },
  {
    id: 3,
    title: "UGC Testimonial",
    videoSrc: "https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575368/a2_tc7xlt.mp4", // Replace with actual video URL
    poster: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774883470/1_ophv2w.jpg",
  },
  {
    id: 4,
    title: "Amazon Video Ad",
    videoSrc: "https://res.cloudinary.com/dhtktd4ka/video/upload/v1774575368/a2_tc7xlt.mp4", // Replace with actual video URL
    poster: "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774578569/1_oa9m7u.jpg",
  }
]

export function ReelsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Vertical Video
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Reels & <span className="text-primary italic">UGC</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm md:text-base">
            High-converting vertical video content designed for TikTok, Instagram Reels, and Shorts.
          </p>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-4 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0 md:mx-0 md:px-0 no-scrollbar">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex-shrink-0 w-[45vw] sm:w-[40vw] md:w-auto aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer bg-background"
            >
              <video
                src={reel.videoSrc}
                poster={reel.poster}
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onMouseOver={(e) => e.currentTarget.play()}
                onMouseOut={(e) => {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Play className="w-4 h-4 text-white fill-white translate-x-0.5" />
                </div>
                <h3 className="text-white font-serif font-bold text-lg md:text-xl">{reel.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
