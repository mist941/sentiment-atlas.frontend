import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import styles from "./layout.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable}`}>
        <div className={styles.layout}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
