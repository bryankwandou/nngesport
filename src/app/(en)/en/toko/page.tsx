import type { Metadata } from "next";
import { Toko, meta } from "@/views/Toko";

export const metadata: Metadata = meta.en;

export default function Page() {
  return <Toko lang="en" />;
}
