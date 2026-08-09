import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealItem, scaleIn } from "@/components/motion-primitives";
import { Eyebrow, TiltCard } from "@/components/ui";
import { LogoMark } from "@/components/Logo";
import { contact, org } from "@/content/nng";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi NNG Esport untuk sponsor, kerja sama merek, wawancara, atau bergabung sebagai pemain.",
};

const keperluan = [
  {
    title: "Sponsor dan kerja sama merek",
    body:
      "Terbuka untuk penempatan merek di konten, dukungan perangkat, dan kerja sama jangka panjang. Sebutkan bentuk kerja samanya sejak pesan pertama supaya pembahasannya lebih cepat.",
  },
  {
    title: "Bergabung sebagai pemain",
    body:
      "Lima posisi di divisi Mobile Legends masih kosong. Kirim nama dalam permainan, posisi, dan rekaman permainan terbaru.",
  },
  {
    title: "Liputan dan wawancara",
    body:
      "Materi untuk media, termasuk keterangan latar dan aset merek, bisa diminta lewat kanal resmi.",
  },
  {
    title: "Koreksi isi halaman",
    body:
      "Kalau ada keterangan di situs ini yang keliru atau sudah kedaluwarsa, kirimkan pembetulannya beserta tautan sumber. Halaman akan diperbarui.",
  },
];

export default function Kontak() {
  return (
    <>
      <PageHeader
        eyebrow="Hubungi"
        title="Pintunya terbuka."
        lead={contact.general}
      />

      {/* Kanal kontak */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <RevealItem>
            <Eyebrow>Cara tercepat</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
              Pesan langsung, bukan formulir.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-400">
              Tidak ada kotak isian di halaman ini. Pesan yang masuk lewat kanal resmi
              dibaca orang yang sama yang mengurus kanalnya, dan itu jauh lebih cepat
              daripada surel yang menumpuk.
            </p>
          </RevealItem>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {contact.preferred.map((c) => (
              <RevealItem key={c.label} variant={scaleIn}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <TiltCard className="h-full">
                    <div className="flex h-full flex-col justify-between gap-8 p-7">
                      <LogoMark uid={`k-${c.label.slice(0, 4)}`} className="h-9 w-9" />
                      <div>
                        <p className="font-display text-base font-700 leading-snug tracking-tight text-bone-50">
                          {c.label}
                        </p>
                        <span className="mt-2.5 inline-block text-xs text-bone-400 transition-colors group-hover:text-volt-400">
                          Kirim pesan
                          <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                            &rarr;
                          </span>
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </a>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Jenis keperluan */}
      <section className="border-y border-white/[0.07] bg-ink-900/60">
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <RevealItem>
              <Eyebrow>Yang biasanya masuk</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-800 leading-[1.06] tracking-[-0.03em]">
                Empat jenis pesan yang paling sering datang.
              </h2>
            </RevealItem>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] md:grid-cols-2">
              {keperluan.map((k, i) => (
                <RevealItem key={k.title}>
                  <div className="group h-full bg-ink-850 p-8 transition-colors duration-300 hover:bg-ink-800">
                    <span className="font-display text-[11px] font-700 tracking-[0.2em] text-flare-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-700 tracking-tight text-bone-50">
                      {k.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.75] text-bone-400">{k.body}</p>
                  </div>
                </RevealItem>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Keterangan organisasi */}
      <section className="container-page py-20 md:py-24">
        <Reveal>
          <RevealItem>
            <div className="grid gap-8 rounded-2xl border border-white/[0.08] bg-ink-850 p-8 sm:grid-cols-3 md:p-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-400">
                  Organisasi
                </p>
                <p className="mt-2 font-display text-lg font-700 text-bone-50">{org.name}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-400">
                  Basis
                </p>
                <p className="mt-2 font-display text-lg font-700 text-bone-50">
                  {org.base}
                </p>
                <p className="text-sm text-bone-400">{org.country}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-400">
                  Berdiri
                </p>
                <p className="mt-2 font-display text-lg font-700 text-bone-50">
                  {org.founded}
                </p>
              </div>
            </div>
          </RevealItem>
        </Reveal>
      </section>
    </>
  );
}
