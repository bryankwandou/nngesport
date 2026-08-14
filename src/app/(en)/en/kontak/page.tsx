import type { Metadata } from "next";
import { Kontak, meta } from "@/views/Kontak";
import { altLanguages } from "@/lib/meta";

export const metadata: Metadata = { ...meta.en, alternates: altLanguages("contact") };

export default function Page() {
  return <Kontak lang="en" />;
}
