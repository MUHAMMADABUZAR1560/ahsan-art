import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ahsanart.pk';
  const now = new Date();

  return [
    { url: baseUrl,                                          lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/about`,                               lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`,                            lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/services/product-photography`,        lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/product-videography`,        lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/ugc-videos`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/amazon-content`,             lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/food-photography`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ecommerce-solutions`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/portfolio`,                           lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${baseUrl}/faq`,                                 lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/behind-the-scenes`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`,                             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
