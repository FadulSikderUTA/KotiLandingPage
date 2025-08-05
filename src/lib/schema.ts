import { Organization, WithContext } from 'schema-dts'

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Koti Credit Bureau",
  legalName: "Koti Credit Bureau Limited",
  url: "https://www.kotibd.com",
  logo: "https://www.kotibd.com/hero-image.png",
  description: "Bangladesh's first AI-powered credit scoring platform providing comprehensive credit assessment and financial inclusion solutions.",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BD",
    addressRegion: "Dhaka Division"
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+880-XXX-XXXXXX", // Add your phone number
      email: "info@kotibd.com",
      contactType: "customer service",
      availableLanguage: ["English", "Bengali"]
    }
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61576026151384",
    "https://www.linkedin.com/company/koti-credit-bureau/about/",
    "https://x.com"
  ],
  founder: [
    {
      "@type": "Person",
      name: "Barrister Md Anisuzz Aman",
      jobTitle: "Founder & Director",
      description: "Head of compliance & MLRO SMF17. A Barrister with experience in financial regulation and compliance.",
      alumniOf: "BPP University, London"
    },
    {
      "@type": "Person", 
      name: "Fadul Sikder",
      jobTitle: "Co-Founder & DCTO",
      description: "Graduate Researcher at the University of Texas, Arlington. A cutting-edge technologist specializing in AI, cybersecurity, and scalable fintech infrastructure.",
      alumniOf: "University of Texas, Arlington"
    }
  ],
  additionalType: "https://schema.org/FinancialService",
  keywords: "credit scoring, financial technology, Bangladesh, AI-powered, credit assessment, financial inclusion",
  knowsAbout: [
    "Credit Scoring",
    "Financial Technology", 
    "AI and Machine Learning",
    "Financial Regulation",
    "Credit Assessment",
    "Financial Inclusion"
  ],
  areaServed: {
    "@type": "Country",
    name: "Bangladesh"
  }
}

export const websiteSchema: WithContext<any> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Koti Credit Bureau",
  url: "https://www.kotibd.com",
  description: "Bangladesh's first AI-powered credit scoring platform",
  publisher: {
    "@type": "Organization",
    name: "Koti Credit Bureau"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.kotibd.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  inLanguage: ["en", "bn"]
}

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})