import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem, scaleIn } from "@/components/motion-primitives";
import { Counter, EmptyState, Eyebrow } from "@/components/ui";
import { getContent } from "@/content";
import { path as routePath, type Lang } from "@/lib/i18n";

export const meta = {
  id: {
    title: "Prestasi",
    description:
      "Catatan capaian NNG Esport, lengkap dengan tautan sumber untuk setiap butirnya.",
  },
  en: {
    title: "Achievements",
    description:
      "What NNG Esport has actually done, with a source link on every single line.",
  },
} as const;

const ui = {
  id: {
    eyebrow: "Catatan",
    title: "Apa yang sudah benar-benar dicapai.",
    lead: "Setiap baris di halaman ini membawa tautan ke tempat keterangannya berasal. Yang belum punya tautan tidak ditulis di sini, sekalipun itu membuat daftarnya terlihat pendek.",
    stats: ["Unggahan", "Cabang kompetitif", "Capaian bersumber", "Gelar turnamen"],
    tourneyEyebrow: "Turnamen",
    tourneyTitle: "Hasil pertandingan resmi.",
    thYear: "Tahun",
    thEvent: "Ajang",
    thDivision: "Divisi",
    thResult: "Hasil",
    emptyTitle: "Belum ada hasil turnamen yang bisa diverifikasi",
    emptyBody:
      "Pencarian di sumber terbuka tidak menemukan catatan pertandingan resmi atas nama NNG Esport. Daftar gelar palsu memang bisa mengisi ruang kosong ini, tapi sponsor yang serius akan mengeceknya, dan satu klaim yang gugur merusak seluruh halaman.",
    emptyAction: "Kirim bukti hasil pertandingan",
    verifiedEyebrow: "Terverifikasi",
    verifiedTitle: (n: number) => `${n} capaian yang bisa dibuka sendiri.`,
    verifiedLead:
      "Klik mana pun untuk membuka halaman aslinya. Tidak ada yang perlu dipercaya begitu saja.",
    openSource: "Buka sumber",
  },
  en: {
    eyebrow: "The record",
    title: "What has actually been achieved.",
    lead: "Every line on this page carries a link to where it came from. Anything without a link is not written here, even though that keeps the list short.",
    stats: ["Uploads", "Competitive divisions", "Sourced achievements", "Tournament titles"],
    tourneyEyebrow: "Tournaments",
    tourneyTitle: "Official competitive results.",
    thYear: "Year",
    thEvent: "Event",
    thDivision: "Division",
    thResult: "Result",
    emptyTitle: "No tournament result can be verified yet",
    emptyBody:
      "A search of open sources turns up no official competitive record under the NNG Esport name. A list of invented titles would fill this space, but any serious sponsor checks, and one claim that collapses takes the whole page down with it.",
    emptyAction: "Send proof of a result",
    verifiedEyebrow: "Verified",
    verifiedTitle: (n: number) => `${n} achievements you can open yourself.`,
    verifiedLead:
      "Click any of them to open the original page. Nothing here asks to be taken on trust.",
    openSource: "Open source",
  },
} as const;

export function Prestasi({ lang }: { lang: Lang }) {
  const { achievements, divisions, milestones } = getContent(lang);
  const t = ui[lang];

  const angka = [
    { n: 57829, l: t.stats[0] },
    { n: divisions.length, l: t.stats[1] },
    { n: milestones.length, l: t.stats[2] },
    { n: achievements.length, l: t.stats[3] },
  ];

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      {/* Ringkasan angka */}
      <section className="border-b border-white/[0.07]">
        <div className="container-page py-14">
          <Reveal className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {angka.map((s) => (
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
            <Eyebrow>{t.tourneyEyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
              {t.tourneyTitle}
            </h2>
          </RevealItem>

          {achievements.length > 0 ? (
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.08]">
              <table className="w-full text-left text-sm">
                <thead className="bg-ink-850 text-[11px] uppercase tracking-[0.14em] text-bone-400">
                  <tr>
                    <th className="px-6 py-4 font-medium">{t.thYear}</th>
                    <th className="px-6 py-4 font-medium">{t.thEvent}</th>
                    <th className="px-6 py-4 font-medium">{t.thDivision}</th>
                    <th className="px-6 py-4 font-medium">{t.thResult}</th>
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
                title={t.emptyTitle}
                body={t.emptyBody}
                action={
                  <Link
                    href={routePath("contact", lang)}
                    className="inline-block rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-bone-200 transition-colors hover:border-flare-400/50 hover:text-bone-50"
                  >
                    {t.emptyAction}
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
              <Eyebrow>{t.verifiedEyebrow}</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
                {t.verifiedTitle(milestones.length)}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-400">
                {t.verifiedLead}
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
                        {t.openSource}
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
    </>
  );
}
