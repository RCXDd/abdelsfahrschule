import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abdels Fahrschule Düsseldorf – Führerschein ohne Stress, auch wenn dein Deutsch noch nicht perfekt ist",
  description:
    "Führerschein in Düsseldorf – mit geduldigen Fahrlehrern, klarer Struktur und mehrsprachiger Unterstützung. Ideal, wenn du Prüfungsangst hast, schon durchgefallen bist oder Deutsch nicht deine erste Sprache ist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${baloo.variable} ${nunito.variable} antialiased bg-[#FFEFCB] text-[#0C1D32] font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
