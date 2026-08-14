import type { Metadata } from "next";
import { Toko, meta } from "@/views/Toko";
import { altLanguages } from "@/lib/meta";

export const metadata: Metadata = { ...meta.id, alternates: altLanguages("store") };

export default function Page() {
  return <Toko lang="id" />;
}
