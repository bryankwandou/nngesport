import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal, RevealItem, fadeUp, scaleIn } from "@/components/motion-primitives";
import { Eyebrow, Marquee, SourceBadge, TiltCard } from "@/components/ui";
import { LogoCrest } from "@/components/Logo";
import { AccountCard } from "@/components/AccountCard";
import { getContent } from "@/content";
import { path as routePath, type Lang } from "@/lib/i18n";

const ui = {
  id: {
    highlights: (motto: string) => [
      "Berdiri 2017",
      "Abepura, Jayapura, Papua",
      motto,
      "MLBB, PUBG, Valorant",
      "57.829 unggahan di tiga kanal",
      "Mitra kreator Mobile Legends",
      "Lini dagang NNG Store",
    ],
    whoEyebrow: "Siapa kami",
    numbersEyebrow: "Angka sebenarnya",
    divEyebrow: "Divisi",
    rosterCard: "Susunan pemain",
    rosterCardSub: "Lihat posisi yang masih terbuka",
    leadEyebrow: "Yang memimpin",
    tlEyebrow: "Garis waktu",
    tlTitle: (n: number) => `${n} titik yang mengubah arah.`,
    tlFull: "Versi lengkap",
    msEyebrow: "Di luar arena",
    openSource: "Buka sumber",
    ctaPrimary: "Kirim pesan",
    ctaSecondary: "Lihat catatan prestasi",
  },
  en: {
    highlights: (motto: string) => [
      "Established 2017",
      "Abepura, Jayapura, Papua",
      motto,
      "MLBB, PUBG, Valorant",
      "57,829 uploads across three channels",
      "Mobile Legends creator partner",
      "NNG Store merch line",
    ],
    whoEyebrow: "Who we are",
    numbersEyebrow: "The real numbers",
    divEyebrow: "Divisions",
    rosterCard: "The line-up",
    rosterCardSub: "See which positions are still open",
    leadEyebrow: "Who runs it",
    tlEyebrow: "Timeline",
    tlTitle: (n: number) => `${n} points where the direction changed.`,
    tlFull: "Full version",
    msEyebrow: "Away from the arena",
    openSource: "Open source",
    ctaPrimary: "Send a message",
    ctaSecondary: "See the record",
  },
} as const;

export function Beranda({ lang }: { lang: Lang }) {
  const {
    accountStats,
    divisions,
    leadership,
    milestones,
    motto,
    org,
    otherTitles,
    snapshotDate,
    timeline,
  } = getContent(lang);
  const t = ui[lang];

  return (
    <>
      <Hero lang={lang} />

      <Marquee items={t.highlights(motto)} />

      {/* ------------------------------------------------------- Pengantar --- */}
      <section className="container-page py-24 md:py-32">
        <Reveal className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <RevealItem>
            <Eyebrow>{t.whoEyebrow}</Eyebrow>
          </RevealItem>

          <RevealItem className="space-y-5 text-[15px] leading-[1.75] text-bone-200">
            <p>{org.intro}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {divisions.map((d) => (
                <span
                  key={d.code}
                  className="rounded-full border border-flare-500/30 bg-flare-500/[0.08] px-3 py-1.5 text-xs font-semibold text-flare-400"
                >
                  {d.code}
                </span>
              ))}
              {otherTitles.map((d) => (
                <span
                  key={d.code}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-bone-400"
                >
                  {d.code}
                </span>
              ))}
            </div>
          </RevealItem>
        </Reveal>
      </section>

      {/* ---------------------------------------------------- Akun resmi --- */}
      <section className="container-page pb-24 md:pb-32">
        <Reveal>
          <RevealItem>
            <Eyebrow>{t.numbersEyebrow}</Eyebrow>
          </RevealItem>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <RevealItem>
              <AccountCard account={accountStats.founder} snapshot={snapshotDate} accent="flare" lang={lang} />
            </RevealItem>
            <RevealItem>
              <AccountCard account={accountStats.esport} snapshot={snapshotDate} accent="flare" lang={lang} />
            </RevealItem>
            <RevealItem>
              <AccountCard account={accountStats.store} snapshot={snapshotDate} accent="volt" lang={lang} />
            </RevealItem>
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------- Divisi --- */}
      <section className="border-y border-white/[0.07] bg-ink-900/60">
        <div className="container-page py-24 md:py-28">
          <Reveal>
            <RevealItem>
              <Eyebrow>{t.divEyebrow}</Eyebrow>
            </RevealItem>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {divisions.map((d, i) => (
                <RevealItem key={d.code} variant={scaleIn}>
                  <TiltCard className="h-full">
                    <div className="flex h-full flex-col p-6">
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-display text-[11px] font-700 tracking-[0.2em] text-flare-400">
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
                  href={routePath("roster", lang)}
                  className="group relative flex h-full min-h-[214px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-linear-to-br from-flare-600/20 to-volt-400/[0.06] p-6 transition-colors duration-300 hover:border-flare-400/40"
                >
                  <LogoCrest size={80} className="h-10 w-10 ring-1 ring-white/10" />
                  <div>
                    <p className="font-display text-lg font-700 leading-snug tracking-tight text-bone-50">
                      {t.rosterCard}
                    </p>
                    <p className="mt-2 text-sm text-bone-400">
                      {t.rosterCardSub}
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
            <Eyebrow>{t.leadEyebrow}</Eyebrow>
          </RevealItem>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {leadership.map((p) => (
              <RevealItem key={p.handle}>
                <TiltCard className="h-full" intensity={4}>
                  <div className="flex h-full flex-col p-7 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-linear-to-br from-flare-600 to-volt-400 font-display text-lg font-800 text-white">
                        {p.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-flare-400">
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

                    <blockquote className="mt-6 border-l-2 border-flare-500/60 pl-4 text-sm italic leading-relaxed text-bone-400">
                      {p.quote}
                    </blockquote>

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
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-bone-200 transition-colors hover:border-volt-400/40 hover:text-volt-400"
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


      {/* ------------------------------------------------ Garis waktu ringkas --- */}
      <section className="container-page py-24 md:py-32">
        <Reveal>
          <RevealItem className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>{t.tlEyebrow}</Eyebrow>
              <h2 className="mt-5 max-w-lg font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-800 leading-[1.06] tracking-[-0.03em]">
                {t.tlTitle(timeline.length)}
              </h2>
            </div>
            <Link
              href={routePath("history", lang)}
              className="group text-sm font-semibold text-bone-200 transition-colors hover:text-flare-400"
            >
              {t.tlFull}
              <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </RevealItem>

          <ol className="mt-12 space-y-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06]">
            {timeline.map((e) => (
              <RevealItem key={`${e.year}-${e.title}`} as="li">
                <div className="group grid gap-3 bg-ink-850 px-6 py-6 transition-colors duration-300 hover:bg-ink-800 sm:grid-cols-[110px_1fr_auto] sm:items-baseline sm:gap-6 sm:px-8">
                  <span className="font-display text-2xl font-800 tracking-tight text-flare-400 transition-colors group-hover:text-volt-400">
                    {e.year}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-700 tracking-tight text-bone-50">
                      {e.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-bone-400">
                      {e.body}
                    </p>
                  </div>
                  <div className="sm:justify-self-end">
                    <SourceBadge verified={e.verified} href={e.source} />
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
              <Eyebrow>{t.msEyebrow}</Eyebrow>
            </RevealItem>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {milestones.map((m) => (
                <RevealItem key={m.label} variant={fadeUp}>
                  <a
                    href={m.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-ink-850 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-volt-400/30"
                  >
                    <span className="font-display text-[11px] font-700 tracking-[0.2em] text-volt-400">
                      {m.year}
                    </span>
                    <h3 className="mt-4 font-display text-base font-700 leading-snug tracking-tight text-bone-50">
                      {m.label}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-bone-400">
                      {m.detail}
                    </p>
                    <span className="mt-5 text-xs text-bone-400 transition-colors group-hover:text-volt-400">
                      {t.openSource}
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
            <div className="grain relative overflow-hidden rounded-3xl border border-white/[0.1] bg-linear-to-br from-flare-600/[0.18] via-ink-850 to-volt-400/[0.08] px-8 py-16 text-center md:px-16 md:py-24">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-flare-500/20 blur-[100px]"
              />
              <LogoCrest size={160} className="relative mx-auto h-20 w-20 ring-1 ring-white/12" />
              <div className="relative mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  href={routePath("contact", lang)}
                  className="rounded-full bg-bone-50 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {t.ctaPrimary}
                </Link>
                <Link
                  href={routePath("achievements", lang)}
                  className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-bone-200 transition-colors duration-300 hover:border-white/30 hover:text-bone-50"
                >
                  {t.ctaSecondary}
                </Link>
              </div>
            </div>
          </RevealItem>
        </Reveal>
      </section>
    </>
  );
}
