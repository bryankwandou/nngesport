import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem } from "@/components/motion-primitives";
import { Eyebrow, SourceBadge } from "@/components/ui";
import { org, timeline, values } from "@/content/nng";

export const metadata: Metadata = {
  title: "Sejarah",
  description:
    "Perjalanan NNG Esport dari kebiasaan merekam permainan pada 2010 sampai berdiri sebagai organisasi.",
};

export default function Sejarah() {
  return (
    <>
      <PageHeader
        eyebrow="Perjalanan"
        title="Sembilan tahun, satu benang merah."
        lead={org.longIntro}
      />

      {/* Garis waktu bertulang */}
      <section className="container-page py-20 md:py-28">
        <Reveal gap={0.09}>
          <ol className="relative">
            {/* Tulang punggung vertikal */}
            <span
              aria-hidden
              className="absolute left-[7px] top-2 bottom-2 w-px bg-linear-to-b from-flare-500/70 via-white/10 to-transparent md:left-[calc(120px+7px)]"
            />

            {timeline.map((t) => (
              <RevealItem key={`${t.year}-${t.title}`} as="li">
                <article className="group relative grid gap-4 pb-14 pl-9 md:grid-cols-[120px_1fr] md:gap-10 md:pl-0">
                  <div className="md:text-right">
                    <span className="font-display text-2xl font-800 tracking-tight text-bone-50 md:text-3xl">
                      {t.year}
                    </span>
                  </div>

                  {/* Simpul di garis */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 grid h-[15px] w-[15px] place-items-center rounded-full border border-flare-500/50 bg-ink-950 transition-all duration-300 group-hover:border-volt-400 md:left-[120px]"
                  >
                    <span className="h-[5px] w-[5px] rounded-full bg-flare-500 transition-colors duration-300 group-hover:bg-volt-400" />
                  </span>

                  <div className="md:pl-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-display text-lg font-700 tracking-tight text-bone-50">
                        {t.title}
                      </h2>
                      <SourceBadge verified={t.verified} href={t.source} />
                    </div>
                    <p className="mt-3 max-w-2xl text-[15px] leading-[1.75] text-bone-400">
                      {t.body}
                    </p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Prinsip */}
      <section className="border-t border-white/[0.07] bg-ink-900/60">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <RevealItem>
              <Eyebrow>Yang dipegang</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
                Kalau catatannya panjang, alasannya biasanya sederhana.
              </h2>
            </RevealItem>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {values.map((v) => (
                <RevealItem key={v.index}>
                  <div className="group h-full rounded-2xl border border-white/[0.08] bg-ink-850 p-8 transition-colors duration-300 hover:border-white/[0.16]">
                    <span className="font-display text-[11px] font-700 tracking-[0.2em] text-flare-400">
                      {v.index}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-700 tracking-tight text-bone-50">
                      {v.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.75] text-bone-400">{v.body}</p>
                  </div>
                </RevealItem>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Catatan metode */}
      <section className="container-page py-20 md:py-24">
        <Reveal>
          <RevealItem>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-850 p-8 md:p-10">
              <Eyebrow>Catatan penyusunan</Eyebrow>
              <p className="mt-5 max-w-3xl text-sm leading-[1.8] text-bone-400">
                Semua keterangan di halaman ini ditarik dari profil publik yang bisa dibuka
                siapa pun tanpa perlu masuk akun. Setiap butir membawa tautan ke tempat
                keterangan itu berasal. Bagian yang belum punya sumber terbuka, seperti
                susunan pemain dan hasil turnamen, sengaja dibiarkan kosong dan ditandai
                terbuka. Halaman ini akan diperbarui begitu tim menyerahkan arsipnya.
              </p>
            </div>
          </RevealItem>
        </Reveal>
      </section>
    </>
  );
}
