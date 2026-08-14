import type { Metadata } from "next";
import { Beranda } from "@/views/Beranda";
import { altLanguages } from "@/lib/meta";

export const metadata: Metadata = { alternates: altLanguages("home") };

export default function Page() {
  return <Beranda lang="id" />;
}
