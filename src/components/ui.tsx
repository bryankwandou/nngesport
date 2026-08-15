"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";

/* Tidak pernah berubah, jadi React tidak perlu berlangganan apa pun. */
const noop = () => () => {};

/**
 * Bernilai salah selama render di peladen dan render pertama di peramban,
 * lalu benar setelahnya. Dipakai untuk memilih tampilan statis atau bergerak
 * tanpa memicu render berantai lewat setState di dalam effect.
 */
function useHydrated() {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false
  );
}

/* ---------------------------------------------------------------- Penanda ---- */

/**
 * Label kecil yang memberi tahu pembaca apakah sebuah keterangan punya sumber.
 * Ini bukan hiasan. Ini yang membedakan halaman profil sungguhan dari halaman
 * yang isinya dikarang.
 */
export function SourceBadge({
  verified,
  href,
}: {
  verified: boolean;
  href?: string;
}) {
  if (verified && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-volt-400/25 bg-volt-400/[0.07] px-2.5 py-1 text-[10px] font-medium tracking-wide text-volt-400 transition-colors hover:border-volt-400/50"
      >
        <span className="h-1 w-1 rounded-full bg-volt-400" />
        Sumber
      </a>
    );
  }
  if (verified) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-volt-400/25 bg-volt-400/[0.07] px-2.5 py-1 text-[10px] font-medium tracking-wide text-volt-400">
        <span className="h-1 w-1 rounded-full bg-volt-400" />
        Terkonfirmasi
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/[0.07] px-2.5 py-1 text-[10px] font-medium tracking-wide text-amber-400">
      <span className="h-1 w-1 rounded-full bg-amber-400" />
      Menunggu konfirmasi
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-bone-400">
      <span className="h-px w-7 bg-linear-to-r from-flare-500 to-volt-400" />
      {children}
    </p>
  );
}

/* ----------------------------------------------------------------- Angka ---- */

/**
 * Angka yang menghitung naik saat masuk layar.
 * Berhenti tepat di nilai akhir, tanpa memantul, supaya tetap terbaca sebagai data.
 *
 * Sebelum skrip jalan, yang tercetak adalah nilai akhirnya, bukan nol. Kalau nol
 * yang dikirim dari peladen, mesin pencari dan pembaca tanpa skrip akan melihat
 * organisasi ini punya nol pengikut, dan itu jauh lebih merugikan daripada
 * kehilangan animasinya.
 */
export function Counter({
  to,
  suffix = "",
  decimals = 0,
  className,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const ready = useHydrated();
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const still = useReducedMotion();

  const fmt = (v: number) =>
    v.toLocaleString("id-ID", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  const raw = useMotionValue(0);
  const smooth = useSpring(raw, { stiffness: 70, damping: 22, mass: 0.8 });
  const shown = useTransform(smooth, fmt);

  useEffect(() => {
    if (ready && inView) raw.set(to);
  }, [ready, inView, to, raw]);

  /* Render peladen dan render klien pertama sama-sama memakai nilai akhir. */
  if (!ready || still) {
    return (
      <span ref={ref} className={className}>
        {fmt(to)}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      <motion.span>{shown}</motion.span>
      {suffix}
    </span>
  );
}

/* ----------------------------------------------------------------- Kartu ---- */

/**
 * Kartu yang miring mengikuti kursor.
 *
 * Sudutnya sengaja dijaga kecil, sekitar enam derajat. Lebih dari itu kartunya
 * terlihat seperti mainan, bukan seperti panel data tim.
 */
export function TiltCard({
  children,
  className,
  intensity = 6,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rx = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), {
    stiffness: 220,
    damping: 24,
  });
  const ry = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), {
    stiffness: 220,
    damping: 24,
  });

  /* Sorotan cahaya mengikuti kursor, dihitung sekali sebagai satu nilai gerak. */
  const glare = useTransform(
    [px, py],
    ([x, y]: number[]) =>
      `radial-gradient(360px circle at ${x * 100}% ${y * 100}%, rgba(244,33,59,0.16), transparent 68%)`
  );

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-850 transition-colors duration-300 hover:border-white/[0.16] ${className ?? ""}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glare }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------- Marquee ---- */

/** Pita berjalan tanpa henti. Isinya digandakan agar sambungannya tidak terlihat. */
export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  const batasAsli = items.length;
  return (
    /*
      Isinya digandakan supaya sambungannya tidak terlihat, jadi salinan kedua
      disembunyikan dari pembaca layar agar tidak dibacakan dua kali.
      Peran marquee tidak dipakai karena bukan peran yang sah menurut ARIA.
    */
    <div
      className="relative flex overflow-hidden border-y border-white/[0.07] bg-ink-900 py-3.5"
      aria-label="Sorotan singkat"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-ink-900 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-ink-900 to-transparent"
      />
      <div className="animate-marquee flex shrink-0 items-center gap-10 whitespace-nowrap pr-10">
        {doubled.map((t, i) => (
          <span
            key={i}
            aria-hidden={i >= batasAsli}
            className="flex items-center gap-10 text-xs tracking-[0.18em] text-bone-400 uppercase"
          >
            {t}
            <span aria-hidden className="h-1 w-1 rounded-full bg-flare-500" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- Slot kosong -- */

/**
 * Dipakai ketika sebuah bagian memang belum punya data.
 * Menyatakan kekosongan itu terang-terangan jauh lebih baik daripada mengisinya
 * dengan tebakan yang bisa dibantah orang lain.
 */
export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body?: string;
  action?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/[0.14] bg-ink-850/60 px-6 py-14 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-flare-600/10 blur-3xl"
      />
      <p className="relative font-display text-xl font-700 tracking-tight text-bone-50">
        {title}
      </p>
      {body && (
        <p className="relative mx-auto mt-3 max-w-md text-sm leading-relaxed text-bone-400">
          {body}
        </p>
      )}
      {action && <div className="relative mt-6">{action}</div>}
    </div>
  );
}
