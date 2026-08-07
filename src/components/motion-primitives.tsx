"use client";

import { motion, useInView, useReducedMotion, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

/*
  Kumpulan gerak yang dipakai berulang di seluruh situs.

  Satu aturan dipegang di semua tempat: gerakan masuk hanya sekali, jaraknya pendek,
  dan lengkung waktunya melambat di ujung. Halaman yang setiap elemennya bergoyang
  setiap kali digulir terasa murah, bukan hidup.
*/

const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

export function stagger(gap = 0.07, delay = 0): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: gap, delayChildren: delay } },
  };
}

/** Membungkus sebuah bagian halaman agar isinya masuk berurutan saat terlihat. */
export function Reveal({
  children,
  className,
  gap = 0.07,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
  as?: "div" | "section" | "ul" | "ol";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -8% 0px" });
  const still = useReducedMotion();

  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      ref={ref}
      className={className}
      variants={stagger(gap, delay)}
      initial={still ? false : "hidden"}
      animate={inView || still ? "show" : "hidden"}
    >
      {children}
    </Tag>
  );
}

/** Satu anak di dalam `Reveal`. */
export function RevealItem({
  children,
  className,
  variant = fadeUp,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  variant?: Variants;
  as?: "div" | "li" | "p" | "h2" | "h3" | "span";
}) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag variants={variant} className={className}>
      {children}
    </Tag>
  );
}

/**
 * Judul yang muncul kata demi kata.
 * Dipakai sekali per halaman, di bagian paling atas, supaya tetap terasa istimewa.
 */
export function SplitHeading({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const still = useReducedMotion();
  const words = text.split(" ");

  if (still) return <h1 className={className}>{text}</h1>;

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="show"
      variants={stagger(0.055, delay)}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "108%", opacity: 0 },
              show: { y: "0%", opacity: 1, transition: { duration: 0.78, ease: EASE } },
            }}
            aria-hidden
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
