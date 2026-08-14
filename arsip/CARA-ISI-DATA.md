# Mengisi bagian yang masih kosong, lewat ponsel

Tiga bagian di situs sengaja dibiarkan kosong karena datanya tidak ada di sumber
publik mana pun: susunan pemain, hasil turnamen, dan katalog toko.

Mengisinya tidak butuh laptop, tidak butuh memasang apa pun, dan tidak butuh tahu
cara memakai git. Cukup peramban di ponsel.

---

## Caranya, sekali untuk semua

1. Buka **github.com/bryankwandou/nngesport**
2. Masuk ke berkas `src/content/nng.ts`
3. Ketuk ikon pensil di kanan atas
4. Cari baris yang ditandai di bawah, ganti isinya
5. Gulir ke bawah, ketuk **Commit changes**

Setelah itu beri tahu saya, atau kalau penyambungan otomatis sudah aktif, situs
memperbarui dirinya sendiri dalam waktu sekitar satu menit.

Tidak ada yang bisa rusak permanen. Setiap perubahan tersimpan di riwayat dan bisa
dikembalikan.

---

## 1. Susunan pemain

Cari baris ini:

```ts
export const roster: Player[] = [];
```

Ganti menjadi, dengan nama yang sebenarnya:

```ts
export const roster: Player[] = [
  {
    ign: "NamaDalamGame",
    realName: "Nama Lengkap",
    role: "Gold Laner",
    division: "MLBB",
    verified: true,
  },
  {
    ign: "NamaDalamGame2",
    realName: "Nama Lengkap 2",
    role: "Jungler",
    division: "MLBB",
    verified: true,
  },
];
```

`realName` boleh dihapus kalau pemainnya tidak ingin nama aslinya tampil. Posisi yang
lazim: Gold Laner, EXP Laner, Mid Laner, Jungler, Roamer.

Begitu larik ini terisi, halaman roster berhenti menampilkan keadaan kosong dan
otomatis beralih ke kartu pemain. Slot terbuka menyesuaikan sendiri.

---

## 2. Hasil turnamen

Cari baris ini:

```ts
export const achievements: Achievement[] = [];
```

Ganti menjadi:

```ts
export const achievements: Achievement[] = [
  {
    year: "2024",
    event: "Nama lengkap turnamennya",
    placement: "Juara 2",
    division: "MLBB",
    verified: true,
    source: "https://tautan-bukti-atau-pengumuman",
  },
];
```

### Bagian yang perlu kehati-hatian

Bio TikTok @nng_esport mencantumkan tiga gelar: runner-up MSC 2023, MSC 2024, dan
MPL 2019. Catatan penyelenggara menyebut nama lain untuk ketiganya, jadi ketiganya
tidak diterbitkan di situs.

Kalau yang dimaksud sebenarnya turnamen komunitas atau tingkat daerah yang namanya
mirip, tulis **nama lengkap ajangnya**, bukan singkatannya. Contoh yang aman:

```ts
  {
    year: "2023",
    event: "Turnamen Komunitas MLBB Jayapura",
    placement: "Juara 2",
    division: "MLBB",
    verified: false,
  },
```

Menulis "MSC 2023" tanpa keterangan tambahan berarti mengklaim turnamen resmi
Moonton berhadiah jutaan dolar, dan sponsor mana pun bisa membantahnya dalam lima
menit. Nama panjang yang jujur jauh lebih kuat daripada singkatan yang gugur saat
diperiksa.

Kalau memang belum ada gelar, biarkan kosong. Halaman prestasi sudah punya empat
capaian di luar arena yang semuanya bersumber dan bisa dibuka sendiri.

---

## 3. Katalog toko

Cari `storeCategories`, lalu ganti isi tiap kelompok:

```ts
export const storeCategories = [
  {
    name: "Jersey pertandingan",
    detail: "Bahan dry-fit, ukuran S sampai XXL, harga mulai Rp185.000",
  },
];
```

Begitu `detail` berisi keterangan sebenarnya, hapus juga penanda kuning dengan
mengubah bagian yang menuliskan "Menunggu konfirmasi" di `src/app/toko/page.tsx`.
Kalau tidak yakin, cukup isi `detail` saja lalu beri tahu saya.

---

## Yang sebaiknya jangan diubah sendiri

- Angka pengikut dan unggahan. Semuanya punya tanggal pengambilan, dan mengubah
  angkanya tanpa mengubah tanggalnya membuat keterangan itu tidak lagi benar.
- Berkas di `arsip/`. Isinya salinan keadaan pada tanggal tertentu, dan gunanya
  justru karena tidak pernah disunting.
- `disputedClaims`. Catatan itu sengaja ada supaya temuannya tidak hilang.

---

## Kalau ragu

Kirim saja datanya dalam bentuk apa pun, termasuk foto tulisan tangan atau pesan
suara yang ditranskrip. Menyusunnya ke dalam berkas ini pekerjaan lima menit, dan
lebih baik dikerjakan oleh yang paham strukturnya daripada dipaksakan lewat layar
ponsel.
