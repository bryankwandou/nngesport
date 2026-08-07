# NNG Esport

Situs resmi NNG Esport. Organisasi berbasis di Abepura, Jayapura, Papua, berdiri sejak 2010.

Tayang di **[nngesport.vercel.app](https://nngesport.vercel.app)**

---

## Cara isi halaman ini disusun

Situs profil tim biasanya penuh klaim yang tidak bisa dicek siapa pun. Repositori ini
mengambil jalan sebaliknya.

Seluruh isi situs berada di satu berkas, [`src/content/nng.ts`](src/content/nng.ts).
Tiap butir keterangan membawa dua properti:

| Properti   | Arti                                                                 |
| ---------- | -------------------------------------------------------------------- |
| `verified` | `true` bila keterangan ditarik dari halaman publik yang bisa dibuka   |
| `source`   | Tautan ke halaman asal keterangan tersebut                            |

Butir bertanda `verified: true` tampil dengan lencana **Sumber** yang bisa diklik pembaca.
Butir bertanda `false` tampil sebagai **Menunggu konfirmasi**. Bagian yang memang belum
punya data, yaitu susunan pemain dan hasil turnamen, dibiarkan kosong dan ditampilkan
sebagai keadaan kosong yang menjelaskan dirinya sendiri.

Aturan yang dipegang: jangan pernah menaikkan sebuah butir menjadi `verified: true`
tanpa menempelkan tautannya. Halaman prestasi yang pendek tapi benar jauh lebih berguna
bagi calon sponsor daripada halaman panjang yang gugur begitu diperiksa.

### Yang berhasil ditarik

- Jabatan pendiri, dari profil Threads yang bersangkutan
- Riwayat kanal 2017 sampai 2024, dari keterangan kanal YouTube resmi
- Lima judul permainan yang diisi
- Kemitraan kreator Mobile Legends 2025
- Cabang siniar, templat CapCut, dan karya NFT di Tezos

### Yang tidak bisa ditarik

TikTok menolak permintaan otomatis dari luar aplikasinya. Jumlah pengikut, daftar video,
dan gambar profil `@nng_esport` serta `@nng_store` karena itu tidak dicantumkan. Tautannya
tetap dipasang supaya pembaca bisa memeriksa sendiri.

Susunan pemain dan hasil turnamen juga tidak ditemukan di sumber terbuka mana pun.

---

## Menjalankan di komputer sendiri

```bash
npm install
npm run dev
```

Situs berjalan di `http://localhost:3000`.

```bash
npm run build   # build produksi
npm start       # jalankan hasil build
npm run lint    # periksa gaya penulisan kode
```

---

## Susunan berkas

```
src/
  app/
    page.tsx           beranda
    sejarah/           garis waktu lengkap dan prinsip kerja
    roster/            pemain aktif, posisi terbuka, manajemen
    prestasi/          catatan turnamen dan capaian bersumber
    kanal/             daftar kanal resmi
    kontak/            jalur menghubungi
    globals.css        warna, huruf, dan gerak dasar
  components/
    Logo.tsx           lambang perisai dan kunci merek
    Hero.tsx           bagian pembuka dengan tiga lapisan gerak
    SiteHeader.tsx     navigasi tetap dengan laci untuk layar kecil
    SiteFooter.tsx     kaki halaman
    PageHeader.tsx     kepala halaman selain beranda
    ui.tsx             lencana sumber, penghitung angka, kartu miring
    motion-primitives  aturan gerak yang dipakai berulang
  content/
    nng.ts             seluruh isi situs
```

---

## Lambang

Perisai bersudut enam, mengikuti kebiasaan lambang tim di kawasan ini. Di dalamnya dua
puncak menanjak: sepasang huruf N yang sekaligus terbaca sebagai punggung bukit, mengangguk
ke Jayapura tempat tim ini berdiri. Belah ketupat di puncak kanan menandai titik tertinggi
yang sedang dituju. Lengkung di kaki perisai menutup rangkaian sebagai huruf G.

Warna: obsidian `#07080B` sebagai dasar, ungu `#7C3AED` ke `#A855F7` sebagai warna utama,
sian `#22D3EE` sebagai pasangannya, kuning `#FBBF24` hanya untuk penanda status.

---

## Teknologi

Next.js 16 dengan App Router, TypeScript, Tailwind CSS v4, dan Motion untuk animasi.
Seluruh halaman dibangun sebagai berkas statis saat build, jadi tidak ada permintaan
peladen saat pembaca membukanya.

Gerak halaman menghormati `prefers-reduced-motion`. Setiap gambar punya keterangan
alternatif, navigasi bisa dijalankan penuh dengan papan ketik, dan penanda fokus terlihat
jelas di semua elemen yang bisa disentuh.

---

## Memperbarui isi

Sunting `src/content/nng.ts`, lalu simpan. Tidak perlu menyentuh berkas komponen.

Untuk mengisi susunan pemain, tambahkan objek ke larik `roster`. Keadaan kosong akan
hilang dengan sendirinya begitu larik itu terisi. Hal yang sama berlaku untuk
`achievements`.

---

## Lisensi

Kode boleh dipakai ulang. Nama, lambang, dan seluruh isi teks adalah milik NNG Esport.
