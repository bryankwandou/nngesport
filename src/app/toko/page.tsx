import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem, scaleIn } from "@/components/motion-primitives";
import { Eyebrow, TiltCard } from "@/components/ui";
import { LogoCrest } from "@/components/Logo";
import { storeCategories, storeChannels } from "@/content/nng";

export const metadata: Metadata = {
  title: "Toko",
  description:
    "Lini dagang NNG Esport berjalan di @nng_store, tersedia di Instagram dan TikTok.",
};

export default function Toko() {
  return (
    <>
      <PageHeader
        eyebrow="Lini dagang"
        title="Barangnya dijual di @nng_store."
        lead="Sisi dagang NNG berdiri sebagai akun terpisah. Katalog resminya belum terbit di halaman yang bisa dibaca tanpa masuk akun, jadi halaman ini mengarahkan langsung ke etalasenya alih-alih memasang daftar harga yang belum tentu benar."
      />

      {/* Etalase */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <RevealItem>
            <Eyebrow>Tempat membeli</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
              Dua etalase, pengelola yang sama.
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
                          Katalog menyusul
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
                          Buka etalase
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
              <Eyebrow>Yang biasanya ada</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
                Empat kelompok barang.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-400">
                Daftar ini kerangka umum merchandise tim, bukan salinan katalog resmi.
                Ketersediaan sebenarnya, ukuran, dan harga hanya bisa dipastikan lewat
                etalase di atas.
              </p>
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
                        Menunggu konfirmasi
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

      {/* Catatan */}
      <section className="container-page py-20 md:py-24">
        <Reveal>
          <RevealItem>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-850 p-8 md:p-10">
              <Eyebrow>Kenapa tidak ada harga di sini</Eyebrow>
              <p className="mt-5 max-w-3xl text-sm leading-[1.8] text-bone-400">
                Memasang harga yang sudah berubah lebih merugikan daripada tidak memasang
                harga sama sekali. Pembeli yang datang membawa angka lama akan kecewa, dan
                penjualnya yang menanggung. Selama katalog resmi belum tersambung ke halaman
                ini, arah yang paling jujur adalah mengantar pembaca langsung ke etalase
                tempat angka sebenarnya ditulis.
              </p>
            </div>
          </RevealItem>
        </Reveal>
      </section>
    </>
  );
}
