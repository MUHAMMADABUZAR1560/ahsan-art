import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog"
import { Calendar, ArrowLeft, User } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Generate static parameters for all known blog posts
export function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug)
  
  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  const pageTitle = post.slug === "how-to-choose-product-photography-studio-pakistan"
    ? "How to Choose a Product Photography Studio in Pakistan | Ahsan Art"
    : `${post.title} | Ahsan Art Creative Studio Blog`

  return {
    title: pageTitle,
    description: post.excerpt,
    alternates: { canonical: `https://www.ahsanart.pk/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://www.ahsanart.pk/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ]
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />
      
      {/* Hero Section with gradient background */}
      <div className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden bg-gradient-to-br from-[#0d0d0d] via-[#1a0a2e] to-[#0d0d0d]">
        {/* Decorative glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/20 blur-[100px] pointer-events-none" />

        {/* Cover image as background */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 pt-40 pb-16">
          {/* Back link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/15 border border-primary/30 px-3 py-1.5 rounded-full uppercase tracking-wider">
              Blog
            </span>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <User className="w-3.5 h-3.5" />
              <span>{post.author}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Article Body */}
      <main className="bg-background pb-24">
        <article className="max-w-3xl mx-auto px-4 md:px-8 pt-16">

          {/* Breadcrumb */}
          <div className="mb-10 text-sm">
            <Breadcrumb 
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title, href: `/blog/${post.slug}` },
              ]} 
            />
          </div>

          {/* Prose content */}
          <div 
            className="
              prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-5 prose-h2:leading-snug
              prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-foreground/90
              prose-p:text-foreground/70 prose-p:leading-[1.9] prose-p:mb-5 prose-p:text-[1.07rem]
              prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:my-6 prose-ul:pl-0 prose-ul:list-none
              prose-ol:my-6 prose-ol:pl-6
              prose-li:text-foreground/70 prose-li:mb-2 prose-li:text-[1.05rem]
              [&_ul>li]:relative [&_ul>li]:pl-6
              [&_ul>li]:before:content-['→'] [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:text-primary [&_ul>li]:before:font-bold
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-foreground/80
              prose-hr:border-border prose-hr:my-12
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Box at end */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 md:p-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Ready to boost your sales?</p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Let&apos;s Create Visuals That Sell
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Book a session with Ahsan Art Creative Studio — Faisalabad&apos;s leading product photography studio for ecommerce brands.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Book a Free Consultation
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </Link>
          </div>
        </article>

        {/* Blog Post Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "image": [post.coverImage],
              "datePublished": post.date,
              "dateModified": post.date,
              "author": [{
                  "@type": "Person",
                  "name": post.author
              }],
              "publisher": {
                  "@type": "Organization",
                  "name": "Ahsan Art Creative Studio",
                  "logo": {
                      "@type": "ImageObject",
                      "url": "https://www.ahsanart.pk/images/logo.png"
                  }
              },
              "description": post.excerpt
            })
          }}
        />
      </main>
      <Footer />
    </>
  )
}
