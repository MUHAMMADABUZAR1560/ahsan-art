"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Plus, Minus, ArrowUpRight } from "lucide-react"

const faqs = [
  {
    question: "Do I need to send my products to your studio?",
    answer: "Yes, you can ship your products directly to our studio at Opposite Gatwala Commercial Hub, Chak No 199 Rb, Faisalabad. Once the shoot is done, we return them to you (shipping on your end) or store them for ongoing projects."
  },
  {
    question: "How long does a typical project take?",
    answer: "Most product photography shoots are completed within 1–2 days. Edited images are delivered within 2–5 business days. For video projects, editing takes 3–7 days. Rush delivery is available."
  },
  {
    question: "Do you provide models and props?",
    answer: "Yes. We have an in-house props collection and can arrange professional models for lifestyle shoots. Model and prop costs are discussed before the shoot."
  },
  {
    question: "Do I get full rights to the images and videos?",
    answer: "Yes — you get 100% full commercial rights to every image and video. Use them on your website, Amazon, Daraz, social media, packaging, anywhere. No licensing fees, no restrictions."
  },
  {
    question: "Can we shoot at our location instead of your studio?",
    answer: "Yes, on-location shoots are available. We bring professional lighting and equipment to your site. Travel fees may apply depending on distance."
  },
  {
    question: "What is your revision policy?",
    answer: "We include 2 rounds of revisions on all editing. This covers color corrections, cropping, and minor retouching. Additional rounds available for a small fee."
  }
]

export function FAQSection() {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { rootMargin: "-80px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-12 max-w-4xl">
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-primary" />
            Common Questions
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Everything you need to know before working with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "bg-secondary border-primary/20" : "bg-transparent border-border/50 hover:border-border"
                }`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 500ms ease ${index * 80}ms, transform 500ms ease ${index * 80}ms, background-color 300ms, border-color 300ms`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-6 md:px-8 md:py-8 flex items-center justify-between gap-4"
                >
                  <h3 className={`text-base md:text-lg font-bold transition-colors ${isOpen ? "text-primary" : "text-foreground"}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                    isOpen ? "bg-primary border-primary" : "border-border"
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-foreground" />
                    )}
                  </div>
                </button>
                <div
                  className="transition-all duration-300 ease-in-out grid"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                  }}
                >
                  <div className="min-h-0">
                    <div className="px-6 pb-6 md:px-8 md:pb-8 text-muted-foreground text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Link */}
        <div
          className="mt-10 text-center transition-all duration-500"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "500ms",
          }}
        >
          <Link
            href="/faq"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            See all frequently asked questions
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
