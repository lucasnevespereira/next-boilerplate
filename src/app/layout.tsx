import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeClient from "@/contexts/ThemeClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Boilerplate",
  description: "boilerplate for next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeClient>
            <Header />
            {children}
            <Footer />
          </ThemeClient>
        </ThemeProvider>
      </body>
    </html >
  );
}
