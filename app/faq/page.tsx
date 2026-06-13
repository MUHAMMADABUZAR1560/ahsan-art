import type { Metadata } from "next"
import { FAQPageClient } from "./faq-client"

export const metadata: Metadata = {
  title: 'FAQ | Common Questions About Our Photography Services',
  description: "Frequently asked questions about Ahsan Art Creative Studio's product photography, videography, Amazon content, UGC videos, and food photography services in Faisalabad.",
  alternates: { canonical: 'https://www.ahsanart.pk/faq' },
  openGraph: {
    title: 'FAQ | Common Questions About Our Photography Services',
    description: "Answers to common questions about product photography, videography, UGC, Amazon content and food photography services.",
    type: 'website',
    url: 'https://www.ahsanart.pk/faq',
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Do I need to send my products to your studio?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can ship your products directly to our studio at Gatwala Commercial Hub, Faisalabad. Once the shoot is done, we return them to you (shipping on your end) or store them for ongoing projects." } },
    { "@type": "Question", "name": "How long does a typical project take?", "acceptedAnswer": { "@type": "Answer", "text": "Most product photography shoots are completed within 1–2 days. Edited images are delivered within 2–5 business days. For video projects, editing takes 3–7 days. Rush delivery is available." } },
    { "@type": "Question", "name": "Do you provide models and props?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have an in-house props collection and can arrange professional models for lifestyle shoots. Model and prop costs are discussed before the shoot." } },
    { "@type": "Question", "name": "Do I get full rights to the images and videos?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — you get 100% full commercial rights to every image and video. Use them on your website, Amazon, Daraz, social media, packaging, anywhere. No licensing fees, no restrictions." } },
    { "@type": "Question", "name": "Can we shoot at our location instead of your studio?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, on-location shoots are available. We bring professional lighting and equipment to your site. Travel fees may apply depending on distance." } },
    { "@type": "Question", "name": "What is your revision policy?", "acceptedAnswer": { "@type": "Answer", "text": "We include 2 rounds of revisions on all editing. This covers color corrections, cropping, and minor retouching. Additional rounds available for a small fee." } }
  ]
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FAQPageClient />
    </>
  )
}
