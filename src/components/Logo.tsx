"use client";

/**
 * Lambang NNG Esport.
 *
 * Bentuknya perisai bersudut enam, mengikuti kebiasaan lambang tim di kawasan ini.
 * Di dalamnya ada dua puncak yang menanjak: sepasang huruf N yang sekaligus
 * membaca sebagai punggung bukit, mengangguk ke Jayapura tempat tim ini berdiri.
 * Belah ketupat di puncak kanan menandai titik tertinggi yang sedang dituju.
 * Lengkung di kaki perisai menutup rangkaian sebagai huruf G.
 *
 * Digambar sekali dan dipakai ulang lewat `id` unik supaya beberapa lambang
 * bisa hidup berdampingan dalam satu halaman tanpa gradiennya saling menimpa.
 */

type LogoProps = {
  className?: string;
  /** Pembeda id gradien ketika lambang muncul lebih dari sekali. */
  uid?: string;
  /** Menyalakan pendar di belakang perisai. */
  glow?: boolean;
};

export function LogoMark({ className, uid = "nng", glow = false }: LogoProps) {
  const g1 = `${uid}-stroke`;
  const g2 = `${uid}-plate`;
  const g3 = `${uid}-spark`;

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
        <linearGradient id={g1} x1="24" y1="104" x2="108" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="52%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>

        <linearGradient id={g2} x1="16" y1="6" x2="112" y2="122" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1B1E28" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0A0B10" stopOpacity="0.95" />
        </linearGradient>

        <radialGradient id={g3} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#E9D5FF" />
          <stop offset="100%" stopColor="#22D3EE" />
        </radialGradient>

        {glow && (
          <filter id={`${uid}-blur`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        )}
      </defs>

      {glow && (
        <path
          d="M64 8 L110 31 L110 76 C110 96 89 111 64 119 C39 111 18 96 18 76 L18 31 Z"
          fill={`url(#${g1})`}
          opacity="0.28"
          filter={`url(#${uid}-blur)`}
        />
      )}

      {/* Bidang perisai */}
      <path
        d="M64 8 L110 31 L110 76 C110 96 89 111 64 119 C39 111 18 96 18 76 L18 31 Z"
        fill={`url(#${g2})`}
      />

      {/* Tepi perisai */}
      <path
        d="M64 8 L110 31 L110 76 C110 96 89 111 64 119 C39 111 18 96 18 76 L18 31 Z"
        stroke={`url(#${g1})`}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Dua puncak yang menanjak: NN sekaligus punggung bukit */}
      <path
        d="M31 92 L48 52 L61 78 L78 44 L97 84"
        stroke={`url(#${g1})`}
        strokeWidth="9"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />

      {/* Lengkung kaki: huruf G yang menutup rangkaian */}
      <path
        d="M42 100 C52 106 76 106 90 98"
        stroke={`url(#${g1})`}
        strokeWidth="4.5"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Titik tertinggi */}
      <path d="M78 30 L83.5 37.5 L78 45 L72.5 37.5 Z" fill={`url(#${g3})`} />
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
