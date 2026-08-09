import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem, scaleIn } from "@/components/motion-primitives";
import { Counter, EmptyState, Eyebrow } from "@/components/ui";
import { achievements, divisions, milestones } from "@/content/nng";

export const metadata: Metadata = {
  title: "Prestasi",
  description:
    "Catatan capaian NNG Esport, lengkap dengan tautan sumber untuk setiap butirnya.",
};

export default function Prestasi() {
  return (
    <>
      <PageHeader
        eyebrow="Catatan"
        title="Apa yang sudah benar-benar dicapai."
        lead="Setiap baris di halaman ini membawa tautan ke tempat keterangannya berasal. Yang belum punya tautan tidak ditulis di sini, sekalipun itu membuat daftarnya terlihat pendek."
      />

      {/* Ringkasan angka */}
      <section className="border-b border-white/[0.07]">
        <div className="container-page py-14">
          <Reveal className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { n: 8381, l: "Unggahan" },
              { n: divisions.length, l: "Cabang kompetitif" },
              { n: milestones.length, l: "Capaian bersumber" },
              { n: achievements.length, l: "Gelar turnamen" },
            ].map((s) => (
              <RevealItem key={s.l}>
                <Counter
                  to={s.n}
                  className="block font-display text-4xl font-800 tracking-tight text-bone-50 md:text-5xl"
                />
                <span className="mt-2 block text-[11px] uppercase tracking-[0.14em] text-bone-400">
                  {s.l}
                </span>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Turnamen */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <RevealItem>
            <Eyebrow>Turnamen</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
              Hasil pertandingan resmi.
            </h2>
          </RevealItem>

          {achievements.length > 0 ? (
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.08]">
              <table className="w-full text-left text-sm">
                <thead className="bg-ink-850 text-[11px] uppercase tracking-[0.14em] text-bone-400">
                  <tr>
                    <th className="px-6 py-4 font-medium">Tahun</th>
                    <th className="px-6 py-4 font-medium">Ajang</th>
                    <th className="px-6 py-4 font-medium">Divisi</th>
                    <th className="px-6 py-4 font-medium">Hasil</th>
                  </tr>
                </thead>
                <tbody>
                  {achievements.map((a) => (
                    <tr key={`${a.year}-${a.event}`} className="border-t border-white/[0.06]">
                      <td className="px-6 py-4 font-display font-700 text-flare-400">
                        {a.year}
                      </td>
                      <td className="px-6 py-4 text-bone-50">{a.event}</td>
                      <td className="px-6 py-4 text-bone-400">{a.division}</td>
                      <td className="px-6 py-4 text-bone-200">{a.placement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <RevealItem className="mt-10">
              <EmptyState
                title="Belum ada hasil turnamen yang bisa diverifikasi"
                body="Pencarian di sumber terbuka tidak menemukan catatan pertandingan resmi atas nama NNG Esport. Daftar gelar palsu memang bisa mengisi ruang kosong ini, tapi sponsor yang serius akan mengeceknya, dan satu klaim yang gugur merusak seluruh halaman."
                action={
                  <Link
                    href="/kontak"
                    className="inline-block rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-bone-200 transition-colors hover:border-flare-400/50 hover:text-bone-50"
                  >
                    Kirim bukti hasil pertandingan
                  </Link>
                }
              />
            </RevealItem>
          )}
        </Reveal>
      </section>

      {/* Capaian bersumber */}
      <section className="border-t border-white/[0.07] bg-ink-900/60">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <RevealItem>
              <Eyebrow>Terverifikasi</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
                {milestones.length} capaian yang bisa dibuka sendiri.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-400">
                Klik mana pun untuk membuka halaman aslinya. Tidak ada yang perlu dipercaya
                begitu saja.
              </p>
            </RevealItem>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {milestones.map((m, i) => (
                <RevealItem key={m.label} variant={scaleIn}>
                  <a
                    href={m.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-full items-start gap-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-850 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-volt-400/30"
                  >
                    <span className="font-display text-3xl font-800 tracking-tight text-white/[0.09] transition-colors duration-300 group-hover:text-flare-500/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-lg font-700 tracking-tight text-bone-50">
                          {m.label}
                        </h3>
                        <span className="rounded-full border border-volt-400/25 bg-volt-400/[0.07] px-2.5 py-0.5 text-[10px] font-medium text-volt-400">
                          {m.year}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-bone-400">{m.detail}</p>
                      <span className="mt-4 inline-block text-xs text-bone-400 transition-colors group-hover:text-volt-400">
                        Buka sumber
                        <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </span>
                    </div>
                  </a>
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
              <Eyebrow>Kenapa daftarnya pendek</Eyebrow>
              <p className="mt-5 max-w-3xl text-sm leading-[1.8] text-bone-400">
                Halaman prestasi tim besar biasanya panjang karena hasilnya tercatat di
                sistem penyelenggara liga. NNG belum punya jejak semacam itu di sumber
                terbuka, dan itu bukan sesuatu yang perlu ditutupi. Ruang ini akan terisi
                dengan sendirinya seiring tim mulai turun di ajang resmi. Sampai saat itu,
                yang ditampilkan adalah apa yang memang ada.
              </p>
            </div>
          </RevealItem>
        </Reveal>
      </section>
    </>
  );
}
