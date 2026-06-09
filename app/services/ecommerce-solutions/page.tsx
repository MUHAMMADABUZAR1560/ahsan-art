import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'E-Commerce Solutions Pakistan | Full Visual Content for Online Stores',
  description: 'Complete e-commerce content packages for Pakistani online stores. Photography, video, social media content, and Amazon/Daraz assets — all from one studio in Faisalabad.',
  alternates: { canonical: 'https://www.ahsanart.pk/services/ecommerce-solutions' },
  openGraph: { url: 'https://www.ahsanart.pk/services/ecommerce-solutions', title: 'E-Commerce Solutions Pakistan | Ahsan Art', description: 'Full-service visual content for e-commerce brands. Photography, video, social media.' },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What does a full e-commerce content package include?", "acceptedAnswer": { "@type": "Answer", "text": "Our e-commerce solutions packages include product photography, listing images, lifestyle shots, social media content, UGC videos, and Amazon/Daraz optimised assets — everything your brand needs to sell online." } },
    { "@type": "Question", "name": "Do you work with new brands just starting out?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We work with startups and new brands regularly. We help plan content strategy, create a visual identity, and build a content library from scratch." } },
    { "@type": "Question", "name": "Can you handle ongoing monthly content creation?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many of our clients are on monthly retainer packages where we create fresh content consistently to keep their feeds and listings updated." } },
    { "@type": "Question", "name": "Do you work with brands outside Faisalabad?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We work with brands across Pakistan. Products can be shipped to our studio in Faisalabad or we can travel for larger projects in Lahore, Karachi, and Islamabad." } },
  ]
};

export default function EcommerceSolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-background text-foreground">
        <Navigation />
        <section className="pt-36 pb-16 md:pt-52 md:pb-24 border-b border-border/50">
          <div className="container mx-auto px-6 lg:px-12">
            <nav aria-label="Breadcrumb" className="mb-8"><ol className="flex items-center gap-2 text-xs text-muted-foreground"><li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li><li>/</li><li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li><li>/</li><li aria-current="page" className="text-foreground">E-Commerce Solutions</li></ol></nav>
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-6"><span className="w-8 h-px bg-primary" />E-Commerce Solutions</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight max-w-4xl">Everything Your <span className="text-primary italic">Online Store Needs</span></h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed">One studio. Every visual asset your e-commerce brand needs. From your first product shoot to monthly content retainers — we grow with you. No jumping between vendors. No inconsistent quality. Just content that works.</p>
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
              {['Full product photo sets','Amazon & Daraz listing assets','Social media content calendar','Monthly retainer packages','Brand strategy consultation','UGC & ad-ready videos','Consistent visual identity','Multi-platform delivery'].map((item) => (
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
        <section className="py-20"><div className="container mx-auto px-6 lg:px-12 text-center"><h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Explore Individual Services</h2><p className="text-muted-foreground mb-8">Dive deeper: <Link href="/services/product-photography" className="text-primary hover:underline">product photography</Link>, <Link href="/services/amazon-content" className="text-primary hover:underline">Amazon content</Link>, <Link href="/services/ugc-videos" className="text-primary hover:underline">UGC videos</Link>, and <Link href="/services/food-photography" className="text-primary hover:underline">food photography</Link>.</p></div></section>
        <Footer />
      </main>
    </>
  );
}
