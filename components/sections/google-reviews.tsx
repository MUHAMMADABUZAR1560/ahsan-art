"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

interface Review {
  author_name: string;
  relative_time_description: string;
  text: string;
  rating: number;
  profile_photo_url: string;
}

// Custom Google Icon SVG
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex-shrink-0 w-[85vw] md:w-auto bg-background p-6 md:p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors duration-300 flex flex-col h-full">
      <div className="flex gap-1 text-yellow-500 mb-4">
        {[...Array(review.rating || 5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6 line-clamp-6">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto">
        {review.profile_photo_url ? (
          <img src={review.profile_photo_url} alt={review.author_name} className="w-9 h-9 rounded-full object-cover" />
        ) : (
          <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center font-bold text-foreground text-sm flex-shrink-0">
            {review.author_name.charAt(0)}
          </div>
        )}
        <div className="min-w-0">
          <div className="font-bold text-sm text-foreground truncate">{review.author_name}</div>
          <div className="text-xs text-muted-foreground">{review.relative_time_description}</div>
        </div>
        <div className="ml-auto">
          <GoogleIcon />
        </div>
      </div>
    </div>
  )
}

function ReviewSkeleton() {
  return (
    <div className="flex-shrink-0 w-[85vw] md:w-auto bg-background p-6 md:p-8 rounded-3xl border border-border/50 flex flex-col h-full animate-pulse">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 rounded-full bg-muted" />
        ))}
      </div>
      <div className="flex-grow mb-6 space-y-2">
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-5/6" />
        <div className="h-4 bg-muted rounded w-4/6" />
      </div>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-9 h-9 rounded-full bg-muted flex-shrink-0" />
        <div className="min-w-0 flex-1 space-y-2">
          <div className="h-3 bg-muted rounded w-24" />
          <div className="h-2 bg-muted rounded w-16" />
        </div>
      </div>
    </div>
  )
}

export function GoogleReviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })
  
  const [reviews, setReviews] = useState<Review[]>([])
  const [rating, setRating] = useState<number>(5.0)
  const [totalReviews, setTotalReviews] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews');
        if (res.ok) {
          const data = await res.json();
          setReviews(data.reviews || []);
          setRating(data.rating || 5.0);
          setTotalReviews(data.user_ratings_total || 0);
        }
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setLoading(false);
      }
    }
    
    if (isInView) {
      fetchReviews();
    }
  }, [isInView]);

  // Duplicate reviews for seamless infinite scroll
  const duplicated = [...reviews, ...reviews, ...reviews]

  return (
    <section ref={ref} className="py-20 md:py-32 bg-secondary/50 border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
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
            className="flex items-center gap-4 bg-background px-6 py-4 rounded-2xl border border-border/50 self-start md:self-auto"
          >
            <div className="text-4xl font-bold text-foreground">
              {loading ? "-" : rating.toFixed(1)}
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                {loading ? "Loading..." : `Based on ${totalReviews}+ reviews`}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Mobile: infinite auto-scroll marquee ── */}
      <div className="md:hidden relative">
        {/* Fade masks on left & right edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-secondary/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-secondary/50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 pl-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loading ? (
            [...Array(3)].map((_, i) => <ReviewSkeleton key={i} />)
          ) : (
            duplicated.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))
          )}
        </motion.div>
      </div>

      {/* ── Desktop: static grid ── */}
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {loading ? (
            [...Array(4)].map((_, i) => <ReviewSkeleton key={i} />)
          ) : (
            reviews.slice(0, 4).map((review, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))
          )}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://g.page/r/ahsanart/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-border/60 rounded-full px-6 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors group"
          >
            <GoogleIcon />
            View All Reviews on Google
            <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
