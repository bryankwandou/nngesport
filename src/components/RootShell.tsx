import { Sora, Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StructuredData } from "@/components/StructuredData";
import { htmlLocale, type Lang } from "@/lib/i18n";

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

const skipLabel = {
  id: "Lompat ke isi",
  en: "Skip to content",
} as const;

/**
 * Rangka halaman yang dipakai kedua bahasa.
 *
 * Situs ini punya dua tata letak akar, satu per bahasa, karena atribut lang di
 * elemen html hanya bisa ditulis oleh tata letak akar. Menyetelnya salah bukan
 * perkara sepele: pembaca layar memilih pelafalan dari atribut itu, dan teks
 * Inggris yang dibacakan dengan pelafalan Indonesia praktis tidak terpahami.
 */
export function RootShell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={htmlLocale[lang]}
      className={`${display.variable} ${body.variable}`}
    >
      <body className="min-h-dvh antialiased">
        <a
          href="#isi"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-flare-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          {skipLabel[lang]}
        </a>
        <StructuredData lang={lang} />
        <SiteHeader lang={lang} />
        <main id="isi">{children}</main>
        <SiteFooter lang={lang} />
      </body>
    </html>
  );
}
