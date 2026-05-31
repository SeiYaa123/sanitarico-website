import type { MetadataRoute } from "next";
import { COMPANY, ROUTES } from "@/lib/constants";

export const dynamic = "force-static";

const ROUTE_PRIORITIES: Record<string, number> = {
  [ROUTES.home]: 1.0,
  [ROUTES.depannage]: 0.9,
  [ROUTES.services]: 0.9,
  [ROUTES.quote]: 0.85,
  [ROUTES.about]: 0.7,
  [ROUTES.portfolio]: 0.7,
};

const LIVE_ROUTES = [
  ROUTES.home,
  ROUTES.services,
  ROUTES.portfolio,
  ROUTES.quote,
  ROUTES.about,
  ROUTES.depannage,
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return LIVE_ROUTES.map((route) => ({
    url: `${COMPANY.website}${route}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: ROUTE_PRIORITIES[route] ?? 0.7,
  }));
}
