import { MetadataRoute } from "next";
import { stadtteile } from "@/data/stadtteile";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abdelsfahrschule.de";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/fuehrerschein-klasse-b-duesseldorf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/intensivkurs-fahrschule-duesseldorf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/automatik-fuehrerschein-duesseldorf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/stadtteile`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic stadtteil pages
  const stadtteilPages: MetadataRoute.Sitemap = stadtteile.map((stadtteil) => ({
    url: `${baseUrl}/fahrschule-duesseldorf-${stadtteil.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...stadtteilPages];
}
