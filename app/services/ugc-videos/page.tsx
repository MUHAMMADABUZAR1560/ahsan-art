import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { Breadcrumb } from '@/components/breadcrumb';

export const metadata: Metadata = {
  title: 'UGC Videos Pakistan | User Generated Content for Ads',
  description: 'High-converting UGC-style video content for Pakistani brands. Made for Instagram, TikTok, Facebook ads, and Amazon. Based in Faisalabad.',
  alternates: { canonical: 'https://www.ahsanart.pk/services/ugc-videos' },
  openGraph: { url: 'https://www.ahsanart.pk/services/ugc-videos', title: 'UGC Videos Pakistan | Ahsan Art', description: 'UGC-style video ads for social media and e-commerce. Based in Faisalabad.' },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is UGC content and why do brands need it?", "acceptedAnswer": { "@type": "Answer", "text": "UGC (User Generated Content) is authentic, relatable video content that looks like it was made by a real customer. It performs significantly better than traditional ads because viewers trust it more and stop scrolling to watch it." } },
    { "@type": "Question", "name": "Can UGC videos be used for Facebook and Instagram ads?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, UGC videos are specifically designed for paid social media ads. They typically see 4x lower cost-per-click and higher conversion rates compared to polished brand videos." } },
    { "@type": "Question", "name": "Do you provide scripts for UGC videos?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We write conversion-focused scripts tailored to your product and target audience. You can also provide your own script if you prefer." } },
    { "@type": "Question", "name": "How many UGC videos do you recommend per product?", "acceptedAnswer": { "@type": "Answer", "text": "We recommend starting with 3–5 variations per product to test different hooks and messaging. This gives you enough content to run split tests and find what converts best." } },
  ]
};

export default function UGCVideosPage() {
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
              { label: 'UGC Videos', href: '/services/ugc-videos' }
            ]} />
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-6"><span className="w-8 h-px bg-primary" />UGC Videos</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight max-w-4xl">UGC Videos That <span className="text-primary italic">Actually Convert</span></h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed">Authentic, relatable video content that performs in paid ads and organic feeds. UGC content gets 4x more engagement than polished brand videos — and we make it look effortlessly real while being strategically built to sell.</p>
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
              {['Unboxing & review videos','Hook-first ad scripts','Testimonial-style videos','Before/after demos','Voice-over & text overlays','9:16 vertical format','Multiple hook variations','Raw + edited versions'].map((item) => (
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
        <section className="py-20"><div className="container mx-auto px-6 lg:px-12 text-center"><h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Related Services</h2><p className="text-muted-foreground mb-8">We also offer <Link href="/services/product-videography" className="text-primary hover:underline">product videography</Link>, <Link href="/services/product-photography" className="text-primary hover:underline">product photography</Link>, and <Link href="/services/amazon-content" className="text-primary hover:underline">Amazon content</Link> — all under one roof.</p></div></section>
        <Footer />
      </main>
    </>
  );
}
