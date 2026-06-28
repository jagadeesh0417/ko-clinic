import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ConsultationWidget } from "@/components/layout/ConsultationWidget";
import { Preloader } from "@/components/layout/Preloader";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-section",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-button",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KO CLINICS | Global Luxury Healthcare & Wellness Concierge",
    template: "%s | KO CLINICS",
  },
  description:
    "KO CLINICS — an ultra-luxury international healthcare platform connecting discerning patients with the world's finest clinics. Destination-first concierge medical travel across Dubai, London, Singapore, Paris, New York, Hong Kong, Sydney, Bahrain & Abu Dhabi.",
  keywords: [
    "KO CLINICS",
    "luxury healthcare",
    "medical concierge",
    "healthcare travel",
    "destination medicine",
    "premium clinics",
    "international healthcare",
    "wellness retreat",
    "Dubai healthcare",
    "London medical",
    "Singapore clinic",
    "Paris healthcare",
    "New York medical",
    "Hong Kong clinic",
    "Sydney healthcare",
    "Bahrain medical",
    "Abu Dhabi clinic",
  ],
  openGraph: {
    title: "KO CLINICS | Global Luxury Healthcare & Wellness Concierge",
    description:
      "World-class healthcare, reimagined. Destination-first luxury medical concierge across 9 global cities.",
    url: "https://koclinics.com",
    siteName: "KO CLINICS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KO CLINICS | Global Luxury Healthcare",
    description:
      "World-class healthcare, reimagined. Destination-first luxury medical concierge across 9 global cities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-ivory text-text-primary antialiased">
        <Preloader />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <ConsultationWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
