import Script from "next/script"

interface SEOSchemaProps {
  type: "website" | "article" | "organization" | "product"
  data: any
}

export default function SEOSchema({ type, data }: SEOSchemaProps) {
  let schema = {}

  switch (type) {
    case "website":
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: data.name,
        url: data.url,
        description: data.description,
        publisher: {
          "@type": "Organization",
          name: "LinkSparkCo",
          logo: {
            "@type": "ImageObject",
            url: data.logoUrl,
          },
        },
      }
      break
    case "article":
      schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.title,
        image: data.image,
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        author: {
          "@type": "Person",
          name: data.author,
        },
        publisher: {
          "@type": "Organization",
          name: "LinkSparkCo",
          logo: {
            "@type": "ImageObject",
            url: data.logoUrl,
          },
        },
        description: data.description,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": data.url,
        },
      }
      break
    case "organization":
      schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "LinkSparkCo",
        url: data.url,
        logo: data.logoUrl,
        sameAs: data.socialLinks,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: data.telephone,
          contactType: "customer service",
          email: data.email,
          areaServed: data.areaServed || "Worldwide",
        },
      }
      break
    case "product":
      schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: data.name,
        image: data.image,
        description: data.description,
        brand: {
          "@type": "Brand",
          name: "LinkSparkCo",
        },
        offers: {
          "@type": "Offer",
          price: data.price,
          priceCurrency: data.currency,
          availability: data.availability,
          url: data.url,
        },
      }
      break
    default:
      schema = {}
  }

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
