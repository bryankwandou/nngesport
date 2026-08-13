/**
 * Menghasilkan berkas gambar statis dari lambang vektor.
 *
 * Dijalankan sesekali dengan tangan, bukan bagian dari proses build, karena
 * keluarannya jarang berubah dan lebih baik ikut tersimpan di riwayat.
 *
 *   node scripts/buat-aset.mjs
 *
 * Yang dihasilkan:
 *   public/favicon.ico          untuk peramban yang masih meminta berkas ico
 *   public/apple-touch-icon.png untuk pintasan layar utama di iOS
 *   public/icon-192.png         untuk pintasan layar utama di Android
 *   public/icon-512.png         ukuran terbesar untuk manifes aplikasi
 *   public/og.png               gambar pratinjau saat tautan dibagikan
 *
 * Gambar pratinjau harus berupa raster. Facebook, WhatsApp, dan X tidak merender
 * SVG sebagai og:image, jadi memasang berkas vektor di sana berarti tautan yang
 * dibagikan muncul tanpa gambar sama sekali.
 */

import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";

const vektorLambang = readFileSync("public/icon.svg");
const vektorPratinjau = readFileSync("public/og.svg");

/* Lambang persegi dalam beberapa ukuran. Kerapatan dinaikkan supaya tepi tetap tajam. */
async function lambang(sisi) {
  return sharp(vektorLambang, { density: 512 })
    .resize(sisi, sisi, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/**
 * Menyusun berkas ico dengan tangan.
 *
 * Sharp tidak bisa menulis format ini, padahal isinya sederhana: sebuah kepala,
 * satu entri direktori per ukuran, lalu berkas png mentah disambung berurutan.
 * Peramban modern menerima png di dalam wadah ico.
 */
function susunIco(gambar) {
  const jumlah = gambar.length;
  const kepala = Buffer.alloc(6);
  kepala.writeUInt16LE(0, 0); // cadangan, selalu nol
  kepala.writeUInt16LE(1, 2); // jenis 1 berarti ikon
  kepala.writeUInt16LE(jumlah, 4);

  const direktori = [];
  let geser = 6 + jumlah * 16;

  for (const { sisi, data } of gambar) {
    const e = Buffer.alloc(16);
    e.writeUInt8(sisi >= 256 ? 0 : sisi, 0); // nol berarti 256
    e.writeUInt8(sisi >= 256 ? 0 : sisi, 1);
    e.writeUInt8(0, 2); // jumlah warna palet
    e.writeUInt8(0, 3); // cadangan
    e.writeUInt16LE(1, 4); // bidang warna
    e.writeUInt16LE(32, 6); // bit per piksel
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(geser, 12);
    direktori.push(e);
    geser += data.length;
  }

  return Buffer.concat([kepala, ...direktori, ...gambar.map((g) => g.data)]);
}

const sisiIco = [16, 32, 48];
const isiIco = [];
for (const sisi of sisiIco) {
  isiIco.push({ sisi, data: await lambang(sisi) });
}
writeFileSync("public/favicon.ico", susunIco(isiIco));
console.log(`favicon.ico        ${sisiIco.join(", ")} piksel`);

for (const [nama, sisi] of [
  ["apple-touch-icon.png", 180],
  ["icon-192.png", 192],
  ["icon-512.png", 512],
]) {
  const data = await lambang(sisi);
  writeFileSync(`public/${nama}`, data);
  console.log(`${nama.padEnd(19)}${sisi} piksel, ${data.length} bita`);
}

/*
  Gambar pratinjau tautan, ukuran baku yang dipakai hampir semua layanan.

  Latar dan teksnya digambar dari berkas vektor, lalu lambang asli milik akun resmi
  ditempelkan di atasnya. Lambang itu berupa foto, bukan jalur vektor, jadi tidak bisa
  ikut digambar dari dalam berkas svg.
*/
const SISI_LAMBANG = 336;
const KIRI_LAMBANG = 764;
const ATAS_LAMBANG = 147;

/* Topeng sudut membulat, supaya lambang menyatu dengan gaya kartu di seluruh situs. */
const topeng = Buffer.from(
  `<svg width="${SISI_LAMBANG}" height="${SISI_LAMBANG}">
     <rect width="${SISI_LAMBANG}" height="${SISI_LAMBANG}" rx="44" ry="44" fill="#fff"/>
   </svg>`
);

const lambangAsli = await sharp("public/img/nng-esport-avatar.jpg")
  .resize(SISI_LAMBANG, SISI_LAMBANG, { fit: "cover" })
  .composite([{ input: topeng, blend: "dest-in" }])
  .png()
  .toBuffer();

const latar = await sharp(vektorPratinjau, { density: 192 })
  .resize(1200, 630, { fit: "cover" })
  .png()
  .toBuffer();

const pratinjau = await sharp(latar)
  .composite([{ input: lambangAsli, left: KIRI_LAMBANG, top: ATAS_LAMBANG }])
  .png({ compressionLevel: 9 })
  .toBuffer();

writeFileSync("public/og.png", pratinjau);
console.log(`og.png             1200x630, ${pratinjau.length} bita, lambang asli ditempel`);
