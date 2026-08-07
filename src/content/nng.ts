/**
 * Sumber tunggal seluruh isi situs NNG Esport.
 *
 * Aturan main berkas ini:
 *  - `verified: true`  -> fakta yang ditarik dari sumber daring, tautannya dicantumkan.
 *  - `verified: false` -> kerangka yang menunggu data resmi dari tim. Komponen menandainya
 *                         sebagai belum dirilis, bukan memajangnya sebagai data final.
 *
 * Jangan menaikkan entri menjadi `verified: true` tanpa menempelkan tautan di `source`.
 */

export const site = {
  url: "https://nngesport.vercel.app",
  name: "NNG Esport",
  locale: "id_ID",
};

export const org = {
  name: "NNG Esport",
  shortName: "NNG",
  tagline: "Dari Abepura, menuju panggung yang lebih besar",
  founded: "2010",
  base: "Abepura, Jayapura, Papua",
  country: "Indonesia",
  intro:
    "NNG tumbuh dari kebiasaan sederhana: main, rekam, unggah, ulangi. Bukan lahir dari " +
    "suntikan modal atau ruang rapat, melainkan dari koneksi seadanya di Abepura dan " +
    "kemauan untuk tetap muncul setiap hari selama lebih dari satu dekade.",
  longIntro:
    "Enam belas tahun bukan angka yang lahir dari satu video viral. Angka itu dikumpulkan " +
    "dari ribuan hari biasa yang tetap dikerjakan meski tidak ada yang menonton, dari tiga " +
    "kanal yang hilang kena penalti platform lalu dibuka lagi dari nol pengikut, dan dari " +
    "jarak Papua ke pusat industri yang diperlakukan sebagai pekerjaan, bukan alasan.",
};

/**
 * Susunan kepemimpinan mengikuti keterangan pemilik organisasi.
 *
 * Catatan lapangan: profil Threads @bryan_kwandou menuliskan dirinya sebagai
 * "Founder and CEO of NNG E-Sport". Keterangan itu berbeda dengan susunan di bawah
 * dan disimpan apa adanya di properti `note` supaya tidak hilang.
 */
export const leadership = [
  {
    role: "Founder & CEO",
    handle: "nayrbryanGaming",
    displayName: "nayrbryanGaming",
    legalName: "Muhammad S. Vino Bryan Soeharto",
    initials: "NB",
    bio:
      "Wajah yang paling sering terlihat di kanal NNG. Mengisi YouTube sejak 2017 dan TikTok " +
      "sejak 2018, dengan rentang materi mulai dari Growtopia dan PUBG sampai Genshin Impact. " +
      "Belakangan waktunya terbagi ke siniar, templat CapCut, karya NFT, dan VTubing.",
    quote: "Membangun konsistensi, bukan sensasi.",
    verified: true,
    source: "https://www.youtube.com/@nayrbryanGamingOfficial",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/@nayrbryanGamingOfficial" },
      { label: "TikTok", href: "https://www.tiktok.com/@nayrbryangaming" },
      { label: "Instagram", href: "https://www.instagram.com/nayrbryan_gaming/" },
      { label: "Threads", href: "https://www.threads.com/@nayrbryan_gaming" },
      { label: "X", href: "https://x.com/GamingNayrbryan" },
      { label: "objkt", href: "https://objkt.com/users/tz2LB1bnJNcyQe5Fy89XJKvhCcDfovpZ2gi5" },
    ],
    stats: [
      { label: "Pengikut Instagram", value: "1.516" },
      { label: "Pengikut Threads", value: "204" },
      { label: "Tahun berkarya", value: "16" },
    ],
  },
  {
    role: "Co-Founder",
    handle: "bryan_kwandou",
    displayName: "Bryan Kwandou",
    initials: "BK",
    bio:
      "Menyebut dirinya pembuat konten sejak 2010. Di luar NNG ia mengerjakan streaming, " +
      "pekerjaan lepas, karya NFT, dan fotografi.",
    quote:
      "Juara sejati tidak berlatih sampai berhasil sekali. Ia berlatih sampai sulit untuk gagal.",
    note:
      "Bio Threads yang bersangkutan menuliskan jabatan Founder dan CEO NNG E-Sport.",
    verified: true,
    source: "https://www.threads.com/@bryan_kwandou",
    links: [
      { label: "Threads", href: "https://www.threads.com/@bryan_kwandou" },
      { label: "Instagram", href: "https://www.instagram.com/bryan_kwandou/" },
    ],
    stats: [
      { label: "Pengikut Threads", value: "132" },
      { label: "Tahun berkarya", value: "16" },
    ],
  },
];

/** Judul permainan yang namanya muncul di deskripsi kanal resmi. */
export const divisions = [
  {
    game: "Mobile Legends: Bang Bang",
    code: "MLBB",
    blurb: "Divisi paling ramai. Menjadi mitra kreator resmi lewat kerja sama 2025.",
    verified: true,
  },
  {
    game: "PUBG Mobile",
    code: "PUBGM",
    blurb: "Salah satu judul paling awal yang mengisi kanal sejak periode 2017.",
    verified: true,
  },
  {
    game: "Free Fire",
    code: "FF",
    blurb: "Materi cepat, cocok untuk format pendek yang mendominasi TikTok.",
    verified: true,
  },
  {
    game: "Growtopia",
    code: "GT",
    blurb: "Judul yang menemani awal kanal, termasuk seri giveaway.",
    verified: true,
  },
  {
    game: "Genshin Impact",
    code: "GI",
    blurb: "Sisi eksplorasi dan naratif dari daftar tayang NNG.",
    verified: true,
  },
];

export const timeline = [
  {
    year: "2010",
    title: "Titik nol",
    body:
      "Kebiasaan membuat konten dimulai. Belum ada nama tim, belum ada lambang, hanya " +
      "rekaman dari apa yang sedang dimainkan.",
    verified: true,
    source: "https://www.threads.com/@bryan_kwandou",
  },
  {
    year: "2017",
    title: "Pintu YouTube dibuka",
    body:
      "Kanal panjang pertama berjalan. Growtopia dan PUBG mengisi sebagian besar unggahan awal.",
    verified: true,
    source: "https://www.youtube.com/@nayrbryanGamingOfficial",
  },
  {
    year: "2018",
    title: "Pindah ritme ke TikTok",
    body:
      "Format pendek dicoba dan ternyata jauh lebih cocok untuk potongan permainan " +
      "ketimbang video panjang.",
    verified: true,
    source: "https://www.youtube.com/@nayrbryanGamingOfficial",
  },
  {
    year: "2024",
    title: "Bangun ulang dari nol",
    body:
      "Tiga kanal terdahulu hilang kena penalti platform. Kanal yang berjalan sekarang " +
      "adalah hasil memulai lagi dari satu pengikut.",
    verified: true,
    source: "https://www.youtube.com/@nayrbryanGamingOfficial",
  },
  {
    year: "2024",
    title: "Cabang siniar dan templat",
    body:
      "Siniar mulai tayang di Spotify. Templat CapCut buatan sendiri dipakai kreator lain.",
    verified: true,
    source: "https://www.youtube.com/@nayrbryanGamingOfficial",
  },
  {
    year: "2025",
    title: "Kerja sama Mobile Legends",
    body:
      "Unggahan resmi menandai kemitraan kreator dengan Mobile Legends: Bang Bang.",
    verified: true,
    source: "https://www.threads.com/@nayrbryan_gaming/post/DIij_H1xG51/",
  },
  {
    year: "2026",
    title: "NNG berdiri sebagai organisasi",
    body:
      "Jabatan kepemimpinan mulai dicantumkan terbuka. Kanal @nng_esport dan lini dagang " +
      "@nng_store berjalan berdampingan.",
    verified: true,
    source: "https://www.threads.com/@bryan_kwandou",
  },
];

export const channels = [
  {
    platform: "TikTok",
    handle: "@nng_esport",
    href: "https://www.tiktok.com/@nng_esport",
    note: "Kanal utama organisasi",
    primary: true,
    verified: false,
  },
  {
    platform: "TikTok",
    handle: "@nng_store",
    href: "https://www.tiktok.com/@nng_store",
    note: "Lini dagang",
    primary: true,
    verified: false,
  },
  {
    platform: "Instagram",
    handle: "@nng_store",
    href: "https://www.instagram.com/nng_store/",
    note: "Etalase produk",
    primary: true,
    verified: false,
  },
  {
    platform: "TikTok",
    handle: "@nayrbryanGaming",
    href: "https://www.tiktok.com/@nayrbryangaming",
    note: "Kanal pendiri",
    verified: true,
    source: "https://www.tiktok.com/@nayrbryangaming/video/7460425277848521992",
  },
  {
    platform: "YouTube",
    handle: "nayrbryanGaming",
    href: "https://www.youtube.com/@nayrbryanGamingOfficial",
    note: "Arsip video panjang",
    verified: true,
  },
  {
    platform: "Instagram",
    handle: "@nayrbryan_gaming",
    href: "https://www.instagram.com/nayrbryan_gaming/",
    note: "Catatan harian pendiri",
    verified: true,
  },
  {
    platform: "Threads",
    handle: "@bryan_kwandou",
    href: "https://www.threads.com/@bryan_kwandou",
    note: "Catatan co-founder",
    verified: true,
  },
  {
    platform: "objkt",
    handle: "Koleksi NFT",
    href: "https://objkt.com/users/tz2LB1bnJNcyQe5Fy89XJKvhCcDfovpZ2gi5",
    note: "Karya digital di jaringan Tezos",
    verified: true,
  },
];

/**
 * Roster resmi. Sengaja kosong.
 *
 * Susunan pemain tidak terbit di sumber daring mana pun yang bisa dijangkau tanpa login,
 * dan mengarang nama pemain untuk situs resmi adalah cara tercepat merusak kepercayaan
 * calon sponsor. Isi larik ini begitu tim menyerahkan daftarnya.
 */
export type Player = {
  ign: string;
  realName?: string;
  role: string;
  division: string;
  photo?: string;
  joined?: string;
  country?: string;
};

export const roster: Player[] = [];

/** Kerangka posisi yang lazim dipakai divisi MLBB, dipajang sebagai slot terbuka. */
export const openSlots = [
  { role: "Gold Laner", division: "MLBB" },
  { role: "EXP Laner", division: "MLBB" },
  { role: "Mid Laner", division: "MLBB" },
  { role: "Jungler", division: "MLBB" },
  { role: "Roamer", division: "MLBB" },
];

export type Achievement = {
  year: string;
  event: string;
  placement: string;
  division: string;
  source?: string;
};

/** Torehan turnamen. Kosong dengan alasan yang sama seperti roster. */
export const achievements: Achievement[] = [];

/** Capaian di luar arena turnamen yang jejaknya bisa ditelusuri. */
export const milestones = [
  {
    label: "Mitra kreator Mobile Legends",
    year: "2025",
    detail: "Kerja sama resmi dengan Mobile Legends: Bang Bang.",
    source: "https://www.threads.com/@nayrbryan_gaming/post/DIij_H1xG51/",
  },
  {
    label: "Siniar Spotify",
    year: "2024",
    detail: "Kanal audio berjalan berdampingan dengan kanal video.",
    source: "https://www.youtube.com/@nayrbryanGamingOfficial",
  },
  {
    label: "Templat CapCut",
    year: "2024",
    detail: "Templat sunting buatan sendiri dipakai kreator lain.",
    source: "https://www.youtube.com/@nayrbryanGamingOfficial",
  },
  {
    label: "Karya NFT di Tezos",
    year: "2024",
    detail: "Koleksi digital terbit di objkt.",
    source: "https://objkt.com/users/tz2LB1bnJNcyQe5Fy89XJKvhCcDfovpZ2gi5",
  },
];

export const values = [
  {
    index: "01",
    title: "Muncul setiap hari",
    body:
      "Enam belas tahun konten tidak dibangun oleh satu video viral, tetapi oleh ribuan " +
      "hari biasa yang tetap dikerjakan meski tidak ada yang menonton.",
  },
  {
    index: "02",
    title: "Bangun ulang tanpa drama",
    body:
      "Tiga kanal pernah hilang. Jawabannya bukan mengeluh di kolom komentar, melainkan " +
      "membuka kanal baru dan memulai lagi dari satu pengikut.",
  },
  {
    index: "03",
    title: "Papua sebagai titik berangkat",
    body:
      "Berbasis di Abepura, bukan Jakarta. Jarak ke pusat industri diperlakukan sebagai " +
      "pekerjaan yang harus diselesaikan, bukan alasan untuk berhenti.",
  },
  {
    index: "04",
    title: "Angka apa adanya",
    body:
      "Setiap capaian di halaman ini membawa tautan sumbernya. Yang belum punya sumber " +
      "dibiarkan kosong sampai ada.",
  },
];

export const nav = [
  { label: "Beranda", href: "/" },
  { label: "Sejarah", href: "/sejarah" },
  { label: "Roster", href: "/roster" },
  { label: "Prestasi", href: "/prestasi" },
  { label: "Toko", href: "/toko" },
  { label: "Kanal", href: "/kanal" },
  { label: "Kontak", href: "/kontak" },
];

/**
 * Lini dagang.
 *
 * Daftar barang belum terbit di sumber terbuka. Yang bisa dipastikan hanya keberadaan
 * dua akun @nng_store di TikTok dan Instagram. Kategori di bawah adalah kerangka lazim
 * merchandise tim, ditandai terbuka sampai katalog resminya diserahkan.
 */
export const storeChannels = [
  {
    platform: "Instagram",
    handle: "@nng_store",
    href: "https://www.instagram.com/nng_store/",
    note: "Etalase produk",
  },
  {
    platform: "TikTok",
    handle: "@nng_store",
    href: "https://www.tiktok.com/@nng_store",
    note: "Peragaan barang dan siaran belanja",
  },
];

export const storeCategories = [
  {
    name: "Jersey pertandingan",
    detail:
      "Seragam yang dipakai saat bertanding, biasanya terbit mengikuti musim kompetisi.",
  },
  {
    name: "Kaos harian",
    detail: "Potongan lebih longgar dengan lambang yang lebih kecil, untuk dipakai sehari-hari.",
  },
  {
    name: "Penutup kepala",
    detail: "Topi dan kupluk dengan bordir lambang perisai.",
  },
  {
    name: "Perlengkapan meja",
    detail: "Alas tetikus, gantungan kunci, dan tempelan yang menyertai pembelian.",
  },
];

export const contact = {
  general: "Kerja sama, sponsor, dan permintaan wawancara lewat pesan langsung di kanal resmi.",
  preferred: [
    { label: "TikTok @nng_esport", href: "https://www.tiktok.com/@nng_esport" },
    { label: "Instagram @nng_store", href: "https://www.instagram.com/nng_store/" },
    { label: "Threads @bryan_kwandou", href: "https://www.threads.com/@bryan_kwandou" },
  ],
};
