"use client";

/**
 * Lambang NNG Esport.
 *
 * Bentuknya mengikuti lambang yang sudah dipakai akun resmi: perisai bersudut
 * dengan puncak runcing di atas dan ujung menyempit di bawah. Yang berubah hanya
 * cara menggambarnya. Versi aslinya berupa gambar raster penuh detail yang hancur
 * begitu dikecilkan ke ukuran favicon, sementara versi ini disederhanakan sampai
 * bentuk intinya saja supaya tetap terbaca di 16 piksel.
 *
 * Di dalam perisai ada dua puncak menanjak: sepasang huruf N yang sekaligus
 * membaca sebagai punggung bukit, mengangguk ke Jayapura tempat tim ini berdiri.
 * Lengkung di kaki perisai menutup rangkaian sebagai huruf G.
 *
 * Warna mengikuti lambang aslinya, merah di bawah dan biru di atas.
 */

type LogoProps = {
  className?: string;
  /** Pembeda id gradien ketika lambang muncul lebih dari sekali dalam satu halaman. */
  uid?: string;
  /** Menyalakan pendar di belakang perisai. */
  glow?: boolean;
};

export function LogoMark({ className, uid = "nng", glow = false }: LogoProps) {
  const gStroke = `${uid}-stroke`;
  const gPlate = `${uid}-plate`;
  const gSpark = `${uid}-spark`;

  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      role="img"
      aria-label="Lambang NNG Esport"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Biru di puncak turun ke merah di kaki, seperti pencahayaan lambang aslinya. */}
        <linearGradient id={gStroke} x1="64" y1="10" x2="64" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3AA5FF" />
          <stop offset="42%" stopColor="#FF5765" />
          <stop offset="100%" stopColor="#D10F28" />
        </linearGradient>

        <linearGradient id={gPlate} x1="20" y1="8" x2="108" y2="122" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1C212C" />
          <stop offset="100%" stopColor="#0A0B10" />
        </linearGradient>

        <radialGradient id={gSpark} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#D6EBFF" />
          <stop offset="100%" stopColor="#3AA5FF" />
        </radialGradient>

        {glow && (
          <filter id={`${uid}-blur`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        )}
      </defs>

      {glow && (
        <path
          d="M64 7 L104 22 L112 32 L112 74 C112 95 90 111 64 121 C38 111 16 95 16 74 L16 32 L24 22 Z"
          fill={`url(#${gStroke})`}
          opacity="0.3"
          filter={`url(#${uid}-blur)`}
        />
      )}

      {/* Bidang perisai. Bahu miring di kiri dan kanan atas meniru potongan aslinya. */}
      <path
        d="M64 7 L104 22 L112 32 L112 74 C112 95 90 111 64 121 C38 111 16 95 16 74 L16 32 L24 22 Z"
        fill={`url(#${gPlate})`}
      />

      {/* Tepi perisai */}
      <path
        d="M64 7 L104 22 L112 32 L112 74 C112 95 90 111 64 121 C38 111 16 95 16 74 L16 32 L24 22 Z"
        stroke={`url(#${gStroke})`}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Garis dalam tipis, mengulang kontur ganda pada lambang aslinya. */}
      <path
        d="M64 16 L98 28 L104 36 L104 72 C104 89 86 103 64 112 C42 103 24 89 24 72 L24 36 L30 28 Z"
        stroke={`url(#${gStroke})`}
        strokeWidth="1.2"
        strokeLinejoin="round"
        opacity="0.32"
      />

      {/* Dua puncak menanjak: NN sekaligus punggung bukit */}
      <path
        d="M32 90 L48 53 L61 77 L77 45 L96 82"
        stroke={`url(#${gStroke})`}
        strokeWidth="9"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />

      {/* Lengkung kaki: huruf G yang menutup rangkaian */}
      <path
        d="M42 98 C52 104 76 104 90 96"
        stroke={`url(#${gStroke})`}
        strokeWidth="4.5"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Titik tertinggi */}
      <path d="M77 31 L82.5 38.5 L77 46 L71.5 38.5 Z" fill={`url(#${gSpark})`} />
    </svg>
  );
}

export function LogoLockup({ className, uid = "lockup" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark uid={uid} className="h-8 w-8 shrink-0" />
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
