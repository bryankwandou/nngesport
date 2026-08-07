import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem, scaleIn } from "@/components/motion-primitives";
import { Eyebrow, SourceBadge, TiltCard } from "@/components/ui";
import { channels } from "@/content/nng";

export const metadata: Metadata = {
  title: "Kanal",
  description:
    "Daftar kanal resmi NNG Esport dan pendirinya di TikTok, YouTube, Instagram, Threads, dan objkt.",
};

export default function Kanal() {
  const utama = channels.filter((c) => c.primary);
  const pendiri = channels.filter((c) => !c.primary);

  return (
    <>
      <PageHeader
        eyebrow="Kanal resmi"
        title="Tempat semuanya sebenarnya terjadi."
        lead="Situs ini hanya rangkumannya. Isi yang sesungguhnya diunggah tiap hari di kanal-kanal berikut. Yang belum bisa dikonfirmasi tanpa masuk akun ditandai terbuka, bukan disembunyikan."
      />

      {/* Kanal organisasi */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <RevealItem>
            <Eyebrow>Kanal organisasi</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
              Dua nama, satu rumah.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-400">
              Sisi kompetitif berjalan di @nng_esport, sementara @nng_store mengurus lini
              dagangnya. TikTok menutup profilnya dari pembacaan otomatis, jadi angka
              pengikut di sini tidak diklaim.
            </p>
          </RevealItem>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {utama.map((c) => (
              <RevealItem key={`${c.platform}-${c.handle}`} variant={scaleIn}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <TiltCard className="h-full">
                    <div className="flex h-full flex-col p-7">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-400">
                          {c.platform}
                        </span>
                        <SourceBadge verified={c.verified} href={c.source} />
                      </div>
                      <h3 className="mt-6 font-display text-xl font-800 tracking-tight text-bone-50">
                        {c.handle}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-bone-400">{c.note}</p>
                      <span className="mt-7 text-xs text-bone-400 transition-colors group-hover:text-cyan-400">
                        Buka kanal
                        <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </span>
                    </div>
                  </TiltCard>
                </a>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Kanal pendiri */}
      <section className="border-y border-white/[0.07] bg-ink-900/60">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <RevealItem>
              <Eyebrow>Kanal pendiri</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
                Arsip yang panjangnya belasan tahun.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-400">
                Sebagian besar riwayat NNG tersimpan di sini, bukan di kanal organisasinya.
                Semua tautan di bawah sudah dibuka dan dikonfirmasi.
              </p>
            </RevealItem>

            <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2">
              {pendiri.map((c) => (
                <RevealItem key={`${c.platform}-${c.handle}`} as="li">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full items-center gap-5 bg-ink-850 p-6 transition-colors duration-300 hover:bg-ink-800"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] font-display text-[11px] font-800 tracking-tight text-bone-200">
                      {c.platform.slice(0, 2).toUpperCase()}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-display text-base font-700 tracking-tight text-bone-50">
                        {c.handle}
                      </p>
                      <p className="mt-0.5 truncate text-xs text-bone-400">
                        {c.platform} &middot; {c.note}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="shrink-0 text-bone-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-400"
                    >
                      &rarr;
                    </span>
                  </a>
                </RevealItem>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Catatan keterbatasan */}
      <section className="container-page py-20 md:py-24">
        <Reveal>
          <RevealItem>
            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-8 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">
                Keterbatasan pembacaan
              </p>
              <p className="mt-5 max-w-3xl text-sm leading-[1.8] text-bone-200">
                TikTok menolak permintaan otomatis dari luar aplikasinya, sehingga jumlah
                pengikut, daftar video, dan gambar profil @nng_esport serta @nng_store tidak
                bisa ditarik untuk halaman ini. Tautannya tetap dipasang agar pembaca bisa
                memeriksa sendiri. Begitu keterangan resminya diserahkan, angkanya akan
                ditampilkan lengkap dengan tanggal pengambilan.
              </p>
            </div>
          </RevealItem>
        </Reveal>
      </section>
    </>
  );
}
