import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { cookies } from "@/content/legal";

export const metadata: Metadata = { title: cookies.title, description: cookies.description };

export default function Page() {
  return <LegalPage doc={cookies} />;
}
