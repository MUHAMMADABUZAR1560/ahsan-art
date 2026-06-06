"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Plus, Minus, ArrowUpRight } from "lucide-react"
import { useRef } from "react"

const faqs = [
  {
    question: "Do I need to send my products to your studio?",
    answer: "Yes, you can ship your products directly to our studio in Faisalabad. Once the shoot is completed, we can either return the products to you (shipping covered by you) or keep them for future shoots if we have an ongoing partnership."
  },
  {
    question: "How long does a typical project take?",
    answer: "For most standard product photography or videography projects, our turnaround time is 7-10 business days after we receive the products and finalize the brief. Larger campaigns may take 2-3 weeks."
  },
  {
    question: "Do you provide models and props?",
    answer: "Yes! We have access to a variety of models, hand models, and a vast inventory of props. If your shoot requires specific, highly customized props or specific model demographics, we will source them and include the cost in the project estimate."
  },
  {
    question: "Do I get full rights to the images/videos?",
    answer: "Absolutely. Once the final invoice is paid, you receive full commercial usage rights in perpetuity for all finalized deliverables. You can use them on your website, social media, ads, Amazon, and print."
  },
  {
    question: "Can we shoot at our location instead of your studio?",
    answer: "Yes, we offer on-location shoots for lifestyle campaigns, restaurants, and larger brand videos. Travel and equipment transport fees may apply depending on the location."
  },
  {
    question: "What is your revision policy?",
    answer: "We include one round of minor revisions (such as color grading tweaks or minor edit changes) in our standard packages. Major reshoots due to a change in the original brief will be billed separately."
  }
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
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
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? "bg-secondary border-primary/20" : "bg-transparent border-border/50 hover:border-border"
                }`}
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
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 text-muted-foreground text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <Link
            href="/faq"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            See all frequently asked questions
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
