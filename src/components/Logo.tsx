import Image from "next/image";

/**
 * Lambang NNG Esport.
 *
 * Yang dipakai di seluruh halaman adalah berkas gambar asli milik akun @nng_esport,
 * bukan gambaran ulang. Lambang itu berupa raster penuh detail, dan usaha
 * menirunya sebagai jalur vektor sempat dicoba lalu dibuang karena hasilnya
 * terbaca sebagai huruf M, bukan NN.
 *
 * Versi vektor yang disederhanakan tetap ada, tapi hanya di `public/icon.svg`,
 * dipakai untuk favicon dan ikon pintasan tempat gambar 943 piksel memang hancur
 * begitu dikecilkan. Berkas itu berdiri sendiri dan tidak diimpor dari sini;
 * `scripts/buat-aset.mjs` yang mengubahnya jadi png dan ico.
 */

export function LogoCrest({
  className,
  size = 40,
  priority = false,
}: {
  className?: string;
  size?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src="/img/nng-esport-avatar.jpg"
      alt="Lambang resmi NNG Esport"
      width={size}
      height={size}
      priority={priority}
      className={`rounded-xl object-cover ${className ?? ""}`}
    />
  );
}

/** Lambang berdampingan dengan nama, dipakai di kepala dan kaki halaman. */
export function LogoLockup({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoCrest size={72} priority className="h-9 w-9 shrink-0 ring-1 ring-white/10" />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-extrabold tracking-[0.18em] text-zinc-50">
          NNG
        </span>
        <span className="mt-[3px] text-[8.5px] font-medium tracking-[0.42em] text-zinc-500">
          ESPORT
        </span>
      </span>
    </span>
  );
}
