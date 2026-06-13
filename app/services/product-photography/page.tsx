import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ArrowRight, Camera, Check, MessageCircle } from 'lucide-react';
import { Breadcrumb } from '@/components/breadcrumb';

export const metadata: Metadata = {
  title: 'Product Photography in Faisalabad | E-Commerce & Amazon',
  description: 'Professional product photography for e-commerce, Amazon, Daraz, and social media. Studio & lifestyle shots, white background, colour-accurate editing. Based in Faisalabad, Pakistan.',
  alternates: { canonical: 'https://www.ahsanart.pk/services/product-photography' },
  openGraph: {
    url: 'https://www.ahsanart.pk/services/product-photography',
    title: 'Product Photography in Faisalabad | Ahsan Art Creative Studio',
    description: 'Studio & lifestyle product photography for e-commerce, Amazon & Daraz. Based in Faisalabad.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much does product photography cost in Faisalabad?", "acceptedAnswer": { "@type": "Answer", "text": "Our product photography packages are customised based on the number of products, type of shots required, and turnaround time. Contact us on WhatsApp at 0308-1122525 for a personalised quote." } },
    { "@type": "Question", "name": "Do you provide white background shots for Amazon and Daraz?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We specialise in Amazon and Daraz compliant white background photography, including main images that meet all marketplace guidelines." } },
    { "@type": "Question", "name": "How long does a product photography shoot take?", "acceptedAnswer": { "@type": "Answer", "text": "A typical product shoot takes 1–3 hours depending on the number of products and type of shots. Edited images are delivered within 2–3 business days." } },
    { "@type": "Question", "name": "Do you do lifestyle product photography?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer full lifestyle photography with props, models, and in-context setups tailored to your brand identity and target audience." } }
  ]
};

export default function ProductPhotographyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-background text-foreground">
        <Navigation />
        <section className="pt-36 pb-16 md:pt-52 md:pb-24 border-b border-border/50">
          <div className="container mx-auto px-6 lg:px-12">
            <Breadcrumb items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Product Photography', href: '/services/product-photography' }
            ]} />
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-6"><span className="w-8 h-px bg-primary" />Product Photography</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight max-w-4xl">
              Product Photography <span className="text-primary italic">in Faisalabad</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed">
              We shoot product photography that is built for one purpose: making your products sell. From crisp white-background shots for Amazon and Daraz to lifestyle images that build emotional connection — every frame is planned around your buyer.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://wa.me/923081122525" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all">
                <MessageCircle className="w-4 h-4" /> Get a Quote
              </a>
              <Link href="/portfolio" className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-full font-bold hover:border-primary hover:text-primary transition-all">
                View Portfolio <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['White background (Amazon/Daraz compliant)', 'Lifestyle & in-context shots', 'Multi-angle views', 'Detail & close-up shots', 'Colour-accurate editing', 'High-resolution delivery (300dpi+)', 'Web-optimised JPEGs', 'Props & model available'].map((item) => (
                <div key={item} className="flex items-start gap-3 p-5 bg-secondary rounded-xl">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30 border-y border-border/50">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="border-b border-border/50 pb-6">
                  <h3 className="font-bold text-foreground mb-2">{faq.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Related Services</h2>
            <p className="text-muted-foreground mb-8">We also offer <Link href="/services/amazon-content" className="text-primary hover:underline">Amazon listing content</Link>, <Link href="/services/ugc-videos" className="text-primary hover:underline">UGC videos</Link>, and <Link href="/services/food-photography" className="text-primary hover:underline">food photography</Link> — all under one roof.</p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
