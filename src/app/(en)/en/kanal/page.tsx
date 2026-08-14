import type { Metadata } from "next";
import { Kanal, meta } from "@/views/Kanal";
import { altLanguages } from "@/lib/meta";

export const metadata: Metadata = { ...meta.en, alternates: altLanguages("channels") };

export default function Page() {
  return <Kanal lang="en" />;
}
