import type { Metadata } from "next";
import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { buildMetadata } from "@/lib/meta";

export { viewport } from "@/lib/meta";

export const metadata: Metadata = buildMetadata("id");

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="id">{children}</RootShell>;
}
