import type { Metadata } from "next";
import { Kanal, meta } from "@/views/Kanal";

export const metadata: Metadata = meta.id;

export default function Page() {
  return <Kanal lang="id" />;
}
