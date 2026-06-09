import type { Metadata } from "next"
import { FAQPageClient } from "./faq-client"

export const metadata: Metadata = {
  title: 'FAQ | Common Questions About Our Photography Services',
  description: "Frequently asked questions about Ahsan Art's product photography, videography, Amazon content, UGC videos, and food photography services in Faisalabad.",
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
    { "@type": "Question", "name": "Do I need to send my products to your studio?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can ship your products directly to our studio in Faisalabad. Once the shoot is completed, we can either return the products to you (shipping covered by you) or keep them for future shoots if we have an ongoing partnership." } },
    { "@type": "Question", "name": "How long does a typical project take?", "acceptedAnswer": { "@type": "Answer", "text": "For most standard product photography or videography projects, our turnaround time is 7-10 business days after we receive the products and finalize the brief. Larger campaigns may take 2-3 weeks." } },
    { "@type": "Question", "name": "Do you provide models and props?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We have access to a variety of models, hand models, and a vast inventory of props. If your shoot requires specific, highly customized props or specific model demographics, we will source them and include the cost in the project estimate." } },
    { "@type": "Question", "name": "Do I get full rights to the images/videos?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Once the final invoice is paid, you receive full commercial usage rights in perpetuity for all finalized deliverables. You can use them on your website, social media, ads, Amazon, and print." } },
    { "@type": "Question", "name": "Can we shoot at our location instead of your studio?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer on-location shoots for lifestyle campaigns, restaurants, and larger brand videos. Travel and equipment transport fees may apply depending on the location." } },
    { "@type": "Question", "name": "What is your revision policy?", "acceptedAnswer": { "@type": "Answer", "text": "We include one round of minor revisions (such as color grading tweaks or minor edit changes) in our standard packages. Major reshoots due to a change in the original brief will be billed separately." } }
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
