import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem, scaleIn } from "@/components/motion-primitives";
import { Counter, Eyebrow, SourceBadge, TiltCard } from "@/components/ui";
import { channels, instagramAccounts, snapshotDate } from "@/content/nng";

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
              dagangnya. Angka di bawah ditarik dari halaman profil pada {snapshotDate}.
            </p>
          </RevealItem>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {utama.map((c) => (
              <RevealItem key={`${c.platform}-${c.handle}`} variant={scaleIn}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <TiltCard className="h-full">
                    <div className="flex h-full flex-col p-7">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-flare-400">
                          {c.platform}
                        </span>
                        <SourceBadge verified={c.verified} href={c.source} />
                      </div>
                      <h3 className="mt-6 font-display text-xl font-800 tracking-tight text-bone-50">
                        {c.handle}
                      </h3>
                      <p className="mt-2 text-sm text-bone-400">{c.note}</p>
                      {c.stat && <p className="mt-3 text-xs text-bone-200">{c.stat}</p>}
                      <div className="flex-1" />
                      <span className="mt-7 text-xs text-bone-400 transition-colors group-hover:text-volt-400">
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
                      className="shrink-0 text-bone-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-volt-400"
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

      {/* Instagram */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <RevealItem>
            <Eyebrow>Instagram</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
              Jauh lebih sepi, dan itu memang apa adanya.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-400">
              Angka di Instagram tidak sebanding dengan TikTok. Menyembunyikan selisih itu
              tidak ada gunanya, karena siapa pun bisa membuka kedua profil dan
              membandingkan sendiri.
            </p>
          </RevealItem>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {instagramAccounts.map((a) => (
              <RevealItem key={a.handle} variant={scaleIn}>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-ink-850 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-volt-400/30"
                >
                  <div className="flex items-start gap-4">
                    <Image
                      src={a.avatar}
                      alt={`Foto profil Instagram ${a.handle}`}
                      width={100}
                      height={100}
                      className="h-14 w-14 shrink-0 rounded-full object-cover ring-1 ring-white/10"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-display text-lg font-800 tracking-tight text-bone-50">
                        {a.handle}
                      </h3>
                      <p className="mt-0.5 truncate text-xs text-bone-400">
                        {a.fullName ?? a.note}
                      </p>
                    </div>
                  </div>

                  {a.bio && (
                    <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-bone-400">
                      {a.bio}
                    </p>
                  )}

                  <div className="flex-1" />

                  <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/[0.07] pt-5">
                    {[
                      { k: "Pengikut", v: a.followers },
                      { k: "Unggahan", v: a.posts },
                      { k: "Diikuti", v: a.following },
                    ].map((s) => (
                      <div key={s.k}>
                        <dd className="font-display text-base font-800 tracking-tight text-bone-50">
                          <Counter to={s.v} />
                        </dd>
                        <dt className="mt-0.5 text-[10px] uppercase tracking-[0.1em] text-bone-400">
                          {s.k}
                        </dt>
                      </div>
                    ))}
                  </dl>
                </a>
              </RevealItem>
            ))}
          </div>
        </Reveal>
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
                Keterangan profil dan lambang tiga akun TikTok berhasil ditarik pada{" "}
                {snapshotDate}, disusul dua akun Instagram sehari kemudian. Semuanya dipakai
                di halaman ini apa adanya. Yang tetap belum berhasil adalah daftar video per
                unggahan, karena TikTok berhenti melayani pembacaan setelah beberapa kali
                permintaan. Angka yang tampil selalu membawa tanggal, jadi pembaca bisa
                menilai sendiri seberapa segar datanya.
              </p>
            </div>
          </RevealItem>
        </Reveal>
      </section>
    </>
  );
}
