import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StructuredData } from "@/components/StructuredData";
import { org, site } from "@/content/nng";

/* Sora untuk judul: sudutnya tegas, cocok untuk lambang tim. */
const display = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

/* Inter untuk teks berjalan, karena angka dan huruf kecilnya tetap terbaca di layar padat. */
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${org.name} — ${org.tagline}`,
    template: `%s — ${org.name}`,
  },
  description: org.intro,
  /*
    Titik-garis-miring membuat tiap halaman menunjuk ke alamatnya sendiri, bukan
    ke beranda. Tanpa ini mesin pencari harus menebak alamat mana yang sah ketika
    satu halaman terjangkau lewat beberapa jalan, misalnya dengan tambahan
    penanda kampanye di belakangnya, dan tebakan yang salah memecah nilai satu
    halaman menjadi beberapa.
  */
  alternates: { canonical: "./" },
  keywords: [
    "NNG Esport",
    "NNG",
    "esport Papua",
    "esport Jayapura",
    "nayrbryanGaming",
    "bryan_kwandou",
    "Mobile Legends",
    "PUBG Mobile",
    "Free Fire",
  ],
  authors: [{ name: org.name }],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: org.name,
    title: `${org.name} — ${org.tagline}`,
    description: org.intro,
    /*
      Gambar pratinjau harus raster. Facebook, WhatsApp, dan X tidak merender SVG
      sebagai og:image, sehingga tautan yang dibagikan muncul tanpa gambar sama sekali.
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

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-dvh antialiased">
        <a
          href="#isi"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-flare-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Lompat ke isi
        </a>
        <StructuredData />
        <SiteHeader />
        <main id="isi">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
