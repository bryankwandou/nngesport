import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal, RevealItem, fadeUp, scaleIn } from "@/components/motion-primitives";
import { Eyebrow, Marquee, SourceBadge, TiltCard } from "@/components/ui";
import { LogoMark } from "@/components/Logo";
import { divisions, leadership, milestones, org, timeline, values } from "@/content/nng";

export default function Beranda() {
  const sorotan = [
    "Berdiri sejak 2010",
    "Abepura, Jayapura, Papua",
    "Mitra kreator Mobile Legends",
    "Lima judul permainan",
    "Bangun ulang tiga kali",
    "Siniar dan templat sunting",
  ];

  return (
    <>
      <Hero />

      <Marquee items={sorotan} />

      {/* ------------------------------------------------------- Pengantar --- */}
      <section className="container-page py-24 md:py-32">
        <Reveal className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <RevealItem>
            <Eyebrow>Siapa kami</Eyebrow>
            <h2 className="mt-5 max-w-md font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-800 leading-[1.06] tracking-[-0.03em]">
              Tidak ada bagian yang datang dengan cepat.
            </h2>
          </RevealItem>

          <RevealItem className="space-y-5 text-[15px] leading-[1.75] text-bone-200">
            <p>{org.intro}</p>
            <p className="text-bone-400">
              Yang membedakan NNG dari kebanyakan tim yang muncul belakangan bukan jumlah
              pengikut, melainkan panjang catatannya. Kanal pertama dibuka pada 2017,
              disusul pindah ritme ke format pendek setahun kemudian. Ketika tiga kanal
              terdahulu hilang kena penalti platform, semuanya dimulai lagi dari satu
              pengikut, bukan dibiarkan mati.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {divisions.map((d) => (
                <span
                  key={d.code}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-bone-200"
                >
                  {d.code}
                </span>
              ))}
            </div>
          </RevealItem>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------- Divisi --- */}
      <section className="border-y border-white/[0.07] bg-ink-900/60">
        <div className="container-page py-24 md:py-28">
          <Reveal>
            <RevealItem>
              <Eyebrow>Divisi</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-800 leading-[1.06] tracking-[-0.03em]">
                Lima judul yang benar-benar dimainkan, bukan sekadar dicantumkan.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-400">
                Daftar di bawah diambil dari keterangan kanal resmi. Tidak ada judul
                tambahan yang dimasukkan hanya supaya barisnya terlihat penuh.
              </p>
            </RevealItem>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {divisions.map((d, i) => (
                <RevealItem key={d.code} variant={scaleIn}>
                  <TiltCard className="h-full">
                    <div className="flex h-full flex-col p-6">
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-display text-[11px] font-700 tracking-[0.2em] text-violet-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <SourceBadge verified={d.verified} />
                      </div>
                      <h3 className="mt-6 font-display text-lg font-700 leading-snug tracking-tight text-bone-50">
                        {d.game}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-bone-400">
                        {d.blurb}
                      </p>
                      <span className="mt-6 inline-block w-fit rounded-md bg-white/[0.05] px-2 py-1 font-display text-[10px] font-700 tracking-[0.16em] text-bone-400">
                        {d.code}
                      </span>
                    </div>
                  </TiltCard>
                </RevealItem>
              ))}

              <RevealItem variant={scaleIn}>
                <Link
                  href="/roster"
                  className="group relative flex h-full min-h-[214px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-linear-to-br from-violet-600/20 to-cyan-400/[0.06] p-6 transition-colors duration-300 hover:border-violet-400/40"
                >
                  <LogoMark uid="cta-div" className="h-10 w-10" />
                  <div>
                    <p className="font-display text-lg font-700 leading-snug tracking-tight text-bone-50">
                      Susunan pemain
                    </p>
                    <p className="mt-2 text-sm text-bone-400">
                      Lihat posisi yang masih terbuka
                      <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </p>
                  </div>
                </Link>
              </RevealItem>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------ Kepemimpinan --- */}
      <section className="container-page py-24 md:py-32">
        <Reveal>
          <RevealItem>
            <Eyebrow>Yang memimpin</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-800 leading-[1.06] tracking-[-0.03em]">
              Dua orang, satu kebiasaan yang sama.
            </h2>
          </RevealItem>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {leadership.map((p) => (
              <RevealItem key={p.handle}>
                <TiltCard className="h-full" intensity={4}>
                  <div className="flex h-full flex-col p-7 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-linear-to-br from-violet-600 to-cyan-400 font-display text-lg font-800 text-white">
                        {p.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-400">
                          {p.role}
                        </p>
                        <h3 className="mt-1 truncate font-display text-xl font-700 tracking-tight text-bone-50">
                          {p.displayName}
                        </h3>
                        {p.legalName && (
                          <p className="mt-0.5 truncate text-xs text-bone-400">{p.legalName}</p>
                        )}
                      </div>
                      <div className="ml-auto shrink-0">
                        <SourceBadge verified={p.verified} href={p.source} />
                      </div>
                    </div>

                    <p className="mt-6 text-sm leading-relaxed text-bone-200">{p.bio}</p>

                    <blockquote className="mt-6 border-l-2 border-violet-500/60 pl-4 text-sm italic leading-relaxed text-bone-400">
                      {p.quote}
                    </blockquote>

                    {p.note && (
                      <p className="mt-4 rounded-lg border border-amber-400/20 bg-amber-400/[0.05] px-3 py-2 text-xs leading-relaxed text-amber-400/90">
                        Catatan arsip: {p.note}
                      </p>
                    )}

                    <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-white/[0.07] pt-5">
                      {p.stats.map((s) => (
                        <div key={s.label}>
                          <dd className="font-display text-lg font-700 text-bone-50">
                            {s.value}
                          </dd>
                          <dt className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-bone-400">
                            {s.label}
                          </dt>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-bone-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </section>

      {/* --------------------------------------------------------- Prinsip --- */}
      <section className="border-y border-white/[0.07] bg-ink-900/60">
        <div className="container-page py-24 md:py-28">
          <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <RevealItem>
              <Eyebrow>Cara kerja</Eyebrow>
              <h2 className="mt-5 max-w-sm font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-800 leading-[1.06] tracking-[-0.03em]">
                Empat hal yang tidak dinegosiasikan.
              </h2>
            </RevealItem>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2">
              {values.map((v) => (
                <RevealItem key={v.index}>
                  <div className="group h-full bg-ink-850 p-7 transition-colors duration-300 hover:bg-ink-800">
                    <span className="font-display text-[11px] font-700 tracking-[0.2em] text-violet-400">
                      {v.index}
                    </span>
                    <h3 className="mt-4 font-display text-base font-700 tracking-tight text-bone-50">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-bone-400">{v.body}</p>
                    <span
                      aria-hidden
                      className="mt-5 block h-px w-0 bg-linear-to-r from-violet-500 to-cyan-400 transition-all duration-500 group-hover:w-full"
                    />
                  </div>
                </RevealItem>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ Garis waktu ringkas --- */}
      <section className="container-page py-24 md:py-32">
        <Reveal>
          <RevealItem className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Garis waktu</Eyebrow>
              <h2 className="mt-5 max-w-lg font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-800 leading-[1.06] tracking-[-0.03em]">
                Tujuh titik yang mengubah arah.
              </h2>
            </div>
            <Link
              href="/sejarah"
              className="group text-sm font-semibold text-bone-200 transition-colors hover:text-violet-400"
            >
              Versi lengkap
              <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </RevealItem>

          <ol className="mt-12 space-y-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06]">
            {timeline.map((t) => (
              <RevealItem key={`${t.year}-${t.title}`} as="li">
                <div className="group grid gap-3 bg-ink-850 px-6 py-6 transition-colors duration-300 hover:bg-ink-800 sm:grid-cols-[110px_1fr_auto] sm:items-baseline sm:gap-6 sm:px-8">
                  <span className="font-display text-2xl font-800 tracking-tight text-violet-400 transition-colors group-hover:text-cyan-400">
                    {t.year}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-700 tracking-tight text-bone-50">
                      {t.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-bone-400">
                      {t.body}
                    </p>
                  </div>
                  <div className="sm:justify-self-end">
                    <SourceBadge verified={t.verified} href={t.source} />
                  </div>
                </div>
              </RevealItem>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* -------------------------------------------------- Capaian di luar --- */}
      <section className="border-t border-white/[0.07] bg-ink-900/60">
        <div className="container-page py-24 md:py-28">
          <Reveal>
            <RevealItem>
              <Eyebrow>Di luar arena</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-800 leading-[1.06] tracking-[-0.03em]">
                Capaian yang jejaknya bisa ditelusuri siapa pun.
              </h2>
            </RevealItem>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {milestones.map((m) => (
                <RevealItem key={m.label} variant={fadeUp}>
                  <a
                    href={m.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-ink-850 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                  >
                    <span className="font-display text-[11px] font-700 tracking-[0.2em] text-cyan-400">
                      {m.year}
                    </span>
                    <h3 className="mt-4 font-display text-base font-700 leading-snug tracking-tight text-bone-50">
                      {m.label}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-bone-400">
                      {m.detail}
                    </p>
                    <span className="mt-5 text-xs text-bone-400 transition-colors group-hover:text-cyan-400">
                      Buka sumber
                      <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </span>
                  </a>
                </RevealItem>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------- Ajak --- */}
      <section className="container-page py-24 md:py-32">
        <Reveal>
          <RevealItem variant={scaleIn}>
            <div className="grain relative overflow-hidden rounded-3xl border border-white/[0.1] bg-linear-to-br from-violet-600/[0.18] via-ink-850 to-cyan-400/[0.08] px-8 py-16 text-center md:px-16 md:py-24">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]"
              />
              <LogoMark uid="cta" className="relative mx-auto h-16 w-16" />
              <h2 className="relative mx-auto mt-8 max-w-2xl font-display text-[clamp(1.9rem,4vw,3.1rem)] font-800 leading-[1.04] tracking-[-0.03em]">
                Kalau Anda melihat sesuatu di sini, mari bicara.
              </h2>
              <p className="relative mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-bone-200">
                Terbuka untuk sponsor, kerja sama merek, permintaan wawancara, dan pemain
                yang ingin mengisi posisi kosong.
              </p>
              <div className="relative mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  href="/kontak"
                  className="rounded-full bg-bone-50 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Kirim pesan
                </Link>
                <Link
                  href="/prestasi"
                  className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-bone-200 transition-colors duration-300 hover:border-white/30 hover:text-bone-50"
                >
                  Lihat catatan prestasi
                </Link>
              </div>
            </div>
          </RevealItem>
        </Reveal>
      </section>
    </>
  );
}
