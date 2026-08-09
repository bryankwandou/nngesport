import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function TidakDitemukan() {
  return (
    <section className="grain relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-flare-600/[0.14] blur-[130px]" />
      </div>

      <div className="relative">
        <LogoMark uid="e404" className="mx-auto h-16 w-16" />
        <p className="mt-8 font-display text-[clamp(4rem,14vw,8rem)] font-800 leading-none tracking-[-0.05em] text-gradient">
          404
        </p>
        <h1 className="mt-4 font-display text-xl font-700 tracking-tight text-bone-50">
          Halaman ini tidak ada di sini.
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-bone-400">
          Alamatnya mungkin salah ketik, atau halamannya sudah dipindah. Coba mulai lagi
          dari beranda.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-linear-to-r from-flare-600 to-flare-500 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          Kembali ke beranda
        </Link>
      </div>
    </section>
  );
}
