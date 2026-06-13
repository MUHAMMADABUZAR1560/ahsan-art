import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { Breadcrumb } from '@/components/breadcrumb';

export const metadata: Metadata = {
  title: 'Amazon Content Pakistan | A+ Content & Listing Images',
  description: 'Professional Amazon listing images, A+ content, and infographics for Pakistani sellers. White background, lifestyle, and comparison charts. Based in Faisalabad.',
  alternates: { canonical: 'https://www.ahsanart.pk/services/amazon-content' },
  openGraph: { url: 'https://www.ahsanart.pk/services/amazon-content', title: 'Amazon Content Pakistan | Ahsan Art Creative Studio', description: 'Amazon listing images, A+ content & infographics for Pakistani sellers.' },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Do you create Amazon A+ Content (Enhanced Brand Content)?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We create full Amazon A+ content modules including comparison charts, feature highlights, lifestyle images, and brand story sections that meet Amazon's specifications." } },
    { "@type": "Question", "name": "Do your Amazon images meet marketplace guidelines?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All main listing images are shot on pure white backgrounds at minimum 1000px on the shortest side, fully compliant with Amazon and Daraz guidelines." } },
    { "@type": "Question", "name": "How many images do you recommend per Amazon listing?", "acceptedAnswer": { "@type": "Answer", "text": "We recommend 7–9 images per listing: 1 main white background, 2–3 lifestyle shots, 2 infographic/feature images, 1 comparison chart, and 1 brand image. This maximises your listing's visual impact." } },
    { "@type": "Question", "name": "Can you help with Daraz listing images too?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We create optimised listing images for Daraz, Shopify, WooCommerce, and all major e-commerce platforms alongside Amazon." } },
  ]
};

export default function AmazonContentPage() {
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
              { label: 'Amazon Content', href: '/services/amazon-content' }
            ]} />
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-6"><span className="w-8 h-px bg-primary" />Amazon Content</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight max-w-4xl">Amazon Content That <span className="text-primary italic">Wins the Buy Box</span></h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed">From compliant main images to scroll-stopping A+ content — we create Amazon listing visuals that increase click-through rates, reduce returns, and convert browsers into buyers. Trusted by Pakistani sellers on Amazon.com, Amazon.ae, and Daraz.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://wa.me/923081122525" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all"><MessageCircle className="w-4 h-4" /> Get a Quote</a>
              <Link href="/portfolio" className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-full font-bold hover:border-primary hover:text-primary transition-all">View Portfolio <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['White background main image','Lifestyle & in-use shots','Feature infographic images','A+ Content modules','Comparison charts','Brand story images','Daraz & Shopify compatible','Full editing & retouching'].map((item) => (
                <div key={item} className="flex items-start gap-3 p-5 bg-secondary rounded-xl"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground text-sm font-medium">{item}</span></div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-secondary/30 border-y border-border/50">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">{faqSchema.mainEntity.map((faq, i) => (<div key={i} className="border-b border-border/50 pb-6"><h3 className="font-bold text-foreground mb-2">{faq.name}</h3><p className="text-muted-foreground text-sm leading-relaxed">{faq.acceptedAnswer.text}</p></div>))}</div>
          </div>
        </section>
        <section className="py-20"><div className="container mx-auto px-6 lg:px-12 text-center"><h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Related Services</h2><p className="text-muted-foreground mb-8">We also offer <Link href="/services/product-photography" className="text-primary hover:underline">product photography</Link>, <Link href="/services/ugc-videos" className="text-primary hover:underline">UGC videos</Link>, and <Link href="/services/product-videography" className="text-primary hover:underline">product videography</Link> — all under one roof.</p></div></section>
        <Footer />
      </main>
    </>
  );
}
