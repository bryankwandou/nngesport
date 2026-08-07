import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem, scaleIn } from "@/components/motion-primitives";
import { EmptyState, Eyebrow, SourceBadge, TiltCard } from "@/components/ui";
import { divisions, leadership, openSlots, roster } from "@/content/nng";

export const metadata: Metadata = {
  title: "Roster",
  description:
    "Susunan pemain dan posisi yang masih terbuka di divisi NNG Esport.",
};

export default function Roster() {
  return (
    <>
      <PageHeader
        eyebrow="Susunan"
        title="Siapa yang turun bertanding."
        lead="Halaman ini hanya memuat nama yang sudah dikonfirmasi organisasi. Selama daftar resminya belum terbit, posisi ditampilkan sebagai slot terbuka, bukan diisi nama karangan."
      />

      {/* Pemain */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <RevealItem>
            <Eyebrow>Pemain aktif</Eyebrow>
          </RevealItem>

          {roster.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {roster.map((p) => (
                <RevealItem key={p.ign} variant={scaleIn}>
                  <TiltCard className="h-full">
                    <div className="p-7">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-400">
                        {p.role}
                      </p>
                      <h2 className="mt-2 font-display text-xl font-800 tracking-tight text-bone-50">
                        {p.ign}
                      </h2>
                      {p.realName && (
                        <p className="mt-1 text-xs text-bone-400">{p.realName}</p>
                      )}
                      <p className="mt-5 text-xs text-bone-400">{p.division}</p>
                    </div>
                  </TiltCard>
                </RevealItem>
              ))}
            </div>
          ) : (
            <RevealItem className="mt-10">
              <EmptyState
                title="Daftar resmi belum dirilis"
                body="Susunan pemain NNG belum terbit di sumber publik mana pun yang bisa dijangkau tanpa masuk akun. Menaruh nama tebakan di halaman resmi adalah cara tercepat kehilangan kepercayaan sponsor, jadi bagian ini dibiarkan kosong sampai datanya diserahkan."
                action={
                  <Link
                    href="/kontak"
                    className="inline-block rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-bone-200 transition-colors hover:border-violet-400/50 hover:text-bone-50"
                  >
                    Kirim data roster
                  </Link>
                }
              />
            </RevealItem>
          )}
        </Reveal>
      </section>

      {/* Slot terbuka */}
      <section className="border-y border-white/[0.07] bg-ink-900/60">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <RevealItem>
              <Eyebrow>Posisi terbuka</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
                Lima kursi di divisi Mobile Legends.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-400">
                Kerangka posisi standar lima orang. Nama pengisinya menyusul begitu seleksi
                selesai.
              </p>
            </RevealItem>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {openSlots.map((s, i) => (
                <RevealItem key={s.role} variant={scaleIn}>
                  <div className="group relative flex h-full min-h-[168px] flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-white/[0.14] bg-ink-850/50 p-5 transition-colors duration-300 hover:border-violet-400/40">
                    <span className="font-display text-[11px] font-700 tracking-[0.2em] text-bone-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-display text-base font-700 leading-snug tracking-tight text-bone-50">
                        {s.role}
                      </p>
                      <p className="mt-1.5 text-xs text-bone-400">{s.division}</p>
                    </div>
                    <span className="mt-4 inline-block w-fit rounded-full border border-amber-400/25 bg-amber-400/[0.07] px-2.5 py-1 text-[10px] font-medium text-amber-400">
                      Terbuka
                    </span>
                  </div>
                </RevealItem>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Manajemen */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <RevealItem>
            <Eyebrow>Manajemen</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
              Yang mengurus di belakang layar.
            </h2>
          </RevealItem>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {leadership.map((p) => (
              <RevealItem key={p.handle}>
                <div className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-ink-850 p-7">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-linear-to-br from-violet-600 to-cyan-400 font-display text-base font-800 text-white">
                      {p.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-400">
                        {p.role}
                      </p>
                      <h3 className="mt-1 truncate font-display text-lg font-700 tracking-tight text-bone-50">
                        {p.displayName}
                      </h3>
                    </div>
                    <SourceBadge verified={p.verified} href={p.source} />
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-bone-400">{p.bio}</p>
                </div>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Divisi */}
      <section className="border-t border-white/[0.07] bg-ink-900/60">
        <div className="container-page py-20 md:py-24">
          <Reveal>
            <RevealItem>
              <Eyebrow>Cakupan divisi</Eyebrow>
            </RevealItem>
            <div className="mt-8 flex flex-wrap gap-3">
              {divisions.map((d) => (
                <RevealItem key={d.code}>
                  <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-ink-850 px-4 py-2 text-sm text-bone-200">
                    <span className="font-display text-[10px] font-700 tracking-[0.14em] text-violet-400">
                      {d.code}
                    </span>
                    {d.game}
                  </span>
                </RevealItem>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
