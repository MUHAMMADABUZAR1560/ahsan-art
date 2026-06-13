// components/JsonLd.tsx
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.ahsanart.pk/#business",
        "name": "Ahsan Art Creative Studio",
        "url": "https://www.ahsanart.pk",
        "logo": "https://res.cloudinary.com/dhtktd4ka/image/upload/v1774575381/footerlogo_ucwjlu.png",
        "image": "https://www.ahsanart.pk/images/cimage.jpeg",
        "description": "Faisalabad's e-commerce focused content studio specialising in product photography, videography, UGC videos, Amazon content, and food photography.",
        "telephone": "+923081122525",
        "email": "imahsan987@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gatwala Commercial Hub",
          "addressLocality": "Faisalabad",
          "addressRegion": "Punjab",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 31.468849,
          "longitude": 73.167816
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/ahsanart.studio/",
          "https://wa.me/923081122525"
        ],
        "priceRange": "$$",
        "currenciesAccepted": "PKR",
        "paymentAccepted": "Cash, Bank Transfer",
        "areaServed": ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Pakistan"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Photography & Videography Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Photography", "url": "https://www.ahsanart.pk/services/product-photography" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Videography", "url": "https://www.ahsanart.pk/services/product-videography" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UGC Videos", "url": "https://www.ahsanart.pk/services/ugc-videos" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Amazon Content", "url": "https://www.ahsanart.pk/services/amazon-content" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Food Photography", "url": "https://www.ahsanart.pk/services/food-photography" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Solutions", "url": "https://www.ahsanart.pk/services/ecommerce-solutions" } }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.ahsanart.pk/#website",
        "url": "https://www.ahsanart.pk",
        "name": "Ahsan Art Creative Studio",
        "description": "Product photography and videography studio in Faisalabad, Pakistan",
        "publisher": { "@id": "https://www.ahsanart.pk/#business" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.ahsanart.pk/portfolio?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ahsanart.pk" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ahsanart.pk/services" },
          { "@type": "ListItem", "position": 3, "name": "Portfolio", "item": "https://www.ahsanart.pk/portfolio" },
          { "@type": "ListItem", "position": 4, "name": "Contact", "item": "https://www.ahsanart.pk/contact" }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
