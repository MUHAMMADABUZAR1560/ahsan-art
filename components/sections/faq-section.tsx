"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Plus, Minus, ArrowUpRight } from "lucide-react"

const faqs = [
  {
    question: "How much does product photography cost in Faisalabad?",
    answer: "Product photography pricing depends on the type of image and the amount of work involved. At Ahsan Art Creative Studio, photography typically ranges from Rs. 500 to Rs. 2,700 per image. Simple white background images are more affordable, while lifestyle, creative, and Amazon listing images usually require more planning and editing."
  },
  {
    question: "How much does a product video cost in Faisalabad?",
    answer: "Our white background product videos start from Rs. 7,500, while theme-based product videos start from Rs. 8,500. If you’re looking for UGC-style content, plain background UGC videos start from Rs. 9,500 and theme-based UGC videos start from Rs. 17,000 depending on the concept, scripting, and production requirements."
  },
  {
    question: "How long does a typical product photography or videography project take?",
    answer: "Most photography projects are delivered within 2-4 working days after the shoot. Product videos generally take 3-7 working days depending on the complexity, editing requirements, and number of deliverables. We always share a timeline before starting the project so expectations are clear from day one."
  },
  {
    question: "Can I visit your studio, or do I need to send products by courier?",
    answer: "Both options are available. Our studio is located in Faisalabad, opposite Gatwala Commercial Hub, and clients are welcome to visit by appointment. If you’re outside Faisalabad, you can simply courier your products to us and we’ll handle the complete shoot and return process."
  },
  {
    question: "What is the difference between a UGC video and a regular product video?",
    answer: "A regular product video focuses on showcasing the product through professional shots, details, and visuals. A UGC (User Generated Content) video is designed to feel more natural and relatable, usually featuring a person using or talking about the product. UGC content often performs exceptionally well for Facebook and Instagram ads because it feels more authentic to viewers."
  },
  {
    question: "Do you provide raw photos or unedited video footage?",
    answer: "Our standard packages include professionally edited final files ready for use on your website, social media, or advertisements. Raw files and unedited footage are generally not included because they don’t represent the final quality standard of our work. If a project specifically requires raw assets, this can be discussed before production begins."
  },
  {
    question: "How many revisions are included in your service?",
    answer: "We include reasonable revisions to ensure the final content matches the agreed brief. Most projects are approved within one or two revision rounds because the planning process happens before the shoot. Major changes that fall outside the approved scope may require additional charges."
  },
  {
    question: "Is the content optimized for Instagram, Facebook Ads, Shopify, and websites?",
    answer: "Yes. We don’t create content with a one-size-fits-all approach. Before every project, we identify where the content will be used—whether it’s Instagram, Facebook Ads, Shopify, Amazon, Daraz, or your website—and create visuals accordingly so they perform better on that specific platform."
  },
  {
    question: "Do you work with small businesses or brands that only have one product?",
    answer: "Yes. Many successful brands start with a single product. Whether you’re launching your first item or managing a large catalog, we can help create professional visuals that build trust and make your brand look established from day one."
  },
  {
    question: "What makes Ahsan Art Creative Studio different from other photography studios in Faisalabad?",
    answer: "Most studios focus on taking good-looking photos. We focus on creating content that supports sales. Before every project, we review your current content, identify visual gaps, and plan photography and videography around your brand, platform, and customer journey. That’s why many ecommerce businesses trust us not just as photographers, but as long-term content partners."
  },
  {
    question: "How do I book a product photography or videography project?",
    answer: "Getting started is simple. Contact us on 0308-1122525, send a message on Instagram @ahsanart.studio, or email ahsanart.creativestudio@gmail.com. We’ll discuss your products, goals, required deliverables, timeline, and provide a clear quotation before moving forward."
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
