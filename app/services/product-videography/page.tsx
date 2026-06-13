import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { Breadcrumb } from '@/components/breadcrumb';

export const metadata: Metadata = {
  title: 'Product Videography in Faisalabad | Brand & Ad Videos',
  description: 'Cinematic product videography for brands, ads, and social media. UGC-style and studio videos that convert viewers into buyers. Based in Faisalabad, Pakistan.',
  alternates: { canonical: 'https://www.ahsanart.pk/services/product-videography' },
  openGraph: { url: 'https://www.ahsanart.pk/services/product-videography', title: 'Product Videography in Faisalabad | Ahsan Art Creative Studio', description: 'Cinematic product videos for ads & social media. Based in Faisalabad.' },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What types of product videos do you produce?", "acceptedAnswer": { "@type": "Answer", "text": "We produce brand videos, product showcase videos, UGC-style content, Instagram Reels, TikTok videos, YouTube ads, and Amazon listing videos." } },
    { "@type": "Question", "name": "Do you provide script and concept for the video?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our team handles the full creative process — concept, script, shot list, filming, and editing. You just need to ship your product." } },
    { "@type": "Question", "name": "What is the turnaround time for videos?", "acceptedAnswer": { "@type": "Answer", "text": "Standard video projects are delivered in 5–7 business days after shoot completion. Rush delivery is available for an additional fee." } },
    { "@type": "Question", "name": "Do you film on location or only in studio?", "acceptedAnswer": { "@type": "Answer", "text": "Both. We have a full studio setup in Faisalabad and also offer on-location shoots for lifestyle and brand videos." } },
  ]
};

export default function ProductVideographyPage() {
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
              { label: 'Product Videography', href: '/services/product-videography' }
            ]} />
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-6"><span className="w-8 h-px bg-primary" />Product Videography</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight max-w-4xl">Product Videography <span className="text-primary italic">That Converts</span></h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed">Scroll-stopping product videos for Instagram Reels, TikTok, Amazon, and paid ads. We handle the full production — concept to final edit — so your brand looks premium everywhere.</p>
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
              {['Brand showcase videos','Instagram Reels & TikTok content','Amazon listing videos','Concept & scripting','Professional lighting & audio','Colour grading & editing','Subtitles & captions','Multiple aspect ratios (16:9, 9:16, 1:1)'].map((item) => (
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
        <section className="py-20"><div className="container mx-auto px-6 lg:px-12 text-center"><h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Related Services</h2><p className="text-muted-foreground mb-8">We also offer <Link href="/services/ugc-videos" className="text-primary hover:underline">UGC videos</Link>, <Link href="/services/product-photography" className="text-primary hover:underline">product photography</Link>, and <Link href="/services/amazon-content" className="text-primary hover:underline">Amazon content</Link> — all under one roof.</p></div></section>
        <Footer />
      </main>
    </>
  );
}
