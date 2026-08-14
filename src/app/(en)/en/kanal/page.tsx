import type { Metadata } from "next";
import { Kanal, meta } from "@/views/Kanal";

export const metadata: Metadata = meta.en;

export default function Page() {
  return <Kanal lang="en" />;
}
