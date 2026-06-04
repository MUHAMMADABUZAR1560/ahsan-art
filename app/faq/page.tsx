import type { Metadata } from "next"
import { FAQPageClient } from "./faq-client"

export const metadata: Metadata = {
  title: "FAQ — Ahsan Art Creative Studio",
  description: "Answers to common questions about our product photography, videography, UGC, and Amazon content services. Based in Faisalabad, serving brands across Pakistan.",
  openGraph: {
    title: "FAQ — Ahsan Art Creative Studio",
    description: "Answers to common questions about product photography, videography and UGC services.",
    type: "website",
    url: "https://ahsanart.pk/faq",
  },
}

export default function FAQPage() {
  return <FAQPageClient />
}
