import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ThemeProvider} from "@/contexts/theme/provider";
import ThemeClient from "@/contexts/theme/client";
import {ToasterProvider} from "@/contexts/toaster/provider";
import ToasterClient from "@/contexts/toaster/client";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Next Boilerplate",
    description: "boilerplate for next.js",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>
        <ThemeProvider>
            <ThemeClient>
                <Header/>
                <ToasterProvider>
                    <ToasterClient>
                        {children}
                    </ToasterClient>
                </ToasterProvider>
                <Footer/>
            </ThemeClient>
        </ThemeProvider>
        </body>
        </html>
    );
}
