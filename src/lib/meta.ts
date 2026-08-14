import type { Metadata, Viewport } from "next";
import { getContent } from "@/content";
import { htmlLocale, path as routePath, type Lang, type RouteKey } from "./i18n";

/**
 * Keterangan halaman yang sama untuk kedua bahasa, hanya isinya yang berpindah.
 *
 * Bagian `alternates` yang paling penting di sini. Tanpa hreflang, mesin pencari
 * memperlakukan versi Indonesia dan Inggris sebagai dua halaman yang bersaing
 * memperebutkan kata kunci yang sama, dan salah satunya akan ditekan. Dengan
 * hreflang, keduanya dikenali sebagai satu halaman dalam dua bahasa.
 */
export function buildMetadata(lang: Lang): Metadata {
  const { org, site } = getContent(lang);
  const home = lang === "en" ? "/en" : "/";

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${org.name} — ${org.tagline}`,
      template: `%s — ${org.name}`,
    },
    description: org.intro,
    /*
      Titik-garis-miring membuat tiap halaman menunjuk ke alamatnya sendiri,
      bukan ke beranda, sehingga penanda kampanye di belakang alamat tidak
      memecah nilai satu halaman menjadi beberapa.
    */
    /*
      Padanan bahasa sengaja tidak ditulis di sini. Tata letak akar berlaku sama
      untuk seluruh halaman di bawahnya, jadi menaruhnya di sini membuat setiap
      halaman menunjuk ke beranda sebagai padanannya. Tiap halaman mengurusnya
      sendiri lewat `altLanguages`.
    */
    alternates: { canonical: "./" },
    keywords:
      lang === "en"
        ? [
            "NNG Esport",
            "NNG",
            "Papua esports",
            "Jayapura esports",
            "nayrbryanGaming",
            "bryan_kwandou",
            "Mobile Legends",
            "PUBG Mobile",
            "Valorant",
          ]
        : [
            "NNG Esport",
            "NNG",
            "esport Papua",
            "esport Jayapura",
            "nayrbryanGaming",
            "bryan_kwandou",
            "Mobile Legends",
            "PUBG Mobile",
            "Valorant",
          ],
    authors: [{ name: org.name }],
    openGraph: {
      type: "website",
      locale: htmlLocale[lang].replace("-", "_"),
      url: `${site.url}${home === "/" ? "" : home}`,
      siteName: org.name,
      title: `${org.name} — ${org.tagline}`,
      description: org.intro,
      /*
        Gambar pratinjau harus raster. Facebook, WhatsApp, dan X tidak merender
        SVG sebagai og:image, sehingga tautan yang dibagikan muncul tanpa gambar.
      */
      images: [
        { url: "/og.png", width: 1200, height: 630, type: "image/png", alt: org.name },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${org.name} — ${org.tagline}`,
      description: org.intro,
      images: ["/og.png"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/manifest.webmanifest",
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
};

/**
 * Padanan bahasa untuk satu halaman tertentu.
 *
 * Dipanggil dari berkas rute, bukan dari tata letak, supaya /en/prestasi
 * menunjuk ke /prestasi dan bukan ke beranda. Menunjuk ke alamat yang salah
 * lebih buruk daripada tidak menunjuk sama sekali, karena mesin pencari akan
 * menyimpulkan seluruh situs adalah terjemahan dari satu halaman yang sama.
 */
export function altLanguages(key: RouteKey): Metadata["alternates"] {
  return {
    canonical: "./",
    languages: {
      "id-ID": routePath(key, "id"),
      "en-US": routePath(key, "en"),
      "x-default": routePath(key, "id"),
    },
  };
}
