import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const myFont = localFont({ src: "fonts/SF.otf" });

export const metadata: Metadata = {
  title: "ByteBoutique",
  description: "Where innovation meets style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className}`}>
        <Navbar />
        <Hero />
        <Footer />
        {children}
      </body>
    </html>
  );
}
