import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { Breadcrumb } from '@/components/breadcrumb';

export const metadata: Metadata = {
  title: 'Food Photography Faisalabad | Restaurant & Menu Photography',
  description: 'Professional food photography for restaurants, cafes, and food brands in Faisalabad. Menu photography, social media content, and delivery app images that make food irresistible.',
  alternates: { canonical: 'https://www.ahsanart.pk/services/food-photography' },
  openGraph: { url: 'https://www.ahsanart.pk/services/food-photography', title: 'Food Photography Faisalabad | Ahsan Art Creative Studio', description: 'Restaurant & menu food photography in Faisalabad. Social media & delivery app images.' },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Do you shoot on location at restaurants?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We bring our full lighting equipment to your restaurant or cafe and shoot on location. We also have a studio setup available for controlled food photography." } },
    { "@type": "Question", "name": "Do you provide food styling?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our team handles food styling, prop selection, and table setup to ensure every dish looks its absolute best for the camera." } },
    { "@type": "Question", "name": "Can food photos be used for Foodpanda and Careem Food apps?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We deliver images in the correct specifications for all major delivery platforms including Foodpanda, Careem Food, and Eat.pk." } },
    { "@type": "Question", "name": "How many dishes can you photograph in one session?", "acceptedAnswer": { "@type": "Answer", "text": "A typical half-day session covers 15–25 dishes. A full-day session can cover 40–60+ dishes depending on complexity of styling required." } },
  ]
};

export default function FoodPhotographyPage() {
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
              { label: 'Food Photography', href: '/services/food-photography' }
            ]} />
            <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-6"><span className="w-8 h-px bg-primary" />Food Photography</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight max-w-4xl">Food Photography That <span className="text-primary italic">Makes Mouths Water</span></h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed">Beautifully styled food photography for restaurants, cafes, catering brands, and food products. Images that make your menu irresistible on Instagram, delivery apps, and your website — driving more orders with every scroll.</p>
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
              {['Menu photography','On-location & studio shooting','Food styling & prop setup','Social media content','Delivery app images (Foodpanda, Careem)','Instagram Reels for food brands','Colour grading & retouching','Same-day preview selects'].map((item) => (
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
