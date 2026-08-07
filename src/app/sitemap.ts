import type { MetadataRoute } from "next";
import { nav, site } from "@/content/nng";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return nav.map((n) => ({
    url: `${site.url}${n.href === "/" ? "" : n.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: n.href === "/" ? 1 : 0.7,
  }));
}
