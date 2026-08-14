"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { LogoLockup } from "./Logo";
import { getContent } from "@/content";
import { path as routePath, routeFromPath, type Lang } from "@/lib/i18n";

const ui = {
  id: {
    home: "NNG Esport, kembali ke beranda",
    mainNav: "Navigasi utama",
    cta: "Ajak kerja sama",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    switchTo: "Baca dalam bahasa Inggris",
  },
  en: {
    home: "NNG Esport, back to home",
    mainNav: "Main navigation",
    cta: "Work with us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchTo: "Baca dalam bahasa Indonesia",
  },
} as const;

/**
 * Tombol pindah bahasa.
 *
 * Berdiri di ruang modul, bukan di dalam SiteHeader. Komponen yang didefinisikan
 * ulang tiap render akan dianggap React sebagai jenis yang berbeda setiap kali,
 * sehingga simpulnya dibongkar dan dipasang lagi alih-alih diperbarui.
 */
function LangSwitch({
  href,
  lang,
  label,
  className = "",
}: {
  href: string;
  lang: Lang;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      hrefLang={lang}
      aria-label={label}
      className={`rounded-full px-3 py-2 font-display text-[11px] font-700 tracking-[0.14em] text-bone-400 ring-1 ring-white/10 transition-colors hover:text-bone-50 hover:ring-white/25 ${className}`}
    >
      {lang.toUpperCase()}
    </Link>
  );
}

export function SiteHeader({ lang = "id" }: { lang?: Lang }) {
  const path = usePathname();
  const [lifted, setLifted] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  const { nav } = getContent(lang);
  const t = ui[lang];

  useMotionValueEvent(scrollY, "change", (v) => setLifted(v > 12));

  /*
    Tutup laci begitu alamat berubah, supaya isi halaman baru tidak tertutup.
    Penyesuaian dikerjakan saat render, bukan lewat effect, agar React tidak
    sempat menggambar satu bingkai dengan laci yang masih terbuka di halaman baru.
  */
  const [pathSaatDibuka, setPathSaatDibuka] = useState(path);
  if (pathSaatDibuka !== path) {
    setPathSaatDibuka(path);
    setOpen(false);
  }

  /* Kunci gulir badan halaman selama laci terbuka. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const homeHref = lang === "en" ? "/en" : "/";
  const contactHref = routePath("contact", lang);

  /*
    Tombol bahasa membawa pembaca ke halaman yang sama, bukan ke beranda.
    Seseorang yang sedang membaca sejarah lalu berpindah bahasa hampir pasti
    ingin membaca sejarah, dan melemparnya ke beranda memaksanya mencari lagi.
  */
  const otherLang: Lang = lang === "id" ? "en" : "id";
  const swapHref = routePath(routeFromPath(path), otherLang);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          lifted
            ? "border-b border-white/[0.07] bg-ink-950/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-page flex h-[68px] items-center justify-between">
          <Link href={homeHref} aria-label={t.home}>
            <LogoLockup />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label={t.mainNav}>
            {nav.map((item) => {
              const active =
                item.href === homeHref ? path === homeHref : path.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="relative rounded-full px-3.5 py-2 text-[13px] font-medium text-bone-400 transition-colors hover:text-bone-50"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.07] ring-1 ring-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={`relative ${active ? "text-bone-50" : ""}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <LangSwitch href={swapHref} lang={otherLang} label={t.switchTo} className="hidden sm:block" />

            <Link
              href={contactHref}
              className="hidden rounded-full bg-linear-to-r from-flare-600 to-flare-500 px-4 py-2 text-[13px] font-semibold text-white shadow-[0_0_0_1px_rgba(244,33,59,0.4),0_10px_30px_-12px_rgba(209,15,40,0.85)] transition-transform duration-300 hover:-translate-y-px sm:block"
            >
              {t.cta}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="laci-nav"
              aria-label={open ? t.closeMenu : t.openMenu}
              className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/10 md:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-[1.5px] w-4 bg-bone-50 transition-all duration-300 ${
                    open ? "top-[5px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[1.5px] w-4 bg-bone-50 transition-all duration-300 ${
                    open ? "top-[5px] -rotate-45" : "top-[10px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="laci-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink-950/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="container-page flex h-full flex-col justify-center gap-1 pb-16">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className="block border-b border-white/[0.06] py-4 font-display text-3xl font-700 tracking-tight text-bone-50"
                  >
                    <span className="mr-3 font-sans text-xs text-bone-400">
                      0{i + 1}
                    </span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + nav.length * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pt-7"
              >
                <LangSwitch href={swapHref} lang={otherLang} label={t.switchTo} />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
