"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Plus, Minus, ArrowUpRight } from "lucide-react"

const faqCategories = [
  {
    title: "Shipping & Products",
    items: [
      {
        question: "Do I need to send my products to your studio?",
        answer: "Yes, you can ship your products directly to our studio in Faisalabad, or drop them off in person. Once the shoot is completed, we return the products to you (return shipping is covered by the client), or we can safely hold them for future shoots if you're on an ongoing content package."
      },
      {
        question: "Can we shoot at our location instead of your studio?",
        answer: "Yes, on-location shoots are available for select services. On-location shoots are quoted separately based on distance, setup time, and equipment needed — mention this when requesting your quote."
      },
      {
        question: "What condition should my products be in when I ship them?",
        answer: "Products should be clean, undamaged, and packed securely to avoid transit damage. For clothing, please steam or iron items beforehand where possible — this saves shoot-day time and keeps your final images crisp."
      },
      {
        question: "Do you provide models and props?",
        answer: "We maintain an in-house prop and background library for most product categories at no extra cost. We do not offer model photography for standard product shoots. For UGC (user-generated content) videos, male models are available — currently the only model option we offer, so mention this at quoting stage if your UGC concept requires one."
      }
    ]
  },
  {
    title: "Turnaround Time",
    items: [
      {
        question: "How long does a typical project take?",
        answer: "Standard turnaround is 5–7 working days from the day we receive both your products and confirmed payment. Larger catalogs or multi-category shoots may take longer — we'll confirm an exact delivery date in your quotation before the shoot begins."
      },
      {
        question: "Do you offer rush/urgent delivery?",
        answer: "Yes, rush/urgent delivery is available for an additional 20% of the total project cost. Let us know upfront if you have a launch deadline so we can prioritize your shoot."
      },
      {
        question: "How will I receive my final files?",
        answer: "All final images and videos are delivered via a Google Drive link, accessible from any device. Files remain available for download for 30 days after delivery."
      }
    ]
  },
  {
    title: "Pricing & Booking",
    items: [
      {
        question: "How much does a shoot cost?",
        answer: "Pricing depends on the product category, number of items, background type (white/theme-based), and whether photography, video, or UGC content is included. Photography starts at Rs. 700 per product, videography starts at Rs. 7,500 for a white-background video and Rs. 8,500+ for theme-based content. Send us your product details and requirements and we'll share a custom quotation — most quotes are ready within a few hours."
      },
      {
        question: "Do I need to pay in advance?",
        answer: "Yes, we require an advance payment to confirm and schedule your shoot slot. The remaining balance (per your agreed terms) is due before final files are released."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept bank transfer as well as mobile payment methods including Easypaisa and JazzCash. Payment details are shared during quotation and invoicing."
      },
      {
        question: "Can I cancel or reschedule my shoot?",
        answer: "Shoots can be rescheduled with at least 24 hours' notice at no extra charge. If a shoot is cancelled after products have already been received or the shoot date confirmed, the advance payment is non-refundable, as it reserves studio time and resources."
      }
    ]
  },
  {
    title: "Usage Rights & Ownership",
    items: [
      {
        question: "Do I get full rights to the images/videos?",
        answer: "Yes. Once final payment is received, you get full commercial usage rights to all delivered images and videos — for your website, marketplace listings, social media, and paid advertising, with no additional licensing fees. Ahsan Art may showcase select final work in our own portfolio and social media unless you request otherwise in writing."
      },
      {
        question: "Can I request the raw, unedited files?",
        answer: "Raw files are not included by default, as pricing covers the full shoot-to-edit process. Raw file delivery can be arranged separately for an additional fee if needed."
      }
    ]
  },
  {
    title: "Revisions",
    items: [
      {
        question: "What is your revision policy?",
        answer: "Every project includes 1–2 rounds of revisions (minor color, crop, or retouching adjustments) within 3 days of delivery, at no extra cost. Requests for a full reshoot or additional products beyond the original brief are treated as a new booking."
      },
      {
        question: "What if I'm not happy with the final results?",
        answer: "We review your reference images and requirements with you before the shoot to minimize surprises. If the final output doesn't match the agreed brief, we'll revise it at no cost within our standard revision window."
      }
    ]
  },
  {
    title: "Services & Process",
    items: [
      {
        question: "What services do you offer?",
        answer: "Product photography, product videography, UGC videos, Amazon-ready content and A+ layouts, food photography, and full e-commerce content packages — for local and national brands."
      },
      {
        question: "Do you work with clients outside Faisalabad?",
        answer: "Yes, we work with clients across Pakistan. Ship your products to our studio and we handle the shoot, edit, and delivery online via Google Drive, no matter where you're located."
      },
      {
        question: "Can I be present during my shoot?",
        answer: "While not required, you're welcome to join in person or over a video call for real-time feedback, especially for larger or customized shoots."
      },
      {
        question: "Do you offer ongoing monthly content packages?",
        answer: "Yes, we offer monthly retainer packages for brands that need a steady stream of product photos, videos, UGC, and social media assets — more cost-effective than one-off bookings."
      }
    ]
  }
]

export function FAQSection() {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [openKey, setOpenKey] = useState<string | null>("0-0") // Open first item of first category by default

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

        <div className="space-y-12">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mt-8 mb-4 border-b border-border/50 pb-2">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((faq, itemIndex) => {
                  const uniqueKey = `${catIndex}-${itemIndex}`
                  const isOpen = openKey === uniqueKey
                  
                  return (
                    <div
                      key={itemIndex}
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen ? "bg-secondary border-primary/20" : "bg-transparent border-border/50 hover:border-border"
                      }`}
                      style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 500ms ease, transform 500ms ease, background-color 300ms, border-color 300ms",
                      }}
                    >
                      <button
                        onClick={() => setOpenKey(isOpen ? null : uniqueKey)}
                        className="w-full text-left px-6 py-6 md:px-8 md:py-8 flex items-center justify-between gap-4"
                      >
                        <h4 className={`text-base md:text-lg font-bold transition-colors ${isOpen ? "text-primary" : "text-foreground"}`}>
                          {faq.question}
                        </h4>
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
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div
          className="mt-12 text-center transition-all duration-500"
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
