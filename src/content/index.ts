import type { Lang } from "@/lib/i18n";
import * as id from "./nng";
import * as en from "./nng.en";

export type { Player, Achievement } from "./nng";

/**
 * Isi situs dalam bahasa yang diminta.
 *
 * Kedua berkas diimpor apa adanya, bukan dimuat sesuai kebutuhan. Seluruh
 * halaman dibangun sebagai berkas statis saat build, jadi tidak ada pembaca
 * yang menanggung ongkos mengunduh bahasa yang tidak ia buka.
 */
export function getContent(lang: Lang) {
  return lang === "en" ? en : id;
}

export type Content = ReturnType<typeof getContent>;
