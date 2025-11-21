import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

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
  title: "Abdels Fahrschule - Bleib ruuuhig und entspannt",
  description: "Deine Fahrschule für eine ruhige, geduldige und kompetente Ausbildung. Keine Hektik, kein Stress.",
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
        {children}
      </body>
    </html>
  );
}
