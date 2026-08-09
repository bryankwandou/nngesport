# Catatan pemulihan arsip NNG

Ditulis 9 Agustus 2026, setelah laptop yang menyimpan seluruh berkas kerja NNG hilang
dibegal.

---

## Hal pertama yang perlu dipahami

Yang hilang adalah salinan lokalnya, bukan karyanya.

Lima puluh tujuh ribu unggahan itu tidak pernah tersimpan di laptop saja. Semuanya masih
berada di peladen TikTok, YouTube, dan Instagram, lengkap dengan tanggal, keterangan, dan
jumlah tayangnya. Akun-akunnya masih hidup dan masih atas nama Anda.

Artinya ini bukan pekerjaan menyelamatkan puing, melainkan pekerjaan mengunduh ulang.

---

## Bagian mendesak: akun yang perlu diamankan lebih dulu

Laptop yang hilang membawa serta sesi peramban yang masih masuk, kata sandi tersimpan,
dan kemungkinan kunci akses ke GitHub maupun Vercel. Orang yang memegangnya tidak perlu
tahu kata sandi Anda untuk masuk, cukup membuka perambannya.

Kerjakan berurutan, dari yang paling merugikan bila diambil orang:

1. **Surel utama** lebih dulu. Kalau surel jatuh, semua akun lain ikut jatuh lewat
   pemulihan kata sandi. Ganti kata sandi, lalu keluarkan semua perangkat lain.
2. **TikTok, Instagram, YouTube.** Ganti kata sandi, lalu cari menu perangkat yang sedang
   masuk dan keluarkan semuanya kecuali telepon yang Anda pegang sekarang.
3. **GitHub.** Buka Settings, lalu Sessions, keluarkan sesi lain. Lanjut ke Developer
   settings dan cabut token akses pribadi yang ada di laptop itu.
4. **Vercel.** Account Settings, lalu Tokens, cabut yang lama.
5. **Nyalakan verifikasi dua langkah** di semua akun di atas kalau belum aktif.

Kerjakan ini sebelum mengurus arsip. Arsip bisa diunduh kapan saja; akun yang diambil
orang jauh lebih sulit direbut kembali.

---

## Yang sudah berhasil diselamatkan

Tersimpan permanen di dalam repositori ini, ikut tercadang ke GitHub setiap kali ada
kiriman baru. Berbeda dengan laptop, salinannya ada di banyak tempat sekaligus.

### `profil-tiktok-2026-08-08.json`

Keadaan ketiga akun pada 8 Agustus 2026:

| | @nayrbryanGaming | @nng_esport | @nng_store |
| --- | --- | --- | --- |
| Nama tampil | nayrbryanGaming | NNG FAM | NNG Store |
| Pengenal akun | 6760253517707363329 | 6764220520798159873 | 6950495727575761922 |
| Pengikut | 75.100 | 9.660 | 2.307 |
| Unggahan | 42.800 | 8.381 | 6.648 |
| Suka | 358.800 | 4.428 | 2.050 |
| Mengikuti | 4.778 | 6.315 | 42 |

Bio ketiganya tersimpan utuh, termasuk tanggal berdiri 10 Januari 2018 untuk kanal
pendiri dan keterangan Est. 2017 untuk kanal organisasi.

### `mentah/`

Salinan mentah halaman profil ketiga akun. Kalau suatu saat perlu keterangan yang belum
sempat diambil, datanya masih ada di dalam berkas ini tanpa perlu mengakses TikTok lagi.

### `../public/img/`

Tiga lambang asli, terunduh sebelum tautan bertanda tangannya kedaluwarsa:

- `nayrbryangaming-avatar.jpg` bertema Growtopia, bertanda hak cipta 2020
- `nng-esport-avatar.jpg` perisai merah biru, 943 piksel
- `nng-store-avatar.jpg` perisai ungu, 1080 piksel

Tautan asal dari TikTok memakai tanda tangan yang habis masa berlakunya dalam hitungan
jam. Berkas yang tersimpan di sini tidak punya batas waktu itu.

---

## Cara mengambil kembali sisanya

Jangan menyalin satu per satu dari aplikasi. Ketiga platform menyediakan pengunduhan
resmi yang memberi seluruh arsip sekaligus, dan hasilnya jauh lebih lengkap daripada
apa pun yang bisa diambil dari luar.

### TikTok

Buka aplikasi, masuk ke Profil, lalu Pengaturan dan privasi, lalu Pengaturan akun, lalu
**Unduh data Anda**. Pilih format berkas, bukan format teks, supaya video ikut terbawa.

Permintaan diproses beberapa hari. Untuk 42.800 unggahan, siapkan ruang penyimpanan
besar dan sambungan yang stabil. Tautan unduhannya kedaluwarsa setelah beberapa hari,
jadi segera pindahkan begitu siap.

Lakukan terpisah untuk ketiga akun.

### YouTube

Buka **takeout.google.com**, pilih hanya YouTube, lalu pilih video dan riwayat. Arsip
besar akan dipecah menjadi beberapa berkas.

### Instagram

Pengaturan, lalu Pusat Akun, lalu Informasi dan izin Anda, lalu **Unduh informasi Anda**.
Pilih format HTML supaya bisa dibaca langsung tanpa alat tambahan.

### Setelah semuanya terkumpul

Simpan di dua tempat berbeda sejak awal. Satu cakram luar dan satu layanan awan sudah
cukup. Kejadian ini terjadi justru karena semuanya hanya ada di satu tempat.

---

## Yang tidak bisa dipulihkan dari luar

Beberapa hal memang hanya ada di laptop itu dan tidak punya salinan daring:

- Berkas mentah penyuntingan video
- Rancangan lambang dalam format asli, bila memang pernah dibuat sebagai berkas kerja
- Catatan pribadi, jadwal, dan kesepakatan kerja sama yang belum pernah dikirim ke mana pun
- Kata sandi yang hanya tersimpan di peramban

Untuk lambang, versi vektor di `src/components/Logo.tsx` menggambar ulang bentuk intinya
dan bisa dipakai sebagai titik awal kalau berkas aslinya memang sudah tidak ada.

---

## Saran menata ulang

Setelah arsip terkumpul, susun dengan pola yang tidak bergantung pada satu perangkat:

```
NNG-ARSIP/
  2018-2021/       unggahan lama, dikelompokkan per tahun
  2022-2024/
  2025-2026/
  merek/           lambang, warna, huruf
  kerjasama/       surat, kesepakatan, tangkapan layar percakapan penting
  dokumen/         apa pun yang sifatnya resmi
```

Aturan yang layak dipegang mulai sekarang: apa pun yang hilangnya akan terasa berat,
harus ada di minimal dua tempat, dan salah satunya bukan di rumah.

---

## Ke mana situs ini masuk

`nngesport.vercel.app` sekarang berfungsi ganda. Selain halaman profil untuk sponsor, ia
juga menjadi salinan daring dari keterangan dasar NNG: kapan berdiri, siapa yang memimpin,
cabang apa saja yang dijalankan, dan berapa angka terakhir yang tercatat, lengkap dengan
tanggal pengambilannya.

Kodenya ada di GitHub, jadi setiap kiriman baru otomatis tercadang di peladen mereka.
Kalau komputer yang Anda pakai sekarang ikut hilang, isi situs ini tetap bisa diambil
kembali utuh dengan satu perintah salin.

Itu bukan pengganti arsip video, tapi setidaknya identitas organisasinya tidak lagi
bergantung pada satu perangkat.
