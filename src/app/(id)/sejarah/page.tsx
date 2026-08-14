import type { Metadata } from "next";
import { Sejarah, meta } from "@/views/Sejarah";

export const metadata: Metadata = meta.id;

export default function Page() {
  return <Sejarah lang="id" />;
}
