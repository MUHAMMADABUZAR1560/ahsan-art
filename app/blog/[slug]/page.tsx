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

  return {
    title: `${post.title} | Ahsan Art Creative Studio Blog`,
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
      <main className="min-h-screen pt-32 pb-24 px-4 md:px-8">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title, href: `/blog/${post.slug}` },
            ]} 
          />
        </div>

        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>
        </header>

        <div className="relative aspect-[21/9] w-full mb-12 overflow-hidden rounded-2xl bg-muted">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>

        <div 
          className="prose prose-lg prose-neutral dark:prose-invert max-w-none
            prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground
            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:text-muted-foreground prose-li:mb-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
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
