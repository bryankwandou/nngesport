import type { Metadata } from "next";
import { Kontak, meta } from "@/views/Kontak";

export const metadata: Metadata = meta.id;

export default function Page() {
  return <Kontak lang="id" />;
}
