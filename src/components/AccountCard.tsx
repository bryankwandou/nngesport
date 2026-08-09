"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Counter } from "./ui";

type Account = {
  handle: string;
  nickname: string;
  followers: number;
  following: number;
  likes: number;
  videos: number;
  avatar: string;
  bio: string;
  href: string;
};

/**
 * Kartu profil satu akun, memakai lambang aslinya sebagai gambar.
 *
 * Angkanya menghitung naik saat kartu masuk layar, tapi berhenti persis di nilai
 * yang ditarik dari profil. Tanggal pengambilan ditulis di bawah supaya pembaca
 * tahu angka ini punya umur, bukan diklaim berlaku selamanya.
 */
export function AccountCard({
  account,
  snapshot,
  accent = "flare",
}: {
  account: Account;
  snapshot: string;
  accent?: "flare" | "volt";
}) {
  const ring =
    accent === "flare"
      ? "from-flare-600/40 to-flare-400/10"
      : "from-volt-500/40 to-volt-400/10";
  const dot = accent === "flare" ? "bg-flare-500" : "bg-volt-400";

  return (
    <motion.a
      href={account.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className="group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-850 transition-colors duration-300 hover:border-white/[0.18]"
    >
      {/* Lambang asli dipakai sebagai latar, diredam supaya teks tetap terbaca. */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={account.avatar}
          alt={`Lambang ${account.nickname}`}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="scale-110 object-cover opacity-45 blur-[2px] transition-all duration-700 group-hover:scale-100 group-hover:opacity-65 group-hover:blur-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-850 via-ink-850/70 to-transparent" />
      </div>

      <div className="relative -mt-14 px-7 pb-7">
        {/* Lambang utuh, tidak dipotong, di atas gradien */}
        <div
          className={`relative h-24 w-24 overflow-hidden rounded-2xl bg-linear-to-br ${ring} p-[2px] shadow-2xl`}
        >
          <Image
            src={account.avatar}
            alt={`Lambang ${account.nickname}`}
            width={200}
            height={200}
            className="h-full w-full rounded-[14px] object-cover"
          />
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="truncate font-display text-xl font-800 tracking-tight text-bone-50">
              {account.nickname}
            </h3>
            <p className="mt-0.5 text-sm text-bone-400">{account.handle}</p>
          </div>
          <span className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[10px] tracking-wide text-bone-400">
            <span className={`h-1 w-1 rounded-full ${dot}`} />
            TikTok
          </span>
        </div>

        <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-bone-400">
          {account.bio}
        </p>

        <dl className="mt-6 grid grid-cols-4 gap-3 border-t border-white/[0.07] pt-5">
          {[
            { k: "Pengikut", v: account.followers },
            { k: "Unggahan", v: account.videos },
            { k: "Suka", v: account.likes },
            { k: "Diikuti", v: account.following },
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

        <p className="mt-4 text-[11px] text-bone-400">
          Angka diambil {snapshot}
          <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </p>
      </div>
    </motion.a>
  );
}
