import type { Metadata } from "next";
import { Toko, meta } from "@/views/Toko";

export const metadata: Metadata = meta.id;

export default function Page() {
  return <Toko lang="id" />;
}
