import type { Metadata } from "next";
import { Sejarah, meta } from "@/views/Sejarah";

export const metadata: Metadata = meta.en;

export default function Page() {
  return <Sejarah lang="en" />;
}
