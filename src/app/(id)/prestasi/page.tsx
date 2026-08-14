import type { Metadata } from "next";
import { Prestasi, meta } from "@/views/Prestasi";

export const metadata: Metadata = meta.id;

export default function Page() {
  return <Prestasi lang="id" />;
}
