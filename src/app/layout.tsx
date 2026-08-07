import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
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
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: org.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${org.name} — ${org.tagline}`,
    description: org.intro,
    images: ["/og.svg"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
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
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Lompat ke isi
        </a>
        <SiteHeader />
        <main id="isi">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
