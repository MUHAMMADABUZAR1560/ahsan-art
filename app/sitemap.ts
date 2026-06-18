import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog'
import { portfolioSlugs } from '@/lib/portfolio-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ahsanart.pk'
  const posts = getBlogPosts()

  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/faq',
    '/behind-the-scenes',
    '/contact',
    '/blog',
    '/services/product-photography',
    '/services/product-videography',
    '/services/ugc-videos',
    '/services/amazon-content',
    '/services/food-photography',
    '/services/ecommerce-solutions',
  ]

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as "weekly" | "monthly",
    priority: route === '' ? 1 : route.startsWith('/services/') ? 0.8 : 0.9,
  }))

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as "monthly",
    priority: 0.7,
  }))

  /** Individual project pages — indexable case-study URLs */
  const portfolioProjectRoutes = portfolioSlugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as "monthly",
    priority: 0.75,
  }))

  return [...staticRoutes, ...portfolioProjectRoutes, ...blogRoutes]
}
