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
  displayName: "NNG FAM",
  tagline: "Dari Abepura, menuju panggung yang lebih besar",
  /** Tertulis "Est. 2017" di bio akun resmi @nng_esport. */
  founded: "2017",
  base: "Abepura, Jayapura, Papua",
  country: "Indonesia",
  intro:
    "NNG tumbuh dari kebiasaan sederhana: main, rekam, unggah, ulangi. Bukan lahir dari " +
    "suntikan modal atau ruang rapat, melainkan dari koneksi seadanya di Abepura dan " +
    "kemauan untuk tetap muncul setiap hari selama bertahun-tahun.",
  longIntro:
    "Lima puluh tujuh ribu unggahan di tiga kanal bukan angka yang lahir dari satu video " +
    "viral. Angka itu dikumpulkan dari ribuan hari biasa yang tetap dikerjakan meski tidak " +
    "ada yang menonton, dari kanal yang pernah hilang kena penalti platform lalu dibuka " +
    "lagi dari nol pengikut, dan dari jarak Papua ke pusat industri yang diperlakukan " +
    "sebagai pekerjaan, bukan alasan.",
};

/**
 * Angka dari profil resmi.
 *
 * Ditarik langsung dari halaman profil TikTok pada tanggal di bawah. Angka semacam ini
 * bergerak terus, jadi tanggal pengambilannya ikut ditampilkan supaya pembaca tahu
 * seberapa segar datanya. Perbarui bersama-sama, jangan sebagian.
 */
export const snapshotDate = "8 Agustus 2026";

export const accountStats = {
  esport: {
    handle: "@nng_esport",
    nickname: "NNG FAM",
    followers: 9660,
    following: 6315,
    likes: 4428,
    videos: 8381,
    friends: 2751,
    avatar: "/img/nng-esport-avatar.jpg",
    bio: "NNG E-SPORT\nEst. 2017\nMLBB, PUBG, VALO",
    href: "https://www.tiktok.com/@nng_esport",
  },
  store: {
    handle: "@nng_store",
    nickname: "NNG Store",
    followers: 2307,
    following: 42,
    likes: 2050,
    videos: 6648,
    friends: 15,
    avatar: "/img/nng-store-avatar.jpg",
    bio: "NNG Store x @nayrbryanGaming Official\nNow or Never\nTokopedia, TikTok, Shopee",
    href: "https://www.tiktok.com/@nng_store",
  },
  /*
    Kanal pendiri, dan yang terbesar dari ketiganya.
    Bio aslinya juga memuat baris ucapan terima kasih atas 8,6 juta pelanggan.
    Angka itu tidak cocok dengan jumlah pengikut di platform ini dan tidak jelas
    merujuk ke kanal mana, jadi disimpan di arsip saja, tidak dipajang di halaman.
  */
  founder: {
    handle: "@nayrbryanGaming",
    nickname: "nayrbryanGaming",
    followers: 75100,
    following: 4778,
    likes: 358800,
    videos: 42800,
    friends: 2129,
    avatar: "/img/nayrbryangaming-avatar.jpg",
    bio: "Est 10 Jan 2018\nNNG Esport\nPembuat konten sejak 2010",
    href: "https://www.tiktok.com/@nayrbryangaming",
  },
};

/** Semboyan yang tertulis di bio @nng_store. */
export const motto = "Now or Never";

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

/**
 * Divisi.
 *
 * Tiga yang pertama disebut terang-terangan di bio @nng_esport sebagai cabang resmi.
 * Sisanya muncul di deskripsi kanal YouTube pendiri sebagai judul yang diisi, tapi
 * tidak dicantumkan sebagai divisi kompetitif, jadi dipisahkan.
 */
export const divisions = [
  {
    game: "Mobile Legends: Bang Bang",
    code: "MLBB",
    blurb:
      "Cabang paling ramai, dan satu-satunya yang sudah menghasilkan kemitraan kreator resmi.",
    competitive: true,
    verified: true,
    source: "https://www.tiktok.com/@nng_esport",
  },
  {
    game: "PUBG Mobile",
    code: "PUBG",
    blurb: "Judul paling awal yang mengisi kanal, bertahan sejak periode pertama.",
    competitive: true,
    verified: true,
    source: "https://www.tiktok.com/@nng_esport",
  },
  {
    game: "Valorant",
    code: "VALO",
    blurb:
      "Cabang termuda dan satu-satunya yang berjalan di komputer, bukan telepon genggam.",
    competitive: true,
    verified: true,
    source: "https://www.tiktok.com/@nng_esport",
  },
];

/** Judul lain yang mengisi kanal, di luar tiga cabang kompetitif di atas. */
export const otherTitles = [
  { game: "Free Fire", code: "FF" },
  { game: "Growtopia", code: "GT" },
  { game: "Genshin Impact", code: "GI" },
];

/**
 * Klaim yang tertulis di bio resmi tapi berbenturan dengan catatan penyelenggara.
 *
 * Bio @nng_esport mencantumkan "Runner up MSC 2023&2024" dan "Runner up MPL 2019".
 * Catatan resmi turnamen tersebut menyebut nama lain: runner-up MSC 2023 adalah
 * Blacklist International, runner-up MSC 2024 adalah Falcons AP.Bren. Selisih ini
 * dicatat di sini, bukan diterbitkan sebagai prestasi, karena satu klaim yang gugur
 * saat dicek sponsor akan menjatuhkan seluruh halaman.
 *
 * Larik ini sengaja tidak dirender di halaman mana pun. Ia ada supaya temuannya
 * tidak hilang dan bisa dibahas dengan pemilik organisasi.
 */
export const disputedClaims = [
  {
    claim: "Runner up MSC 2023",
    officialRecord: "Blacklist International",
    source: "https://en.wikipedia.org/wiki/2023_MLBB_Southeast_Asia_Cup",
  },
  {
    claim: "Runner up MSC 2024",
    officialRecord: "Falcons AP.Bren",
    source: "https://en.wikipedia.org/wiki/2024_MLBB_Mid_Season_Cup",
  },
  {
    claim: "Runner up MPL 2019",
    officialRecord: "Tidak ditemukan catatan NNG di arsip MPL mana pun",
    source: "https://en.wikipedia.org/wiki/Mobile_Legends:_Bang_Bang_Professional_League",
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
    title: "NNG E-Sport berdiri",
    body:
      "Tahun yang tercatat sebagai titik awal organisasi di bio akun resmi. Kanal panjang " +
      "pertama juga berjalan di tahun yang sama, dengan Growtopia dan PUBG mengisi " +
      "sebagian besar unggahan.",
    verified: true,
    source: "https://www.tiktok.com/@nng_esport",
  },
  {
    year: "2021",
    title: "Lini dagang dibuka",
    body:
      "Akun @nng_store mulai jalan sebagai sisi niaga, menjual lewat Tokopedia, TikTok, " +
      "dan Shopee dengan semboyan Now or Never.",
    verified: true,
    source: "https://www.tiktok.com/@nng_store",
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
    stat: "9.660 pengikut · 8.381 unggahan",
    primary: true,
    verified: true,
    source: "https://www.tiktok.com/@nng_esport",
  },
  {
    platform: "TikTok",
    handle: "@nng_store",
    href: "https://www.tiktok.com/@nng_store",
    note: "Lini dagang",
    stat: "2.307 pengikut · 6.648 unggahan",
    primary: true,
    verified: true,
    source: "https://www.tiktok.com/@nng_store",
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
      "Lima puluh tujuh ribu unggahan tidak dibangun oleh satu video viral, tetapi oleh " +
      "ribuan hari biasa yang tetap dikerjakan meski tidak ada yang menonton.",
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
