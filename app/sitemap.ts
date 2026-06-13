import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ahsanart.pk'

  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/faq',
    '/behind-the-scenes',
    '/contact',
    '/services/product-photography',
    '/services/product-videography',
    '/services/ugc-videos',
    '/services/amazon-content',
    '/services/food-photography',
    '/services/ecommerce-solutions',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services/') ? 0.8 : 0.9,
  }))
}
