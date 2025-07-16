"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PopupWidget } from "./PopupWidget";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isWhite = pathname === "/contact-us";

    return (
        <ThemeProvider attribute="class">
            <Navbar isWhite={isWhite} />
            <main>{children}</main>
            <Footer />
            <PopupWidget />
        </ThemeProvider>
    );
}
