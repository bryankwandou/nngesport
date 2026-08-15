"use client";

import { motion, useReducedMotion } from "motion/react";
import { SplitHeading, useHydrated } from "./motion-primitives";
import { Eyebrow } from "./ui";

/** Kepala halaman yang dipakai semua halaman selain beranda, supaya iramanya sama. */
export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  const hydrated = useHydrated();
  const still = useReducedMotion();

  /*
    Sama seperti di bagian pembuka beranda: sebelum skrip terpasang, tidak ada aturan
    gerak yang dikirim, sehingga kepala halaman tiba dalam keadaan terbaca penuh.
  */
  const masuk = (delay: number, geser: number) =>
    !hydrated || still
      ? {}
      : {
          initial: { opacity: 0, y: geser },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <header className="grain relative overflow-hidden border-b border-white/[0.07] pt-[68px]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-flare-600/[0.13] blur-[120px]" />
        <div className="absolute -right-20 bottom-[-40%] h-[24rem] w-[24rem] rounded-full bg-volt-400/[0.08] blur-[110px]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 90% at 30% 50%, black, transparent)",
        }}
      />

      <div className="container-page relative py-20 md:py-28">
        <motion.div {...masuk(0, 10)}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>

        <SplitHeading
          text={title}
          delay={0.1}
          className="mt-6 max-w-4xl font-display text-[clamp(2.2rem,5.6vw,4rem)] font-800 leading-[1.02] tracking-[-0.035em] text-gradient"
        />

        {lead && (
          <motion.p
            {...masuk(0.4, 14)}
            className="mt-6 max-w-2xl text-[15px] leading-relaxed text-bone-200"
          >
            {lead}
          </motion.p>
        )}
      </div>
    </header>
  );
}
