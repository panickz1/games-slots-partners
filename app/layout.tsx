import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { SITE_URL } from "@/lib/config";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CookieBanner } from "@/components/sections/CookieBanner";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GameSlots Partners | Casino Affiliate Program - RevShare & CPA",
    template: "%s | GameSlots Partners",
  },
  description:
    "Join GameSlots Partners, the official casino affiliate program of GameSlots. Earn up to 50% lifetime RevShare or CPA, with fast payouts and real-time stats.",
  openGraph: {
    title: "GameSlots Partners | Casino Affiliate Program",
    description: "RevShare, CPA and Hybrid deals with weekly payouts.",
    type: "website",
    siteName: "GameSlots Partners",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <head>
        {/* Lets CSS hide scroll-reveal content only when JS will reveal it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
