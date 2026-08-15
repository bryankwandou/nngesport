import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem, scaleIn } from "@/components/motion-primitives";
import { Eyebrow, TiltCard } from "@/components/ui";
import { LogoCrest } from "@/components/Logo";
import { getContent } from "@/content";
import type { Lang } from "@/lib/i18n";

export const meta = {
  id: {
    title: "Toko",
    description:
      "Lini dagang NNG Esport berjalan di @nng_store dan @nngstoreofficial.",
  },
  en: {
    title: "Store",
    description:
      "NNG Esport's merch line runs through @nng_store and @nngstoreofficial.",
  },
} as const;

const ui = {
  id: {
    eyebrow: "Lini dagang",
    title: "Barangnya dijual di @nng_store.",
    whereEyebrow: "Tempat membeli",
    whereTitle: "Dua etalase, pengelola yang sama.",
    soon: "Katalog menyusul",
    open: "Buka etalase",
    catEyebrow: "Yang biasanya ada",
    catTitle: "Empat kelompok barang.",
    pending: "Menunggu konfirmasi",
  },
  en: {
    eyebrow: "Merch line",
    title: "The gear is sold through @nng_store.",
    whereEyebrow: "Where to buy",
    whereTitle: "Two storefronts, one operator.",
    soon: "Catalogue to follow",
    open: "Open storefront",
    catEyebrow: "What is usually stocked",
    catTitle: "Four groups of gear.",
    pending: "Awaiting confirmation",
  },
} as const;

export function Toko({ lang }: { lang: Lang }) {
  const { storeCategories, storeChannels } = getContent(lang);
  const t = ui[lang];

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} />

      {/* Etalase */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <RevealItem>
            <Eyebrow>{t.whereEyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
              {t.whereTitle}
            </h2>
          </RevealItem>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {storeChannels.map((c) => (
              <RevealItem key={c.platform} variant={scaleIn}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <TiltCard className="h-full">
                    <div className="flex h-full flex-col justify-between gap-10 p-8">
                      <div className="flex items-start justify-between">
                        <LogoCrest size={80} className="h-10 w-10 ring-1 ring-white/10" />
                        <span className="rounded-full border border-amber-400/25 bg-amber-400/[0.07] px-2.5 py-1 text-[10px] font-medium text-amber-400">
                          {t.soon}
                        </span>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-flare-400">
                          {c.platform}
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-800 tracking-tight text-bone-50">
                          {c.handle}
                        </h3>
                        <p className="mt-2 text-sm text-bone-400">{c.note}</p>
                        <span className="mt-6 inline-block text-xs text-bone-400 transition-colors group-hover:text-volt-400">
                          {t.open}
                          <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                            &rarr;
                          </span>
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </a>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Kategori */}
      <section className="border-y border-white/[0.07] bg-ink-900/60">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <RevealItem>
              <Eyebrow>{t.catEyebrow}</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
                {t.catTitle}
              </h2>
            </RevealItem>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2">
              {storeCategories.map((k, i) => (
                <RevealItem key={k.name}>
                  <div className="group h-full bg-ink-850 p-8 transition-colors duration-300 hover:bg-ink-800">
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-display text-[11px] font-700 tracking-[0.2em] text-flare-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-full border border-amber-400/25 bg-amber-400/[0.07] px-2.5 py-1 text-[10px] font-medium text-amber-400">
                        {t.pending}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-700 tracking-tight text-bone-50">
                      {k.name}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.75] text-bone-400">{k.detail}</p>
                    <span
                      aria-hidden
                      className="mt-5 block h-px w-0 bg-linear-to-r from-flare-500 to-volt-400 transition-all duration-500 group-hover:w-full"
                    />
                  </div>
                </RevealItem>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
