import type { Metadata } from "next";
import { Prestasi, meta } from "@/views/Prestasi";
import { altLanguages } from "@/lib/meta";

export const metadata: Metadata = { ...meta.en, alternates: altLanguages("achievements") };

export default function Page() {
  return <Prestasi lang="en" />;
}
