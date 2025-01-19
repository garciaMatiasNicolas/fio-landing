"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "DTA F&IO | Forecasting & Inventario",
  description:
    "Descubre DTA F&IO: la solución integral de forecasting y optimización de inventarios que mejora la precisión de tus pronósticos, reduce costos y maximiza la eficiencia operativa. Impulsa la toma de decisiones estratégicas con tecnología avanzada y análisis predictivo.",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isWhite = pathname === "/contact-us";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar isWhite={isWhite} />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
