import type { Metadata } from "next"
import { FAQPageClient } from "./faq-client"

export const metadata: Metadata = {
  title: 'FAQ | Common Questions About Our Photography Services',
  description: "Frequently asked questions about product photography, videography, UGC videos, and e-commerce content services at Ahsan Art Creative Studio.",
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
    { "@type": "Question", "name": "Do I need to send my products to your studio?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can ship your products directly to our studio in Faisalabad, or drop them off in person. Once the shoot is completed, we return the products to you (return shipping is covered by the client), or we can safely hold them for future shoots if you're on an ongoing content package." } },
    { "@type": "Question", "name": "Can we shoot at our location instead of your studio?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, on-location shoots are available for select services. On-location shoots are quoted separately based on distance, setup time, and equipment needed — mention this when requesting your quote." } },
    { "@type": "Question", "name": "What condition should my products be in when I ship them?", "acceptedAnswer": { "@type": "Answer", "text": "Products should be clean, undamaged, and packed securely to avoid transit damage. For clothing, please steam or iron items beforehand where possible — this saves shoot-day time and keeps your final images crisp." } },
    { "@type": "Question", "name": "Do you provide models and props?", "acceptedAnswer": { "@type": "Answer", "text": "We maintain an in-house prop and background library for most product categories at no extra cost. We do not offer model photography for standard product shoots. For UGC (user-generated content) videos, male models are available — currently the only model option we offer, so mention this at quoting stage if your UGC concept requires one." } },
    { "@type": "Question", "name": "How long does a typical project take?", "acceptedAnswer": { "@type": "Answer", "text": "Standard turnaround is 5–7 working days from the day we receive both your products and confirmed payment. Larger catalogs or multi-category shoots may take longer — we'll confirm an exact delivery date in your quotation before the shoot begins." } },
    { "@type": "Question", "name": "Do you offer rush/urgent delivery?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, rush/urgent delivery is available for an additional 20% of the total project cost. Let us know upfront if you have a launch deadline so we can prioritize your shoot." } },
    { "@type": "Question", "name": "How will I receive my final files?", "acceptedAnswer": { "@type": "Answer", "text": "All final images and videos are delivered via a Google Drive link, accessible from any device. Files remain available for download for 30 days after delivery." } },
    { "@type": "Question", "name": "How much does a shoot cost?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing depends on the product category, number of items, background type (white/theme-based), and whether photography, video, or UGC content is included. Photography starts at Rs. 700 per product, videography starts at Rs. 7,500 for a white-background video and Rs. 8,500+ for theme-based content. Send us your product details and requirements and we'll share a custom quotation — most quotes are ready within a few hours." } },
    { "@type": "Question", "name": "Do I need to pay in advance?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we require an advance payment to confirm and schedule your shoot slot. The remaining balance (per your agreed terms) is due before final files are released." } },
    { "@type": "Question", "name": "What payment methods do you accept?", "acceptedAnswer": { "@type": "Answer", "text": "We accept bank transfer as well as mobile payment methods including Easypaisa and JazzCash. Payment details are shared during quotation and invoicing." } },
    { "@type": "Question", "name": "Can I cancel or reschedule my shoot?", "acceptedAnswer": { "@type": "Answer", "text": "Shoots can be rescheduled with at least 24 hours' notice at no extra charge. If a shoot is cancelled after products have already been received or the shoot date confirmed, the advance payment is non-refundable, as it reserves studio time and resources." } },
    { "@type": "Question", "name": "Do I get full rights to the images/videos?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Once final payment is received, you get full commercial usage rights to all delivered images and videos — for your website, marketplace listings, social media, and paid advertising, with no additional licensing fees. Ahsan Art may showcase select final work in our own portfolio and social media unless you request otherwise in writing." } },
    { "@type": "Question", "name": "Can I request the raw, unedited files?", "acceptedAnswer": { "@type": "Answer", "text": "Raw files are not included by default, as pricing covers the full shoot-to-edit process. Raw file delivery can be arranged separately for an additional fee if needed." } },
    { "@type": "Question", "name": "What is your revision policy?", "acceptedAnswer": { "@type": "Answer", "text": "Every project includes 1–2 rounds of revisions (minor color, crop, or retouching adjustments) within 3 days of delivery, at no extra cost. Requests for a full reshoot or additional products beyond the original brief are treated as a new booking." } },
    { "@type": "Question", "name": "What if I'm not happy with the final results?", "acceptedAnswer": { "@type": "Answer", "text": "We review your reference images and requirements with you before the shoot to minimize surprises. If the final output doesn't match the agreed brief, we'll revise it at no cost within our standard revision window." } },
    { "@type": "Question", "name": "What services do you offer?", "acceptedAnswer": { "@type": "Answer", "text": "Product photography, product videography, UGC videos, Amazon-ready content and A+ layouts, food photography, and full e-commerce content packages — for local and national brands." } },
    { "@type": "Question", "name": "Do you work with clients outside Faisalabad?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we work with clients across Pakistan. Ship your products to our studio and we handle the shoot, edit, and delivery online via Google Drive, no matter where you're located." } },
    { "@type": "Question", "name": "Can I be present during my shoot?", "acceptedAnswer": { "@type": "Answer", "text": "While not required, you're welcome to join in person or over a video call for real-time feedback, especially for larger or customized shoots." } },
    { "@type": "Question", "name": "Do you offer ongoing monthly content packages?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer monthly retainer packages for brands that need a steady stream of product photos, videos, UGC, and social media assets — more cost-effective than one-off bookings." } }
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
