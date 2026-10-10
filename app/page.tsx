import { Hero } from "@/components/sections/Hero";
import { Product } from "@/components/sections/Product";
import { TermsBand } from "@/components/sections/TermsBand";
import { Commissions } from "@/components/sections/Commissions";
import { GetStarted } from "@/components/sections/GetStarted";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <TermsBand />
      <Product />
      <Commissions />
      <GetStarted />
      <Faq />
      <FinalCta />
    </main>
  );
}
