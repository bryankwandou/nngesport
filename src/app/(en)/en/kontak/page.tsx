import type { Metadata } from "next";
import { Kontak, meta } from "@/views/Kontak";

export const metadata: Metadata = meta.en;

export default function Page() {
  return <Kontak lang="en" />;
}
