import type { Metadata } from "next";
import { Sejarah, meta } from "@/views/Sejarah";
import { altLanguages } from "@/lib/meta";

export const metadata: Metadata = { ...meta.id, alternates: altLanguages("history") };

export default function Page() {
  return <Sejarah lang="id" />;
}
