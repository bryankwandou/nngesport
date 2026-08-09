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

Dari halaman profil TikTok, 8 Agustus 2026:

| | `@nng_esport` | `@nng_store` |
| --- | --- | --- |
| Nama tampil | NNG FAM | NNG Store |
| Pengikut | 9.660 | 2.307 |
| Unggahan | 8.381 | 6.648 |
| Suka | 4.428 | 2.050 |

Ditambah lambang kedua akun (tersimpan di `public/img/`), tahun berdiri 2017, tiga cabang
kompetitif MLBB, PUBG, dan Valorant, serta semboyan "Now or Never".

Dari sumber lain: jabatan pendiri lewat profil Threads, riwayat kanal 2017 sampai 2024
lewat keterangan kanal YouTube, kemitraan kreator Mobile Legends 2025, cabang siniar,
templat CapCut, dan karya NFT di Tezos.

### Yang tidak bisa ditarik

Daftar video per unggahan, karena TikTok mulai menolak permintaan setelah beberapa kali
pembacaan. Profil Instagram `@nng_store`, karena membalas dengan pembatasan laju.
Tautan keduanya tetap dipasang supaya pembaca bisa memeriksa sendiri.

Susunan pemain dan hasil turnamen juga tidak ditemukan di sumber terbuka mana pun.

### Klaim yang sengaja tidak diterbitkan

Bio `@nng_esport` mencantumkan tiga gelar: runner-up MSC 2023, MSC 2024, dan MPL 2019.
Catatan penyelenggara menyebut nama lain untuk ketiganya. MSC dan MPL adalah turnamen
lapis pertama dengan arsip publik lengkap, jadi klaim semacam ini akan dicek dalam
hitungan menit oleh calon sponsor, dan satu yang gugur menjatuhkan seluruh halaman
termasuk angka yang memang benar.

Selisihnya dicatat di `disputedClaims` dalam `src/content/nng.ts` dan tidak dirender di
halaman mana pun. Kalau yang dimaksud ternyata turnamen komunitas dengan nama serupa,
tulis nama lengkap ajangnya lalu pindahkan ke `achievements`.

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

## Lambang dan warna

Seluruh keputusan visual tercatat di [`brand.md`](brand.md).

Ringkasnya: bentuk dan warna diangkat dari lambang yang sudah dipakai akun resmi, bukan
dipilih dari selera. Perisai bersudut dengan dua puncak menanjak di dalamnya, merah
`#F4213B` sebagai warna utama, biru `#3AA5FF` sebagai pasangannya, di atas dasar obsidian
`#07080B`. Kuning `#FBBF24` hanya keluar sebagai penanda status.

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
