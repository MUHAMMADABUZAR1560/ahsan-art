"use client"

import React from "react"
import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, Mail, Instagram, MapPin, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "WhatsApp",
    value: "0308-1122525",
    href: "https://wa.me/923081122525",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@ahsan.art1",
    href: "https://instagram.com/ahsan.art1",
  },
  {
    icon: Mail,
    title: "Email",
    value: "imahsan9876@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=imahsan9876@gmail.com",
  },
  {
    icon: MapPin,
    title: "Studio",
    value: "Ahsan Art, Faisalabad, Pakistan",
    href: "https://maps.app.goo.gl/Zck8ebMFn9yVKkha8",
  },
]

// Data from your pricing screenshots
const servicePrices = {
  "Product Photography": [
    { label: "E-commerce (White BG) - 500 PKR/image", value: "500-pkr-white-bg" },
    { label: "Clothing (Unstitched) - 700 PKR/image", value: "700-pkr-clothing" },
    { label: "Flat Lay Photography - 2,000 PKR/product", value: "2000-pkr-flatlay" },
    { label: "Lifestyle (No Props) - 1,000 PKR/image", value: "1000-pkr-lifestyle-no-props" },
    { label: "Lifestyle (With Props) - 1,800 PKR/image", value: "1800-pkr-lifestyle-props" },
    { label: "Group Image (White BG) - 1,000 PKR/image", value: "1000-pkr-group" },
  ],
  "Product Videography": [
    { label: "Single Product (White BG) - 5,000 PKR/video", value: "5000-pkr-video-single" },
    { label: "Group Video (Up to 5) - 8,000 PKR/video", value: "8000-pkr-video-group" },
    { label: "Theme-Based / Set Video - 8,000 PKR/video", value: "8000-pkr-video-theme" },
  ],
  "UGC Videos": [
    { label: "Standard Package", value: "ugc-standard" },
    { label: "Premium Package", value: "ugc-premium" },
  ],
  "Amazon Content": [
    { label: "Full Listing Optimization", value: "amazon-full" },
    { label: "Infographics Only", value: "amazon-infographics" },
  ],
  "Food Photography": [
    { label: "Standard Dish Shoot", value: "food-dish" },
    { label: "Menu Package", value: "food-menu" },
  ],
  "E-commerce Solutions": [
    { label: "Custom Solution", value: "ecom-custom" },
  ],
}

export default function ContactPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", service: "", budget: "", message: "" })
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-24 text-background bg-[rgba(255,255,255,1)]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-6"
            >
              <span className="w-8 h-px bg-primary" />
              Get in Touch
            </motion.span>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={heroInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight text-foreground"
              >
                Let's Create
                <br />
                Together
                <span className="inline-block w-3 h-3 rounded-full bg-primary ml-3 align-middle" />
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-8 text-lg md:text-xl max-w-2xl leading-relaxed text-foreground"
            >
              Ready to elevate your brand with stunning visuals? 
              Get in touch and let's discuss your project.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={formRef} className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Contact Information
              </h2>
              <p className="mt-4 text-muted-foreground">
                Reach out through any of these channels and we'll get back to you within 24 hours.
              </p>

              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                initial="hidden"
                animate={formInView ? "visible" : "hidden"}
                className="mt-10 space-y-6"
              >
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                      }
                    }}
                    className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-primary/10 transition-all group border border-transparent hover:border-primary/20"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.title}</div>
                      <div className="font-bold text-foreground">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="mt-10 p-6 bg-foreground text-background rounded-xl"
              >
                <h3 className="font-semibold text-lg">Working Hours</h3>
                <div className="mt-4 space-y-2 text-background/70">
                  <p>Saturday - Thursday: 11:00 AM - 6:00 PM</p>
                  <p>Thursday: 10:00 AM - 5:00 PM</p>
                  <p>Friday: Closed</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 bg-secondary rounded-2xl"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground">Thank You!</h3>
                  <p className="mt-4 text-muted-foreground max-w-md">
                    Your message has been received. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary rounded-xl border-2 border-transparent focus:border-primary focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary rounded-xl border-2 border-transparent focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value, budget: "" })}
                      className="w-full px-4 py-3 bg-secondary rounded-xl border-2 border-transparent focus:border-primary focus:outline-none transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      {Object.keys(servicePrices).map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Pricing Detail
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary rounded-xl border-2 border-transparent focus:border-primary focus:outline-none transition-colors appearance-none"
                    >
                      <option value="">
                        {formData.service ? "Select pricing option" : "Select a service first"}
                      </option>
                      {formData.service && servicePrices[formData.service as keyof typeof servicePrices].map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary rounded-xl border-2 border-transparent focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is your typical turnaround time?",
                a: "Turnaround time depends on the project scope. Standard projects are delivered within 5-7 business days, while rush orders can be accommodated with prior arrangement.",
              },
              {
                q: "Do you offer revisions?",
                a: "Yes! All packages include revisions to ensure you're completely satisfied with the final result. We work closely with you throughout the process.",
              },
              {
                q: "What file formats do you deliver?",
                a: "We deliver high-resolution images in JPEG and PNG formats, optimized for both web and print. RAW files are available upon request.",
              },
              {
                q: "Do you ship products back after the shoot?",
                a: "Yes, we safely store your products during the shoot and ship them back to you once the project is complete. Shipping costs are the client's responsibility.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-background rounded-xl"
              >
                <h3 className="font-semibold text-foreground text-lg">{faq.q}</h3>
                <p className="mt-2 text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Visit Our Studio
            </h2>
            <p className="mt-4 text-muted-foreground">
              Find us in the heart of Faisalabad. Click the marker to get directions.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-primary/10 shadow-2xl shadow-primary/5"
          >
            <iframe
              src="https://maps.google.com/maps?q=Ahsan%20Art%20@31.466756,73.192938&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ahsan Art Location Map"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
