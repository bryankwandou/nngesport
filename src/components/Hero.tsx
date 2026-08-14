"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef } from "react";
import { LogoCrest } from "./Logo";
import { SplitHeading, useHydrated } from "./motion-primitives";
import { Counter } from "./ui";
import { getContent } from "@/content";
import { path as routePath, type Lang } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Bagian pembuka.
 *
 * Tiga lapisan bergerak dengan kecepatan berbeda saat halaman digulir: kabut di
 * belakang paling lambat, lambang di tengah, teks paling depan. Selisih kecepatan
 * itu yang memberi kesan kedalaman tanpa perlu memuat pustaka tiga dimensi.
 */

const ui = {
  id: {
    since: "sejak",
    headline: "Lima puluh tujuh ribu unggahan.",
    readJourney: "Baca perjalanannya",
    seeChannels: "Lihat kanal resmi",
    uploads: "Unggahan",
    followers: "Pengikut",
    divisions: "Cabang kompetitif",
  },
  en: {
    since: "since",
    headline: "Fifty-seven thousand uploads.",
    readJourney: "Read how it went",
    seeChannels: "See the official channels",
    uploads: "Uploads",
    followers: "Followers",
    divisions: "Competitive divisions",
  },
} as const;

export function Hero({ lang = "id" }: { lang?: Lang }) {
  const { org } = getContent(lang);
  const t = ui[lang];
  const wrap = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();
  const hydrated = useHydrated();

  /*
    Menyusun aturan gerak masuk untuk satu elemen.

    Sebelum skrip selesai dipasang, tidak ada aturan apa pun yang dikembalikan, sehingga
    elemen digambar penuh sejak HTML pertama tiba. Versi sebelumnya menaruh opasitas nol
    langsung di HTML peladen, yang berarti judul, paragraf, dan kedua tombol ajakan
    dikirim dalam keadaan tidak terlihat. Kalau skrip gagal dimuat, pembaca hanya
    mendapat layar kosong, dan mesin pencari membaca halaman tanpa tombol sama sekali.
  */
  const masuk = (delay: number, geser = 16) =>
    !hydrated || still
      ? {}
      : {
          initial: { opacity: 0, y: geser },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.7, ease: EASE },
        };

  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end start"],
  });

  const yFog = useTransform(scrollYProgress, [0, 1], ["0%", "34%"]);
  const yMark = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  /* Lambang ikut memiringkan diri mengikuti posisi kursor di layar. */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 90,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), {
    stiffness: 90,
    damping: 20,
  });

  useEffect(() => {
    if (still) return;
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, still]);

  return (
    <section
      ref={wrap}
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-[68px]"
    >
      {/* Kabut warna di lapisan terjauh */}
      <motion.div aria-hidden style={{ y: still ? 0 : yFog }} className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-[-12%] h-[46rem] w-[46rem] rounded-full bg-flare-600/[0.16] blur-[130px]" />
        <div className="absolute -right-32 top-[18%] h-[34rem] w-[34rem] rounded-full bg-volt-400/[0.10] blur-[120px]" />
        <div className="absolute bottom-[-20%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-flare-500/[0.09] blur-[110px]" />
      </motion.div>

      {/* Kisi tipis sebagai lantai visual */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 78% 62% at 50% 42%, black, transparent)",
        }}
      />

      <motion.div style={{ opacity: still ? 1 : fade }} className="container-page relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.div style={{ y: still ? 0 : yText }}>
            <motion.p
              {...masuk(0, 12)}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.16em] uppercase text-bone-400 backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-volt-400" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-volt-400" />
              </span>
              {org.base} &middot; {t.since} {org.founded}
            </motion.p>

            <SplitHeading
              text={t.headline}
              delay={0.12}
              className="mt-6 font-display text-[clamp(2.6rem,7vw,4.9rem)] font-800 leading-[0.98] tracking-[-0.035em] text-gradient"
            />

            <motion.p
              {...masuk(0.5)}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-bone-200 sm:text-base"
            >
              {org.longIntro}
            </motion.p>

            <motion.div
              {...masuk(0.62)}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href={routePath("history", lang)}
                className="group relative overflow-hidden rounded-full bg-linear-to-r from-flare-600 to-flare-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(244,33,59,0.45),0_18px_40px_-16px_rgba(209,15,40,0.9)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="relative z-10">{t.readJourney}</span>
                <span
                  aria-hidden
                  className="absolute inset-y-0 -left-1/3 w-1/3 bg-white/25 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100 group-hover:[animation:sweep_0.9s_ease-out]"
                />
              </Link>
              <Link
                href={routePath("channels", lang)}
                className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-bone-200 transition-colors duration-300 hover:border-white/25 hover:text-bone-50"
              >
                {t.seeChannels}
              </Link>
            </motion.div>

            <motion.dl
              {...masuk(0.8, 0)}
              className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/[0.08] pt-7"
            >
              {[
                { n: 57829, s: "", l: t.uploads },
                { n: 87067, s: "", l: t.followers },
                { n: 3, s: "", l: t.divisions },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="sr-only">{s.l}</dt>
                  <dd>
                    <Counter
                      to={s.n}
                      suffix={s.s}
                      className="block font-display text-3xl font-800 tracking-tight text-bone-50 sm:text-4xl"
                    />
                    <span className="mt-1.5 block text-[11px] uppercase tracking-[0.14em] text-bone-400">
                      {s.l}
                    </span>
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Lambang besar yang mengambang */}
          <motion.div
            style={{ y: still ? 0 : yMark }}
            className="relative hidden justify-self-center lg:block"
          >
            <motion.div
              {...(!hydrated || still
                ? {}
                : {
                    initial: { opacity: 0, scale: 0.86, rotate: -6 },
                    animate: { opacity: 1, scale: 1, rotate: 0 },
                    transition: { delay: 0.24, duration: 1.05, ease: EASE },
                  })}
              style={{ rotateX: still ? 0 : rx, rotateY: still ? 0 : ry, transformPerspective: 1000 }}
              className="relative"
            >
              <motion.div
                animate={still ? {} : { y: [0, -14, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <LogoCrest size={640} priority className="h-[21rem] w-[21rem] rounded-3xl shadow-2xl ring-1 ring-white/12" />
              </motion.div>

              {/* Cincin orbit yang berputar pelan di belakang lambang */}
              <motion.div
                aria-hidden
                animate={still ? {} : { rotate: 360 }}
                transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute inset-[-14%] rounded-full border border-dashed border-white/[0.09]"
              />
              <motion.div
                aria-hidden
                animate={still ? {} : { rotate: -360 }}
                transition={{ duration: 68, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute inset-[-27%] rounded-full border border-white/[0.05]"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Petunjuk gulir */}
      <motion.div
        aria-hidden
        style={{ opacity: still || !hydrated ? 1 : fade }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-9 w-[22px] justify-center rounded-full border border-white/15 pt-2">
          <motion.span
            animate={still ? {} : { y: [0, 9, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-[3px] rounded-full bg-bone-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
