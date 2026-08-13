import type { NextConfig } from "next";

/**
 * Tajuk keamanan.
 *
 * Situs ini seluruhnya statis dan tidak menerima masukan dari pembaca, jadi permukaan
 * serangannya kecil. Meski begitu, tanpa tajuk berikut halaman masih bisa dibingkai
 * situs lain untuk menipu pengunjung, dan alamat lengkap halaman ikut terkirim ke setiap
 * tautan luar yang diklik.
 *
 * Peladen sudah mengirim Strict-Transport-Security sendiri, jadi tidak diulang di sini.
 */
const tajukKeamanan = [
  /* Menolak pembingkaian oleh situs lain. */
  { key: "X-Frame-Options", value: "DENY" },

  /* Melarang peramban menebak jenis berkas dan menjalankannya sebagai skrip. */
  { key: "X-Content-Type-Options", value: "nosniff" },

  /* Hanya mengirim nama domain, bukan alamat halaman penuh, ke situs tujuan. */
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  /* Menutup akses perangkat keras yang memang tidak pernah dipakai halaman ini. */
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: tajukKeamanan }];
  },
};

export default nextConfig;
