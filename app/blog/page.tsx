import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getBlogPosts } from "@/lib/blog"
import { Calendar, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog | Insights on E-Commerce Photography & Videography",
  description: "Read the latest tips, trends, and strategies for e-commerce product photography, videography, and visual marketing from Ahsan Art Creative Studio.",
  alternates: { canonical: "https://www.ahsanart.pk/blog" },
  openGraph: {
    url: "https://www.ahsanart.pk/blog",
    title: "Blog | E-Commerce Photography Insights",
    description: "Read the latest tips, trends, and strategies for e-commerce product photography, videography, and visual marketing from Ahsan Art Creative Studio.",
  },
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Our Blog
              <span className="w-8 h-px bg-primary" />
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Insights & Strategy
            </h1>
            <p className="text-lg text-muted-foreground">
              Tips, trends, and deep dives into the world of e-commerce photography, UGC videos, and Amazon content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] w-full mb-6 overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                </div>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
