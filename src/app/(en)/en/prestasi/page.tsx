import type { Metadata } from "next";
import { Prestasi, meta } from "@/views/Prestasi";

export const metadata: Metadata = meta.en;

export default function Page() {
  return <Prestasi lang="en" />;
}
