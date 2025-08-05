import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.kotibd.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/admin/',      // Protect admin endpoints
          '/_next/',          // Next.js internal files
          '/admin/',          // Admin panel if exists
          '/.env*',           // Environment files
          '/database/',       // Database files
          '/reference/',      // Reference materials
        ],
      },
      {
        userAgent: 'GPTBot',  // OpenAI's web crawler
        disallow: '/api/',    // Optionally block AI crawlers from APIs
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/api/',
      },
      {
        userAgent: 'Google-Extended',  // Google's AI training crawler
        disallow: '/',        // Block AI training if desired
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
