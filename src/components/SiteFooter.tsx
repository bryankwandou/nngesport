import Link from "next/link";
import { LogoMark } from "./Logo";
import { nav, org, channels } from "@/content/nng";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const verifiedChannels = channels.filter((c) => c.verified);

  return (
    <footer className="relative mt-32 border-t border-white/[0.07] bg-ink-900">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-flare-500/60 to-transparent"
      />

      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark uid="ftr" className="h-11 w-11" />
            <div>
              <p className="font-display text-lg font-800 tracking-tight">{org.name}</p>
              <p className="text-xs text-bone-400">
                {org.base}, {org.country}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-bone-400">
            {org.intro}
          </p>
        </div>

        <nav aria-label="Peta situs">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bone-400">
            Halaman
          </p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-bone-200 transition-colors hover:text-flare-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bone-400">
            Kanal terverifikasi
          </p>
          <ul className="mt-4 space-y-2.5">
            {verifiedChannels.map((c) => (
              <li key={`${c.platform}-${c.handle}`}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-bone-200 transition-colors hover:text-volt-400"
                >
                  {c.platform}
                  <span className="ml-1.5 text-bone-400">{c.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-bone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {org.name}. Berdiri sejak {org.founded}.
          </p>
          <p>
            Isi halaman ini disusun dari sumber daring terbuka. Bagian yang belum
            terkonfirmasi ditandai terbuka.
          </p>
        </div>
      </div>
    </footer>
  );
}
