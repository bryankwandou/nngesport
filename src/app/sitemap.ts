import type { MetadataRoute } from "next";
import { site } from "@/content/nng";
import { languages, path as routePath, routeKeys } from "@/lib/i18n";

/**
 * Peta situs untuk kedua bahasa.
 *
 * Tiap alamat membawa daftar padanannya lewat `alternates.languages`. Tanpa itu
 * mesin pencari memperlakukan versi Indonesia dan Inggris sebagai dua halaman
 * yang bersaing memperebutkan kata kunci yang sama, lalu menekan salah satunya.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return routeKeys.flatMap((key) =>
    languages.map((lang) => ({
      url: `${site.url}${routePath(key, lang)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: key === "home" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          languages.map((l) => [l, `${site.url}${routePath(key, l)}`])
        ),
      },
    }))
  );
}
