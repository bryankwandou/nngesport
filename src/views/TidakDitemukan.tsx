import Link from "next/link";
import { LogoCrest } from "@/components/Logo";
import type { Lang } from "@/lib/i18n";

const ui = {
  id: {
    title: "Halaman ini tidak ada di sini.",
    body: "Alamatnya mungkin salah ketik, atau halamannya sudah dipindah. Coba mulai lagi dari beranda.",
    back: "Kembali ke beranda",
  },
  en: {
    title: "This page is not here.",
    body: "The address may have a typo, or the page has moved. Try starting again from the home page.",
    back: "Back to home",
  },
} as const;

export function TidakDitemukan({ lang }: { lang: Lang }) {
  const t = ui[lang];

  return (
    <section className="grain relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-flare-600/[0.14] blur-[130px]" />
      </div>

      <div className="relative">
        <LogoCrest size={140} className="mx-auto h-18 w-18 ring-1 ring-white/10" />
        <p className="mt-8 font-display text-[clamp(4rem,14vw,8rem)] font-800 leading-none tracking-[-0.05em] text-gradient">
          404
        </p>
        <h1 className="mt-4 font-display text-xl font-700 tracking-tight text-bone-50">
          {t.title}
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-bone-400">
          {t.body}
        </p>
        <Link
          href={lang === "en" ? "/en" : "/"}
          className="mt-8 inline-block rounded-full bg-linear-to-r from-flare-600 to-flare-500 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          {t.back}
        </Link>
      </div>
    </section>
  );
}
