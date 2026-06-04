"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
  {
    author: "Ali Khan",
    date: "2 months ago",
    content: "Ahsan and his team are phenomenal. They shot our entire summer catalog and the results exceeded our expectations. The lighting, the composition, everything was perfectly aligned with our brand guidelines.",
    rating: 5
  },
  {
    author: "Sara Ahmed",
    date: "4 months ago",
    content: "Highly recommend Ahsan Art Creative Studio for e-commerce videography. They understood our vision immediately and delivered high-converting UGC reels for our Instagram ads.",
    rating: 5
  },
  {
    author: "Usman Tariq",
    date: "1 month ago",
    content: "We hired them for Amazon A+ content and product listing images. Our click-through rate jumped by 30% within weeks of updating the visuals. Worth every penny.",
    rating: 5
  },
  {
    author: "Zainab Raza",
    date: "6 months ago",
    content: "Professional, timely, and incredibly talented. They styled and shot our new food menu and the photos look absolutely mouth-watering. Will definitely work with them again.",
    rating: 5
  }
]

// Custom Google Icon SVG
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export function GoogleReviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <GoogleIcon />
              <span className="text-sm font-bold tracking-widest uppercase text-foreground">Reviews</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              What Our <span className="italic text-primary">Clients</span> Say
            </h2>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex items-center gap-4 bg-background px-6 py-4 rounded-2xl border border-border/50"
          >
             <div className="text-4xl font-bold text-foreground">5.0</div>
             <div className="flex flex-col gap-1">
                <div className="flex text-yellow-500">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className="w-4 h-4 fill-current" />
                   ))}
                </div>
                <div className="text-xs text-muted-foreground font-medium">Based on 40+ reviews</div>
             </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-background p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors duration-300 flex flex-col h-full"
            >
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-8">
                "{review.content}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-foreground">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">{review.author}</div>
                  <div className="text-xs text-muted-foreground">{review.date}</div>
                </div>
                <div className="ml-auto">
                  <GoogleIcon />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
