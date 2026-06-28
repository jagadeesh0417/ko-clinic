import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ConsultationWidget } from "@/components/layout/ConsultationWidget";

export const metadata: Metadata = {
  title: {
    default: "KO Clinic | Premium Aesthetics by Dr. Vikas Singh | Kosmedixx",
    template: "%s | KO Clinic",
  },
  description:
    "KO Clinic by Kosmedixx — Dr. Vikas Singh. Luxury hair restoration, skin rejuvenation, regenerative medicine & cosmetic dermatology. 20+ years of transforming confidence.",
  keywords: [
    "KO Clinic",
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
    title: "KO Clinic | Premium Aesthetics by Dr. Vikas Singh",
    description:
      "Transforming Confidence Through Science & Art. Luxury hair, skin & aesthetic treatments.",
    url: "https://koclinic.co",
    siteName: "KO Clinic",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KO Clinic | Premium Aesthetics",
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
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#080808] text-[#FAFAFA] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ConsultationWidget />
      </body>
    </html>
  );
}
