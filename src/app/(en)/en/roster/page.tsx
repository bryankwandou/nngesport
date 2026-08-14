import type { Metadata } from "next";
import { Roster, meta } from "@/views/Roster";

export const metadata: Metadata = meta.en;

export default function Page() {
  return <Roster lang="en" />;
}
