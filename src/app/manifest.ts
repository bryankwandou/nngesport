import type { MetadataRoute } from "next";
import { org } from "@/content/nng";

/**
 * Keterangan aplikasi untuk peramban.
 *
 * Berkas ini yang dibaca ketika seseorang menyimpan situs ke layar utama
 * telepon, dan yang menentukan warna bilah sistem saat dibuka dari sana.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${org.name} — ${org.tagline}`,
    short_name: org.shortName,
    description: org.intro,
    start_url: "/",
    display: "standalone",
    background_color: "#07080b",
    theme_color: "#07080b",
    lang: "id",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
