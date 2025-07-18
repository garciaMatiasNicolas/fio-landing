import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DTA F&IO | Forecasting y Optimización de Inventario",
  description:
    "Mejora tus operaciones con DTA F&IO: forecasting preciso, IA, reposición inteligente y análisis predictivo. Aumenta la eficiencia operativa y reduce costos.",
  icons: {
    icon: "/ICON.ico",
  },
  openGraph: {
    title: "DTA F&IO - Forecasting con IA y Optimización de Inventario",
    description:
      "Plataforma avanzada de predicción de demanda y gestión de inventario impulsada por IA.",
    url: "https://fio.dtalogistica.com",
    siteName: "DTA F&IO",
    images: [
      {
        url: "https://fio.dtalogistica.com/og-image.jpg", // asegurate de tener una imagen optimizada
        width: 1200,
        height: 630,
        alt: "Forecasting y Optimización de Inventario",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DTA F&IO - Forecasting y Optimización de Inventario",
    description:
      "Forecasting de demanda, IA y reposición inteligente para empresas líderes.",
    images: ["https://fio.dtalogistica.com/og-image.jpg"],
    site: "@tuusuario",
    creator: "@tuusuario",
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
