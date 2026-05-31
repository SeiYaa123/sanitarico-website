import type { MetadataRoute } from "next";
import { COMPANY, ROUTES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY.website;

  const staticRoutes = Object.values(ROUTES).map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === ROUTES.home ? 1 : 0.8,
  }));

  return staticRoutes;
}
