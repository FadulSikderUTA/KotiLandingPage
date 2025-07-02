import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.kotibd.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add more pages here if you have them, like /about, /contact, etc.
    // {
    //   url: 'https://www.kotibd.com/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
