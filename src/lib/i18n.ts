/**
 * Dua bahasa, satu susunan halaman.
 *
 * Indonesia adalah bahasa asalnya dan tetap tinggal di akar alamat, supaya
 * tautan yang sudah beredar di bio TikTok tidak mati. Inggris menempati awalan
 * /en. Pilihan ini disengaja: memindahkan bahasa asal ke /id akan mematikan
 * setiap tautan lama sekaligus, dan tidak ada yang didapat sebagai gantinya.
 */

export const languages = ["id", "en"] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = "id";

/** Kode yang dikenali atribut lang dan hreflang, berbeda dari kode ruas kita. */
export const htmlLocale: Record<Lang, string> = {
  id: "id-ID",
  en: "en-US",
};

export const languageName: Record<Lang, string> = {
  id: "Indonesia",
  en: "English",
};

/**
 * Ruas alamat tiap halaman, sama di kedua bahasa.
 *
 * Ruasnya sengaja tidak ikut diterjemahkan. Pembaca Inggris yang mendarat di
 * /en/sejarah tetap sampai ke halaman yang benar, sementara menerjemahkan ruas
 * berarti menggandakan jumlah alamat yang bisa putus tanpa imbalan yang
 * sepadan. Yang penting alamat Indonesia yang sudah beredar tetap hidup.
 */
export const routes = {
  home: "",
  history: "sejarah",
  roster: "roster",
  achievements: "prestasi",
  store: "toko",
  channels: "kanal",
  contact: "kontak",
} as const;

export type RouteKey = keyof typeof routes;
export const routeKeys = Object.keys(routes) as RouteKey[];

/** Alamat lengkap sebuah halaman dalam bahasa tertentu, siap dipakai di href. */
export function path(key: RouteKey, lang: Lang): string {
  const seg = routes[key];
  const base = lang === defaultLang ? "" : `/${lang}`;
  return seg ? `${base}/${seg}` : base || "/";
}

/** Menebak halaman mana yang sedang dibuka dari alamat yang tampil di peramban. */
export function routeFromPath(pathname: string): RouteKey {
  const clean = pathname.replace(/^\/en(?=\/|$)/, "").replace(/^\/|\/$/g, "");
  if (!clean) return "home";
  return routeKeys.find((k) => routes[k] === clean) ?? "home";
}

export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "id";
}
