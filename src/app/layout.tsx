import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DTA F&IO",
  description:
    "Descubre DTA F&IO: la solución integral de forecasting y optimización de inventarios que mejora la precisión de tus pronósticos, reduce costos y maximiza la eficiencia operativa. Impulsa la toma de decisiones estratégicas con tecnología avanzada y análisis predictivo.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
