# Panduan merek NNG Esport

Berkas ini mengunci keputusan visual yang sudah diambil, supaya halaman baru tidak
mengarang aturannya sendiri. Kalau ada yang perlu berubah, ubah di sini dulu, baru
di kode.

---

## Dari mana warnanya berasal

Warna tidak dipilih dari selera. Semuanya diangkat dari lambang yang sudah dipakai
akun resmi @nng_esport: perisai bersudut dengan dasar hampir hitam, sorotan merah
menyala dari bawah, dan pantulan biru dingin dari atas.

Versi pertama situs ini sempat memakai ungu. Itu keliru, dan ketahuan begitu lambang
aslinya berhasil diunduh. Ungu justru milik @nng_store, bukan sisi kompetitifnya.

### Warna inti

| Peran | Token | Nilai | Dipakai untuk |
| ----- | ----- | ----- | ------------- |
| Dasar | `ink-950` | `#07080B` | Latar halaman |
| Panel | `ink-900` | `#0B0D13` | Bagian berselang-seling |
| Kartu | `ink-850` | `#10131B` | Permukaan kartu |
| Kartu naik | `ink-800` | `#161A24` | Kartu saat disentuh kursor |
| Utama terang | `flare-400` | `#FF5765` | Label kecil, angka penanda |
| Utama | `flare-500` | `#F4213B` | Aksen, garis, titik |
| Utama gelap | `flare-600` | `#D10F28` | Tombol utama, pendar |
| Pasangan | `volt-400` | `#3AA5FF` | Tautan aktif, tanda sumber |
| Pasangan gelap | `volt-500` | `#1878F0` | Pendar biru |
| Status | `amber-400` | `#FBBF24` | Penanda belum terkonfirmasi |
| Teks | `bone-50` | `#F7F7F9` | Judul dan teks utama |
| Teks redup | `bone-400` | `#9698A6` | Keterangan pendukung |

### Aturan pemakaian

Merah memimpin, biru menemani. Perbandingan kasarnya tiga banding satu. Kalau biru
mulai sebanyak merah, halaman berhenti terasa seperti tim esport dan mulai terasa
seperti dasbor perangkat lunak.

Kuning hanya boleh keluar sebagai penanda status "menunggu konfirmasi". Begitu ia
dipakai untuk hiasan, artinya hilang, dan pembaca berhenti mempercayai penanda itu.

Gradien merah ke biru hanya untuk judul utama satu per halaman. Paragraf tidak pernah
memakai gradien.

---

## Huruf

**Sora** untuk judul, bobot 600 sampai 800. Sudutnya tegas dan cocok berdampingan
dengan lambang perisai.

**Inter** untuk teks berjalan. Angka dan huruf kecilnya tetap terbaca di kartu padat,
dan itu penting karena separuh halaman ini berisi angka.

Judul selalu memakai jarak huruf rapat, sekitar `-0.03em`. Judul besar tanpa
penyempitan jarak terlihat renggang dan lemah.

Ukuran judul memakai `clamp()` supaya menyusut mulus di layar kecil, bukan melompat
di titik henti tertentu.

---

## Lambang

Perisai bersudut dengan puncak runcing dan kaki menyempit, mengikuti potongan lambang
aslinya. Di dalamnya dua puncak menanjak: sepasang huruf N yang sekaligus terbaca
sebagai punggung bukit, mengangguk ke Jayapura tempat tim ini berdiri. Lengkung tipis
di kaki menutup rangkaian sebagai huruf G. Belah ketupat biru menandai titik tertinggi.

Lambang asli berupa gambar raster penuh detail. Bagus di kartu profil, tapi hancur
begitu dikecilkan ke ukuran favicon. Versi vektor di `src/components/Logo.tsx`
menyederhanakannya sampai bentuk inti saja, sehingga tetap terbaca di 16 piksel.
Keduanya dipakai berdampingan: yang asli untuk kartu akun, yang vektor untuk
antarmuka.

Gradien lambang berjalan dari biru di puncak ke merah di kaki, meniru arah pencahayaan
lambang aslinya.

Jangan memutar lambang, jangan mengganti warnanya jadi satu warna datar, dan jangan
menaruhnya di atas latar terang tanpa perisai gelapnya.

---

## Gerak

Satu aturan dipegang di semua tempat: gerakan masuk hanya sekali, jaraknya pendek,
lengkung waktunya melambat di ujung (`cubic-bezier(0.16, 1, 0.3, 1)`).

Halaman yang setiap elemennya bergoyang setiap kali digulir terasa murah, bukan hidup.

| Gerak | Nilai |
| ----- | ----- |
| Masuk elemen | 0,62 detik, geser 18 piksel |
| Jeda antar anak | 0,07 detik |
| Judul per kata | 0,78 detik, jeda 0,055 detik |
| Miring kartu | maksimal 6 derajat |
| Pegas tombol | kekakuan 320, redaman 26 |

Kartu miring dibatasi enam derajat. Lebih dari itu kartunya terlihat seperti mainan,
bukan panel data tim.

Semua gerak berhenti sepenuhnya bila peramban melaporkan `prefers-reduced-motion`.
Angka penghitung langsung menampilkan nilai akhirnya, tidak menghitung naik.

---

## Nada tulisan

Kalimat pendek, kata sehari-hari, tanpa tanda seru. Tidak ada emotikon di mana pun.

Yang dihindari: kata sifat berlebihan, janji yang tidak bisa dibuktikan, dan istilah
pemasaran yang kosong. Tim ini punya delapan ribu unggahan nyata; itu lebih meyakinkan
daripada kata "luar biasa".

Yang dipakai: angka yang bisa dicek, tanggal pengambilannya, dan pengakuan terbuka
ketika sesuatu memang belum ada.

Contoh yang benar:

> Susunan pemain NNG belum terbit di sumber publik mana pun yang bisa dijangkau tanpa
> masuk akun.

Contoh yang salah:

> Roster bintang kami akan segera diumumkan!

---

## Penanda sumber

Ini bagian yang paling membedakan situs ini dari halaman profil kebanyakan.

Setiap keterangan membawa satu dari dua penanda:

- **Sumber** (biru) — bisa diklik, membuka halaman asal keterangannya
- **Menunggu konfirmasi** (kuning) — belum ada sumber terbuka

Bagian yang memang kosong, seperti roster dan hasil turnamen, tidak diisi tebakan.
Ia tampil sebagai keadaan kosong yang menjelaskan alasannya sendiri.

Aturan yang tidak boleh dilanggar: jangan menaikkan sebuah keterangan menjadi
terkonfirmasi tanpa menempelkan tautannya. Halaman prestasi yang pendek tapi benar
jauh lebih berguna bagi calon sponsor daripada halaman panjang yang gugur begitu
diperiksa.

---

## Tata letak

Lebar isi maksimal `76rem`. Jarak tepi `1.25rem` di layar kecil, `2rem` mulai lebar
sedang.

Bagian halaman berselang-seling antara latar dasar dan panel `ink-900`, dipisah garis
tipis `rgba(255,255,255,0.07)`. Pergantian ini yang memberi irama, bukan garis tebal.

Sudut kartu `1rem`. Sudut bagian besar `1.5rem`. Tidak ada sudut tajam kecuali pada
lambang.

Kisi kartu: tiga kolom di layar lebar, dua di sedang, satu di kecil. Kartu di dalam
satu baris selalu sama tinggi, isi didorong dengan `flex-1` bukan tinggi tetap.
