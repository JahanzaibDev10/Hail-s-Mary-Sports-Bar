export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://hail-marys-digital-dive.vercel.app"
).replace(/\/$/, "");

const SOCIAL_IMAGE = `${SITE_URL}/og-image.jpg`;

type SeoOptions = { title: string; description: string; path?: string };

export function createSeo({ title, description, path = "/" }: SeoOptions) {
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Hail Mary's Sports Bar" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Hail Mary's Sports Bar in Glendale, Arizona" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["BarOrPub", "SportsActivityLocation"],
  "@id": `${SITE_URL}/#business`,
  name: "Hail Mary's Sports Bar",
  url: SITE_URL,
  image: SOCIAL_IMAGE,
  telephone: "+1-623-934-1780",
  email: "hmsportsbar@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5114 W Camelback Rd",
    addressLocality: "Glendale",
    addressRegion: "AZ",
    postalCode: "85301",
    addressCountry: "US",
  },
  openingHours: "Mo-Su 11:00-02:00",
  sameAs: [
    "https://instagram.com/hailmaryssportsbar",
    "https://facebook.com/HailMarysSportsbar",
    "https://tiktok.com/@hailmaryssportsbar",
  ],
};
