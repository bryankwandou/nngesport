import type { Metadata } from "next";
import { Roster, meta } from "@/views/Roster";
import { altLanguages } from "@/lib/meta";

export const metadata: Metadata = { ...meta.en, alternates: altLanguages("roster") };

export default function Page() {
  return <Roster lang="en" />;
}
