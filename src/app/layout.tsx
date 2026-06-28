import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ConsultationWidget } from "@/components/layout/ConsultationWidget";

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
    default: "KO CLINIC | Premium Aesthetics by Dr. Vikas Singh | Kosmedixx",
    template: "%s | KO CLINIC",
  },
  description:
    "KO CLINIC by Kosmedixx — Dr. Vikas Singh. Luxury hair restoration, skin rejuvenation, regenerative medicine & cosmetic dermatology. 20+ years of transforming confidence.",
  keywords: [
    "KO CLINIC",
    "Kosmedixx",
    "Dr Vikas Singh",
    "hair transplant",
    "cosmetic dermatology",
    "aesthetic clinic",
    "botox",
    "fillers",
    "PRP therapy",
    "exosome therapy",
    "thread lift",
    "skin rejuvenation",
    "Bengaluru",
    "India",
  ],
  openGraph: {
    title: "KO CLINIC | Premium Aesthetics by Dr. Vikas Singh",
    description:
      "Transforming Confidence Through Science & Art. Luxury hair, skin & aesthetic treatments.",
    url: "https://koclinic.co",
    siteName: "KO CLINIC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KO CLINIC | Premium Aesthetics",
    description:
      "Transforming Confidence Through Science & Art.",
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
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${playfair.variable} ${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-[#241710] text-[#F6F0EA] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ConsultationWidget />
      </body>
    </html>
  );
}
